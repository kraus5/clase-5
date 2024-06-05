//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $botonCalcular = document.querySelector("#calcular");

let numeros = [5, 9, 5, 22, 28, 22, 31, 5, 34, 35]

function calcularPromedio(numeros) {

    let numero = 0;
    for (let i = 0; i < numeros.length; i++) {

        numero = numero + numeros[i]
    }

    return numero / numeros.length;
}

let resultadoPromedio = calcularPromedio(numeros);

function calcularNumeroMasPequeño(numeros) {

    let numeroMinimo = numeros[0]
    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] < numeroMinimo) {

            numeroMinimo = numeros[i]
        }
    }

    return numeroMinimo;
}

let numeroMinimo = calcularNumeroMasPequeño(numeros);

function calcularNumeroMasGrande(numeros) {

    let numeroMaximo = numeros[0]
    for (let i = 1; i < numeros.length; i++) {

        if (numeros[i] > numeroMaximo) {

            numeroMaximo = numeros[i]
        }
    }

    return numeroMaximo;
}

let numeroMaximo = calcularNumeroMasGrande(numeros);

function calcularNumeroMasRepetido(numeros) {

    let numeroMasRepetido;
    let masRepetido = 0;

    for (let i = 0; i < numeros.length; i++) {

        let numero = numeros[i]
        let repetido = 0;

        for (let x = 0; x < numeros.length; x++) {

            if(numeros[x] === numero) {

                repetido ++
            }
            
            if (repetido > masRepetido) {

                masRepetido = repetido;
                numeroMasRepetido = numero;
            }
        }
    }

    return numeroMasRepetido;
}

let numeroMasVecesRepetido = calcularNumeroMasRepetido(numeros);

let mensaje; 
$botonCalcular.onclick = function () {
    let mensaje = `El promedio es: ${resultadoPromedio}<br>`
    mensaje += `El número más pequeño es: ${numeroMinimo}<br>`
    mensaje += `El número más grande es: ${numeroMaximo}<br>`
    mensaje += `El número más repetido es: ${numeroMasVecesRepetido}<br>`

    document.querySelector("#resultado").innerHTML = mensaje;

    return false;
}