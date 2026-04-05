// script.js

// AÑADE TUS PRODUCTOS AQUÍ
// Copia y pega esta estructura para añadir más productos
const productos = [
    {
        nombre: "Zapatillas Kingsmann",
        marca: "Kingsmann",
        categoria: "Zapatillas",
        talla: "37",
        colores: ["Blanco"],
        precio: "12 €",
        fotos: [
            "imagenes/zapatillas_kingsmann/frente.PNG",
            "imagenes/zapatillas_kingsmann/atras.PNG",
            "imagenes/zapatillas_kingsmann/der_ext.PNG",
            "imagenes/zapatillas_kingsmann/der_int.PNG",
            "imagenes/zapatillas_kingsmann/izq_ext.PNG",
            "imagenes/zapatillas_kingsmann/izq_int.PNG",
            "imagenes/zapatillas_kingsmann/planta.PNG",
            "imagenes/zapatillas_kingsmann/suela.PNG",
            "imagenes/zapatillas_kingsmann/etiqueta.PNG"
        ]
    },
    {
        nombre: "Deportivas Newfeel",
        marca: "Newfeel",
        advertencia: "Pequeño hueco en la punta del pie derecho",
        categoria: "Deportivas",
        talla: "38",
        colores: ["Negro"],
        precio: "3 €",
        fotos: [
            "imagenes/deportivas_newfeel/frente.PNG",
            "imagenes/deportivas_newfeel/atras.PNG",
            "imagenes/deportivas_newfeel/der_ext.PNG",
            "imagenes/deportivas_newfeel/der_int.PNG",
            "imagenes/deportivas_newfeel/izq_ext.PNG",
            "imagenes/deportivas_newfeel/izq_int.PNG",
            "imagenes/deportivas_newfeel/planta.PNG",
            "imagenes/deportivas_newfeel/suela.PNG",
            "imagenes/deportivas_newfeel/defecto.PNG"
        ]
    },
    {
        nombre: "Zapatillas Primark",
        marca: "Primark",
        categoria: "Zapatillas",
        talla: "37",
        colores: ["Beige"],
        precio: "7 €",
        fotos: [
            "imagenes/zapatillas_primark/frente.PNG",
            "imagenes/zapatillas_primark/atras.PNG",
            "imagenes/zapatillas_primark/der_ext.PNG",
            "imagenes/zapatillas_primark/der_int.PNG",
            "imagenes/zapatillas_primark/izq_ext.PNG",
            "imagenes/zapatillas_primark/izq_int.PNG",
            "imagenes/zapatillas_primark/planta.PNG",
            "imagenes/zapatillas_primark/suela.PNG"
        ]
    },
    {
        nombre: "Deportivas Nike",
        marca: "Nike",
        categoria: "Deportivas",
        talla: "41",
        colores: ["Rosa", "Azul"],
        precio: "18 €",
        fotos: [
            "imagenes/deportivas_nike/frente.PNG",
            "imagenes/deportivas_nike/atras.PNG",
            "imagenes/deportivas_nike/der_ext.PNG",
            "imagenes/deportivas_nike/der_int.PNG",
            "imagenes/deportivas_nike/izq_ext.PNG",
            "imagenes/deportivas_nike/izq_int.PNG",
            "imagenes/deportivas_nike/plantilla.PNG",
            "imagenes/deportivas_nike/suela.PNG",
            "imagenes/deportivas_nike/etiqueta.PNG"
        ]
    },
    {
        nombre: "Deportivas Reebok",
        marca: "Reebok",
        categoria: "Deportivas",
        talla: "38",
        advertencia: "Los dos zapatos del par tienen un hueco en la zona de dentro del tobillo",
        colores: ["Blanco"],
        precio: "8,50 €",
        fotos: [
            "imagenes/deportivas_reebook/frente.PNG",
            "imagenes/deportivas_reebook/atras.PNG",
            "imagenes/deportivas_reebook/der_ext.PNG",
            "imagenes/deportivas_reebook/der_int.PNG",
            "imagenes/deportivas_reebook/izq_ext.PNG",
            "imagenes/deportivas_reebook/izq_int.PNG",
            "imagenes/deportivas_reebook/plantilla.PNG",
            "imagenes/deportivas_reebook/suela.PNG",
            "imagenes/deportivas_reebook/defecto1.PNG",
            "imagenes/deportivas_reebook/defecto2.PNG"
        ]
    },
    {
        nombre: "Deportivas Zara",
        marca: "Zara",
        categoria: "Deportivas",
        talla: "38",
        colores: ["Negro", "Marrón"],
        precio: "5 €",
        fotos: [
            "imagenes/deportivas_zara/frente.PNG",
            "imagenes/deportivas_zara/atras.PNG",
            "imagenes/deportivas_zara/der_ext.PNG",
            "imagenes/deportivas_zara/der_int.PNG",
            "imagenes/deportivas_zara/izq_ext.PNG",
            "imagenes/deportivas_zara/izq_int.PNG",
            "imagenes/deportivas_zara/plantilla.PNG",
            "imagenes/deportivas_zara/suela.PNG"
        ]
    }
];

