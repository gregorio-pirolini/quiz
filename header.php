<?php
// Initialize the session
session_start();

// var_dump($_SESSION);

// Check if the user is logged in, if not then redirect him to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
  header("location: login.php");
  exit;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />


  <?php include 'favicon.php'; ?>


  <title>index</title>

  <!-- <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    /> -->
  <link href="sass/styleBoot.css" rel="stylesheet" />
  <script src='js/highlight_script.js' defer></script>
  <?php
  $random = time();
  echo
    "<script src='js/script.js?v=1." . $random . "' defer></script>
  <link rel='stylesheet' href='sass/style.css?v=1." . $random . "' />
    ";
  ?>
</head>

<body>
<div class="container">