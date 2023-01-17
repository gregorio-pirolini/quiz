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
  start.innerHTML =
    "<h1 class= 'bigTitle' id=" + tableName + ">" + tableName + "</h1>";
  let nb = 1;

  arr.forEach((element) => {
    if (element.typeOfQuestion == "abv") {
      abv(nb, element, tableName);
    } else if (element.typeOfQuestion == "explain") {
      explain(nb, element, tableName);
    } else if (element.typeOfQuestion == "sort") {
      sortOut(nb, element, tableName);
    } else if (element.typeOfQuestion == "whats") {
      whatis(nb, element, tableName, "is ");
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


 // ! questions making 1
let whatis = (nb, element, tableName, verbe, image) => {
  let number = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.innerText = "question " + nb;
  let what = "";
  if (verbe != "") {
    what = "What ";
  }
  let label = document.createElement("label");
  label.setAttribute("for", tableName + "_" + element.id);
  let questions;
  if (image == "image") {
    questions = element.question.split(";");
    imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = questions[0];
    imgDiv.appendChild(img);
    //remove Picture from array
    questions.shift();
    label.innerHTML = what + verbe + questions[0];
  } else {
    label.innerHTML = what + verbe + element.question;
  }

  let input = document.createElement("input");
  input.type = "text";
  input.id = tableName + "_" + element.id;
  input.name = tableName + "_" + element.id;
  input.addEventListener("click", (e) => {
    removeClass(e);
  });
  let answer = document.createElement("p");
  if (element.answer.length < 1) {
    answer.innerText = "??";
  } else {
    answer.innerText = element.answer;
  }

  answer.className = "helpMe";
  answer.id = "help_" + element.id;

  let help = document.createElement("button");
  let check = document.createElement("button");
  let correct = document.createElement("button");
  help.value = "help";
  help.innerHTML = "help";
  help.className = "help btn btn-primary mb-5 ms-1";
  help.setAttribute("data-id", element.id);
  help.setAttribute("data-table", tableName);

  help.addEventListener("mousedown", (e) => {
    answersShow(e);
  });
  help.addEventListener("mouseup", (e) => {
    answersHide(e);
  });
  check.value = "check";
  check.innerHTML = "check";
  check.className = "check btn btn-primary  mb-5 ms-1";
  correct.value = "correct";
  correct.innerHTML = "correct";
  correct.className = "correct btn btn-primary mb-5 ms-1";
  correct.setAttribute("data-id", element.id);
  correct.setAttribute("data-table", tableName);
  correct.addEventListener("click", (e) => {
    addAnswerToArrayAndDb(e, "text");
  });
  number.appendChild(h3);
  number.appendChild(label);
  if (image == "image") {
    number.appendChild(imgDiv);
  }
  number.appendChild(input);
  number.appendChild(answer);
  number.appendChild(help);
  number.appendChild(check);
  number.appendChild(correct);

  start.appendChild(number);
};
// ! questions making 2
let explain = (nb, element, tableName) => {
  let number = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.innerText = "question " + nb;

  let label = document.createElement("label");
  label.setAttribute("for", tableName + "_" + element.id);
  label.innerHTML = "Explain " + element.question + "! ";
  let input = document.createElement("input");
  input.type = "text";
  input.id = tableName + "_" + element.id;
  input.name = tableName + "_" + element.id;
  input.addEventListener("click", (e) => {
    removeClass(e);
  });
  let answer = document.createElement("p");
  console.log("element.answer: " + element.answer);
  if (element.answer.length < 1) {
    answer.innerText = "??";
  } else {
    answer.innerText = element.answer.join("");
  }
  answer.className = "helpMe";
  answer.id = "help_" + element.id;
  let help = document.createElement("button");
  let check = document.createElement("button");
  let correct = document.createElement("button");
  help.value = "help";
  help.innerHTML = "help";
  help.className = "help btn btn-primary mb-5 ms-1";
  help.setAttribute("data-id", element.id);
  help.setAttribute("data-table", tableName);
  help.addEventListener("mousedown", (e) => {
    answersShow(e);
  });
  help.addEventListener("mouseup", (e) => {
    answersHide(e);
  });
  check.value = "check";
  check.innerHTML = "check";
  check.className = "check btn btn-primary  mb-5 ms-1";
  correct.value = "correct";
  correct.innerHTML = "correct";

  correct.className = "correct btn btn-primary mb-5 ms-1";
  correct.setAttribute("data-id", element.id);
  correct.setAttribute("data-table", tableName);
  correct.addEventListener("click", (e) => {
    addAnswerToArrayAndDb(e, "text");
  });

  number.appendChild(h3);
  number.appendChild(label);
  number.appendChild(input);
  number.appendChild(answer);
  number.appendChild(help);
  number.appendChild(check);
  number.appendChild(correct);

  start.appendChild(number);
};
// ! questions making 3
let multiSingle = (nb, element, tableName, image) => {
  let questions = element.question.split(";");
  let number = document.createElement("div");
  number.id = tableName + "_" + element.id;
  number.className = "radio";

  number.addEventListener("click", (e) => {
    removeClass(e);
  });
  let h3 = document.createElement("h3");
  h3.innerText = "question " + nb;

  let h6 = document.createElement("h6");
  let imgDiv;
  if (image == "image") {
    imgDiv = document.createElement("div");
    let img = document.createElement("img");
    img.src = questions[0];
    imgDiv.appendChild(img);
    //remove Picture from array
    questions.shift();
  }

  h6.innerText = questions[0];
  number.appendChild(h3);
  number.appendChild(h6);
  if (image == "image") {
    number.appendChild(imgDiv);
  }
  questions.shift();
  let nbRadio = 0;
  questions.forEach((el) => {
    const br = document.createElement("br");
    let label = document.createElement("label");
    label.setAttribute("for", tableName + "_" + element.id + "_" + nbRadio);
    label.innerHTML = el;
    let input = document.createElement("input");
    input.type = "radio";
    input.value = el;
    input.id = tableName + "_" + element.id + "_" + nbRadio;
    input.name = tableName + "_" + element.id;
    input.addEventListener("change", (e) => {
      removeClass(e, "radio");
    });
    number.appendChild(input);
    number.appendChild(label);
    number.appendChild(br);
    nbRadio++;
  });

  let answer = document.createElement("p");

  if (element.answer.length < 1) {
    answer.innerText = "??";
  } else {
    answer.innerText = element.answer;
  }

  answer.className = "helpMe";
  answer.id = "help_" + element.id;
  let help = document.createElement("button");
  let check = document.createElement("button");
  let correct = document.createElement("button");
  help.value = "help";
  help.innerHTML = "help";
  help.className = "help btn btn-primary mb-5 ms-1";
  help.setAttribute("data-id", element.id);
  help.setAttribute("data-table", tableName);
  help.addEventListener("mousedown", (e) => {
    answersShow(e);
  });
  help.addEventListener("mouseup", (e) => {
    answersHide(e);
  });
  check.value = "check";
  check.innerHTML = "check";
  check.className = "check btn btn-primary  mb-5 ms-1";

  correct.value = "correct";
  correct.innerHTML = "correct";
  correct.className = "correct btn btn-primary mb-5 ms-1";
  correct.setAttribute("data-id", element.id);
  correct.setAttribute("data-table", tableName);
  correct.addEventListener("click", (e) => {
    addAnswerToArrayAndDb(e, "radio");
  });

  number.appendChild(answer);
  number.appendChild(help);
  number.appendChild(check);
  number.appendChild(correct);

  start.appendChild(number);
};
// ! questions making 4
let multiMulti = (nb, element, tableName) => {
  let questions = element.question.split(";");
  let number = document.createElement("div");
  number.id = tableName + "_" + element.id;
  number.className = "checkbox";

  number.addEventListener("click", (e) => {
    removeClass(e);
  });
  let h3 = document.createElement("h3");
  h3.innerText = "question " + nb;

  let h6 = document.createElement("h6");
  h6.innerText = questions[0];
  number.appendChild(h3);
  number.appendChild(h6);
  questions.shift();
  let nbCheckbox = 0;
  questions.forEach((el) => {
    const br = document.createElement("br");
    let label = document.createElement("label");
    label.setAttribute("for", tableName + "_" + element.id + "_" + nbCheckbox);
    label.innerHTML = el;
    let input = document.createElement("input");
    input.type = "checkbox";
    input.value = el;
    input.id = tableName + "_" + element.id + "_" + nbCheckbox;
    input.name = tableName + "_" + element.id;
    input.addEventListener("change", (e) => {
      removeClass(e, "checkbox");
    });
    number.appendChild(input);
    number.appendChild(label);
    number.appendChild(br);
    nbCheckbox++;
  });

  let answer = document.createElement("p");

  if (element.answer.length < 1) {
    answer.innerText = "??";
  } else {
    answer.innerText = element.answer;
  }

  answer.className = "helpMe";
  answer.id = "help_" + element.id;
  let help = document.createElement("button");
  let check = document.createElement("button");
  let correct = document.createElement("button");
  help.value = "help";
  help.innerHTML = "help";
  help.className = "help btn btn-primary mb-5 ms-1";
  help.setAttribute("data-id", element.id);
  help.setAttribute("data-table", tableName);
  help.addEventListener("mousedown", (e) => {
    answersShow(e);
  });
  help.addEventListener("mouseup", (e) => {
    answersHide(e);
  });
  check.value = "check";
  check.innerHTML = "check";
  check.className = "check btn btn-primary  mb-5 ms-1";

  correct.value = "correct";
  correct.innerHTML = "correct";
  correct.className = "correct btn btn-primary mb-5 ms-1";
  correct.setAttribute("data-id", element.id);
  correct.setAttribute("data-table", tableName);
  correct.addEventListener("click", (e) => {
    addAnswerToArrayAndDb(e, "checkbox");
  });

  number.appendChild(answer);
  number.appendChild(help);
  number.appendChild(check);
  number.appendChild(correct);

  start.appendChild(number);
};

// ! questions making 5
let sortOut = (nb, element, tableName) => {
  let number = document.createElement("div");
  let h3 = document.createElement("h3");
  h3.innerText = "question " + nb;

  let label = document.createElement("label");
  label.setAttribute("for", tableName + "_" + element.id);
  label.innerHTML = "Sort out " + element.question;
  let div = document.createElement("div");
  div.className = "drag";
  div.id = tableName + "_" + element.id;
  div.addEventListener("click", (e) => {
    removeClass(e);
  });
  let allValues = element.question.split(" ");
  const shuffledArray = allValues.sort((a, b) => 0.5 - Math.random());
  shuffledArray.forEach((element) => {
    let p = document.createElement("p");
    p.className = "draggable";
    p.setAttribute("draggable", true);
    p.innerText = element;

    div.appendChild(p);
  });

  let answer = document.createElement("p");
  answer.innerText = element.question;
  answer.className = "helpMe";
  answer.id = "help_" + element.id;
  let help = document.createElement("button");
  let check = document.createElement("button");
  let correct = document.createElement("button");
  help.value = "help";
  help.innerHTML = "help";
  help.className = "help btn btn-primary mb-5 ms-1";
  help.setAttribute("data-id", element.id);
  help.setAttribute("data-table", tableName);
  help.addEventListener("mousedown", (e) => {
    answersShow(e);
  });
  help.addEventListener("mouseup", (e) => {
    answersHide(e);
  });
  check.value = "check";
  check.innerHTML = "check";
  check.className = "check btn btn-primary  mb-5 ms-1";

  correct.value = "correct";
  correct.innerHTML = "correct";
  correct.className = "correct btn btn-primary mb-5 ms-1";
  correct.setAttribute("data-id", element.id);
  correct.setAttribute("data-table", tableName);
  correct.addEventListener("click", (e) => {
    addAnswerToArrayAndDb(e, "drag");
  });

  number.appendChild(h3);
  number.appendChild(label);
  number.appendChild(div);
  number.appendChild(answer);
  number.appendChild(help);
  number.appendChild(check);
  number.appendChild(correct);

  start.appendChild(number);

  // div class="drag" id="question01">
  //       <p class="draggable" draggable="true">1</p>
  //       <p class="draggable" draggable="true">2</p>
  //       <p class="draggable" draggable="true">7</p>
  //       <p class="draggable" draggable="true">3</p>
  //       <p class="draggable" draggable="true">4</p>
  //       <p class="draggable" draggable="true">5</p>
  //       <p class="draggable" draggable="true">6</p>
  //     </div>

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
  let h3 = document.createElement("h3");
  h3.innerText = "question " + nb;

  let label = document.createElement("label");
  label.setAttribute("for", tableName + "_" + element.id);
  label.innerHTML = "Wofür steht " + element.question + "? ";
  let input = document.createElement("input");
  input.type = "text";
  input.id = tableName + "_" + element.id;
  input.name = tableName + "_" + element.id;
  input.addEventListener("click", (e) => {
    removeClass(e);
  });
  let answer = document.createElement("p");
  if (element.answer.length < 1) {
    answer.innerText = "??";
  } else {
    answer.innerText = element.answer;
  }
  answer.className = "helpMe";
  answer.id = "help_" + element.id;
  let help = document.createElement("button");
  let check = document.createElement("button");
  let correct = document.createElement("button");
  help.value = "help";
  help.innerHTML = "help";
  help.className = "help btn btn-primary mb-5 ms-1";
  help.setAttribute("data-id", element.id);
  help.setAttribute("data-table", tableName);

  help.addEventListener("mousedown", (e) => {
    answersShow(e);
  });
  help.addEventListener("mouseup", (e) => {
    answersHide(e);
  });
  check.value = "check";
  check.innerHTML = "check";
  check.className = "check btn btn-primary  mb-5 ms-1";
  //---
  correct.value = "correct";
  correct.innerHTML = "correct";
  correct.className = "correct btn btn-primary mb-5 ms-1";
  correct.setAttribute("data-id", element.id);
  correct.setAttribute("data-table", tableName);
  correct.addEventListener("click", (e) => {
    addAnswerToArrayAndDb(e, "text");
  });

  number.appendChild(h3);
  number.appendChild(label);
  number.appendChild(input);
  number.appendChild(answer);
  number.appendChild(help);
  number.appendChild(check);
  number.appendChild(correct);

  start.appendChild(number);
};

//! get values to make questions
let getValues = (path, tableName) => {
  fetch(path, {
    method: "POST",
    body: JSON.stringify({
      dataClass: tableName,
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
let removeClass = (e, radioCheckBox) => {
  // console.log("remove class");
  let id;
  console.log(e.target);
  console.log(e.target.parentElement.id);

  id = document.getElementById(e.target.id);
  //! e coming from radio buttons have wrong id, we want get their parents id
  if (id == null || radioCheckBox == "radio" || radioCheckBox == "checkbox") {
    id = document.getElementById(e.target.parentElement.id);
  }

  id.classList.remove("wrong");
  id.classList.remove("right");
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
      } else {
        home.style.display = "none";
        questions.style.display = "block";
        getValues("php/getValues.php", dataClass);
      }
    }
  });
});


let loadMenu = () =>
{ 
  
  
}



// Set the variable to be sent

// START ING HERRE
// getValues("php/getValues.php", "wiso1");
home.style.display = "block";
