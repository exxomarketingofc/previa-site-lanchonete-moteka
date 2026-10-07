<?php
header('Content-Type: application/json; charset=utf-8');
require_once __DIR__ . '/config.php';

$input = json_decode(file_get_contents('php://input'), true) ?? [];
$senha = $input['senha'] ?? '';

echo json_encode(['ok' => password_verify($senha, ADMIN_PASSWORD_HASH)]);
