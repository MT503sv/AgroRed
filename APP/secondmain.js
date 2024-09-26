 // Array de productos con sus detalles y tamaños de imagen opcionales
 const products = [
    { nombre: "Papa", descripcion: "Precio c/u Papa $15.00 Precio de mayore $11.00 ", imagen: "imagenes/papa.jpg", width: "200px" },
    { nombre: "Cebolla", descripcion: "Precio c/u Papa $15.00 Precio de mayore $11.00", imagen: "imagenes/cebolla.jpg", width: "200px" },
    { nombre: "Elote", descripcion: "Precio c/u Papa $15.00 Precio de mayore $11.00", imagen: "imagenes/elote.jpg", width: "200px" },
    { nombre: "Chile", descripcion: "Precio c/u Papa $15.00 Precio de mayore $11.00", imagen: "imagenes/chile.jpg", width: "200px" },
    { nombre: "Tomate", descripcion: "Precio c/u Papa $15.00 Precio de mayore $11.00", imagen: "imagenes/tomate.jpg", width: "200px" },
    { nombre: "Yuca", descripcion: "Precio c/u Papa $15.00 Precio de mayore $11.00", imagen: "imagenes/yuca.jpg", width: "200px" },
    { nombre: "Zanahoria", descripcion: "Precio c/u Papa $15.00 Precio de mayore $11.00", imagen: "imagenes/zanahoria.jpeg", width: "200px" },
    { nombre: "Pepino", descripcion: "Precio c/u Papa $15.00 Precio de mayore $11.00", imagen: "imagenes/Pepino.jpg", width: "200px" },
   
];

// Función para ordenar productos por nombre alfabéticamente
function sortProducts(products) {
    return products.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
}

// Función para buscar productos que contengan el nombre proporcionado
function searchProducts(products, searchName) {
    return products.filter(product =>
        product.nombre.toLowerCase().includes(searchName.toLowerCase())
    );
}

// Función para mostrar todos los productos en el contenedor
function showAllProducts(products) {
    const divProduct = document.getElementById("productsContainer");
    divProduct.innerHTML = ""; // Limpia el contenido del contenedor

    if (products.length === 0) {
        divProduct.innerHTML = "<p>No se encontraron productos.</p>";
        return;
    }

    const fragment = document.createDocumentFragment(); // Crea un fragmento para mejorar el rendimiento

    products.forEach(product => {
        const divP = document.createElement("div");
        divP.classList.add("product"); // Aplica la clase 'product' para el estilo

        // Crea el elemento de imagen
        const img = document.createElement("img");
        img.src = product.imagen; // Establece la fuente de la imagen
        img.alt = product.nombre; // Establece el texto alternativo de la imagen
        img.style.width = product.width || "200px"; // Establece el ancho de la imagen; usa 'auto' si no se proporciona
        img.style.height = "200px"; // Mantiene la proporción de la imagen
        divP.appendChild(img);

        // Crea el título del producto
        const h3 = document.createElement("h3");
        h3.textContent = product.nombre;
        divP.appendChild(h3);

        // Crea la descripción del producto
        const p = document.createElement("p");
        p.textContent = product.descripcion;
        divP.appendChild(p);
        
        

        fragment.appendChild(divP); // Añade el producto al fragmento
    });

    divProduct.appendChild(fragment); // Añade el fragmento al contenedor
}

// Event listener para buscar productos en tiempo real mientras el usuario escribe
document.getElementById("search").addEventListener("input", function () {
    const nameSearched = this.value; // Obtiene el texto ingresado en el campo de búsqueda
    const filterProducts = searchProducts(products, nameSearched); // Filtra los productos
    showAllProducts(filterProducts); // Muestra los productos filtrados
});

// Función para mostrar productos ordenados alfabéticamente
function showSortProducts() {
    const sortedProducts = sortProducts(products); // Ordena los productos
    showAllProducts(sortedProducts); // Muestra los productos ordenados
}

// Muestra todos los productos al cargar la página
showAllProducts(products);
