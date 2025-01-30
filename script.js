const himnos = [
    {
        titulo: "Más Allá del Sol",
        letra: `Aunque en esta vida
No tengo riquezas
Sé qué allá en la gloria
Tengo mi mansión...

Más allá del Sol
Más allá del Sol
Yo tengo un hogar, bello hogar,
Más allá del Sol.`
    },
    {
        titulo: "Sublime Gracia",
        letra: `Sublime gracia del Señor
Que a un pecador salvó...
Fui ciego mas hoy veo yo,
Perdido y Él me halló...`
    },
    {
        titulo: "Cuan Grande es Él",
        letra: `Señor mi Dios, al contemplar los cielos
El firmamento y las estrellas brillar...
Al oír tu voz en los potentes truenos,
Y ver brillar el sol en su cenit...`
    }
];

function cargarHimnos() {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    himnos.forEach((himno, index) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="numero">${index + 1}</div>
            <div class="contenido">
                <h2>${himno.titulo}</h2>
                <p>${himno.letra.split("\n").slice(0, 2).join("<br>")}...</p> <!-- Resumen -->
                <button onclick="mostrarHimno(${index})">Leer más</button>
            </div>
        `;

        container.appendChild(card);
    });
}

function mostrarHimno(index) {
    const container = document.querySelector(".container");
    const himno = himnos[index];

    container.innerHTML = `
        <div class="card">
            <div class="numero">${index + 1}</div>
            <div class="contenido">
                <h2>${himno.titulo}</h2>
                <p>${himno.letra.replace(/\n/g, "<br>")}</p>
                <button onclick="cargarHimnos()">Volver</button>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", cargarHimnos);
