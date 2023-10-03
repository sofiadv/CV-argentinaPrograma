document.addEventListener('DOMContentLoaded', function() {
    mostrarSeccion('perfil-personal');
});
// muestra y oculta las secciones en el currículum
function mostrarSeccion(seccionId) {
    const divs = document.querySelectorAll('main > div');

    divs.forEach(div => {
        div.style.display = 'none';
    });

    const divToShow = document.getElementById(seccionId);
    if (divToShow) {
        divToShow.style.display = 'block';
    }
}
