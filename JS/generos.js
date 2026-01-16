
const filtroGenero = document.getElementById("filtroGenero");

function mudarGenero() {
    if (filtroGenero.value !== "") {
        window.location.href = filtroGenero.value;
    }
}

filtroGenero.addEventListener("change", mudarGenero);


