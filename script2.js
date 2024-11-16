// Selecciona los elementos
const moreText = document.getElementById('moreText');
const moremoreText = document.getElementById('moremoreText');
const readMoreBtn = document.getElementById('readMoreBtn');
const fullTextBtn = document.getElementById('readMoreMoreBtn');

function toggleText() {
    // Mostrar o ocultar el primer bloque de texto cuando se haga clic en "Leer más"
    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";  // Mostrar el primer bloque de texto
        readMoreBtn.style.display = "none"; 
        fullTextBtn.style.display = "inline"; 
    } else {
        moreText.style.display = "none";  // Ocultar el primer bloque de texto
        readMoreBtn.style.display = "inline"; 
        fullTextBtn.style.display = "none"; 
    }
}

// Función para revelar el texto completo
function revealFullText() {
    moremoreText.style.display = "inline"; // Mostrar el segundo bloque de texto (completo)
    fullTextBtn.style.display = "none"; 
}
