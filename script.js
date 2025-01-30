let himnos = []; // Almacenará los himnos cargados desde el JSON

// Función para cargar los himnos desde un archivo JSON
function cargarHimnos() {
    fetch("himnos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo de himnos.");
            }
            return response.json();
        })
        .then(data => {
            himnos = data; // Guarda los himnos en la variable global
            volverAlIndice(); // Genera el índice con los himnos cargados
        })
        .catch(error => {
            console.error("Error al cargar los himnos:", error);
            document.querySelector(".container").innerHTML = `<p>Error al cargar los himnos.</p>`;
        });
}

function mostrarHimno(index) {
    const himno = himnos[index];
    const container = document.querySelector(".container");
    container.innerHTML = `
        <h2>${himno.titulo}</h2>
        <p>${himno.letra.replace(/\n/g, "<br>")}</p>
        <button onclick="volverAlIndice()">Volver al índice</button>
    `;
}

function volverAlIndice() {
    const container = document.querySelector(".container");
    container.innerHTML = `
        <h1>Himnario Online</h1>
        <ul class="himno-list">
            ${himnos.map((himno, index) => `
                <li onclick="mostrarHimno(${index})">${himno.titulo}</li>
            `).join('')}
        </ul>
    `;
}

// Cargar los himnos al cargar la página
document.addEventListener("DOMContentLoaded", cargarHimnos);
