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