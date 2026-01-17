const catalogoJogos = [
    {
        id: "godofwar",
        titulo: "God of War: Ragnarok",
        genereo: "Ação/Aventura",
        descricao: "God of War: Ragnarok é um jogo de ação e aventura em terceira pessoa que continua a história de Kratos e seu filho Atreus enquanto enfrentam os desafios do Ragnarok na mitologia nórdica.",
        ano: 2022,
        imagem: "https://upload.wikimedia.org/wikipedia/pt/a/a5/God_of_War_Ragnar%C3%B6k_capa.jpg"
    },
    {
        id: "blackmyth",
        titulo: "Black Myth: Wukong",
        genero: "Ação/RPG",
        descricao: "Black Myth: Wukong é um jogo de ação e RPG baseado na clássica lenda chinesa Jornada ao Oeste, onde os jogadores controlam o Rei Macaco em sua jornada cheia de combates intensos e exploração.",
        ano: 2024,
        imagem: "https://upload.wikimedia.org/wikipedia/en/a/a6/Black_Myth_Wukong_cover_art.jpg"
    },
    {
        id: "ghostofyotei",
        titulo: "Ghost of Yotei",
        genero: "Ação/Aventura",
        descricao: "Ghost of Yotei é um jogo de ação e aventura em mundo aberto ambientado no Japão feudal, onde os jogadores exploram uma ilha misteriosa cheia de segredos e perigos sobrenaturais.",
        ano: 2023,
        imagem: "https://m.media-amazon.com/images/M/MV5BODA2YzRkODktNTIwYi00ZDk1LThlMTAtYzE4MGEyODM4NzZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: "horizonzero",
        titulo: "Horizon Zero Dawn Remastered",
        genero: "Ação/RPG",
        descricao: "Horizon Zero Dawn Remastered é uma versão aprimorada do aclamado jogo de ação e RPG, onde os jogadores assumem o papel de Aloy, uma caçadora em um mundo pós-apocalíptico dominado por máquinas.",
        ano: 2021,
        imagem: "https://image.api.playstation.com/vulcan/ap/rnd/202409/2716/16b33fa9a5c7285ba86a035b4a1c5f8eb430b407eae35ffd.png"
    },
    {
        id: "deathstranding",
        titulo: "Death Stranding 2",
        genero: "Ação",
        descricao: "Death Stranding 2 é a sequência do inovador jogo de ação e aventura, onde os jogadores exploram um mundo fragmentado e conectam comunidades isoladas enquanto enfrentam ameaças sobrenaturais.",
        ano: 2024,
        imagem: "" 
    },
    {
        id: "tlou1",
        titulo: "The Last Of Us Part I",
        genero: ""
    }
    
    
]
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

