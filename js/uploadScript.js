// unchanged for all
const smallClass = ["form-text", "text-muted"];

// radio buttons
// radio fields
const radioFieldClass = "radio-container";
const radioFieldAriaLabel = "Select type of question";
const radioFieldAriaDescribed = "radioQuestionsHelp";
// radio small
const radioSmallId = radioFieldAriaDescribed;
const radioSmallMessage = "select one type of question";
const radioInvalidMessage = "Pick one type of question";

// check buttons
// check fields & custom errors similar
const checkFieldClass = "checkbox-container";
const checkValid = ["greg-valid-feedback", "d-none"];
const checkinValid = ["greg-invalid-feedback", "d-none"];

// check fields
const checkFachFieldAriaLabel = "Select type of Theme";
const checkFachFieldAriaDescribed = "checkboxFachHelp";
const checkFachSmallId = checkFachFieldAriaDescribed;
const checkFachSmallMessage = "select one type of Theme";
const checkFachInvalidMessage = "Pick one type of Theme";
const checkSubjectFieldAriaLabel = "Select type of Subject";
const checkSubjectFieldAriaDescribed = "checkboxSubjectHelp";
const checkSubjectSmallId = checkSubjectFieldAriaDescribed;
const checkSubjectSmallMessage = "select one type of Subject";
const checkSubjectInvalidMessage = "Pick one type of Subject";

const checkTagFieldAriaLabel = "Select at least one Tag";
const checkTagFieldAriaDescribed = "checkboxTagHelp";
const checkTagSmallId = checkTagFieldAriaDescribed;
const checkTagSmallMessage = "select one type of Tag";
const checkTagInvalidMessage = "Pick one Tag at least";

// add tag, sub,  fach
const addTagsType = "text";
const addSubsType = addTagsType;
const addFachsType = addTagsType;

const addTagsIdInput = "addMoreTags";
const addSubsIdInput = "addMoreSubs";
const addFachsIdInput = "addMoreFachs";

const addTagsKlass = ["form-control"];
const addSubsKlass = addTagsKlass;
const addFachsKlass = addTagsKlass;

const addTagsName = "tags";
const addSubsName = "Subs";
const addFachsName = "Fach";

const addTagsAriaLabel = "Enter new Tag";
const addSubsAriaLabel = "Enter new Sub";
const addFachsAriaLabel = "Enter new Fach";

const addTagsAriaDescribed = "addTagsAriaDescribed";
const addSubsAriaDescribed = "addSubsAriaDescribed";
const addFachsAriaDescribed = "addFachsAriaDescribed";

const addTagsLength = 100;
const addSubsLength = addTagsLength;
const addFachsLength = addTagsLength;

const addTagsLabelText = "new tag!";
const addSubsLabelText = "new Sub!";
const addFachsLabelText = "new Fach!";

const addTagsLabelKlass = ["form-label"];
const addSubsLabelKlass = addTagsLabelKlass;
const addFachsLabelKlass = addTagsLabelKlass;

const addTagsInvalidMessage = "please check Tag";
const addSubsInvalidMessage = "please check Sub";
const addFachsInvalidMessage = "please check Fach";

const addTagsSmallId = addTagsAriaDescribed;
const addSubsSmallId = addSubsAriaDescribed;
const addFachsSmallId = addFachsAriaDescribed;

const addTagsSmallMessage = "Enter new Tag";
const addSubsSmallMessage = "Enter new Sub";
const addFachsSmallMessage = "Enter new Fach";

//button
const addTagsIdBtn = "addMoreTagsButton";
const addSubsIdBtn = "addMoreSubsButton";
const addFachsIdBtn = "addMoreFachsButton";

const addTagsKlassBtn = ["btn", "btn-primary", "mt-2"];
const addSubsKlassBtn = addTagsKlassBtn;
const addFachsKlassBtn = addTagsKlassBtn;

const addTagstextBtn = "Upload Me 1";
const addSubstextBtn = "Upload Me 2";
const addFachstextBtn = "Upload Me 3";

const addTagsfunction = function (event) {
  event.preventDefault();
  pickAndFetchTag();
};
const addSubsfunction = function (e) {
  e.preventDefault();
  alert("allgood 2");
};

const addFachsfunction = function (e) {
  e.preventDefault();
  alert("allgood 3");
};

// add textare tag, sub,  fach

const uploadQuestion1IdTextara = "uploadQuestion1";
const uploadQuestion2IdTextara = "uploadQuestion2";
const uploadQuestion3IdTextara = "uploadQuestion3";

const uploadQuestion1required = true;
const uploadQuestion2required = false;
const uploadQuestion3required = true;

const uploadQuestion1Klass = ["form-control"];
const uploadQuestion2Klass = uploadQuestion1Klass;
const uploadQuestion3Klass = uploadQuestion1Klass;

const uploadQuestion1Name = "uploadQuestion1";
const uploadQuestion2Name = "uploadQuestion2";
const uploadQuestion3Name = "uploadQuestion3";

