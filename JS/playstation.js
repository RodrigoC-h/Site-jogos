const catalogoJogos = [
    {
        id: "godofwar",
        titulo: "God of War: Ragnarok",
        genereo: "Ação/Aventura",
        descricao: "God of War: Ragnarok é um jogo de ação e aventura em terceira pessoa que continua a história de Kratos e seu filho Atreus enquanto enfrentam os desafios do Ragnarok na mitologia nórdica.",
        ano: 2022,
        imagem: "IMG/Kratos_.jpeg"
    },
    {
        id: "blackmyth",
        titulo: "Black Myth: Wukong",
        genero: "Ação/RPG",
        descricao: "Black Myth: Wukong é um jogo de ação e RPG baseado na clássica lenda chinesa Jornada ao Oeste, onde os jogadores controlam o Rei Macaco em sua jornada cheia de combates intensos e exploração.",
        ano: 2024,
        imagem: "IMG/WUKONG WALLPAPER 4K.jpg"
    },
    {
        id: "ghostofyotei",
        titulo: "Ghost of Yotei",
        genero: "Ação/Aventura",
        descricao: "Ghost of Yotei é um jogo de ação e aventura em mundo aberto ambientado no Japão feudal, onde os jogadores exploram uma ilha misteriosa cheia de segredos e perigos sobrenaturais.",
        ano: 2023,
        imagem: "IMG/Ghost_yot.jpeg"
    },
    {
        id: "horizonzero",
        titulo: "Horizon Zero Dawn Remastered",
        genero: "Ação/RPG",
        descricao: "Horizon Zero Dawn Remastered é uma versão aprimorada do aclamado jogo de ação e RPG, onde os jogadores assumem o papel de Aloy, uma caçadora em um mundo pós-apocalíptico dominado por máquinas.",
        ano: 2021,
        imagem: "IMG/Hzd ✖️.jpg"
    },
    {
        id: "gt7",
        titulo: "Gran Turismo 7",
        genero: "Corrida",
        descricao: "Gran Turismo 7 é um simulador de corrida que oferece uma experiência realista de direção, com uma vasta seleção de carros e pistas, além de modos de jogo variados para os entusiastas do automobilismo.",
        ano: 2022,
        imagem: "IMG/Gran Turismo 7.jpg"
    },
    {
        id: "deathstranding",
        titulo: "Death Stranding 2",
        genero: "Ação",
        descricao: "Death Stranding 2 é a sequência do inovador jogo de ação e aventura, onde os jogadores exploram um mundo fragmentado e conectam comunidades isoladas enquanto enfrentam ameaças sobrenaturais.",
        ano: 2024,
        imagem: "IMG/KOM (@the_art_cut_off) on X.jpeg" 
    },
    {
        id: "tlou1",
        titulo: "The Last Of Us Part I",
        genero: "Ação/Aventura",
        descricao: "The Last Of Us Part I é um remake do aclamado jogo de ação e aventura, onde os jogadores acompanham a jornada de Joel e Ellie em um mundo pós-apocalíptico repleto de perigos e emoções intensas.",
        ano: 2022,
        imagem: ""
    },
    {
        id: "astrobot",
        titulo: "Astro Bot",
        genero: "Plataforma",
        descricao: "Astro Bot é um jogo de plataforma em realidade virtual onde os jogadores controlam um pequeno robô em uma aventura cheia de desafios criativos e ambientes vibrantes.",
        ano: 2024,
        imagem: "IMG/Astrobot.jpeg"
    },
    
    
]
const lista = document.getElementById("listaJogos");

catalogoJogos.forEach(jogo => {
    lista.innerHTML += `
        <div style="margin-bottom:20px">
            <h2>${jogo.titulo}</h2>
            <p><strong>Género:</strong> ${jogo.genero || jogo.genereo}</p>
            <p><strong>Ano:</strong> ${jogo.ano}</p>
            <img src="${jogo.imagem}" width="200">
            <p>${jogo.descricao}</p>
            <hr>
        </div>
    `;
});

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

