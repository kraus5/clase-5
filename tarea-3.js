//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonAgregar = document.querySelector("#agregar-video");
const $botonCalcular = document.querySelector("#calcular-duracion");

const listaDeVideos = []

$botonAgregar.onclick = function () {
    const horasVideo = Number(document.querySelector("#horas").value);
    const minutosVideo = Number(document.querySelector("#minutos").value);
    const segundosVideo = Number(document.querySelector("#segundos").value);

    listaDeVideos.push([horasVideo,minutosVideo,segundosVideo]);
}

$botonCalcular.onclick = function () {
    let horasTotales = 0;
    let minutosTotales = 0;
    let segundosTotales = 0;

    for(let i=0; i<listaDeVideos.length; i++) {
        const horasVideo = listaDeVideos [i][0]
        const minutosVideo = listaDeVideos [i][1]
        const segundosVideo = listaDeVideos [i][2]

        horasTotales += horasVideo
        minutosTotales += minutosVideo
        segundosTotales += segundosVideo

    }

    if(segundosTotales >= 60) {
        minutosTotales += Math.floor(segundosTotales/60)   
        segundosTotales = segundosTotales % 60  
    }

    if(minutosTotales >= 60) {
        horasTotales += Math.floor(minutosTotales/60)
        minutosTotales = minutosTotales % 60
    }

    document.querySelector("#resultado").innerHTML = (`Duración total: ${horasTotales} horas ${minutosTotales} minutos ${segundosTotales} segundos`);
}