const uploadQuestion1AriaLabel = "Enter question";
const uploadQuestion2AriaLabel = "Enter possible answers";
const uploadQuestion3AriaLabel = "Enter right answer";

const uploadQuestion1AriaDescribed = "uploadQuestion1AriaDescribed";
const uploadQuestion2AriaDescribed = "uploadQuestion2AriaDescribed";
const uploadQuestion3AriaDescribed = "uploadQuestion3AriaDescribed";

const uploadQuestion1Length = 60000;
const uploadQuestion2Length = uploadQuestion1Length;
const uploadQuestion3Length = uploadQuestion1Length;

const uploadQuestion1LabelText = "the question";
const uploadQuestion2LabelText = "the possible answers";
const uploadQuestion3LabelText = "answer";

const uploadQuestion1LabelKlass = ["form-label"];
const uploadQuestion2LabelKlass = uploadQuestion1LabelKlass;
const uploadQuestion3LabelKlass = uploadQuestion1LabelKlass;

const uploadQuestion1InvalidMessage = "please check the question";
const uploadQuestion2InvalidMessage = "please check the possible answers";
const uploadQuestion3InvalidMessage = "please check answer";

const uploadQuestion1SmallId = uploadQuestion1AriaDescribed;
const uploadQuestion2SmallId = uploadQuestion2AriaDescribed;
const uploadQuestion3SmallId = uploadQuestion3AriaDescribed;

const uploadQuestion1SmallMessage = "Enter the question";
const uploadQuestion2SmallMessage = "Enter possible answers";
const uploadQuestion3SmallMessage = "Enter answer";

//button
// const uploadQuestion1IdBtn = "addMoreTagsButton";
const uploadQuestion2IdBtn = "formatQuestion2";
const uploadQuestion3IdBtn1 = "addBr";
const uploadQuestion3IdBtn2 = "delAnswer";

const uploadQuestion1KlassBtn = ["btn", "btn-primary", "mt-2"];
const uploadQuestion2KlassBtn = addTagsKlassBtn;
const uploadQuestion3KlassBtn1 = addTagsKlassBtn;
const uploadQuestion3KlassBtn2 = ["btn", "btn-primary", "mt-2", "ms-2", "me-2"];
// const uploadQuestion1textBtn = "btn 1";
const uploadQuestion2textBtn = "format me";
const uploadQuestion3textBtn1 = "Add BR";
const uploadQuestion3textBtn2 = "del answer";

const uploadQuestion2function1 = function (event) {
  event.preventDefault();
  formatAnswers();
};

const uploadQuestion3function1 = function (event) {
  event.preventDefault();
  addBrToAnswers();
};

const uploadQuestion3function2 = function (event) {
  event.preventDefault();
  delfromAnswers();
};

const form = document.getElementById("myForm");
const error = document.getElementById("error-alert");
const success = document.getElementById("success-alert");

// invalid
let invalid_display = "block";
let invalid_border = "2px solid #dc3545";
let invalid_paddingRight = "calc(1.5em + .75rem)";
let invalid_backgroundImage =
  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")";
let invalid_backgroundRepeat = "no-repeat";
let invalid_backgroundPosition = "right calc(.375em + .1875rem) center";
let invalid_backgroundSize = "calc(.75em + .375rem) calc(.75em + .375rem)";

// valid
let valid_display = "none";
let valid_border = "1px solid #ced4da";
let valid_paddingRight = "0.75rem";
let valid_backgroundImage = "none";
let valid_backgroundRepeat = "no-repeat";
let valid_backgroundPosition = "right calc(.375em + .1875rem) center";
let valid_backgroundSize = "calc(.75em + .375rem) calc(.75em + .375rem)";

// !user info
let $user = "";
let $id = "";

//! say hello
let findGreetings = () => {
  const d = new Date();
  let time = d.getHours();
  // console.log(time);
  let hello = "Good evening";
  if (time < 12) {
    hello = "Good morning";
  }
  if (time >= 12 && time < 19) {
    hello = "good afternoon";
  }

  return hello;
};
const greetings = findGreetings();
const hello = document.getElementById("hello");

hello.innerText = greetings + " Greg";

// 1 upload xlx file
async function uploadFile() {
  let formData = new FormData();
  formData.append("file", fileupload.files[0]);
  const response = await fetch("php/upload.php", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      if (response.status >= 200 && response.status < 300) {
        return response.text();
      }
      throw new Error(response.statusText);
    })
    .then(function (response) {
      let answer = JSON.parse(response);
      phpSays.innerHTML = answer.text;
      console.log(`response from php: ${answer.text},${answer.location}`);
      loadToDb(answer.location);
    });
}

