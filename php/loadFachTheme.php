<?php
include 'connect.php';
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Retrieve the values from the POST data

    $fachSubject = $_POST["fachSubject"];
    // getting either list from fach or suject
    $query = "SELECT * FROM `$fachSubject` order by name DEsc";



    try {

        $statement = $conn->query($query);
        $allSubFach = $statement->fetchAll(PDO::FETCH_ASSOC);

        header('Content-Type: application/json');
        echo json_encode($allSubFach);
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
}
?>