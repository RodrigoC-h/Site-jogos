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
        imagem: ""
    },
];

const modal = document.getElementById("modalDetalhes");
const modalTitulo = document.getElementById("modalTitulo");
const modalGenero = document.getElementById("modalGenero");
const modalDescricao = document.getElementById("modalDescricao");
const modalAno = document.getElementById("modalAno");
const btnFecharX = document.getElementById("btnFecharModal");
const btnFechar = document.getElementById("btnFecharModal2");

function abrirModal(id) {
    let jogoSelecionado = null;

    for (let i = 0; i < catalogoJogos.length; i++) {
        if (catalogoJogos[i].id === id) {
            jogoSelecionado = catalogoJogos[i];
            break;
        }
    }

    if (jogoSelecionado === null) {
        return;
    }

    modalTitulo.textContent = jogoSelecionado.titulo;
    modalGenero.textContent = "Género: " + jogoSelecionado.genero;
    modalDescricao.textContent = jogoSelecionado.descricao;
    modalAno.textContent = "Ano: " + jogoSelecionado.ano;

    // ✅ ESTA LINHA FALTAVA
    modal.style.display = "block";
}

const cards = document.querySelectorAll(".card-jogo");

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        const id = this.dataset.id;
        abrirModal(id);
    });
}

function fecharModal() {
    modal.style.display = "none";
}

btnFecharX.addEventListener("click", fecharModal);
btnFechar.addEventListener("click", fecharModal);

modal.addEventListener("click", function (e) {
    if (e.target === modal) fecharModal();
});
