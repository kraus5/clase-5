//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $botonEnviar = document.querySelector("#botonEnviar");

$botonEnviar.onclick = function () {
    let $nombreUsuario = document.querySelector("#nombreUsuario").value;
    let $segundoNombreUsuario = document.querySelector("#segundoNombreUsuario").value;
    let $apellidosUsuario = document.querySelector("#apellidosUsuario").value;
    let $edadUsuario = document.querySelector("#edadUsuario").value;

    let informacion = `${$nombreUsuario} ${$segundoNombreUsuario} ${$apellidosUsuario} ${$edadUsuario}`
    document.querySelector("#informacion").value = informacion
    document.querySelector("h1").innerText = `Bienvenido/a ${$nombreUsuario}`

    return false;
}