// Elementos del DOM
const searchInput = document.getElementById('searchInput');
const minPriceInput = document.getElementById('minPrice');
const maxPriceInput = document.getElementById('maxPrice');
const resultsList = document.getElementById('resultsList');

// Función para mostrar los productos en la lista
function mostrarProductos(listaProductos) {
    // Limpiamos los resultados anteriores
    resultsList.innerHTML = '';

    // Si no hay resultados en la búsqueda
    if (listaProductos.length === 0) {
        resultsList.innerHTML = '<p class="no-results">No se encontraron productos.</p>';
        return;
    }

    // Recorremos la lista de productos y creamos el HTML para cada uno
    listaProductos.forEach(producto => {
        // Creamos un contenedor (carta) para cada producto
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Generar HTML de las fotos (carrusel estilo Instagram)
        let fotosHTML = '';
        if (producto.fotos && producto.fotos.length > 0) {
            // Generar las etiquetas <img> para cada foto
            const imagenes = producto.fotos.map(foto => {
                // Hacemos que la foto de la planta específica no se corte si quieres restaurar esa regla manualmente después
                const estiloEspecial = foto.includes('planta.PNG') ? 'style="object-fit: contain; background-color: #fff;"' : '';
                return `<img src="${foto}" alt="Foto" class="carousel-img" ${estiloEspecial}>`;
            }).join('');

            // Sólo mostramos los botones de < y > si hay más de 1 foto
            const btnPrev = producto.fotos.length > 1 ? `<button class="carousel-btn prev" aria-label="Foto anterior">&lt;</button>` : '';
            const btnNext = producto.fotos.length > 1 ? `<button class="carousel-btn next" aria-label="Foto siguiente">&gt;</button>` : '';

            fotosHTML = `
                <div class="carousel">
                    ${btnPrev}
                    <div class="carousel-track">
                        ${imagenes}
                    </div>
                    ${btnNext}
                </div>
            `;
        }

        // Obtenemos el precio si existe
        const precioHTML = producto.precio ? `<span class="product-price">${producto.precio}</span>` : '';

        // Obtenemos la marca si existe
        const marcaHTML = producto.marca ? `<span class="product-brand">${producto.marca}</span>` : '';

        // Obtenemos la talla si existe
        const tallaHTML = producto.talla ? `<span class="product-size">Talla ${producto.talla}</span>` : '';

        // Obtenemos los colores si existen (en formato de etiquetas pequeñas)
        let coloresHTML = '';
        if (producto.colores && producto.colores.length > 0) {
            const colorsList = producto.colores.map(color => `<span class="color-tag">${color}</span>`).join('');
            coloresHTML = `<div class="product-colors">${colorsList}</div>`;
        }

        // Hacemos que la descripción y advertencia sólo se muestren si están definidas para ese producto particular
        const descHTML = producto.descripcion ? `<p class="product-desc">${producto.descripcion}</p>` : '';
        const advHTML = producto.advertencia ? `<div class="product-warning">⚠️ ${producto.advertencia}</div>` : '';

        // Añadimos el HTML agrupado de la información del perfil
        productCard.innerHTML = `
            ${fotosHTML}
            <div class="product-info">
                <div class="product-header">
                    <div class="product-tags">
                        ${producto.categoria ? `<span class="product-category">${producto.categoria}</span>` : ''}
                        ${marcaHTML}
                        ${tallaHTML}
                    </div>
                    ${precioHTML}
                </div>
                <h3 class="product-name">${producto.nombre}</h3>
                ${coloresHTML}
                ${descHTML}
                ${advHTML}
            </div>
        `;

        // Lo añadimos al contenedor principal de resultados
        resultsList.appendChild(productCard);
    });
}

