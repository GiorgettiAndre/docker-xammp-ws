<?php
header("Content-Type: application/json");

include_once "db.php";

$row = $conn->query("SELECT sottocategoria FROM articoli WHERE categoria = '$categoria' GROUP BY categoria;");

$data = [];
while($row = $res->fetch_assoc())
    $data[] = $row;

echo json_encode($data);