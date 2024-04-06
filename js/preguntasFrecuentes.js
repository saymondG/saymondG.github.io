document.addEventListener("DOMContentLoaded", ()=> {  
  
    const items = Array.from(document.getElementsByClassName('item'));
    const respuestas = Array.from(document.getElementsByClassName('respuesta'))
    items.forEach(item => {
        const pregunta = item.querySelector('.pregunta'); 
        const respuesta = item.querySelector('.respuesta');
           
        //se agrega un evento para esucchar click en el div y asi poder mostrar o esconder las preguntas frecuentes a voluntad
        pregunta.addEventListener("click", function(event) {
            if (respuesta.style.display === "none") {
                respuestas.forEach(respuesta =>respuesta.style.display = "none");
                respuesta.style.display = "block"
            } else {
                respuestas.forEach(respuesta =>respuesta.style.display = "none");
            }
            
        });
    });
});

