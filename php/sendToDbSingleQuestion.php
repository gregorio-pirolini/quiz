<?php
include 'connect.php';
include 'functions.php';
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the values sent from JavaScript

    // Retrieve the JSON data from the request body
    $jsonData = file_get_contents('php://input');

    // Decode the JSON data into a PHP array
    $data = json_decode($jsonData, true);

    $type = $data["type"];
    $selectedFach = $data["selectedFach"];
    $selectedSubject = $data["selectedSubject"];
    $selectedTag = $data["selectedTag"];
    $uploadQuestion1 = sanitizeAndTrim($data["uploadQuestion1"]);
    $uploadQuestion2 = sanitizeAndTrim($data["uploadQuestion2"]);
    $uploadQuestion3 = sanitizeAndTrim($data["uploadQuestion3"]);
    $img = "";
    if (strlen($data["img"]) > 0) {
        $img = substr($data["img"], 3) . ";";
    }
    ; //format for upload



    $question = $img . trim($uploadQuestion1) . ";" . trim($uploadQuestion2);
    $answer = trim($uploadQuestion3);
    $typeOfQuestionId = $type;
    $status = 1;


    $log = [];

    // 1 add question
    $sql = "INSERT INTO questions(question, typeOfQuestionId, status) VALUES (?,?,?)";
    $stmt = $conn->prepare($sql);
    //print $sql."\n";

    //! bind parameters for markers 
    $stmt->bindParam(1, $question);
    $stmt->bindParam(2, $typeOfQuestionId);
    $stmt->bindParam(3, $status);
    // $stmt->bindParam(4, $subjectId);
    //!execute query
    if ($stmt->execute()) {

        // it worked 
        $tmpLog = [$question . ' - ' . $typeOfQuestionId . ' - ' . $status . ' - ' . " New record created successfully"];
        array_push($log, $tmpLog);
    } else {
        // it didn't
        $err = ["Error: " . $i . "-> " . $sql . "<br>" . $conn->error];

        array_push($log, $err);
    }

    // 2  add each subject
    foreach ($selectedSubject as $key => $subject) {
        $sql_2 = "INSERT INTO questions_subject (questionId, subjectId)
        SELECT id, $subject
        FROM questions
        ORDER BY id DESC
        LIMIT 1";

        $stmt = $conn->prepare($sql_2);
        // echo $sql_2;
        if ($stmt->execute()) {
            $tmpLog = [" - New record SUBJECT created successfully"];
            array_push($log, $tmpLog);

        } else {
            // it didn't
            $err = ["Error: " . $i . "-> " . $sql2 . "<br>" . $conn->error];

            array_push($log, $err);
        }
        # code...
    }
    // 3 add each tag 
    // add each tag to fach
    foreach ($selectedTag as $key => $tag) {
        $sql_3 = "INSERT INTO questions_tags (questionId, tagId)
    SELECT id, $tag
    FROM questions
    ORDER BY id DESC
    LIMIT 1";

        $stmt = $conn->prepare($sql_3);
        // echo $sql_2;
        if ($stmt->execute()) {
            $tmpLog = [" - New record tag created successfully"];
            array_push($log, $tmpLog);
            foreach ($selectedFach as $key => $fach) {

                $checkSql = "SELECT * FROM fach_tags WHERE tagid = :tagid AND fachid = :fachid";
                $stmt = $conn->prepare($checkSql);

                // Bind values to placeholders
                $stmt->bindParam(':tagid', $tag, PDO::PARAM_INT);
                $stmt->bindParam(':fachid', $fach, PDO::PARAM_INT);

                // Execute the statement
                $stmt->execute();

                // Check the number of rows returned
                if ($stmt->rowCount() > 0) {
                    // At least one entry exists that matches the condition
                    continue;
                } else {
                    // No matching entries found
                    $addSql = "insert into fach_tags values(?,?)";
                    $stmt = $conn->prepare($addSql);
                    $stmt->bindParam(1, $tag);
                    $stmt->bindParam(2, $fach);

                    //!execute query
                    if ($stmt->execute()) {

                        // it worked 
                        $tmpLog = [$question . ' - ' . $typeOfQuestionId . ' - ' . $status . ' - ' . " New record created successfully"];
                        array_push($log, $tmpLog);
                    } else {
                        // it didn't
                        $err = ["Error: " . $i . "-> " . $sql . "<br>" . $conn->error];

                        array_push($log, $err);
                    }

                }

            }

        } else {
            // it didn't
            $err = ["Error: " . $i . "-> " . $sql3 . "<br>" . $conn->error];

            array_push($log, $err);
        }
        # code...


    }

    //4  add one answer
    $sql5 = "INSERT INTO answers (questionId,answers,status,userId ) select id,'$answer', 1, 3  from questions ORDER BY id DESC LIMIT 1 ";
    $stmt = $conn->prepare($sql5);
    echo $sql5;



    if ($stmt->execute()) {
        $tmpLog = [" answers was added- New record created successfully"];
        array_push($log, $tmpLog);

    } else {
        // it didn't
        $err = ["Error: " . $i . "-> " . $sql5 . "<br>" . $conn->error];
        echo $sql2;
        array_push($log, $err);
    }

    $conn = null;
    echo json_encode($log);
}