const medicos = [
    { identificacion: "11-1122-4455", nombre: "Jonh Walt", especialidad: "1", ubicacion: "Turrialba", horario: "8:00 - 17:00", telefono: "8888-8888", correo: "jonhW@arbolseda.com", biografia: "23 años"},
    { identificacion: "22-3344-5566", nombre: "María García", especialidad: "3", ubicacion: "Turrialba", horario: "8:30 - 16:30", telefono: "5555-5555", correo: "mariaG@arbolseda.com", biografia: "Graduada en 2009"},
    { identificacion: "33-4455-6677", nombre: "Carlos Soto", especialidad: "13", ubicacion: "Turrialba", horario: "9:00 - 18:00", telefono: "7777-7777", correo: "carlosS@arbolseda.com", biografia: "Especialista en enfermedades de la piel"},
    { identificacion: "44-5566-7788", nombre: "Laura Ramírez", especialidad: "2", ubicacion: "Turrialba", horario: "8:30 - 17:30", telefono: "6666-6666", correo: "lauraR@arbolseda.com", biografia: "Experta en cirugía ocular"},
    { identificacion: "55-6677-8899", nombre: "Manuel López", especialidad: "5", ubicacion: "Turrialba", horario: "7:00 - 16:00", telefono: "9999-9999", correo: "manuelL@arbolseda.com", biografia: "Médico general con 15 años de experiencia"},
    { identificacion: "66-7788-9900", nombre: "Ana Fernández", especialidad: "4", ubicacion: "Turrialba", horario: "9:00 - 18:00", telefono: "3333-3333", correo: "anaF@arbolseda.com", biografia: "Especialista en salud reproductiva femenina"},
    { identificacion: "77-8899-0011", nombre: "David Pérez", especialidad: "10", ubicacion: "Turrialba", horario: "8:30 - 17:30", telefono: "2222-2222", correo: "davidP@arbolseda.com", biografia: "Tratamiento de problemas de oído, nariz y garganta"},
    { identificacion: "88-9900-1122", nombre: "Sofía Martínez", especialidad: "11", ubicacion: "Turrialba", horario: "7:30 - 16:30", telefono: "4444-4444", correo: "sofiaM@arbolseda.com", biografia: "Especialista en ortopedia y traumatología"},
    { identificacion: "99-0011-2233", nombre: "Javier Rodríguez", especialidad: "6", ubicacion: "Turrialba", horario: "9:00 - 18:00", telefono: "1111-1111", correo: "javierR@arbolseda.com", biografia: "Diagnóstico y tratamiento de enfermedades cardíacas"},
    { identificacion: "00-1122-3344", nombre: "Carolina González", especialidad: "12", ubicacion: "Turrialba", horario: "8:00 - 17:00", telefono: "1212-1212", correo: "carolinaG@arbolseda.com", biografia: "Trastornos neurológicos"},
    { identificacion: "11-2233-4455", nombre: "Pablo Ruiz", especialidad: "9", ubicacion: "Turrialba", horario: "8:30 - 17:30", telefono: "1313-1313", correo: "pabloR@arbolseda.com", biografia: "Especialista en salud mental"},
    { identificacion: "22-3344-5566", nombre: "Lucía Díaz", especialidad: "8", ubicacion: "Turrialba", horario: "9:00 - 18:00", telefono: "1414-1414", correo: "luciaD@arbolseda.com", biografia: "Asesoramiento nutricional personalizado"},
    { identificacion: "33-4455-6677", nombre: "Andrés Gómez", especialidad: "7", ubicacion: "Turrialba", horario: "8:30 - 17:30", telefono: "1515-1515", correo: "andresG@arbolseda.com", biografia: "Recuperación de lesiones musculares y articulares"},
    { identificacion: "44-5566-7788", nombre: "Luisa Martínez", especialidad: "1", ubicacion: "Turrialba", horario: "8:30 - 17:30", telefono: "1616-1616", correo: "luisaM@arbolseda.com", biografia: "Especialista en cirugía cardíaca"},
    { identificacion: "55-6677-8899", nombre: "José Pérez", especialidad: "2", ubicacion: "Turrialba", horario: "8:00 - 17:00", telefono: "1717-1717", correo: "joseP@arbolseda.com", biografia: "Pediatra con enfoque en cuidado infantil"},
    { identificacion: "66-7788-9900", nombre: "Marina González", especialidad: "13", ubicacion: "Turrialba", horario: "8:30 - 17:30", telefono: "1818-1818", correo: "marinaG@arbolseda.com", biografia: "Tratamiento de enfermedades de la piel y estéticas"},
    { identificacion: "77-8899-0011", nombre: "Alejandro Rojas", especialidad: "5", ubicacion: "Turrialba", horario: "8:00 - 17:00", telefono: "1919-1919", correo: "alejandroR@arbolseda.com", biografia: "Especialista en cirugía de retina"},
    { identificacion: "88-9900-1122", nombre: "Elena Vargas", especialidad: "4", ubicacion: "Turrialba", horario: "9:00 - 18:00", telefono: "2020-2020", correo: "elenaV@arbolseda.com", biografia: "Especialista en trastornos oculares"},
    { identificacion: "99-3344-5566", nombre: "Isabella López", especialidad: "10", ubicacion: "Turrialba", horario: "8:00 - 17:00", telefono: "2121-2121", correo: "isabellaL@arbolseda.com", biografia: "Tratamiento de trastornos neurológicos"},
    { identificacion: "88-1122-3344", nombre: "Gabriel Ramírez", especialidad: "12", ubicacion: "Turrialba", horario: "8:30 - 16:30", telefono: "2222-2222", correo: "gabrielR@arbolseda.com", biografia: "Nutricionista certificado con enfoque en salud gastrointestinal"},
    { identificacion: "77-5566-7788", nombre: "Valentina García", especialidad: "9", ubicacion: "Turrialba", horario: "9:00 - 18:00", telefono: "2323-2323", correo: "valentinaG@arbolseda.com", biografia: "Cardiólogo con experiencia en enfermedades cardíacas congénitas"},
    { identificacion: "66-8899-0011", nombre: "Matías Fernández", especialidad: "6", ubicacion: "Turrialba", horario: "8:30 - 17:30", telefono: "2424-2424", correo: "matiasF@arbolseda.com", biografia: "Especialista en fertilidad y medicina reproductiva"},
    { identificacion: "55-0099-2233", nombre: "Camila Pérez", especialidad: "11", ubicacion: "Turrialba", horario: "7:00 - 16:00", telefono: "2525-2525", correo: "camilaP@arbolseda.com", biografia: "Psiquiatra infantil con enfoque en terapia de juego"},
    { identificacion: "44-7788-9900", nombre: "Diego Martínez", especialidad: "8", ubicacion: "Turrialba", horario: "9:00 - 18:00", telefono: "2626-2626", correo: "diegoM@arbolseda.com", biografia: "Especialista en ortopedia deportiva"},
    { identificacion: "33-2233-4455", nombre: "Valeria Gómez", especialidad: "13", ubicacion: "Turrialba", horario: "8:30 - 17:30", telefono: "2727-2727", correo: "valeriaG@arbolseda.com", biografia: "Dermatóloga especializada en procedimientos cosméticos"},
    { identificacion: "22-6677-8899", nombre: "Maximiliano Rojas", especialidad: "7", ubicacion: "Turrialba", horario: "7:30 - 16:30", telefono: "2828-2828", correo: "maximilianoR@arbolseda.com", biografia: "Especialista en cirugía de cabeza y cuello"},
    { identificacion: "11-5566-7788", nombre: "Lucas Vargas", especialidad: "5", ubicacion: "Turrialba", horario: "8:00 - 17:00", telefono: "2929-2929", correo: "lucasV@arbolseda.com", biografia: "Médico general con experiencia en atención de emergencias"},
    { identificacion: "00-3344-5566", nombre: "Daniela Martín", especialidad: "4", ubicacion: "Turrialba", horario: "8:30 - 17:30", telefono: "3030-3030", correo: "danielaM@arbolseda.com", biografia: "Oftalmóloga especializada en cirugía refractiva"}
];

