// console.log("hello...");

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

// uploadSingle values from new page
let buildCheckBox = (data, fachSubject, nb, checked) => {
  console.log("buildCheckBox");
  const id = document.getElementById(fachSubject);
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
    if (el.name == "nothing") {
      input.checked = true;
    }
    if (el.name == "NT") {
      input.checked = true;
    }
    if (el.name == "IoT") {
      input.checked = true;
    }
    // if (el.name == "nt Alles") {
    //   input.checked = true;
    // }
    naame =
      fachSubject === "typeOfQuestions" ? fachSubject : fachSubject + "_" + i;
    input.setAttribute("name", naame);
    input.value = el.id;
    id.append(input, label);
    input.className = "myCheckbox";
    i++;
    // <label for="subjectCheckbox">Subject 1:</label>
    // <input type="checkbox" id="subjectCheckbox" name="subject">
  });

  console.log(data);
  console.log(fachSubject);
};
// list all fach

// list all themes

let loadFachTheme = (fachSubject) => {
  const formData = new FormData();
  formData.append("fachSubject", fachSubject);

  fetch("php/loadFachTheme.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      //console.log(data); // Log the JSON data in the console
      buildCheckBox(data, fachSubject, 0);
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
  // Perform a POST request to your PHP script using fetch
  fetch("php/sendToDbSingleQuestion.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Set the content type to JSON
    },
    body: JSON.stringify(data), // Convert data to JSON and send it in the request body
  })
    .then((response) => {
      if (response.ok) {
        return response.text(); // If the request was successful, you can handle the response here
      } else {
        throw new Error("Request failed");
      }
    })
    .then((responseText) => {
      // Handle the response from the PHP script here
      console.log(responseText);
    })
    .catch((error) => {
      // Handle any errors that occur during the fetch
      console.error("Fetch error:", error);
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
const uploadQuestion2 = document.getElementById("uploadQuestion2");
let formatAnswers = () => {
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
    .then(function (response) {
      if (response.status >= 200 && response.status < 300) {
        return response.text();
      }
      throw new Error(response.statusText);
    })
    .then(function (response) {
      let answer = JSON.parse(response);
      let phpSaysimage = document.getElementById("phpSaysimage");
      phpSaysimage.innerHTML = answer.location;
      console.log(`response from php: ${answer.text},${answer.location}`);
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
    buildCheckBox(data, "tags", nb, true);
  } else {
    console.log("going through list");
    checkboxes.forEach((checkbox) => {
      let tagsContainer = document.getElementById("tags");
      let checkboxes = tagsContainer.querySelectorAll('input[type="checkbox"]');
      let lastCheckbox = checkboxes[checkboxes.length - 1];
      let lastIndex = lastCheckbox.id;

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

if (className == "new") {
  const delImg = document.getElementById("delImg");
  delImg.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    delImage(); // Call your saveFormValues function
  });
  const delAnswer = document.getElementById("delAnswer");
  delAnswer.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    delfromAnswers(); // Call your saveFormValues function
  });
  const addBr = document.getElementById("addBr");
  addBr.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    addBrToAnswers(); // Call your saveFormValues function
  });

  const uploadSingleButton = document.getElementById("uploadSingleButton");
  uploadSingleButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    saveFormValues(); // Call your saveFormValues function
  });

  let formatMe = document.getElementById("formatQuestion2");
  formatMe.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    formatAnswers();
  });

  let uploadImgid = document.getElementById("uploadImg");
  uploadImgid.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    uploadImg();
  });
  const addMoreTags = document.getElementById("addMoreTags");

  // Call the function with the specific values for "fach" and "theme"
  loadFachTheme("fach");
  loadFachTheme("subject");
  loadFachTheme("typeOfQuestions");
  loadFachTheme("tags");

  let addMoreTagsButton = document.getElementById("addMoreTagsButton");
  addMoreTagsButton.addEventListener("click", function (event) {
    event.preventDefault();
    pickAndFetchTag(event);
    // pick value
    //trim value
    // fetch to php
    // add as selected to tags
  });

  let pickAndFetchTag = (e) => {
    let newTag = addMoreTags.value;
    const formData = new FormData();
    formData.append("tag", newTag);

    // Make a fetch request to addNewTag.php
    fetch("php/addNewTag.php", {
      method: "POST", // You can change this to "GET" if needed
      body: formData,
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
        selectTag(arr);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
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
