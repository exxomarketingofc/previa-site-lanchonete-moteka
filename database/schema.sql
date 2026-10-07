CREATE TABLE IF NOT EXISTS precos (
  item_id VARCHAR(64) PRIMARY KEY,
  preco DECIMAL(10,2) NOT NULL
);

INSERT INTO precos (item_id, preco) VALUES
  ('sanduiches-x-burguer', 12),
  ('sanduiches-x-salada', 15),
  ('sanduiches-x-egg', 17),
  ('sanduiches-x-bacon', 22),
  ('sanduiches-x-calabresa', 18),
  ('sanduiches-x-frango', 18),
  ('sanduiches-x-tudo', 30),
  ('porcoes-batata-frita', 38),
  ('porcoes-calabresa', 40),
  ('porcoes-batata-frita-calabresa', 45),
  ('porcoes-tilapia-milanesa', 50),
  ('porcoes-frango-passarinho', 40),
  ('porcoes-frango-milanesa', 50),
  ('porcoes-porcao-01', 60),
  ('porcoes-porcao-02', 80),
  ('porcoes-porcao-03', 60),
  ('porcoes-porcao-04', 45),
  ('porcoes-porcao-05', 65),
  ('porcoes-aneis-cebola', 45),
  ('combos-combo-01', 75),
  ('combos-combo-02', 85),
  ('combos-combo-03', 99),
  ('combos-combo-04', 30),
  ('combos-combo-05', 40)
ON DUPLICATE KEY UPDATE preco = VALUES(preco);
