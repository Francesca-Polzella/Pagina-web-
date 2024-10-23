document.addEventListener('DOMContentLoaded', function() {
    let cantidadCarrito = 0;
    const cantidadCarritoElement = document.getElementById('cantidad-carrito');
    const botonesComprar = document.querySelectorAll('.comprar-btn');

    botonesComprar.forEach(boton => {
        boton.addEventListener('click', function() {
            const precio = parseFloat(this.getAttribute('data-precio'));
            cantidadCarrito++;
            cantidadCarritoElement.textContent = cantidadCarrito;

            // Animación del botón al hacer clic
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);

            alert(`¡Producto añadido al carrito!\nPrecio: $${precio.toFixed(2)}`);
        });
    });
});