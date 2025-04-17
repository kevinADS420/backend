CREATE TABLE payment_preferences (
  id_pago VARCHAR(36) NOT NULL PRIMARY KEY,
  preference_id VARCHAR(255) NOT NULL UNIQUE,
  items TEXT NOT NULL,
  payer TEXT NOT NULL,
  status ENUM('pending', 'approved', 'rejected', 'cancelled', 'refunded', 'unknown') NOT NULL,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
); 