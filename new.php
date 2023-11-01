<?php include 'header-admin.php'; ?>
<?php include 'nav-admin.php'; ?>
<h1 id="hello">Quizz!!</h1>
<h2>Upload Question</h2>
<div class="row">
  <div class="col-sm mb-3 ">
    <div id="page" class="new">
      <form action="" id="myForm" class="row needs-validation" novalidate>
        <div class="col-sm-12 mt-1">
          <h3>
            type Of question
          </h3>
          <fieldset id="typeOfQuestions">
          </fieldset>
          <!-- <div class="personal-feedback">personal message</div>
          <div class="valid-feedback">looks good!</div>
          <div class="invalid-feedback">please check def</div>
          <small id="radioQuestionsHelp" class="form-text text-muted">Select type of question
            else.</small> -->
        </div>
        <div class="col-sm-12 mt-1">
          <h3>
            Fach
          </h3>
          <fieldset id="fach">
          </fieldset>
        </div>
        <div class="col-sm-12 mt-1">
          <div id="addFachs">
              <!-- <label for="addMoreTags">add more tags:</label>
          <input id="addMoreTags" type="text" name="addMoreTags" />
          <button id="addMoreTagsButton" class="btn btn-primary mt-2">Upload Me</button> -->
          </div>
        </div>
        <div class="col-sm-12 mt-1">
          <h3>
            Subject
          </h3>
          <fieldset id="subject"></fieldset>
        </div>
        <div class="col-sm-12 mt-1">
          <div id="addSubs">
          <!-- <label for="addMoreTags">add more tags:</label>
          <input id="addMoreTags" type="text" name="addMoreTags" />
          <button id="addMoreTagsButton" class="btn btn-primary mt-2">Upload Me</button> -->
          </div>
        </div>
        <div class="col-sm-12 mt-1">
          <h3>
            Tags
          </h3>
          <fieldset id="tags">
          </fieldset>
        </div>
        <div class="col-sm-12 mt-1">
          <div id="addTags">
              <!-- <label for="addMoreTags">add more tags:</label>
          <input id="addMoreTags" type="text" name="addMoreTags" />
          <button id="addMoreTagsButton" class="btn btn-primary mt-2">Upload Me</button> -->
          </div>
        </div>
        
        <div class="col-sm-12 mt-1">
          <div id="uploadQuestion1Container">
          </div>
        </div>
        <div class="col-sm-12 mt-1">
          <div id="uploadQuestion2Container">
          </div>
        </div>
        <div class="col-sm-12 mt-1">
          <div id="uploadQuestion3Container">
          </div>
        </div>
        <div class="col-sm-12 mt-1">
          <div id="imageContainer">
          </div>
          <p id="responseImg">response img: <span id="phpSaysimage"></span></p>
          <div id="imagePreview" class="mb-3"><span class="preview">image preview:</span>
          <img src="img/download.png" alt="the Picture">
          </div>
        </div>

        <div class="alert alert-success d-none " role="alert" id="success-alert">
          Your form was successfully submitted! Thank you.
        </div>
        <div class="alert alert-danger d-none" role="alert" id="error-alert">
          An error occurred while submitting the form. Please try again.
        </div>


        <button id="uploadSingleButton" class="btn btn-primary">Upload Me</button>
        <p id="response">response All: <span id="phpSaysSingle"> * span * </span></p>
      </form><!-- form  -->
    </div><!-- id new  -->
  </div><!-- class  -->
</div><!-- row  -->
<!-- include footer -->


<?php include 'footer.php'; ?>