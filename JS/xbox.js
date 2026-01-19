const catalogoJogos = [
    {
        id: "halo-infinite",
        titulo: "Halo Infinite",
        genero: "Tiro em primeira pessoa",
        descricao: "Halo Infinite é um jogo de tiro em primeira pessoa que continua a saga do Master Chief, oferecendo uma experiência épica de combate contra forças alienígenas em um vasto mundo aberto.",
        imagem:
    }




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