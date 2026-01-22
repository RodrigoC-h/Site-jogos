// ============================
// pc.js (Ver detalhes -> Modal -> Comprar)
// ============================

let jogoAtual = null;

const catalogoJogos = [
  {
    id: "dota2",
    titulo: "Dota 2",
    genero: "MOBA",
    descricao: "Jogo competitivo 5v5 com heróis, itens e estratégias profundas.",
    ano: 2013,
    preco: "Grátis"
  },

  {
    id: "rust",
    titulo: "Rust",
    genero: "Sobrevivência",
    descricao: "Sobrevive num mundo hostil, constrói base, cria alianças (ou inimigos).",
    ano: 2018,
    preco: "39,99€"
  },

  {
    id: "cs2",
    titulo: "Counter-Strike 2",
    genero: "FPS",
    descricao: "Clássico shooter tático competitivo com rondas e economia.",
    ano: 2023,
    preco: "Grátis"
  },

  {
    id: "rdr2",
    titulo: "Red Dead Redemption 2",
    genero: "Ação/Aventura",
    descricao: "Uma épica história no velho oeste, com um mundo aberto riquíssimo e imersivo.",
    ano: 2018,
    preco: "59,99€"
  },

  {
    id: "destiny2",
    titulo: "Destiny 2",
    genero: "Ação/MMO",
    descricao: "FPS com elementos MMO: raids, loot, cooperativo e PvP.",
    ano: 2017,
    preco: "Grátis"
  },

  {
    id: "war_thunder",
    titulo: "War Thunder",
    genero: "Simulação/Ação",
    descricao: "Combates com aviões, tanques e navios com foco em realismo e progressão.",
    ano: 2012,
    preco: "Grátis"
  },

  {
    id: "flight_simulator",
    titulo: "Microsoft Flight Simulator",
    genero: "Simulação",
    descricao: "Simulador de voo com mapas realistas e experiências de pilotagem detalhadas.",
    ano: 2020,
    preco: "69,99€"
  },

  {
    id: "elden_ring",
    titulo: "Elden Ring",
    genero: "RPG/Ação",
    descricao: "Explora um vasto mundo de fantasia com combate desafiante e liberdade total.",
    ano: 2022,
    preco: "59,99€"
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

  if (btnFechar) btnFechar.addEventListener("click", fecharModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) fecharModal();
    });
  }

  if (btnComprar) {
    btnComprar.addEventListener("click", () => {
      if (jogoAtual) alert("Comprado: " + jogoAtual.titulo);
    });
  }
});
