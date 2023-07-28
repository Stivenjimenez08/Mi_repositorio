
let activoNoche= document.querySelector(".noche")
let activoDia=   document.querySelector(".dia")
let cambioEstilo= document.querySelector("link#modoDia")
let estilo= cambioEstilo.getAttribute('href')
let estado= false

function getId(img){
    let modo= img.getAttribute('id')
    // console.log(modo)
    if(modo=="mdia" && estado== false){
        cambioEstilo.setAttribute('href','styles/modoDia.css')
        activoNoche.style.display= "block"
        activoDia.style.display= "none"
    }else if(modo=="mnoche" && estado==false){
        cambioEstilo.setAttribute('href','styles/modoNoche.css')
        activoNoche.style.display= "none"
        activoDia.style.display= "block"}
}