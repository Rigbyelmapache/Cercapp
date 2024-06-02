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
    var archivoURL = 'apk/CercApp.apk'; 
    if (esMovil) {
        // Si es un dispositivo móvil, intentar abrir la URL en una nueva ventana
        window.open(archivoURL, '_blank');
    } else {
        // Crear un elemento de enlace temporal
        var enlaceDeDescarga = document.createElement('a');
        enlaceDeDescarga.href = archivoURL;
        enlaceDeDescarga.download = 'CercApp.apk';

        // Agregar el enlace al documento HTML
        document.body.appendChild(enlaceDeDescarga);

        // Simular un clic en el enlace
        enlaceDeDescarga.click();

        // Eliminar el enlace del documento HTML
        document.body.removeChild(enlaceDeDescarga);
    }
}