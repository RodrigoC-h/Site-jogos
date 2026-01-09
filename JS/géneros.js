const jogosPorGenero = {
  rpg: [
    {
      id: 101,
      titulo: "Clair Obscur: Expedition 33",
      genero: "RPG",
      ano: "—",
      descricao: "RPG com forte componente narrativa, exploração e progressão de personagens num universo artístico e simbólico.",
      imagem: ""
    },
    {
      id: 102,
      titulo: "Assassin’s Creed: Shadows",
      genero: "RPG",
      ano: "—",
      descricao: "Exploração, combate e evolução de personagem num Japão feudal, com escolhas e elementos de RPG.",
      imagem: ""
    },
    {
      id: 103,
      titulo: "Deltarune",
      genero: "RPG",
      ano: "—",
      descricao: "RPG narrativo com estilo próprio, escolhas do jogador e forte identidade artística.",
      imagem: ""
    }
  ],

  acao: [
    {
      id: 201,
      titulo: "Ninja Gaiden 4",
      genero: "Ação",
      ano: "—",
      descricao: "Ação rápida, combate técnico e elevado nível de desafio.",
      imagem: ""
    },
    {
      id: 202,
      titulo: "Shinobi: Art of Vengeance",
      genero: "Ação",
      ano: "—",
      descricao: "Combate ninja com ritmo acelerado e estética marcante.",
      imagem: ""
    },
    {
      id: 203,
      titulo: "Assassin’s Creed Valhalla",
      genero: "Ação",
      ano: "—",
      descricao: "Exploração e combate na era viking, com raids e progressão do personagem.",
      imagem: ""
    }
  ],

  estrategia: [
    {
      id: 301,
      titulo: "Crusader Kings 3",
      genero: "Estratégia",
      ano: "—",
      descricao: "Gestão dinástica, política e estratégia a longo prazo.",
      imagem: ""
    },
    {
      id: 302,
      titulo: "BattleTech",
      genero: "Estratégia",
      ano: "—",
      descricao: "Combate tático por turnos com mechs e gestão de equipa.",
      imagem: ""
    },
    {
      id: 303,
      titulo: "Age of Darkness: Final Stand",
      genero: "Estratégia",
      ano: "—",
      descricao: "Sobrevivência estratégica com hordas e defesa de base.",
      imagem: ""
    }
  ]
};

/* ===============================
   NAVEGAÇÃO PELO SELECT (INDEX)
   =============================== */
function irParaGenero(pagina) {
  if (!pagina) return;
  window.location.href = pagina; // rpg.html, acao.html, estrategia.html
}

/* ===============================
   RENDERIZAÇÃO (PÁGINAS DE GÉNERO)
   =============================== */
function renderizarPaginaGenero() {
  const genero = document.body.dataset.genero; // "rpg", "acao" ou "estrategia"
  if (!genero) return; // se for uma página sem data-genero, não faz nada

  const lista = jogosPorGenero[genero] || [];
  const catalogo = document.getElementById("catalogo");
  if (!catalogo) return;

  catalogo.innerHTML = lista.map(j => `
    <div class="card-jogo">
      ${j.imagem ? `<img src="${j.imagem}" alt="${j.titulo}">` : ""}
      <h3>${j.titulo}</h3>
      <p>${j.genero} • ${j.ano}</p>
      <button class="btn-detalhes" data-id="${j.id}">Ver Detalhes</button>
    </div>
  `).join("");

  document.querySelectorAll(".btn-detalhes").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      abrirModal(id, genero);
    });
  });
}

/* ===============================
   MODAL
   =============================== */
function abrirModal(id, generoPagina) {
  const modal = document.getElementById("modalDetalhes");
  if (!modal) return;

  const lista = jogosPorGenero[generoPagina] || [];
  const jogo = lista.find(j => j.id === id);
  if (!jogo) return;

  const t = document.getElementById("modalTitulo");
  const g = document.getElementById("modalGenero");
  const d = document.getElementById("modalDescricao");
  const a = document.getElementById("modalAno");

  if (t) t.textContent = jogo.titulo;
  if (g) g.textContent = `Género: ${jogo.genero}`;
  if (d) d.textContent = jogo.descricao;
  if (a) a.textContent = `Ano: ${jogo.ano}`;

  modal.style.display = "block";
}

function fecharModal() {
  const modal = document.getElementById("modalDetalhes");
  if (!modal) return;
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  // Só renderiza se a página tiver data-genero e #catalogo
  renderizarPaginaGenero();

  // Liga handlers do modal apenas se existir
  const btn1 = document.getElementById("btnFecharModal");
  const btn2 = document.getElementById("btnFecharModal2");
  const modal = document.getElementById("modalDetalhes");

  if (btn1) btn1.addEventListener("click", fecharModal);
  if (btn2) btn2.addEventListener("click", fecharModal);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target.id === "modalDetalhes") fecharModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharModal();
  });
});

