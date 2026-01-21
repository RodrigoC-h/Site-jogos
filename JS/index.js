let jogoAtual = null;

// Catálogo base de jogos
let catalogoJogos = [
    {
        id: "minecraft",
        titulo: "Minecraft",
        genero: "Ação/Aventura",
        descricao: "Explora, constrói e sobrevive num mundo gerado proceduralmente, sozinho ou com amigos.",
        ano: 2009
    },
    {
        id: "red_redemption",
        titulo: "Red Dead Redemption 2",
        genero: "Ação/Aventura",
        descricao: "Uma épica história no velho oeste, com um mundo aberto riquíssimo e imersivo.",
        ano: 2018
    },
    {
        id: "expedition_33",
        titulo: "Claire Obscur: Expedition 33",
        genero: "RPG",
        descricao: "Um RPG artístico num mundo surreal dominado por uma entidade misteriosa.",
        ano: 2025
    },
    {
        id: "elden_ring",
        titulo: "Elden Ring",
        genero: "RPG/Ação",
        descricao: "Explora um vasto mundo de fantasia criado por Hidetaka Miyazaki e George R. R. Martin.",
        ano: 2022
    },
    {
        id: "The_witcher",
        titulo: "The Witcher 3",
        genero: "RPG",
        descricao: "Acompanha Geralt de Rívia numa aventura épica cheia de escolhas e consequências.",
        ano: 2015
    },
    {
        id: "cyberpunk",
        titulo: "Cyberpunk 2077",
        genero: "RPG/Ação",
        descricao: "Explora Night City num futuro distópico dominado por tecnologia e poder.",
        ano: 2020
    }
];

// Liga apenas os botões "Ver detalhes"
document.querySelectorAll(".card-jogo").forEach(card => {
    const btn = card.querySelector("button");
    if (btn) {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            abrirModal(card.dataset.id);
        });
    }
});

function abrirModal(id) {
    const jogo = catalogoJogos.find(j => j.id === id);
    if (!jogo) return;

    jogoAtual = jogo;

    document.getElementById("modalTitulo").textContent = jogo.titulo;
    document.getElementById("modalGenero").textContent = "Género: " + jogo.genero;
    document.getElementById("modalDescricao").textContent = jogo.descricao;
    document.getElementById("modalAno").textContent = "Ano: " + jogo.ano;

    document.getElementById("modalDetalhes").classList.add("ativo");
}


function fecharModal() {
    document.getElementById("modalDetalhes").classList.remove("ativo");
}

// Pesquisa
const inputPesquisa = document.getElementById("pesquisaJogos");
if (inputPesquisa) {
    inputPesquisa.addEventListener("input", function () {
        const termo = this.value.toLowerCase();
        document.querySelectorAll(".card-jogo").forEach(card => {
            const titulo = card.querySelector("h3").textContent.toLowerCase();
            card.style.display = titulo.includes(termo) ? "block" : "none";
        });
    });
}

const btnComprar = document.getElementById("btnComprar");

if (btnComprar) {
    btnComprar.addEventListener("click", function () {
        if (jogoAtual) {
            alert("Comprado: " + jogoAtual.titulo);
        }
    });
}
