const cards = document.querySelectorAll('.card');

// Manejo del movimiento del mouse para rotar las tarjetas
document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    // rotación basada en la posición del mouse
    const rotateY = ((clientX / innerWidth) - 0.5) * 30; // Ajusta la sensibilidad
    const rotateX = ((clientY / innerHeight) - 0.5) * -30; // Ajusta la sensibilidad

    // transformaciones a todas las tarjetas
    cards.forEach(card => {
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
});
