<?php

include 'connect.php';
include 'functions.php';

try {
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        $newTag = sanitizeAndTrim($_POST["tag"]);

        // Test the length of the new tag
        if (!testLength($newTag, $tagLength)) {
            throw new Exception("err1 Tag is too long.");
        }

        // Check if the tag is already in the database
        $sql = "SELECT id, name FROM tags WHERE name = ?";
        $stmt = $conn->prepare($sql);

        // Bind parameters for markers
        $stmt->bindParam(1, $newTag, PDO::PARAM_STR);

        // Execute the query
        if ($stmt->execute()) {
            // Check if the query returned results
            if ($stmt->rowCount() > 0) {
                // Tag already exists in the database
                $row = $stmt->fetch(PDO::FETCH_ASSOC);
                $id = $row["id"];
                $name = $row["name"];
                $there = "already";

                $response = [
                    "success" => true,
                    "name" => $name,
                    "message" => "$newTag was already in the database",
                    "id" => $id,
                    "there" => $there
                ];
            } else {
                // Tag is not in the database, so insert it
                $sql2 = "INSERT INTO tags (id, name) VALUES (null, ?)";
                $stmt2 = $conn->prepare($sql2);

                // Bind the newTag parameter for the INSERT statement
                $stmt2->bindParam(1, $newTag, PDO::PARAM_STR);

                // Execute the INSERT query
                if ($stmt2->execute()) {
                    // Retrieve the ID of the inserted record
                    $insertedId = $conn->lastInsertId();
                    $id = $insertedId;
                    $name = $newTag;
                    $there = "new";

                    $response = [
                        "success" => true,
                        "name" => $name,
                        "message" => "$newTag was added",
                        "id" => $id,
                        "there" => $there
                    ];
                } else {
                    throw new Exception("err2 Failed to insert the tag.");
                }
            }
        } else {
            throw new Exception("err3 Database query failed.");
        }
    } else {
        throw new Exception("err4 No tag sent.");
    }
} catch (Exception $e) {
    // Handle the error without exposing undefined variables
    $errorMessage = "Error " . $e->getMessage();
    $response = ["success" => false, "message" => $errorMessage];
}

header('Content-Type: application/json');
echo json_encode($response);
