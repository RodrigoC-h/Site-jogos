// =======================
// INDEX.JS (copiar e colar)
// =======================

const catalogoJogos = [
    {
        id: "minecraft",
        titulo: "Minecraft",
        genero: "Ação/Aventura",
        descricao: "Explora, constrói e sobrevive num mundo gerado proceduralmente, sozinho ou com amigos.",
        ano: 2009,
        imagem: "IMG/Elden_ring_img.jpeg"
    },
    {
        id: "red_redemption",
        titulo: "Red Dead Redemption 2",
        genero: "Ação/RPG",
        descricao: "Segue Arthur Morgan, um fora da lei do gang Van der Linde em fuga depois de um assalto falhado. Acompanha o declínio do gang enquanto fogem da lei e de caçadores de recompensas, ao mesmo tempo que Arthur começa a questionar a própria vida criminosa",
        ano: 2020,
        imagem: "IMG/RDD_2.jpeg"
    },
    {
        id: "expedition_33",
        titulo: "Claire Obscur: Expedition 33",
        genero: "RPG",
        descricao: "Clair Obscur: Expedition 33 é um RPG por turnos com elementos em tempo real, ambientado em um mundo de fantasia inspirado na Belle Époque francesa, focado em uma expedição que tenta destruir a entidade conhecida como Paintress.",
        ano: 2025,
        imagem: "IMG/Clair_obscur_expedition_33_wallpaper.jpeg"
    },
    {
        id: "elden_ring",
        titulo: "Elden Ring",
        genero: "RPG",
        descricao: "Elden Ring é um RPG de ação em terceira pessoa num mundo aberto de fantasia sombria, conhecido pela dificuldade elevada e exploração extremamente livre das Terras Intermédias.",
        ano: 2022,
        imagem: "IMG/Elden_ring_img.jpeg"
    },
    {
        id: "The_witcher",
        titulo: "The Witcher",
        genero: "RPG",
        descricao: "The Witcher 3 é um RPG de ação em terceira pessoa passado num mundo de fantasia sombria inspirado em folclore eslavo, onde controlas Geralt de Rivia, um caçador de monstros à procura da filha adotiva, Ciri.",
        ano: 2015,
        imagem: "IMG/Thewitcher.jpeg"
    },
    {
        id: "cyberpunk",
        titulo: "Cyberpunk 2077",
        genero: "RPG",
        descricao: "Cyberpunk 2077 é um RPG de ação em mundo aberto num futuro distópico, onde jogas como V e exploras Night City, misturando narrativa, combate e escolhas com impacto.",
        ano: 2020,
        imagem: "IMG/cyberpunk.jpeg"
    },
];

// ---------- Elementos do modal ----------
const modal = document.getElementById("modalDetalhes");
const modalContent = document.querySelector("#modalDetalhes .modal-content");

const modalTitulo = document.getElementById("modalTitulo");
const modalGenero = document.getElementById("modalGenero");
const modalDescricao = document.getElementById("modalDescricao");
const modalAno = document.getElementById("modalAno");

const btnFecharX = document.getElementById("btnFecharModal");     // pode não existir no teu HTML
const btnFechar = document.getElementById("btnFecharModal2");
const btnComprar = document.getElementById("btnComprar");

// ---------- Pesquisa ----------
const inputPesquisa = document.getElementById("pesquisaJogos");

// Guarda o jogo atualmente aberto no modal
let jogoAberto = null;

// ---------- Funções ----------
function encontrarJogoPorId(id) {
    for (let i = 0; i < catalogoJogos.length; i++) {
        if (catalogoJogos[i].id === id) return catalogoJogos[i];
    }
    return null;
}

function abrirModal(id) {
    const jogoSelecionado = encontrarJogoPorId(id);
    if (!jogoSelecionado) return;

    jogoAberto = jogoSelecionado;

    modalTitulo.textContent = jogoSelecionado.titulo;
    modalGenero.textContent = "Género: " + jogoSelecionado.genero;
    modalDescricao.textContent = jogoSelecionado.descricao;
    modalAno.textContent = "Ano: " + jogoSelecionado.ano;

    // Mostra o modal
    modal.style.display = "block";

    // Liga o botão comprar ao jogo aberto
    if (btnComprar) {
        btnComprar.onclick = function (e) {
            e.stopPropagation();
            alert("Comprar: " + jogoSelecionado.titulo);
        };
    }
}

function fecharModal() {
    modal.style.display = "none";
    jogoAberto = null;
}

// ---------- Eventos dos cards (abrir modal) ----------
function ligarCards() {
    const cards = document.querySelectorAll(".card-jogo");

    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        const id = card.dataset.id;

        // Clicar no card abre o modal
        card.addEventListener("click", function () {
            abrirModal(id);
        });

        // Clicar no botão dentro do card abre o modal (e não deixa o clique "subir" duas vezes)
        const btn = card.querySelector("button");
        if (btn) {
            btn.addEventListener("click", function (e) {
                e.stopPropagation();
                abrirModal(id);
            });
        }
    }
}

// ---------- Pesquisa (filtra pelos títulos dentro da lista "Sugestões para ti") ----------
function aplicarPesquisa() {
    if (!inputPesquisa) return;

    inputPesquisa.addEventListener("input", function () {
        const termo = inputPesquisa.value.trim().toLowerCase();
        const cards = document.querySelectorAll(".seccao-sugestoes .card-jogo");

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const id = card.dataset.id;
            const jogo = encontrarJogoPorId(id);

            const titulo = jogo ? jogo.titulo.toLowerCase() : "";
            const aparece = titulo.includes(termo);

            card.style.display = aparece ? "" : "none";
        }
    });
}

// ---------- Fechar modal ----------
if (btnFecharX) {
    btnFecharX.addEventListener("click", function (e) {
        e.stopPropagation();
        fecharModal();
    });
}

if (btnFechar) {
    btnFechar.addEventListener("click", function (e) {
        e.stopPropagation();
        fecharModal();
    });
}

// Clicar fora da caixa fecha
if (modal) {
    modal.addEventListener("click", function (e) {
        if (e.target === modal) fecharModal();
    });
}

// Clicar dentro da caixa NÃO fecha
if (modalContent) {
    modalContent.addEventListener("click", function (e) {
        e.stopPropagation();
    });
}

// Tecla ESC fecha
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && modal.style.display === "block") {
        fecharModal();
    }
});

// ---------- Arranque ----------
ligarCards();
aplicarPesquisa();
