// Variables
let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 100
// Funciones
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if (numeroDeUsuario === numeroSecreto){
    
     asignarTextoElemento("p",`Acertaste en: ${intentos} ${intentos === 1 ? "vez" : "veces"}`);
     document.getElementById("reiniciar").removeAttribute("disabled");
    } else{
         if ( numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","El número es menor");
        }else { 
            asignarTextoElemento("p","El número es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}
condicionesIniciales();

function iniciarNuevo(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled","true");

}
function limpiarCaja(){
   document.querySelector("#valorUsuario").value = "";
   
}
function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p", "Son todos los números posibles");
        
    } else{
     if (listaNumerosSorteados.includes(numeroGenerado)){
        return generaNumeroSecreto();
     }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
    }
}
function condicionesIniciales(){
asignarTextoElemento("h1","Juego de adivinar el número");
asignarTextoElemento("p",`Digita un número del 1 al ${numeroMaximo}`);
intentos = 1;
numeroSecreto = generaNumeroSecreto();
}




