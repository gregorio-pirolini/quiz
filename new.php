<?php include 'header-admin.php'; ?>

<h1 id="hello">Quizz!!</h1>
<h2>Upload Question</h2>
<div class="row">
  <div class="col-sm mb-3 ">
    <div id="page" class="new">
      <h3>
        type Of question
      </h3>

      <div id="typeOfQuestions">

      </div>


      <h3>
        Fach
      </h3>
      <div id="fach">

      </div>
      <h3>
        Subject
      </h3>
      <div id="subject">

      </div>
      <h3>
        Tags
      </h3>
      <div id="tags">

      </div>
      <div id="addTags">
        <label for="addMoreTags">add more tags:</label>
        <input id="addMoreTags" type="text" name="addMoreTags" />
        <button id="addMoreTagsButton" class="btn btn-primary mt-2">Upload Me</button>
      </div>
      <hr>
      <label for="uploadQuestion1">Upload Question:</label>
      <textarea id="uploadQuestion1" name="uploadQuestion1" rows="4" cols="50"></textarea>

      <label for="uploadQuestion2">Upload Answers:</label>
      <textarea id="uploadQuestion2" name="uploadQuestion2" rows="4" cols="50"></textarea>
      <button id="formatQuestion2" class="btn btn-primary mb-2 mt-2">format me</button>
      <br>
      <label for="uploadQuestion3">Upload right Answers:</label>
      <textarea id="uploadQuestion3" name="uploadQuestion3" rows="4" cols="50"></textarea>
      <button id="addBr" class="btn btn-warning mt-2 mb-2">Add BR</button>
      <button id="delAnswer" class="btn btn-info mt-2 mb-2">del answer</button>
    </div>
    <label class="form-label" for="customFile"> 1 Upload one file:</label>
    <input id="fileupload" class="form-control" type="file" name="fileupload" />
    <button id="uploadImg" class="btn btn-secondary mt-2 mb-2">Upload img</button>
    <button id="delImg" class="btn btn-secondary mt-2 mb-2">delete img</button>
  </div>


  <p id="responseImg">response img: <span id="phpSaysimage"></span></p>

  <div class="row">
    <div class="col-sm">
      <button id="uploadSingleButton" class="btn btn-primary">Upload Me</button>
    </div>
  </div>
  <p id="response">response All: <span id="phpSaysSingle"> * span * </span></p>
</div>
</div>






<?php include 'footer.php'; ?>