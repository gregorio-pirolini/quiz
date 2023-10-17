<?php
include 'connect.php';
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $newTag = trim($_POST["tag"]);
    $log = [];
    // test if is already in db
    $sql = "Select id,name from tags where name =  ?";
    $stmt = $conn->prepare($sql);
    $value = [];

    //! bind parameters for markers 
    $stmt->bindParam(1, $newTag);
    //!execute query
    if ($stmt->execute()) {
        // Check if the query returned results
        if ($stmt->rowCount() > 0) {
            // Results were found
            // You can fetch and use the results here if needed
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                // Access data from the row, e.g., $row["id"] and $row["name"]
                $id = $row["id"];
                $name = $row["name"];
                $there = "already";
                $value = ["id" => $id, "name" => $name, "there" => $there];
            }
        } else {
            // No results were found
            // Insert the new tag into the database
            $sql2 = "INSERT INTO tags (id, name) VALUES (null, ?)";
            $stmt2 = $conn->prepare($sql2);

            // Bind the newTag parameter for the INSERT statement
            $stmt2->bindParam(1, $newTag);

            // Execute the INSERT query
            if ($stmt2->execute()) {
                // Retrieve the ID of the inserted record
                $insertedId = $conn->lastInsertId();
                $id = $insertedId;
                $name = $newTag;
                $there = "new";

                $value = ["id" => $id, "name" => $name, "there" => $there];
                // Now you can use $insertedId as needed
            } else {
                // Insertion failed
                $err = ["Error inserting new tag: " . $sql2 . "<br>" . $conn->error];
                array_push($log, $err);
            }
        }


    } else {
        // Query execution failed
        $err = ["Error: " . $i . "-> " . $sql . "<br>" . $conn->error];
        array_push($log, $err);
    }




    $conn = null;
    echo json_encode($value);
} else {
    // Handle other request methods or invalid requests
    http_response_code(405); // Method Not Allowed
    echo "Invalid request method";
}