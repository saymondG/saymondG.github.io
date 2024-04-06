document.addEventListener("DOMContentLoaded", ()=> {
    const formulario = document.getElementById("formulario");
    
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const { cedula, nombre, apellidos, celular, correo, consulta } = obtenerDatosFormulario();
        const esValido = 
            validarCedula(cedula) && 
            validarNombreApellidos(nombre) && 
            validarNombreApellidos(apellidos) && 
            validarCelular(celular) && 
            validarCorreo(correo);

        const formularioConsulta = { cedula: cedula, nombre: nombre, apellidos: apellidos, celular: celular, correo: correo, consulta: consulta };
        esValido ? manejarExito(formularioConsulta) : manejarError();
    });
});

const validarNombreApellidos = (nombre) => /^[A-Z][a-zA-Z]*$/.test(nombre);

const validarCedula = (cedula) => /^(\d{2}-\d{4}-\d{4})$/.test(cedula);

const validarCelular = (cedula) => /^(\d{4}-\d{4})$/.test(cedula);

const validarCorreo = (correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);


const obtenerDatosFormulario = () => {
    const cedula = document.getElementById("cedula").value.trim();
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const celular = document.getElementById("celular").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const consulta = document.getElementById("consulta").value;
    
    return { cedula, nombre, apellidos, celular, correo, consulta };
};
  

const manejarExito = (consulta) => {
    var consultas = JSON.parse(localStorage.getItem('consultas'));
    consultas ? consultas.push(consulta) : consultas = [ consulta ];
    localStorage.setItem('consultas', JSON.stringify(consultas));
    limpiarCamposTexto();
}

const manejarError = () => {
    alert("datos no son validos")
};

const limpiarCamposTexto = () => {
    const campos = document.querySelectorAll("#formulario input[type='text'], #formulario input[type='email'], #formulario textarea");
    campos.forEach((campo) => campo.value = "")
};