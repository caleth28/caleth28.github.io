const himnos = [
    {
        titulo: "Más Allá del Sol",
        letra: "Aunque en esta vida\nNo tengo riquezas\nSé qué allá en la gloria\nTengo mi mansión..."
    },
    {
        titulo: "Sublime Gracia",
        letra: "Sublime gracia del Señor\nQue a un pecador salvó...\nFui ciego mas hoy veo yo..."
    },
    {
        titulo: "Cuan Grande es Él",
        letra: "Señor mi Dios, al contemplar los cielos\nEl firmamento y las estrellas brillar..."
    }
];

function cargarHimnos() {
    const container = document.querySelector(".container");

    himnos.forEach((himno, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h2>${himno.titulo}</h2>
            <p>${himno.letra.split("\n").slice(0, 2).join("<br>")}...</p> <!-- Muestra un resumen -->
            <button onclick="mostrarHimno(${index})">Ver Himno</button>
        `;

        container.appendChild(card);
    });
}

function mostrarHimno(index) {
    const container = document.querySelector(".container");
    const himno = himnos[index];

    container.innerHTML = `
        <div class="card">
            <h2>${himno.titulo}</h2>
            <p>${himno.letra.replace(/\n/g, "<br>")}</p>
            <button onclick="cargarHimnos()">Volver</button>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", cargarHimnos);
