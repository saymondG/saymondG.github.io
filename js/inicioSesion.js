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

const obtenerDatosFormulario = () => {
    const correo = document.getElementById("correo").value.trim();
    const contrasenna = document.getElementById("contrasenna").value.trim();
    
    return { correo, contrasenna };
};

const manejarExito = (inicioSesion) => {
    localStorage.setItem('usuarioActivo', JSON.stringify(inicioSesion));
    window.location.href = "../index.html";
};

const manejarError = () => {
    alert("datos no son validos")
};

const encriptar = (contrasenna) => {
    const codigo = { a: '#adc!', e: '#dfg!', i: '#ihj!', o: '#kln!', u: '#mno!' };
    return contrasenna.split('').map(letra => codigo[letra] || letra).reverse().join('');
};
