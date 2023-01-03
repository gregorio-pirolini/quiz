<?php
$servername = "localhost";
$username = "root";
$password = "Gregorio22021!";
// $servername = "localhost";
// $username = "gregor_db1";
// $password = "q&CYgaA3%5Rc";
try {
  $conn = new PDO("mysql:host=$servername;dbname=quizz", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  //echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>