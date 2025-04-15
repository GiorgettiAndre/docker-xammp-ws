<?php
header("Content-Type: application/json");

include_once "db.php";

$row = $conn->query("SELECT categoria FROM articoli GROUP BY categoria;");

$data = [];
while($row = $res->fetch_assoc())
    $data[] = $row;

echo json_encode($data);