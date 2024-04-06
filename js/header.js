document.addEventListener("DOMContentLoaded", ()=> {
    const ruta = document.URL.includes('index.html') ? 'paginas/' : ''
    const index = document.URL.includes('index.html') ? '' : '../'
    const imagenes = document.URL.includes('index.html') ? 'img/' : '../img/'

    const usuario = localStorage.getItem('usuarioActivo')
    const seccion = usuario ? `<li><a href="${index}index.html" onclick="cerrarSesion()">Cerrar Sesion</a></li>` : ` <li><a href="${ruta}inicioSesion.html">Inicio de sesion</a></li><li><a href="${ruta}registroUsuario.html">Registro Usuario</a></li>`
    
    const agendaCitas = usuario ?  `<li><a href="${ruta}agendaCitas.html">Agenda de citas</a></li>` : ''
    document.querySelector("header").innerHTML = header(ruta, index, imagenes, seccion, agendaCitas)

});

//se encarga de cargar el header a la pagina, este recibe un ruta , indexy una imagen por parametro
//ya que el href va a cambiar segun se encuentre en el index o en alguna pagina 
//Tambien se recibe una seccion para cargar los botones de registro y login o los de cerrar sesion segun sea necesario
// por ultimos se recibe el agendaCitas para en caso que se encuentre logeado cargar habilitar el acceso al modulo.
const header = (ruta, index, imagenes, seccion, agendaCitas) => 
`
<h1>
    <img src="${imagenes}arbol.png">
    <a href="${index}index.html">Clinica Arbol de Seda</a>
</h1>
<nav>
    <ul>      
       ${seccion}
    </ul>
    <ul>
       ${agendaCitas}
        <li><a href="${ruta}busquedaMedicos.html">Busqueda de medicos</a></li>
        <li><a href="${ruta}sobreNosotros.html">Sobre nosotros</a></li>
        <li><a href="${ruta}servicios.html">Servicios</a></li>
        <li><a href="${ruta}informacionContacto.html">Contacto</a></li>
    </ul>
</nav>
`;

const cerrarSesion = () => {
    localStorage.removeItem('usuarioActivo')
}