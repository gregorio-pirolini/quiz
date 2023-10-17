// console.log("hello...");

// !user info
let $user = "";
let $id = "";

let arrClassHelp = ["help", "btn", "btn-primary", "mb-5", "ms-1"];
let arrClassCorrect = ["correct", "btn", "btn-primary", "mb-5", "ms-1"];
let arrClassCheck = ["check", "btn", "btn-primary", "mb-5", "ms-1"];

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

// !user info
let getUserInfo = (path) => {
  fetch(path)
    .then((res) => res.json())
    .then((d) => {
      // console.log(d);
      const greetings = findGreetings();
      const hello = document.getElementById("hello");
      hello.innerText = greetings + " " + d.user;
    });
};
// ! where we add the questions

const start = document.getElementById("start");

let buildQuestions = (arr, tableName) => {
  let nb = 1;

  arr.forEach((element) => {
    if (element.typeOfQuestion == "abv") {
      abv(nb, element, tableName);
    } else if (element.typeOfQuestion == "explain") {
      explain(nb, element, tableName, "");
    } else if (element.typeOfQuestion == "explainImage") {
      explain(nb, element, tableName, "image");
    } else if (element.typeOfQuestion == "sort") {
      sortOut(nb, element, tableName);
    } else if (element.typeOfQuestion == "sortImage") {
      sortOut(nb, element, tableName, "image");
    } else if (element.typeOfQuestion == "whats") {
      whatis(nb, element, tableName, "is ", "");
    } else if (element.typeOfQuestion == "whatsImage") {
      whatis(nb, element, tableName, "is ", "image");
    } else if (element.typeOfQuestion == "whatr") {
      whatis(nb, element, tableName, "are ");
    } else if (element.typeOfQuestion == "nothing") {
      whatis(nb, element, tableName, "");
    } else if (element.typeOfQuestion == "nothingImage") {
      whatis(nb, element, tableName, "", "image");
    } else if (element.typeOfQuestion == "multiSingle") {
      multiSingle(nb, element, tableName);
    } else if (element.typeOfQuestion == "multiSingleImage") {
      multiSingle(nb, element, tableName, "image");
    } else if (element.typeOfQuestion == "multiMulti") {
      multiMulti(nb, element, tableName);
    } else if (element.typeOfQuestion == "multiMultiImage") {
      multiMulti(nb, element, tableName, "image");
    } else {
      console.log("error: " + element.typeOfQuestion);
    }
    nb++;
  });
};

let answersDb = {};

let buildanswersUser = (arr, tableName) => {
  answersDb = {};
  for (let i = 0; i < arr.length; i++) {
    if (i < 1) {
      answersDb[tableName] = {};
    }
    let id = arr[i]["id"];

    answersDb[tableName][id] = {
      id: id,
      answer: arr[i]["answer"],
      // ! setting to one because user never played nothing in DB
      points: 1,
      class: "right",
      helped: false,
    };
  }

  console.log("buildanswersUser answersDb", answersDb);
};

// Function to create buttons
// id table value text class inputType event1 function1 event2 function2
let createButtons = (
  elementId,
  tableName,
  value,
  text,
  arrClass,
  inputType,
  event1,
  function1,
  event2,
  function2
) => {
  let btn = document.createElement("button");
  btn.value = value;
  btn.innerHTML = text;
  btn.classList.add(...arrClass);
  btn.setAttribute("data-id", elementId);
  btn.setAttribute("data-table", tableName);
  if (inputType) {
    btn.setAttribute("data-inputType", inputType);
  }
  btn.addEventListener(event1, function1);
  if (event2) {
    btn.addEventListener(event2, function2);
  }
  return btn;
};

let createNumber = (klass, elementId, tableName) => {
  let number = document.createElement("div");
  number.id = tableName + "_" + elementId;
  number.className = klass;
  return number;
};
let createH3 = (nb) => {
  let h3 = document.createElement("h3");
  h3.innerText = "question " + nb;
  return h3;
};
let createH6 = (string) => {
  let h6 = document.createElement("h6");
  h6.innerText = string;
  return h6;
};
let createAnswer = (elementAnswer, elementId) => {
  console.log();
  let answer = document.createElement("p");
  answer.className = "helpMe";
  answer.id = "help_" + elementId;

  if (elementAnswer.length < 1) {
    answer.innerText = "??";
  } else {
    answer.innerHTML = elementAnswer.toString();
  }

  return answer;
};

