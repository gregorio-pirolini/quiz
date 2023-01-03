<?php
  // Get the dataClass variable

  $_POST = json_decode(file_get_contents('php://input'), true);
 if(isset($_POST)){
    $dataClass= $_POST['dataClass'];
 }
 echo $dataClass;
?>