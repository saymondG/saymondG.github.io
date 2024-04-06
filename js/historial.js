document.addEventListener("DOMContentLoaded", ()=> {
    const botonHistorial = document.getElementById("botonHistorial");

    botonHistorial.addEventListener("click", (event) => {
        const secciones = Array.from(document.getElementsByClassName("seccionCitas"));
        secciones.forEach(seccion => {
            seccion.style.display = "none"
        });
        const seccion = document.getElementById('historial');
        seccion.style.display = "block";
       cargarHistorial();
    });
});

const cargarHistorial = () => {
    const historialTabla = document.getElementById('tabla-historial').getElementsByTagName('tbody')[0];
    const citas = JSON.parse(localStorage.getItem('citas'));
    const usuarioActivo = JSON.parse(localStorage.getItem('usuarioActivo'));

    if(citas) {
        historialTabla.innerHTML = "";
        var filas = "";
        const citasFiltradas = citas.filter(cita => cita.paciente == usuarioActivo.cedula);

        citasFiltradas.forEach(cita => {
            const especialidad = JSON.parse(localStorage.getItem('especialidades')).filter(especialidad => especialidad.id == cita.espcialidad)[0];
            const medico = JSON.parse(localStorage.getItem("medicos")).filter(medico => medico.identificacion == cita.medico)[0];
            const hora = JSON.parse(localStorage.getItem("horas")).filter(hora => hora.id == cita.hora)[0];

            var estado = cita.completada ? "Completada" : "Pendiente"
            estado = cita.cancelado ? "Cancelado" : estado

            const confirmacionPaciente = cita.confirmacionPaciente ? "Completada" :  "Sin confirmar"
            const confirmacionMedico = cita.confirmacionMedico ? "Completada" :  "Sin confirmar"

            filas = filas +
                `<tr>
                    <td>${especialidad.nombre}</td>
                    <td>${medico.nombre}</td>
                    <td>${cita.fecha}</td>
                    <td>${hora.hora}</td>
                    <td>${confirmacionMedico}</td>
                    <td>${confirmacionPaciente}</td>
                    <td>${estado}</td>
                </tr>`;
        });
        historialTabla.innerHTML = filas;
    }
}