let numberAppend = (...arr) => {
  //console.log(arr);
  let number = arr[0];
  let elements = arr.slice(1); // Create a shallow copy of the array starting from index 1
  elements.forEach((element) => {
    number.appendChild(element);
  });
  return number;
};

let createLabel = (attr, text) => {
  let label = document.createElement("label");
  label.setAttribute("for", attr);
  text = text.replaceAll("&lt;", "<").replaceAll("&gt;", ">");
  // console.log(text);
  label.innerText = text;

  return label;
};

let createInput = (type, value, id, name) => {
  let input = document.createElement("input");
  input.type = type;
  if (value !== null) {
    input.value = value;
  }
  input.id = id;
  input.name = name;

  input.addEventListener("click", (e) => {
    removeClass(e, type, "createInput 2");
  });
  return input;
};
// ! questions making 1
let whatis = (nb, element, tableName, verbe, image) => {
  let questions = element.question.split(";");
  let number = document.createElement("div");
  let h3 = createH3(nb);

  let what = "";
  if (verbe != "") {
    what = "What ";
  }

  let imgDiv;
  if (image == "image") {
    imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = questions[0];
    imgDiv.appendChild(img);
    //remove Picture from array
    questions.shift();
  }
  let q = questions[0].replaceAll("<", "&lt;").replaceAll(">", "&gt;");

  let label = createLabel(
    tableName + "_" + element.id,
    what + verbe + questions[0].replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  );

  let input = createInput(
    "text",
    null,
    tableName + "_" + element.id,
    tableName + "_" + element.id
  );

  let answer = createAnswer(element.answer, element.id);

  let help = createButtons(
    element.id,
    tableName,
    "help",
    "help",
    arrClassHelp,
    null,
    "mousedown",
    function (e) {
      answersShow(e);
    },
    "mouseup",
    function (e) {
      answersHide(e);
    }
  );
  let check = createButtons(
    element.id,
    tableName,
    "check",
    "check",
    arrClassCheck,
    "text",
    "click",
    function (e) {
      checkThis(e, "text");
    },
    null,
    null
  );
  let correct = createButtons(
    element.id,
    tableName,
    "correct",
    "correct",
    arrClassCorrect,
    null,
    "click",
    function (e) {
      addAnswerToArrayAndDb(e, "text");
    },
    null,
    null
  );

  if (image == "image") {
    numberAppend(
      number,
      h3,
      label,
      imgDiv,
      input,
      answer,
      help,
      check,
      correct
    );
  } else {
    numberAppend(number, h3, label, input, answer, help, check, correct);
  }

  start.appendChild(number);
};
// ! questions making 2
let explain = (nb, element, tableName, image) => {
  let questions = element.question.split(";");
  let number = document.createElement("div");

  let h3 = createH3(nb);

  let imgDiv;
  if (image == "image") {
    imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = questions[0];
    imgDiv.appendChild(img);
    //remove Picture from array
    questions.shift();
    numberAppend(number, imgDiv);
  }

  let label = createLabel(
    tableName + "_" + element.id,
    "Explain " +
      questions[0].replaceAll("<", "&lt;").replaceAll(">", "&gt;") +
      "! "
  );

  let input = createInput(
    "text",
    null,
    tableName + "_" + element.id,
    tableName + "_" + element.id
  );

  let shortAnswer = "";
  if (element.answer.length < 1) {
    shortAnswer = "??";
  } else {
    shortAnswer = element.answer.join("");
  }

  let answer = createAnswer(shortAnswer, element.id);

  let help = createButtons(
    element.id,
    tableName,
    "help",
    "help",
    arrClassHelp,
    null,
    "mousedown",
    function (e) {
      answersShow(e);
    },
    "mouseup",
    function (e) {
      answersHide(e);
    }
  );
  let check = createButtons(
    element.id,
    tableName,
    "check",
    "check",
    arrClassCheck,
    "text",
    "click",
    function (e) {
      checkThis(e, "text");
    },
    null,
    null
  );
  let correct = createButtons(
    element.id,
    tableName,
    "correct",
    "correct",
    arrClassCorrect,
    null,
    "click",
    function (e) {
      addAnswerToArrayAndDb(e, "text");
    },
    null,
    null
  );

  numberAppend(number, h3, label, input, answer, help, check, correct);

  start.appendChild(number);
};
// ! questions making 3
let multiSingle = (nb, element, tableName, image) => {
  let questions = element.question.split(";");
  let number = createNumber("radio", element.id, tableName);
  let h3 = createH3(nb);

  let h6 = createH6(questions[0]);
  let imgDiv;
  if (image == "image") {
    h6 = createH6(questions[1]);
    imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = questions[0];
    imgDiv.appendChild(img);
    //remove Picture from array
    questions.shift();
  }

  numberAppend(number, h3, h6);

  if (image == "image") {
    number.appendChild(imgDiv);
  }
  questions.shift();
  let nbRadio = 0;
  questions.forEach((el) => {
    const br = document.createElement("br");
    let label = createLabel(
      tableName + "_" + element.id + "_" + nbRadio,
      el.replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    );

    let input = createInput(
      "radio",
      el,
      tableName + "_" + element.id + "_" + nbRadio,
      tableName + "_" + element.id
    );

    numberAppend(number, input, label, br);
    nbRadio++;
  });

  let answer = createAnswer(element.answer, element.id);

  let help = createButtons(
    element.id,
    tableName,
    "help",
    "help",
    arrClassHelp,
    null,
    "mousedown",
    function (e) {
      answersShow(e);
    },
    "mouseup",
    function (e) {
      answersHide(e);
    }
  );
  let check = createButtons(
    element.id,
    tableName,
    "check",
    "check",
    arrClassCheck,
    "radio",
    "click",
    function (e) {
      checkThis(e, "radio");
    },
    null,
    null
  );
  let correct = createButtons(
    element.id,
    tableName,
    "correct",
    "correct",
    arrClassCorrect,
    null,
    "click",
    function (e) {
      addAnswerToArrayAndDb(e, "radio");
    },
    null,
    null
  );

  numberAppend(number, answer, help, check, correct);

  start.appendChild(number);
};
// ! questions making 4
let multiMulti = (nb, element, tableName, image) => {
  let questions = element.question.split(";");
  let number = createNumber("checkbox", element.id, tableName);

  let h3 = createH3(nb);
  let h6 = createH6(questions[0]);
  let imgDiv;
  if (image == "image") {
    h6 = createH6(questions[1]);
    imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = questions[0];
    imgDiv.appendChild(img);
    //remove Picture from array
    questions.shift();
  }

  numberAppend(number, h3, h6);

  if (image == "image") {
    number.appendChild(imgDiv);
  }
  questions.shift();
  let nbCheckbox = 0;
  questions.forEach((el) => {
    const br = document.createElement("br");
    let label = createLabel(
      tableName + "_" + element.id + "_" + nbCheckbox,
      el.replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    );
    let input = createInput(
      "checkbox",
      el,
      tableName + "_" + element.id + "_" + nbCheckbox,
      tableName + "_" + element.id
    );

    numberAppend(number, input, label, br);

    nbCheckbox++;
  });

  let answer = createAnswer(element.answer, element.id);

  let help = createButtons(
    element.id,
    tableName,
    "help",
    "help",
    arrClassHelp,
    null,
    "mousedown",
    function (e) {
      answersShow(e);
    },
    "mouseup",
    function (e) {
      answersHide(e);
    }
  );
  let check = createButtons(
    element.id,
    tableName,
    "check",
    "check",
    arrClassCheck,
    "checkbox",
    "click",
    function (e) {
      checkThis(e, "checkbox");
    },
    null,
    null
  );
  let correct = createButtons(
    element.id,
    tableName,
    "correct",
    "correct",
    arrClassCorrect,
    null,
    "click",
    function (e) {
      addAnswerToArrayAndDb(e, "checkbox");
    },
    null,
    null
  );

  numberAppend(number, answer, help, check, correct);

  start.appendChild(number);
};

