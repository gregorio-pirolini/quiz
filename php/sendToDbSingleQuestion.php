<?php

try {
    if (include_once 'connect.php') {
        if (include_once 'functions.php') {

            if ($_SERVER["REQUEST_METHOD"] === "POST") {
                // Retrieve the values sent from JavaScript
                // Retrieve the JSON data from the request body
                $jsonData = file_get_contents('php://input');

                // Decode the JSON data into a PHP array
                $data = json_decode($jsonData, true);

                if ($data !== null && json_last_error() === JSON_ERROR_NONE) {
                    // Retrieve the JSON data from the request body


                    $typeOfQuestionId  = $data["type"];
                    $selectedFach = $data["selectedFach"];
                    $selectedSubject = $data["selectedSubject"];
                    $selectedTag = $data["selectedTag"];
                    $uploadQuestion1 = sanitizeAndTrim($data["uploadQuestion1"]);
                    $uploadQuestion2 = sanitizeAndTrim($data["uploadQuestion2"]);
                    $uploadQuestion3 = sanitizeAndTrim($data["uploadQuestion3"]);




                    $log = [];
                    $img = "";
                    $testId=bigger0($typeOfQuestionId);
                    $testFach=moreThan0Length($selectedFach);
                    $testSubject=moreThan0Length($selectedSubject);
                    $testTag=moreThan0Length($selectedTag);
                    $testUploadQuestion1 = testLength($uploadQuestion1, $text);
                    $testUploadQuestion2 = testLength($uploadQuestion2, $text);
                    $testUploadQuestion3 = testLength($uploadQuestion3, $text);
                    $testnotEmptyUploadQuestion1 = testnotEmpty($uploadQuestion1);
                    $testnotEmptyUploadQuestion3 = testnotEmpty($uploadQuestion3);
                    if (isset($data["img"])) {
                        // Handle the "img" string, which can be empty
                        if (strlen($data["img"]) > 0) {
                            $img = substr($data["img"], 3) . ";";
                        }; //format for upload
                    } else {
                        // Handle cases where "img" is missing
                        $smallLog = [
                            'id' => 'imageContainer',
                            'message' => 'image file seems wrong'
                        ];
                        array_push($log, $smallLog);
                    }

                    if(!$testId) {
                        $smallLog = [
                            'id' => 'typeOfQuestions',
                            'message' => 'pick one type of question'
                        ];
                        array_push($log, $smallLog);
                    }
                    if(!$testFach) {
                        $smallLog = [
                            'id' => 'fach',
                            'message' => 'pick one type of fach at least'
                        ];
                        array_push($log, $smallLog);
                    }
                    if(!$testSubject) {
                        $smallLog = [
                            'id' => 'subject',
                            'message' => 'pick one type of subject at least'
                        ];
                        array_push($log, $smallLog);
                    }
                    if(!$testTag) {
                        $smallLog = [
                            'id' => 'tags',
                            'message' => 'pick one type of tags at least'
                        ];
                        array_push($log, $smallLog);
                    }
                    if(!$testUploadQuestion1) {
                        $smallLog = [
                            'id' => 'uploadQuestion1Container',
                            'message' => 'too long'
                        ];
                        array_push($log, $smallLog);
                    }
                    if(!$testUploadQuestion2) {
                        $smallLog = [
                            'id' => 'tauploadQuestion2Containergs',
                            'message' => 'too long'
                        ];
                        array_push($log, $smallLog);
                    }
                    if(!$testUploadQuestion3) {
                        $smallLog = [
                            'id' => 'uploadQuestion3Container',
                            'message' => 'too long'
                        ];
                        array_push($log, $smallLog);
                    }
                    if(!$testnotEmptyUploadQuestion1) {
                        $smallLog = [
                            'id' => 'uploadQuestion1Container',
                            'message' => 'cannot be empty'
                        ];
                        array_push($log, $smallLog);
                    }
                    if(!$testnotEmptyUploadQuestion3) {
                        $smallLog = [
                            'id' => 'uploadQuestion3Container',
                            'message' => 'cannot be empty'
                        ];
                        array_push($log, $smallLog);
                    }

                    if(count($log)<1) {
                        $question = $img . $uploadQuestion1 . ";" . $uploadQuestion2;
                        $answer = trim($uploadQuestion3);
                        $typeOfQuestionId = $typeOfQuestionId;
                        $status = 1;


                        $conn->beginTransaction(); // Start the transaction

                        //todo  1 add question question into the "questions" table
                        $sql = "INSERT INTO questions (question, typeOfQuestionId, status) VALUES (?, ?, ?)";
                        $stmt = $conn->prepare($sql);
                        $stmt->bindParam(1, $question, PDO::PARAM_STR);
                        $stmt->bindParam(2, $typeOfQuestionId, PDO::PARAM_INT);
                        $stmt->bindParam(3, $status, PDO::PARAM_INT);

                        if (!$stmt->execute()) {
                            throw new Exception("Error inserting question");
                        }

                        // todo 2 add each subject to questionInsert subjects for the question
                        foreach ($selectedSubject as $key => $subject) {
                            $sql_2 = "INSERT INTO questions_subject (questionId, subjectId) 
                                          SELECT id, ? FROM questions ORDER BY id DESC LIMIT 1";
                            $stmt = $conn->prepare($sql_2);
                            $stmt->bindParam(1, $subject, PDO::PARAM_INT);

                            if (!$stmt->execute()) {
                                throw new Exception("Error linking question to SUBJECT $subject");
                            }
                        }

                        //todo 3 add each tag to question
                        // Check and insert into fach_tags
                        foreach ($selectedTag as $key => $tag) {
                            $sql_3 = "INSERT INTO questions_tags (questionId, tagId)
                        SELECT id, $tag
                        FROM questions
                        ORDER BY id DESC
                        LIMIT 1";

                            $stmt = $conn->prepare($sql_3);
                            // echo $sql_2;
                            if (!$stmt->execute()) {
                                throw new Exception("Error linking question to tag $tag");
                            }
                            foreach ($selectedFach as $key => $fach) {

                                $checkSql = "SELECT * FROM fach_tags WHERE tagid = :tagid AND fachid = :fachid";
                                $stmt = $conn->prepare($checkSql);

                                // Bind values to placeholders
                                $stmt->bindParam(':tagid', $tag, PDO::PARAM_INT);
                                $stmt->bindParam(':fachid', $fach, PDO::PARAM_INT);

                                if (!$stmt->execute()) {
                                    throw new Exception("Error retrieving  tag $tag and fach $fach");
                                }

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
                                    if (!$stmt->execute()) {
                                        throw new Exception("Error inserting fach_tags values");
                                    }
                                }
                            }
                        }
                        // 5 Insert one answer for the question
                        $sql5 = "INSERT INTO answers (questionId, answers, status, userId) 
                                     SELECT id, ?, 1, 3 FROM questions ORDER BY id DESC LIMIT 1";
                        $stmt = $conn->prepare($sql5);
                        $stmt->bindParam(1, $answer, PDO::PARAM_STR);

                        if (!$stmt->execute()) {
                            throw new Exception("Error inserting answer");
                        }

                        // Commit the transaction if everything was successful
                        $conn->commit();

                        // All operations succeeded
                        $tmpLog = "Transaction completed successfully";
                        $response = ["success" => true, "message" => $tmpLog];

                    } else {
                        throw new Exception(json_encode($log));
                    }
                } else {
                    throw new Exception("Error decoding JSON data: " . json_last_error_msg());
                }
            } else {
                throw new Exception("err No tag sent.");
            }
        } else {
            throw new Exception("Error including 'functions.php'");
        }
    } else {
        throw new Exception("Error including 'connect.php'");
    }
} catch (Exception $e) {
    $conn->rollBack();
    // Handle the error without exposing undefined variables
    $errorMessage = "Error " . $e->getMessage();
    $response = ["success" => false, "message" => $errorMessage];
}

header('Content-Type: application/json');
echo json_encode($response);
