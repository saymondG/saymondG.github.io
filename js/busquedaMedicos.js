document.addEventListener("DOMContentLoaded", ()=> {
    const medicos = JSON.parse(localStorage.getItem('medicos'));

    cargarTabla(medicos)
});

//segun el criterio ingresado va a buscar el dato
const filtroMedicos = (criterio, dato) => {
    const medicos = JSON.parse(localStorage.getItem('medicos'));
    const resultado = medicos.filter(medico => medico[criterio] == dato);
    return resultado.length ? resultado : medicos
};


//metodo que se encarga de insertar las filas a la tabla para ser mas dinamico
const cargarTabla = (medicos) => {
    const cuerpoTablaMedicos = document.getElementById("cuerpoTabla");
    const especialidad =  JSON.parse(localStorage.getItem('especialidades')); 


    cuerpoTablaMedicos.innerHTML = ""
    var filas = ""
    medicos.forEach(medico => {
        filas = filas +
            `<tr>
                <td>${medico.identificacion}</td>
                <td>${medico.nombre}</td>
                <td>${especialidad.filter(especialidad => especialidad.id == medico.especialidad)[0].nombre}</td>
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

const ordenarIdentificacion = () => {
    const medicos = JSON.parse(localStorage.getItem('medicos'));

    cargarTabla(medicos.sort().reverse())
}