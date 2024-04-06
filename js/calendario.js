document.addEventListener("DOMContentLoaded", ()=> {
    const botonCalendario = document.getElementById("botonCalendario");

    botonCalendario.addEventListener("click", (event) => {
        const secciones = Array.from(document.getElementsByClassName("seccionCitas"));
        secciones.forEach(seccion => {
            seccion.style.display = "none"
        });
        const seccion = document.getElementById('calendario');
        seccion.style.display = "block";
       cargarCalendario();
    });
});

const cargarCalendario = () => {
    const calendarioTabla = document.getElementById('calendario-tabla').getElementsByTagName('tbody')[0];
}