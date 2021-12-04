function captureData() {
  let login = document.getElementById("LoginInput").value;
  let password = document.getElementById("passwordInput").value;
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
        console.log("Success");
      } else {
        console.log("Failure");
        console.log(response.jwt);
        console.log(response.usuario);
      }
    }
  };
}

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("loginButton").addEventListener("click", function () {
    let data = captureData();
    sendingData(data);
  });
});
