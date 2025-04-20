
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ClienteScalarFieldEnum = {
  id_cliente: 'id_cliente',
  Nombres: 'Nombres',
  Apellidos: 'Apellidos',
  Email: 'Email',
  contraseña: 'contraseña',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  googleId: 'googleId',
  role: 'role'
};

exports.Prisma.TelefonoScalarFieldEnum = {
  id_telefono: 'id_telefono',
  númeroTelefono: 'númeroTelefono',
  tipo: 'tipo',
  id_cliente: 'id_cliente'
};

exports.Prisma.DireccionScalarFieldEnum = {
  id_Direcipón: 'id_Direcipón',
  barrio: 'barrio',
  calle: 'calle',
  numero: 'numero',
  id_cliente: 'id_cliente'
};

exports.Prisma.PedidoScalarFieldEnum = {
  id_pedido: 'id_pedido',
  estado_pedido: 'estado_pedido',
  fecha_pedido: 'fecha_pedido',
  total_pago: 'total_pago',
  id_cliente: 'id_cliente',
  id_administrador: 'id_administrador'
};

exports.Prisma.PagoScalarFieldEnum = {
  ID_pagos: 'ID_pagos',
  monto_pago: 'monto_pago',
  metodo_pago: 'metodo_pago',
  estado_pago: 'estado_pago',
  id_pedido: 'id_pedido',
  id_cliente: 'id_cliente'
};

exports.Prisma.AdministradorScalarFieldEnum = {
  id_administrador: 'id_administrador',
  Nombres: 'Nombres',
  Apellidos: 'Apellidos',
  Email: 'Email',
  contraseña: 'contraseña',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.InventarioScalarFieldEnum = {
  id_inventario: 'id_inventario',
  cantidad: 'cantidad',
  fechaIngreso: 'fechaIngreso',
  fechaSalida: 'fechaSalida',
  fechaRealización: 'fechaRealización',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProveedorScalarFieldEnum = {
  id_proveedor: 'id_proveedor',
  nombres: 'nombres',
  apellidos: 'apellidos',
  Email: 'Email',
  contraseña: 'contraseña',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ProductoScalarFieldEnum = {
  id_producto: 'id_producto',
  nombreP: 'nombreP',
  tipo: 'tipo',
  Precio: 'Precio',
  imagen: 'imagen',
  id_inventario: 'id_inventario',
  id_proveedor: 'id_proveedor'
};

exports.Prisma.PedidoProductoScalarFieldEnum = {
  id_pedido: 'id_pedido',
  id_producto: 'id_producto',
  cantidad: 'cantidad'
};

exports.Prisma.PaymentPreferenceScalarFieldEnum = {
  preference_id: 'preference_id',
  items: 'items',
  payer: 'payer',
  status: 'status',
  fecha_creacion: 'fecha_creacion',
  fecha_actualizacion: 'fecha_actualizacion',
  id_pago: 'id_pago',
  id_cliente: 'id_cliente',
  id_pedido: 'id_pedido',
  radicado: 'radicado'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.ClienteOrderByRelevanceFieldEnum = {
  Nombres: 'Nombres',
  Apellidos: 'Apellidos',
  Email: 'Email',
  googleId: 'googleId',
  role: 'role'
};

exports.Prisma.TelefonoOrderByRelevanceFieldEnum = {
  númeroTelefono: 'númeroTelefono',
  tipo: 'tipo'
};

exports.Prisma.DireccionOrderByRelevanceFieldEnum = {
  barrio: 'barrio',
  calle: 'calle',
  numero: 'numero'
};

exports.Prisma.PedidoOrderByRelevanceFieldEnum = {
  estado_pedido: 'estado_pedido'
};

exports.Prisma.PagoOrderByRelevanceFieldEnum = {
  metodo_pago: 'metodo_pago',
  estado_pago: 'estado_pago'
};

exports.Prisma.AdministradorOrderByRelevanceFieldEnum = {
  Nombres: 'Nombres',
  Apellidos: 'Apellidos',
  Email: 'Email',
  contraseña: 'contraseña'
};

exports.Prisma.ProveedorOrderByRelevanceFieldEnum = {
  nombres: 'nombres',
  apellidos: 'apellidos',
  Email: 'Email'
};

exports.Prisma.ProductoOrderByRelevanceFieldEnum = {
  nombreP: 'nombreP',
  tipo: 'tipo'
};

exports.Prisma.PaymentPreferenceOrderByRelevanceFieldEnum = {
  preference_id: 'preference_id',
  items: 'items',
  payer: 'payer',
  status: 'status',
  id_pago: 'id_pago',
  radicado: 'radicado'
};


exports.Prisma.ModelName = {
  Cliente: 'Cliente',
  Telefono: 'Telefono',
  Direccion: 'Direccion',
  Pedido: 'Pedido',
  Pago: 'Pago',
  Administrador: 'Administrador',
  Inventario: 'Inventario',
  Proveedor: 'Proveedor',
  Producto: 'Producto',
  PedidoProducto: 'PedidoProducto',
  PaymentPreference: 'PaymentPreference'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
