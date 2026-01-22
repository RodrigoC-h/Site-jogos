let jogoAtual = null;

const catalogoJogos = [
  {
    id: "gow_ragnarok",
    titulo: "God of War Ragnarok",
    genero: "Ação/Aventura",
    descricao: "Kratos e Atreus enfrentam uma jornada épica pelos Nove Reinos, com combate brutal e narrativa cinematográfica.",
    ano: 2022
  },
  {
    id: "wukong",
    titulo: "Black Myth: Wukong",
    genero: "RPG/Ação",
    descricao: "Aventura inspirada na mitologia chinesa, focada em combate exigente e bosses memoráveis.",
    ano: 2024
  },
  {
    id: "ghost_yotei",
    titulo: "Ghost of Yōtei",
    genero: "Ação/Aventura",
    descricao: "Exploração e combate num Japão inspirado por lendas e estética cinematográfica.",
    ano: 2025
  },
  {
    id: "hzd_remastered",
    titulo: "Horizon Zero Dawn Remastered",
    genero: "Ação/RPG",
    descricao: "Aloy regressa numa versão melhorada, com mundo aberto, máquinas e história forte.",
    ano: 2024
  },
  {
    id: "gt7",
    titulo: "Gran Turismo 7",
    genero: "Corridas/Simulação",
    descricao: "Simulação automóvel com grande atenção ao detalhe e vasta seleção de carros e pistas.",
    ano: 2022
  },
  {
    id: "death_stranding_2",
    titulo: "Death Stranding 2",
    genero: "Aventura",
    descricao: "Uma experiência narrativa ousada com exploração, ambientes marcantes e ADN Kojima.",
    ano: 2025
  },
  {
    id: "tlou1",
    titulo: "The Last of Us Parte I",
    genero: "Ação/Aventura",
    descricao: "Uma história intensa de sobrevivência, com foco em narrativa e atmosfera.",
    ano: 2022
  },
  {
    id: "astro_bot",
    titulo: "Astro Bot",
    genero: "Plataformas",
    descricao: "Plataformas criativo e divertido, com forte aproveitamento das mecânicas da PlayStation.",
    ano: 2024
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
