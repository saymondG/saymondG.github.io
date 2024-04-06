document.addEventListener("DOMContentLoaded", ()=> {
    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const { correo, contrasenna } = obtenerDatosFormulario();
        const usuariosJSON = localStorage.getItem('usuarios');
        var usuariosRecuperados = JSON.parse(usuariosJSON);
        const inicioSesion = usuariosRecuperados.find(usuario => usuario.correo === correo && usuario.contrasenna === encriptar(contrasenna));
        inicioSesion ? manejarExito(inicioSesion) : manejarError();
    });
});

//obtiene los datos
const obtenerDatosFormulario = () => {
    const correo = document.getElementById("correo").value.trim();
    const contrasenna = document.getElementById("contrasenna").value.trim();
    
    return { correo, contrasenna };
};

//comportamiento de la aplicacion en caso de exito
const manejarExito = (inicioSesion) => {
    localStorage.setItem('usuarioActivo', JSON.stringify(inicioSesion));
    window.location.href = "../index.html";
};

//muestra una alerta si falla el login
const manejarError = () => {
    alert("datos no son validos")
};

//se encarga de encriptar la contrasenna para ver si coincide con la guarada y asi ainiciar sesion
const encriptar = (contrasenna) => {
    const codigo = { a: '#adc!', e: '#dfg!', i: '#ihj!', o: '#kln!', u: '#mno!' };
    return contrasenna.split('').map(letra => codigo[letra] || letra).reverse().join('');
};
