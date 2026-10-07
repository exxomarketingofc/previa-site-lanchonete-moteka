<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

$input = json_decode(file_get_contents('php://input'), true) ?? [];
$senha = $input['senha'] ?? '';
$itemId = $input['item_id'] ?? '';
$preco = $input['preco'] ?? null;

if (!password_verify($senha, ADMIN_PASSWORD_HASH)) {
    http_response_code(401);
    echo json_encode(['ok' => false, 'erro' => 'senha incorreta']);
    exit;
}

if ($itemId === '' || !is_numeric($preco) || $preco <= 0) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'erro' => 'dados inválidos']);
    exit;
}

$stmt = db()->prepare(
    'INSERT INTO precos (item_id, preco) VALUES (:id, :preco)
     ON DUPLICATE KEY UPDATE preco = :preco2'
);
$stmt->execute(['id' => $itemId, 'preco' => $preco, 'preco2' => $preco]);

echo json_encode(['ok' => true]);
