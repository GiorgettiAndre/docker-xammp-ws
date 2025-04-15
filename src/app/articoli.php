<?php
header("Content-Type: application/json");

include_once "db.php";
if(isset($sottocategoria))
    $res = $conn->query("SELECT Nome, Prezzo FROM articoli WHERE Categoria = '$categoria' AND SottoCategoria = '$sottocategoria';");
elseif(isset($categoria))
    $res = $conn->query("SELECT Nome, SottoCategoria, Prezzo FROM articoli WHERE Categoria = '$categoria';");
else
    $res = $conn->query("SELECT Nome, Categoria, SottoCategoria, Prezzo FROM articoli;");

$data = [];
while($row = $res->fetch_assoc())
    $data[] = $row;

echo json_encode($data);