// Lógica de los botones del carrusel (delegación de eventos en el contenedor general)
resultsList.addEventListener('click', function (e) {
    if (e.target.classList.contains('prev')) {
        const track = e.target.nextElementSibling;
        track.scrollBy({ left: -track.offsetWidth, behavior: 'smooth' });
    } else if (e.target.classList.contains('next')) {
        const track = e.target.previousElementSibling;
        track.scrollBy({ left: track.offsetWidth, behavior: 'smooth' });
    }
});

// Al cargar la página, mostramos todos los productos por defecto
mostrarProductos(productos);

// Función para aplicar todos los filtros de búsqueda y de precio
function aplicarFiltros() {
    const textoBusqueda = searchInput.value.toLowerCase().trim();
    const minP = parseFloat(minPriceInput.value);
    const maxP = parseFloat(maxPriceInput.value);

    // Filtramos los productos
    const productosFiltrados = productos.filter(producto => {
        // --- 1. Filtro de Texto ---
        const nombreMatch = producto.nombre && producto.nombre.toLowerCase().includes(textoBusqueda);
        const descripcionMatch = producto.descripcion && producto.descripcion.toLowerCase().includes(textoBusqueda);
        const advertenciaMatch = producto.advertencia && producto.advertencia.toLowerCase().includes(textoBusqueda);
        const categoriaMatch = producto.categoria && producto.categoria.toLowerCase().includes(textoBusqueda);
        const marcaMatch = producto.marca && producto.marca.toLowerCase().includes(textoBusqueda);
        const tallaMatch = producto.talla && producto.talla.toLowerCase().includes(textoBusqueda);

        // Comprobamos si tiene coincidencia en alguno de los colores
        const coloresMatch = producto.colores && producto.colores.some(color => color.toLowerCase().includes(textoBusqueda));

        // Pasa el filtro de texto si el input está vacío o coincide con alguna propiedad
        const textoPasa = textoBusqueda === "" || nombreMatch || descripcionMatch || advertenciaMatch || categoriaMatch || marcaMatch || coloresMatch || tallaMatch;

        // --- 2. Filtro de Precio ---
        let precioPasa = true; // Por defecto pasa

        if (producto.precio) {
            // Limpia el precio: quita "€", cambia la coma "," por "." y lo convierte a número flotante
            const precioLimpio = producto.precio.replace('€', '').replace(',', '.').trim();
            const precioNum = parseFloat(precioLimpio);

            if (!isNaN(precioNum)) {
                // Comprueba si rompe el límite mínimo
                if (!isNaN(minP) && precioNum < minP) {
                    precioPasa = false;
                }
                // Comprueba si rompe el límite máximo
                if (!isNaN(maxP) && precioNum > maxP) {
                    precioPasa = false;
                }
            }
        }

        // El producto se muestra solo si pasa correctamente AMBOS filtros (texto Y precio)
        return textoPasa && precioPasa;
    });

    // Actualizamos la vista con los resultados filtrados
    mostrarProductos(productosFiltrados);
}

// Event listeners para ejecutar la función cada vez que se escriba en los cuadros
searchInput.addEventListener('input', aplicarFiltros);
minPriceInput.addEventListener('input', aplicarFiltros);
maxPriceInput.addEventListener('input', aplicarFiltros);
