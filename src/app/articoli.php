<?php
header("Content-Type: application/json");

include_once "db.php";
if(isset($_POST["nome"]) && isset($_POST["categoria"]) && isset($_POST["sottocategoria"]) && isset($_POST["prezzo"]))
{
    $nome = $_POST["nome"];
    $categoria = $_POST["categoria"];
    $sottocategoria = $_POST["sottocategoria"];
    $prezzo = intval($_POST["prezzo"]);

    $conn->query("INSERT INTO articoli (Nome, Categoria, SottoCategoria, Prezzo) VALUES ('$nome', '$categoria', '$sottocategoria', '$prezzo');");
}
else
{
    if(isset($sottocategoria))
        $res = $conn->query("SELECT Nome, Categoria, SottoCategoria, Prezzo FROM articoli WHERE Categoria = '$categoria' AND SottoCategoria = '$sottocategoria';");
    elseif(isset($categoria))
        $res = $conn->query("SELECT Nome, Categoria, SottoCategoria, Prezzo FROM articoli WHERE Categoria = '$categoria';");
    else
        $res = $conn->query("SELECT Nome, Categoria, SottoCategoria, Prezzo FROM articoli;");
    
    $data = [];
    while($row = $res->fetch_assoc())
        $data[] = $row;
    echo json_encode($data);
}