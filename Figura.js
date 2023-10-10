function Enviar() {
    // Obtener el valor seleccionado por el usuario
    var opciones = document.getElementsByName("opcion");
    var opcionSeleccionada = "";

    //recorre los checkbox para saber cual esta marcado
    for (var i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            opcionSeleccionada = opciones[i].value;
            break;
        }
    }
   
    // Mostrar un prompt basado en la figura que elija el usuario
    if (opcionSeleccionada === "Triangulo") {
        base=prompt("Escriba la base del triangulo:");
        altura=prompt("Escriba la altura del triangulo:");

        areaTriangulo=(base*altura)/2;
        alert("el area del triangulo es: "+areaTriangulo);
        window.location.href = window.location.href;

    } else if (opcionSeleccionada === "Rectangulo") {
        lado=prompt("Escriba el largo del rectangulo:");
        ancho=prompt("Escriba el ancho del rectangulo:");

        areaRectangulo=(lado*ancho)
        alert("el area del rectangulo es: "+areaRectangulo);
        window.location.href = window.location.href;

    } else if (opcionSeleccionada === "Cuadrado") {
        lado=prompt("Escriba el lado del cuadrado");

        areaCuadrado=(lado*lado);
        
        alert("el area del Cuadrado es: "+areaCuadrado);
        window.location.href = window.location.href;
    } else {
        alert("No se ha seleccionado ninguna opción");
    }
}
