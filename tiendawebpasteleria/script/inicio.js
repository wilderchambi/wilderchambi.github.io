// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el enlace "Inicio"
    const inicioLink = document.querySelector('nav a');

    // Añadir la clase para el fondo oscuro
    inicioLink.classList.add('bg-dark');
});