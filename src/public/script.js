const id_tab = "tabella";

async function getData(url)
{
    try
    {
        const response = await fetch(url);

        if(!response.ok)
            throw new Error(`Response status: ${response.status}`);

        const data = await response.json();
        return data;

    }
    catch (error)
    {
        console.error(error.message);
        return [];
    }
}

async function Articoli()
{
    const data = await getData("https://3000-idx-docker-xammp-ws-1744697601174.cluster-y34ecccqenfhcuavp7vbnxv7zk.cloudworkstations.dev/api/articoli");

    if(data.length === 0)
        document.getElementById(id_tab).innerHTML = "Dati vuoti";
    else
    {
        document.getElementById(id_tab).innerHTML = "<thead> <tr> <th>Nome</th><th>Categoria</th><th>SottoCategoria</th><th>Prezzo</th> </tr> </thead>";
        data.forEach(element =>
        {
            var row = document.createElement("tr");
            row.innerHTML = `<td>${element.Nome}</td><td>${element.Categoria}</td><td>${element.SottoCategoria}</td><td>${element.Prezzo}</td>`;
            document.getElementById(id_tab).appendChild(row);
        });
    }
}

async function Articoli(categoria)
{
    const data = await getData("https://3000-idx-docker-xammp-ws-1744697601174.cluster-y34ecccqenfhcuavp7vbnxv7zk.cloudworkstations.dev/api/articoli?categoria=" + categoria);

    if(data.length === 0)
        document.getElementById(id_tab).innerHTML = "Dati vuoti";
    else
    {
        document.getElementById(id_tab).innerHTML = "<thead> <tr> <th>Nome</th><th>SottoCategoria</th><th>Prezzo</th> </tr> </thead>";
        data.forEach(element =>
        {
            var row = document.createElement("tr");
            row.innerHTML = `<td>${element.Nome}</td><td>${element.SottoCategoria}</td><td>${element.Prezzo}</td>`;
            document.getElementById(id_tab).appendChild(row);
        });
    }
}

async function Articoli(categoria, sottocategoria)
{
    const data = await getData("https://3000-idx-docker-xammp-ws-1744697601174.cluster-y34ecccqenfhcuavp7vbnxv7zk.cloudworkstations.dev/api/articoli?categoria="+categoria+"&sottocategoria="+sottocategoria);

    if(data.length === 0)
        document.getElementById(id_tab).innerHTML = "Dati vuoti";
    else
    {
        document.getElementById(id_tab).innerHTML = "<thead> <tr> <th>Nome</th><th>Prezzo</th> </tr> </thead>";
        data.forEach(element =>
        {
            var row = document.createElement("tr");
            row.innerHTML = `<td>${element.Nome}</td><td>${element.Prezzo}</td>`;
            document.getElementById(id_tab).appendChild(row);
        });
    }
}

/* carico categorie nelle categorie selezionabili */
const data = await getData("https://3000-idx-docker-xammp-ws-1744697601174.cluster-y34ecccqenfhcuavp7vbnxv7zk.cloudworkstations.dev/api/articoli/categorie");
if(data.length > 0)
{
    data.forEach(element =>
    {
        var option = document.createElement("option");
        option.value = element.categoria;
        option.text = element.categoria;
        document.getElementById("categoria").appendChild(option);
    });
}

/* aggiungo evento in cui ricarica le sottocategorie ad ogni categoria scelta */
document.getElementById("categoria").addEventListener("change", async function()
{
    const data = await getData("https://3000-idx-docker-xammp-ws-1744697601174.cluster-y34ecccqenfhcuavp7vbnxv7zk.cloudworkstations.dev/api/articoli/"+this.value+"/sottocategoria");
    if(data.length > 0)
    {
        data.forEach(element =>
        {
            var option = document.createElement("option");
            option.value = element.sottocategoria;
            option.text = element.sottocategoria;
            document.getElementById("sottocategoria").appendChild(option);
        });
    }
});

/* aggiungo un opzione nullo alla categoria e alla sottocategoria */
var option = document.createElement("option"); option.value = "[null]"; option.text = "[null]";
document.getElementById("categoria").appendChild(option);
document.getElementById("sottocategoria").appendChild(option);

/* aggiunge evento bottone */
document.getElementById("cerca_articolo").addEventListener("click", async function()
{
    const categoria = document.getElementById("categoria").value;
    const sottocategoria = document.getElementById("sottocategoria").value;

    if(categoria === "")
        Articoli();
    else if(sottocategoria === "")
        Articoli(categoria);
    else
        Articoli(categoria, sottocategoria);
});

/* popolazione iniziale della tabella */
Articoli();