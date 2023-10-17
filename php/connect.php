<?php
$servername = "localhost";
$username = "root";
$password = "greg2023";
$dbname = "quizz";
// $servername = "localhost";
// $username = "gregor_db1";
// $password = "q&CYgaA3%5Rc";
// $dbname = "gregor_db1";
try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //echo "Connected successfully";
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>