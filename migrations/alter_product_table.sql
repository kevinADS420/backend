-- Modificar el orden de las columnas en la tabla Producto
ALTER TABLE Producto 
MODIFY COLUMN cantidad INT AFTER Precio,
MODIFY COLUMN imagen BLOB AFTER cantidad; 