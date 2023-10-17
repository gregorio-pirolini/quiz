<?php
include 'connect.php';
// Assuming you are sending JSON data
$data = json_decode(file_get_contents('php://input'), true);

// Check if the data was successfully decoded
if ($data !== null) {
    // Access the subjectInputValues and tagInputValues
    $subjectInputValues = $data['subjectInputValues'];
    $tagInputValues = $data['tagInputValues'];
    $subjectInputValue = $data['subjectInputValues'][0];
    if (
        (!is_array($tagInputValues) || empty($tagInputValues)) || (
            count($subjectInputValues) != 1)
    ) {
        echo "error in given values...";
    }
    // select the id from all questions with this tag from questions_tag and save them in an array
    $tagIds = implode(',', $tagInputValues);
    $myids = [];
    $sql = "SELECT questionId from questions_tags where tagId in ($tagIds)";
    // Prepare the statement
    $stmt = $conn->prepare($sql);

    // Execute the statement
    $stmt->execute();

    // Fetch the results into an array
    $myids = $stmt->fetchAll(PDO::FETCH_COLUMN);

    print_r($myids);

    foreach ($myids as $key => $id) {
        # code...
//add entry in questions_subject if  
        $sql2 = "INSERT INTO questions_subject (subjectId, questionId)
             SELECT ?, ?
             WHERE NOT EXISTS (
                 SELECT 1
                 FROM questions_subject
                 WHERE subjectId = ? AND questionId = ?
             )";

        // Prepare the statement
        $stmt = $conn->prepare($sql2);

        // Bind parameters
        $stmt->bindParam(1, $subjectInputValue);
        $stmt->bindParam(2, $id);
        $stmt->bindParam(3, $subjectInputValue);
        $stmt->bindParam(4, $id);

        // Execute the statement
        $stmt->execute();

    }




    // Now you can work with these values as needed
    // For example, you can process them and send a response


    // Send the response as JSON
    //header('Content-Type: application/json');
    $response = "allgood";
    echo json_encode($response);
} else {
    // Handle the case where JSON data couldn't be decoded
    http_response_code(400); // Bad Request
    echo json_encode(array('error' => 'Invalid JSON data'));
}
?>