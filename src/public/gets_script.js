/* funzione che prende i dati da una URL */
async function getData(url)
{
    try
    {
        /* richiamo URL */
        const response = await fetch(url);
        /* controllo errori */
        if(!response.ok)
            throw new Error(`Response status: ${response.status}`);
        /* ritorno il dato in formato JSON */
        return await response.json();
    }
    catch (error)
    {
        /* errore */
        console.error(error.message);
        return [];
    }
}

/* funzione di aggiornamento tabellare */
async function Articoli()
{
    /* prendo la categoria e sottocategoria scelti */
    const categoria = document.getElementById("categoria").value;
    const sottocategoria = document.getElementById("sottocategoria").value;
    /* inizializzo tabella vuota */
    var data = [];
    /* in base alle disponibilità dei parametri richiedo delle API o WS scecifiche */
    if(categoria != "" && sottocategoria != "")
        data = await getData("https://3000-idx-docker-xammp-ws-1744697601174.cluster-y34ecccqenfhcuavp7vbnxv7zk.cloudworkstations.dev/api/articoli/"+categoria+"/"+sottocategoria);
    else if(categoria != "")
        data = await getData("https://3000-idx-docker-xammp-ws-1744697601174.cluster-y34ecccqenfhcuavp7vbnxv7zk.cloudworkstations.dev/api/articoli/"+ categoria);
    else
        data = await getData("https://3000-idx-docker-xammp-ws-1744697601174.cluster-y34ecccqenfhcuavp7vbnxv7zk.cloudworkstations.dev/api/articoli");
    /* se vuoto lo dico */
    if(data.length === 0)
        document.getElementById(id_tab).innerHTML = "Dati vuoti";
    else
    {
        /* popolo la tabella */
        document.getElementById("tabella").innerHTML = "<thead> <tr> <th>Nome</th><th>Categoria</th><th>SottoCategoria</th><th>Prezzo</th> </tr> </thead>";
        data.forEach(element =>
        {
            var row = document.createElement("tr");
            row.innerHTML = `<td>${element.Nome}</td><td>${element.Categoria}</td><td>${element.SottoCategoria}</td><td>${element.Prezzo}</td>`;
            document.getElementById("tabella").appendChild(row);
        });
    }
}

/* aggiornamento delle sottocategorie */
async function ChangeSottoCategoria()
{
    /* inizializzo con un'opzione nullo */
    document.getElementById("sottocategoria").innerHTML = '<option value=""> --- </option>';
    /* prendo la categoria selezionata */
    const categoria = document.getElementById("categoria").value;
    /* prendo i dati delle categorie in base alla categoria */
    const data = await getData("https://3000-idx-docker-xammp-ws-1744697601174.cluster-y34ecccqenfhcuavp7vbnxv7zk.cloudworkstations.dev/api/"+categoria+"/sottocategorie");
    /* aggiungo le sottocategorie */
    if(data.length>0) data.forEach(element=>{document.getElementById("sottocategoria").innerHTML+=`<option value="${element.sottocategoria}">${element.sottocategoria}</option>`;});
    /* aggiorno la tabella */
    await Articoli();
}

/* caricamento delle categorie */
async function CaricaCategorie()
{
    /* inizializzo con un'opzione nullo */
    document.getElementById("categoria").innerHTML = '<option value=""> --- </option>';
    /* prendo i dati delle categorie */
    const data = await getData("https://3000-idx-docker-xammp-ws-1744697601174.cluster-y34ecccqenfhcuavp7vbnxv7zk.cloudworkstations.dev/api/categorie");
    /* aggiungo le categorie */
    if(data.length > 0) data.forEach(element => { document.getElementById("categoria").innerHTML += `<option value="${element.categoria}">${element.categoria}</option>`; });
    /* aggiungo evento in cui ricarica le sottocategorie ad ogni categoria scelta */
    document.getElementById("categoria").addEventListener("change", ChangeSottoCategoria);
}

/* aggiunge evento bottone cerca */
document.getElementById("sottocategoria").addEventListener("change", Articoli);
/* carico le categorie disponibili */
CaricaCategorie();
/* popolazione totale iniziale della tabella */
Articoli();