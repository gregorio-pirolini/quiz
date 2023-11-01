<?php include 'header.php'; ?>
<?php include 'nav.php'; ?>



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
                    <li> fixed &lt; and &gt; in labels<br>
                        questionabel.innerHTML=el.replaceAll("&lt;", "& l t;" ).replaceAll("&gt;", "&
                        g t;");</li>


                </ul>
                <ul class="mb-5">
                    <li>26 02 2023</li>
                    <li>
                        Bits and Bytes conversion:
                        http://people.eku.edu/wongk/csc185/Bits_Bytes_Conversion.html
                    </li>
                </ul>

                <ul class="mb-5">
                    <li>26 07 2023</li>
                    <li>
                        test page gemacht fuer alle fragen art
                    </li>
                </ul>

                <ul class="mb-5">
                    <li>27 08 2023</li>
                    <li>
                        added check button functionality
                    </li>
                </ul>
                <ul class="mb-5">
                    <li>01 10 2023</li>
                    <li>
                        added menu collapse
                        <pre>  let shutMe = () => {
  var navbarCollapse = document.querySelector(".navbar-collapse");
  navbarCollapse.classList.remove("show");
};</pre>
                    </li>

                    <li>
                        added menu Sql Select all from Fach!!

                    </li>
                </ul>



            </div><!--  col -->
        </div><!--  row -->

    </div><!--  container -->
</div><!--  home -->


<?php include 'footer.php'; ?>