// ! questions making 5
let sortOut = (nb, element, tableName, image) => {
  console.log(element);

  let questions = element.question.split(";");

  let number = document.createElement("div");
  number.id = "number";

  let h3 = createH3(nb);

  number.appendChild(h3);
  let imgDiv;
  numberAppend(number);
  if (image == "image") {
    imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = questions[0];
    imgDiv.appendChild(img);
    //remove Picture from array
    questions.shift();
  }
  if (image == "image") {
    number.append(imgDiv);
  }

  let label = createLabel(
    tableName + "_" + element.id,
    "Sort out! " + questions[0].replaceAll("<", "&lt;").replaceAll(">", "&gt;")
  );
  number.append(label);
  questions.shift();

  let div = document.createElement("div");
  div.className = "drag";
  div.id = tableName + "_" + element.id;
  div.addEventListener("click", (e) => {
    removeClass(e, "", "1 sortOut");
  });

  const shuffledArray = questions.sort((a, b) => 0.5 - Math.random());
  shuffledArray.forEach((element) => {
    let p = document.createElement("p");
    p.className = "draggable";
    p.setAttribute("draggable", true);
    p.innerText = element;

    div.appendChild(p);
  });

  console.log(element.answer);
  let shortAnswer = element.answer[0].replaceAll(";", " ");
  console.log(shortAnswer);

  let answer = createAnswer(shortAnswer, element.id);

  let help = createButtons(
    element.id,
    tableName,
    "help",
    "help",
    arrClassHelp,
    null,
    "mousedown",
    function (e) {
      answersShow(e);
    },
    "mouseup",
    function (e) {
      answersHide(e);
    }
  );
  let check = createButtons(
    element.id,
    tableName,
    "check",
    "check",
    arrClassCheck,
    "drag",
    "click",
    function (e) {
      checkThis(e, "drag");
    },
    null,
    null
  );
  let correct = createButtons(
    element.id,
    tableName,
    "correct",
    "correct",
    arrClassCorrect,
    null,
    "click",
    function (e) {
      addAnswerToArrayAndDb(e, "drag");
    },
    null,
    null
  );

  numberAppend(number, div, answer, help, check, correct);

  start.appendChild(number);

  const draggables = document.querySelectorAll(".draggable");
  const drags = document.querySelectorAll(".drag");

  draggables.forEach((draggable) => {
    //when dragging Starts
    draggable.addEventListener("dragstart", (e) => {
      draggable.classList.add("dragging");
      hoveringId = e.target.parentElement.id;
    });
    //when dragging ends
    draggable.addEventListener("dragend", () => {
      draggable.classList.remove("dragging");
      hoveringId = null;
    });
  });

  drags.forEach((drag) => {
    drag.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(drag, e.clientY);
      const draggable = document.querySelector(".dragging");
      const idFrom = e.target.parentElement.id;
      console.log("idFrom: " + idFrom);
      console.log("hoveringId: " + hoveringId);

      if (idFrom == hoveringId) {
        if (afterElement == null) {
          drag.appendChild(draggable);
        } else {
          drag.insertBefore(draggable, afterElement);
        }
      }
    });
  });
};
// ! ???
let addAnswerToArrayAndDb = (e, input) => {
  // input = text, radio,checkbox, drag
  //event data id tadatable
  let id = e.target.getAttribute("data-id");
  let table = e.target.getAttribute("data-table");
  //add to array
  //add to db
  console.log(table, id, input);
};

