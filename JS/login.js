const utilizadores = [
    { user: "admin", pass: "1234" },
    { user: "user1", pass: "pass1" },
    { user: "user2", pass: "pass2" }
];

function abrirLogin() {
    document.getElementById("loginModal").classList.add("ativo");
}

function fecharLogin() {
    document.getElementById("loginModal").classList.remove("ativo");

    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
}


function login() {
    const u = document.getElementById("user").value.trim();
    const p = document.getElementById("pass").value.trim();

    const encontrado = utilizadores.find(el => el.user === u && el.pass === p);

    if (!encontrado) {
        alert("Credenciais inválidas.");
        return;
    }

    fecharLogin();

    if (encontrado.user === "admin") {
        abrirAdmin();
    }
}
