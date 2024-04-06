document.addEventListener("DOMContentLoaded", ()=> {
    const medicos = JSON.parse(localStorage.getItem('medicos'));

    cargarTabla(medicos)
});

const filtroMedicos = (criterio, dato) => {
    const medicos = JSON.parse(localStorage.getItem('medicos'));
    return medicos.filter(medico => medico[criterio] == dato);
};

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

const buscarMedicos = () => {
    const categoria = document.getElementById("categoriaBusqueda").value;
    const dato = document.getElementById("busquedaMedico").value;

    cargarTabla(filtroMedicos(categoria, dato));
};