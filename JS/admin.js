function abrirAdmin() {
    document.getElementById("adminModal").classList.add("ativo");
}

function fecharAdmin() {
    document.getElementById("adminModal").classList.remove("ativo");
    document.getElementById("mensagem").textContent = "";
}

const form = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");
const zonaSugestoes = document.getElementById("sugestoesJogos");

document.addEventListener("DOMContentLoaded", function () {
    const jogosGuardados = JSON.parse(localStorage.getItem("jogosAdmin")) || [];
    jogosGuardados.forEach(jogo => criarCartaoJogo(jogo));
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nomejogo").value.trim();
    const genero = document.getElementById("genero").value;
    const descricao = document.getElementById("descricao").value.trim();
    const avaliacao = document.getElementById("avaliacao").value;
    const imagem = document.getElementById("imagem").value.trim();

    if (!nome || !genero || !descricao || !avaliacao || !imagem) {
        mensagem.textContent = "Preenche todos os campos, incluindo a imagem.";
        mensagem.style.color = "#ff4d4d";
        return;
    }

    const jogo = {
        id: "jogo_" + Date.now(),
        titulo: nome,
        genero,
        descricao,
        ano: new Date().getFullYear(),
        imagem
    };

    const jogos = JSON.parse(localStorage.getItem("jogosAdmin")) || [];
    jogos.push(jogo);
    localStorage.setItem("jogosAdmin", JSON.stringify(jogos));

    criarCartaoJogo(jogo);

    mensagem.textContent = "Jogo adicionado com sucesso!";
    mensagem.style.color = "#4dff4d";

    form.reset();
});

function criarCartaoJogo(jogo) {
    const card = document.createElement("div");
    card.className = "card-jogo";
    card.dataset.id = jogo.id;

    const img = document.createElement("img");
    img.src = jogo.imagem;
    img.alt = jogo.titulo;

    const h3 = document.createElement("h3");
    h3.textContent = jogo.titulo;

    const btn = document.createElement("button");
    btn.textContent = "Ver detalhes";

    card.append(img, h3, btn);
    zonaSugestoes.appendChild(card);

    btn.addEventListener("click", function (e) {
        e.stopPropagation();
        if (typeof abrirModal === "function") abrirModal(jogo.id);
    });

    if (typeof catalogoJogos !== "undefined") {
        catalogoJogos.push(jogo);
    }
}

function removerJogo() {
    const nome = document.getElementById("nomeRemover").value.trim().toLowerCase();
    if (!nome) {
        alert("Introduz o nome do jogo a remover.");
        return;
    }

    let jogos = JSON.parse(localStorage.getItem("jogosAdmin")) || [];
    const index = jogos.findIndex(j => j.titulo.toLowerCase() === nome);

    if (index === -1) {
        alert("Esse jogo não existe.");
        return;
    }

    const jogoRemovido = jogos[index];
    jogos.splice(index, 1);
    localStorage.setItem("jogosAdmin", JSON.stringify(jogos));

    const card = document.querySelector(`.card-jogo[data-id="${jogoRemovido.id}"]`);
    if (card) card.remove();

    if (typeof catalogoJogos !== "undefined") {
        const i = catalogoJogos.findIndex(j => j.id === jogoRemovido.id);
        if (i !== -1) catalogoJogos.splice(i, 1);
    }

    alert("Jogo removido com sucesso.");
    document.getElementById("nomeRemover").value = "";
}
