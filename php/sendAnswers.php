<?php
include 'connect.php';

$_POST = json_decode(file_get_contents('php://input'), true);
if(isset($_POST)){
    $answersDb= $_POST['answersDb'];
}

var_dump($_POST);
