const himnos = [
    {
        titulo: "Más Allá del Sol",
        letra: "Aunque en esta vida no tengo riquezas...\nMás allá del sol..."
    },
    {
        titulo: "Sublime Gracia",
        letra: "Sublime gracia del Señor...\nQue a mí pecador..."
    }
];

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

document.addEventListener("DOMContentLoaded", volverAlIndice);
