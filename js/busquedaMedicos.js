document.addEventListener("DOMContentLoaded", ()=> {
    const medicos = JSON.parse(localStorage.getItem('medicos'));

    cargarTabla(medicos)
});

//segun el criterio ingresado va a buscar el dato
const filtroMedicos = (criterio, dato) => {
    const medicos = JSON.parse(localStorage.getItem('medicos'));
    return medicos.filter(medico => medico[criterio] == dato);
};


//metodo que se encarga de insertar las filas a la tabla para ser mas dinamico
const cargarTabla = (medicos) => {
    const cuerpoTablaMedicos = document.getElementById("cuerpoTabla");
    cuerpoTablaMedicos.innerHTML = ""
    var filas = ""
    medicos.forEach(medico => {
        filas = filas +
            `<tr>
                <td>${medico.nombre}</td>
                <td>${medico.especialidad}</td>
                <td>${medico.ubicacion}</td>
            </tr>`;
       
    });
    cuerpoTablaMedicos.innerHTML = filas;
}

//metodo que se activa al presionar el boton de buscar, este filtra y carga la tabla.
const buscarMedicos = () => {
    const categoria = document.getElementById("categoriaBusqueda").value;
    const dato = document.getElementById("busquedaMedico").value;

    cargarTabla(filtroMedicos(categoria, dato));
};