<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/db.php';

$rows = db()->query('SELECT item_id, preco FROM precos')->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($rows);
