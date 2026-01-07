function login() {

  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  if (username === "admin" && password === "1234") {
    window.location.href = "admin.html";
  } else {
    alert("Utilizador ou password incorretos!");
  }
}
