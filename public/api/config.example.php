<?php
// Copie este arquivo para config.php (no mesmo lugar) e preencha com os dados
// do banco criado no cPanel: MySQL® Databases > criar banco + usuário +
// associar o usuário ao banco com todos os privilégios.
define('DB_HOST', 'localhost');
define('DB_NAME', 'usuario_moteka');
define('DB_USER', 'usuario_moteka');
define('DB_PASS', 'troque-pela-senha-do-banco');

// Senha de acesso ao /admin. Gere o hash rodando no terminal (ou no "Terminal"
// do próprio cPanel, se disponível):
// php -r "echo password_hash('sua-senha-aqui', PASSWORD_BCRYPT), \"\n\";"
// e cole o resultado abaixo (substitua o placeholder, ele não é um hash válido).
define('ADMIN_PASSWORD_HASH', 'COLE_AQUI_O_HASH_GERADO');
