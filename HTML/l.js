function Validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "user") {
    alert("login succesfully");
    //  return false;l̥
  } else {
    alert("login failed");
  }
}

Validate();