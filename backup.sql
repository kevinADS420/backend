generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Cliente {
  id_cliente  Int         @id @default(autoincrement())
  Nombres     String      @db.VarChar(50)
  Apellidos   String      @db.VarChar(50)
  Email       String      @unique @db.VarChar(50)
  contrase├▒a Bytes?      @db.VarBinary(250)
  createdAt   DateTime    @default(now())
  updatedAt   DateTime?
  googleId    String?     @unique @db.VarChar(255)
  role        String      @default("cliente") @db.VarChar(20)
  direcciones Direccion[]
  pagos       Pago[]
  pedidos     Pedido[]
  telefonos   Telefono[]

  @@map("cliente")
}

model Telefono {
  id_telefono     Int     @id @default(autoincrement())
  n├║meroTelefono String  @db.VarChar(10)
  tipo            String  @db.VarChar(15)
  id_cliente      Int
  cliente         Cliente @relation(fields: [id_cliente], references: [id_cliente], onDelete: Cascade)

  @@index([id_cliente], map: "Telefono_id_cliente_fkey")
  @@map("Telefono")
}

model Direccion {
  id_Direcip├│n Int     @id @default(autoincrement())
  barrio        String  @db.VarChar(50)
  calle         String  @db.VarChar(50)
  numero        String  @db.VarChar(50)
  id_cliente    Int
  cliente       Cliente @relation(fields: [id_cliente], references: [id_cliente], onDelete: Cascade)

  @@index([id_cliente], map: "Direccion_id_cliente_fkey")
  @@map("Direccion")
}

model Pedido {
  id_pedido        Int              @id @default(autoincrement())
  estado_pedido    String           @db.VarChar(50)
  fecha_pedido     DateTime         @db.Date
  total_pago       Decimal          @db.Decimal(10, 2)
  id_cliente       Int
  id_administrador Int
  pagos            Pago[]
  administrador    Administrador    @relation(fields: [id_administrador], references: [id_administrador], onDelete: Cascade)
  cliente          Cliente          @relation(fields: [id_cliente], references: [id_cliente], onDelete: Cascade)
  productos        PedidoProducto[]

  @@index([id_administrador], map: "Pedido_id_administrador_fkey")
  @@index([id_cliente], map: "Pedido_id_cliente_fkey")
  @@map("Pedido")
}

model Pago {
  ID_pagos    Int     @id @default(autoincrement())
  monto_pago  Decimal @db.Decimal(10, 2)
  metodo_pago String  @db.VarChar(50)
  estado_pago String  @db.VarChar(50)
  id_pedido   Int
  id_cliente  Int
  cliente     Cliente @relation(fields: [id_cliente], references: [id_cliente], onDelete: Cascade)
  pedido      Pedido  @relation(fields: [id_pedido], references: [id_pedido], onDelete: Cascade)

  @@index([id_cliente], map: "Pagos_id_cliente_fkey")
  @@index([id_pedido], map: "Pagos_id_pedido_fkey")
  @@map("Pagos")
}

model Administrador {
  id_administrador Int       @id @default(autoincrement())
  Nombres          String    @db.VarChar(50)
  Apellidos        String    @db.VarChar(50)
  Email            String    @unique @db.VarChar(50)
  contrase├▒a      String    @db.VarChar(250)
  createdAt        DateTime  @default(now())
  updatedAt        DateTime?
  pedidos          Pedido[]

  @@map("Administrador")
}

model Inventario {
  id_inventario     Int        @id @default(autoincrement())
  cantidad          Int
  fechaIngreso      DateTime   @db.Date
  fechaSalida       DateTime   @db.Date
  fechaRealizaci├│n DateTime   @db.Date
  createdAt         DateTime   @default(now())
  updatedAt         DateTime?
  id_producto       Int?
  productos         Producto[]

  @@map("Inventario")
}

model Proveedor {
  id_proveedor Int        @id @default(autoincrement())
  nombres      String     @db.VarChar(50)
  apellidos    String     @db.VarChar(50)
  Email        String     @unique @db.VarChar(50)
  contrase├▒a  Bytes      @db.VarBinary(255)
  createdAt    DateTime   @default(now())
  updatedAt    DateTime?
  productos    Producto[]

  @@map("Proveedor")
}

model Producto {
  id_producto   Int              @id @default(autoincrement())
  nombreP       String           @db.VarChar(50)
  tipo          String           @db.VarChar(50)
  Precio        Decimal          @db.Decimal(10, 2)
  imagen        Bytes?
  id_inventario Int?
  id_proveedor  Int?
  pedidos       PedidoProducto[]
  inventario    Inventario?      @relation(fields: [id_inventario], references: [id_inventario], onDelete: Cascade)
  proveedor     Proveedor?       @relation(fields: [id_proveedor], references: [id_proveedor], onDelete: Cascade)

  @@index([id_inventario], map: "Producto_id_inventario_fkey")
  @@index([id_proveedor], map: "Producto_id_proveedor_fkey")
  @@map("Producto")
}

model PedidoProducto {
  id_pedido   Int
  id_producto Int
  cantidad    Int
  pedido      Pedido   @relation(fields: [id_pedido], references: [id_pedido], onDelete: Cascade)
  producto    Producto @relation(fields: [id_producto], references: [id_producto], onDelete: Cascade)

  @@id([id_pedido, id_producto])
  @@index([id_producto], map: "Pedido_producto_id_producto_fkey")
  @@map("Pedido_producto")
}

model PaymentPreference {
  preference_id       String    @unique @db.VarChar(255)
  items               String    @db.Text
  payer               String    @db.Text
  status              String    @db.VarChar(50)
  fecha_creacion      DateTime  @default(now())
  fecha_actualizacion DateTime?
  id_pago             String    @id @db.VarChar(36)

  @@map("payment_preferences")
}


