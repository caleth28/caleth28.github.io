const API_KEY = "AIzaSyD2fhGnll5_PtVIY3TJm5rKY4OC0Cx-GLw"; // Tu API Key
const DOCUMENT_ID = "TU_DOCUMENT_ID"; // Reemplaza con el ID de tu documento de Google Docs

function cargarHimnosDesdeGoogleDocs() {
    const url = `https://docs.googleapis.com/v1/documents/${DOCUMENT_ID}?key=${API_KEY}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Extrae el contenido del documento
            const contenido = data.body.content;
            let html = "";

            contenido.forEach(element => {
                if (element.paragraph && element.paragraph.elements) {
                    const texto = element.paragraph.elements.map(e => e.textRun ? e.textRun.content : "").join("");
                    html += `<p>${texto}</p>`;
                }
            });

            // Inserta el contenido en la página
            document.querySelector(".container").innerHTML = html;
        })
        .catch(error => console.error("Error al cargar el documento:", error));
}

// Cargar los himnos al iniciar la página
document.addEventListener("DOMContentLoaded", cargarHimnosDesdeGoogleDocs);
