let jogoAtual = null;

const catalogoJogos = [
  {
    id: "halo_infinite",
    titulo: "Halo Infinite",
    genero: "FPS",
    descricao: `Regressa ao universo clássico de Halo numa nova aventura épica.

Explora um vasto mundo aberto, enfrenta os Banished e descobre o destino do Master Chief numa campanha intensa, acompanhada de modos multijogador dinâmicos.`,
    ano: 2021
  },
  {
    id: "gears5",
    titulo: "Gears 5",
    genero: "Ação",
    descricao: `Uma campanha cinematográfica com personagens carismáticas e batalhas brutais.

Joga sozinho ou em cooperação e descobre segredos do universo Gears enquanto enfrentas hordas de inimigos.`,
    ano: 2019
  },
  {
    id: "forza_horizon5",
    titulo: "Forza Horizon 5",
    genero: "Corridas",
    descricao: `Explora um enorme mundo aberto no México com dezenas de ambientes diferentes.

Participa em corridas arcade, eventos especiais e desafios enquanto conduzes centenas de carros icónicos.`,
    ano: 2021
  },
  {
    id: "sea_of_thieves",
    titulo: "Sea of Thieves",
    genero: "Aventura",
    descricao: `Vive a fantasia de ser um verdadeiro pirata em alto mar.

Explora ilhas misteriosas, procura tesouros escondidos, combate outros jogadores e cria a tua própria lenda.`,
    ano: 2018
  },
  {
    id: "hellblade2",
    titulo: "Hellblade II",
    genero: "Aventura",
    descricao: `Uma experiência narrativa intensa focada na mente e nas emoções da protagonista.

Com gráficos realistas e uma atmosfera única, esta sequela aprofunda o universo sombrio de Senua.`,
    ano: 2024
  },
  {
    id: "fable",
    titulo: "Fable",
    genero: "RPG / Aventura",
    descricao: `Explora um mundo fantástico cheio de humor, escolhas morais e personagens memoráveis.

As tuas decisões moldam o herói que te tornas e alteram o mundo à tua volta.`,
    ano: 2004
  },
  {
    id: "state_of_decay3",
    titulo: "State of Decay 3",
    genero: "Sobrevivência",
    descricao: `Sobrevive num mundo devastado por zombies enquanto geres uma comunidade de sobreviventes.

Recolhe recursos, constrói bases e toma decisões difíceis para manter o grupo vivo.`,
    ano: 2025
  },
  {
    id: "starfield",
    titulo: "Starfield",
    genero: "RPG",
    descricao: `Explora o espaço numa aventura épica da Bethesda.

Viaja entre planetas, completa missões, junta-te a facções e cria o teu próprio caminho numa galáxia cheia de mistérios.`,
    ano: 2023
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modalDetalhes");
  const modalTitulo = document.getElementById("modalTitulo");
  const modalGenero = document.getElementById("modalGenero");
  const modalDescricao = document.getElementById("modalDescricao");
  const modalAno = document.getElementById("modalAno");
  const btnFechar = document.getElementById("btnFecharModal2");
  const btnComprar = document.getElementById("btnComprar");

  function abrirModal(id) {
    const jogo = catalogoJogos.find(j => j.id === id);
    if (!jogo) return;

    jogoAtual = jogo;

    modalTitulo.textContent = jogo.titulo;
    modalGenero.textContent = "Género: " + jogo.genero;
    modalDescricao.textContent = jogo.descricao;
    modalAno.textContent = "Ano: " + jogo.ano;

    modal.classList.add("ativo");
  }

  function fecharModal() {
    modal.classList.remove("ativo");
  }

  document.querySelectorAll(".btn-detalhes").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".jogo.card");
      const id = card?.dataset?.id;
      if (id) abrirModal(id);
    });
  });

  btnFechar.addEventListener("click", fecharModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) fecharModal();
  });

  btnComprar.addEventListener("click", () => {
    if (jogoAtual) alert("Comprado: " + jogoAtual.titulo);
  });
});
