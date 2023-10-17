<?php
include 'connect.php';
include 'functions.php';
$_POST = json_decode(file_get_contents('php://input'), true);

if (isset($_POST['dataClass'])) {
    $dataClass = $_POST['dataClass'];
}

if (isset($_POST['all']) && $_POST['all'] === false) {


    // Query to fetch questions and their answers
    $sql = "SELECT q.id, q.question, a.answers, t.name as typeOfQuestion , s.name 
FROM questions q 
JOIN questions_subject qs 
ON  q.id = qs.questionid 
JOIN answers a 
ON q.id = a.questionid 
JOIN typeOfQuestions t 
ON q.typeOfQuestionId = t.id 
JOIN subject s ON qs.subjectid = s.id 
WHERE s.name = :dataClass 
AND q.status > 0 
AND a.status > 0 
ORDER BY q.id asc";



} else if (isset($_POST['all']) && $_POST['all'] === true) {

    // Query to fetch questions and their answers
    $sql = "SELECT q.id, q.question, a.answers, t.name as typeOfQuestion , s.name 
FROM questions q 
JOIN questions_subject qs 
ON  q.id = qs.questionid 
JOIN answers a 
ON q.id = a.questionid 
JOIN typeOfQuestions t 
ON q.typeOfQuestionId = t.id 
JOIN subject s 
ON qs.subjectid = s.id 
JOIN fach f 
ON  s.fachid = f.id 
WHERE f.name = :dataClass  
AND q.status > 0 
AND a.status > 0 
ORDER BY q.id asc";

} else {
    echo json_encode(['error' => 'Invalid request']);
}

$stmt = $conn->prepare($sql);
$stmt->bindParam(':dataClass', $dataClass, PDO::PARAM_STR);
$stmt->execute();

$myValues = [];
$currentQuestionId = null;

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    if ($currentQuestionId !== $row['id']) {
        // New question encountered, initialize the question entry
        $currentQuestionId = $row['id'];
        $questionEntry = [
            'id' => $row['id'],
            'question' => $row['question'],
            'typeOfQuestion' => $row['typeOfQuestion'],
            // 'subjectId' => $row['subjectId'],
            'answer' => putBrBack([$row['answers']]),
            // Initialize with the first answer
        ];
        $myValues[] = $questionEntry;
    } else {
        // Existing question, append the answer
        $myValues[count($myValues) - 1]['answer'][] = putBrBack($row['answers']);
    }
}

// Encode the result as JSON
echo json_encode($myValues);

// Close the database connection
$conn = null;