let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    let lista = document.getElementById('listaAmigos');
    
    // Validar que el campo no esté vacío
    if (amigo.trim() === '') {
        alert('Por favor, ingresa un nombre.');
        return;
    }
    
    amigos.push(amigo.trim());
    lista.innerHTML = amigos.join(', ');
    
    // Limpiar el campo de entrada
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');

    // Validar que haya al menos 3 amigos para evitar que un amigo se regale a sí mismo
    if (amigos.length < 3) {
        alert('Se necesitan al menos 3 amigos para realizar el sorteo.');
        return;
    }

    // Copiar el array y mezclarlo para el sorteo
    let amigosSorteados = amigos.slice();
    shuffle(amigosSorteados);

    resultado.innerHTML = ''; // Limpiar resultados anteriores
    
    // Mostrar el resultado del sorteo
    for (let i = 0; i < amigos.length; i++) {
        let de = amigos[i];
        let para = amigosSorteados[i];
        
        // Evitar que un amigo se regale a sí mismo
        if (de === para) {
            alert('¡Ups! Hubo un problema en el sorteo, por favor inténtalo de nuevo.');
            sortearAmigo(); // Reintentar el sorteo
            return;
        }

        resultado.innerHTML += `<p>${de} --> ${para}</p>`;
    }
}

// Función para mezclar aleatoriamente el array (Algoritmo de Fisher-Yates)
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // Mientras queden elementos a mezclar
    while (currentIndex !== 0) {
        // Seleccionar un elemento restante
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Y lo intercambiamos con el elemento actual
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}