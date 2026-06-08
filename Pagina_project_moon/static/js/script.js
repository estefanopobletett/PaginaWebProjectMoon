const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const respuesta = boton.parentElement.nextElementSibling;

        respuesta.classList.toggle("activa");

        boton.textContent =
            respuesta.classList.contains("activa")
            ? "-"
            : "+";
    });
});