//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const $botonResultado = document.querySelector("#botonResultado");
let textoResultado;

$botonResultado.onclick = function(){
  let $salarioAnual = Number(document.querySelector("#salarioAnual").value)
  textoResultado = $salarioAnual / 12;
  document.querySelector("#salarioMensual").value = textoResultado
}