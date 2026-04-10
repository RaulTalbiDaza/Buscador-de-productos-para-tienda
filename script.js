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
        colores: ["Rosa", "Turquesa"],
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
            "imagenes/deportivas_reebok/frente.PNG",
            "imagenes/deportivas_reebok/atras.PNG",
            "imagenes/deportivas_reebok/der_ext.PNG",
            "imagenes/deportivas_reebok/der_int.PNG",
            "imagenes/deportivas_reebok/izq_ext.PNG",
            "imagenes/deportivas_reebok/izq_int.PNG",
            "imagenes/deportivas_reebok/plantilla.PNG",
            "imagenes/deportivas_reebok/suela.PNG",
            "imagenes/deportivas_reebok/defecto1.PNG",
            "imagenes/deportivas_reebok/defecto2.PNG"
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
    },
    {
        nombre: "Adidas Campus",
        marca: "Adidas",
        categoria: "Zapatillas",
        talla: "42",
        advertencia: "Los dos zapatos del par tienen huecos por dentro de los mismos",
        colores: ["Blanco", "Negro"],
        precio: "8 €",

        fotos: [
            "imagenes/zapatillas_Adidas_campus/frente.png",
            "imagenes/zapatillas_Adidas_campus/atras.png",
            "imagenes/zapatillas_Adidas_campus/der_ext.png",
            "imagenes/zapatillas_Adidas_campus/der_int.png",
            "imagenes/zapatillas_Adidas_campus/izq_ext.png",
            "imagenes/zapatillas_Adidas_campus/izq_int.png",
            "imagenes/zapatillas_Adidas_campus/plantilla.png",
            "imagenes/zapatillas_Adidas_campus/suela.png",
            "imagenes/zapatillas_Adidas_campus/defecto1.png",
            "imagenes/zapatillas_Adidas_campus/defecto2.png",
            "imagenes/zapatillas_Adidas_campus/defecto3.png"
        ]
    },
    {
        nombre: "Deportivas Mustang",
        marca: "Mustang",
        categoria: "Deportivas",
        talla: "39",
        advertencia: "La parte de atrás del pie por dentro en el zapato está desgastada, al igual que por fuera",
        colores: ["Negro", "Blanco"],
        precio: "9 €",
        fotos: [
            "imagenes/deportivas_mustang/frente.png",
            "imagenes/deportivas_mustang/atras.png",
            "imagenes/deportivas_mustang/der_ext.png",
            "imagenes/deportivas_mustang/der_int.png",
            "imagenes/deportivas_mustang/izq_ext.png",
            "imagenes/deportivas_mustang/izq_int.png",
            "imagenes/deportivas_mustang/plantilla.png",
            "imagenes/deportivas_mustang/suela.png",
            "imagenes/deportivas_mustang/defecto1.png",
            "imagenes/deportivas_mustang/defecto2.png"
        ]
    },
    {
        nombre: "Botas Quechua",
        marca: "Quechua",
        categoria: "Botas Frío",
        talla: "38",
        colores: ["Rojo", "Negro"],
        precio: "12 €",
        fotos: [
            "imagenes/botas_quechua/frente.png",
            "imagenes/botas_quechua/atras.png",
            "imagenes/botas_quechua/der_ext.png",
            "imagenes/botas_quechua/der_int.png",
            "imagenes/botas_quechua/izq_ext.png",
            "imagenes/botas_quechua/izq_int.png",
            "imagenes/botas_quechua/plantilla.png",
            "imagenes/botas_quechua/suela.png",
            "imagenes/botas_quechua/etiqueta.png"
        ]
    },
    {
        nombre: "Zapatillas NYC",
        marca: "NYC",
        categoria: "Zapatillas",
        talla: "38",
        colores: ["Blanco", "Negro"],
        precio: "5 €",
        fotos: [
            "imagenes/zapatillas_nyc1/frente.png",
            "imagenes/zapatillas_nyc1/atras.png",
            "imagenes/zapatillas_nyc1/der_ext.png",
            "imagenes/zapatillas_nyc1/der_int.png",
            "imagenes/zapatillas_nyc1/izq_ext.png",
            "imagenes/zapatillas_nyc1/izq_int.png",
            "imagenes/zapatillas_nyc1/plantilla.png",
            "imagenes/zapatillas_nyc1/suela.png"
        ]
    },
    {
        nombre: "Zapatillas NYC",
        marca: "NYC",
        categoria: "Zapatillas",
        talla: "39",
        colores: ["Blanco", "Negro"],
        precio: "9 €",
        fotos: [
            "imagenes/zapatillas_nyc2/frente.png",
            "imagenes/zapatillas_nyc2/atras.png",
            "imagenes/zapatillas_nyc2/der_ext.png",
            "imagenes/zapatillas_nyc2/izq_ext.png",
            "imagenes/zapatillas_nyc2/izq_int.png",
            "imagenes/zapatillas_nyc2/plantilla.png",
            "imagenes/zapatillas_nyc2/suela.png"
        ]
    },
    {
        nombre: "Zapatillas Reebok",
        marca: "Reebok",
        categoria: "Zapatillas",
        talla: "39",
        colores: ["Blanco", "Negro"],
        precio: "9 €",
        fotos: [
            "imagenes/zapatillas_reebok/frente.png",
            "imagenes/zapatillas_reebok/atras.png",
            "imagenes/zapatillas_reebok/der_ext.png",
            "imagenes/zapatillas_reebok/der_int.png",
            "imagenes/zapatillas_reebok/izq_ext.png",
            "imagenes/zapatillas_reebok/izq_int.png",
            "imagenes/zapatillas_reebok/plantilla.png",
            "imagenes/zapatillas_reebok/suela.png",
            "imagenes/zapatillas_reebok/bordado_marca.png"
        ]
    },
    {
        nombre: "Zapatillas Vans",
        marca: "Vans",
        categoria: "Zapatillas",
        talla: "43",
        advertencia: "Por dentro el zapato se encuentra despellejado al ser de cuero",
        colores: ["Negro", "Blanco"],
        precio: "18 €",
        fotos: [
            "imagenes/zapatillas_vans/frente.png",
            "imagenes/zapatillas_vans/atras.png",
            "imagenes/zapatillas_vans/der_ext.png",
            "imagenes/zapatillas_vans/der_int.png",
            "imagenes/zapatillas_vans/izq_ext.png",
            "imagenes/zapatillas_vans/izq_int.png",
            "imagenes/zapatillas_vans/plantilla.png",
            "imagenes/zapatillas_vans/suela.png",
            "imagenes/zapatillas_vans/defecto1.png",
            "imagenes/zapatillas_vans/defecto2.png"
        ]
    },
    {
        nombre: "Adidas Stan Smith",
        marca: "Adidas",
        categoria: "Zapatillas",
        talla: "TBD",
        colores: ["Blanco"],
        precio: "TBD €",
        fotos: [
            "imagenes/adidas_stan_smith/frente.PNG",
            "imagenes/adidas_stan_smith/atras.PNG",
            "imagenes/adidas_stan_smith/der_ext.PNG",
            "imagenes/adidas_stan_smith/der_int.PNG",
            "imagenes/adidas_stan_smith/izq_ext.PNG",
            "imagenes/adidas_stan_smith/izq_int.PNG",
            "imagenes/adidas_stan_smith/plantilla.PNG",
            "imagenes/adidas_stan_smith/suela.PNG",
            "imagenes/adidas_stan_smith/defecto1.PNG",
            "imagenes/adidas_stan_smith/defecto2.PNG"
        ]
    },
    {
        nombre: "Deportivas Puma",
        marca: "Puma",
        categoria: "Deportivas",
        talla: "TBD",
        colores: ["TBD"],
        precio: "TBD €",
        fotos: [
            "imagenes/deportivas_puma/frente.PNG",
            "imagenes/deportivas_puma/atras.PNG",
            "imagenes/deportivas_puma/der_ext.PNG",
            "imagenes/deportivas_puma/der_int.PNG",
            "imagenes/deportivas_puma/izq_ext.PNG",
            "imagenes/deportivas_puma/izq_int.PNG",
            "imagenes/deportivas_puma/plantilla.PNG",
            "imagenes/deportivas_puma/suela.PNG"
        ]
    },
    {
        nombre: "Deportivas Skechers Azules",
        marca: "Skechers",
        categoria: "Deportivas",
        talla: "44",
        advertencia: "Pequeños huecos en la parte interior del zapato",
        colores: ["Azul"],
        precio: "14 €",
        fotos: [
            "imagenes/deportivas_skechers_azules/frente.PNG",
            "imagenes/deportivas_skechers_azules/atras.PNG",
            "imagenes/deportivas_skechers_azules/der_ext.PNG",
            "imagenes/deportivas_skechers_azules/der_int.PNG",
            "imagenes/deportivas_skechers_azules/izq_ext.PNG",
            "imagenes/deportivas_skechers_azules/izq_int.PNG",
            "imagenes/deportivas_skechers_azules/plantilla.PNG",
            "imagenes/deportivas_skechers_azules/suela.PNG",
            "imagenes/deportivas_skechers_azules/defecto1.PNG",
            "imagenes/deportivas_skechers_azules/defecto2.PNG",
            "imagenes/deportivas_skechers_azules/defecto3.PNG"
        ]
    },
    {
        nombre: "Deportivas Stradivarius",
        marca: "Stradivarius",
        categoria: "Deportivas",
        talla: "36",
        colores: ["Verde", "Marrón", "Rojo"],
        precio: "7 €",
        fotos: [
            "imagenes/deportivas_stradivarius/frente.PNG",
            "imagenes/deportivas_stradivarius/atras.PNG",
            "imagenes/deportivas_stradivarius/der_ext.PNG",
            "imagenes/deportivas_stradivarius/der_int.PNG",
            "imagenes/deportivas_stradivarius/izq_ext.PNG",
            "imagenes/deportivas_stradivarius/izq_int.PNG",
            "imagenes/deportivas_stradivarius/plantilla.PNG",
            "imagenes/deportivas_stradivarius/suela.PNG"
        ]
    },
    {
        nombre: "Skechers Negras",
        marca: "Skechers",
        categoria: "Deportivas",
        talla: "43",
        advertencia: "La suela tiene dos huecos en el puente del pie",
        colores: ["Negro"],
        precio: "20 €",
        fotos: [
            "imagenes/skechers_negras/frente.PNG",
            "imagenes/skechers_negras/atras.PNG",
            "imagenes/skechers_negras/der_ext.PNG",
            "imagenes/skechers_negras/der_int.PNG",
            "imagenes/skechers_negras/izq_ext.PNG",
            "imagenes/skechers_negras/izq_int.PNG",
            "imagenes/skechers_negras/suela.PNG",
            "imagenes/skechers_negras/defecto1.PNG",
            "imagenes/skechers_negras/defecto2.PNG"
        ]
    }
];

