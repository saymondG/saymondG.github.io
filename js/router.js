//este archivo se encargar de controlar el cambio de pagina de la aplicacion
document.addEventListener("DOMContentLoaded", ()=> {  
    
    //validacion para no acceder a la pagina para agendar citas
    const usuarioActivo = localStorage.getItem('usuarioActivo');
    if(!usuarioActivo) {
        const agendaCitasButton = document.getElementById("agendaCitas");
        agendaCitasButton.style.display = "none";
    }

    var enlaces = document.querySelectorAll("a");
    enlaces.forEach(enlace => {
        enlace.addEventListener("click", function(event) {
            // Evita el comportamiento predeterminado del enlace (cargar en el iframe)
            event.preventDefault();
            
            // Obtiene la URL del enlace clicado
            var url = enlace.getAttribute("href");
            
            // Carga la página completa en la ventana principal
            window.top.location.href = url;
        });
    })
})