//2 upload load xlx file ToDb
function loadToDb(location) {
  console.log(`will now upload to db with php`);
  const response = fetch("php/openFile.php?location=" + location)
    .then(function (response) {
      if (response.status >= 200 && response.status < 300) {
        console.log("response.status >= 200 && response.status < 300");
        return response.text();
      }
      throw new Error(response.statusText);
    })
    .then(function (response) {
      console.log("response????:" + response);
      let answer = JSON.parse(response);
      console.log(typeof answer);
      showResult(answer);
    });
}

let validInvalidDiv = (validInvalid, message) => {
  let div = document.createElement("div"); // Use 'document.createElement' to create a new div element

  if (!message) {
    message = "looks good";
  }
  div.classList.add(...validInvalid);
  div.textContent = message;
  return div;
};

let smallDiv = (id, klass, message) => {
  let small = document.createElement("small"); // Use 'document.createElement' to create a new div element
  small.classList.add(...klass);
  small.textContent = message;
  small.id = id;
  return small;
};

// uploadSingle values from new page
let buildCheckBox = (data, fachSubject, nb, checked, init) => {
  console.log(
    "buildCheckBox: " +
      // data +
      // ", " +
      fachSubject +
      ", " +
      nb +
      ", " +
      checked +
      ", " +
      init
  );
  const id = document.getElementById(fachSubject);
  let parent = id.parentElement;
  let i = nb;

  let checkboxRadio = fachSubject === "typeOfQuestions" ? "radio" : "checkbox";

  data.forEach((el) => {
    let label = document.createElement("label");
    label.setAttribute("for", fachSubject + "_" + i);
    label.className = "myLabel";
    label.innerHTML = ": " + el.name + " ";

    let input = document.createElement("input");
    input.id = fachSubject + "_" + i;
    if (checked == true) {
      input.checked = true;
    }
    input.setAttribute("type", checkboxRadio);

    if (checkboxRadio == "checkbox") {
      input.addEventListener("change", () => {
        // Your event handling code here
        checkRadioStatus(fachSubject);
      });
    }

    if (el.name == "nothing") {
      input.checked = false;
    }
    if (el.name == "WISO") {
      input.checked = true;
    }
    if (el.name == "wiso 14") {
      input.checked = true;
    }
    // if (el.name == "nt Alles") {
    //   input.checked = true;
    // }
    naame =
      fachSubject === "typeOfQuestions" ? fachSubject : fachSubject + "_" + i;
    input.setAttribute("name", naame);
    input.value = el.id;
    if (checkboxRadio == "radio") {
      input.setAttribute("required", "true");
    } else {
      input.className = "myCheckbox";
    }

    let div = document.createElement("div");
    div.classList.add("form-check-inline");
    div.appendChild(input);
    div.appendChild(label);
    id.append(div);

    i++;
    // <label for="subjectCheckbox">Subject 1:</label>
    // <input type="checkbox" id="subjectCheckbox" name="subject">
  });
  let valid;
  let invalid;
  let small;
  if (checkboxRadio == "radio") {
    id.classList.add(radioFieldClass);
    id.setAttribute("aria-label", radioFieldAriaLabel);
    id.setAttribute("aria-describedby", radioFieldAriaDescribed);
    valid = validInvalidDiv(["valid-feedback"]);
    invalid = validInvalidDiv(["invalid-feedback"], radioInvalidMessage);
    small = smallDiv(radioSmallId, smallClass, radioSmallMessage);
  } else if (fachSubject == "fach") {
    id.classList.add(checkFieldClass);
    id.setAttribute("aria-label", checkFachFieldAriaLabel);
    id.setAttribute("aria-describedby", checkFachFieldAriaDescribed);
    valid = validInvalidDiv(checkValid);
    invalid = validInvalidDiv(checkinValid, checkFachInvalidMessage);
    small = smallDiv(checkFachSmallId, smallClass, checkFachSmallMessage);
  } else if (fachSubject == "subject") {
    id.classList.add(checkFieldClass);
    id.setAttribute("aria-label", checkSubjectFieldAriaLabel);
    id.setAttribute("aria-describedby", checkSubjectFieldAriaDescribed);
    valid = validInvalidDiv(checkValid);
    invalid = validInvalidDiv(checkinValid, checkSubjectInvalidMessage);
    small = smallDiv(checkSubjectSmallId, smallClass, checkSubjectSmallMessage);
  } else if (fachSubject == "tags") {
    id.classList.add(checkFieldClass);
    id.setAttribute("aria-label", checkTagFieldAriaLabel);
    id.setAttribute("aria-describedby", checkTagFieldAriaDescribed);
    valid = validInvalidDiv(checkValid);
    invalid = validInvalidDiv(checkinValid, checkTagInvalidMessage);
    small = smallDiv(checkTagSmallId, smallClass, checkTagSmallMessage);
  } else {
    alert("error");
  }
  if (init) {
    parent.append(valid);
    parent.append(invalid);
    parent.append(small);
  }
  console.log(data);
  console.log(fachSubject);
};
// list all fach
// list all themes

//! let div = document.createElement("div");
// !      div.classList.add("form-check-inline");