// ! questions making xx
let abv = (nb, element, tableName) => {
  let number = document.createElement("div");

  let h3 = createH3(nb);

  let label = createLabel(
    tableName + "_" + element.id,
    "Wofür steht " +
      element.question.replaceAll("<", "&lt;").replaceAll(">", "&gt;") +
      "? "
  );
  let input = createInput(
    "text",
    null,
    tableName + "_" + element.id,
    tableName + "_" + element.id
  );

  let answer = createAnswer(element.answer, element.id);

  let help = createButtons(
    element.id,
    tableName,
    "help",
    "help",
    arrClassHelp,
    null,
    "mousedown",
    function (e) {
      answersShow(e);
    },
    "mouseup",
    function (e) {
      answersHide(e);
    }
  );
  let check = createButtons(
    element.id,
    tableName,
    "check",
    "check",
    arrClassCheck,
    "text",
    "click",
    function (e) {
      checkThis(e, "text");
    },
    null,
    null
  );
  let correct = createButtons(
    element.id,
    tableName,
    "correct",
    "correct",
    arrClassCorrect,
    null,
    "click",
    function (e) {
      addAnswerToArrayAndDb(e, "text");
    },
    null,
    null
  );

  numberAppend(number, h3, label, input, answer, help, check, correct);

  start.appendChild(number);
};

