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

document.getElementById('soporte-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    this.style.display = 'none';
    
    const cuadro = document.getElementById('cuadroGracias');
    cuadro.style.display = 'flex';
    
    this.reset();
});

