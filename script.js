const API_KEY = "AIzaSyD2fhGnll5_PtVIY3TJm5rKY4OC0Cx-GLw"; // Tu API Key
const DOCUMENT_ID = "1JTz2S9YV14ae3GbWQ_jE_pt4SSfGkXEWNumn608fOn8"; // ID del documento

function cargarHimnosDesdeGoogleDocs() {
    const url = `https://docs.googleapis.com/v1/documents/${DOCUMENT_ID}?key=${API_KEY}`;
    
    console.log("Conectando a la API de Google Docs...");
    console.log("URL:", url);

    fetch(url)
        .then(response => {
            console.log("Respuesta del servidor:", response);
            if (!response.ok) {
                throw new Error(`Error al acceder al documento: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Datos del documento:", data);
            const contenido = data.body.content;
            let html = "";

            contenido.forEach(element => {
                if (element.paragraph && element.paragraph.elements) {
                    const texto = element.paragraph.elements.map(e => e.textRun ? e.textRun.content : "").join("");
                    html += `<p>${texto}</p>`;
                }
            });

            document.querySelector(".container").innerHTML = html;
        })
        .catch(error => {
            console.error("Error al cargar el documento:", error);
            document.querySelector(".container").innerHTML = `<p>Error al cargar los himnos. Revisa la consola para más detalles.</p>`;
        });
}

document.addEventListener("DOMContentLoaded", cargarHimnosDesdeGoogleDocs);
