document.addEventListener("DOMContentLoaded", ()=> {
  carruselAutomatico();
  cargarDatos();
});

let carruselIndex = 0;

const carruselRotacion = (index) => {
  carruselManual(carruselIndex + index)
}

//metodo llamado desde carruselRotacion para cambiar la foto de manera manual.
const carruselManual = (index) => {
  let imagenes = Array.from(document.getElementsByClassName("item-carrusel"));
  imagenes.forEach(imagen => {
    imagen.style.display = "none"
  });
  if (imagenes.length <= index) {
    carruselIndex = 0;
  } else if (index < 0) {
    carruselIndex = imagenes.length -1;
  } else {
    carruselIndex = index;
  }
  imagenes[carruselIndex].style.display = "block"
}

//carrusel automarico el cual cambia de imagen cada 5 segundos
const carruselAutomatico = () => {
  let imagenes = Array.from(document.getElementsByClassName("item-carrusel"));
  imagenes.forEach(imagen => {
    imagen.style.display = "none"
  });
  carruselIndex++;
  carruselIndex == imagenes.length ? carruselIndex = 0 : carruselIndex ; //revisar
  imagenes[carruselIndex].style.display = "block"
  setTimeout(carruselAutomatico, 5000);
};