let loadFachTheme = (fachSubject) => {
  const formData = new FormData();
  formData.append("fachSubject", fachSubject);

  fetch("php/loadFachTheme.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      //       //console.log(data); // Log the JSON data in the console
      buildCheckBox(data, fachSubject, 0, false, true);
    })
    .catch((error) => {
      console.error("Error:", error); // Log any errors
    });
};

// Function to save form values to local storage

let sendToDbSingleQuestion = (
  type,
  selectedFach,
  selectedSubject,
  selectedTag,
  uploadQuestion1,
  uploadQuestion2,
  uploadQuestion3,
  img
) => {
  // Create an object to hold the data you want to send
  const data = {
    type,
    selectedFach,
    selectedSubject,
    selectedTag,
    uploadQuestion1,
    uploadQuestion2,
    uploadQuestion3,
    img,
  };

  success.classList.add("d-none");
  error.classList.add("d-none");

  // Perform a POST request to your PHP script using fetch
  fetch("php/sendToDbSingleQuestion.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
    body: JSON.stringify(data), // Convert data to JSON and send it in the request body
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text(); // Assuming the server responds with text data
    })
    .then((data) => {
      console.log("Server response:", data);
      let arr = JSON.parse(data);
      console.log(arr);
      console.log(arr.success);

      if (arr.success == true) {
        console.log("superber");
        // showSuccessMessageThere
        success.classList.remove("d-none");
        success.innerText = arr.message;
      } else {
        console.log("no good");
        error.classList.remove("d-none");
        error.innerText = arr.message;
        // showErrorMessageThere??
      }
    })
    .catch((error) => {
      console.error("Error sending data to PHP:", error);
    });
};
function saveFormValues() {
  // Save type of question (radio buttons)
  const typeOfQuestions = document.querySelector(
    'input[name="typeOfQuestions"]:checked'
  );
  let selectedTypeOfQuestions = typeOfQuestions.value;

  // Save selected Fach checkboxes
  const fachCheckboxes = document.querySelectorAll(
    'input[name^="fach"]:checked'
  );
  const selectedFach = Array.from(fachCheckboxes).map((cb) => cb.value);
  localStorage.setItem("selectedFach", JSON.stringify(selectedFach));

  // Save selected Subject checkboxes
  const subjectCheckboxes = document.querySelectorAll(
    'input[name^="subject"]:checked'
  );
  const selectedSubject = Array.from(subjectCheckboxes).map((cb) => cb.value);
  localStorage.setItem("selectedSubject", JSON.stringify(selectedSubject));

  // Save selected Subject checkboxes
  const tagsCheckboxes = document.querySelectorAll(
    'input[name^="tags"]:checked'
  );
  const selectedTag = Array.from(tagsCheckboxes).map((cb) => cb.value);
  localStorage.setItem("selectedTag", JSON.stringify(selectedTag));

  // Save textareas

  let uploadQuestion1 = document.getElementById("uploadQuestion1").value;

  let uploadQuestion2 = document.getElementById("uploadQuestion2").value;

  let uploadQuestion3 = document.getElementById("uploadQuestion3").value;
  let img = document.getElementById("phpSaysimage").innerText;
  sendToDbSingleQuestion(
    selectedTypeOfQuestions,
    selectedFach,
    selectedSubject,
    selectedTag,
    uploadQuestion1,
    uploadQuestion2,
    uploadQuestion3,
    img
  );

  // format questions 2
}

let formatAnswers = () => {
  let uploadQuestion2 = document.getElementById("uploadQuestion2");
  let textareaValue = uploadQuestion2.value.trim();
  let answersArray = textareaValue.split("\n").map((answer) => answer.trim());

  // Join the answers with semicolons to create a CSV string
  let csvString = answersArray.join(";");
  uploadQuestion2.value = csvString;
};

