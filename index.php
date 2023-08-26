<?php
// Initialize the session
session_start();

// var_dump($_SESSION);
 
// Check if the user is logged in, if not then redirect him to login page
if(!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true){
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


    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="favicon/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="60x60" href="favicon/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon-precomposed" sizes="120x120" href="favicon/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon-precomposed" sizes="76x76" href="favicon/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="favicon/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="favicon/favicon-196x196.png" sizes="196x196" />
    <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
    <link rel="icon" type="image/png" href="favicon/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="favicon/favicon-16x16.png" sizes="16x16" />
    <link rel="icon" type="image/png" href="favicon/favicon-128.png" sizes="128x128" />
    <meta name="application-name" content="&nbsp;" />
    <meta name="msapplication-TileColor" content="#FFFFFF" />
    <meta name="msapplication-TileImage" content="favicon/mstile-144x144.png" />
    <meta name="msapplication-square70x70logo" content="favicon/mstile-70x70.png" />
    <meta name="msapplication-square150x150logo" content="favicon/mstile-150x150.png" />
    <meta name="msapplication-wide310x150logo" content="favicon/mstile-310x150.png" />
    <meta name="msapplication-square310x310logo" content="favicon/mstile-310x310.png" />


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
    $random = time() ;
    echo
    "<script src='js/script.js?v=1.".$random."' defer></script>
    <link rel='stylesheet' href='sass/style.css?v=1.".$random."' />
    ";
    ?>
</head>

<body>
    <!--  nav -->
    <div class="container">
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" data-class="Home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" data-class="testdb">test DB</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Linux
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#" data-class="lnx1">linux1</a></li>
                                <li><a class="dropdown-item" href="#" data-class="lnx2">linux2</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>

                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                TK
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#" data-class="tk2">tk2</a></li>
                                <li><a class="dropdown-item" href="#" data-class="tk3">tk3</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>

                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Data Technik
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#" data-class="dt1">Data Technik 1</a></li>
                                <li><a class="dropdown-item" href="#" data-class="dt2">Data Technik2</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>

                            </ul>
                        </li>



                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                NT
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#" data-class="NT">NT KB 1</a></li>
                                <li><a class="dropdown-item" href="#" data-class="NT1">NT 1</a></li>
                                <li><a class="dropdown-item" href="#" data-class="NT2">NT 2</a></li>
                                <li><a class="dropdown-item" href="#" data-class="NT3">NT 3</a></li>
                                <li><a class="dropdown-item" href="#" data-class="NT4">NT 4</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Wiso
                            </a>
                            <ul class="dropdown-menu">

                                <li><a class="dropdown-item" href="#" data-class="wiso1">wiso 1</a></li>
                                <li><a class="dropdown-item" href="#" data-class="wiso2">wiso 2</a></li>
                                <li><a class="dropdown-item" href="#" data-class="wiso3">wiso 3</a></li>
                                <li><a class="dropdown-item" href="#" data-class="wiso4">wiso 4</a></li>
                                <li><a class="dropdown-item" href="#" data-class="wiso5">wiso 5</a></li>
                                <li><a class="dropdown-item" href="#" data-class="wiso6">wiso 6</a></li>
                                <li><a class="dropdown-item" href="#" data-class="wiso7">wiso 7</a></li>
                                <li><a class="dropdown-item" href="#" data-class="wiso8">wiso 8</a></li>
                                <li><a class="dropdown-item" href="#" data-class="wiso9">wiso 9</a></li>
                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>

                            </ul>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                powerShell
                            </a>
                            <ul class="dropdown-menu">

                                <li><a class="dropdown-item" href="#" data-class="ps1">powerShell 1</a></li>
                                <li><a class="dropdown-item" href="#" data-class="ps2">powerShell 2</a></li>

                                <li>
                                    <hr class="dropdown-divider" />
                                </li>
                                <li>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </li>

                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                BS Win
                            </a>
                            <ul class="dropdown-menu">

                                <li><a class="nav-link" href="#" data-class="bswin">bs win</a></li>
                                <li><a class="nav-link" href="#" data-class="bswin3">bs win 3</a></li>
                                <hr class="dropdown-divider" />
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </li>

                    </ul>




                    <li class="nav-item">
                        <a class="nav-link" href="signout.php" data-class="signout">sign out</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li>
                    </ul>

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>




    </div>


    <div id="questions">
        <div class="container" id='start'>

        </div>

        <div class="container">
            <button class="btn btn-primary mb-5 ms-1" id="checkAll">check answers</button>

        </div>
    </div><!--  questions -->

    <div id="home">
        <div class="container">
            <h1 id="hello">Quizz!!</h1>



            <img id="play" src="img/play.jpg" />
            <h1>Home</h1>
            <h2>Was bisher geshah...</h2>
            <div class="row">
                <div class="col">
                    <ul class="mb-5">
                        <li>16 01 2023</li>




                        <li>fixed loading many answers to same question from data base
                        <li>added image to question input type text and input type checkbox</li>
                    </ul>
                    <ul class="mb-5">
                        <li>01 02 2023</li>
                        <li> fixed < and> in labels<br>
                                questionabel.innerHTML=el.replaceAll("<", "& l t;" ).replaceAll(">", "&
                                    g t;");</li>


                    </ul>
                    <ul class="mb-5">
                        <li>26 02 2023</li>
                        <li>
                            Bits and Bytes conversion:
                            http://people.eku.edu/wongk/csc185/Bits_Bytes_Conversion.html
                        </li>
                    </ul>
                    <div class="form-floating mb-5 ms-1">
                        <textarea class="form-control" placeholder="Leave a comment here"
                            id="floatingTextarea"></textarea>
                        <label for="floatingTextarea">Comments</label>
                    </div>
                    <button type="button" class="btn btn-primary mb-5 ms-1">Primary</button>


                </div><!--  col -->
            </div><!--  row -->

        </div><!--  container -->
    </div><!--  home -->


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous">
    </script>
</body>

</html>