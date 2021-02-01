
var titulo = document.getElementById('saludo');

function cambiarColor (){
    titulo.classList.remove("saludo");
    titulo.classList.add("nuevaClase")
}


var caja_html = document.getElementById('caja');

function funcionCaja (){
    
    caja_html.classList.remove("estilo_1");
    caja_html.classList.add("estilo_2")
}

var grupo = document.activeElementById('ds_btn');

function grupo (){
    caja_html.classList.remove("estilo_1")
    caja_html.classList.add("estilo_2")
    titulo.classList.remove("saludo")
    titulo.classList.add("nuevaClase")
}
/*-------------------------*/

var btn_html = document.getElementById('boton');

titulo.addEventListener('click', cambiarColor);

btn_html.addEventListener('click',grupo);