const especialidades = [
    { id: "1", nombre: "Cirujano" },
    { id: "2", nombre: "Pediatra" },
    { id: "3", nombre: "Dermatología" },
    { id: "4", nombre: "Oftalmología" },
    { id: "5", nombre: "Medicina General" },
    { id: "6", nombre: "Ginecología y Obstetricia" },
    { id: "7", nombre: "Otorrinolaringología" },
    { id: "8", nombre: "Ortopedia y Traumatología" },
    { id: "9", nombre: "Cardiología" },
    { id: "10", nombre: "Neurología" },
    { id: "11", nombre: "Psiquiatría" },
    { id: "12", nombre: "Nutrición y Dietética" },
    { id: "13", nombre: "Fisioterapia y Rehabilitación" }
];
  
const horas = [
    { id: "1", hora: "8:00" },
    { id: "2", hora: "9:00" },
    { id: "3", hora: "10:00" },
    { id: "4", hora: "11:00" },
    { id: "5", hora: "12:00" },
    { id: "6", hora: "13:00" },
    { id: "7", hora: "14:00" },
    { id: "8", hora: "15:00" },
    { id: "9", hora: "16:00" },
    { id: "10", hora: "17:00" }
];


document.addEventListener("DOMContentLoaded", ()=> {
    cargarDatos();
});


//este archivo se encarga unicamente de cargar los datos en caso que estos no se encuentren
cargarDatos = () => {
    if (!localStorage.getItem('medicos')) {
      localStorage.setItem('medicos', JSON.stringify(medicos));
  
    }
  
    if (!localStorage.getItem('especialidades')) {
      localStorage.setItem('especialidades', JSON.stringify(especialidades));
    }
  
    if (!localStorage.getItem('horas')) {
      localStorage.setItem('horas', JSON.stringify(horas));
    }  
  };