document.addEventListener("DOMContentLoaded", ()=> {
  carruselAutomatico();
  cargarDatos();
});

let carruselIndex = 0;

const carruselRotacion = (index) => {
  carruselManual(carruselIndex + index)
}

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