const producto = [
  {
    id: 1,
    img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/5/0/50180_12.jpg",
    nombre: "212 ViP Carolina Herrera",
    descripcion: "perfume ----",
    precio: 1500,
    cantidad: 100,
  },
  {
    id: 2,
    img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/7/8/782797_001.jpg",
    nombre: "Paco Rabanne In-Victus",
    precio: 7395,
    cantidad: 100,
  },
  {
    id: 3,
    img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/7/6/76704_10.jpg",
    nombre: "Gres Gabotine",
    precio: 2490,
    cantidad: 100,
  },
  {
    id: 4,
    img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/4/9/49807_2.jpg",
    nombre: "Femme Hugo Boss",
    precio: 5370,
    cantidad: 100,
  },
  {
    id: 5,
    img: "https://tiendacdn.farmashop.com.uy/media/catalog/product/cache/c385976bc54d78dff661f3a8d562b253/4/9/49592_10.jpg",
    nombre: "Acqua di Giogia",
    precio: 6935,
    cantidad: 100,
  },
];

const contenedor = document.getElementById("contenedor-productos");
const mostrarProductos = (data) => {
  data.forEach((producto) => {
    const cardProducto = document.createElement(`div`);
    cardProducto.setAttribute(`id`, `tarjeta-producto`);
    cardProducto.innerHTML = `<img class="imagen-prod" src="${producto.img}" alt="${producto.nombre}" style="width:75px">
    <div class="descripcion-prod">
        <h5 class="nombre-prod">${producto.nombre}</h5>
        <h5 class="descripcion-prod">${producto.descripcion}</h5>
        <button id="${producto.id}" class="btn-compra btn-primary btn">Añadir al carrito</button>
    </div>
    `;
    contenedor.appendChild(cardProducto);
  });
  const btnComprar = document.getElementsByClassName("btn-compra");
  btnComprar.forEach((el) => {
    el.addEventListener("click", (e) => agregarAlCarrito(e.target, id));
  });
};

mostrarProductos(producto);

const carrito = [];
function agregarAlCarrito(id) {
  let prodEncontrado = producto.find((prod) => prod.id === parseInt(id));
  carrito.push(prodEncontrado);
  console.log(carrito);
}