let shutMe = () => {
  var navbarCollapse = document.querySelector(".navbar-collapse");
  navbarCollapse.classList.remove("show");
};
//! get values to make questions
let getValues = (path, tableName, all, name) => {
  console.log("getValues...??");
  shutMe(); // collapse the menu
  home.style.display = "none";
  questions.style.display = "block";
  start.innerHTML =
    "<h1 class= 'bigTitle' id=" + tableName + ">" + name + "</h1>";
  let alles = false;
  if (all) {
    alles = true;
  }
  fetch(path, {
    method: "POST",
    body: JSON.stringify({
      dataClass: tableName,
      all: alles,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((d) => {
      // console.log(d);
      buildQuestions(d, tableName);
      buildanswersUser(d, tableName);
    });
};
// !        始め               drag and drop        始め     //
let hoveringId = null;
function getDragAfterElement(drag, y) {
  const draggableElements = [
    ...drag.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
// !            終わり  drag and drop     終わり        //

// !show answersUser
let answersShow = (e) => {
  let id = e.target.getAttribute("data-id");
  let tableName = e.target.getAttribute("data-table");
  document.getElementById("help_" + id).style.visibility = "visible";
  answersDb[tableName][id]["helped"] = true;
};
// !removeClass
let removeClass = (e, radioCheckBox, from) => {
  console.log("remove class");
  let id;
  console.log("e.target: " + e.target);
  console.log("e.target.parentElement.id: " + e.target.parentElement.id);
  console.log("from: " + from);
  id = document.getElementById(e.target.id);
  //! e coming from radio buttons have wrong id, we want get their parents id
  if (id == null || radioCheckBox == "radio" || radioCheckBox == "checkbox") {
    id = document.getElementById(e.target.parentElement.id);
  }

  id.classList.remove("wrong");
  id.classList.remove("right");
};

// check if answer is correct when click chek
let checkThis = (e, inputType) => {
  let id = e.target.getAttribute("data-id");
  let table = e.target.getAttribute("data-table");
  console.log(id);
  console.log("please correct this for me");
  let answer;
  let myId;
  console.log(`${table}_${id}`);

  if (inputType == "text") {
    answer = document.getElementById(`${table}_${id}`).value;
  } else if (inputType == "radio") {
    myId = document.getElementById(`${table}_${id}`);
    let selectedRadioButton = myId.querySelector('input[type="radio"]:checked');
    answer = selectedRadioButton ? selectedRadioButton.value : null;
  } else if (inputType == "checkbox") {
    answer = "";
    myId = document.getElementById(`${table}_${id}`);
    let checkboxes = myId.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function (checkbox) {
      if (checkbox.checked) {
        answer += checkbox.value + ";";
      }
    });
  } else if (inputType == "drag") {
    myId = document.getElementById(`${table}_${id}`);

    let TextInsidediv = myId.getElementsByTagName("p");
    console.log("type of TextInsidediv");
    console.log(typeof TextInsidediv);

    let text = "";

    Object.values(TextInsidediv).forEach((val) => {
      text += val.innerHTML + ";";
    });
    answer = text;
  }
  console.log(answer, `${table}_${id}`);

  compareanswersUserSingle(answer, `${table}_${id}`);
};

// ! hide answersUser
let answersHide = (e) => {
  let id = e.target.getAttribute("data-id");

  document.getElementById("help_" + id).style.visibility = "hidden";
};
//get lists from db

//get all my answersUser
//

let answersUser = [];
let checkMyanswersUser = () => {
  //! all valeus from input text, radio and drag
  answersUser = [];
  const inputs = document.querySelectorAll("input[type='text']");
  const drags = document.querySelectorAll(".drag");
  const radios = document.querySelectorAll(".radio");
  const checkboxes = document.querySelectorAll(".checkbox");
  //all values from sort

  console.log("inputs: " + inputs.length);
  console.log(drags.length);
  //! loop start input type text
  for (index = 0; index < inputs.length; ++index) {
    if (inputs[index].className.match("form-control")) {
      continue;
    }
    // deal with inputs[index] element.
    let answer = {};
    answer["answer"] = inputs[index].value;

    answer.table = inputs[index].id.split("_")[0];
    answer.id = inputs[index].id.split("_")[1];

    answersUser.push(answer);
  }
  //! loop start tipe draggable
  for (index = 0; index < drags.length; ++index) {
    // deal with inputs[index] element.
    let answer = {};
    console.log(typeof drags[index]);

    answer.table = drags[index].id.split("_")[0];
    answer.id = drags[index].id.split("_")[1];
    let TextInsidediv = drags[index].getElementsByTagName("p");
    console.log("type of TextInsidediv");
    console.log(typeof TextInsidediv);

    let text = "";

    let space = "";
    Object.values(TextInsidediv).forEach((val) => {
      text += space + val.innerHTML;
      space = " ";
    });
    answer["answer"] = text;
    answersUser.push(answer);
  }

  //! loop start input tipe radio
  for (index = 0; index < radios.length; ++index) {
    // deal with inputs[index] element.
    let answer = {};
    const checkedInput = radios[index].querySelector(
      'input[type="radio"]:checked'
    );
    try {
      console.log("---------------------");
      console.log("---------------------");
      console.log(checkedInput.value);
      console.log("---------------------");
      console.log("---------------------");
      answer["answer"] = checkedInput.value;
    } catch {
      answer["answer"] = "";
    }

    answer.table = radios[index].id.split("_")[0];
    answer.id = radios[index].id.split("_")[1];

    answersUser.push(answer);
  }

  //! loop start input tipe checkboxes
  for (index = 0; index < checkboxes.length; ++index) {
    // deal with inputs[index] element.
    let answer = {};
    const checkedInputs = checkboxes[index].querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    answer["answer"] = "";
    checkedInputs.forEach((element) => {
      answer["answer"] += element.value + ";";
    });

    //   answer["answer"] += checkedInput.value + ";";
    // } catch {
    //   answer["answer"] = "";
    // }

    answer.table = checkboxes[index].id.split("_")[0];
    answer.id = checkboxes[index].id.split("_")[1];

    answersUser.push(answer);
  }
  //! loop ends
  console.log("###################");
  console.log("answersUser");
  console.log(answersUser);
  console.log("answersUser.length" + answersUser.length);
  //compare answersUser to answerDb

  compareanswersUser();
};

let compareanswersUserSingle = (answer, id) => {
  let myId = document.getElementById(id);
  let tb = id.substring(0, id.indexOf("_"));
  let nb = id.substring(id.indexOf("_") + 1, id.length);

  console.log("answer:" + answer);
  console.log("answer... " + answersDb[tb][nb]["answer"]);
  if (answersDb[tb][nb]["answer"].indexOf(answer) > -1) {
    console.log("answer:" + answer);
    myId.classList.add("right");
  } else {
    myId.classList.add("wrong");
  }
};

let compareanswersUser = () => {
  console.log("answersDb", answersDb);
  let table = "";

  console.log("answersDb" + answersDb);
  answersUser.forEach((element) => {
    table = element.table;
    let answer = element.answer;
    console.log(element);

    let expected = answersDb[element.table][element.id].answer;
    console.log("expected" + expected);
    // console.log("element.id");
    // console.log(element.id);

    console.log("answer " + answer);
    console.log("type of " + typeof expected);
    console.log("expected " + expected);
    if (expected.indexOf(answer) > -1) {
      // ! if right remove one from answers
      // ! but if clicked jhelp set 2
      if (answersDb[element.table][element.id]["helped"] == true) {
        answersDb[element.table][element.id]["points"] = 2;
      } else {
        answersDb[element.table][element.id]["points"] -= 1;
      }
      if (answersDb[element.table][element.id]["points"] < 0) {
        answersDb[element.table][element.id]["points"] = 0;
      }
      answersDb[element.table][element.id]["class"] = "right";
      console.log("very good");
    } else {
      answersDb[element.table][element.id]["points"] = 3;
      answersDb[element.table][element.id]["class"] = "wrong";
      console.log("WRONG");
    }
  });
  console.log(".........................");
  console.log("answersDb");
  console.log(answersDb);
  sendAnswers(table);
  colorAnswers();
};

let sendAnswers = (table) => {
  fetch("php/sendAnswers.php", {
    method: "POST",
    body: JSON.stringify({
      answersDb: answersDb[table],
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    // Do something with the response
    console.log(response);
  });
};

let colorAnswers = () => {
  const keys = Object.keys(answersDb);
  // print all keys
  console.log(keys);

  keys.forEach((key, index) => {
    console.log(`${key}: ${answersDb[key]}`);
    const keys2 = Object.keys(answersDb[key]);
    keys2.forEach((key2, index2) => {
      console.log(`${key2}: ${answersDb[key][key2].id}`);
      let table = key;
      let nb = answersDb[key][key2].id;
      let klass = answersDb[key][key2].class;
      let id = document.getElementById(table + "_" + nb);
      console.log(";;;;;;;;;;;;;;;;;;;;;;;;");
      console.log(id);
      id.classList.remove("wrong");
      id.classList.remove("right");
      id.classList.add(klass);
    });
  });
};

// mainbutton to cjheck answers
const checkAll = document.getElementById("checkAll");
checkAll.addEventListener("click", checkMyanswersUser);

//! start
getUserInfo("php/getuserinfo.php");
//load Questions

const nav_items = document.querySelectorAll(".nav-item");
const home = document.getElementById("home");
const questions = document.getElementById("questions");
nav_items.forEach((element) => {
  element.addEventListener("click", function (e) {
    // Get the value of the data-class attribute
    console.log(e.target.className);
    //! if is not drop down head
    if (!e.target.className.match("dropdown-toggle")) {
      let dataClass = e.target.getAttribute("data-class");
      console.log("..............");
      console.log(dataClass);
      if (dataClass == "Home") {
        home.style.display = "block";
        questions.style.display = "none";
        shutMe();
      }
    }
  });
});

let loadMenu = () => {
  fetch("php/loadMenu.php")
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // Log the JSON data in the console
      buildMenu(data);
    })
    .catch((error) => {
      console.error("Error:", error); // Log any errors
    });
};

const homeNavItem = document.querySelector(
  '.nav-link[data-class="Home"]'
).parentElement;

let buildMenu = (data) => {
  data.forEach((element) => {
    let li = document.createElement("li");

    // <a class="nav-link" href="#" data-class="testdb">test DB</a>
    if (element.mySubValues.length < 1) {
      li.className = "nav-item"; // Use "=" to set the class name
      let a = document.createElement("a");
      a.classList.add("nav-link");
      a.setAttribute("href", "#");
      a.setAttribute("data-class", element.mySubValues[0].name);
      a.innerText = element.name;
      a.addEventListener("click", function () {
        getValues("php/getValues.php", element.name, null, element.name); //version 1
      });
      li.append(a);
    } else {
      li.classList.add("nav-item", "dropdown");
      let a = document.createElement("a");
      a.classList.add("nav-link", "dropdown-toggle");
      a.setAttribute("href", "#");
      a.setAttribute("role", "button");
      a.setAttribute("data-bs-toggle", "dropdown");
      a.setAttribute("aria-expanded", "false");
      a.innerText = element.name;
      li.append(a);

      let ul = document.createElement("ul");
      ul.className = "dropdown-menu";
      element.mySubValues.forEach((el) => {
        let liInside = document.createElement("li");
        let aInside = document.createElement("a");
        aInside.className = "dropdown-item";
        aInside.setAttribute("href", "#");
        aInside.setAttribute("data-class", el.name);
        aInside.innerText = el.title;
        aInside.addEventListener("click", function () {
          getValues("php/getValues.php", el.name, null, el.title); //version 2
        });
        liInside.append(aInside);

        ul.append(liInside);
      });
      let liDivider = document.createElement("li");
      let hr = document.createElement("hr");
      hr.className = "dropdown-divider";
      liDivider.append(hr);
      let liClosing = document.createElement("li");
      let aClosing = document.createElement("a");
      aClosing.className = "dropdown-item";
      aClosing.setAttribute("href", "#");
      aClosing.setAttribute("data-class", element.name);
      aClosing.innerText = element.name + " Alles";
      aClosing.addEventListener("click", function () {
        getValues(
          "php/getValues.php",
          element.name,
          "all",
          element.name + " Alles"
        );
      });
      liClosing.append(aClosing);
      ul.append(liDivider);
      ul.append(liClosing);
      li.append(ul);
    }

    homeNavItem.insertAdjacentElement("afterend", li); // Use "appendChild" to append the new <li> element
  });
};

loadMenu();
// Set the variable to be sent

// START ING HERRE
getValues("php/getValues.php", "IoT", null, "Internet of Things");
home.style.display = "block";

// const dropdownItem = document.getElementsByClassName("dropdown-item");
// dropdownItem
