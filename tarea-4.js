//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $botonCalcular = document.querySelector("#calcular");

let listaDeNumeros = [5, 9, 5, 22, 28, 22, 31, 5, 34, 35]

function calcularPromedio(listaDeNumeros) {

    let numero = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {

        numero = numero + listaDeNumeros[i]
    }

    return numero / listaDeNumeros.length;
}

let resultadoPromedio = calcularPromedio(listaDeNumeros);

function numeroMasPequeño(listaDeNumeros) {

    let numeroMinimo = listaDeNumeros[0]
    for (let i = 1; i < listaDeNumeros.length; i++) {

        if (listaDeNumeros[i] < numeroMinimo) {

            numeroMinimo = listaDeNumeros[i]
        }
    }

    return numeroMinimo;
}

let numeroMinimo = numeroMasPequeño(listaDeNumeros);

function numeroMasGrande(listaDeNumeros) {

    let numeroMaximo = listaDeNumeros[0]
    for (let i = 1; i < listaDeNumeros.length; i++) {

        if (listaDeNumeros[i] > numeroMaximo) {

            numeroMaximo = listaDeNumeros[i]
        }
    }

    return numeroMaximo;
}

let numeroMaximo = numeroMasGrande(listaDeNumeros);

function numeroMasRepetido(listaDeNumeros) {

    let numeroMasRepetido;
    let masRepetido = 0;

    for (let i = 0; i < listaDeNumeros.length; i++) {

        let numero = listaDeNumeros[i]
        let repetido = 0;

        for (let x = 0; x < listaDeNumeros.length; x++) {

            if(listaDeNumeros[x] === numero) {

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

let numeroMasVecesRepetido = numeroMasRepetido(listaDeNumeros);

let mensaje; 
$botonCalcular.onclick = function () {
    let mensaje = `El promedio es: ${resultadoPromedio}<br>`
    mensaje += `El número más pequeño es: ${numeroMinimo}<br>`
    mensaje += `El número más grande es: ${numeroMaximo}<br>`
    mensaje += `El número más repetido es: ${numeroMasVecesRepetido}<br>`

    document.querySelector("#resultado").innerHTML = mensaje;

    return false;
}