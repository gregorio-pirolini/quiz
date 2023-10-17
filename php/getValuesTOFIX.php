<?php
include 'connect.php';
$_POST = json_decode(file_get_contents('php://input'), true);

if (isset($_POST['dataClass'])) {
    $dataClass = $_POST['dataClass'];
}

if (isset($_POST['all']) && $_POST['all'] === false) {
    // Define your database connection here
    include 'connect.php';

    // Query to fetch questions and their answers
    $sql = "SELECT q.id, q.question, q.typeOfQuestion, q.subjectId, a.answers
            FROM questions q
            JOIN subject s ON q.subjectId = s.id
            JOIN answers a ON q.id = a.questionid
            WHERE s.name = :dataClass AND q.status > 0 AND a.status > 0
            ORDER BY q.id";

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
                'subjectId' => $row['subjectId'],
                'answer' => [$row['answers']],
                'table' => $dataClass , // Initialize with the first answer
            ];
            $myValues[] = $questionEntry;
        } else {
            // Existing question, append the answer
            $myValues[count($myValues) - 1]['answer'][] = $row['answers'];
        }
    }

    // Encode the result as JSON
    echo json_encode($myValues);

    // Close the database connection
    $conn = null;
} else {
    echo json_encode(['error' => 'Invalid request']);
}
