let jogoAtual = null;

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
    },
    {
        id: "civilization",
        titulo: "Civilization VI",
        genero: "Estratégia",
        descricao: "Constrói uma civilização desde a antiguidade até ao futuro e domina o mundo pela diplomacia, ciência ou guerra.",
        ano: 2016
    },
    {
        id: "age_empires",
        titulo: "Age of Empires IV",
        genero: "Estratégia",
        descricao: "Um clássico jogo de estratégia em tempo real com civilizações históricas e batalhas épicas.",
        ano: 2021
    },
    {
        id: "starcraft",
        titulo: "StarCraft II",
        genero: "Estratégia",
        descricao: "Estratégia em tempo real num universo de ficção científica com três raças em guerra.",
        ano: 2010
    }
];


document.querySelectorAll(".card-jogo .btn-detalhes").forEach(botao => {
    botao.addEventListener("click", function () {
        const card = this.closest(".card-jogo");
        if (!card) return;
        abrirModal(card.dataset.id);
    });
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


const inputPesquisa = document.getElementById("pesquisaJogos");
const filtroGenero = document.getElementById("filtroGenero");

function aplicarFiltros() {
    const termo = (inputPesquisa?.value || "").toLowerCase().trim();
    const generoSel = (filtroGenero?.value || "todos").toLowerCase();

    document.querySelectorAll(".card-jogo").forEach(card => {
        const id = card.dataset.id;
        const jogo = catalogoJogos.find(j => j.id === id);

        const titulo = (jogo ? jogo.titulo : card.querySelector("h3")?.textContent || "").toLowerCase();
        const genero = (jogo ? jogo.genero : "").toLowerCase();

        const okTitulo = titulo.includes(termo);
        const okGenero = (generoSel === "todos") ? true : genero.includes(generoSel);

        card.style.display = (okTitulo && okGenero) ? "flex" : "none";
    });
}

if (inputPesquisa) inputPesquisa.addEventListener("input", aplicarFiltros);
if (filtroGenero) filtroGenero.addEventListener("change", aplicarFiltros);

aplicarFiltros();

const btnComprar = document.getElementById("btnComprar");
if (btnComprar) {
    btnComprar.addEventListener("click", function () {
        if (jogoAtual) alert("Comprado: " + jogoAtual.titulo);
    });
}