//   upload img file
async function uploadImg() {
  console.log("uploadImg");
  let formData = new FormData();
  formData.append("file", fileupload.files[0]);
  const response = await fetch("php/uploadImg.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text(); // Assuming the server responds with text data
    })

    .then((data) => {
      console.log("Server response:", data);
      let arr = JSON.parse(data);
      let id = document.getElementById("fileupload");

      if (arr.success == true) {
        let imagePreview = document
          .getElementById("imagePreview")
          .getElementsByTagName("img")[0];
        imagePreview.src = arr.src;
        document.getElementById("phpSaysimage").innerText = arr.location;
        console.log(`response from php: ${arr.text},${arr.location}`);
        showSuccessMessageThere(id, arr.message, "image");
      } else {
        showErrorMessageThere(id, arr.message);
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
}

let selectTag = (arr) => {
  console.log("selectTag");
  console.log(arr);
  console.log(arr.there);
  let data = [];
  data.push(arr);
  let tagsContainer = document.getElementById("tags");
  let checkboxes = tagsContainer.querySelectorAll('input[type="checkbox"]');
  let lastCheckbox = checkboxes[checkboxes.length - 1];
  let lastIndex = lastCheckbox.id;

  let nb = lastIndex.replace(/[^\d.]/g, "") + 1;

  if (arr.there !== "already") {
    buildCheckBox(data, "tags", nb, true, false);
  } else {
    console.log("going through list");
    checkboxes.forEach((checkbox) => {
      let tagsContainer = document.getElementById("tags");
      let checkboxes = tagsContainer.querySelectorAll('input[type="checkbox"]');
      let lastCheckbox = checkboxes[checkboxes.length - 1];

      if (checkbox.value == arr.id) {
        console.log(checkbox.value);
        checkbox.checked = true;
        return;
      }
    });
  }
};

let delImage = () => {
  let phpSaysimage = document.getElementById("phpSaysimage");
  phpSaysimage.innerHTML = "";
  let imagePreview = document
    .getElementById("imagePreview")
    .getElementsByTagName("img")[0];
  imagePreview.src = "img/download.png";
  let imageContainer = document.getElementById("imageContainer");
  imageContainer.innerHTML = "";
  imageSetup("imageContainer");
};

let delfromAnswers = () => {
  console.log("delfromAnswers");
  document.getElementById("uploadQuestion3").value = "";
  document.getElementById("uploadQuestion3").focus();
};
let addBrToAnswers = () => {
  let raw = document.getElementById("uploadQuestion3").value;
  raw = "-" + raw;
  let formated = raw.replace(/\n/g, "<br>-");
  document.getElementById("uploadQuestion3").value = formated;
};

let pageId = document.getElementsByTagName("page");
let className = page.className;

let checkRadioStatus = (idElement) => {
  console.log("............................." + idElement);
  let parent;
  let arr;
  let atleastOneChecked;

  let actualid = document.getElementById(idElement);
  arr = actualid.querySelectorAll('input[type="checkbox"]');
  parent = actualid.parentElement;
  arr.forEach((el) => {
    if (el.checked) {
      atleastOneChecked = true;
    }
  });

  // is it on validation?

  if (form.classList.contains("was-validated")) {
    if (!atleastOneChecked) {
      console.log("getting htere...");
      // Display an error message or take the desired action
      parent.querySelector(".greg-valid-feedback").classList.remove("d-none");
      parent.querySelector(".greg-invalid-feedback").classList.remove("d-none");
      parent.querySelector(".greg-valid-feedback").classList.add("d-none");
    } else {
      parent.querySelector(".greg-valid-feedback").classList.remove("d-none");
      parent.querySelector(".greg-invalid-feedback").classList.remove("d-none");
      parent.querySelector(".greg-invalid-feedback").classList.add("d-none");
    }
  } else {
    console.log("form not validated??");
  }
  return atleastOneChecked;
};

if (className == "new") {
  function processForm(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!form.checkValidity()) {
      // form.classList.add("was-validated");
      form.classList.add("was-validated");
    }
    let isAtLeastOneCheckedFach = checkRadioStatus("fach");
    let isAtLeastOneCheckedSubject = checkRadioStatus("subject");
    let isAtLeastOneCheckedag = checkRadioStatus("tags");

    if (
      !isAtLeastOneCheckedFach ||
      !isAtLeastOneCheckedSubject ||
      !isAtLeastOneCheckedag
    ) {
      return;
    }

    saveFormValues(); // Call your saveFormValues function
  }
  const uploadSingleButton = document.getElementById("uploadSingleButton");
  uploadSingleButton.addEventListener("click", function (event) {
    processForm(event); // Prevent the default form submission behavior
  });

  const addMoreTags = document.getElementById("addMoreTags");
  function createbutton(id, klass, text, event, funktion) {
    let btn = document.createElement("button");
    btn.id = id;
    btn.classList.add(...klass);
    btn.textContent = text;
    btn.addEventListener(event, funktion);
    return btn;
  }

  function createTextarea(
    id,
    naame, // ?
    klass, // formcontrol
    ariaLabel, //what it does
    ariaDescribed, //id to small
    length, //length
    required //true false
  ) {
    let textarea = document.createElement("textarea");

    textarea.id = id;
    textarea.setAttribute("name", naame);
    textarea.classList.add(...klass);
    textarea.setAttribute("aria-label", ariaLabel);
    textarea.setAttribute("aria-describedby", ariaDescribed);
    textarea.setAttribute("maxlength", length);
    textarea.required = required;
    return textarea;
  }
  function createInput(
    type,
    id,
    naame,
    klass,
    ariaLabel,
    ariaDescribed,
    length
  ) {
    let input = document.createElement("input");
    input.type = type;
    input.id = id;
    input.setAttribute("name", naame);
    input.classList.add(...klass);
    input.setAttribute("aria-label", ariaLabel);
    input.setAttribute("aria-describedby", ariaDescribed);
    input.setAttribute("maxlength", length);

    return input;
  }

  function createLabel(f0r, klass, text) {
    console.log("createLabel:" + f0r + " , " + klass + " , " + text);
    let label = document.createElement("label");
    label.setAttribute("for", f0r);
    label.classList.add(...klass);
    console.log(text);
    label.textContent = text;

    return label;
  }

  function inputTextareaSetup(elementId) {
    let type, idInput, naame, klass, aria, ariaDescribed;
    let invalidMessage;
    let smallId, smallKlass;
    let labelText;
    let idBtn1, textBtn1;
    let idBtn2, textBtn2;
    let func1, func2;

    if (elementId == "uploadQuestion1Container") {
      // Initialize variables for uploadQuestion1Container
      idInput = uploadQuestion1IdTextara;
      naame = uploadQuestion1Name;
      f0r = uploadQuestion1Name;
      required = uploadQuestion1required;
      klass = uploadQuestion1Klass;
      klassLabel = uploadQuestion1LabelKlass;
      labelText = uploadQuestion1LabelText;
      aria = uploadQuestion1AriaLabel;
      ariaDescribed = uploadQuestion1AriaDescribed;
      l = uploadQuestion1Length;
      invalidMessage = uploadQuestion1SmallMessage;
      smallId = uploadQuestion1SmallId;
      smallKlass = smallClass;
      smallMessage = uploadQuestion1SmallMessage;
      // Don't forget to initialize textBtn1, idBtn1, klassBtn1, and func1 here if needed.
    } else if (elementId == "uploadQuestion2Container") {
      // Initialize variables for uploadQuestion2Container
      idInput = uploadQuestion2IdTextara;
      naame = uploadQuestion2Name;
      f0r = uploadQuestion2Name;
      required = uploadQuestion2required;
      klass = uploadQuestion2Klass;
      klassLabel = uploadQuestion2LabelKlass;
      labelText = uploadQuestion2LabelText;
      aria = uploadQuestion2AriaLabel;
      ariaDescribed = uploadQuestion2AriaDescribed;
      l = uploadQuestion2Length;
      invalidMessage = uploadQuestion2SmallMessage;
      smallId = uploadQuestion2SmallId;
      smallKlass = smallClass;
      smallMessage = uploadQuestion2SmallMessage;
      textBtn1 = uploadQuestion2textBtn;
      idBtn1 = uploadQuestion2IdBtn;
      klassBtn1 = uploadQuestion2KlassBtn;
      func1 = uploadQuestion2function1;
    } else if (elementId == "uploadQuestion3Container") {
      // Initialize variables for uploadQuestion3Container
      idInput = uploadQuestion3IdTextara;
      naame = uploadQuestion3Name;
      f0r = uploadQuestion3Name;
      required = uploadQuestion3required;
      klass = uploadQuestion3Klass;
      klassLabel = uploadQuestion3LabelKlass;
      labelText = uploadQuestion3LabelText;
      aria = uploadQuestion3AriaLabel;
      ariaDescribed = uploadQuestion3AriaDescribed;
      l = uploadQuestion3Length;
      invalidMessage = uploadQuestion3SmallMessage;
      smallId = uploadQuestion3SmallId;
      smallKlass = smallClass;
      smallMessage = uploadQuestion3SmallMessage;

      textBtn1 = uploadQuestion3textBtn1;
      idBtn1 = uploadQuestion3IdBtn1;
      klassBtn1 = uploadQuestion3KlassBtn1;
      func1 = uploadQuestion3function1;

      textBtn2 = uploadQuestion3textBtn2;
      idBtn2 = uploadQuestion3IdBtn2;
      klassBtn2 = uploadQuestion3KlassBtn2;
      func2 = uploadQuestion3function2;
    } else {
      alert("error");
    }

    let id = document.getElementById(elementId);
    let label = createLabel(f0r, klassLabel, labelText);

    let textarea = createTextarea(
      idInput,
      naame,
      klass,
      aria,
      ariaDescribed,
      l,
      required
    );
    let valid = validInvalidDiv(["valid-feedback"]);
    let invalid = validInvalidDiv(["invalid-feedback"], invalidMessage);
    let small = smallDiv(smallId, smallKlass, smallMessage);

    // Append other elements
    id.append(label);
    id.append(textarea);
    id.append(valid);
    id.append(invalid);
    id.append(small);

    if (typeof idBtn1 != "undefined") {
      let btn1 = createbutton(idBtn1, klassBtn1, textBtn1, "click", func1);
      id.append(btn1); // Append the button to the element
    } else {
      console.log("no button 1");
    }

    if (typeof idBtn2 != "undefined") {
      let btn2 = createbutton(idBtn2, klassBtn2, textBtn2, "click", func2);
      id.append(btn2); // Append the button to the element
    } else {
      console.log("no button 2");
    }
  }

  function inputTextSetup(elementId) {
    let type, idInput, naame, klass, aria, ariaDescribed;
    let invalidMessage;
    let smallId, smallKlass;
    let labelText;
    let idBtn, textBtn;
    let func;

    if (elementId == "addTags") {
      type = addTagsType;
      idInput = addTagsIdInput;
      naame = addTagsName;
      f0r = addTagsName;
      klass = addTagsKlass;
      klassLabel = addTagsLabelKlass;
      labelText = addTagsLabelText;
      aria = addTagsAriaLabel;
      ariaDescribed = addTagsAriaDescribed;
      l = addTagsLength;
      invalidMessage = addTagsInvalidMessage;
      smallId = addTagsSmallId;
      smallKlass = smallClass;
      smallMessage = addTagsSmallMessage;
      textBtn = addTagstextBtn;
      idBtn = addTagsIdBtn;
      klassBtn = addTagsKlassBtn;
      func = addTagsfunction;
    } else if (elementId == "addSubs") {
      type = addSubsType;
      idInput = addSubsIdInput;
      naame = addSubsName;
      f0r = addSubsName;
      klass = addSubsKlass;
      klassLabel = addSubsLabelKlass;
      labelText = addSubsLabelText;
      aria = addSubsAriaLabel;
      ariaDescribed = addSubsAriaDescribed;
      l = addSubsLength;
      invalidMessage = addSubsInvalidMessage;
      smallId = addSubsSmallId;
      smallKlass = smallClass;
      smallMessage = addSubsSmallMessage;
      textBtn = addSubstextBtn;
      idBtn = addSubsIdBtn;
      klassBtn = addSubsKlassBtn;
      func = addSubsfunction;
    } else if (elementId == "addFachs") {
      type = addFachsType;
      idInput = addFachsIdInput;
      naame = addFachsName;
      f0r = addFachsName;
      klass = addFachsKlass;
      klassLabel = addFachsLabelKlass;
      labelText = addFachsLabelText;
      aria = addFachsAriaLabel;
      ariaDescribed = addFachsAriaDescribed;
      l = addFachsLength;
      invalidMessage = addFachsInvalidMessage;
      smallId = addFachsSmallId;
      smallKlass = smallClass;
      smallMessage = addFachsSmallMessage;
      textBtn = addFachstextBtn;
      idBtn = addFachsIdBtn;
      klassBtn = addFachsKlassBtn;
      func = addFachsfunction;
    } else {
      alert("error");
    }

    let id = document.getElementById(elementId);
    let label = createLabel(f0r, klassLabel, labelText);
    // type,id,naame,klass,ariaLabel,ariaDescribed,length
    let input = createInput(
      type,
      idInput,
      naame,
      klass,
      aria,
      ariaDescribed,
      l
    );
    let valid = validInvalidDiv(["valid-feedback"]);
    let invalid = validInvalidDiv(["invalid-feedback"], invalidMessage);
    let small = smallDiv(smallId, smallKlass, smallMessage);
    let btn = createbutton(idBtn, klassBtn, textBtn, "click", func);
    id.append(label);
    id.append(input);
    id.append(valid);
    id.append(invalid);
    id.append(small);
    id.append(btn);
  }

  function imageSetup(elementId) {
    let id = document.getElementById(elementId);
    let label = createLabel("fileupload", ["form-label"], "Upload one file");
    let input = createInput(
      "file",
      "fileupload",
      "fileupload",
      ["addMe"],
      "upload an image",
      "fileuploadHelp",
      "undefined"
    );

    let idBtn = "delImg";
    let klassBtn = ["btn", "btn-primary", "mt-2", "mb-2"];
    let textBtn = "del Img";
    let addImgFunction = function (event) {
      event.preventDefault();
      delImage();
    };
    let smallId = "fileuploadHelp";
    let smallMessage = "file upload Help";
    let valid = validInvalidDiv(["valid-feedback"]);
    let invalid = validInvalidDiv(
      ["invalid-feedback"],
      "error in uploading img"
    );
    let small = smallDiv(smallId, smallClass, smallMessage);
    let btn = createbutton(idBtn, klassBtn, textBtn, "click", addImgFunction);

    id.append(label);
    id.append(input);
    id.append(valid);
    id.append(invalid);
    id.append(small);
    id.append(btn);

    let uploadId = document.getElementById("fileupload");
    uploadId.addEventListener("change", function (event) {
      event.preventDefault();
      resetFeedBack(uploadId);
      uploadImg();
    });
  }
  // Call the function with the specific values for "fach" and "theme"
  loadFachTheme("fach");
  loadFachTheme("subject");
  loadFachTheme("typeOfQuestions");
  loadFachTheme("tags");

  inputTextSetup("addTags");
  // inputTextSetup("addSubs");
  // inputTextSetup("addFachs");

  inputTextareaSetup("uploadQuestion1Container");
  inputTextareaSetup("uploadQuestion2Container");
  inputTextareaSetup("uploadQuestion3Container");

  imageSetup("imageContainer");

  function pickAndFetchTag() {
    let addMoreTags = document.getElementById("addMoreTags");
    let newTag = addMoreTags.value;

    // Make a fetch request to addNewTag.php
    fetch("php/addNewTag.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `tag=${newTag}`,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text(); // Assuming the server responds with text data
      })
      .then((data) => {
        // Handle the response data as needed
        console.log("Server response:", data);
        let arr = JSON.parse(data);
        const id = document.getElementById("addMoreTags");
        if (arr.success == true) {
          selectTag(arr);
          showSuccessMessageThere(id, arr.message, "tags");
        } else {
          showErrorMessageThere(id, arr.message, "tags");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }

  function resetFeedBack(id) {
    let divElement = id.parentNode;
    let invalidDiv = divElement.querySelector(".invalid-feedback");
    let validDiv = divElement.querySelector(".valid-feedback");
    invalidDiv.style.display = "none";
    validDiv.style.display = "none";
  }

  function validFeedBack(id) {
    console.log("validFeedBack(" + id + ")");
    let divElement = id.parentNode;
    let validDiv = divElement.querySelector(".valid-feedback");
    validDiv.style.display = valid_display;
    id.style.border = valid_border;
    id.style.paddingRight = valid_paddingRight;
    id.style.backgroundImage = valid_backgroundImage;
    id.style.backgroundRepeat = valid_backgroundRepeat;
    id.style.backgroundPosition = valid_backgroundPosition;
    id.style.backgroundSize = valid_backgroundSize;
  }
  function invalidFeedBack(id) {
    let divElement = id.parentNode;
    console.log("1nvalidFeedBack");
    // Access the vali1d-feedback and invalid-feedback elements

    let invalidDiv = divElement.querySelector(".invalid-feedback");
    invalidDiv.style.display = invalid_display;
    id.style.border = invalid_border;
    id.style.paddingRight = invalid_paddingRight;
    id.style.backgroundImage = invalid_backgroundImage;
    id.style.backgroundRepeat = invalid_backgroundRepeat;
    id.style.backgroundPosition = invalid_backgroundPosition;
    id.style.backgroundSize = invalid_backgroundSize;
  }
  function showRightMessage(typeError) {
    let val = "";
    switch (typeError) {
      case "tags":
        val = "looks good";
        break;

      default:
        val = "looks good";
        break;
    }
    return val;
  }
  function showWrongMessage(typeError) {
    let val = "";
    switch (typeError) {
      case "tags":
        val = addTagsInvalidMessage;
        break;

      default:
        val = "error";

        break;
    }
    return val;
  }
  function showErrorMessageThere(where, message, typeError) {
    let resetMessage = showRightMessage(typeError);
    invalidFeedBack(where);
    divElement = where.parentNode;
    let invalidDiv = divElement.querySelector(".invalid-feedback");
    invalidDiv.textContent = message;
    invalidDiv.style.display = "block";
    let validDiv = divElement.querySelector(".valid-feedback");
    validDiv.textContent = resetMessage;
    validDiv.style.display = "none";
  }

  function showSuccessMessageThere(where, message, typeError) {
    let resetMessage = showRightMessage(typeError);
    console.log(".valid-feedback");
    validFeedBack(where);
    divElement = where.parentNode;
    let validDiv = divElement.querySelector(".valid-feedback");
    validDiv.textContent = message;
    validDiv.style.display = "block";
    let invalidDiv = divElement.querySelector(".invalid-feedback");
    invalidDiv.textContent = resetMessage;
    invalidDiv.style.display = "none";
  }
} else if ((className = "link")) {
  loadFachTheme("subject");
  loadFachTheme("tags");

  const linkMe = document.getElementById("linkMe");
  linkMe.addEventListener("click", function (event) {
    event.preventDefault();
    getLinkValues();
  });

  let getLinkValues = (e) => {
    //get all values from subject
    // get all values from tags
    let subject = document.getElementById("subject");
    let tag = document.getElementById("tags");

    let subjectInput = subject.querySelectorAll("input");
    let tagInput = tag.querySelectorAll("input");
    let subjectInputValues = [];
    let tagInputValues = [];

    subjectInput.forEach((element) => {
      if (element.checked) {
        // Check if the element is checked
        subjectInputValues.push(element.value);
      }
    });

    tagInput.forEach((element) => {
      if (element.checked) {
        // Check if the element is checked
        tagInputValues.push(element.value);
      }
    });

    console.log(subjectInputValues);
    console.log(tagInputValues);

    //send values to linkTagSubject.php
    //write response in phpSaysLinks

    const data = {
      subjectInputValues: subjectInputValues,
      tagInputValues: tagInputValues,
    };
    console.log("fetch...");
    // Make a fetch request to linkTagSubject.php
    fetch("php/linkTagSubject.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(data), // Convert the data object to a JSON string
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((responseText) => {
        // Handle the response from the PHP script here
        console.log(responseText);
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch request
        console.error("Fetch error:", error);
      });
  };
}
