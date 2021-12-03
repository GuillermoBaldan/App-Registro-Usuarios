function captureData() {
  let login = document.getElementById("login").value;
  let password = document.getElementById("password").value;
  return { login, password };
}

function sendingData(data) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:6001/login");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      if (response.success) {
        alert("Success");
      } else {
        alert("Failure");
      }
    }
  };
}

let data = captureData();
let LoginButton = document.getElementById("loginButton");
LoginButton.addEventListener("click", function () {
  sendingData(data);
});
