CREATE DATABASE supermercadoelectron;

USE supermercadoelectron;

CREATE TABLE productos (
  id_producto INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  categoria VARCHAR(255),
  existencia INT,
  PRIMARY KEY (id_producto)
);

CREATE TABLE pedidos (
  id_pedido INT NOT NULL AUTO_INCREMENT,
  id_producto INT NOT NULL,
  proveedor VARCHAR(255) NOT NULL,
  cantidad INT NOT NULL,
  PRIMARY KEY (id_pedido),
  FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);

CREATE TABLE usuarios (
  id_empleado INT NOT NULL AUTO_INCREMENT,
  contrasena VARCHAR(255) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  PRIMARY KEY (id_empleado)
);


INSERT INTO productos (nombre, descripcion, categoria, existencia) VALUES
  ('Laptop', 'Laptop marca HP', 'Electrónicos', 10),
  ('Mouse', 'Mouse inalámbrico marca Logitech', 'Electrónicos', 25),
  ('Mesa', 'Mesa de madera color café', 'Muebles', 5),
  ('Silla', 'Silla para oficina color negro', 'Muebles', 15);

INSERT INTO usuarios (contrasena, nombre) VALUES
  ('123456', 'Juan Pérez'),
  ('abcdef', 'María González');

INSERT INTO pedidos (id_producto, proveedor, cantidad) VALUES
  (1, 'Proveedora de Tecnología SA de CV', 5),
  (2, 'Distribuidora de Electrónicos SA de CV', 10),
  (3, 'Mueblería La Estrella', 2),
  (4, 'Muebles y Decoraciones SA de CV', 4);
