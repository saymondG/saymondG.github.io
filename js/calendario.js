document.addEventListener("DOMContentLoaded", ()=> {
    const botonCalendario = document.getElementById("botonCalendario");

    //funcionalidad del boton
    botonCalendario.addEventListener("click", (event) => {
        const secciones = Array.from(document.getElementsByClassName("seccionCitas"));
        
        //escondemos todas las secciones para evitar que aparezca una sobre otra
        secciones.forEach(seccion => {
            seccion.style.display = "none"
        });

        //buscamos y establecemos visible la seccion seleccionada
        const seccion = document.getElementById('calendario');
        seccion.style.display = "block";

        //filtramos las citas existentes para obtener las citas del usuario
        const citas = JSON.parse(localStorage.getItem("citas"));
        const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
        if (citas) {
            misCitas = citas.filter(cita => cita.paciente == usuario.cedula);
        }

        //conseguimos la fecha de hoy para para cargar la tabla
        const hoy = new Date();
       cargarCalendario(hoy.getFullYear(), hoy.getMonth(), hoy);
    });
});

var misCitas = null

const cargarCalendario = (anio, mes, hoy) => {

    //encontramos el cuerpo de la tabla
    const calendarioTabla = document.getElementById('calendario-tabla').getElementsByTagName('tbody')[0];
    const fecha = new Date(anio, mes, 1);
    calendarioTabla.innerHTML = ''

    //esta condicion sirve para calcular el dia actual con el primer dia del mes y poder empezar a imprimir los numeros
    var condicion = false

    //dos for para armar un calendario de 6 semanas y 7 dias
    for (var i = 0; i < 6; i++) {
        var row = calendarioTabla.insertRow(i);
        for (var j = 0; j < 7; j++) {
            var cell = row.insertCell(j);
            if(!condicion) {
                condicion = j === fecha.getDay() ;
            }
            if (condicion) {

                //se realiza un formateo a la fecha para que coincida con la fecha de la cita
                var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
                var formattedDate = fecha.toLocaleDateString('en-US', options).replace(/\//g, '-').split('-2024').reverse().join('2024-');

                //asignamos el numero en un celda y hacemos la configuracion respectiva de color 
                cell.innerHTML = fecha.getDate();
                if(fecha.getMonth() != mes) {
                    cell.style.color = '#ccc';
                }
                if(fecha.toDateString() === hoy.toDateString()) {
                    cell.style.fontWeight = 'bold';
                    cell.style.backgroundColor = "#ffffcc"
                }
                if(misCitas.filter(cita => cita.fecha === formattedDate).length) {

                    //en caso de que existan citas ese dia vamos a comprar el estado de la cita para pintar el color de la casilla segun el estado.
                    //rojo = canelada
                    //verde = medico y paciente confirmaron la cita
                    //azul = se completo la cita

                    //ademas se crea un div el cual va a funcinonar como una lista de citas a la cual le podemos hacer click para abrir el modal y modificar la misma 

                    const citas = document.getElementById('citas');
                    cell.addEventListener('click',function() {
                        citas.innerHTML = '';
                        misCitas.forEach(cita => {
                            const nuevaCita = document.createElement('div');
                            nuevaCita.style.backgroundColor = "yellow"
                            nuevaCita.textContent = 'Nueva cita';
                            if(cita.cancelado) {
                                nuevaCita.style.backgroundColor = "red";
                            }
                            if (cita.confirmacionMedico && cita.confirmacionPaciente) {
                                nuevaCita.style.backgroundColor = "green";
                            }
                            if (cita.completada) {
                                nuevaCita.style.backgroundColor = "blue"
                            }
                            nuevaCita.addEventListener('click', function() {
                                abrirModal(cita)
                            });
                            citas.appendChild(nuevaCita);
                        }); 
                    })
                }
                fecha.setDate(fecha.getDate() + 1);
            }
           
        
        }
    }
}

const abrirModal = (cita) => {

    //cargamos el div vacio del modal y cremos los botones
    const citas = document.getElementById('citas-modal');
    citas.innerHTML = "";
    const botonConfirmar = document.createElement('button');
    const botonCancelar = document.createElement('button');
    const botonCerrar = document.createElement('button');

    //texto de botones
    botonConfirmar.textContent = 'Confirmar';
    botonCancelar.textContent = 'Cancelar'
    botonCerrar.textContent = 'Cerrar'

    //agreamos botones al modal
    citas.appendChild(botonConfirmar)
    citas.appendChild(botonCancelar)
    citas.appendChild(botonCerrar)


    //configuramos sun comportamiento
    botonCerrar.addEventListener('click', function(){
        citas.innerHTML = '';
    });


    //esto contiene la logica para actualizar los archivos
    botonCancelar.addEventListener('click',function(){
        var citasLS = localStorage.getItem('citas');
        const citaAntigua = JSON.stringify(cita);
        cita.cancelado = true;
        const citaNueva = JSON.stringify(cita);
        citasLS = citasLS.replace(citaAntigua, citaNueva)
        localStorage.setItem('citas', citasLS)
        citas.innerHTML = '';
    });

    botonConfirmar.addEventListener('click',function(){
        var citasLS = localStorage.getItem('citas');
        const citaAntigua = JSON.stringify(cita);
        cita.confirmacionPaciente = true;
        const citaNueva = JSON.stringify(cita);
        citasLS = citasLS.replace(citaAntigua, citaNueva)
        localStorage.setItem('citas', citasLS)
        citas.innerHTML = '';
    });
}