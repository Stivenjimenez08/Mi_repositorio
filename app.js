// variables para funcion de cambiar modo (dia/noche)
let activoNoche= document.querySelector(".noche")
let activoDia=   document.querySelector(".dia")
let cambioEstilo= document.querySelector("link#modoDia")
let estilo= cambioEstilo.getAttribute('href')
let estado= false

function getId(img){
    let modo= img.getAttribute('id')
    if(modo=="mdia" && estado== false){
        cambioEstilo.setAttribute('href','styles/modoDia.css')
        activoNoche.style.display = "block"
        activoDia.style.display = "none"
    }else if(modo=="mnoche" && estado==false){
        cambioEstilo.setAttribute('href','styles/modoNoche.css')
        activoNoche.style.display= "none"
        activoDia.style.display= "block"}
}
//funcion para aviso de formulario enviado
    window.addEventListener("load", function(){
    document.getElementById("btnform").addEventListener("click", function(){
    alert("Datos de formulario enviados");
    })
})