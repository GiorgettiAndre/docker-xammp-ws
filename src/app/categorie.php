<?php
header("Content-Type: application/json");

include_once "db.php";

if(isset($categoria))
    $res = $conn->query("SELECT DISTINCT sottocategoria FROM articoli WHERE categoria = '$categoria';");
else
    $res = $conn->query("SELECT DISTINCT categoria FROM articoli;");

$data = [];
while($row = $res->fetch_assoc())
    $data[] = $row;

echo json_encode($data);