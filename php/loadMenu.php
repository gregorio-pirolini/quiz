<?php
include 'connect.php';

// $dataClass= "wiso4";
// Do something with the dataClass variable

// !has player already played?
// !no
// $sql="SELECT q.* FROM questions q 
// JOIN subject s ON q.subjectId = s.id WHERE s.name = '$dataClass'
// AND q.status > 0";
$sql = "SELECT * 
        FROM Fach
        WHERE status > 0";

$stmt = $conn->query($sql);
$result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
$myValues = [];

foreach ($stmt as $row) {
    $mySubValues = [];
    $sql2 = "SELECT * FROM subject WHERE status > 0 AND fachid={$row['id']}";
    $stmt2 = $conn->query($sql2);
    $result2 = $stmt2->setFetchMode(PDO::FETCH_ASSOC);
    foreach ($stmt2 as $row2) {
        array_push($mySubValues, $row2);
    }
    $row['mySubValues'] = $mySubValues; // Add $mySubValues as a sub-array in $row
    array_push($myValues, $row);
}

echo json_encode($myValues);
?>