document.addEventListener("DOMContentLoaded", ()=> {  
  
    const items = Array.from(document.getElementsByClassName('item'));
    const respuestas = Array.from(document.getElementsByClassName('respuesta'))
    items.forEach(item => {
        const pregunta = item.querySelector('.pregunta'); 
        const respuesta = item.querySelector('.respuesta');
           
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

