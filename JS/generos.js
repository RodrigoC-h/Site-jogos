const filtroGenero = document.getElementById("filtroGenero");

if (filtroGenero) {
    filtroGenero.addEventListener("change", function () {
        if (filtroGenero.value !== "") {
            window.location.href = filtroGenero.value;
        }
    });
}
