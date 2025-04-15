<?php
$conn = new mysqli('db', 'user', 'user', 'root_db', 3306);
if ($conn->connect_error)
    die("so morto: " . $conn->connect_error);