document.addEventListener("DOMContentLoaded", ()=> {

    const botonProgramarCita = document.getElementById("botonProgramarCita");
    botonProgramarCita.addEventListener("click", (event) => {
        const secciones = Array.from(document.getElementsByClassName("seccionCitas"));
        secciones.forEach(seccion => {
            seccion.style.display = "none"
        });
        const seccion = document.getElementById('programacionCitas');
        seccion.style.display = "block";
        cargarEspecialidades();
    });

    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const esValido = validarCita();
        if(esValido) {
            programarCita();
        }
    });


});

//carga las especialidades de los doctores
const cargarEspecialidades = () => {
    const espcialidades = JSON.parse(localStorage.getItem('especialidades'));
    var espcialidadesInnerHTML = `<option value="0">Seleccionar</option>`
    espcialidades.forEach(espcialidad => {
        espcialidadesInnerHTML += `<option value="${espcialidad.id}">${espcialidad.nombre}</option>`
    });
    document.getElementById("detalles-especialidad").innerHTML = espcialidadesInnerHTML;
}

//este metodo se llama cuando se selecciona una especialidad y se cargan los doctores que pertenecen a la misma
const cargarMedicos = () => {
    const especialidad = document.getElementById("detalles-especialidad").value;
    const medicos = JSON.parse(localStorage.getItem("medicos")).filter(medico => medico.especialidad == especialidad);

    var medicosInnerHTML = `<option value="0">Seleccionar</option>`
    medicos.forEach(medico => {
        medicosInnerHTML += `<option value="${medico.identificacion}">${medico.nombre}</option>`
    });
    document.getElementById("detalles-medico").innerHTML = medicosInnerHTML;
} 

//al seleccionar un doctor se cargan sus horas disponibles para ese dia
const cargarHora = () => {
    const fecha = document.getElementById("detalles-fecha").value;
    const medico = document.getElementById("detalles-medico").value;

    const citas = JSON.parse(localStorage.getItem("citas"));
    var horas = JSON.parse(localStorage.getItem('horas'));

    var horasInnerHTML = "";

    if(citas) {
        const citasFiltradas = citas.filter(cita => cita.medico == medico && cita.fecha == fecha);
        if(citasFiltradas.length) {
            citas.forEach(cita => {
                horas = horas.filter(hora => !(hora.id == cita.hora))
            });
            horas.forEach(hora => {
                horasInnerHTML += `<option value="${hora.id}">${hora.hora}</option>`
            });
            document.getElementById("detalles-hora").innerHTML = horasInnerHTML;
        } else {
            horas.forEach(hora => {
                horasInnerHTML += `<option value="${hora.id}">${hora.hora}</option>`
            });
            document.getElementById("detalles-hora").innerHTML = horasInnerHTML;
        }
    } else {
        horas.forEach(hora => {
            horasInnerHTML += `<option value="${hora.id}">${hora.hora}</option>`
        });
        document.getElementById("detalles-hora").innerHTML = horasInnerHTML;
    }
}


//se valida que la cita sea posible en caso de algun error en el formulario
const validarCita = () => {
    const especialidad = document.getElementById("detalles-especialidad").value;
    const medico = document.getElementById("detalles-medico").value;
    const fecha = document.getElementById("detalles-fecha").value;
    const hora = document.getElementById("detalles-hora").value;

    const cita = JSON.parse(localStorage.getItem("citas"))
    
    if (cita) {
        const citaExiste = cita.filter(cita => 
            cita.espcialidad == especialidad && 
            cita.medico == medico &&
            cita.fecha == fecha &&
            cita.hora == hora);

        if(citaExiste.length) {
            alert("La fecha y hora elegidas para la cita se encuentra ocupada");
            return false;

        } else {
            return true;
        }

    } else {
        return true;
    }
}

//crea el objeto y lo almacena en localstorage
const programarCita = () => {
    const { especialidad, medico, tipo, fecha, hora } = obtenerDatosFormulario();
    const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));

    const cita = {paciente: usuario.cedula, medico: medico, especialidad: especialidad, tipo: tipo, fecha: fecha, hora: hora, confirmacionMedico: false, confirmacionPaciente: false, cancelado: false, completada: false}

    var citas = JSON.parse(localStorage.getItem('citass'));
    citas ? citas.push(usuario) : citas = [ cita ];
    localStorage.setItem('citas', JSON.stringify(citas));
    limpiarCampos();
}

//obtiene datos del formulario
const obtenerDatosFormulario = () => {
    const especialidad = document.getElementById("detalles-especialidad").value;
    const medico = document.getElementById("detalles-medico").value;
    const fecha = document.getElementById("detalles-fecha").value;
    const hora = document.getElementById("detalles-hora").value;
    const tipo = document.getElementById("detalles-tipo").value

    return { especialidad, medico, tipo, fecha, hora }
}

//limpia los campos del formulario
const limpiarCampos = () => {
    document.getElementById("detalles-especialidad").value = '0';
    document.getElementById("detalles-medico").innerHTML = '';
    document.getElementById("detalles-fecha").value = ''
    document.getElementById("detalles-hora").innerHTML = ''
    document.getElementById("detalles-tipo").value = '0'
}