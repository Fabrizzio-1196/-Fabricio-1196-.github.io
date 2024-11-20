const totalCartas = 12;  // Número total de cartas 
let cartas = [];
let cartasSeleccionadas = [];
let valoresDeUso = [];
let currentMove = 0; 

// Plantilla de la carta 
let cardTemplate = `
    <div class="cartas">
        <div class="reverso"></div>
        <div class="cara"></div>
    </div>
`;
// Función para recargar la página 
document.getElementById('actualizarBtn').addEventListener('click', function() {
    location.reload();  
});

// Función para generar valores aleatorios y evitar duplicados
function valoresAleatorios() {
    let rnd = Math.floor(Math.random() * (totalCartas / 2)) + 1;  
    while (valoresDeUso.filter(v => v === rnd).length >= 2) {  
        rnd = Math.floor(Math.random() * (totalCartas / 2)) + 1;
    }
    valoresDeUso.push(rnd);
    return rnd;
}

// Función que maneja el clic en las cartas
function activar(e) {
   
    if (!e.target.classList.contains('reverso') && !e.target.classList.contains('cara')) return;

   
    if (cartasSeleccionadas.length < 2 && !e.target.closest('.cartas').classList.contains('active')) {
        let carta = e.target.closest('.cartas');  
        carta.classList.add('active');  
        carta.querySelector('.cara').style.display = 'flex';  

        cartasSeleccionadas.push(carta);  

        if (cartasSeleccionadas.length === 2) {
            
            if (cartasSeleccionadas[0].querySelector('.cara').innerHTML === cartasSeleccionadas[1].querySelector('.cara').innerHTML) {
                
                cartasSeleccionadas = [];
                currentMove = 0;
            } else {
                
                setTimeout(() => {
                    cartasSeleccionadas[0].classList.remove('active');
                    cartasSeleccionadas[1].classList.remove('active');
                    cartasSeleccionadas[0].querySelector('.cara').style.display = 'none';
                    cartasSeleccionadas[1].querySelector('.cara').style.display = 'none';
                    cartasSeleccionadas = [];
                    currentMove = 0;
                }, 300);  
            }
        }
    }
}

// Función para inicializar el juego
function inicializarJuego() {
    
    for (let i = 0; i < totalCartas; i++) {
        let div = document.createElement('div');
        div.innerHTML = cardTemplate;

        let valor = valoresAleatorios();
        div.querySelector('.cara').innerHTML = valor; 

        div.addEventListener('click', activar);
        cartas.push(div);
        document.querySelector('#juego').appendChild(div);
    }
}

// función para iniciar el juego
inicializarJuego();