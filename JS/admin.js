 if (localStorage.getItem("userRole") !== "admin") {
    alert("Só administradores têm acesso!");
    window.location.href = "login.html";
}
const form = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const jogo = {
        nome: document.getElementById("nomejogo").value,
        genero: document.getElementById("genero").value,
        descricao: document.getElementById("descricao").value,
        avaliacao: parseFloat(document.getElementById("avaliacao").value)
    };
    let catalogo = JSON.parse(localStorage.getItem("jogos")) || [];
    catalogo.push(jogo);
    localStorage.setItem("jogos", JSON.stringify(catalogo));
    mensagem.textContent = "Jogo adicionado com sucesso!";
    form.reset();
});

    