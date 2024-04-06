document.addEventListener("DOMContentLoaded", ()=> {

    const formulario = document.getElementById("formulario");


    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const { cedula, nombre, apellidos, celular, correo, contrasenna, confirmarContrasenna } = obtenerDatosFormulario();
        const esValido = 
            validarCedula(cedula) &&
            cedulaValida(cedula) && 
            validarNombreApellidos(nombre) && 
            validarNombreApellidos(apellidos) && 
            validarCelular(celular) && 
            validarCorreo(correo) &&
            validarContrasenna(contrasenna) && 
            validarConfirmacion(contrasenna, confirmarContrasenna);

        const usuario = { cedula: cedula, nombre: nombre, apellidos: apellidos, celular: celular, correo: correo, contrasenna: encriptar(contrasenna) };
        esValido ? manejarExito(usuario) : manejarError();
    });
});


const obtenerDatosFormulario = () => {
    const cedula = document.getElementById("cedula").value.trim();
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const celular = document.getElementById("celular").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const contrasenna = document.getElementById("contrasenna").value.trim();
    const confirmarContrasenna = document.getElementById("confirmarContrasenna").value.trim()
    
    return { cedula, nombre, apellidos, celular, correo, contrasenna, confirmarContrasenna };
};

const validarNombreApellidos = (nombre) => /^[A-Z][a-zA-Z]*$/.test(nombre);

const validarCedula = (cedula) => /^(\d{2}-\d{4}-\d{4})$/.test(cedula);

const validarCelular = (cedula) => /^(\d{4}-\d{4})$/.test(cedula);

const validarContrasenna = (contrasenna) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/.test(contrasenna);

const validarCorreo = (correo) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);

const validarConfirmacion = (contrasenna, confirmarContrasenna) => contrasenna === confirmarContrasenna;

const cedulaValida = (cedula) => {
    const usuariosJSON = localStorage.getItem('usuarios');
    var usuariosRecuperados = JSON.parse(usuariosJSON);
    if(usuariosRecuperados) {
        const cedulaRepetida = usuariosRecuperados.find(usuario => usuario.cedula === cedula);
        const resultado = cedulaRepetida ? false : true;
        if(!resultado) {
            alert("La cedula ingresada ya existe")
        }
        return resultado
    } else {
        return true;
    }
};

const manejarExito = (usuario) => {
    const usuariosJSON = localStorage.getItem('usuarios');
    var usuariosRecuperados = JSON.parse(usuariosJSON);
    usuariosRecuperados ? usuariosRecuperados.push(usuario) : usuariosRecuperados = [ usuario ];
    localStorage.setItem('usuarios', JSON.stringify(usuariosRecuperados));
    limpiarCamposTexto();
    window.location.href = "../index.html";
};

const encriptar = (contrasenna) => {
    const codigo = { a: '#adc!', e: '#dfg!', i: '#ihj!', o: '#kln!', u: '#mno!' };
    return contrasenna.split('').map(letra => codigo[letra] || letra).reverse().join('');
};

const manejarError = () => {
    alert("datos no son validos")
};

const limpiarCamposTexto = () => {
    const campos = document.querySelectorAll("#formulario input[type='email'], #fomrulario input[type='password']");
    campos.forEach((campo) => campo.value = "")
};