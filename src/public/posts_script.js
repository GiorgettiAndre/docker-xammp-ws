async function sendData(url, data) {
    try
    {
        /* gestisco le opzioni */
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data) /* converto i dati in JSON */
        };
        /* lo mando */
        const response = await fetch(url, options);
        /* controllo errori */
        if (!response.ok)
            throw new Error(`Response status: ${response.status}`);
    }
    catch (error) { /* errore */ console.error(error.message); }
}

async function CreaArticolo()
{
    const data = {
        nome: document.getElementById("nome").value,
        categoria: document.getElementById("categoria").value,
        sottocategoria: document.getElementById("sottocategoria").value,
        prezzo: document.getElementById("prezzo").value
    };
    sendData("https://3000-idx-docker-xammp-ws-1744697601174.cluster-y34ecccqenfhcuavp7vbnxv7zk.cloudworkstations.dev/api/articoli", data);
}

document.getElementById("crea").addEventListener("click", CreaArticolo);