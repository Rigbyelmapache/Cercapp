// Función para establecer el desplazamiento en la parte superior
function scrollToTop() {
    window.scrollTo(0, 0);
}
// Llama a la función cuando la página se carga
window.onload = scrollToTop;
//FUNCION PARA CARGAR PARAGINA
document.addEventListener("DOMContentLoaded", function () {
    // Agrega la clase 'appear' al contenido después de un tiempo (ajusta según sea necesario)
    setTimeout(function () {
        document.getElementById("hero").classList.add("appear");
    }, 500); // 500 milisegundos (0.5 segundos) es un ejemplo, ajusta según sea necesario
});

//BOTON

function descargarArchivo() {
    // URL del archivo que deseas descargar
    var archivoURL = 'apk/CercApp.apk'; // Reemplaza esto con la URL de tu archivo

    // Crear un elemento de enlace temporal
    var enlaceDeDescarga = document.createElement('a');
    enlaceDeDescarga.href = archivoURL;

    // Establecer el nombre del archivo
    enlaceDeDescarga.download = 'CercApp.apk'; // Puedes cambiar "nombre_del_archivo.pdf" por el nombre que desees

    // Agregar el enlace al documento HTML
    document.body.appendChild(enlaceDeDescarga);

    // Simular un clic en el enlace
    enlaceDeDescarga.click();

    // Eliminar el enlace del documento HTML
    document.body.removeChild(enlaceDeDescarga);
}