// Elementos del DOM
const searchInput = document.getElementById('searchInput');
const colorFilter = document.getElementById('colorFilter');
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
                // Opciones de estilo para fotos que no encajan perfectamente
                let estiloEspecial = '';

                // Mostrar la imagen entera sin recorte ninguno (con fondo blanco para rellenar)
                if (foto.includes('planta.PNG') ||
                    foto.includes('zapatillas_nyc2/suela.PNG') ||
                    foto.includes('zapatillas_nyc2/plantilla.PNG') ||
                    foto.includes('zapatillas_vans/plantilla.PNG')) {
                    estiloEspecial = 'style="object-fit: contain; background-color: #fff;"';
                }
                // Hacer un ajuste de posición para compensar recortes por arriba/abajo
                else if (foto.includes('zapatillas_Adidas_campus/plantilla.PNG') ||
                    foto.includes('deportivas_mustang/plantilla.PNG') ||
                    foto.includes('botas_quechua/suela.PNG') ||
                    foto.includes('zapatillas_nyc1/suela.PNG')) {
                    estiloEspecial = 'style="object-position: center 25%;"';
                }

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
    const colorSeleccionado = colorFilter.value.toLowerCase();
    const maxP = parseFloat(maxPriceInput.value);

    // Filtramos los productos
    const productosFiltrados = productos.filter(producto => {
        // --- 1. Filtro de Texto ---
        const nombreMatch = producto.nombre && producto.nombre.toLowerCase().includes(textoBusqueda);
        const descripcionMatch = producto.descripcion && producto.descripcion.toLowerCase().includes(textoBusqueda);
        const categoriaMatch = producto.categoria && producto.categoria.toLowerCase().includes(textoBusqueda);
        const marcaMatch = producto.marca && producto.marca.toLowerCase().includes(textoBusqueda);
        const tallaMatch = producto.talla && producto.talla.toLowerCase().includes(textoBusqueda);

        // Pasa el filtro de texto si el input está vacío o coincide con alguna propiedad
        const textoPasa = textoBusqueda === "" || nombreMatch || descripcionMatch || categoriaMatch || marcaMatch || tallaMatch;

        // --- 2. Filtro de Color ---
        let colorPasa = true;
        if (colorSeleccionado !== "") {
            colorPasa = producto.colores && producto.colores.some(color => color.toLowerCase() === colorSeleccionado);
        }

        // --- 3. Filtro de Precio ---
        let precioPasa = true; // Por defecto pasa

        if (producto.precio) {
            // Limpia el precio: quita "€", cambia la coma "," por "." y lo convierte a número flotante
            const precioLimpio = producto.precio.replace('€', '').replace(',', '.').trim();
            const precioNum = parseFloat(precioLimpio);

            if (!isNaN(precioNum)) {
                // Comprueba si rompe el límite máximo
                if (!isNaN(maxP) && precioNum > maxP) {
                    precioPasa = false;
                }
            }
        }

        // El producto se muestra solo si pasa correctamente TODOS los filtros
        return textoPasa && colorPasa && precioPasa;
    });

    // Actualizamos la vista con los resultados filtrados
    mostrarProductos(productosFiltrados);
}

// Event listeners para ejecutar la función cada vez que se modifiquen los controles
searchInput.addEventListener('input', aplicarFiltros);
colorFilter.addEventListener('change', aplicarFiltros);
maxPriceInput.addEventListener('input', aplicarFiltros);
