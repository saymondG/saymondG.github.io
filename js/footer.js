document.addEventListener("DOMContentLoaded", ()=> {
    const ruta = document.URL.includes('index.html') ? 'paginas/' : ''
    const imagen = document.URL.includes('index.html') ? 'img/' : '../img/'
    document.querySelector("footer").innerHTML = footer(ruta, imagen)
    
});

//se encarga de cargar el footer a la pagina, este recibe un ruta y una imagen por parametro
//ya que el href va a cambiar segun se encuentre en el index o en alguna pagina 
const footer = (ruta, imagen) => 
`
<img src="${imagen}arbol.png">
<div class="enlaces-interes">
    <h3>Enlaces de interes</h3>
    <nav>
        <ul>
            <li><a href="${ruta}preguntasFrecuentes.html">Preguntas frecuentes (FAQ)</a></li>
            <li><a href="${ruta}politicaPrivacidad.html">Politica de privacidad y terminos de uso</a></li>
        </ul>
    </nav>
</div>
<div>
    <h3>Contactos</h3>
    <p>Dirección: Laboratorios de informatica, Sede de Atlántico, Provincia de Cartago, Turrialba.</p>
    <p>Teléfono: +(506) 9875-4567</p>
    <p>Correo Electrónico: info@clinicadearbol.com</p>
</div>
`;