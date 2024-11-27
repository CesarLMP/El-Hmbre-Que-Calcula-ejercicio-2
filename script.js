function calcularReparto() {
    // Obtener el número de camellos
    let numCamellos = parseInt(document.getElementById('camellos').value);

    // Verificar si el número es un número natural
    if (isNaN(numCamellos) || numCamellos < 1 || !Number.isInteger(numCamellos)) {
        alert('Por favor, ingrese un número natural válido de camellos (1, 2, 3, ...).');
        return;
    }

    let camellosTotales = numCamellos;

    // Verificar si el número no es divisible por 2, 3 y 9
    if (camellosTotales % 2 !== 0 || camellosTotales % 3 !== 0 || camellosTotales % 9 !== 0) {
        camellosTotales += 1; // Agregar un camello extra si no es divisible por 2, 3 y 9
    }

    // Calcular las partes
    let mitad = camellosTotales / 2;
    let tercera = camellosTotales / 3;
    let novena = camellosTotales / 9;

    // Comprobar si las divisiones son exactas
    if (!Number.isInteger(mitad) || !Number.isInteger(tercera) || !Number.isInteger(novena)) {
        alert('No es posible realizar un reparto exacto, incluso con un camello adicional.');
        return;
    }

    // Preparar el mensaje de resultado
    let mensaje = `
        Con ${numCamellos} camellos originales:
        <br><br>
        ${camellosTotales > numCamellos ? `1. Agregamos 1 camello temporal → ${camellosTotales} camellos` : ''}
        <br>
        ${camellosTotales > numCamellos ? '2' : '1'}. La mitad es: ${mitad} camellos
        <br>
        ${camellosTotales > numCamellos ? '3' : '2'}. La tercera parte es: ${tercera} camellos
        <br>
        ${camellosTotales > numCamellos ? '4' : '3'}. La novena parte es: ${novena} camellos
        <br><br>
        Total repartido: ${mitad + tercera + novena} camellos
        <br>
        ${camellosTotales > numCamellos ? 'Sobra 1 camello que se devuelve' : ''}
    `;

    // Mostrar el resultado
    let resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = mensaje;
    resultadoDiv.style.display = 'block';
}
