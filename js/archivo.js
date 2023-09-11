// Espera a que se cargue todo el contenido de la página
document.addEventListener("DOMContentLoaded", function () {
    iniciarAnimacion();
});


function iniciarAnimacion() {
    var animacion_inicial = document.getElementById("animacion_inicial");
    var logo_inicial = document.getElementById("logo_inicial");
    var pagina_principal = document.getElementById("pagina_principal");

    pagina_principal.style.display ="none"
    // Aplica la animación al elemento "logo"
    logo_inicial.style.animation = "rotacion 4s linear forwards, desvanecimiento 4s linear forwards";
    animacion_inicial.style.animation = "desvanecimiento 4s linear forwards";

    // Cuando la animación termine, oculta el elemento "inicio-animacion" y muestra "pagina-principal"
    logo_inicial.addEventListener("animationend", function () {
        logo_inicial.style.display = "none"; // Oculta el elemento inicial
        animacion_inicial.style.display = "none";
        pagina_principal.style.display = "block";
        pagina_principal.style.opacity = 1; // Asegura que la página principal esté visible
        
    });
}










