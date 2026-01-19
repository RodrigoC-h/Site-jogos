function login(event) {

  event.preventDefault();

  const users = [
    { username: "admin", password: "1234" },
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
  ];

  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  if (username == "admin" && password == "1234") {
    window.location.href = "index_pos_login.html";
  } else if (username == "user1" && password == "pass1" || username == "user2" && password == "pass2") {
    window.location.href = "index.html";
  } else {
    alert("Utilizador ou password incorretos!");
  }

  
}

