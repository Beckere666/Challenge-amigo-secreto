
let amigos = [];
let sorteoRealizado = false;

function asignarTextoElemento(selector, texto) {
    let elemento = document.querySelector(selector);
    elemento.innerHTML = texto;
    return;
}

function limpiarCampo() {
    document.getElementById('amigo').value = '';
    return;
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    if (sorteoRealizado) {
        amigos = [];
        asignarTextoElemento('#resultado', '');
        sorteoRealizado = false;
    }
    
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        limpiarCampo();
        return;
    }

    amigos.push(nombreAmigo);
    limpiarCampo();
    actualizarListaAmigos();
    return;
}

function actualizarListaAmigos() {    
    let listaHTML = '';
        
    if (sorteoRealizado) {
        asignarTextoElemento('#listaAmigos', '');
        return;
    }    
    
    for (let i = 0; i < amigos.length; i++) {
        listaHTML += `<li>${amigos[i]}</li>`;
    }
        
    asignarTextoElemento('#listaAmigos', listaHTML);
    return;
}

function seleccionarAmigoAleatorio() {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    return amigos[indiceAleatorio];
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert('Necesitas añadir al menos un amigo para realizar el sorteo.');
        return;
    }
        
    let amigoSeleccionado = seleccionarAmigoAleatorio();
    
    asignarTextoElemento('#listaAmigos', '');   
    
    asignarTextoElemento('#resultado', `<li style="color: #4CAF50; font-weight: bold;">El amigo secreto sorteado es: ${amigoSeleccionado}</li>`);
        
    sorteoRealizado = true;
    return;
}