
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Telefono
 * 
 */
export type Telefono = $Result.DefaultSelection<Prisma.$TelefonoPayload>
/**
 * Model Direccion
 * 
 */
export type Direccion = $Result.DefaultSelection<Prisma.$DireccionPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model Pago
 * 
 */
export type Pago = $Result.DefaultSelection<Prisma.$PagoPayload>
/**
 * Model Administrador
 * 
 */
export type Administrador = $Result.DefaultSelection<Prisma.$AdministradorPayload>
/**
 * Model Inventario
 * 
 */
export type Inventario = $Result.DefaultSelection<Prisma.$InventarioPayload>
/**
 * Model Proveedor
 * 
 */
export type Proveedor = $Result.DefaultSelection<Prisma.$ProveedorPayload>
/**
 * Model Producto
 * 
 */
export type Producto = $Result.DefaultSelection<Prisma.$ProductoPayload>
/**
 * Model PedidoProducto
 * 
 */
export type PedidoProducto = $Result.DefaultSelection<Prisma.$PedidoProductoPayload>
/**
 * Model PaymentPreference
 * 
 */
export type PaymentPreference = $Result.DefaultSelection<Prisma.$PaymentPreferencePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clientes
 * const clientes = await prisma.cliente.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Clientes
   * const clientes = await prisma.cliente.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telefono`: Exposes CRUD operations for the **Telefono** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Telefonos
    * const telefonos = await prisma.telefono.findMany()
    * ```
    */
  get telefono(): Prisma.TelefonoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.direccion`: Exposes CRUD operations for the **Direccion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Direccions
    * const direccions = await prisma.direccion.findMany()
    * ```
    */
  get direccion(): Prisma.DireccionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pago`: Exposes CRUD operations for the **Pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pago.findMany()
    * ```
    */
  get pago(): Prisma.PagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.administrador`: Exposes CRUD operations for the **Administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.AdministradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventario`: Exposes CRUD operations for the **Inventario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventarios
    * const inventarios = await prisma.inventario.findMany()
    * ```
    */
  get inventario(): Prisma.InventarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proveedor`: Exposes CRUD operations for the **Proveedor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proveedors
    * const proveedors = await prisma.proveedor.findMany()
    * ```
    */
  get proveedor(): Prisma.ProveedorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.producto`: Exposes CRUD operations for the **Producto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Productos
    * const productos = await prisma.producto.findMany()
    * ```
    */
  get producto(): Prisma.ProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidoProducto`: Exposes CRUD operations for the **PedidoProducto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PedidoProductos
    * const pedidoProductos = await prisma.pedidoProducto.findMany()
    * ```
    */
  get pedidoProducto(): Prisma.PedidoProductoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentPreference`: Exposes CRUD operations for the **PaymentPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentPreferences
    * const paymentPreferences = await prisma.paymentPreference.findMany()
    * ```
    */
  get paymentPreference(): Prisma.PaymentPreferenceDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cliente" | "telefono" | "direccion" | "pedido" | "pago" | "administrador" | "inventario" | "proveedor" | "producto" | "pedidoProducto" | "paymentPreference"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Telefono: {
        payload: Prisma.$TelefonoPayload<ExtArgs>
        fields: Prisma.TelefonoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelefonoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelefonoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonoPayload>
          }
          findFirst: {
            args: Prisma.TelefonoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelefonoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonoPayload>
          }
          findMany: {
            args: Prisma.TelefonoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonoPayload>[]
          }
          create: {
            args: Prisma.TelefonoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonoPayload>
          }
          createMany: {
            args: Prisma.TelefonoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TelefonoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonoPayload>
          }
          update: {
            args: Prisma.TelefonoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonoPayload>
          }
          deleteMany: {
            args: Prisma.TelefonoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelefonoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TelefonoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonoPayload>
          }
          aggregate: {
            args: Prisma.TelefonoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelefono>
          }
          groupBy: {
            args: Prisma.TelefonoGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelefonoGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelefonoCountArgs<ExtArgs>
            result: $Utils.Optional<TelefonoCountAggregateOutputType> | number
          }
        }
      }
      Direccion: {
        payload: Prisma.$DireccionPayload<ExtArgs>
        fields: Prisma.DireccionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DireccionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DireccionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          findFirst: {
            args: Prisma.DireccionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DireccionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          findMany: {
            args: Prisma.DireccionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>[]
          }
          create: {
            args: Prisma.DireccionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          createMany: {
            args: Prisma.DireccionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DireccionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          update: {
            args: Prisma.DireccionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          deleteMany: {
            args: Prisma.DireccionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DireccionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DireccionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DireccionPayload>
          }
          aggregate: {
            args: Prisma.DireccionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDireccion>
          }
          groupBy: {
            args: Prisma.DireccionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DireccionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DireccionCountArgs<ExtArgs>
            result: $Utils.Optional<DireccionCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      Pago: {
        payload: Prisma.$PagoPayload<ExtArgs>
        fields: Prisma.PagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findFirst: {
            args: Prisma.PagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findMany: {
            args: Prisma.PagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          create: {
            args: Prisma.PagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          createMany: {
            args: Prisma.PagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          update: {
            args: Prisma.PagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          deleteMany: {
            args: Prisma.PagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          aggregate: {
            args: Prisma.PagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePago>
          }
          groupBy: {
            args: Prisma.PagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoCountArgs<ExtArgs>
            result: $Utils.Optional<PagoCountAggregateOutputType> | number
          }
        }
      }
      Administrador: {
        payload: Prisma.$AdministradorPayload<ExtArgs>
        fields: Prisma.AdministradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findFirst: {
            args: Prisma.AdministradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findMany: {
            args: Prisma.AdministradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          create: {
            args: Prisma.AdministradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          createMany: {
            args: Prisma.AdministradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdministradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          update: {
            args: Prisma.AdministradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          deleteMany: {
            args: Prisma.AdministradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdministradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.AdministradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      Inventario: {
        payload: Prisma.$InventarioPayload<ExtArgs>
        fields: Prisma.InventarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          findFirst: {
            args: Prisma.InventarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          findMany: {
            args: Prisma.InventarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>[]
          }
          create: {
            args: Prisma.InventarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          createMany: {
            args: Prisma.InventarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.InventarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          update: {
            args: Prisma.InventarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          deleteMany: {
            args: Prisma.InventarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.InventarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventarioPayload>
          }
          aggregate: {
            args: Prisma.InventarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventario>
          }
          groupBy: {
            args: Prisma.InventarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventarioCountArgs<ExtArgs>
            result: $Utils.Optional<InventarioCountAggregateOutputType> | number
          }
        }
      }
      Proveedor: {
        payload: Prisma.$ProveedorPayload<ExtArgs>
        fields: Prisma.ProveedorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProveedorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProveedorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          findFirst: {
            args: Prisma.ProveedorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProveedorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          findMany: {
            args: Prisma.ProveedorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>[]
          }
          create: {
            args: Prisma.ProveedorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          createMany: {
            args: Prisma.ProveedorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProveedorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          update: {
            args: Prisma.ProveedorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          deleteMany: {
            args: Prisma.ProveedorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProveedorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProveedorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProveedorPayload>
          }
          aggregate: {
            args: Prisma.ProveedorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProveedor>
          }
          groupBy: {
            args: Prisma.ProveedorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProveedorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProveedorCountArgs<ExtArgs>
            result: $Utils.Optional<ProveedorCountAggregateOutputType> | number
          }
        }
      }
      Producto: {
        payload: Prisma.$ProductoPayload<ExtArgs>
        fields: Prisma.ProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findFirst: {
            args: Prisma.ProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          findMany: {
            args: Prisma.ProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>[]
          }
          create: {
            args: Prisma.ProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          createMany: {
            args: Prisma.ProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          update: {
            args: Prisma.ProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          deleteMany: {
            args: Prisma.ProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductoPayload>
          }
          aggregate: {
            args: Prisma.ProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducto>
          }
          groupBy: {
            args: Prisma.ProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductoCountArgs<ExtArgs>
            result: $Utils.Optional<ProductoCountAggregateOutputType> | number
          }
        }
      }
      PedidoProducto: {
        payload: Prisma.$PedidoProductoPayload<ExtArgs>
        fields: Prisma.PedidoProductoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoProductoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoProductoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>
          }
          findFirst: {
            args: Prisma.PedidoProductoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoProductoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>
          }
          findMany: {
            args: Prisma.PedidoProductoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>[]
          }
          create: {
            args: Prisma.PedidoProductoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>
          }
          createMany: {
            args: Prisma.PedidoProductoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PedidoProductoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>
          }
          update: {
            args: Prisma.PedidoProductoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoProductoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoProductoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PedidoProductoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoProductoPayload>
          }
          aggregate: {
            args: Prisma.PedidoProductoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidoProducto>
          }
          groupBy: {
            args: Prisma.PedidoProductoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoProductoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoProductoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoProductoCountAggregateOutputType> | number
          }
        }
      }
      PaymentPreference: {
        payload: Prisma.$PaymentPreferencePayload<ExtArgs>
        fields: Prisma.PaymentPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPreferencePayload>
          }
          findFirst: {
            args: Prisma.PaymentPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPreferencePayload>
          }
          findMany: {
            args: Prisma.PaymentPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPreferencePayload>[]
          }
          create: {
            args: Prisma.PaymentPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPreferencePayload>
          }
          createMany: {
            args: Prisma.PaymentPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPreferencePayload>
          }
          update: {
            args: Prisma.PaymentPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPreferencePayload>
          }
          deleteMany: {
            args: Prisma.PaymentPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPreferencePayload>
          }
          aggregate: {
            args: Prisma.PaymentPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentPreference>
          }
          groupBy: {
            args: Prisma.PaymentPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentPreferenceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cliente?: ClienteOmit
    telefono?: TelefonoOmit
    direccion?: DireccionOmit
    pedido?: PedidoOmit
    pago?: PagoOmit
    administrador?: AdministradorOmit
    inventario?: InventarioOmit
    proveedor?: ProveedorOmit
    producto?: ProductoOmit
    pedidoProducto?: PedidoProductoOmit
    paymentPreference?: PaymentPreferenceOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    direcciones: number
    pagos: number
    pedidos: number
    telefonos: number
    paymentPreferences: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direcciones?: boolean | ClienteCountOutputTypeCountDireccionesArgs
    pagos?: boolean | ClienteCountOutputTypeCountPagosArgs
    pedidos?: boolean | ClienteCountOutputTypeCountPedidosArgs
    telefonos?: boolean | ClienteCountOutputTypeCountTelefonosArgs
    paymentPreferences?: boolean | ClienteCountOutputTypeCountPaymentPreferencesArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountDireccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountTelefonosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelefonoWhereInput
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountPaymentPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPreferenceWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    pagos: number
    productos: number
    paymentPreferences: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagos?: boolean | PedidoCountOutputTypeCountPagosArgs
    productos?: boolean | PedidoCountOutputTypeCountProductosArgs
    paymentPreferences?: boolean | PedidoCountOutputTypeCountPaymentPreferencesArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoProductoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountPaymentPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPreferenceWhereInput
  }


  /**
   * Count Type AdministradorCountOutputType
   */

  export type AdministradorCountOutputType = {
    pedidos: number
  }

  export type AdministradorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | AdministradorCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministradorCountOutputType
     */
    select?: AdministradorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
  }


  /**
   * Count Type InventarioCountOutputType
   */

  export type InventarioCountOutputType = {
    productos: number
  }

  export type InventarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | InventarioCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * InventarioCountOutputType without action
   */
  export type InventarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventarioCountOutputType
     */
    select?: InventarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventarioCountOutputType without action
   */
  export type InventarioCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }


  /**
   * Count Type ProveedorCountOutputType
   */

  export type ProveedorCountOutputType = {
    productos: number
  }

  export type ProveedorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | ProveedorCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProveedorCountOutputType
     */
    select?: ProveedorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProveedorCountOutputType without action
   */
  export type ProveedorCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
  }


  /**
   * Count Type ProductoCountOutputType
   */

  export type ProductoCountOutputType = {
    pedidos: number
  }

  export type ProductoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | ProductoCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductoCountOutputType
     */
    select?: ProductoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductoCountOutputType without action
   */
  export type ProductoCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoProductoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id_cliente: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id_cliente: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id_cliente: number | null
    Nombres: string | null
    Apellidos: string | null
    Email: string | null
    contraseña: Uint8Array | null
    createdAt: Date | null
    updatedAt: Date | null
    googleId: string | null
    role: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id_cliente: number | null
    Nombres: string | null
    Apellidos: string | null
    Email: string | null
    contraseña: Uint8Array | null
    createdAt: Date | null
    updatedAt: Date | null
    googleId: string | null
    role: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id_cliente: number
    Nombres: number
    Apellidos: number
    Email: number
    contraseña: number
    createdAt: number
    updatedAt: number
    googleId: number
    role: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id_cliente?: true
  }

  export type ClienteSumAggregateInputType = {
    id_cliente?: true
  }

  export type ClienteMinAggregateInputType = {
    id_cliente?: true
    Nombres?: true
    Apellidos?: true
    Email?: true
    contraseña?: true
    createdAt?: true
    updatedAt?: true
    googleId?: true
    role?: true
  }

  export type ClienteMaxAggregateInputType = {
    id_cliente?: true
    Nombres?: true
    Apellidos?: true
    Email?: true
    contraseña?: true
    createdAt?: true
    updatedAt?: true
    googleId?: true
    role?: true
  }

  export type ClienteCountAggregateInputType = {
    id_cliente?: true
    Nombres?: true
    Apellidos?: true
    Email?: true
    contraseña?: true
    createdAt?: true
    updatedAt?: true
    googleId?: true
    role?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id_cliente: number
    Nombres: string
    Apellidos: string
    Email: string
    contraseña: Uint8Array | null
    createdAt: Date
    updatedAt: Date | null
    googleId: string | null
    role: string
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_cliente?: boolean
    Nombres?: boolean
    Apellidos?: boolean
    Email?: boolean
    contraseña?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    googleId?: boolean
    role?: boolean
    direcciones?: boolean | Cliente$direccionesArgs<ExtArgs>
    pagos?: boolean | Cliente$pagosArgs<ExtArgs>
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    telefonos?: boolean | Cliente$telefonosArgs<ExtArgs>
    paymentPreferences?: boolean | Cliente$paymentPreferencesArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>



  export type ClienteSelectScalar = {
    id_cliente?: boolean
    Nombres?: boolean
    Apellidos?: boolean
    Email?: boolean
    contraseña?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    googleId?: boolean
    role?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_cliente" | "Nombres" | "Apellidos" | "Email" | "contraseña" | "createdAt" | "updatedAt" | "googleId" | "role", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    direcciones?: boolean | Cliente$direccionesArgs<ExtArgs>
    pagos?: boolean | Cliente$pagosArgs<ExtArgs>
    pedidos?: boolean | Cliente$pedidosArgs<ExtArgs>
    telefonos?: boolean | Cliente$telefonosArgs<ExtArgs>
    paymentPreferences?: boolean | Cliente$paymentPreferencesArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      direcciones: Prisma.$DireccionPayload<ExtArgs>[]
      pagos: Prisma.$PagoPayload<ExtArgs>[]
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
      telefonos: Prisma.$TelefonoPayload<ExtArgs>[]
      paymentPreferences: Prisma.$PaymentPreferencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_cliente: number
      Nombres: string
      Apellidos: string
      Email: string
      contraseña: Uint8Array | null
      createdAt: Date
      updatedAt: Date | null
      googleId: string | null
      role: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id_cliente`
     * const clienteWithId_clienteOnly = await prisma.cliente.findMany({ select: { id_cliente: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    direcciones<T extends Cliente$direccionesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$direccionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pagos<T extends Cliente$pagosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pedidos<T extends Cliente$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    telefonos<T extends Cliente$telefonosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$telefonosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelefonoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentPreferences<T extends Cliente$paymentPreferencesArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$paymentPreferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id_cliente: FieldRef<"Cliente", 'Int'>
    readonly Nombres: FieldRef<"Cliente", 'String'>
    readonly Apellidos: FieldRef<"Cliente", 'String'>
    readonly Email: FieldRef<"Cliente", 'String'>
    readonly contraseña: FieldRef<"Cliente", 'Bytes'>
    readonly createdAt: FieldRef<"Cliente", 'DateTime'>
    readonly updatedAt: FieldRef<"Cliente", 'DateTime'>
    readonly googleId: FieldRef<"Cliente", 'String'>
    readonly role: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.direcciones
   */
  export type Cliente$direccionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    cursor?: DireccionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Cliente.pagos
   */
  export type Cliente$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    cursor?: PagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Cliente.pedidos
   */
  export type Cliente$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Cliente.telefonos
   */
  export type Cliente$telefonosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefono
     */
    select?: TelefonoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefono
     */
    omit?: TelefonoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefonoInclude<ExtArgs> | null
    where?: TelefonoWhereInput
    orderBy?: TelefonoOrderByWithRelationInput | TelefonoOrderByWithRelationInput[]
    cursor?: TelefonoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TelefonoScalarFieldEnum | TelefonoScalarFieldEnum[]
  }

  /**
   * Cliente.paymentPreferences
   */
  export type Cliente$paymentPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPreference
     */
    select?: PaymentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPreference
     */
    omit?: PaymentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPreferenceInclude<ExtArgs> | null
    where?: PaymentPreferenceWhereInput
    orderBy?: PaymentPreferenceOrderByWithRelationInput | PaymentPreferenceOrderByWithRelationInput[]
    cursor?: PaymentPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentPreferenceScalarFieldEnum | PaymentPreferenceScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Telefono
   */

  export type AggregateTelefono = {
    _count: TelefonoCountAggregateOutputType | null
    _avg: TelefonoAvgAggregateOutputType | null
    _sum: TelefonoSumAggregateOutputType | null
    _min: TelefonoMinAggregateOutputType | null
    _max: TelefonoMaxAggregateOutputType | null
  }

  export type TelefonoAvgAggregateOutputType = {
    id_telefono: number | null
    id_cliente: number | null
  }

  export type TelefonoSumAggregateOutputType = {
    id_telefono: number | null
    id_cliente: number | null
  }

  export type TelefonoMinAggregateOutputType = {
    id_telefono: number | null
    númeroTelefono: string | null
    tipo: string | null
    id_cliente: number | null
  }

  export type TelefonoMaxAggregateOutputType = {
    id_telefono: number | null
    númeroTelefono: string | null
    tipo: string | null
    id_cliente: number | null
  }

  export type TelefonoCountAggregateOutputType = {
    id_telefono: number
    númeroTelefono: number
    tipo: number
    id_cliente: number
    _all: number
  }


  export type TelefonoAvgAggregateInputType = {
    id_telefono?: true
    id_cliente?: true
  }

  export type TelefonoSumAggregateInputType = {
    id_telefono?: true
    id_cliente?: true
  }

  export type TelefonoMinAggregateInputType = {
    id_telefono?: true
    númeroTelefono?: true
    tipo?: true
    id_cliente?: true
  }

  export type TelefonoMaxAggregateInputType = {
    id_telefono?: true
    númeroTelefono?: true
    tipo?: true
    id_cliente?: true
  }

  export type TelefonoCountAggregateInputType = {
    id_telefono?: true
    númeroTelefono?: true
    tipo?: true
    id_cliente?: true
    _all?: true
  }

  export type TelefonoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telefono to aggregate.
     */
    where?: TelefonoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefonos to fetch.
     */
    orderBy?: TelefonoOrderByWithRelationInput | TelefonoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelefonoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefonos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefonos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Telefonos
    **/
    _count?: true | TelefonoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelefonoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelefonoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelefonoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelefonoMaxAggregateInputType
  }

  export type GetTelefonoAggregateType<T extends TelefonoAggregateArgs> = {
        [P in keyof T & keyof AggregateTelefono]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelefono[P]>
      : GetScalarType<T[P], AggregateTelefono[P]>
  }




  export type TelefonoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelefonoWhereInput
    orderBy?: TelefonoOrderByWithAggregationInput | TelefonoOrderByWithAggregationInput[]
    by: TelefonoScalarFieldEnum[] | TelefonoScalarFieldEnum
    having?: TelefonoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelefonoCountAggregateInputType | true
    _avg?: TelefonoAvgAggregateInputType
    _sum?: TelefonoSumAggregateInputType
    _min?: TelefonoMinAggregateInputType
    _max?: TelefonoMaxAggregateInputType
  }

  export type TelefonoGroupByOutputType = {
    id_telefono: number
    númeroTelefono: string
    tipo: string
    id_cliente: number
    _count: TelefonoCountAggregateOutputType | null
    _avg: TelefonoAvgAggregateOutputType | null
    _sum: TelefonoSumAggregateOutputType | null
    _min: TelefonoMinAggregateOutputType | null
    _max: TelefonoMaxAggregateOutputType | null
  }

  type GetTelefonoGroupByPayload<T extends TelefonoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelefonoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelefonoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelefonoGroupByOutputType[P]>
            : GetScalarType<T[P], TelefonoGroupByOutputType[P]>
        }
      >
    >


  export type TelefonoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_telefono?: boolean
    númeroTelefono?: boolean
    tipo?: boolean
    id_cliente?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telefono"]>



  export type TelefonoSelectScalar = {
    id_telefono?: boolean
    númeroTelefono?: boolean
    tipo?: boolean
    id_cliente?: boolean
  }

  export type TelefonoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_telefono" | "númeroTelefono" | "tipo" | "id_cliente", ExtArgs["result"]["telefono"]>
  export type TelefonoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $TelefonoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Telefono"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_telefono: number
      númeroTelefono: string
      tipo: string
      id_cliente: number
    }, ExtArgs["result"]["telefono"]>
    composites: {}
  }

  type TelefonoGetPayload<S extends boolean | null | undefined | TelefonoDefaultArgs> = $Result.GetResult<Prisma.$TelefonoPayload, S>

  type TelefonoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelefonoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelefonoCountAggregateInputType | true
    }

  export interface TelefonoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Telefono'], meta: { name: 'Telefono' } }
    /**
     * Find zero or one Telefono that matches the filter.
     * @param {TelefonoFindUniqueArgs} args - Arguments to find a Telefono
     * @example
     * // Get one Telefono
     * const telefono = await prisma.telefono.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelefonoFindUniqueArgs>(args: SelectSubset<T, TelefonoFindUniqueArgs<ExtArgs>>): Prisma__TelefonoClient<$Result.GetResult<Prisma.$TelefonoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Telefono that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelefonoFindUniqueOrThrowArgs} args - Arguments to find a Telefono
     * @example
     * // Get one Telefono
     * const telefono = await prisma.telefono.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelefonoFindUniqueOrThrowArgs>(args: SelectSubset<T, TelefonoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelefonoClient<$Result.GetResult<Prisma.$TelefonoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telefono that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefonoFindFirstArgs} args - Arguments to find a Telefono
     * @example
     * // Get one Telefono
     * const telefono = await prisma.telefono.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelefonoFindFirstArgs>(args?: SelectSubset<T, TelefonoFindFirstArgs<ExtArgs>>): Prisma__TelefonoClient<$Result.GetResult<Prisma.$TelefonoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telefono that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefonoFindFirstOrThrowArgs} args - Arguments to find a Telefono
     * @example
     * // Get one Telefono
     * const telefono = await prisma.telefono.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelefonoFindFirstOrThrowArgs>(args?: SelectSubset<T, TelefonoFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelefonoClient<$Result.GetResult<Prisma.$TelefonoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Telefonos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefonoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Telefonos
     * const telefonos = await prisma.telefono.findMany()
     * 
     * // Get first 10 Telefonos
     * const telefonos = await prisma.telefono.findMany({ take: 10 })
     * 
     * // Only select the `id_telefono`
     * const telefonoWithId_telefonoOnly = await prisma.telefono.findMany({ select: { id_telefono: true } })
     * 
     */
    findMany<T extends TelefonoFindManyArgs>(args?: SelectSubset<T, TelefonoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelefonoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Telefono.
     * @param {TelefonoCreateArgs} args - Arguments to create a Telefono.
     * @example
     * // Create one Telefono
     * const Telefono = await prisma.telefono.create({
     *   data: {
     *     // ... data to create a Telefono
     *   }
     * })
     * 
     */
    create<T extends TelefonoCreateArgs>(args: SelectSubset<T, TelefonoCreateArgs<ExtArgs>>): Prisma__TelefonoClient<$Result.GetResult<Prisma.$TelefonoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Telefonos.
     * @param {TelefonoCreateManyArgs} args - Arguments to create many Telefonos.
     * @example
     * // Create many Telefonos
     * const telefono = await prisma.telefono.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelefonoCreateManyArgs>(args?: SelectSubset<T, TelefonoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Telefono.
     * @param {TelefonoDeleteArgs} args - Arguments to delete one Telefono.
     * @example
     * // Delete one Telefono
     * const Telefono = await prisma.telefono.delete({
     *   where: {
     *     // ... filter to delete one Telefono
     *   }
     * })
     * 
     */
    delete<T extends TelefonoDeleteArgs>(args: SelectSubset<T, TelefonoDeleteArgs<ExtArgs>>): Prisma__TelefonoClient<$Result.GetResult<Prisma.$TelefonoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Telefono.
     * @param {TelefonoUpdateArgs} args - Arguments to update one Telefono.
     * @example
     * // Update one Telefono
     * const telefono = await prisma.telefono.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelefonoUpdateArgs>(args: SelectSubset<T, TelefonoUpdateArgs<ExtArgs>>): Prisma__TelefonoClient<$Result.GetResult<Prisma.$TelefonoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Telefonos.
     * @param {TelefonoDeleteManyArgs} args - Arguments to filter Telefonos to delete.
     * @example
     * // Delete a few Telefonos
     * const { count } = await prisma.telefono.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelefonoDeleteManyArgs>(args?: SelectSubset<T, TelefonoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Telefonos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefonoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Telefonos
     * const telefono = await prisma.telefono.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelefonoUpdateManyArgs>(args: SelectSubset<T, TelefonoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Telefono.
     * @param {TelefonoUpsertArgs} args - Arguments to update or create a Telefono.
     * @example
     * // Update or create a Telefono
     * const telefono = await prisma.telefono.upsert({
     *   create: {
     *     // ... data to create a Telefono
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Telefono we want to update
     *   }
     * })
     */
    upsert<T extends TelefonoUpsertArgs>(args: SelectSubset<T, TelefonoUpsertArgs<ExtArgs>>): Prisma__TelefonoClient<$Result.GetResult<Prisma.$TelefonoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Telefonos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefonoCountArgs} args - Arguments to filter Telefonos to count.
     * @example
     * // Count the number of Telefonos
     * const count = await prisma.telefono.count({
     *   where: {
     *     // ... the filter for the Telefonos we want to count
     *   }
     * })
    **/
    count<T extends TelefonoCountArgs>(
      args?: Subset<T, TelefonoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelefonoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Telefono.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefonoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TelefonoAggregateArgs>(args: Subset<T, TelefonoAggregateArgs>): Prisma.PrismaPromise<GetTelefonoAggregateType<T>>

    /**
     * Group by Telefono.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefonoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TelefonoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelefonoGroupByArgs['orderBy'] }
        : { orderBy?: TelefonoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TelefonoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelefonoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Telefono model
   */
  readonly fields: TelefonoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Telefono.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelefonoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Telefono model
   */
  interface TelefonoFieldRefs {
    readonly id_telefono: FieldRef<"Telefono", 'Int'>
    readonly númeroTelefono: FieldRef<"Telefono", 'String'>
    readonly tipo: FieldRef<"Telefono", 'String'>
    readonly id_cliente: FieldRef<"Telefono", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Telefono findUnique
   */
  export type TelefonoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefono
     */
    select?: TelefonoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefono
     */
    omit?: TelefonoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefonoInclude<ExtArgs> | null
    /**
     * Filter, which Telefono to fetch.
     */
    where: TelefonoWhereUniqueInput
  }

  /**
   * Telefono findUniqueOrThrow
   */
  export type TelefonoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefono
     */
    select?: TelefonoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefono
     */
    omit?: TelefonoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefonoInclude<ExtArgs> | null
    /**
     * Filter, which Telefono to fetch.
     */
    where: TelefonoWhereUniqueInput
  }

  /**
   * Telefono findFirst
   */
  export type TelefonoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefono
     */
    select?: TelefonoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefono
     */
    omit?: TelefonoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefonoInclude<ExtArgs> | null
    /**
     * Filter, which Telefono to fetch.
     */
    where?: TelefonoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefonos to fetch.
     */
    orderBy?: TelefonoOrderByWithRelationInput | TelefonoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telefonos.
     */
    cursor?: TelefonoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefonos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefonos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telefonos.
     */
    distinct?: TelefonoScalarFieldEnum | TelefonoScalarFieldEnum[]
  }

  /**
   * Telefono findFirstOrThrow
   */
  export type TelefonoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefono
     */
    select?: TelefonoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefono
     */
    omit?: TelefonoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefonoInclude<ExtArgs> | null
    /**
     * Filter, which Telefono to fetch.
     */
    where?: TelefonoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefonos to fetch.
     */
    orderBy?: TelefonoOrderByWithRelationInput | TelefonoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telefonos.
     */
    cursor?: TelefonoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefonos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefonos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telefonos.
     */
    distinct?: TelefonoScalarFieldEnum | TelefonoScalarFieldEnum[]
  }

  /**
   * Telefono findMany
   */
  export type TelefonoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefono
     */
    select?: TelefonoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefono
     */
    omit?: TelefonoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefonoInclude<ExtArgs> | null
    /**
     * Filter, which Telefonos to fetch.
     */
    where?: TelefonoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefonos to fetch.
     */
    orderBy?: TelefonoOrderByWithRelationInput | TelefonoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Telefonos.
     */
    cursor?: TelefonoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefonos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefonos.
     */
    skip?: number
    distinct?: TelefonoScalarFieldEnum | TelefonoScalarFieldEnum[]
  }

  /**
   * Telefono create
   */
  export type TelefonoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefono
     */
    select?: TelefonoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefono
     */
    omit?: TelefonoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefonoInclude<ExtArgs> | null
    /**
     * The data needed to create a Telefono.
     */
    data: XOR<TelefonoCreateInput, TelefonoUncheckedCreateInput>
  }

  /**
   * Telefono createMany
   */
  export type TelefonoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Telefonos.
     */
    data: TelefonoCreateManyInput | TelefonoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Telefono update
   */
  export type TelefonoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefono
     */
    select?: TelefonoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefono
     */
    omit?: TelefonoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefonoInclude<ExtArgs> | null
    /**
     * The data needed to update a Telefono.
     */
    data: XOR<TelefonoUpdateInput, TelefonoUncheckedUpdateInput>
    /**
     * Choose, which Telefono to update.
     */
    where: TelefonoWhereUniqueInput
  }

  /**
   * Telefono updateMany
   */
  export type TelefonoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Telefonos.
     */
    data: XOR<TelefonoUpdateManyMutationInput, TelefonoUncheckedUpdateManyInput>
    /**
     * Filter which Telefonos to update
     */
    where?: TelefonoWhereInput
    /**
     * Limit how many Telefonos to update.
     */
    limit?: number
  }

  /**
   * Telefono upsert
   */
  export type TelefonoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefono
     */
    select?: TelefonoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefono
     */
    omit?: TelefonoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefonoInclude<ExtArgs> | null
    /**
     * The filter to search for the Telefono to update in case it exists.
     */
    where: TelefonoWhereUniqueInput
    /**
     * In case the Telefono found by the `where` argument doesn't exist, create a new Telefono with this data.
     */
    create: XOR<TelefonoCreateInput, TelefonoUncheckedCreateInput>
    /**
     * In case the Telefono was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelefonoUpdateInput, TelefonoUncheckedUpdateInput>
  }

  /**
   * Telefono delete
   */
  export type TelefonoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefono
     */
    select?: TelefonoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefono
     */
    omit?: TelefonoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefonoInclude<ExtArgs> | null
    /**
     * Filter which Telefono to delete.
     */
    where: TelefonoWhereUniqueInput
  }

  /**
   * Telefono deleteMany
   */
  export type TelefonoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telefonos to delete
     */
    where?: TelefonoWhereInput
    /**
     * Limit how many Telefonos to delete.
     */
    limit?: number
  }

  /**
   * Telefono without action
   */
  export type TelefonoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefono
     */
    select?: TelefonoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefono
     */
    omit?: TelefonoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefonoInclude<ExtArgs> | null
  }


  /**
   * Model Direccion
   */

  export type AggregateDireccion = {
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  export type DireccionAvgAggregateOutputType = {
    id_Direcipón: number | null
    id_cliente: number | null
  }

  export type DireccionSumAggregateOutputType = {
    id_Direcipón: number | null
    id_cliente: number | null
  }

  export type DireccionMinAggregateOutputType = {
    id_Direcipón: number | null
    barrio: string | null
    calle: string | null
    numero: string | null
    id_cliente: number | null
  }

  export type DireccionMaxAggregateOutputType = {
    id_Direcipón: number | null
    barrio: string | null
    calle: string | null
    numero: string | null
    id_cliente: number | null
  }

  export type DireccionCountAggregateOutputType = {
    id_Direcipón: number
    barrio: number
    calle: number
    numero: number
    id_cliente: number
    _all: number
  }


  export type DireccionAvgAggregateInputType = {
    id_Direcipón?: true
    id_cliente?: true
  }

  export type DireccionSumAggregateInputType = {
    id_Direcipón?: true
    id_cliente?: true
  }

  export type DireccionMinAggregateInputType = {
    id_Direcipón?: true
    barrio?: true
    calle?: true
    numero?: true
    id_cliente?: true
  }

  export type DireccionMaxAggregateInputType = {
    id_Direcipón?: true
    barrio?: true
    calle?: true
    numero?: true
    id_cliente?: true
  }

  export type DireccionCountAggregateInputType = {
    id_Direcipón?: true
    barrio?: true
    calle?: true
    numero?: true
    id_cliente?: true
    _all?: true
  }

  export type DireccionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direccion to aggregate.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Direccions
    **/
    _count?: true | DireccionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DireccionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DireccionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DireccionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DireccionMaxAggregateInputType
  }

  export type GetDireccionAggregateType<T extends DireccionAggregateArgs> = {
        [P in keyof T & keyof AggregateDireccion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDireccion[P]>
      : GetScalarType<T[P], AggregateDireccion[P]>
  }




  export type DireccionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DireccionWhereInput
    orderBy?: DireccionOrderByWithAggregationInput | DireccionOrderByWithAggregationInput[]
    by: DireccionScalarFieldEnum[] | DireccionScalarFieldEnum
    having?: DireccionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DireccionCountAggregateInputType | true
    _avg?: DireccionAvgAggregateInputType
    _sum?: DireccionSumAggregateInputType
    _min?: DireccionMinAggregateInputType
    _max?: DireccionMaxAggregateInputType
  }

  export type DireccionGroupByOutputType = {
    id_Direcipón: number
    barrio: string
    calle: string
    numero: string
    id_cliente: number
    _count: DireccionCountAggregateOutputType | null
    _avg: DireccionAvgAggregateOutputType | null
    _sum: DireccionSumAggregateOutputType | null
    _min: DireccionMinAggregateOutputType | null
    _max: DireccionMaxAggregateOutputType | null
  }

  type GetDireccionGroupByPayload<T extends DireccionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DireccionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DireccionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DireccionGroupByOutputType[P]>
            : GetScalarType<T[P], DireccionGroupByOutputType[P]>
        }
      >
    >


  export type DireccionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_Direcipón?: boolean
    barrio?: boolean
    calle?: boolean
    numero?: boolean
    id_cliente?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["direccion"]>



  export type DireccionSelectScalar = {
    id_Direcipón?: boolean
    barrio?: boolean
    calle?: boolean
    numero?: boolean
    id_cliente?: boolean
  }

  export type DireccionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_Direcipón" | "barrio" | "calle" | "numero" | "id_cliente", ExtArgs["result"]["direccion"]>
  export type DireccionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $DireccionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Direccion"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_Direcipón: number
      barrio: string
      calle: string
      numero: string
      id_cliente: number
    }, ExtArgs["result"]["direccion"]>
    composites: {}
  }

  type DireccionGetPayload<S extends boolean | null | undefined | DireccionDefaultArgs> = $Result.GetResult<Prisma.$DireccionPayload, S>

  type DireccionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DireccionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DireccionCountAggregateInputType | true
    }

  export interface DireccionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Direccion'], meta: { name: 'Direccion' } }
    /**
     * Find zero or one Direccion that matches the filter.
     * @param {DireccionFindUniqueArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DireccionFindUniqueArgs>(args: SelectSubset<T, DireccionFindUniqueArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Direccion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DireccionFindUniqueOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DireccionFindUniqueOrThrowArgs>(args: SelectSubset<T, DireccionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direccion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindFirstArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DireccionFindFirstArgs>(args?: SelectSubset<T, DireccionFindFirstArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Direccion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindFirstOrThrowArgs} args - Arguments to find a Direccion
     * @example
     * // Get one Direccion
     * const direccion = await prisma.direccion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DireccionFindFirstOrThrowArgs>(args?: SelectSubset<T, DireccionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Direccions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Direccions
     * const direccions = await prisma.direccion.findMany()
     * 
     * // Get first 10 Direccions
     * const direccions = await prisma.direccion.findMany({ take: 10 })
     * 
     * // Only select the `id_Direcipón`
     * const direccionWithId_DirecipónOnly = await prisma.direccion.findMany({ select: { id_Direcipón: true } })
     * 
     */
    findMany<T extends DireccionFindManyArgs>(args?: SelectSubset<T, DireccionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Direccion.
     * @param {DireccionCreateArgs} args - Arguments to create a Direccion.
     * @example
     * // Create one Direccion
     * const Direccion = await prisma.direccion.create({
     *   data: {
     *     // ... data to create a Direccion
     *   }
     * })
     * 
     */
    create<T extends DireccionCreateArgs>(args: SelectSubset<T, DireccionCreateArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Direccions.
     * @param {DireccionCreateManyArgs} args - Arguments to create many Direccions.
     * @example
     * // Create many Direccions
     * const direccion = await prisma.direccion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DireccionCreateManyArgs>(args?: SelectSubset<T, DireccionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Direccion.
     * @param {DireccionDeleteArgs} args - Arguments to delete one Direccion.
     * @example
     * // Delete one Direccion
     * const Direccion = await prisma.direccion.delete({
     *   where: {
     *     // ... filter to delete one Direccion
     *   }
     * })
     * 
     */
    delete<T extends DireccionDeleteArgs>(args: SelectSubset<T, DireccionDeleteArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Direccion.
     * @param {DireccionUpdateArgs} args - Arguments to update one Direccion.
     * @example
     * // Update one Direccion
     * const direccion = await prisma.direccion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DireccionUpdateArgs>(args: SelectSubset<T, DireccionUpdateArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Direccions.
     * @param {DireccionDeleteManyArgs} args - Arguments to filter Direccions to delete.
     * @example
     * // Delete a few Direccions
     * const { count } = await prisma.direccion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DireccionDeleteManyArgs>(args?: SelectSubset<T, DireccionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Direccions
     * const direccion = await prisma.direccion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DireccionUpdateManyArgs>(args: SelectSubset<T, DireccionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Direccion.
     * @param {DireccionUpsertArgs} args - Arguments to update or create a Direccion.
     * @example
     * // Update or create a Direccion
     * const direccion = await prisma.direccion.upsert({
     *   create: {
     *     // ... data to create a Direccion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Direccion we want to update
     *   }
     * })
     */
    upsert<T extends DireccionUpsertArgs>(args: SelectSubset<T, DireccionUpsertArgs<ExtArgs>>): Prisma__DireccionClient<$Result.GetResult<Prisma.$DireccionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Direccions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionCountArgs} args - Arguments to filter Direccions to count.
     * @example
     * // Count the number of Direccions
     * const count = await prisma.direccion.count({
     *   where: {
     *     // ... the filter for the Direccions we want to count
     *   }
     * })
    **/
    count<T extends DireccionCountArgs>(
      args?: Subset<T, DireccionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DireccionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DireccionAggregateArgs>(args: Subset<T, DireccionAggregateArgs>): Prisma.PrismaPromise<GetDireccionAggregateType<T>>

    /**
     * Group by Direccion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DireccionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DireccionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DireccionGroupByArgs['orderBy'] }
        : { orderBy?: DireccionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DireccionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDireccionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Direccion model
   */
  readonly fields: DireccionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Direccion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DireccionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Direccion model
   */
  interface DireccionFieldRefs {
    readonly id_Direcipón: FieldRef<"Direccion", 'Int'>
    readonly barrio: FieldRef<"Direccion", 'String'>
    readonly calle: FieldRef<"Direccion", 'String'>
    readonly numero: FieldRef<"Direccion", 'String'>
    readonly id_cliente: FieldRef<"Direccion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Direccion findUnique
   */
  export type DireccionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion findUniqueOrThrow
   */
  export type DireccionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion findFirst
   */
  export type DireccionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion findFirstOrThrow
   */
  export type DireccionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccion to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Direccions.
     */
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion findMany
   */
  export type DireccionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter, which Direccions to fetch.
     */
    where?: DireccionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Direccions to fetch.
     */
    orderBy?: DireccionOrderByWithRelationInput | DireccionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Direccions.
     */
    cursor?: DireccionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Direccions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Direccions.
     */
    skip?: number
    distinct?: DireccionScalarFieldEnum | DireccionScalarFieldEnum[]
  }

  /**
   * Direccion create
   */
  export type DireccionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The data needed to create a Direccion.
     */
    data: XOR<DireccionCreateInput, DireccionUncheckedCreateInput>
  }

  /**
   * Direccion createMany
   */
  export type DireccionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Direccions.
     */
    data: DireccionCreateManyInput | DireccionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Direccion update
   */
  export type DireccionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The data needed to update a Direccion.
     */
    data: XOR<DireccionUpdateInput, DireccionUncheckedUpdateInput>
    /**
     * Choose, which Direccion to update.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion updateMany
   */
  export type DireccionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Direccions.
     */
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyInput>
    /**
     * Filter which Direccions to update
     */
    where?: DireccionWhereInput
    /**
     * Limit how many Direccions to update.
     */
    limit?: number
  }

  /**
   * Direccion upsert
   */
  export type DireccionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * The filter to search for the Direccion to update in case it exists.
     */
    where: DireccionWhereUniqueInput
    /**
     * In case the Direccion found by the `where` argument doesn't exist, create a new Direccion with this data.
     */
    create: XOR<DireccionCreateInput, DireccionUncheckedCreateInput>
    /**
     * In case the Direccion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DireccionUpdateInput, DireccionUncheckedUpdateInput>
  }

  /**
   * Direccion delete
   */
  export type DireccionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
    /**
     * Filter which Direccion to delete.
     */
    where: DireccionWhereUniqueInput
  }

  /**
   * Direccion deleteMany
   */
  export type DireccionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Direccions to delete
     */
    where?: DireccionWhereInput
    /**
     * Limit how many Direccions to delete.
     */
    limit?: number
  }

  /**
   * Direccion without action
   */
  export type DireccionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Direccion
     */
    select?: DireccionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Direccion
     */
    omit?: DireccionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DireccionInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id_pedido: number | null
    total_pago: Decimal | null
    id_cliente: number | null
    id_administrador: number | null
  }

  export type PedidoSumAggregateOutputType = {
    id_pedido: number | null
    total_pago: Decimal | null
    id_cliente: number | null
    id_administrador: number | null
  }

  export type PedidoMinAggregateOutputType = {
    id_pedido: number | null
    estado_pedido: string | null
    fecha_pedido: Date | null
    total_pago: Decimal | null
    id_cliente: number | null
    id_administrador: number | null
  }

  export type PedidoMaxAggregateOutputType = {
    id_pedido: number | null
    estado_pedido: string | null
    fecha_pedido: Date | null
    total_pago: Decimal | null
    id_cliente: number | null
    id_administrador: number | null
  }

  export type PedidoCountAggregateOutputType = {
    id_pedido: number
    estado_pedido: number
    fecha_pedido: number
    total_pago: number
    id_cliente: number
    id_administrador: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id_pedido?: true
    total_pago?: true
    id_cliente?: true
    id_administrador?: true
  }

  export type PedidoSumAggregateInputType = {
    id_pedido?: true
    total_pago?: true
    id_cliente?: true
    id_administrador?: true
  }

  export type PedidoMinAggregateInputType = {
    id_pedido?: true
    estado_pedido?: true
    fecha_pedido?: true
    total_pago?: true
    id_cliente?: true
    id_administrador?: true
  }

  export type PedidoMaxAggregateInputType = {
    id_pedido?: true
    estado_pedido?: true
    fecha_pedido?: true
    total_pago?: true
    id_cliente?: true
    id_administrador?: true
  }

  export type PedidoCountAggregateInputType = {
    id_pedido?: true
    estado_pedido?: true
    fecha_pedido?: true
    total_pago?: true
    id_cliente?: true
    id_administrador?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id_pedido: number
    estado_pedido: string
    fecha_pedido: Date
    total_pago: Decimal
    id_cliente: number
    id_administrador: number
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pedido?: boolean
    estado_pedido?: boolean
    fecha_pedido?: boolean
    total_pago?: boolean
    id_cliente?: boolean
    id_administrador?: boolean
    pagos?: boolean | Pedido$pagosArgs<ExtArgs>
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    productos?: boolean | Pedido$productosArgs<ExtArgs>
    paymentPreferences?: boolean | Pedido$paymentPreferencesArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>



  export type PedidoSelectScalar = {
    id_pedido?: boolean
    estado_pedido?: boolean
    fecha_pedido?: boolean
    total_pago?: boolean
    id_cliente?: boolean
    id_administrador?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pedido" | "estado_pedido" | "fecha_pedido" | "total_pago" | "id_cliente" | "id_administrador", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagos?: boolean | Pedido$pagosArgs<ExtArgs>
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    productos?: boolean | Pedido$productosArgs<ExtArgs>
    paymentPreferences?: boolean | Pedido$paymentPreferencesArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      pagos: Prisma.$PagoPayload<ExtArgs>[]
      administrador: Prisma.$AdministradorPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
      productos: Prisma.$PedidoProductoPayload<ExtArgs>[]
      paymentPreferences: Prisma.$PaymentPreferencePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pedido: number
      estado_pedido: string
      fecha_pedido: Date
      total_pago: Prisma.Decimal
      id_cliente: number
      id_administrador: number
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id_pedido`
     * const pedidoWithId_pedidoOnly = await prisma.pedido.findMany({ select: { id_pedido: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pagos<T extends Pedido$pagosArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    administrador<T extends AdministradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdministradorDefaultArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    productos<T extends Pedido$productosArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentPreferences<T extends Pedido$paymentPreferencesArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$paymentPreferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id_pedido: FieldRef<"Pedido", 'Int'>
    readonly estado_pedido: FieldRef<"Pedido", 'String'>
    readonly fecha_pedido: FieldRef<"Pedido", 'DateTime'>
    readonly total_pago: FieldRef<"Pedido", 'Decimal'>
    readonly id_cliente: FieldRef<"Pedido", 'Int'>
    readonly id_administrador: FieldRef<"Pedido", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.pagos
   */
  export type Pedido$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    cursor?: PagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pedido.productos
   */
  export type Pedido$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    where?: PedidoProductoWhereInput
    orderBy?: PedidoProductoOrderByWithRelationInput | PedidoProductoOrderByWithRelationInput[]
    cursor?: PedidoProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoProductoScalarFieldEnum | PedidoProductoScalarFieldEnum[]
  }

  /**
   * Pedido.paymentPreferences
   */
  export type Pedido$paymentPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPreference
     */
    select?: PaymentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPreference
     */
    omit?: PaymentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPreferenceInclude<ExtArgs> | null
    where?: PaymentPreferenceWhereInput
    orderBy?: PaymentPreferenceOrderByWithRelationInput | PaymentPreferenceOrderByWithRelationInput[]
    cursor?: PaymentPreferenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentPreferenceScalarFieldEnum | PaymentPreferenceScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model Pago
   */

  export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  export type PagoAvgAggregateOutputType = {
    ID_pagos: number | null
    monto_pago: Decimal | null
    id_pedido: number | null
    id_cliente: number | null
  }

  export type PagoSumAggregateOutputType = {
    ID_pagos: number | null
    monto_pago: Decimal | null
    id_pedido: number | null
    id_cliente: number | null
  }

  export type PagoMinAggregateOutputType = {
    ID_pagos: number | null
    monto_pago: Decimal | null
    metodo_pago: string | null
    estado_pago: string | null
    id_pedido: number | null
    id_cliente: number | null
  }

  export type PagoMaxAggregateOutputType = {
    ID_pagos: number | null
    monto_pago: Decimal | null
    metodo_pago: string | null
    estado_pago: string | null
    id_pedido: number | null
    id_cliente: number | null
  }

  export type PagoCountAggregateOutputType = {
    ID_pagos: number
    monto_pago: number
    metodo_pago: number
    estado_pago: number
    id_pedido: number
    id_cliente: number
    _all: number
  }


  export type PagoAvgAggregateInputType = {
    ID_pagos?: true
    monto_pago?: true
    id_pedido?: true
    id_cliente?: true
  }

  export type PagoSumAggregateInputType = {
    ID_pagos?: true
    monto_pago?: true
    id_pedido?: true
    id_cliente?: true
  }

  export type PagoMinAggregateInputType = {
    ID_pagos?: true
    monto_pago?: true
    metodo_pago?: true
    estado_pago?: true
    id_pedido?: true
    id_cliente?: true
  }

  export type PagoMaxAggregateInputType = {
    ID_pagos?: true
    monto_pago?: true
    metodo_pago?: true
    estado_pago?: true
    id_pedido?: true
    id_cliente?: true
  }

  export type PagoCountAggregateInputType = {
    ID_pagos?: true
    monto_pago?: true
    metodo_pago?: true
    estado_pago?: true
    id_pedido?: true
    id_cliente?: true
    _all?: true
  }

  export type PagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pago to aggregate.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagos
    **/
    _count?: true | PagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoMaxAggregateInputType
  }

  export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
        [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePago[P]>
      : GetScalarType<T[P], AggregatePago[P]>
  }




  export type PagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithAggregationInput | PagoOrderByWithAggregationInput[]
    by: PagoScalarFieldEnum[] | PagoScalarFieldEnum
    having?: PagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoCountAggregateInputType | true
    _avg?: PagoAvgAggregateInputType
    _sum?: PagoSumAggregateInputType
    _min?: PagoMinAggregateInputType
    _max?: PagoMaxAggregateInputType
  }

  export type PagoGroupByOutputType = {
    ID_pagos: number
    monto_pago: Decimal
    metodo_pago: string
    estado_pago: string
    id_pedido: number
    id_cliente: number
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  type GetPagoGroupByPayload<T extends PagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoGroupByOutputType[P]>
            : GetScalarType<T[P], PagoGroupByOutputType[P]>
        }
      >
    >


  export type PagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_pagos?: boolean
    monto_pago?: boolean
    metodo_pago?: boolean
    estado_pago?: boolean
    id_pedido?: boolean
    id_cliente?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>



  export type PagoSelectScalar = {
    ID_pagos?: boolean
    monto_pago?: boolean
    metodo_pago?: boolean
    estado_pago?: boolean
    id_pedido?: boolean
    id_cliente?: boolean
  }

  export type PagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_pagos" | "monto_pago" | "metodo_pago" | "estado_pago" | "id_pedido" | "id_cliente", ExtArgs["result"]["pago"]>
  export type PagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $PagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pago"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_pagos: number
      monto_pago: Prisma.Decimal
      metodo_pago: string
      estado_pago: string
      id_pedido: number
      id_cliente: number
    }, ExtArgs["result"]["pago"]>
    composites: {}
  }

  type PagoGetPayload<S extends boolean | null | undefined | PagoDefaultArgs> = $Result.GetResult<Prisma.$PagoPayload, S>

  type PagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagoCountAggregateInputType | true
    }

  export interface PagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pago'], meta: { name: 'Pago' } }
    /**
     * Find zero or one Pago that matches the filter.
     * @param {PagoFindUniqueArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagoFindUniqueArgs>(args: SelectSubset<T, PagoFindUniqueArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagoFindUniqueOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagoFindFirstArgs>(args?: SelectSubset<T, PagoFindFirstArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pago.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pago.findMany({ take: 10 })
     * 
     * // Only select the `ID_pagos`
     * const pagoWithID_pagosOnly = await prisma.pago.findMany({ select: { ID_pagos: true } })
     * 
     */
    findMany<T extends PagoFindManyArgs>(args?: SelectSubset<T, PagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pago.
     * @param {PagoCreateArgs} args - Arguments to create a Pago.
     * @example
     * // Create one Pago
     * const Pago = await prisma.pago.create({
     *   data: {
     *     // ... data to create a Pago
     *   }
     * })
     * 
     */
    create<T extends PagoCreateArgs>(args: SelectSubset<T, PagoCreateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagos.
     * @param {PagoCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagoCreateManyArgs>(args?: SelectSubset<T, PagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pago.
     * @param {PagoDeleteArgs} args - Arguments to delete one Pago.
     * @example
     * // Delete one Pago
     * const Pago = await prisma.pago.delete({
     *   where: {
     *     // ... filter to delete one Pago
     *   }
     * })
     * 
     */
    delete<T extends PagoDeleteArgs>(args: SelectSubset<T, PagoDeleteArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pago.
     * @param {PagoUpdateArgs} args - Arguments to update one Pago.
     * @example
     * // Update one Pago
     * const pago = await prisma.pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagoUpdateArgs>(args: SelectSubset<T, PagoUpdateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagos.
     * @param {PagoDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagoDeleteManyArgs>(args?: SelectSubset<T, PagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagoUpdateManyArgs>(args: SelectSubset<T, PagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pago.
     * @param {PagoUpsertArgs} args - Arguments to update or create a Pago.
     * @example
     * // Update or create a Pago
     * const pago = await prisma.pago.upsert({
     *   create: {
     *     // ... data to create a Pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pago we want to update
     *   }
     * })
     */
    upsert<T extends PagoUpsertArgs>(args: SelectSubset<T, PagoUpsertArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pago.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends PagoCountArgs>(
      args?: Subset<T, PagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagoAggregateArgs>(args: Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>

    /**
     * Group by Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoGroupByArgs['orderBy'] }
        : { orderBy?: PagoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pago model
   */
  readonly fields: PagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pago model
   */
  interface PagoFieldRefs {
    readonly ID_pagos: FieldRef<"Pago", 'Int'>
    readonly monto_pago: FieldRef<"Pago", 'Decimal'>
    readonly metodo_pago: FieldRef<"Pago", 'String'>
    readonly estado_pago: FieldRef<"Pago", 'String'>
    readonly id_pedido: FieldRef<"Pago", 'Int'>
    readonly id_cliente: FieldRef<"Pago", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pago findUnique
   */
  export type PagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findUniqueOrThrow
   */
  export type PagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findFirst
   */
  export type PagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findFirstOrThrow
   */
  export type PagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findMany
   */
  export type PagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago create
   */
  export type PagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pago.
     */
    data: XOR<PagoCreateInput, PagoUncheckedCreateInput>
  }

  /**
   * Pago createMany
   */
  export type PagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagos.
     */
    data: PagoCreateManyInput | PagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pago update
   */
  export type PagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pago.
     */
    data: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
    /**
     * Choose, which Pago to update.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago updateMany
   */
  export type PagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to update.
     */
    limit?: number
  }

  /**
   * Pago upsert
   */
  export type PagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pago to update in case it exists.
     */
    where: PagoWhereUniqueInput
    /**
     * In case the Pago found by the `where` argument doesn't exist, create a new Pago with this data.
     */
    create: XOR<PagoCreateInput, PagoUncheckedCreateInput>
    /**
     * In case the Pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
  }

  /**
   * Pago delete
   */
  export type PagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter which Pago to delete.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago deleteMany
   */
  export type PagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagos to delete
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to delete.
     */
    limit?: number
  }

  /**
   * Pago without action
   */
  export type PagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
  }


  /**
   * Model Administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorAvgAggregateOutputType = {
    id_administrador: number | null
  }

  export type AdministradorSumAggregateOutputType = {
    id_administrador: number | null
  }

  export type AdministradorMinAggregateOutputType = {
    id_administrador: number | null
    Nombres: string | null
    Apellidos: string | null
    Email: string | null
    contraseña: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministradorMaxAggregateOutputType = {
    id_administrador: number | null
    Nombres: string | null
    Apellidos: string | null
    Email: string | null
    contraseña: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministradorCountAggregateOutputType = {
    id_administrador: number
    Nombres: number
    Apellidos: number
    Email: number
    contraseña: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdministradorAvgAggregateInputType = {
    id_administrador?: true
  }

  export type AdministradorSumAggregateInputType = {
    id_administrador?: true
  }

  export type AdministradorMinAggregateInputType = {
    id_administrador?: true
    Nombres?: true
    Apellidos?: true
    Email?: true
    contraseña?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministradorMaxAggregateInputType = {
    id_administrador?: true
    Nombres?: true
    Apellidos?: true
    Email?: true
    contraseña?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministradorCountAggregateInputType = {
    id_administrador?: true
    Nombres?: true
    Apellidos?: true
    Email?: true
    contraseña?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrador to aggregate.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type AdministradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithAggregationInput | AdministradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: AdministradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _avg?: AdministradorAvgAggregateInputType
    _sum?: AdministradorSumAggregateInputType
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    id_administrador: number
    Nombres: string
    Apellidos: string
    Email: string
    contraseña: string
    createdAt: Date
    updatedAt: Date | null
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends AdministradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type AdministradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_administrador?: boolean
    Nombres?: boolean
    Apellidos?: boolean
    Email?: boolean
    contraseña?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pedidos?: boolean | Administrador$pedidosArgs<ExtArgs>
    _count?: boolean | AdministradorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>



  export type AdministradorSelectScalar = {
    id_administrador?: boolean
    Nombres?: boolean
    Apellidos?: boolean
    Email?: boolean
    contraseña?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdministradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_administrador" | "Nombres" | "Apellidos" | "Email" | "contraseña" | "createdAt" | "updatedAt", ExtArgs["result"]["administrador"]>
  export type AdministradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Administrador$pedidosArgs<ExtArgs>
    _count?: boolean | AdministradorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdministradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrador"
    objects: {
      pedidos: Prisma.$PedidoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_administrador: number
      Nombres: string
      Apellidos: string
      Email: string
      contraseña: string
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type AdministradorGetPayload<S extends boolean | null | undefined | AdministradorDefaultArgs> = $Result.GetResult<Prisma.$AdministradorPayload, S>

  type AdministradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface AdministradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrador'], meta: { name: 'Administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {AdministradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministradorFindUniqueArgs>(args: SelectSubset<T, AdministradorFindUniqueArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministradorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministradorFindFirstArgs>(args?: SelectSubset<T, AdministradorFindFirstArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministradorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `id_administrador`
     * const administradorWithId_administradorOnly = await prisma.administrador.findMany({ select: { id_administrador: true } })
     * 
     */
    findMany<T extends AdministradorFindManyArgs>(args?: SelectSubset<T, AdministradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrador.
     * @param {AdministradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends AdministradorCreateArgs>(args: SelectSubset<T, AdministradorCreateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administradors.
     * @param {AdministradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministradorCreateManyArgs>(args?: SelectSubset<T, AdministradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Administrador.
     * @param {AdministradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends AdministradorDeleteArgs>(args: SelectSubset<T, AdministradorDeleteArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrador.
     * @param {AdministradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministradorUpdateArgs>(args: SelectSubset<T, AdministradorUpdateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administradors.
     * @param {AdministradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministradorDeleteManyArgs>(args?: SelectSubset<T, AdministradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministradorUpdateManyArgs>(args: SelectSubset<T, AdministradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Administrador.
     * @param {AdministradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends AdministradorUpsertArgs>(args: SelectSubset<T, AdministradorUpsertArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends AdministradorCountArgs>(
      args?: Subset<T, AdministradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdministradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministradorGroupByArgs['orderBy'] }
        : { orderBy?: AdministradorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdministradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrador model
   */
  readonly fields: AdministradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Administrador$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Administrador$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Administrador model
   */
  interface AdministradorFieldRefs {
    readonly id_administrador: FieldRef<"Administrador", 'Int'>
    readonly Nombres: FieldRef<"Administrador", 'String'>
    readonly Apellidos: FieldRef<"Administrador", 'String'>
    readonly Email: FieldRef<"Administrador", 'String'>
    readonly contraseña: FieldRef<"Administrador", 'String'>
    readonly createdAt: FieldRef<"Administrador", 'DateTime'>
    readonly updatedAt: FieldRef<"Administrador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Administrador findUnique
   */
  export type AdministradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findUniqueOrThrow
   */
  export type AdministradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findFirst
   */
  export type AdministradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findFirstOrThrow
   */
  export type AdministradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findMany
   */
  export type AdministradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administradors to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador create
   */
  export type AdministradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to create a Administrador.
     */
    data: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
  }

  /**
   * Administrador createMany
   */
  export type AdministradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador update
   */
  export type AdministradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to update a Administrador.
     */
    data: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
    /**
     * Choose, which Administrador to update.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador updateMany
   */
  export type AdministradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
  }

  /**
   * Administrador upsert
   */
  export type AdministradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The filter to search for the Administrador to update in case it exists.
     */
    where: AdministradorWhereUniqueInput
    /**
     * In case the Administrador found by the `where` argument doesn't exist, create a new Administrador with this data.
     */
    create: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
    /**
     * In case the Administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
  }

  /**
   * Administrador delete
   */
  export type AdministradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter which Administrador to delete.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador deleteMany
   */
  export type AdministradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administradors to delete
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to delete.
     */
    limit?: number
  }

  /**
   * Administrador.pedidos
   */
  export type Administrador$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    cursor?: PedidoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Administrador without action
   */
  export type AdministradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
  }


  /**
   * Model Inventario
   */

  export type AggregateInventario = {
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  export type InventarioAvgAggregateOutputType = {
    id_inventario: number | null
    cantidad: number | null
  }

  export type InventarioSumAggregateOutputType = {
    id_inventario: number | null
    cantidad: number | null
  }

  export type InventarioMinAggregateOutputType = {
    id_inventario: number | null
    cantidad: number | null
    fechaIngreso: Date | null
    fechaSalida: Date | null
    fechaRealización: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventarioMaxAggregateOutputType = {
    id_inventario: number | null
    cantidad: number | null
    fechaIngreso: Date | null
    fechaSalida: Date | null
    fechaRealización: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventarioCountAggregateOutputType = {
    id_inventario: number
    cantidad: number
    fechaIngreso: number
    fechaSalida: number
    fechaRealización: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventarioAvgAggregateInputType = {
    id_inventario?: true
    cantidad?: true
  }

  export type InventarioSumAggregateInputType = {
    id_inventario?: true
    cantidad?: true
  }

  export type InventarioMinAggregateInputType = {
    id_inventario?: true
    cantidad?: true
    fechaIngreso?: true
    fechaSalida?: true
    fechaRealización?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventarioMaxAggregateInputType = {
    id_inventario?: true
    cantidad?: true
    fechaIngreso?: true
    fechaSalida?: true
    fechaRealización?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventarioCountAggregateInputType = {
    id_inventario?: true
    cantidad?: true
    fechaIngreso?: true
    fechaSalida?: true
    fechaRealización?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventario to aggregate.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventarios
    **/
    _count?: true | InventarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventarioMaxAggregateInputType
  }

  export type GetInventarioAggregateType<T extends InventarioAggregateArgs> = {
        [P in keyof T & keyof AggregateInventario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventario[P]>
      : GetScalarType<T[P], AggregateInventario[P]>
  }




  export type InventarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventarioWhereInput
    orderBy?: InventarioOrderByWithAggregationInput | InventarioOrderByWithAggregationInput[]
    by: InventarioScalarFieldEnum[] | InventarioScalarFieldEnum
    having?: InventarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventarioCountAggregateInputType | true
    _avg?: InventarioAvgAggregateInputType
    _sum?: InventarioSumAggregateInputType
    _min?: InventarioMinAggregateInputType
    _max?: InventarioMaxAggregateInputType
  }

  export type InventarioGroupByOutputType = {
    id_inventario: number
    cantidad: number
    fechaIngreso: Date
    fechaSalida: Date
    fechaRealización: Date
    createdAt: Date
    updatedAt: Date | null
    _count: InventarioCountAggregateOutputType | null
    _avg: InventarioAvgAggregateOutputType | null
    _sum: InventarioSumAggregateOutputType | null
    _min: InventarioMinAggregateOutputType | null
    _max: InventarioMaxAggregateOutputType | null
  }

  type GetInventarioGroupByPayload<T extends InventarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventarioGroupByOutputType[P]>
            : GetScalarType<T[P], InventarioGroupByOutputType[P]>
        }
      >
    >


  export type InventarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_inventario?: boolean
    cantidad?: boolean
    fechaIngreso?: boolean
    fechaSalida?: boolean
    fechaRealización?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productos?: boolean | Inventario$productosArgs<ExtArgs>
    _count?: boolean | InventarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventario"]>



  export type InventarioSelectScalar = {
    id_inventario?: boolean
    cantidad?: boolean
    fechaIngreso?: boolean
    fechaSalida?: boolean
    fechaRealización?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_inventario" | "cantidad" | "fechaIngreso" | "fechaSalida" | "fechaRealización" | "createdAt" | "updatedAt", ExtArgs["result"]["inventario"]>
  export type InventarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Inventario$productosArgs<ExtArgs>
    _count?: boolean | InventarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $InventarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventario"
    objects: {
      productos: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_inventario: number
      cantidad: number
      fechaIngreso: Date
      fechaSalida: Date
      fechaRealización: Date
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["inventario"]>
    composites: {}
  }

  type InventarioGetPayload<S extends boolean | null | undefined | InventarioDefaultArgs> = $Result.GetResult<Prisma.$InventarioPayload, S>

  type InventarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventarioCountAggregateInputType | true
    }

  export interface InventarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventario'], meta: { name: 'Inventario' } }
    /**
     * Find zero or one Inventario that matches the filter.
     * @param {InventarioFindUniqueArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventarioFindUniqueArgs>(args: SelectSubset<T, InventarioFindUniqueArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventarioFindUniqueOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventarioFindUniqueOrThrowArgs>(args: SelectSubset<T, InventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindFirstArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventarioFindFirstArgs>(args?: SelectSubset<T, InventarioFindFirstArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindFirstOrThrowArgs} args - Arguments to find a Inventario
     * @example
     * // Get one Inventario
     * const inventario = await prisma.inventario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventarioFindFirstOrThrowArgs>(args?: SelectSubset<T, InventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventarios
     * const inventarios = await prisma.inventario.findMany()
     * 
     * // Get first 10 Inventarios
     * const inventarios = await prisma.inventario.findMany({ take: 10 })
     * 
     * // Only select the `id_inventario`
     * const inventarioWithId_inventarioOnly = await prisma.inventario.findMany({ select: { id_inventario: true } })
     * 
     */
    findMany<T extends InventarioFindManyArgs>(args?: SelectSubset<T, InventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventario.
     * @param {InventarioCreateArgs} args - Arguments to create a Inventario.
     * @example
     * // Create one Inventario
     * const Inventario = await prisma.inventario.create({
     *   data: {
     *     // ... data to create a Inventario
     *   }
     * })
     * 
     */
    create<T extends InventarioCreateArgs>(args: SelectSubset<T, InventarioCreateArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventarios.
     * @param {InventarioCreateManyArgs} args - Arguments to create many Inventarios.
     * @example
     * // Create many Inventarios
     * const inventario = await prisma.inventario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventarioCreateManyArgs>(args?: SelectSubset<T, InventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Inventario.
     * @param {InventarioDeleteArgs} args - Arguments to delete one Inventario.
     * @example
     * // Delete one Inventario
     * const Inventario = await prisma.inventario.delete({
     *   where: {
     *     // ... filter to delete one Inventario
     *   }
     * })
     * 
     */
    delete<T extends InventarioDeleteArgs>(args: SelectSubset<T, InventarioDeleteArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventario.
     * @param {InventarioUpdateArgs} args - Arguments to update one Inventario.
     * @example
     * // Update one Inventario
     * const inventario = await prisma.inventario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventarioUpdateArgs>(args: SelectSubset<T, InventarioUpdateArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventarios.
     * @param {InventarioDeleteManyArgs} args - Arguments to filter Inventarios to delete.
     * @example
     * // Delete a few Inventarios
     * const { count } = await prisma.inventario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventarioDeleteManyArgs>(args?: SelectSubset<T, InventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventarios
     * const inventario = await prisma.inventario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventarioUpdateManyArgs>(args: SelectSubset<T, InventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inventario.
     * @param {InventarioUpsertArgs} args - Arguments to update or create a Inventario.
     * @example
     * // Update or create a Inventario
     * const inventario = await prisma.inventario.upsert({
     *   create: {
     *     // ... data to create a Inventario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventario we want to update
     *   }
     * })
     */
    upsert<T extends InventarioUpsertArgs>(args: SelectSubset<T, InventarioUpsertArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioCountArgs} args - Arguments to filter Inventarios to count.
     * @example
     * // Count the number of Inventarios
     * const count = await prisma.inventario.count({
     *   where: {
     *     // ... the filter for the Inventarios we want to count
     *   }
     * })
    **/
    count<T extends InventarioCountArgs>(
      args?: Subset<T, InventarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventarioAggregateArgs>(args: Subset<T, InventarioAggregateArgs>): Prisma.PrismaPromise<GetInventarioAggregateType<T>>

    /**
     * Group by Inventario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventarioGroupByArgs['orderBy'] }
        : { orderBy?: InventarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventario model
   */
  readonly fields: InventarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Inventario$productosArgs<ExtArgs> = {}>(args?: Subset<T, Inventario$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventario model
   */
  interface InventarioFieldRefs {
    readonly id_inventario: FieldRef<"Inventario", 'Int'>
    readonly cantidad: FieldRef<"Inventario", 'Int'>
    readonly fechaIngreso: FieldRef<"Inventario", 'DateTime'>
    readonly fechaSalida: FieldRef<"Inventario", 'DateTime'>
    readonly fechaRealización: FieldRef<"Inventario", 'DateTime'>
    readonly createdAt: FieldRef<"Inventario", 'DateTime'>
    readonly updatedAt: FieldRef<"Inventario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inventario findUnique
   */
  export type InventarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario findUniqueOrThrow
   */
  export type InventarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario findFirst
   */
  export type InventarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario findFirstOrThrow
   */
  export type InventarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventario to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventarios.
     */
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario findMany
   */
  export type InventarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter, which Inventarios to fetch.
     */
    where?: InventarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventarios to fetch.
     */
    orderBy?: InventarioOrderByWithRelationInput | InventarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventarios.
     */
    cursor?: InventarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventarios.
     */
    skip?: number
    distinct?: InventarioScalarFieldEnum | InventarioScalarFieldEnum[]
  }

  /**
   * Inventario create
   */
  export type InventarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventario.
     */
    data: XOR<InventarioCreateInput, InventarioUncheckedCreateInput>
  }

  /**
   * Inventario createMany
   */
  export type InventarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventarios.
     */
    data: InventarioCreateManyInput | InventarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventario update
   */
  export type InventarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventario.
     */
    data: XOR<InventarioUpdateInput, InventarioUncheckedUpdateInput>
    /**
     * Choose, which Inventario to update.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario updateMany
   */
  export type InventarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventarios.
     */
    data: XOR<InventarioUpdateManyMutationInput, InventarioUncheckedUpdateManyInput>
    /**
     * Filter which Inventarios to update
     */
    where?: InventarioWhereInput
    /**
     * Limit how many Inventarios to update.
     */
    limit?: number
  }

  /**
   * Inventario upsert
   */
  export type InventarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventario to update in case it exists.
     */
    where: InventarioWhereUniqueInput
    /**
     * In case the Inventario found by the `where` argument doesn't exist, create a new Inventario with this data.
     */
    create: XOR<InventarioCreateInput, InventarioUncheckedCreateInput>
    /**
     * In case the Inventario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventarioUpdateInput, InventarioUncheckedUpdateInput>
  }

  /**
   * Inventario delete
   */
  export type InventarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    /**
     * Filter which Inventario to delete.
     */
    where: InventarioWhereUniqueInput
  }

  /**
   * Inventario deleteMany
   */
  export type InventarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventarios to delete
     */
    where?: InventarioWhereInput
    /**
     * Limit how many Inventarios to delete.
     */
    limit?: number
  }

  /**
   * Inventario.productos
   */
  export type Inventario$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Inventario without action
   */
  export type InventarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
  }


  /**
   * Model Proveedor
   */

  export type AggregateProveedor = {
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  export type ProveedorAvgAggregateOutputType = {
    id_proveedor: number | null
  }

  export type ProveedorSumAggregateOutputType = {
    id_proveedor: number | null
  }

  export type ProveedorMinAggregateOutputType = {
    id_proveedor: number | null
    nombres: string | null
    apellidos: string | null
    Email: string | null
    contraseña: Uint8Array | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProveedorMaxAggregateOutputType = {
    id_proveedor: number | null
    nombres: string | null
    apellidos: string | null
    Email: string | null
    contraseña: Uint8Array | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProveedorCountAggregateOutputType = {
    id_proveedor: number
    nombres: number
    apellidos: number
    Email: number
    contraseña: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProveedorAvgAggregateInputType = {
    id_proveedor?: true
  }

  export type ProveedorSumAggregateInputType = {
    id_proveedor?: true
  }

  export type ProveedorMinAggregateInputType = {
    id_proveedor?: true
    nombres?: true
    apellidos?: true
    Email?: true
    contraseña?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProveedorMaxAggregateInputType = {
    id_proveedor?: true
    nombres?: true
    apellidos?: true
    Email?: true
    contraseña?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProveedorCountAggregateInputType = {
    id_proveedor?: true
    nombres?: true
    apellidos?: true
    Email?: true
    contraseña?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProveedorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedor to aggregate.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proveedors
    **/
    _count?: true | ProveedorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProveedorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProveedorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProveedorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProveedorMaxAggregateInputType
  }

  export type GetProveedorAggregateType<T extends ProveedorAggregateArgs> = {
        [P in keyof T & keyof AggregateProveedor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProveedor[P]>
      : GetScalarType<T[P], AggregateProveedor[P]>
  }




  export type ProveedorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProveedorWhereInput
    orderBy?: ProveedorOrderByWithAggregationInput | ProveedorOrderByWithAggregationInput[]
    by: ProveedorScalarFieldEnum[] | ProveedorScalarFieldEnum
    having?: ProveedorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProveedorCountAggregateInputType | true
    _avg?: ProveedorAvgAggregateInputType
    _sum?: ProveedorSumAggregateInputType
    _min?: ProveedorMinAggregateInputType
    _max?: ProveedorMaxAggregateInputType
  }

  export type ProveedorGroupByOutputType = {
    id_proveedor: number
    nombres: string
    apellidos: string
    Email: string
    contraseña: Uint8Array
    createdAt: Date
    updatedAt: Date | null
    _count: ProveedorCountAggregateOutputType | null
    _avg: ProveedorAvgAggregateOutputType | null
    _sum: ProveedorSumAggregateOutputType | null
    _min: ProveedorMinAggregateOutputType | null
    _max: ProveedorMaxAggregateOutputType | null
  }

  type GetProveedorGroupByPayload<T extends ProveedorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProveedorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProveedorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
            : GetScalarType<T[P], ProveedorGroupByOutputType[P]>
        }
      >
    >


  export type ProveedorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_proveedor?: boolean
    nombres?: boolean
    apellidos?: boolean
    Email?: boolean
    contraseña?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    productos?: boolean | Proveedor$productosArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proveedor"]>



  export type ProveedorSelectScalar = {
    id_proveedor?: boolean
    nombres?: boolean
    apellidos?: boolean
    Email?: boolean
    contraseña?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProveedorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_proveedor" | "nombres" | "apellidos" | "Email" | "contraseña" | "createdAt" | "updatedAt", ExtArgs["result"]["proveedor"]>
  export type ProveedorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Proveedor$productosArgs<ExtArgs>
    _count?: boolean | ProveedorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProveedorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proveedor"
    objects: {
      productos: Prisma.$ProductoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_proveedor: number
      nombres: string
      apellidos: string
      Email: string
      contraseña: Uint8Array
      createdAt: Date
      updatedAt: Date | null
    }, ExtArgs["result"]["proveedor"]>
    composites: {}
  }

  type ProveedorGetPayload<S extends boolean | null | undefined | ProveedorDefaultArgs> = $Result.GetResult<Prisma.$ProveedorPayload, S>

  type ProveedorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProveedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProveedorCountAggregateInputType | true
    }

  export interface ProveedorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proveedor'], meta: { name: 'Proveedor' } }
    /**
     * Find zero or one Proveedor that matches the filter.
     * @param {ProveedorFindUniqueArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProveedorFindUniqueArgs>(args: SelectSubset<T, ProveedorFindUniqueArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proveedor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProveedorFindUniqueOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProveedorFindUniqueOrThrowArgs>(args: SelectSubset<T, ProveedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindFirstArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProveedorFindFirstArgs>(args?: SelectSubset<T, ProveedorFindFirstArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proveedor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindFirstOrThrowArgs} args - Arguments to find a Proveedor
     * @example
     * // Get one Proveedor
     * const proveedor = await prisma.proveedor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProveedorFindFirstOrThrowArgs>(args?: SelectSubset<T, ProveedorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proveedors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proveedors
     * const proveedors = await prisma.proveedor.findMany()
     * 
     * // Get first 10 Proveedors
     * const proveedors = await prisma.proveedor.findMany({ take: 10 })
     * 
     * // Only select the `id_proveedor`
     * const proveedorWithId_proveedorOnly = await prisma.proveedor.findMany({ select: { id_proveedor: true } })
     * 
     */
    findMany<T extends ProveedorFindManyArgs>(args?: SelectSubset<T, ProveedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proveedor.
     * @param {ProveedorCreateArgs} args - Arguments to create a Proveedor.
     * @example
     * // Create one Proveedor
     * const Proveedor = await prisma.proveedor.create({
     *   data: {
     *     // ... data to create a Proveedor
     *   }
     * })
     * 
     */
    create<T extends ProveedorCreateArgs>(args: SelectSubset<T, ProveedorCreateArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proveedors.
     * @param {ProveedorCreateManyArgs} args - Arguments to create many Proveedors.
     * @example
     * // Create many Proveedors
     * const proveedor = await prisma.proveedor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProveedorCreateManyArgs>(args?: SelectSubset<T, ProveedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Proveedor.
     * @param {ProveedorDeleteArgs} args - Arguments to delete one Proveedor.
     * @example
     * // Delete one Proveedor
     * const Proveedor = await prisma.proveedor.delete({
     *   where: {
     *     // ... filter to delete one Proveedor
     *   }
     * })
     * 
     */
    delete<T extends ProveedorDeleteArgs>(args: SelectSubset<T, ProveedorDeleteArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proveedor.
     * @param {ProveedorUpdateArgs} args - Arguments to update one Proveedor.
     * @example
     * // Update one Proveedor
     * const proveedor = await prisma.proveedor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProveedorUpdateArgs>(args: SelectSubset<T, ProveedorUpdateArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proveedors.
     * @param {ProveedorDeleteManyArgs} args - Arguments to filter Proveedors to delete.
     * @example
     * // Delete a few Proveedors
     * const { count } = await prisma.proveedor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProveedorDeleteManyArgs>(args?: SelectSubset<T, ProveedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proveedors
     * const proveedor = await prisma.proveedor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProveedorUpdateManyArgs>(args: SelectSubset<T, ProveedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Proveedor.
     * @param {ProveedorUpsertArgs} args - Arguments to update or create a Proveedor.
     * @example
     * // Update or create a Proveedor
     * const proveedor = await prisma.proveedor.upsert({
     *   create: {
     *     // ... data to create a Proveedor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proveedor we want to update
     *   }
     * })
     */
    upsert<T extends ProveedorUpsertArgs>(args: SelectSubset<T, ProveedorUpsertArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proveedors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorCountArgs} args - Arguments to filter Proveedors to count.
     * @example
     * // Count the number of Proveedors
     * const count = await prisma.proveedor.count({
     *   where: {
     *     // ... the filter for the Proveedors we want to count
     *   }
     * })
    **/
    count<T extends ProveedorCountArgs>(
      args?: Subset<T, ProveedorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProveedorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProveedorAggregateArgs>(args: Subset<T, ProveedorAggregateArgs>): Prisma.PrismaPromise<GetProveedorAggregateType<T>>

    /**
     * Group by Proveedor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProveedorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProveedorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProveedorGroupByArgs['orderBy'] }
        : { orderBy?: ProveedorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProveedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProveedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proveedor model
   */
  readonly fields: ProveedorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proveedor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProveedorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends Proveedor$productosArgs<ExtArgs> = {}>(args?: Subset<T, Proveedor$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proveedor model
   */
  interface ProveedorFieldRefs {
    readonly id_proveedor: FieldRef<"Proveedor", 'Int'>
    readonly nombres: FieldRef<"Proveedor", 'String'>
    readonly apellidos: FieldRef<"Proveedor", 'String'>
    readonly Email: FieldRef<"Proveedor", 'String'>
    readonly contraseña: FieldRef<"Proveedor", 'Bytes'>
    readonly createdAt: FieldRef<"Proveedor", 'DateTime'>
    readonly updatedAt: FieldRef<"Proveedor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proveedor findUnique
   */
  export type ProveedorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor findUniqueOrThrow
   */
  export type ProveedorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor findFirst
   */
  export type ProveedorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor findFirstOrThrow
   */
  export type ProveedorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedor to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proveedors.
     */
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor findMany
   */
  export type ProveedorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter, which Proveedors to fetch.
     */
    where?: ProveedorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proveedors to fetch.
     */
    orderBy?: ProveedorOrderByWithRelationInput | ProveedorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proveedors.
     */
    cursor?: ProveedorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proveedors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proveedors.
     */
    skip?: number
    distinct?: ProveedorScalarFieldEnum | ProveedorScalarFieldEnum[]
  }

  /**
   * Proveedor create
   */
  export type ProveedorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The data needed to create a Proveedor.
     */
    data: XOR<ProveedorCreateInput, ProveedorUncheckedCreateInput>
  }

  /**
   * Proveedor createMany
   */
  export type ProveedorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proveedors.
     */
    data: ProveedorCreateManyInput | ProveedorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proveedor update
   */
  export type ProveedorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The data needed to update a Proveedor.
     */
    data: XOR<ProveedorUpdateInput, ProveedorUncheckedUpdateInput>
    /**
     * Choose, which Proveedor to update.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor updateMany
   */
  export type ProveedorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proveedors.
     */
    data: XOR<ProveedorUpdateManyMutationInput, ProveedorUncheckedUpdateManyInput>
    /**
     * Filter which Proveedors to update
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to update.
     */
    limit?: number
  }

  /**
   * Proveedor upsert
   */
  export type ProveedorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * The filter to search for the Proveedor to update in case it exists.
     */
    where: ProveedorWhereUniqueInput
    /**
     * In case the Proveedor found by the `where` argument doesn't exist, create a new Proveedor with this data.
     */
    create: XOR<ProveedorCreateInput, ProveedorUncheckedCreateInput>
    /**
     * In case the Proveedor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProveedorUpdateInput, ProveedorUncheckedUpdateInput>
  }

  /**
   * Proveedor delete
   */
  export type ProveedorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    /**
     * Filter which Proveedor to delete.
     */
    where: ProveedorWhereUniqueInput
  }

  /**
   * Proveedor deleteMany
   */
  export type ProveedorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proveedors to delete
     */
    where?: ProveedorWhereInput
    /**
     * Limit how many Proveedors to delete.
     */
    limit?: number
  }

  /**
   * Proveedor.productos
   */
  export type Proveedor$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    cursor?: ProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Proveedor without action
   */
  export type ProveedorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
  }


  /**
   * Model Producto
   */

  export type AggregateProducto = {
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  export type ProductoAvgAggregateOutputType = {
    id_producto: number | null
    Precio: Decimal | null
    id_inventario: number | null
    id_proveedor: number | null
  }

  export type ProductoSumAggregateOutputType = {
    id_producto: number | null
    Precio: Decimal | null
    id_inventario: number | null
    id_proveedor: number | null
  }

  export type ProductoMinAggregateOutputType = {
    id_producto: number | null
    nombreP: string | null
    tipo: string | null
    Precio: Decimal | null
    imagen: Uint8Array | null
    id_inventario: number | null
    id_proveedor: number | null
  }

  export type ProductoMaxAggregateOutputType = {
    id_producto: number | null
    nombreP: string | null
    tipo: string | null
    Precio: Decimal | null
    imagen: Uint8Array | null
    id_inventario: number | null
    id_proveedor: number | null
  }

  export type ProductoCountAggregateOutputType = {
    id_producto: number
    nombreP: number
    tipo: number
    Precio: number
    imagen: number
    id_inventario: number
    id_proveedor: number
    _all: number
  }


  export type ProductoAvgAggregateInputType = {
    id_producto?: true
    Precio?: true
    id_inventario?: true
    id_proveedor?: true
  }

  export type ProductoSumAggregateInputType = {
    id_producto?: true
    Precio?: true
    id_inventario?: true
    id_proveedor?: true
  }

  export type ProductoMinAggregateInputType = {
    id_producto?: true
    nombreP?: true
    tipo?: true
    Precio?: true
    imagen?: true
    id_inventario?: true
    id_proveedor?: true
  }

  export type ProductoMaxAggregateInputType = {
    id_producto?: true
    nombreP?: true
    tipo?: true
    Precio?: true
    imagen?: true
    id_inventario?: true
    id_proveedor?: true
  }

  export type ProductoCountAggregateInputType = {
    id_producto?: true
    nombreP?: true
    tipo?: true
    Precio?: true
    imagen?: true
    id_inventario?: true
    id_proveedor?: true
    _all?: true
  }

  export type ProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Producto to aggregate.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Productos
    **/
    _count?: true | ProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductoMaxAggregateInputType
  }

  export type GetProductoAggregateType<T extends ProductoAggregateArgs> = {
        [P in keyof T & keyof AggregateProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducto[P]>
      : GetScalarType<T[P], AggregateProducto[P]>
  }




  export type ProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductoWhereInput
    orderBy?: ProductoOrderByWithAggregationInput | ProductoOrderByWithAggregationInput[]
    by: ProductoScalarFieldEnum[] | ProductoScalarFieldEnum
    having?: ProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductoCountAggregateInputType | true
    _avg?: ProductoAvgAggregateInputType
    _sum?: ProductoSumAggregateInputType
    _min?: ProductoMinAggregateInputType
    _max?: ProductoMaxAggregateInputType
  }

  export type ProductoGroupByOutputType = {
    id_producto: number
    nombreP: string
    tipo: string
    Precio: Decimal
    imagen: Uint8Array | null
    id_inventario: number | null
    id_proveedor: number | null
    _count: ProductoCountAggregateOutputType | null
    _avg: ProductoAvgAggregateOutputType | null
    _sum: ProductoSumAggregateOutputType | null
    _min: ProductoMinAggregateOutputType | null
    _max: ProductoMaxAggregateOutputType | null
  }

  type GetProductoGroupByPayload<T extends ProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductoGroupByOutputType[P]>
            : GetScalarType<T[P], ProductoGroupByOutputType[P]>
        }
      >
    >


  export type ProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_producto?: boolean
    nombreP?: boolean
    tipo?: boolean
    Precio?: boolean
    imagen?: boolean
    id_inventario?: boolean
    id_proveedor?: boolean
    pedidos?: boolean | Producto$pedidosArgs<ExtArgs>
    inventario?: boolean | Producto$inventarioArgs<ExtArgs>
    proveedor?: boolean | Producto$proveedorArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["producto"]>



  export type ProductoSelectScalar = {
    id_producto?: boolean
    nombreP?: boolean
    tipo?: boolean
    Precio?: boolean
    imagen?: boolean
    id_inventario?: boolean
    id_proveedor?: boolean
  }

  export type ProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_producto" | "nombreP" | "tipo" | "Precio" | "imagen" | "id_inventario" | "id_proveedor", ExtArgs["result"]["producto"]>
  export type ProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Producto$pedidosArgs<ExtArgs>
    inventario?: boolean | Producto$inventarioArgs<ExtArgs>
    proveedor?: boolean | Producto$proveedorArgs<ExtArgs>
    _count?: boolean | ProductoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Producto"
    objects: {
      pedidos: Prisma.$PedidoProductoPayload<ExtArgs>[]
      inventario: Prisma.$InventarioPayload<ExtArgs> | null
      proveedor: Prisma.$ProveedorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id_producto: number
      nombreP: string
      tipo: string
      Precio: Prisma.Decimal
      imagen: Uint8Array | null
      id_inventario: number | null
      id_proveedor: number | null
    }, ExtArgs["result"]["producto"]>
    composites: {}
  }

  type ProductoGetPayload<S extends boolean | null | undefined | ProductoDefaultArgs> = $Result.GetResult<Prisma.$ProductoPayload, S>

  type ProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductoCountAggregateInputType | true
    }

  export interface ProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Producto'], meta: { name: 'Producto' } }
    /**
     * Find zero or one Producto that matches the filter.
     * @param {ProductoFindUniqueArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductoFindUniqueArgs>(args: SelectSubset<T, ProductoFindUniqueArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Producto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductoFindUniqueOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductoFindFirstArgs>(args?: SelectSubset<T, ProductoFindFirstArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Producto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindFirstOrThrowArgs} args - Arguments to find a Producto
     * @example
     * // Get one Producto
     * const producto = await prisma.producto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Productos
     * const productos = await prisma.producto.findMany()
     * 
     * // Get first 10 Productos
     * const productos = await prisma.producto.findMany({ take: 10 })
     * 
     * // Only select the `id_producto`
     * const productoWithId_productoOnly = await prisma.producto.findMany({ select: { id_producto: true } })
     * 
     */
    findMany<T extends ProductoFindManyArgs>(args?: SelectSubset<T, ProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Producto.
     * @param {ProductoCreateArgs} args - Arguments to create a Producto.
     * @example
     * // Create one Producto
     * const Producto = await prisma.producto.create({
     *   data: {
     *     // ... data to create a Producto
     *   }
     * })
     * 
     */
    create<T extends ProductoCreateArgs>(args: SelectSubset<T, ProductoCreateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Productos.
     * @param {ProductoCreateManyArgs} args - Arguments to create many Productos.
     * @example
     * // Create many Productos
     * const producto = await prisma.producto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductoCreateManyArgs>(args?: SelectSubset<T, ProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Producto.
     * @param {ProductoDeleteArgs} args - Arguments to delete one Producto.
     * @example
     * // Delete one Producto
     * const Producto = await prisma.producto.delete({
     *   where: {
     *     // ... filter to delete one Producto
     *   }
     * })
     * 
     */
    delete<T extends ProductoDeleteArgs>(args: SelectSubset<T, ProductoDeleteArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Producto.
     * @param {ProductoUpdateArgs} args - Arguments to update one Producto.
     * @example
     * // Update one Producto
     * const producto = await prisma.producto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductoUpdateArgs>(args: SelectSubset<T, ProductoUpdateArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Productos.
     * @param {ProductoDeleteManyArgs} args - Arguments to filter Productos to delete.
     * @example
     * // Delete a few Productos
     * const { count } = await prisma.producto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductoDeleteManyArgs>(args?: SelectSubset<T, ProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Productos
     * const producto = await prisma.producto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductoUpdateManyArgs>(args: SelectSubset<T, ProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Producto.
     * @param {ProductoUpsertArgs} args - Arguments to update or create a Producto.
     * @example
     * // Update or create a Producto
     * const producto = await prisma.producto.upsert({
     *   create: {
     *     // ... data to create a Producto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Producto we want to update
     *   }
     * })
     */
    upsert<T extends ProductoUpsertArgs>(args: SelectSubset<T, ProductoUpsertArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoCountArgs} args - Arguments to filter Productos to count.
     * @example
     * // Count the number of Productos
     * const count = await prisma.producto.count({
     *   where: {
     *     // ... the filter for the Productos we want to count
     *   }
     * })
    **/
    count<T extends ProductoCountArgs>(
      args?: Subset<T, ProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductoAggregateArgs>(args: Subset<T, ProductoAggregateArgs>): Prisma.PrismaPromise<GetProductoAggregateType<T>>

    /**
     * Group by Producto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductoGroupByArgs['orderBy'] }
        : { orderBy?: ProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Producto model
   */
  readonly fields: ProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Producto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends Producto$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Producto$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventario<T extends Producto$inventarioArgs<ExtArgs> = {}>(args?: Subset<T, Producto$inventarioArgs<ExtArgs>>): Prisma__InventarioClient<$Result.GetResult<Prisma.$InventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    proveedor<T extends Producto$proveedorArgs<ExtArgs> = {}>(args?: Subset<T, Producto$proveedorArgs<ExtArgs>>): Prisma__ProveedorClient<$Result.GetResult<Prisma.$ProveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Producto model
   */
  interface ProductoFieldRefs {
    readonly id_producto: FieldRef<"Producto", 'Int'>
    readonly nombreP: FieldRef<"Producto", 'String'>
    readonly tipo: FieldRef<"Producto", 'String'>
    readonly Precio: FieldRef<"Producto", 'Decimal'>
    readonly imagen: FieldRef<"Producto", 'Bytes'>
    readonly id_inventario: FieldRef<"Producto", 'Int'>
    readonly id_proveedor: FieldRef<"Producto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Producto findUnique
   */
  export type ProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findUniqueOrThrow
   */
  export type ProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto findFirst
   */
  export type ProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findFirstOrThrow
   */
  export type ProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Producto to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Productos.
     */
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto findMany
   */
  export type ProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter, which Productos to fetch.
     */
    where?: ProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Productos to fetch.
     */
    orderBy?: ProductoOrderByWithRelationInput | ProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Productos.
     */
    cursor?: ProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Productos.
     */
    skip?: number
    distinct?: ProductoScalarFieldEnum | ProductoScalarFieldEnum[]
  }

  /**
   * Producto create
   */
  export type ProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a Producto.
     */
    data: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
  }

  /**
   * Producto createMany
   */
  export type ProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Productos.
     */
    data: ProductoCreateManyInput | ProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Producto update
   */
  export type ProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a Producto.
     */
    data: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
    /**
     * Choose, which Producto to update.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto updateMany
   */
  export type ProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Productos.
     */
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyInput>
    /**
     * Filter which Productos to update
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to update.
     */
    limit?: number
  }

  /**
   * Producto upsert
   */
  export type ProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the Producto to update in case it exists.
     */
    where: ProductoWhereUniqueInput
    /**
     * In case the Producto found by the `where` argument doesn't exist, create a new Producto with this data.
     */
    create: XOR<ProductoCreateInput, ProductoUncheckedCreateInput>
    /**
     * In case the Producto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductoUpdateInput, ProductoUncheckedUpdateInput>
  }

  /**
   * Producto delete
   */
  export type ProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
    /**
     * Filter which Producto to delete.
     */
    where: ProductoWhereUniqueInput
  }

  /**
   * Producto deleteMany
   */
  export type ProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Productos to delete
     */
    where?: ProductoWhereInput
    /**
     * Limit how many Productos to delete.
     */
    limit?: number
  }

  /**
   * Producto.pedidos
   */
  export type Producto$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    where?: PedidoProductoWhereInput
    orderBy?: PedidoProductoOrderByWithRelationInput | PedidoProductoOrderByWithRelationInput[]
    cursor?: PedidoProductoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoProductoScalarFieldEnum | PedidoProductoScalarFieldEnum[]
  }

  /**
   * Producto.inventario
   */
  export type Producto$inventarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventario
     */
    select?: InventarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventario
     */
    omit?: InventarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventarioInclude<ExtArgs> | null
    where?: InventarioWhereInput
  }

  /**
   * Producto.proveedor
   */
  export type Producto$proveedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proveedor
     */
    select?: ProveedorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proveedor
     */
    omit?: ProveedorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProveedorInclude<ExtArgs> | null
    where?: ProveedorWhereInput
  }

  /**
   * Producto without action
   */
  export type ProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Producto
     */
    select?: ProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Producto
     */
    omit?: ProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductoInclude<ExtArgs> | null
  }


  /**
   * Model PedidoProducto
   */

  export type AggregatePedidoProducto = {
    _count: PedidoProductoCountAggregateOutputType | null
    _avg: PedidoProductoAvgAggregateOutputType | null
    _sum: PedidoProductoSumAggregateOutputType | null
    _min: PedidoProductoMinAggregateOutputType | null
    _max: PedidoProductoMaxAggregateOutputType | null
  }

  export type PedidoProductoAvgAggregateOutputType = {
    id_pedido: number | null
    id_producto: number | null
    cantidad: number | null
  }

  export type PedidoProductoSumAggregateOutputType = {
    id_pedido: number | null
    id_producto: number | null
    cantidad: number | null
  }

  export type PedidoProductoMinAggregateOutputType = {
    id_pedido: number | null
    id_producto: number | null
    cantidad: number | null
  }

  export type PedidoProductoMaxAggregateOutputType = {
    id_pedido: number | null
    id_producto: number | null
    cantidad: number | null
  }

  export type PedidoProductoCountAggregateOutputType = {
    id_pedido: number
    id_producto: number
    cantidad: number
    _all: number
  }


  export type PedidoProductoAvgAggregateInputType = {
    id_pedido?: true
    id_producto?: true
    cantidad?: true
  }

  export type PedidoProductoSumAggregateInputType = {
    id_pedido?: true
    id_producto?: true
    cantidad?: true
  }

  export type PedidoProductoMinAggregateInputType = {
    id_pedido?: true
    id_producto?: true
    cantidad?: true
  }

  export type PedidoProductoMaxAggregateInputType = {
    id_pedido?: true
    id_producto?: true
    cantidad?: true
  }

  export type PedidoProductoCountAggregateInputType = {
    id_pedido?: true
    id_producto?: true
    cantidad?: true
    _all?: true
  }

  export type PedidoProductoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoProducto to aggregate.
     */
    where?: PedidoProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoProductos to fetch.
     */
    orderBy?: PedidoProductoOrderByWithRelationInput | PedidoProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PedidoProductos
    **/
    _count?: true | PedidoProductoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoProductoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoProductoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoProductoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoProductoMaxAggregateInputType
  }

  export type GetPedidoProductoAggregateType<T extends PedidoProductoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidoProducto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidoProducto[P]>
      : GetScalarType<T[P], AggregatePedidoProducto[P]>
  }




  export type PedidoProductoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoProductoWhereInput
    orderBy?: PedidoProductoOrderByWithAggregationInput | PedidoProductoOrderByWithAggregationInput[]
    by: PedidoProductoScalarFieldEnum[] | PedidoProductoScalarFieldEnum
    having?: PedidoProductoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoProductoCountAggregateInputType | true
    _avg?: PedidoProductoAvgAggregateInputType
    _sum?: PedidoProductoSumAggregateInputType
    _min?: PedidoProductoMinAggregateInputType
    _max?: PedidoProductoMaxAggregateInputType
  }

  export type PedidoProductoGroupByOutputType = {
    id_pedido: number
    id_producto: number
    cantidad: number
    _count: PedidoProductoCountAggregateOutputType | null
    _avg: PedidoProductoAvgAggregateOutputType | null
    _sum: PedidoProductoSumAggregateOutputType | null
    _min: PedidoProductoMinAggregateOutputType | null
    _max: PedidoProductoMaxAggregateOutputType | null
  }

  type GetPedidoProductoGroupByPayload<T extends PedidoProductoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoProductoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoProductoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoProductoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoProductoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoProductoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pedido?: boolean
    id_producto?: boolean
    cantidad?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoProducto"]>



  export type PedidoProductoSelectScalar = {
    id_pedido?: boolean
    id_producto?: boolean
    cantidad?: boolean
  }

  export type PedidoProductoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pedido" | "id_producto" | "cantidad", ExtArgs["result"]["pedidoProducto"]>
  export type PedidoProductoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    producto?: boolean | ProductoDefaultArgs<ExtArgs>
  }

  export type $PedidoProductoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PedidoProducto"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      producto: Prisma.$ProductoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pedido: number
      id_producto: number
      cantidad: number
    }, ExtArgs["result"]["pedidoProducto"]>
    composites: {}
  }

  type PedidoProductoGetPayload<S extends boolean | null | undefined | PedidoProductoDefaultArgs> = $Result.GetResult<Prisma.$PedidoProductoPayload, S>

  type PedidoProductoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoProductoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoProductoCountAggregateInputType | true
    }

  export interface PedidoProductoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PedidoProducto'], meta: { name: 'PedidoProducto' } }
    /**
     * Find zero or one PedidoProducto that matches the filter.
     * @param {PedidoProductoFindUniqueArgs} args - Arguments to find a PedidoProducto
     * @example
     * // Get one PedidoProducto
     * const pedidoProducto = await prisma.pedidoProducto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoProductoFindUniqueArgs>(args: SelectSubset<T, PedidoProductoFindUniqueArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PedidoProducto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoProductoFindUniqueOrThrowArgs} args - Arguments to find a PedidoProducto
     * @example
     * // Get one PedidoProducto
     * const pedidoProducto = await prisma.pedidoProducto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoProductoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoProductoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoProducto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoFindFirstArgs} args - Arguments to find a PedidoProducto
     * @example
     * // Get one PedidoProducto
     * const pedidoProducto = await prisma.pedidoProducto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoProductoFindFirstArgs>(args?: SelectSubset<T, PedidoProductoFindFirstArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoProducto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoFindFirstOrThrowArgs} args - Arguments to find a PedidoProducto
     * @example
     * // Get one PedidoProducto
     * const pedidoProducto = await prisma.pedidoProducto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoProductoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoProductoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PedidoProductos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidoProductos
     * const pedidoProductos = await prisma.pedidoProducto.findMany()
     * 
     * // Get first 10 PedidoProductos
     * const pedidoProductos = await prisma.pedidoProducto.findMany({ take: 10 })
     * 
     * // Only select the `id_pedido`
     * const pedidoProductoWithId_pedidoOnly = await prisma.pedidoProducto.findMany({ select: { id_pedido: true } })
     * 
     */
    findMany<T extends PedidoProductoFindManyArgs>(args?: SelectSubset<T, PedidoProductoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PedidoProducto.
     * @param {PedidoProductoCreateArgs} args - Arguments to create a PedidoProducto.
     * @example
     * // Create one PedidoProducto
     * const PedidoProducto = await prisma.pedidoProducto.create({
     *   data: {
     *     // ... data to create a PedidoProducto
     *   }
     * })
     * 
     */
    create<T extends PedidoProductoCreateArgs>(args: SelectSubset<T, PedidoProductoCreateArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PedidoProductos.
     * @param {PedidoProductoCreateManyArgs} args - Arguments to create many PedidoProductos.
     * @example
     * // Create many PedidoProductos
     * const pedidoProducto = await prisma.pedidoProducto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoProductoCreateManyArgs>(args?: SelectSubset<T, PedidoProductoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PedidoProducto.
     * @param {PedidoProductoDeleteArgs} args - Arguments to delete one PedidoProducto.
     * @example
     * // Delete one PedidoProducto
     * const PedidoProducto = await prisma.pedidoProducto.delete({
     *   where: {
     *     // ... filter to delete one PedidoProducto
     *   }
     * })
     * 
     */
    delete<T extends PedidoProductoDeleteArgs>(args: SelectSubset<T, PedidoProductoDeleteArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PedidoProducto.
     * @param {PedidoProductoUpdateArgs} args - Arguments to update one PedidoProducto.
     * @example
     * // Update one PedidoProducto
     * const pedidoProducto = await prisma.pedidoProducto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoProductoUpdateArgs>(args: SelectSubset<T, PedidoProductoUpdateArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PedidoProductos.
     * @param {PedidoProductoDeleteManyArgs} args - Arguments to filter PedidoProductos to delete.
     * @example
     * // Delete a few PedidoProductos
     * const { count } = await prisma.pedidoProducto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoProductoDeleteManyArgs>(args?: SelectSubset<T, PedidoProductoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidoProductos
     * const pedidoProducto = await prisma.pedidoProducto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoProductoUpdateManyArgs>(args: SelectSubset<T, PedidoProductoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PedidoProducto.
     * @param {PedidoProductoUpsertArgs} args - Arguments to update or create a PedidoProducto.
     * @example
     * // Update or create a PedidoProducto
     * const pedidoProducto = await prisma.pedidoProducto.upsert({
     *   create: {
     *     // ... data to create a PedidoProducto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidoProducto we want to update
     *   }
     * })
     */
    upsert<T extends PedidoProductoUpsertArgs>(args: SelectSubset<T, PedidoProductoUpsertArgs<ExtArgs>>): Prisma__PedidoProductoClient<$Result.GetResult<Prisma.$PedidoProductoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PedidoProductos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoCountArgs} args - Arguments to filter PedidoProductos to count.
     * @example
     * // Count the number of PedidoProductos
     * const count = await prisma.pedidoProducto.count({
     *   where: {
     *     // ... the filter for the PedidoProductos we want to count
     *   }
     * })
    **/
    count<T extends PedidoProductoCountArgs>(
      args?: Subset<T, PedidoProductoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoProductoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PedidoProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoProductoAggregateArgs>(args: Subset<T, PedidoProductoAggregateArgs>): Prisma.PrismaPromise<GetPedidoProductoAggregateType<T>>

    /**
     * Group by PedidoProducto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoProductoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoProductoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoProductoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoProductoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoProductoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoProductoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PedidoProducto model
   */
  readonly fields: PedidoProductoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidoProducto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoProductoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    producto<T extends ProductoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductoDefaultArgs<ExtArgs>>): Prisma__ProductoClient<$Result.GetResult<Prisma.$ProductoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PedidoProducto model
   */
  interface PedidoProductoFieldRefs {
    readonly id_pedido: FieldRef<"PedidoProducto", 'Int'>
    readonly id_producto: FieldRef<"PedidoProducto", 'Int'>
    readonly cantidad: FieldRef<"PedidoProducto", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PedidoProducto findUnique
   */
  export type PedidoProductoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProducto to fetch.
     */
    where: PedidoProductoWhereUniqueInput
  }

  /**
   * PedidoProducto findUniqueOrThrow
   */
  export type PedidoProductoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProducto to fetch.
     */
    where: PedidoProductoWhereUniqueInput
  }

  /**
   * PedidoProducto findFirst
   */
  export type PedidoProductoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProducto to fetch.
     */
    where?: PedidoProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoProductos to fetch.
     */
    orderBy?: PedidoProductoOrderByWithRelationInput | PedidoProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoProductos.
     */
    cursor?: PedidoProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoProductos.
     */
    distinct?: PedidoProductoScalarFieldEnum | PedidoProductoScalarFieldEnum[]
  }

  /**
   * PedidoProducto findFirstOrThrow
   */
  export type PedidoProductoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProducto to fetch.
     */
    where?: PedidoProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoProductos to fetch.
     */
    orderBy?: PedidoProductoOrderByWithRelationInput | PedidoProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoProductos.
     */
    cursor?: PedidoProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoProductos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoProductos.
     */
    distinct?: PedidoProductoScalarFieldEnum | PedidoProductoScalarFieldEnum[]
  }

  /**
   * PedidoProducto findMany
   */
  export type PedidoProductoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoProductos to fetch.
     */
    where?: PedidoProductoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoProductos to fetch.
     */
    orderBy?: PedidoProductoOrderByWithRelationInput | PedidoProductoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PedidoProductos.
     */
    cursor?: PedidoProductoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoProductos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoProductos.
     */
    skip?: number
    distinct?: PedidoProductoScalarFieldEnum | PedidoProductoScalarFieldEnum[]
  }

  /**
   * PedidoProducto create
   */
  export type PedidoProductoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * The data needed to create a PedidoProducto.
     */
    data: XOR<PedidoProductoCreateInput, PedidoProductoUncheckedCreateInput>
  }

  /**
   * PedidoProducto createMany
   */
  export type PedidoProductoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PedidoProductos.
     */
    data: PedidoProductoCreateManyInput | PedidoProductoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidoProducto update
   */
  export type PedidoProductoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * The data needed to update a PedidoProducto.
     */
    data: XOR<PedidoProductoUpdateInput, PedidoProductoUncheckedUpdateInput>
    /**
     * Choose, which PedidoProducto to update.
     */
    where: PedidoProductoWhereUniqueInput
  }

  /**
   * PedidoProducto updateMany
   */
  export type PedidoProductoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PedidoProductos.
     */
    data: XOR<PedidoProductoUpdateManyMutationInput, PedidoProductoUncheckedUpdateManyInput>
    /**
     * Filter which PedidoProductos to update
     */
    where?: PedidoProductoWhereInput
    /**
     * Limit how many PedidoProductos to update.
     */
    limit?: number
  }

  /**
   * PedidoProducto upsert
   */
  export type PedidoProductoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * The filter to search for the PedidoProducto to update in case it exists.
     */
    where: PedidoProductoWhereUniqueInput
    /**
     * In case the PedidoProducto found by the `where` argument doesn't exist, create a new PedidoProducto with this data.
     */
    create: XOR<PedidoProductoCreateInput, PedidoProductoUncheckedCreateInput>
    /**
     * In case the PedidoProducto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoProductoUpdateInput, PedidoProductoUncheckedUpdateInput>
  }

  /**
   * PedidoProducto delete
   */
  export type PedidoProductoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
    /**
     * Filter which PedidoProducto to delete.
     */
    where: PedidoProductoWhereUniqueInput
  }

  /**
   * PedidoProducto deleteMany
   */
  export type PedidoProductoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoProductos to delete
     */
    where?: PedidoProductoWhereInput
    /**
     * Limit how many PedidoProductos to delete.
     */
    limit?: number
  }

  /**
   * PedidoProducto without action
   */
  export type PedidoProductoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoProducto
     */
    select?: PedidoProductoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoProducto
     */
    omit?: PedidoProductoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoProductoInclude<ExtArgs> | null
  }


  /**
   * Model PaymentPreference
   */

  export type AggregatePaymentPreference = {
    _count: PaymentPreferenceCountAggregateOutputType | null
    _avg: PaymentPreferenceAvgAggregateOutputType | null
    _sum: PaymentPreferenceSumAggregateOutputType | null
    _min: PaymentPreferenceMinAggregateOutputType | null
    _max: PaymentPreferenceMaxAggregateOutputType | null
  }

  export type PaymentPreferenceAvgAggregateOutputType = {
    id_cliente: number | null
    id_pedido: number | null
  }

  export type PaymentPreferenceSumAggregateOutputType = {
    id_cliente: number | null
    id_pedido: number | null
  }

  export type PaymentPreferenceMinAggregateOutputType = {
    preference_id: string | null
    items: string | null
    payer: string | null
    status: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    id_pago: string | null
    id_cliente: number | null
    id_pedido: number | null
    radicado: string | null
  }

  export type PaymentPreferenceMaxAggregateOutputType = {
    preference_id: string | null
    items: string | null
    payer: string | null
    status: string | null
    fecha_creacion: Date | null
    fecha_actualizacion: Date | null
    id_pago: string | null
    id_cliente: number | null
    id_pedido: number | null
    radicado: string | null
  }

  export type PaymentPreferenceCountAggregateOutputType = {
    preference_id: number
    items: number
    payer: number
    status: number
    fecha_creacion: number
    fecha_actualizacion: number
    id_pago: number
    id_cliente: number
    id_pedido: number
    radicado: number
    _all: number
  }


  export type PaymentPreferenceAvgAggregateInputType = {
    id_cliente?: true
    id_pedido?: true
  }

  export type PaymentPreferenceSumAggregateInputType = {
    id_cliente?: true
    id_pedido?: true
  }

  export type PaymentPreferenceMinAggregateInputType = {
    preference_id?: true
    items?: true
    payer?: true
    status?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    id_pago?: true
    id_cliente?: true
    id_pedido?: true
    radicado?: true
  }

  export type PaymentPreferenceMaxAggregateInputType = {
    preference_id?: true
    items?: true
    payer?: true
    status?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    id_pago?: true
    id_cliente?: true
    id_pedido?: true
    radicado?: true
  }

  export type PaymentPreferenceCountAggregateInputType = {
    preference_id?: true
    items?: true
    payer?: true
    status?: true
    fecha_creacion?: true
    fecha_actualizacion?: true
    id_pago?: true
    id_cliente?: true
    id_pedido?: true
    radicado?: true
    _all?: true
  }

  export type PaymentPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPreference to aggregate.
     */
    where?: PaymentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPreferences to fetch.
     */
    orderBy?: PaymentPreferenceOrderByWithRelationInput | PaymentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentPreferences
    **/
    _count?: true | PaymentPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentPreferenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentPreferenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentPreferenceMaxAggregateInputType
  }

  export type GetPaymentPreferenceAggregateType<T extends PaymentPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentPreference[P]>
      : GetScalarType<T[P], AggregatePaymentPreference[P]>
  }




  export type PaymentPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentPreferenceWhereInput
    orderBy?: PaymentPreferenceOrderByWithAggregationInput | PaymentPreferenceOrderByWithAggregationInput[]
    by: PaymentPreferenceScalarFieldEnum[] | PaymentPreferenceScalarFieldEnum
    having?: PaymentPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentPreferenceCountAggregateInputType | true
    _avg?: PaymentPreferenceAvgAggregateInputType
    _sum?: PaymentPreferenceSumAggregateInputType
    _min?: PaymentPreferenceMinAggregateInputType
    _max?: PaymentPreferenceMaxAggregateInputType
  }

  export type PaymentPreferenceGroupByOutputType = {
    preference_id: string
    items: string
    payer: string
    status: string
    fecha_creacion: Date
    fecha_actualizacion: Date | null
    id_pago: string
    id_cliente: number
    id_pedido: number
    radicado: string
    _count: PaymentPreferenceCountAggregateOutputType | null
    _avg: PaymentPreferenceAvgAggregateOutputType | null
    _sum: PaymentPreferenceSumAggregateOutputType | null
    _min: PaymentPreferenceMinAggregateOutputType | null
    _max: PaymentPreferenceMaxAggregateOutputType | null
  }

  type GetPaymentPreferenceGroupByPayload<T extends PaymentPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type PaymentPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    preference_id?: boolean
    items?: boolean
    payer?: boolean
    status?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    id_pago?: boolean
    id_cliente?: boolean
    id_pedido?: boolean
    radicado?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentPreference"]>



  export type PaymentPreferenceSelectScalar = {
    preference_id?: boolean
    items?: boolean
    payer?: boolean
    status?: boolean
    fecha_creacion?: boolean
    fecha_actualizacion?: boolean
    id_pago?: boolean
    id_cliente?: boolean
    id_pedido?: boolean
    radicado?: boolean
  }

  export type PaymentPreferenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"preference_id" | "items" | "payer" | "status" | "fecha_creacion" | "fecha_actualizacion" | "id_pago" | "id_cliente" | "id_pedido" | "radicado", ExtArgs["result"]["paymentPreference"]>
  export type PaymentPreferenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
  }

  export type $PaymentPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentPreference"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      pedido: Prisma.$PedidoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      preference_id: string
      items: string
      payer: string
      status: string
      fecha_creacion: Date
      fecha_actualizacion: Date | null
      id_pago: string
      id_cliente: number
      id_pedido: number
      radicado: string
    }, ExtArgs["result"]["paymentPreference"]>
    composites: {}
  }

  type PaymentPreferenceGetPayload<S extends boolean | null | undefined | PaymentPreferenceDefaultArgs> = $Result.GetResult<Prisma.$PaymentPreferencePayload, S>

  type PaymentPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentPreferenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentPreferenceCountAggregateInputType | true
    }

  export interface PaymentPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentPreference'], meta: { name: 'PaymentPreference' } }
    /**
     * Find zero or one PaymentPreference that matches the filter.
     * @param {PaymentPreferenceFindUniqueArgs} args - Arguments to find a PaymentPreference
     * @example
     * // Get one PaymentPreference
     * const paymentPreference = await prisma.paymentPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentPreferenceFindUniqueArgs>(args: SelectSubset<T, PaymentPreferenceFindUniqueArgs<ExtArgs>>): Prisma__PaymentPreferenceClient<$Result.GetResult<Prisma.$PaymentPreferencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentPreference that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentPreferenceFindUniqueOrThrowArgs} args - Arguments to find a PaymentPreference
     * @example
     * // Get one PaymentPreference
     * const paymentPreference = await prisma.paymentPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentPreferenceClient<$Result.GetResult<Prisma.$PaymentPreferencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPreferenceFindFirstArgs} args - Arguments to find a PaymentPreference
     * @example
     * // Get one PaymentPreference
     * const paymentPreference = await prisma.paymentPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentPreferenceFindFirstArgs>(args?: SelectSubset<T, PaymentPreferenceFindFirstArgs<ExtArgs>>): Prisma__PaymentPreferenceClient<$Result.GetResult<Prisma.$PaymentPreferencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPreferenceFindFirstOrThrowArgs} args - Arguments to find a PaymentPreference
     * @example
     * // Get one PaymentPreference
     * const paymentPreference = await prisma.paymentPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentPreferenceClient<$Result.GetResult<Prisma.$PaymentPreferencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentPreferences
     * const paymentPreferences = await prisma.paymentPreference.findMany()
     * 
     * // Get first 10 PaymentPreferences
     * const paymentPreferences = await prisma.paymentPreference.findMany({ take: 10 })
     * 
     * // Only select the `preference_id`
     * const paymentPreferenceWithPreference_idOnly = await prisma.paymentPreference.findMany({ select: { preference_id: true } })
     * 
     */
    findMany<T extends PaymentPreferenceFindManyArgs>(args?: SelectSubset<T, PaymentPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPreferencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentPreference.
     * @param {PaymentPreferenceCreateArgs} args - Arguments to create a PaymentPreference.
     * @example
     * // Create one PaymentPreference
     * const PaymentPreference = await prisma.paymentPreference.create({
     *   data: {
     *     // ... data to create a PaymentPreference
     *   }
     * })
     * 
     */
    create<T extends PaymentPreferenceCreateArgs>(args: SelectSubset<T, PaymentPreferenceCreateArgs<ExtArgs>>): Prisma__PaymentPreferenceClient<$Result.GetResult<Prisma.$PaymentPreferencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentPreferences.
     * @param {PaymentPreferenceCreateManyArgs} args - Arguments to create many PaymentPreferences.
     * @example
     * // Create many PaymentPreferences
     * const paymentPreference = await prisma.paymentPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentPreferenceCreateManyArgs>(args?: SelectSubset<T, PaymentPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentPreference.
     * @param {PaymentPreferenceDeleteArgs} args - Arguments to delete one PaymentPreference.
     * @example
     * // Delete one PaymentPreference
     * const PaymentPreference = await prisma.paymentPreference.delete({
     *   where: {
     *     // ... filter to delete one PaymentPreference
     *   }
     * })
     * 
     */
    delete<T extends PaymentPreferenceDeleteArgs>(args: SelectSubset<T, PaymentPreferenceDeleteArgs<ExtArgs>>): Prisma__PaymentPreferenceClient<$Result.GetResult<Prisma.$PaymentPreferencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentPreference.
     * @param {PaymentPreferenceUpdateArgs} args - Arguments to update one PaymentPreference.
     * @example
     * // Update one PaymentPreference
     * const paymentPreference = await prisma.paymentPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentPreferenceUpdateArgs>(args: SelectSubset<T, PaymentPreferenceUpdateArgs<ExtArgs>>): Prisma__PaymentPreferenceClient<$Result.GetResult<Prisma.$PaymentPreferencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentPreferences.
     * @param {PaymentPreferenceDeleteManyArgs} args - Arguments to filter PaymentPreferences to delete.
     * @example
     * // Delete a few PaymentPreferences
     * const { count } = await prisma.paymentPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentPreferenceDeleteManyArgs>(args?: SelectSubset<T, PaymentPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentPreferences
     * const paymentPreference = await prisma.paymentPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentPreferenceUpdateManyArgs>(args: SelectSubset<T, PaymentPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentPreference.
     * @param {PaymentPreferenceUpsertArgs} args - Arguments to update or create a PaymentPreference.
     * @example
     * // Update or create a PaymentPreference
     * const paymentPreference = await prisma.paymentPreference.upsert({
     *   create: {
     *     // ... data to create a PaymentPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentPreference we want to update
     *   }
     * })
     */
    upsert<T extends PaymentPreferenceUpsertArgs>(args: SelectSubset<T, PaymentPreferenceUpsertArgs<ExtArgs>>): Prisma__PaymentPreferenceClient<$Result.GetResult<Prisma.$PaymentPreferencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPreferenceCountArgs} args - Arguments to filter PaymentPreferences to count.
     * @example
     * // Count the number of PaymentPreferences
     * const count = await prisma.paymentPreference.count({
     *   where: {
     *     // ... the filter for the PaymentPreferences we want to count
     *   }
     * })
    **/
    count<T extends PaymentPreferenceCountArgs>(
      args?: Subset<T, PaymentPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentPreferenceAggregateArgs>(args: Subset<T, PaymentPreferenceAggregateArgs>): Prisma.PrismaPromise<GetPaymentPreferenceAggregateType<T>>

    /**
     * Group by PaymentPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentPreferenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: PaymentPreferenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentPreference model
   */
  readonly fields: PaymentPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentPreference model
   */
  interface PaymentPreferenceFieldRefs {
    readonly preference_id: FieldRef<"PaymentPreference", 'String'>
    readonly items: FieldRef<"PaymentPreference", 'String'>
    readonly payer: FieldRef<"PaymentPreference", 'String'>
    readonly status: FieldRef<"PaymentPreference", 'String'>
    readonly fecha_creacion: FieldRef<"PaymentPreference", 'DateTime'>
    readonly fecha_actualizacion: FieldRef<"PaymentPreference", 'DateTime'>
    readonly id_pago: FieldRef<"PaymentPreference", 'String'>
    readonly id_cliente: FieldRef<"PaymentPreference", 'Int'>
    readonly id_pedido: FieldRef<"PaymentPreference", 'Int'>
    readonly radicado: FieldRef<"PaymentPreference", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PaymentPreference findUnique
   */
  export type PaymentPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPreference
     */
    select?: PaymentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPreference
     */
    omit?: PaymentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPreference to fetch.
     */
    where: PaymentPreferenceWhereUniqueInput
  }

  /**
   * PaymentPreference findUniqueOrThrow
   */
  export type PaymentPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPreference
     */
    select?: PaymentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPreference
     */
    omit?: PaymentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPreference to fetch.
     */
    where: PaymentPreferenceWhereUniqueInput
  }

  /**
   * PaymentPreference findFirst
   */
  export type PaymentPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPreference
     */
    select?: PaymentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPreference
     */
    omit?: PaymentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPreference to fetch.
     */
    where?: PaymentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPreferences to fetch.
     */
    orderBy?: PaymentPreferenceOrderByWithRelationInput | PaymentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPreferences.
     */
    cursor?: PaymentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPreferences.
     */
    distinct?: PaymentPreferenceScalarFieldEnum | PaymentPreferenceScalarFieldEnum[]
  }

  /**
   * PaymentPreference findFirstOrThrow
   */
  export type PaymentPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPreference
     */
    select?: PaymentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPreference
     */
    omit?: PaymentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPreference to fetch.
     */
    where?: PaymentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPreferences to fetch.
     */
    orderBy?: PaymentPreferenceOrderByWithRelationInput | PaymentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentPreferences.
     */
    cursor?: PaymentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentPreferences.
     */
    distinct?: PaymentPreferenceScalarFieldEnum | PaymentPreferenceScalarFieldEnum[]
  }

  /**
   * PaymentPreference findMany
   */
  export type PaymentPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPreference
     */
    select?: PaymentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPreference
     */
    omit?: PaymentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPreferenceInclude<ExtArgs> | null
    /**
     * Filter, which PaymentPreferences to fetch.
     */
    where?: PaymentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentPreferences to fetch.
     */
    orderBy?: PaymentPreferenceOrderByWithRelationInput | PaymentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentPreferences.
     */
    cursor?: PaymentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentPreferences.
     */
    skip?: number
    distinct?: PaymentPreferenceScalarFieldEnum | PaymentPreferenceScalarFieldEnum[]
  }

  /**
   * PaymentPreference create
   */
  export type PaymentPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPreference
     */
    select?: PaymentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPreference
     */
    omit?: PaymentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentPreference.
     */
    data: XOR<PaymentPreferenceCreateInput, PaymentPreferenceUncheckedCreateInput>
  }

  /**
   * PaymentPreference createMany
   */
  export type PaymentPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentPreferences.
     */
    data: PaymentPreferenceCreateManyInput | PaymentPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentPreference update
   */
  export type PaymentPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPreference
     */
    select?: PaymentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPreference
     */
    omit?: PaymentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPreferenceInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentPreference.
     */
    data: XOR<PaymentPreferenceUpdateInput, PaymentPreferenceUncheckedUpdateInput>
    /**
     * Choose, which PaymentPreference to update.
     */
    where: PaymentPreferenceWhereUniqueInput
  }

  /**
   * PaymentPreference updateMany
   */
  export type PaymentPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentPreferences.
     */
    data: XOR<PaymentPreferenceUpdateManyMutationInput, PaymentPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which PaymentPreferences to update
     */
    where?: PaymentPreferenceWhereInput
    /**
     * Limit how many PaymentPreferences to update.
     */
    limit?: number
  }

  /**
   * PaymentPreference upsert
   */
  export type PaymentPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPreference
     */
    select?: PaymentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPreference
     */
    omit?: PaymentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPreferenceInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentPreference to update in case it exists.
     */
    where: PaymentPreferenceWhereUniqueInput
    /**
     * In case the PaymentPreference found by the `where` argument doesn't exist, create a new PaymentPreference with this data.
     */
    create: XOR<PaymentPreferenceCreateInput, PaymentPreferenceUncheckedCreateInput>
    /**
     * In case the PaymentPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentPreferenceUpdateInput, PaymentPreferenceUncheckedUpdateInput>
  }

  /**
   * PaymentPreference delete
   */
  export type PaymentPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPreference
     */
    select?: PaymentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPreference
     */
    omit?: PaymentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPreferenceInclude<ExtArgs> | null
    /**
     * Filter which PaymentPreference to delete.
     */
    where: PaymentPreferenceWhereUniqueInput
  }

  /**
   * PaymentPreference deleteMany
   */
  export type PaymentPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentPreferences to delete
     */
    where?: PaymentPreferenceWhereInput
    /**
     * Limit how many PaymentPreferences to delete.
     */
    limit?: number
  }

  /**
   * PaymentPreference without action
   */
  export type PaymentPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentPreference
     */
    select?: PaymentPreferenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentPreference
     */
    omit?: PaymentPreferenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentPreferenceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClienteScalarFieldEnum: {
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

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const TelefonoScalarFieldEnum: {
    id_telefono: 'id_telefono',
    númeroTelefono: 'númeroTelefono',
    tipo: 'tipo',
    id_cliente: 'id_cliente'
  };

  export type TelefonoScalarFieldEnum = (typeof TelefonoScalarFieldEnum)[keyof typeof TelefonoScalarFieldEnum]


  export const DireccionScalarFieldEnum: {
    id_Direcipón: 'id_Direcipón',
    barrio: 'barrio',
    calle: 'calle',
    numero: 'numero',
    id_cliente: 'id_cliente'
  };

  export type DireccionScalarFieldEnum = (typeof DireccionScalarFieldEnum)[keyof typeof DireccionScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id_pedido: 'id_pedido',
    estado_pedido: 'estado_pedido',
    fecha_pedido: 'fecha_pedido',
    total_pago: 'total_pago',
    id_cliente: 'id_cliente',
    id_administrador: 'id_administrador'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const PagoScalarFieldEnum: {
    ID_pagos: 'ID_pagos',
    monto_pago: 'monto_pago',
    metodo_pago: 'metodo_pago',
    estado_pago: 'estado_pago',
    id_pedido: 'id_pedido',
    id_cliente: 'id_cliente'
  };

  export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum]


  export const AdministradorScalarFieldEnum: {
    id_administrador: 'id_administrador',
    Nombres: 'Nombres',
    Apellidos: 'Apellidos',
    Email: 'Email',
    contraseña: 'contraseña',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const InventarioScalarFieldEnum: {
    id_inventario: 'id_inventario',
    cantidad: 'cantidad',
    fechaIngreso: 'fechaIngreso',
    fechaSalida: 'fechaSalida',
    fechaRealización: 'fechaRealización',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventarioScalarFieldEnum = (typeof InventarioScalarFieldEnum)[keyof typeof InventarioScalarFieldEnum]


  export const ProveedorScalarFieldEnum: {
    id_proveedor: 'id_proveedor',
    nombres: 'nombres',
    apellidos: 'apellidos',
    Email: 'Email',
    contraseña: 'contraseña',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProveedorScalarFieldEnum = (typeof ProveedorScalarFieldEnum)[keyof typeof ProveedorScalarFieldEnum]


  export const ProductoScalarFieldEnum: {
    id_producto: 'id_producto',
    nombreP: 'nombreP',
    tipo: 'tipo',
    Precio: 'Precio',
    imagen: 'imagen',
    id_inventario: 'id_inventario',
    id_proveedor: 'id_proveedor'
  };

  export type ProductoScalarFieldEnum = (typeof ProductoScalarFieldEnum)[keyof typeof ProductoScalarFieldEnum]


  export const PedidoProductoScalarFieldEnum: {
    id_pedido: 'id_pedido',
    id_producto: 'id_producto',
    cantidad: 'cantidad'
  };

  export type PedidoProductoScalarFieldEnum = (typeof PedidoProductoScalarFieldEnum)[keyof typeof PedidoProductoScalarFieldEnum]


  export const PaymentPreferenceScalarFieldEnum: {
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

  export type PaymentPreferenceScalarFieldEnum = (typeof PaymentPreferenceScalarFieldEnum)[keyof typeof PaymentPreferenceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const ClienteOrderByRelevanceFieldEnum: {
    Nombres: 'Nombres',
    Apellidos: 'Apellidos',
    Email: 'Email',
    googleId: 'googleId',
    role: 'role'
  };

  export type ClienteOrderByRelevanceFieldEnum = (typeof ClienteOrderByRelevanceFieldEnum)[keyof typeof ClienteOrderByRelevanceFieldEnum]


  export const TelefonoOrderByRelevanceFieldEnum: {
    númeroTelefono: 'númeroTelefono',
    tipo: 'tipo'
  };

  export type TelefonoOrderByRelevanceFieldEnum = (typeof TelefonoOrderByRelevanceFieldEnum)[keyof typeof TelefonoOrderByRelevanceFieldEnum]


  export const DireccionOrderByRelevanceFieldEnum: {
    barrio: 'barrio',
    calle: 'calle',
    numero: 'numero'
  };

  export type DireccionOrderByRelevanceFieldEnum = (typeof DireccionOrderByRelevanceFieldEnum)[keyof typeof DireccionOrderByRelevanceFieldEnum]


  export const PedidoOrderByRelevanceFieldEnum: {
    estado_pedido: 'estado_pedido'
  };

  export type PedidoOrderByRelevanceFieldEnum = (typeof PedidoOrderByRelevanceFieldEnum)[keyof typeof PedidoOrderByRelevanceFieldEnum]


  export const PagoOrderByRelevanceFieldEnum: {
    metodo_pago: 'metodo_pago',
    estado_pago: 'estado_pago'
  };

  export type PagoOrderByRelevanceFieldEnum = (typeof PagoOrderByRelevanceFieldEnum)[keyof typeof PagoOrderByRelevanceFieldEnum]


  export const AdministradorOrderByRelevanceFieldEnum: {
    Nombres: 'Nombres',
    Apellidos: 'Apellidos',
    Email: 'Email',
    contraseña: 'contraseña'
  };

  export type AdministradorOrderByRelevanceFieldEnum = (typeof AdministradorOrderByRelevanceFieldEnum)[keyof typeof AdministradorOrderByRelevanceFieldEnum]


  export const ProveedorOrderByRelevanceFieldEnum: {
    nombres: 'nombres',
    apellidos: 'apellidos',
    Email: 'Email'
  };

  export type ProveedorOrderByRelevanceFieldEnum = (typeof ProveedorOrderByRelevanceFieldEnum)[keyof typeof ProveedorOrderByRelevanceFieldEnum]


  export const ProductoOrderByRelevanceFieldEnum: {
    nombreP: 'nombreP',
    tipo: 'tipo'
  };

  export type ProductoOrderByRelevanceFieldEnum = (typeof ProductoOrderByRelevanceFieldEnum)[keyof typeof ProductoOrderByRelevanceFieldEnum]


  export const PaymentPreferenceOrderByRelevanceFieldEnum: {
    preference_id: 'preference_id',
    items: 'items',
    payer: 'payer',
    status: 'status',
    id_pago: 'id_pago',
    radicado: 'radicado'
  };

  export type PaymentPreferenceOrderByRelevanceFieldEnum = (typeof PaymentPreferenceOrderByRelevanceFieldEnum)[keyof typeof PaymentPreferenceOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id_cliente?: IntFilter<"Cliente"> | number
    Nombres?: StringFilter<"Cliente"> | string
    Apellidos?: StringFilter<"Cliente"> | string
    Email?: StringFilter<"Cliente"> | string
    contraseña?: BytesNullableFilter<"Cliente"> | Uint8Array | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    googleId?: StringNullableFilter<"Cliente"> | string | null
    role?: StringFilter<"Cliente"> | string
    direcciones?: DireccionListRelationFilter
    pagos?: PagoListRelationFilter
    pedidos?: PedidoListRelationFilter
    telefonos?: TelefonoListRelationFilter
    paymentPreferences?: PaymentPreferenceListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id_cliente?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    role?: SortOrder
    direcciones?: DireccionOrderByRelationAggregateInput
    pagos?: PagoOrderByRelationAggregateInput
    pedidos?: PedidoOrderByRelationAggregateInput
    telefonos?: TelefonoOrderByRelationAggregateInput
    paymentPreferences?: PaymentPreferenceOrderByRelationAggregateInput
    _relevance?: ClienteOrderByRelevanceInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id_cliente?: number
    Email?: string
    googleId?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    Nombres?: StringFilter<"Cliente"> | string
    Apellidos?: StringFilter<"Cliente"> | string
    contraseña?: BytesNullableFilter<"Cliente"> | Uint8Array | null
    createdAt?: DateTimeFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Cliente"> | Date | string | null
    role?: StringFilter<"Cliente"> | string
    direcciones?: DireccionListRelationFilter
    pagos?: PagoListRelationFilter
    pedidos?: PedidoListRelationFilter
    telefonos?: TelefonoListRelationFilter
    paymentPreferences?: PaymentPreferenceListRelationFilter
  }, "id_cliente" | "Email" | "googleId">

  export type ClienteOrderByWithAggregationInput = {
    id_cliente?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id_cliente?: IntWithAggregatesFilter<"Cliente"> | number
    Nombres?: StringWithAggregatesFilter<"Cliente"> | string
    Apellidos?: StringWithAggregatesFilter<"Cliente"> | string
    Email?: StringWithAggregatesFilter<"Cliente"> | string
    contraseña?: BytesNullableWithAggregatesFilter<"Cliente"> | Uint8Array | null
    createdAt?: DateTimeWithAggregatesFilter<"Cliente"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Cliente"> | Date | string | null
    googleId?: StringNullableWithAggregatesFilter<"Cliente"> | string | null
    role?: StringWithAggregatesFilter<"Cliente"> | string
  }

  export type TelefonoWhereInput = {
    AND?: TelefonoWhereInput | TelefonoWhereInput[]
    OR?: TelefonoWhereInput[]
    NOT?: TelefonoWhereInput | TelefonoWhereInput[]
    id_telefono?: IntFilter<"Telefono"> | number
    númeroTelefono?: StringFilter<"Telefono"> | string
    tipo?: StringFilter<"Telefono"> | string
    id_cliente?: IntFilter<"Telefono"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type TelefonoOrderByWithRelationInput = {
    id_telefono?: SortOrder
    númeroTelefono?: SortOrder
    tipo?: SortOrder
    id_cliente?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    _relevance?: TelefonoOrderByRelevanceInput
  }

  export type TelefonoWhereUniqueInput = Prisma.AtLeast<{
    id_telefono?: number
    AND?: TelefonoWhereInput | TelefonoWhereInput[]
    OR?: TelefonoWhereInput[]
    NOT?: TelefonoWhereInput | TelefonoWhereInput[]
    númeroTelefono?: StringFilter<"Telefono"> | string
    tipo?: StringFilter<"Telefono"> | string
    id_cliente?: IntFilter<"Telefono"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id_telefono">

  export type TelefonoOrderByWithAggregationInput = {
    id_telefono?: SortOrder
    númeroTelefono?: SortOrder
    tipo?: SortOrder
    id_cliente?: SortOrder
    _count?: TelefonoCountOrderByAggregateInput
    _avg?: TelefonoAvgOrderByAggregateInput
    _max?: TelefonoMaxOrderByAggregateInput
    _min?: TelefonoMinOrderByAggregateInput
    _sum?: TelefonoSumOrderByAggregateInput
  }

  export type TelefonoScalarWhereWithAggregatesInput = {
    AND?: TelefonoScalarWhereWithAggregatesInput | TelefonoScalarWhereWithAggregatesInput[]
    OR?: TelefonoScalarWhereWithAggregatesInput[]
    NOT?: TelefonoScalarWhereWithAggregatesInput | TelefonoScalarWhereWithAggregatesInput[]
    id_telefono?: IntWithAggregatesFilter<"Telefono"> | number
    númeroTelefono?: StringWithAggregatesFilter<"Telefono"> | string
    tipo?: StringWithAggregatesFilter<"Telefono"> | string
    id_cliente?: IntWithAggregatesFilter<"Telefono"> | number
  }

  export type DireccionWhereInput = {
    AND?: DireccionWhereInput | DireccionWhereInput[]
    OR?: DireccionWhereInput[]
    NOT?: DireccionWhereInput | DireccionWhereInput[]
    id_Direcipón?: IntFilter<"Direccion"> | number
    barrio?: StringFilter<"Direccion"> | string
    calle?: StringFilter<"Direccion"> | string
    numero?: StringFilter<"Direccion"> | string
    id_cliente?: IntFilter<"Direccion"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type DireccionOrderByWithRelationInput = {
    id_Direcipón?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    id_cliente?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    _relevance?: DireccionOrderByRelevanceInput
  }

  export type DireccionWhereUniqueInput = Prisma.AtLeast<{
    id_Direcipón?: number
    AND?: DireccionWhereInput | DireccionWhereInput[]
    OR?: DireccionWhereInput[]
    NOT?: DireccionWhereInput | DireccionWhereInput[]
    barrio?: StringFilter<"Direccion"> | string
    calle?: StringFilter<"Direccion"> | string
    numero?: StringFilter<"Direccion"> | string
    id_cliente?: IntFilter<"Direccion"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id_Direcipón">

  export type DireccionOrderByWithAggregationInput = {
    id_Direcipón?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    id_cliente?: SortOrder
    _count?: DireccionCountOrderByAggregateInput
    _avg?: DireccionAvgOrderByAggregateInput
    _max?: DireccionMaxOrderByAggregateInput
    _min?: DireccionMinOrderByAggregateInput
    _sum?: DireccionSumOrderByAggregateInput
  }

  export type DireccionScalarWhereWithAggregatesInput = {
    AND?: DireccionScalarWhereWithAggregatesInput | DireccionScalarWhereWithAggregatesInput[]
    OR?: DireccionScalarWhereWithAggregatesInput[]
    NOT?: DireccionScalarWhereWithAggregatesInput | DireccionScalarWhereWithAggregatesInput[]
    id_Direcipón?: IntWithAggregatesFilter<"Direccion"> | number
    barrio?: StringWithAggregatesFilter<"Direccion"> | string
    calle?: StringWithAggregatesFilter<"Direccion"> | string
    numero?: StringWithAggregatesFilter<"Direccion"> | string
    id_cliente?: IntWithAggregatesFilter<"Direccion"> | number
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id_pedido?: IntFilter<"Pedido"> | number
    estado_pedido?: StringFilter<"Pedido"> | string
    fecha_pedido?: DateTimeFilter<"Pedido"> | Date | string
    total_pago?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    id_cliente?: IntFilter<"Pedido"> | number
    id_administrador?: IntFilter<"Pedido"> | number
    pagos?: PagoListRelationFilter
    administrador?: XOR<AdministradorScalarRelationFilter, AdministradorWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    productos?: PedidoProductoListRelationFilter
    paymentPreferences?: PaymentPreferenceListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id_pedido?: SortOrder
    estado_pedido?: SortOrder
    fecha_pedido?: SortOrder
    total_pago?: SortOrder
    id_cliente?: SortOrder
    id_administrador?: SortOrder
    pagos?: PagoOrderByRelationAggregateInput
    administrador?: AdministradorOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
    productos?: PedidoProductoOrderByRelationAggregateInput
    paymentPreferences?: PaymentPreferenceOrderByRelationAggregateInput
    _relevance?: PedidoOrderByRelevanceInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id_pedido?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    estado_pedido?: StringFilter<"Pedido"> | string
    fecha_pedido?: DateTimeFilter<"Pedido"> | Date | string
    total_pago?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    id_cliente?: IntFilter<"Pedido"> | number
    id_administrador?: IntFilter<"Pedido"> | number
    pagos?: PagoListRelationFilter
    administrador?: XOR<AdministradorScalarRelationFilter, AdministradorWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    productos?: PedidoProductoListRelationFilter
    paymentPreferences?: PaymentPreferenceListRelationFilter
  }, "id_pedido">

  export type PedidoOrderByWithAggregationInput = {
    id_pedido?: SortOrder
    estado_pedido?: SortOrder
    fecha_pedido?: SortOrder
    total_pago?: SortOrder
    id_cliente?: SortOrder
    id_administrador?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id_pedido?: IntWithAggregatesFilter<"Pedido"> | number
    estado_pedido?: StringWithAggregatesFilter<"Pedido"> | string
    fecha_pedido?: DateTimeWithAggregatesFilter<"Pedido"> | Date | string
    total_pago?: DecimalWithAggregatesFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    id_cliente?: IntWithAggregatesFilter<"Pedido"> | number
    id_administrador?: IntWithAggregatesFilter<"Pedido"> | number
  }

  export type PagoWhereInput = {
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    ID_pagos?: IntFilter<"Pago"> | number
    monto_pago?: DecimalFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFilter<"Pago"> | string
    estado_pago?: StringFilter<"Pago"> | string
    id_pedido?: IntFilter<"Pago"> | number
    id_cliente?: IntFilter<"Pago"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type PagoOrderByWithRelationInput = {
    ID_pagos?: SortOrder
    monto_pago?: SortOrder
    metodo_pago?: SortOrder
    estado_pago?: SortOrder
    id_pedido?: SortOrder
    id_cliente?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    pedido?: PedidoOrderByWithRelationInput
    _relevance?: PagoOrderByRelevanceInput
  }

  export type PagoWhereUniqueInput = Prisma.AtLeast<{
    ID_pagos?: number
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    monto_pago?: DecimalFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFilter<"Pago"> | string
    estado_pago?: StringFilter<"Pago"> | string
    id_pedido?: IntFilter<"Pago"> | number
    id_cliente?: IntFilter<"Pago"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "ID_pagos">

  export type PagoOrderByWithAggregationInput = {
    ID_pagos?: SortOrder
    monto_pago?: SortOrder
    metodo_pago?: SortOrder
    estado_pago?: SortOrder
    id_pedido?: SortOrder
    id_cliente?: SortOrder
    _count?: PagoCountOrderByAggregateInput
    _avg?: PagoAvgOrderByAggregateInput
    _max?: PagoMaxOrderByAggregateInput
    _min?: PagoMinOrderByAggregateInput
    _sum?: PagoSumOrderByAggregateInput
  }

  export type PagoScalarWhereWithAggregatesInput = {
    AND?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    OR?: PagoScalarWhereWithAggregatesInput[]
    NOT?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    ID_pagos?: IntWithAggregatesFilter<"Pago"> | number
    monto_pago?: DecimalWithAggregatesFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringWithAggregatesFilter<"Pago"> | string
    estado_pago?: StringWithAggregatesFilter<"Pago"> | string
    id_pedido?: IntWithAggregatesFilter<"Pago"> | number
    id_cliente?: IntWithAggregatesFilter<"Pago"> | number
  }

  export type AdministradorWhereInput = {
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    id_administrador?: IntFilter<"Administrador"> | number
    Nombres?: StringFilter<"Administrador"> | string
    Apellidos?: StringFilter<"Administrador"> | string
    Email?: StringFilter<"Administrador"> | string
    contraseña?: StringFilter<"Administrador"> | string
    createdAt?: DateTimeFilter<"Administrador"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Administrador"> | Date | string | null
    pedidos?: PedidoListRelationFilter
  }

  export type AdministradorOrderByWithRelationInput = {
    id_administrador?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    pedidos?: PedidoOrderByRelationAggregateInput
    _relevance?: AdministradorOrderByRelevanceInput
  }

  export type AdministradorWhereUniqueInput = Prisma.AtLeast<{
    id_administrador?: number
    Email?: string
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    Nombres?: StringFilter<"Administrador"> | string
    Apellidos?: StringFilter<"Administrador"> | string
    contraseña?: StringFilter<"Administrador"> | string
    createdAt?: DateTimeFilter<"Administrador"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Administrador"> | Date | string | null
    pedidos?: PedidoListRelationFilter
  }, "id_administrador" | "Email">

  export type AdministradorOrderByWithAggregationInput = {
    id_administrador?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AdministradorCountOrderByAggregateInput
    _avg?: AdministradorAvgOrderByAggregateInput
    _max?: AdministradorMaxOrderByAggregateInput
    _min?: AdministradorMinOrderByAggregateInput
    _sum?: AdministradorSumOrderByAggregateInput
  }

  export type AdministradorScalarWhereWithAggregatesInput = {
    AND?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    OR?: AdministradorScalarWhereWithAggregatesInput[]
    NOT?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    id_administrador?: IntWithAggregatesFilter<"Administrador"> | number
    Nombres?: StringWithAggregatesFilter<"Administrador"> | string
    Apellidos?: StringWithAggregatesFilter<"Administrador"> | string
    Email?: StringWithAggregatesFilter<"Administrador"> | string
    contraseña?: StringWithAggregatesFilter<"Administrador"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Administrador"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Administrador"> | Date | string | null
  }

  export type InventarioWhereInput = {
    AND?: InventarioWhereInput | InventarioWhereInput[]
    OR?: InventarioWhereInput[]
    NOT?: InventarioWhereInput | InventarioWhereInput[]
    id_inventario?: IntFilter<"Inventario"> | number
    cantidad?: IntFilter<"Inventario"> | number
    fechaIngreso?: DateTimeFilter<"Inventario"> | Date | string
    fechaSalida?: DateTimeFilter<"Inventario"> | Date | string
    fechaRealización?: DateTimeFilter<"Inventario"> | Date | string
    createdAt?: DateTimeFilter<"Inventario"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Inventario"> | Date | string | null
    productos?: ProductoListRelationFilter
  }

  export type InventarioOrderByWithRelationInput = {
    id_inventario?: SortOrder
    cantidad?: SortOrder
    fechaIngreso?: SortOrder
    fechaSalida?: SortOrder
    fechaRealización?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    productos?: ProductoOrderByRelationAggregateInput
  }

  export type InventarioWhereUniqueInput = Prisma.AtLeast<{
    id_inventario?: number
    AND?: InventarioWhereInput | InventarioWhereInput[]
    OR?: InventarioWhereInput[]
    NOT?: InventarioWhereInput | InventarioWhereInput[]
    cantidad?: IntFilter<"Inventario"> | number
    fechaIngreso?: DateTimeFilter<"Inventario"> | Date | string
    fechaSalida?: DateTimeFilter<"Inventario"> | Date | string
    fechaRealización?: DateTimeFilter<"Inventario"> | Date | string
    createdAt?: DateTimeFilter<"Inventario"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Inventario"> | Date | string | null
    productos?: ProductoListRelationFilter
  }, "id_inventario">

  export type InventarioOrderByWithAggregationInput = {
    id_inventario?: SortOrder
    cantidad?: SortOrder
    fechaIngreso?: SortOrder
    fechaSalida?: SortOrder
    fechaRealización?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: InventarioCountOrderByAggregateInput
    _avg?: InventarioAvgOrderByAggregateInput
    _max?: InventarioMaxOrderByAggregateInput
    _min?: InventarioMinOrderByAggregateInput
    _sum?: InventarioSumOrderByAggregateInput
  }

  export type InventarioScalarWhereWithAggregatesInput = {
    AND?: InventarioScalarWhereWithAggregatesInput | InventarioScalarWhereWithAggregatesInput[]
    OR?: InventarioScalarWhereWithAggregatesInput[]
    NOT?: InventarioScalarWhereWithAggregatesInput | InventarioScalarWhereWithAggregatesInput[]
    id_inventario?: IntWithAggregatesFilter<"Inventario"> | number
    cantidad?: IntWithAggregatesFilter<"Inventario"> | number
    fechaIngreso?: DateTimeWithAggregatesFilter<"Inventario"> | Date | string
    fechaSalida?: DateTimeWithAggregatesFilter<"Inventario"> | Date | string
    fechaRealización?: DateTimeWithAggregatesFilter<"Inventario"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Inventario"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Inventario"> | Date | string | null
  }

  export type ProveedorWhereInput = {
    AND?: ProveedorWhereInput | ProveedorWhereInput[]
    OR?: ProveedorWhereInput[]
    NOT?: ProveedorWhereInput | ProveedorWhereInput[]
    id_proveedor?: IntFilter<"Proveedor"> | number
    nombres?: StringFilter<"Proveedor"> | string
    apellidos?: StringFilter<"Proveedor"> | string
    Email?: StringFilter<"Proveedor"> | string
    contraseña?: BytesFilter<"Proveedor"> | Uint8Array
    createdAt?: DateTimeFilter<"Proveedor"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Proveedor"> | Date | string | null
    productos?: ProductoListRelationFilter
  }

  export type ProveedorOrderByWithRelationInput = {
    id_proveedor?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    productos?: ProductoOrderByRelationAggregateInput
    _relevance?: ProveedorOrderByRelevanceInput
  }

  export type ProveedorWhereUniqueInput = Prisma.AtLeast<{
    id_proveedor?: number
    Email?: string
    AND?: ProveedorWhereInput | ProveedorWhereInput[]
    OR?: ProveedorWhereInput[]
    NOT?: ProveedorWhereInput | ProveedorWhereInput[]
    nombres?: StringFilter<"Proveedor"> | string
    apellidos?: StringFilter<"Proveedor"> | string
    contraseña?: BytesFilter<"Proveedor"> | Uint8Array
    createdAt?: DateTimeFilter<"Proveedor"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Proveedor"> | Date | string | null
    productos?: ProductoListRelationFilter
  }, "id_proveedor" | "Email">

  export type ProveedorOrderByWithAggregationInput = {
    id_proveedor?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ProveedorCountOrderByAggregateInput
    _avg?: ProveedorAvgOrderByAggregateInput
    _max?: ProveedorMaxOrderByAggregateInput
    _min?: ProveedorMinOrderByAggregateInput
    _sum?: ProveedorSumOrderByAggregateInput
  }

  export type ProveedorScalarWhereWithAggregatesInput = {
    AND?: ProveedorScalarWhereWithAggregatesInput | ProveedorScalarWhereWithAggregatesInput[]
    OR?: ProveedorScalarWhereWithAggregatesInput[]
    NOT?: ProveedorScalarWhereWithAggregatesInput | ProveedorScalarWhereWithAggregatesInput[]
    id_proveedor?: IntWithAggregatesFilter<"Proveedor"> | number
    nombres?: StringWithAggregatesFilter<"Proveedor"> | string
    apellidos?: StringWithAggregatesFilter<"Proveedor"> | string
    Email?: StringWithAggregatesFilter<"Proveedor"> | string
    contraseña?: BytesWithAggregatesFilter<"Proveedor"> | Uint8Array
    createdAt?: DateTimeWithAggregatesFilter<"Proveedor"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Proveedor"> | Date | string | null
  }

  export type ProductoWhereInput = {
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    id_producto?: IntFilter<"Producto"> | number
    nombreP?: StringFilter<"Producto"> | string
    tipo?: StringFilter<"Producto"> | string
    Precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    imagen?: BytesNullableFilter<"Producto"> | Uint8Array | null
    id_inventario?: IntNullableFilter<"Producto"> | number | null
    id_proveedor?: IntNullableFilter<"Producto"> | number | null
    pedidos?: PedidoProductoListRelationFilter
    inventario?: XOR<InventarioNullableScalarRelationFilter, InventarioWhereInput> | null
    proveedor?: XOR<ProveedorNullableScalarRelationFilter, ProveedorWhereInput> | null
  }

  export type ProductoOrderByWithRelationInput = {
    id_producto?: SortOrder
    nombreP?: SortOrder
    tipo?: SortOrder
    Precio?: SortOrder
    imagen?: SortOrderInput | SortOrder
    id_inventario?: SortOrderInput | SortOrder
    id_proveedor?: SortOrderInput | SortOrder
    pedidos?: PedidoProductoOrderByRelationAggregateInput
    inventario?: InventarioOrderByWithRelationInput
    proveedor?: ProveedorOrderByWithRelationInput
    _relevance?: ProductoOrderByRelevanceInput
  }

  export type ProductoWhereUniqueInput = Prisma.AtLeast<{
    id_producto?: number
    AND?: ProductoWhereInput | ProductoWhereInput[]
    OR?: ProductoWhereInput[]
    NOT?: ProductoWhereInput | ProductoWhereInput[]
    nombreP?: StringFilter<"Producto"> | string
    tipo?: StringFilter<"Producto"> | string
    Precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    imagen?: BytesNullableFilter<"Producto"> | Uint8Array | null
    id_inventario?: IntNullableFilter<"Producto"> | number | null
    id_proveedor?: IntNullableFilter<"Producto"> | number | null
    pedidos?: PedidoProductoListRelationFilter
    inventario?: XOR<InventarioNullableScalarRelationFilter, InventarioWhereInput> | null
    proveedor?: XOR<ProveedorNullableScalarRelationFilter, ProveedorWhereInput> | null
  }, "id_producto">

  export type ProductoOrderByWithAggregationInput = {
    id_producto?: SortOrder
    nombreP?: SortOrder
    tipo?: SortOrder
    Precio?: SortOrder
    imagen?: SortOrderInput | SortOrder
    id_inventario?: SortOrderInput | SortOrder
    id_proveedor?: SortOrderInput | SortOrder
    _count?: ProductoCountOrderByAggregateInput
    _avg?: ProductoAvgOrderByAggregateInput
    _max?: ProductoMaxOrderByAggregateInput
    _min?: ProductoMinOrderByAggregateInput
    _sum?: ProductoSumOrderByAggregateInput
  }

  export type ProductoScalarWhereWithAggregatesInput = {
    AND?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    OR?: ProductoScalarWhereWithAggregatesInput[]
    NOT?: ProductoScalarWhereWithAggregatesInput | ProductoScalarWhereWithAggregatesInput[]
    id_producto?: IntWithAggregatesFilter<"Producto"> | number
    nombreP?: StringWithAggregatesFilter<"Producto"> | string
    tipo?: StringWithAggregatesFilter<"Producto"> | string
    Precio?: DecimalWithAggregatesFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    imagen?: BytesNullableWithAggregatesFilter<"Producto"> | Uint8Array | null
    id_inventario?: IntNullableWithAggregatesFilter<"Producto"> | number | null
    id_proveedor?: IntNullableWithAggregatesFilter<"Producto"> | number | null
  }

  export type PedidoProductoWhereInput = {
    AND?: PedidoProductoWhereInput | PedidoProductoWhereInput[]
    OR?: PedidoProductoWhereInput[]
    NOT?: PedidoProductoWhereInput | PedidoProductoWhereInput[]
    id_pedido?: IntFilter<"PedidoProducto"> | number
    id_producto?: IntFilter<"PedidoProducto"> | number
    cantidad?: IntFilter<"PedidoProducto"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }

  export type PedidoProductoOrderByWithRelationInput = {
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    producto?: ProductoOrderByWithRelationInput
  }

  export type PedidoProductoWhereUniqueInput = Prisma.AtLeast<{
    id_pedido_id_producto?: PedidoProductoId_pedidoId_productoCompoundUniqueInput
    AND?: PedidoProductoWhereInput | PedidoProductoWhereInput[]
    OR?: PedidoProductoWhereInput[]
    NOT?: PedidoProductoWhereInput | PedidoProductoWhereInput[]
    id_pedido?: IntFilter<"PedidoProducto"> | number
    id_producto?: IntFilter<"PedidoProducto"> | number
    cantidad?: IntFilter<"PedidoProducto"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    producto?: XOR<ProductoScalarRelationFilter, ProductoWhereInput>
  }, "id_pedido_id_producto">

  export type PedidoProductoOrderByWithAggregationInput = {
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
    _count?: PedidoProductoCountOrderByAggregateInput
    _avg?: PedidoProductoAvgOrderByAggregateInput
    _max?: PedidoProductoMaxOrderByAggregateInput
    _min?: PedidoProductoMinOrderByAggregateInput
    _sum?: PedidoProductoSumOrderByAggregateInput
  }

  export type PedidoProductoScalarWhereWithAggregatesInput = {
    AND?: PedidoProductoScalarWhereWithAggregatesInput | PedidoProductoScalarWhereWithAggregatesInput[]
    OR?: PedidoProductoScalarWhereWithAggregatesInput[]
    NOT?: PedidoProductoScalarWhereWithAggregatesInput | PedidoProductoScalarWhereWithAggregatesInput[]
    id_pedido?: IntWithAggregatesFilter<"PedidoProducto"> | number
    id_producto?: IntWithAggregatesFilter<"PedidoProducto"> | number
    cantidad?: IntWithAggregatesFilter<"PedidoProducto"> | number
  }

  export type PaymentPreferenceWhereInput = {
    AND?: PaymentPreferenceWhereInput | PaymentPreferenceWhereInput[]
    OR?: PaymentPreferenceWhereInput[]
    NOT?: PaymentPreferenceWhereInput | PaymentPreferenceWhereInput[]
    preference_id?: StringFilter<"PaymentPreference"> | string
    items?: StringFilter<"PaymentPreference"> | string
    payer?: StringFilter<"PaymentPreference"> | string
    status?: StringFilter<"PaymentPreference"> | string
    fecha_creacion?: DateTimeFilter<"PaymentPreference"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"PaymentPreference"> | Date | string | null
    id_pago?: StringFilter<"PaymentPreference"> | string
    id_cliente?: IntFilter<"PaymentPreference"> | number
    id_pedido?: IntFilter<"PaymentPreference"> | number
    radicado?: StringFilter<"PaymentPreference"> | string
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }

  export type PaymentPreferenceOrderByWithRelationInput = {
    preference_id?: SortOrder
    items?: SortOrder
    payer?: SortOrder
    status?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    id_pago?: SortOrder
    id_cliente?: SortOrder
    id_pedido?: SortOrder
    radicado?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    pedido?: PedidoOrderByWithRelationInput
    _relevance?: PaymentPreferenceOrderByRelevanceInput
  }

  export type PaymentPreferenceWhereUniqueInput = Prisma.AtLeast<{
    preference_id?: string
    id_pago?: string
    radicado?: string
    AND?: PaymentPreferenceWhereInput | PaymentPreferenceWhereInput[]
    OR?: PaymentPreferenceWhereInput[]
    NOT?: PaymentPreferenceWhereInput | PaymentPreferenceWhereInput[]
    items?: StringFilter<"PaymentPreference"> | string
    payer?: StringFilter<"PaymentPreference"> | string
    status?: StringFilter<"PaymentPreference"> | string
    fecha_creacion?: DateTimeFilter<"PaymentPreference"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"PaymentPreference"> | Date | string | null
    id_cliente?: IntFilter<"PaymentPreference"> | number
    id_pedido?: IntFilter<"PaymentPreference"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
  }, "id_pago" | "preference_id" | "radicado">

  export type PaymentPreferenceOrderByWithAggregationInput = {
    preference_id?: SortOrder
    items?: SortOrder
    payer?: SortOrder
    status?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrderInput | SortOrder
    id_pago?: SortOrder
    id_cliente?: SortOrder
    id_pedido?: SortOrder
    radicado?: SortOrder
    _count?: PaymentPreferenceCountOrderByAggregateInput
    _avg?: PaymentPreferenceAvgOrderByAggregateInput
    _max?: PaymentPreferenceMaxOrderByAggregateInput
    _min?: PaymentPreferenceMinOrderByAggregateInput
    _sum?: PaymentPreferenceSumOrderByAggregateInput
  }

  export type PaymentPreferenceScalarWhereWithAggregatesInput = {
    AND?: PaymentPreferenceScalarWhereWithAggregatesInput | PaymentPreferenceScalarWhereWithAggregatesInput[]
    OR?: PaymentPreferenceScalarWhereWithAggregatesInput[]
    NOT?: PaymentPreferenceScalarWhereWithAggregatesInput | PaymentPreferenceScalarWhereWithAggregatesInput[]
    preference_id?: StringWithAggregatesFilter<"PaymentPreference"> | string
    items?: StringWithAggregatesFilter<"PaymentPreference"> | string
    payer?: StringWithAggregatesFilter<"PaymentPreference"> | string
    status?: StringWithAggregatesFilter<"PaymentPreference"> | string
    fecha_creacion?: DateTimeWithAggregatesFilter<"PaymentPreference"> | Date | string
    fecha_actualizacion?: DateTimeNullableWithAggregatesFilter<"PaymentPreference"> | Date | string | null
    id_pago?: StringWithAggregatesFilter<"PaymentPreference"> | string
    id_cliente?: IntWithAggregatesFilter<"PaymentPreference"> | number
    id_pedido?: IntWithAggregatesFilter<"PaymentPreference"> | number
    radicado?: StringWithAggregatesFilter<"PaymentPreference"> | string
  }

  export type ClienteCreateInput = {
    Nombres: string
    Apellidos: string
    Email: string
    contraseña?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    googleId?: string | null
    role?: string
    direcciones?: DireccionCreateNestedManyWithoutClienteInput
    pagos?: PagoCreateNestedManyWithoutClienteInput
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
    telefonos?: TelefonoCreateNestedManyWithoutClienteInput
    paymentPreferences?: PaymentPreferenceCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id_cliente?: number
    Nombres: string
    Apellidos: string
    Email: string
    contraseña?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    googleId?: string | null
    role?: string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutClienteInput
    pagos?: PagoUncheckedCreateNestedManyWithoutClienteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
    telefonos?: TelefonoUncheckedCreateNestedManyWithoutClienteInput
    paymentPreferences?: PaymentPreferenceUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUpdateManyWithoutClienteNestedInput
    pagos?: PagoUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
    telefonos?: TelefonoUpdateManyWithoutClienteNestedInput
    paymentPreferences?: PaymentPreferenceUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUncheckedUpdateManyWithoutClienteNestedInput
    pagos?: PagoUncheckedUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
    telefonos?: TelefonoUncheckedUpdateManyWithoutClienteNestedInput
    paymentPreferences?: PaymentPreferenceUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id_cliente?: number
    Nombres: string
    Apellidos: string
    Email: string
    contraseña?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    googleId?: string | null
    role?: string
  }

  export type ClienteUpdateManyMutationInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type TelefonoCreateInput = {
    númeroTelefono: string
    tipo: string
    cliente: ClienteCreateNestedOneWithoutTelefonosInput
  }

  export type TelefonoUncheckedCreateInput = {
    id_telefono?: number
    númeroTelefono: string
    tipo: string
    id_cliente: number
  }

  export type TelefonoUpdateInput = {
    númeroTelefono?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutTelefonosNestedInput
  }

  export type TelefonoUncheckedUpdateInput = {
    id_telefono?: IntFieldUpdateOperationsInput | number
    númeroTelefono?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type TelefonoCreateManyInput = {
    id_telefono?: number
    númeroTelefono: string
    tipo: string
    id_cliente: number
  }

  export type TelefonoUpdateManyMutationInput = {
    númeroTelefono?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TelefonoUncheckedUpdateManyInput = {
    id_telefono?: IntFieldUpdateOperationsInput | number
    númeroTelefono?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type DireccionCreateInput = {
    barrio: string
    calle: string
    numero: string
    cliente: ClienteCreateNestedOneWithoutDireccionesInput
  }

  export type DireccionUncheckedCreateInput = {
    id_Direcipón?: number
    barrio: string
    calle: string
    numero: string
    id_cliente: number
  }

  export type DireccionUpdateInput = {
    barrio?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutDireccionesNestedInput
  }

  export type DireccionUncheckedUpdateInput = {
    id_Direcipón?: IntFieldUpdateOperationsInput | number
    barrio?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type DireccionCreateManyInput = {
    id_Direcipón?: number
    barrio: string
    calle: string
    numero: string
    id_cliente: number
  }

  export type DireccionUpdateManyMutationInput = {
    barrio?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type DireccionUncheckedUpdateManyInput = {
    id_Direcipón?: IntFieldUpdateOperationsInput | number
    barrio?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateInput = {
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    pagos?: PagoCreateNestedManyWithoutPedidoInput
    administrador: AdministradorCreateNestedOneWithoutPedidosInput
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    productos?: PedidoProductoCreateNestedManyWithoutPedidoInput
    paymentPreferences?: PaymentPreferenceCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id_pedido?: number
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    id_cliente: number
    id_administrador: number
    pagos?: PagoUncheckedCreateNestedManyWithoutPedidoInput
    productos?: PedidoProductoUncheckedCreateNestedManyWithoutPedidoInput
    paymentPreferences?: PaymentPreferenceUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pagos?: PagoUpdateManyWithoutPedidoNestedInput
    administrador?: AdministradorUpdateOneRequiredWithoutPedidosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    productos?: PedidoProductoUpdateManyWithoutPedidoNestedInput
    paymentPreferences?: PaymentPreferenceUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_administrador?: IntFieldUpdateOperationsInput | number
    pagos?: PagoUncheckedUpdateManyWithoutPedidoNestedInput
    productos?: PedidoProductoUncheckedUpdateManyWithoutPedidoNestedInput
    paymentPreferences?: PaymentPreferenceUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id_pedido?: number
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    id_cliente: number
    id_administrador: number
  }

  export type PedidoUpdateManyMutationInput = {
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_administrador?: IntFieldUpdateOperationsInput | number
  }

  export type PagoCreateInput = {
    monto_pago: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    estado_pago: string
    cliente: ClienteCreateNestedOneWithoutPagosInput
    pedido: PedidoCreateNestedOneWithoutPagosInput
  }

  export type PagoUncheckedCreateInput = {
    ID_pagos?: number
    monto_pago: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    estado_pago: string
    id_pedido: number
    id_cliente: number
  }

  export type PagoUpdateInput = {
    monto_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    estado_pago?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutPagosNestedInput
    pedido?: PedidoUpdateOneRequiredWithoutPagosNestedInput
  }

  export type PagoUncheckedUpdateInput = {
    ID_pagos?: IntFieldUpdateOperationsInput | number
    monto_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    estado_pago?: StringFieldUpdateOperationsInput | string
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type PagoCreateManyInput = {
    ID_pagos?: number
    monto_pago: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    estado_pago: string
    id_pedido: number
    id_cliente: number
  }

  export type PagoUpdateManyMutationInput = {
    monto_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    estado_pago?: StringFieldUpdateOperationsInput | string
  }

  export type PagoUncheckedUpdateManyInput = {
    ID_pagos?: IntFieldUpdateOperationsInput | number
    monto_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    estado_pago?: StringFieldUpdateOperationsInput | string
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type AdministradorCreateInput = {
    Nombres: string
    Apellidos: string
    Email: string
    contraseña: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pedidos?: PedidoCreateNestedManyWithoutAdministradorInput
  }

  export type AdministradorUncheckedCreateInput = {
    id_administrador?: number
    Nombres: string
    Apellidos: string
    Email: string
    contraseña: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    pedidos?: PedidoUncheckedCreateNestedManyWithoutAdministradorInput
  }

  export type AdministradorUpdateInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: PedidoUpdateManyWithoutAdministradorNestedInput
  }

  export type AdministradorUncheckedUpdateInput = {
    id_administrador?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pedidos?: PedidoUncheckedUpdateManyWithoutAdministradorNestedInput
  }

  export type AdministradorCreateManyInput = {
    id_administrador?: number
    Nombres: string
    Apellidos: string
    Email: string
    contraseña: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AdministradorUpdateManyMutationInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdministradorUncheckedUpdateManyInput = {
    id_administrador?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventarioCreateInput = {
    cantidad: number
    fechaIngreso: Date | string
    fechaSalida: Date | string
    fechaRealización: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    productos?: ProductoCreateNestedManyWithoutInventarioInput
  }

  export type InventarioUncheckedCreateInput = {
    id_inventario?: number
    cantidad: number
    fechaIngreso: Date | string
    fechaSalida: Date | string
    fechaRealización: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    productos?: ProductoUncheckedCreateNestedManyWithoutInventarioInput
  }

  export type InventarioUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    fechaIngreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRealización?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: ProductoUpdateManyWithoutInventarioNestedInput
  }

  export type InventarioUncheckedUpdateInput = {
    id_inventario?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    fechaIngreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRealización?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: ProductoUncheckedUpdateManyWithoutInventarioNestedInput
  }

  export type InventarioCreateManyInput = {
    id_inventario?: number
    cantidad: number
    fechaIngreso: Date | string
    fechaSalida: Date | string
    fechaRealización: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type InventarioUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    fechaIngreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRealización?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventarioUncheckedUpdateManyInput = {
    id_inventario?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    fechaIngreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRealización?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProveedorCreateInput = {
    nombres: string
    apellidos: string
    Email: string
    contraseña: Uint8Array
    createdAt?: Date | string
    updatedAt?: Date | string | null
    productos?: ProductoCreateNestedManyWithoutProveedorInput
  }

  export type ProveedorUncheckedCreateInput = {
    id_proveedor?: number
    nombres: string
    apellidos: string
    Email: string
    contraseña: Uint8Array
    createdAt?: Date | string
    updatedAt?: Date | string | null
    productos?: ProductoUncheckedCreateNestedManyWithoutProveedorInput
  }

  export type ProveedorUpdateInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: BytesFieldUpdateOperationsInput | Uint8Array
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: ProductoUpdateManyWithoutProveedorNestedInput
  }

  export type ProveedorUncheckedUpdateInput = {
    id_proveedor?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: BytesFieldUpdateOperationsInput | Uint8Array
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productos?: ProductoUncheckedUpdateManyWithoutProveedorNestedInput
  }

  export type ProveedorCreateManyInput = {
    id_proveedor?: number
    nombres: string
    apellidos: string
    Email: string
    contraseña: Uint8Array
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProveedorUpdateManyMutationInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: BytesFieldUpdateOperationsInput | Uint8Array
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProveedorUncheckedUpdateManyInput = {
    id_proveedor?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: BytesFieldUpdateOperationsInput | Uint8Array
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductoCreateInput = {
    nombreP: string
    tipo: string
    Precio: Decimal | DecimalJsLike | number | string
    imagen?: Uint8Array | null
    pedidos?: PedidoProductoCreateNestedManyWithoutProductoInput
    inventario?: InventarioCreateNestedOneWithoutProductosInput
    proveedor?: ProveedorCreateNestedOneWithoutProductosInput
  }

  export type ProductoUncheckedCreateInput = {
    id_producto?: number
    nombreP: string
    tipo: string
    Precio: Decimal | DecimalJsLike | number | string
    imagen?: Uint8Array | null
    id_inventario?: number | null
    id_proveedor?: number | null
    pedidos?: PedidoProductoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoUpdateInput = {
    nombreP?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    pedidos?: PedidoProductoUpdateManyWithoutProductoNestedInput
    inventario?: InventarioUpdateOneWithoutProductosNestedInput
    proveedor?: ProveedorUpdateOneWithoutProductosNestedInput
  }

  export type ProductoUncheckedUpdateInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombreP?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    id_inventario?: NullableIntFieldUpdateOperationsInput | number | null
    id_proveedor?: NullableIntFieldUpdateOperationsInput | number | null
    pedidos?: PedidoProductoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoCreateManyInput = {
    id_producto?: number
    nombreP: string
    tipo: string
    Precio: Decimal | DecimalJsLike | number | string
    imagen?: Uint8Array | null
    id_inventario?: number | null
    id_proveedor?: number | null
  }

  export type ProductoUpdateManyMutationInput = {
    nombreP?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
  }

  export type ProductoUncheckedUpdateManyInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombreP?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    id_inventario?: NullableIntFieldUpdateOperationsInput | number | null
    id_proveedor?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidoProductoCreateInput = {
    cantidad: number
    pedido: PedidoCreateNestedOneWithoutProductosInput
    producto: ProductoCreateNestedOneWithoutPedidosInput
  }

  export type PedidoProductoUncheckedCreateInput = {
    id_pedido: number
    id_producto: number
    cantidad: number
  }

  export type PedidoProductoUpdateInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutProductosNestedInput
    producto?: ProductoUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoProductoUncheckedUpdateInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProductoCreateManyInput = {
    id_pedido: number
    id_producto: number
    cantidad: number
  }

  export type PedidoProductoUpdateManyMutationInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProductoUncheckedUpdateManyInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentPreferenceCreateInput = {
    preference_id: string
    items: string
    payer: string
    status: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    id_pago: string
    radicado: string
    cliente: ClienteCreateNestedOneWithoutPaymentPreferencesInput
    pedido: PedidoCreateNestedOneWithoutPaymentPreferencesInput
  }

  export type PaymentPreferenceUncheckedCreateInput = {
    preference_id: string
    items: string
    payer: string
    status: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    id_pago: string
    id_cliente: number
    id_pedido: number
    radicado: string
  }

  export type PaymentPreferenceUpdateInput = {
    preference_id?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    payer?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_pago?: StringFieldUpdateOperationsInput | string
    radicado?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutPaymentPreferencesNestedInput
    pedido?: PedidoUpdateOneRequiredWithoutPaymentPreferencesNestedInput
  }

  export type PaymentPreferenceUncheckedUpdateInput = {
    preference_id?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    payer?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_pago?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    radicado?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentPreferenceCreateManyInput = {
    preference_id: string
    items: string
    payer: string
    status: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    id_pago: string
    id_cliente: number
    id_pedido: number
    radicado: string
  }

  export type PaymentPreferenceUpdateManyMutationInput = {
    preference_id?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    payer?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_pago?: StringFieldUpdateOperationsInput | string
    radicado?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentPreferenceUncheckedUpdateManyInput = {
    preference_id?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    payer?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_pago?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_pedido?: IntFieldUpdateOperationsInput | number
    radicado?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DireccionListRelationFilter = {
    every?: DireccionWhereInput
    some?: DireccionWhereInput
    none?: DireccionWhereInput
  }

  export type PagoListRelationFilter = {
    every?: PagoWhereInput
    some?: PagoWhereInput
    none?: PagoWhereInput
  }

  export type PedidoListRelationFilter = {
    every?: PedidoWhereInput
    some?: PedidoWhereInput
    none?: PedidoWhereInput
  }

  export type TelefonoListRelationFilter = {
    every?: TelefonoWhereInput
    some?: TelefonoWhereInput
    none?: TelefonoWhereInput
  }

  export type PaymentPreferenceListRelationFilter = {
    every?: PaymentPreferenceWhereInput
    some?: PaymentPreferenceWhereInput
    none?: PaymentPreferenceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DireccionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TelefonoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentPreferenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteOrderByRelevanceInput = {
    fields: ClienteOrderByRelevanceFieldEnum | ClienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ClienteCountOrderByAggregateInput = {
    id_cliente?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleId?: SortOrder
    role?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id_cliente?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id_cliente?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleId?: SortOrder
    role?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id_cliente?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    googleId?: SortOrder
    role?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id_cliente?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type TelefonoOrderByRelevanceInput = {
    fields: TelefonoOrderByRelevanceFieldEnum | TelefonoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TelefonoCountOrderByAggregateInput = {
    id_telefono?: SortOrder
    númeroTelefono?: SortOrder
    tipo?: SortOrder
    id_cliente?: SortOrder
  }

  export type TelefonoAvgOrderByAggregateInput = {
    id_telefono?: SortOrder
    id_cliente?: SortOrder
  }

  export type TelefonoMaxOrderByAggregateInput = {
    id_telefono?: SortOrder
    númeroTelefono?: SortOrder
    tipo?: SortOrder
    id_cliente?: SortOrder
  }

  export type TelefonoMinOrderByAggregateInput = {
    id_telefono?: SortOrder
    númeroTelefono?: SortOrder
    tipo?: SortOrder
    id_cliente?: SortOrder
  }

  export type TelefonoSumOrderByAggregateInput = {
    id_telefono?: SortOrder
    id_cliente?: SortOrder
  }

  export type DireccionOrderByRelevanceInput = {
    fields: DireccionOrderByRelevanceFieldEnum | DireccionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DireccionCountOrderByAggregateInput = {
    id_Direcipón?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    id_cliente?: SortOrder
  }

  export type DireccionAvgOrderByAggregateInput = {
    id_Direcipón?: SortOrder
    id_cliente?: SortOrder
  }

  export type DireccionMaxOrderByAggregateInput = {
    id_Direcipón?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    id_cliente?: SortOrder
  }

  export type DireccionMinOrderByAggregateInput = {
    id_Direcipón?: SortOrder
    barrio?: SortOrder
    calle?: SortOrder
    numero?: SortOrder
    id_cliente?: SortOrder
  }

  export type DireccionSumOrderByAggregateInput = {
    id_Direcipón?: SortOrder
    id_cliente?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type AdministradorScalarRelationFilter = {
    is?: AdministradorWhereInput
    isNot?: AdministradorWhereInput
  }

  export type PedidoProductoListRelationFilter = {
    every?: PedidoProductoWhereInput
    some?: PedidoProductoWhereInput
    none?: PedidoProductoWhereInput
  }

  export type PedidoProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PedidoOrderByRelevanceInput = {
    fields: PedidoOrderByRelevanceFieldEnum | PedidoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PedidoCountOrderByAggregateInput = {
    id_pedido?: SortOrder
    estado_pedido?: SortOrder
    fecha_pedido?: SortOrder
    total_pago?: SortOrder
    id_cliente?: SortOrder
    id_administrador?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id_pedido?: SortOrder
    total_pago?: SortOrder
    id_cliente?: SortOrder
    id_administrador?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id_pedido?: SortOrder
    estado_pedido?: SortOrder
    fecha_pedido?: SortOrder
    total_pago?: SortOrder
    id_cliente?: SortOrder
    id_administrador?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id_pedido?: SortOrder
    estado_pedido?: SortOrder
    fecha_pedido?: SortOrder
    total_pago?: SortOrder
    id_cliente?: SortOrder
    id_administrador?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id_pedido?: SortOrder
    total_pago?: SortOrder
    id_cliente?: SortOrder
    id_administrador?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type PagoOrderByRelevanceInput = {
    fields: PagoOrderByRelevanceFieldEnum | PagoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PagoCountOrderByAggregateInput = {
    ID_pagos?: SortOrder
    monto_pago?: SortOrder
    metodo_pago?: SortOrder
    estado_pago?: SortOrder
    id_pedido?: SortOrder
    id_cliente?: SortOrder
  }

  export type PagoAvgOrderByAggregateInput = {
    ID_pagos?: SortOrder
    monto_pago?: SortOrder
    id_pedido?: SortOrder
    id_cliente?: SortOrder
  }

  export type PagoMaxOrderByAggregateInput = {
    ID_pagos?: SortOrder
    monto_pago?: SortOrder
    metodo_pago?: SortOrder
    estado_pago?: SortOrder
    id_pedido?: SortOrder
    id_cliente?: SortOrder
  }

  export type PagoMinOrderByAggregateInput = {
    ID_pagos?: SortOrder
    monto_pago?: SortOrder
    metodo_pago?: SortOrder
    estado_pago?: SortOrder
    id_pedido?: SortOrder
    id_cliente?: SortOrder
  }

  export type PagoSumOrderByAggregateInput = {
    ID_pagos?: SortOrder
    monto_pago?: SortOrder
    id_pedido?: SortOrder
    id_cliente?: SortOrder
  }

  export type AdministradorOrderByRelevanceInput = {
    fields: AdministradorOrderByRelevanceFieldEnum | AdministradorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdministradorCountOrderByAggregateInput = {
    id_administrador?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorAvgOrderByAggregateInput = {
    id_administrador?: SortOrder
  }

  export type AdministradorMaxOrderByAggregateInput = {
    id_administrador?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorMinOrderByAggregateInput = {
    id_administrador?: SortOrder
    Nombres?: SortOrder
    Apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministradorSumOrderByAggregateInput = {
    id_administrador?: SortOrder
  }

  export type ProductoListRelationFilter = {
    every?: ProductoWhereInput
    some?: ProductoWhereInput
    none?: ProductoWhereInput
  }

  export type ProductoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventarioCountOrderByAggregateInput = {
    id_inventario?: SortOrder
    cantidad?: SortOrder
    fechaIngreso?: SortOrder
    fechaSalida?: SortOrder
    fechaRealización?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventarioAvgOrderByAggregateInput = {
    id_inventario?: SortOrder
    cantidad?: SortOrder
  }

  export type InventarioMaxOrderByAggregateInput = {
    id_inventario?: SortOrder
    cantidad?: SortOrder
    fechaIngreso?: SortOrder
    fechaSalida?: SortOrder
    fechaRealización?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventarioMinOrderByAggregateInput = {
    id_inventario?: SortOrder
    cantidad?: SortOrder
    fechaIngreso?: SortOrder
    fechaSalida?: SortOrder
    fechaRealización?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventarioSumOrderByAggregateInput = {
    id_inventario?: SortOrder
    cantidad?: SortOrder
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type ProveedorOrderByRelevanceInput = {
    fields: ProveedorOrderByRelevanceFieldEnum | ProveedorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProveedorCountOrderByAggregateInput = {
    id_proveedor?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProveedorAvgOrderByAggregateInput = {
    id_proveedor?: SortOrder
  }

  export type ProveedorMaxOrderByAggregateInput = {
    id_proveedor?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProveedorMinOrderByAggregateInput = {
    id_proveedor?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    Email?: SortOrder
    contraseña?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProveedorSumOrderByAggregateInput = {
    id_proveedor?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type InventarioNullableScalarRelationFilter = {
    is?: InventarioWhereInput | null
    isNot?: InventarioWhereInput | null
  }

  export type ProveedorNullableScalarRelationFilter = {
    is?: ProveedorWhereInput | null
    isNot?: ProveedorWhereInput | null
  }

  export type ProductoOrderByRelevanceInput = {
    fields: ProductoOrderByRelevanceFieldEnum | ProductoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductoCountOrderByAggregateInput = {
    id_producto?: SortOrder
    nombreP?: SortOrder
    tipo?: SortOrder
    Precio?: SortOrder
    imagen?: SortOrder
    id_inventario?: SortOrder
    id_proveedor?: SortOrder
  }

  export type ProductoAvgOrderByAggregateInput = {
    id_producto?: SortOrder
    Precio?: SortOrder
    id_inventario?: SortOrder
    id_proveedor?: SortOrder
  }

  export type ProductoMaxOrderByAggregateInput = {
    id_producto?: SortOrder
    nombreP?: SortOrder
    tipo?: SortOrder
    Precio?: SortOrder
    imagen?: SortOrder
    id_inventario?: SortOrder
    id_proveedor?: SortOrder
  }

  export type ProductoMinOrderByAggregateInput = {
    id_producto?: SortOrder
    nombreP?: SortOrder
    tipo?: SortOrder
    Precio?: SortOrder
    imagen?: SortOrder
    id_inventario?: SortOrder
    id_proveedor?: SortOrder
  }

  export type ProductoSumOrderByAggregateInput = {
    id_producto?: SortOrder
    Precio?: SortOrder
    id_inventario?: SortOrder
    id_proveedor?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ProductoScalarRelationFilter = {
    is?: ProductoWhereInput
    isNot?: ProductoWhereInput
  }

  export type PedidoProductoId_pedidoId_productoCompoundUniqueInput = {
    id_pedido: number
    id_producto: number
  }

  export type PedidoProductoCountOrderByAggregateInput = {
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
  }

  export type PedidoProductoAvgOrderByAggregateInput = {
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
  }

  export type PedidoProductoMaxOrderByAggregateInput = {
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
  }

  export type PedidoProductoMinOrderByAggregateInput = {
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
  }

  export type PedidoProductoSumOrderByAggregateInput = {
    id_pedido?: SortOrder
    id_producto?: SortOrder
    cantidad?: SortOrder
  }

  export type PaymentPreferenceOrderByRelevanceInput = {
    fields: PaymentPreferenceOrderByRelevanceFieldEnum | PaymentPreferenceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentPreferenceCountOrderByAggregateInput = {
    preference_id?: SortOrder
    items?: SortOrder
    payer?: SortOrder
    status?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    id_pago?: SortOrder
    id_cliente?: SortOrder
    id_pedido?: SortOrder
    radicado?: SortOrder
  }

  export type PaymentPreferenceAvgOrderByAggregateInput = {
    id_cliente?: SortOrder
    id_pedido?: SortOrder
  }

  export type PaymentPreferenceMaxOrderByAggregateInput = {
    preference_id?: SortOrder
    items?: SortOrder
    payer?: SortOrder
    status?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    id_pago?: SortOrder
    id_cliente?: SortOrder
    id_pedido?: SortOrder
    radicado?: SortOrder
  }

  export type PaymentPreferenceMinOrderByAggregateInput = {
    preference_id?: SortOrder
    items?: SortOrder
    payer?: SortOrder
    status?: SortOrder
    fecha_creacion?: SortOrder
    fecha_actualizacion?: SortOrder
    id_pago?: SortOrder
    id_cliente?: SortOrder
    id_pedido?: SortOrder
    radicado?: SortOrder
  }

  export type PaymentPreferenceSumOrderByAggregateInput = {
    id_cliente?: SortOrder
    id_pedido?: SortOrder
  }

  export type DireccionCreateNestedManyWithoutClienteInput = {
    create?: XOR<DireccionCreateWithoutClienteInput, DireccionUncheckedCreateWithoutClienteInput> | DireccionCreateWithoutClienteInput[] | DireccionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutClienteInput | DireccionCreateOrConnectWithoutClienteInput[]
    createMany?: DireccionCreateManyClienteInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type PagoCreateNestedManyWithoutClienteInput = {
    create?: XOR<PagoCreateWithoutClienteInput, PagoUncheckedCreateWithoutClienteInput> | PagoCreateWithoutClienteInput[] | PagoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutClienteInput | PagoCreateOrConnectWithoutClienteInput[]
    createMany?: PagoCreateManyClienteInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type PedidoCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type TelefonoCreateNestedManyWithoutClienteInput = {
    create?: XOR<TelefonoCreateWithoutClienteInput, TelefonoUncheckedCreateWithoutClienteInput> | TelefonoCreateWithoutClienteInput[] | TelefonoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TelefonoCreateOrConnectWithoutClienteInput | TelefonoCreateOrConnectWithoutClienteInput[]
    createMany?: TelefonoCreateManyClienteInputEnvelope
    connect?: TelefonoWhereUniqueInput | TelefonoWhereUniqueInput[]
  }

  export type PaymentPreferenceCreateNestedManyWithoutClienteInput = {
    create?: XOR<PaymentPreferenceCreateWithoutClienteInput, PaymentPreferenceUncheckedCreateWithoutClienteInput> | PaymentPreferenceCreateWithoutClienteInput[] | PaymentPreferenceUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PaymentPreferenceCreateOrConnectWithoutClienteInput | PaymentPreferenceCreateOrConnectWithoutClienteInput[]
    createMany?: PaymentPreferenceCreateManyClienteInputEnvelope
    connect?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
  }

  export type DireccionUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<DireccionCreateWithoutClienteInput, DireccionUncheckedCreateWithoutClienteInput> | DireccionCreateWithoutClienteInput[] | DireccionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutClienteInput | DireccionCreateOrConnectWithoutClienteInput[]
    createMany?: DireccionCreateManyClienteInputEnvelope
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
  }

  export type PagoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PagoCreateWithoutClienteInput, PagoUncheckedCreateWithoutClienteInput> | PagoCreateWithoutClienteInput[] | PagoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutClienteInput | PagoCreateOrConnectWithoutClienteInput[]
    createMany?: PagoCreateManyClienteInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type TelefonoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<TelefonoCreateWithoutClienteInput, TelefonoUncheckedCreateWithoutClienteInput> | TelefonoCreateWithoutClienteInput[] | TelefonoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TelefonoCreateOrConnectWithoutClienteInput | TelefonoCreateOrConnectWithoutClienteInput[]
    createMany?: TelefonoCreateManyClienteInputEnvelope
    connect?: TelefonoWhereUniqueInput | TelefonoWhereUniqueInput[]
  }

  export type PaymentPreferenceUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<PaymentPreferenceCreateWithoutClienteInput, PaymentPreferenceUncheckedCreateWithoutClienteInput> | PaymentPreferenceCreateWithoutClienteInput[] | PaymentPreferenceUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PaymentPreferenceCreateOrConnectWithoutClienteInput | PaymentPreferenceCreateOrConnectWithoutClienteInput[]
    createMany?: PaymentPreferenceCreateManyClienteInputEnvelope
    connect?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DireccionUpdateManyWithoutClienteNestedInput = {
    create?: XOR<DireccionCreateWithoutClienteInput, DireccionUncheckedCreateWithoutClienteInput> | DireccionCreateWithoutClienteInput[] | DireccionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutClienteInput | DireccionCreateOrConnectWithoutClienteInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutClienteInput | DireccionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: DireccionCreateManyClienteInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutClienteInput | DireccionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutClienteInput | DireccionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type PagoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PagoCreateWithoutClienteInput, PagoUncheckedCreateWithoutClienteInput> | PagoCreateWithoutClienteInput[] | PagoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutClienteInput | PagoCreateOrConnectWithoutClienteInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutClienteInput | PagoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PagoCreateManyClienteInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutClienteInput | PagoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutClienteInput | PagoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type PedidoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type TelefonoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<TelefonoCreateWithoutClienteInput, TelefonoUncheckedCreateWithoutClienteInput> | TelefonoCreateWithoutClienteInput[] | TelefonoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TelefonoCreateOrConnectWithoutClienteInput | TelefonoCreateOrConnectWithoutClienteInput[]
    upsert?: TelefonoUpsertWithWhereUniqueWithoutClienteInput | TelefonoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: TelefonoCreateManyClienteInputEnvelope
    set?: TelefonoWhereUniqueInput | TelefonoWhereUniqueInput[]
    disconnect?: TelefonoWhereUniqueInput | TelefonoWhereUniqueInput[]
    delete?: TelefonoWhereUniqueInput | TelefonoWhereUniqueInput[]
    connect?: TelefonoWhereUniqueInput | TelefonoWhereUniqueInput[]
    update?: TelefonoUpdateWithWhereUniqueWithoutClienteInput | TelefonoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: TelefonoUpdateManyWithWhereWithoutClienteInput | TelefonoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: TelefonoScalarWhereInput | TelefonoScalarWhereInput[]
  }

  export type PaymentPreferenceUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PaymentPreferenceCreateWithoutClienteInput, PaymentPreferenceUncheckedCreateWithoutClienteInput> | PaymentPreferenceCreateWithoutClienteInput[] | PaymentPreferenceUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PaymentPreferenceCreateOrConnectWithoutClienteInput | PaymentPreferenceCreateOrConnectWithoutClienteInput[]
    upsert?: PaymentPreferenceUpsertWithWhereUniqueWithoutClienteInput | PaymentPreferenceUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PaymentPreferenceCreateManyClienteInputEnvelope
    set?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    disconnect?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    delete?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    connect?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    update?: PaymentPreferenceUpdateWithWhereUniqueWithoutClienteInput | PaymentPreferenceUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PaymentPreferenceUpdateManyWithWhereWithoutClienteInput | PaymentPreferenceUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PaymentPreferenceScalarWhereInput | PaymentPreferenceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DireccionUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<DireccionCreateWithoutClienteInput, DireccionUncheckedCreateWithoutClienteInput> | DireccionCreateWithoutClienteInput[] | DireccionUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: DireccionCreateOrConnectWithoutClienteInput | DireccionCreateOrConnectWithoutClienteInput[]
    upsert?: DireccionUpsertWithWhereUniqueWithoutClienteInput | DireccionUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: DireccionCreateManyClienteInputEnvelope
    set?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    disconnect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    delete?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    connect?: DireccionWhereUniqueInput | DireccionWhereUniqueInput[]
    update?: DireccionUpdateWithWhereUniqueWithoutClienteInput | DireccionUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: DireccionUpdateManyWithWhereWithoutClienteInput | DireccionUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
  }

  export type PagoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PagoCreateWithoutClienteInput, PagoUncheckedCreateWithoutClienteInput> | PagoCreateWithoutClienteInput[] | PagoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutClienteInput | PagoCreateOrConnectWithoutClienteInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutClienteInput | PagoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PagoCreateManyClienteInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutClienteInput | PagoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutClienteInput | PagoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput> | PedidoCreateWithoutClienteInput[] | PedidoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutClienteInput | PedidoCreateOrConnectWithoutClienteInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutClienteInput | PedidoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PedidoCreateManyClienteInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutClienteInput | PedidoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutClienteInput | PedidoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type TelefonoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<TelefonoCreateWithoutClienteInput, TelefonoUncheckedCreateWithoutClienteInput> | TelefonoCreateWithoutClienteInput[] | TelefonoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: TelefonoCreateOrConnectWithoutClienteInput | TelefonoCreateOrConnectWithoutClienteInput[]
    upsert?: TelefonoUpsertWithWhereUniqueWithoutClienteInput | TelefonoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: TelefonoCreateManyClienteInputEnvelope
    set?: TelefonoWhereUniqueInput | TelefonoWhereUniqueInput[]
    disconnect?: TelefonoWhereUniqueInput | TelefonoWhereUniqueInput[]
    delete?: TelefonoWhereUniqueInput | TelefonoWhereUniqueInput[]
    connect?: TelefonoWhereUniqueInput | TelefonoWhereUniqueInput[]
    update?: TelefonoUpdateWithWhereUniqueWithoutClienteInput | TelefonoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: TelefonoUpdateManyWithWhereWithoutClienteInput | TelefonoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: TelefonoScalarWhereInput | TelefonoScalarWhereInput[]
  }

  export type PaymentPreferenceUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<PaymentPreferenceCreateWithoutClienteInput, PaymentPreferenceUncheckedCreateWithoutClienteInput> | PaymentPreferenceCreateWithoutClienteInput[] | PaymentPreferenceUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: PaymentPreferenceCreateOrConnectWithoutClienteInput | PaymentPreferenceCreateOrConnectWithoutClienteInput[]
    upsert?: PaymentPreferenceUpsertWithWhereUniqueWithoutClienteInput | PaymentPreferenceUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: PaymentPreferenceCreateManyClienteInputEnvelope
    set?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    disconnect?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    delete?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    connect?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    update?: PaymentPreferenceUpdateWithWhereUniqueWithoutClienteInput | PaymentPreferenceUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: PaymentPreferenceUpdateManyWithWhereWithoutClienteInput | PaymentPreferenceUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: PaymentPreferenceScalarWhereInput | PaymentPreferenceScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutTelefonosInput = {
    create?: XOR<ClienteCreateWithoutTelefonosInput, ClienteUncheckedCreateWithoutTelefonosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutTelefonosInput
    connect?: ClienteWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutTelefonosNestedInput = {
    create?: XOR<ClienteCreateWithoutTelefonosInput, ClienteUncheckedCreateWithoutTelefonosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutTelefonosInput
    upsert?: ClienteUpsertWithoutTelefonosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutTelefonosInput, ClienteUpdateWithoutTelefonosInput>, ClienteUncheckedUpdateWithoutTelefonosInput>
  }

  export type ClienteCreateNestedOneWithoutDireccionesInput = {
    create?: XOR<ClienteCreateWithoutDireccionesInput, ClienteUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutDireccionesInput
    connect?: ClienteWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutDireccionesNestedInput = {
    create?: XOR<ClienteCreateWithoutDireccionesInput, ClienteUncheckedCreateWithoutDireccionesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutDireccionesInput
    upsert?: ClienteUpsertWithoutDireccionesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutDireccionesInput, ClienteUpdateWithoutDireccionesInput>, ClienteUncheckedUpdateWithoutDireccionesInput>
  }

  export type PagoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PagoCreateWithoutPedidoInput, PagoUncheckedCreateWithoutPedidoInput> | PagoCreateWithoutPedidoInput[] | PagoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutPedidoInput | PagoCreateOrConnectWithoutPedidoInput[]
    createMany?: PagoCreateManyPedidoInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type AdministradorCreateNestedOneWithoutPedidosInput = {
    create?: XOR<AdministradorCreateWithoutPedidosInput, AdministradorUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutPedidosInput
    connect?: AdministradorWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutPedidosInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
  }

  export type PedidoProductoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoProductoCreateWithoutPedidoInput, PedidoProductoUncheckedCreateWithoutPedidoInput> | PedidoProductoCreateWithoutPedidoInput[] | PedidoProductoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutPedidoInput | PedidoProductoCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoProductoCreateManyPedidoInputEnvelope
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
  }

  export type PaymentPreferenceCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PaymentPreferenceCreateWithoutPedidoInput, PaymentPreferenceUncheckedCreateWithoutPedidoInput> | PaymentPreferenceCreateWithoutPedidoInput[] | PaymentPreferenceUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PaymentPreferenceCreateOrConnectWithoutPedidoInput | PaymentPreferenceCreateOrConnectWithoutPedidoInput[]
    createMany?: PaymentPreferenceCreateManyPedidoInputEnvelope
    connect?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
  }

  export type PagoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PagoCreateWithoutPedidoInput, PagoUncheckedCreateWithoutPedidoInput> | PagoCreateWithoutPedidoInput[] | PagoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutPedidoInput | PagoCreateOrConnectWithoutPedidoInput[]
    createMany?: PagoCreateManyPedidoInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type PedidoProductoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoProductoCreateWithoutPedidoInput, PedidoProductoUncheckedCreateWithoutPedidoInput> | PedidoProductoCreateWithoutPedidoInput[] | PedidoProductoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutPedidoInput | PedidoProductoCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoProductoCreateManyPedidoInputEnvelope
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
  }

  export type PaymentPreferenceUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PaymentPreferenceCreateWithoutPedidoInput, PaymentPreferenceUncheckedCreateWithoutPedidoInput> | PaymentPreferenceCreateWithoutPedidoInput[] | PaymentPreferenceUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PaymentPreferenceCreateOrConnectWithoutPedidoInput | PaymentPreferenceCreateOrConnectWithoutPedidoInput[]
    createMany?: PaymentPreferenceCreateManyPedidoInputEnvelope
    connect?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PagoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PagoCreateWithoutPedidoInput, PagoUncheckedCreateWithoutPedidoInput> | PagoCreateWithoutPedidoInput[] | PagoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutPedidoInput | PagoCreateOrConnectWithoutPedidoInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutPedidoInput | PagoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PagoCreateManyPedidoInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutPedidoInput | PagoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutPedidoInput | PagoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type AdministradorUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<AdministradorCreateWithoutPedidosInput, AdministradorUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutPedidosInput
    upsert?: AdministradorUpsertWithoutPedidosInput
    connect?: AdministradorWhereUniqueInput
    update?: XOR<XOR<AdministradorUpdateToOneWithWhereWithoutPedidosInput, AdministradorUpdateWithoutPedidosInput>, AdministradorUncheckedUpdateWithoutPedidosInput>
  }

  export type ClienteUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPedidosInput
    upsert?: ClienteUpsertWithoutPedidosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPedidosInput, ClienteUpdateWithoutPedidosInput>, ClienteUncheckedUpdateWithoutPedidosInput>
  }

  export type PedidoProductoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoProductoCreateWithoutPedidoInput, PedidoProductoUncheckedCreateWithoutPedidoInput> | PedidoProductoCreateWithoutPedidoInput[] | PedidoProductoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutPedidoInput | PedidoProductoCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoProductoUpsertWithWhereUniqueWithoutPedidoInput | PedidoProductoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoProductoCreateManyPedidoInputEnvelope
    set?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    disconnect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    delete?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    update?: PedidoProductoUpdateWithWhereUniqueWithoutPedidoInput | PedidoProductoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoProductoUpdateManyWithWhereWithoutPedidoInput | PedidoProductoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoProductoScalarWhereInput | PedidoProductoScalarWhereInput[]
  }

  export type PaymentPreferenceUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PaymentPreferenceCreateWithoutPedidoInput, PaymentPreferenceUncheckedCreateWithoutPedidoInput> | PaymentPreferenceCreateWithoutPedidoInput[] | PaymentPreferenceUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PaymentPreferenceCreateOrConnectWithoutPedidoInput | PaymentPreferenceCreateOrConnectWithoutPedidoInput[]
    upsert?: PaymentPreferenceUpsertWithWhereUniqueWithoutPedidoInput | PaymentPreferenceUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PaymentPreferenceCreateManyPedidoInputEnvelope
    set?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    disconnect?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    delete?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    connect?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    update?: PaymentPreferenceUpdateWithWhereUniqueWithoutPedidoInput | PaymentPreferenceUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PaymentPreferenceUpdateManyWithWhereWithoutPedidoInput | PaymentPreferenceUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PaymentPreferenceScalarWhereInput | PaymentPreferenceScalarWhereInput[]
  }

  export type PagoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PagoCreateWithoutPedidoInput, PagoUncheckedCreateWithoutPedidoInput> | PagoCreateWithoutPedidoInput[] | PagoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutPedidoInput | PagoCreateOrConnectWithoutPedidoInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutPedidoInput | PagoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PagoCreateManyPedidoInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutPedidoInput | PagoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutPedidoInput | PagoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type PedidoProductoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoProductoCreateWithoutPedidoInput, PedidoProductoUncheckedCreateWithoutPedidoInput> | PedidoProductoCreateWithoutPedidoInput[] | PedidoProductoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutPedidoInput | PedidoProductoCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoProductoUpsertWithWhereUniqueWithoutPedidoInput | PedidoProductoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoProductoCreateManyPedidoInputEnvelope
    set?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    disconnect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    delete?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    update?: PedidoProductoUpdateWithWhereUniqueWithoutPedidoInput | PedidoProductoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoProductoUpdateManyWithWhereWithoutPedidoInput | PedidoProductoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoProductoScalarWhereInput | PedidoProductoScalarWhereInput[]
  }

  export type PaymentPreferenceUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PaymentPreferenceCreateWithoutPedidoInput, PaymentPreferenceUncheckedCreateWithoutPedidoInput> | PaymentPreferenceCreateWithoutPedidoInput[] | PaymentPreferenceUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PaymentPreferenceCreateOrConnectWithoutPedidoInput | PaymentPreferenceCreateOrConnectWithoutPedidoInput[]
    upsert?: PaymentPreferenceUpsertWithWhereUniqueWithoutPedidoInput | PaymentPreferenceUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PaymentPreferenceCreateManyPedidoInputEnvelope
    set?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    disconnect?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    delete?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    connect?: PaymentPreferenceWhereUniqueInput | PaymentPreferenceWhereUniqueInput[]
    update?: PaymentPreferenceUpdateWithWhereUniqueWithoutPedidoInput | PaymentPreferenceUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PaymentPreferenceUpdateManyWithWhereWithoutPedidoInput | PaymentPreferenceUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PaymentPreferenceScalarWhereInput | PaymentPreferenceScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutPagosInput = {
    create?: XOR<ClienteCreateWithoutPagosInput, ClienteUncheckedCreateWithoutPagosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPagosInput
    connect?: ClienteWhereUniqueInput
  }

  export type PedidoCreateNestedOneWithoutPagosInput = {
    create?: XOR<PedidoCreateWithoutPagosInput, PedidoUncheckedCreateWithoutPagosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPagosInput
    connect?: PedidoWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutPagosNestedInput = {
    create?: XOR<ClienteCreateWithoutPagosInput, ClienteUncheckedCreateWithoutPagosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPagosInput
    upsert?: ClienteUpsertWithoutPagosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPagosInput, ClienteUpdateWithoutPagosInput>, ClienteUncheckedUpdateWithoutPagosInput>
  }

  export type PedidoUpdateOneRequiredWithoutPagosNestedInput = {
    create?: XOR<PedidoCreateWithoutPagosInput, PedidoUncheckedCreateWithoutPagosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPagosInput
    upsert?: PedidoUpsertWithoutPagosInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutPagosInput, PedidoUpdateWithoutPagosInput>, PedidoUncheckedUpdateWithoutPagosInput>
  }

  export type PedidoCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<PedidoCreateWithoutAdministradorInput, PedidoUncheckedCreateWithoutAdministradorInput> | PedidoCreateWithoutAdministradorInput[] | PedidoUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutAdministradorInput | PedidoCreateOrConnectWithoutAdministradorInput[]
    createMany?: PedidoCreateManyAdministradorInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUncheckedCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<PedidoCreateWithoutAdministradorInput, PedidoUncheckedCreateWithoutAdministradorInput> | PedidoCreateWithoutAdministradorInput[] | PedidoUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutAdministradorInput | PedidoCreateOrConnectWithoutAdministradorInput[]
    createMany?: PedidoCreateManyAdministradorInputEnvelope
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
  }

  export type PedidoUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<PedidoCreateWithoutAdministradorInput, PedidoUncheckedCreateWithoutAdministradorInput> | PedidoCreateWithoutAdministradorInput[] | PedidoUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutAdministradorInput | PedidoCreateOrConnectWithoutAdministradorInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutAdministradorInput | PedidoUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: PedidoCreateManyAdministradorInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutAdministradorInput | PedidoUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutAdministradorInput | PedidoUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type PedidoUncheckedUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<PedidoCreateWithoutAdministradorInput, PedidoUncheckedCreateWithoutAdministradorInput> | PedidoCreateWithoutAdministradorInput[] | PedidoUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: PedidoCreateOrConnectWithoutAdministradorInput | PedidoCreateOrConnectWithoutAdministradorInput[]
    upsert?: PedidoUpsertWithWhereUniqueWithoutAdministradorInput | PedidoUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: PedidoCreateManyAdministradorInputEnvelope
    set?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    disconnect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    delete?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    connect?: PedidoWhereUniqueInput | PedidoWhereUniqueInput[]
    update?: PedidoUpdateWithWhereUniqueWithoutAdministradorInput | PedidoUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: PedidoUpdateManyWithWhereWithoutAdministradorInput | PedidoUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
  }

  export type ProductoCreateNestedManyWithoutInventarioInput = {
    create?: XOR<ProductoCreateWithoutInventarioInput, ProductoUncheckedCreateWithoutInventarioInput> | ProductoCreateWithoutInventarioInput[] | ProductoUncheckedCreateWithoutInventarioInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutInventarioInput | ProductoCreateOrConnectWithoutInventarioInput[]
    createMany?: ProductoCreateManyInventarioInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutInventarioInput = {
    create?: XOR<ProductoCreateWithoutInventarioInput, ProductoUncheckedCreateWithoutInventarioInput> | ProductoCreateWithoutInventarioInput[] | ProductoUncheckedCreateWithoutInventarioInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutInventarioInput | ProductoCreateOrConnectWithoutInventarioInput[]
    createMany?: ProductoCreateManyInventarioInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUpdateManyWithoutInventarioNestedInput = {
    create?: XOR<ProductoCreateWithoutInventarioInput, ProductoUncheckedCreateWithoutInventarioInput> | ProductoCreateWithoutInventarioInput[] | ProductoUncheckedCreateWithoutInventarioInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutInventarioInput | ProductoCreateOrConnectWithoutInventarioInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutInventarioInput | ProductoUpsertWithWhereUniqueWithoutInventarioInput[]
    createMany?: ProductoCreateManyInventarioInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutInventarioInput | ProductoUpdateWithWhereUniqueWithoutInventarioInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutInventarioInput | ProductoUpdateManyWithWhereWithoutInventarioInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoUncheckedUpdateManyWithoutInventarioNestedInput = {
    create?: XOR<ProductoCreateWithoutInventarioInput, ProductoUncheckedCreateWithoutInventarioInput> | ProductoCreateWithoutInventarioInput[] | ProductoUncheckedCreateWithoutInventarioInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutInventarioInput | ProductoCreateOrConnectWithoutInventarioInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutInventarioInput | ProductoUpsertWithWhereUniqueWithoutInventarioInput[]
    createMany?: ProductoCreateManyInventarioInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutInventarioInput | ProductoUpdateWithWhereUniqueWithoutInventarioInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutInventarioInput | ProductoUpdateManyWithWhereWithoutInventarioInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoCreateNestedManyWithoutProveedorInput = {
    create?: XOR<ProductoCreateWithoutProveedorInput, ProductoUncheckedCreateWithoutProveedorInput> | ProductoCreateWithoutProveedorInput[] | ProductoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutProveedorInput | ProductoCreateOrConnectWithoutProveedorInput[]
    createMany?: ProductoCreateManyProveedorInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type ProductoUncheckedCreateNestedManyWithoutProveedorInput = {
    create?: XOR<ProductoCreateWithoutProveedorInput, ProductoUncheckedCreateWithoutProveedorInput> | ProductoCreateWithoutProveedorInput[] | ProductoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutProveedorInput | ProductoCreateOrConnectWithoutProveedorInput[]
    createMany?: ProductoCreateManyProveedorInputEnvelope
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type ProductoUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<ProductoCreateWithoutProveedorInput, ProductoUncheckedCreateWithoutProveedorInput> | ProductoCreateWithoutProveedorInput[] | ProductoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutProveedorInput | ProductoCreateOrConnectWithoutProveedorInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutProveedorInput | ProductoUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: ProductoCreateManyProveedorInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutProveedorInput | ProductoUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutProveedorInput | ProductoUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type ProductoUncheckedUpdateManyWithoutProveedorNestedInput = {
    create?: XOR<ProductoCreateWithoutProveedorInput, ProductoUncheckedCreateWithoutProveedorInput> | ProductoCreateWithoutProveedorInput[] | ProductoUncheckedCreateWithoutProveedorInput[]
    connectOrCreate?: ProductoCreateOrConnectWithoutProveedorInput | ProductoCreateOrConnectWithoutProveedorInput[]
    upsert?: ProductoUpsertWithWhereUniqueWithoutProveedorInput | ProductoUpsertWithWhereUniqueWithoutProveedorInput[]
    createMany?: ProductoCreateManyProveedorInputEnvelope
    set?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    disconnect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    delete?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    connect?: ProductoWhereUniqueInput | ProductoWhereUniqueInput[]
    update?: ProductoUpdateWithWhereUniqueWithoutProveedorInput | ProductoUpdateWithWhereUniqueWithoutProveedorInput[]
    updateMany?: ProductoUpdateManyWithWhereWithoutProveedorInput | ProductoUpdateManyWithWhereWithoutProveedorInput[]
    deleteMany?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
  }

  export type PedidoProductoCreateNestedManyWithoutProductoInput = {
    create?: XOR<PedidoProductoCreateWithoutProductoInput, PedidoProductoUncheckedCreateWithoutProductoInput> | PedidoProductoCreateWithoutProductoInput[] | PedidoProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutProductoInput | PedidoProductoCreateOrConnectWithoutProductoInput[]
    createMany?: PedidoProductoCreateManyProductoInputEnvelope
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
  }

  export type InventarioCreateNestedOneWithoutProductosInput = {
    create?: XOR<InventarioCreateWithoutProductosInput, InventarioUncheckedCreateWithoutProductosInput>
    connectOrCreate?: InventarioCreateOrConnectWithoutProductosInput
    connect?: InventarioWhereUniqueInput
  }

  export type ProveedorCreateNestedOneWithoutProductosInput = {
    create?: XOR<ProveedorCreateWithoutProductosInput, ProveedorUncheckedCreateWithoutProductosInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutProductosInput
    connect?: ProveedorWhereUniqueInput
  }

  export type PedidoProductoUncheckedCreateNestedManyWithoutProductoInput = {
    create?: XOR<PedidoProductoCreateWithoutProductoInput, PedidoProductoUncheckedCreateWithoutProductoInput> | PedidoProductoCreateWithoutProductoInput[] | PedidoProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutProductoInput | PedidoProductoCreateOrConnectWithoutProductoInput[]
    createMany?: PedidoProductoCreateManyProductoInputEnvelope
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
  }

  export type PedidoProductoUpdateManyWithoutProductoNestedInput = {
    create?: XOR<PedidoProductoCreateWithoutProductoInput, PedidoProductoUncheckedCreateWithoutProductoInput> | PedidoProductoCreateWithoutProductoInput[] | PedidoProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutProductoInput | PedidoProductoCreateOrConnectWithoutProductoInput[]
    upsert?: PedidoProductoUpsertWithWhereUniqueWithoutProductoInput | PedidoProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: PedidoProductoCreateManyProductoInputEnvelope
    set?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    disconnect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    delete?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    update?: PedidoProductoUpdateWithWhereUniqueWithoutProductoInput | PedidoProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: PedidoProductoUpdateManyWithWhereWithoutProductoInput | PedidoProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: PedidoProductoScalarWhereInput | PedidoProductoScalarWhereInput[]
  }

  export type InventarioUpdateOneWithoutProductosNestedInput = {
    create?: XOR<InventarioCreateWithoutProductosInput, InventarioUncheckedCreateWithoutProductosInput>
    connectOrCreate?: InventarioCreateOrConnectWithoutProductosInput
    upsert?: InventarioUpsertWithoutProductosInput
    disconnect?: InventarioWhereInput | boolean
    delete?: InventarioWhereInput | boolean
    connect?: InventarioWhereUniqueInput
    update?: XOR<XOR<InventarioUpdateToOneWithWhereWithoutProductosInput, InventarioUpdateWithoutProductosInput>, InventarioUncheckedUpdateWithoutProductosInput>
  }

  export type ProveedorUpdateOneWithoutProductosNestedInput = {
    create?: XOR<ProveedorCreateWithoutProductosInput, ProveedorUncheckedCreateWithoutProductosInput>
    connectOrCreate?: ProveedorCreateOrConnectWithoutProductosInput
    upsert?: ProveedorUpsertWithoutProductosInput
    disconnect?: ProveedorWhereInput | boolean
    delete?: ProveedorWhereInput | boolean
    connect?: ProveedorWhereUniqueInput
    update?: XOR<XOR<ProveedorUpdateToOneWithWhereWithoutProductosInput, ProveedorUpdateWithoutProductosInput>, ProveedorUncheckedUpdateWithoutProductosInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PedidoProductoUncheckedUpdateManyWithoutProductoNestedInput = {
    create?: XOR<PedidoProductoCreateWithoutProductoInput, PedidoProductoUncheckedCreateWithoutProductoInput> | PedidoProductoCreateWithoutProductoInput[] | PedidoProductoUncheckedCreateWithoutProductoInput[]
    connectOrCreate?: PedidoProductoCreateOrConnectWithoutProductoInput | PedidoProductoCreateOrConnectWithoutProductoInput[]
    upsert?: PedidoProductoUpsertWithWhereUniqueWithoutProductoInput | PedidoProductoUpsertWithWhereUniqueWithoutProductoInput[]
    createMany?: PedidoProductoCreateManyProductoInputEnvelope
    set?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    disconnect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    delete?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    connect?: PedidoProductoWhereUniqueInput | PedidoProductoWhereUniqueInput[]
    update?: PedidoProductoUpdateWithWhereUniqueWithoutProductoInput | PedidoProductoUpdateWithWhereUniqueWithoutProductoInput[]
    updateMany?: PedidoProductoUpdateManyWithWhereWithoutProductoInput | PedidoProductoUpdateManyWithWhereWithoutProductoInput[]
    deleteMany?: PedidoProductoScalarWhereInput | PedidoProductoScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutProductosInput = {
    create?: XOR<PedidoCreateWithoutProductosInput, PedidoUncheckedCreateWithoutProductosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutProductosInput
    connect?: PedidoWhereUniqueInput
  }

  export type ProductoCreateNestedOneWithoutPedidosInput = {
    create?: XOR<ProductoCreateWithoutPedidosInput, ProductoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutPedidosInput
    connect?: ProductoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutProductosNestedInput = {
    create?: XOR<PedidoCreateWithoutProductosInput, PedidoUncheckedCreateWithoutProductosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutProductosInput
    upsert?: PedidoUpsertWithoutProductosInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutProductosInput, PedidoUpdateWithoutProductosInput>, PedidoUncheckedUpdateWithoutProductosInput>
  }

  export type ProductoUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<ProductoCreateWithoutPedidosInput, ProductoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: ProductoCreateOrConnectWithoutPedidosInput
    upsert?: ProductoUpsertWithoutPedidosInput
    connect?: ProductoWhereUniqueInput
    update?: XOR<XOR<ProductoUpdateToOneWithWhereWithoutPedidosInput, ProductoUpdateWithoutPedidosInput>, ProductoUncheckedUpdateWithoutPedidosInput>
  }

  export type ClienteCreateNestedOneWithoutPaymentPreferencesInput = {
    create?: XOR<ClienteCreateWithoutPaymentPreferencesInput, ClienteUncheckedCreateWithoutPaymentPreferencesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPaymentPreferencesInput
    connect?: ClienteWhereUniqueInput
  }

  export type PedidoCreateNestedOneWithoutPaymentPreferencesInput = {
    create?: XOR<PedidoCreateWithoutPaymentPreferencesInput, PedidoUncheckedCreateWithoutPaymentPreferencesInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPaymentPreferencesInput
    connect?: PedidoWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutPaymentPreferencesNestedInput = {
    create?: XOR<ClienteCreateWithoutPaymentPreferencesInput, ClienteUncheckedCreateWithoutPaymentPreferencesInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutPaymentPreferencesInput
    upsert?: ClienteUpsertWithoutPaymentPreferencesInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutPaymentPreferencesInput, ClienteUpdateWithoutPaymentPreferencesInput>, ClienteUncheckedUpdateWithoutPaymentPreferencesInput>
  }

  export type PedidoUpdateOneRequiredWithoutPaymentPreferencesNestedInput = {
    create?: XOR<PedidoCreateWithoutPaymentPreferencesInput, PedidoUncheckedCreateWithoutPaymentPreferencesInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutPaymentPreferencesInput
    upsert?: PedidoUpsertWithoutPaymentPreferencesInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutPaymentPreferencesInput, PedidoUpdateWithoutPaymentPreferencesInput>, PedidoUncheckedUpdateWithoutPaymentPreferencesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | null
    notIn?: Uint8Array[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[]
    notIn?: Uint8Array[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DireccionCreateWithoutClienteInput = {
    barrio: string
    calle: string
    numero: string
  }

  export type DireccionUncheckedCreateWithoutClienteInput = {
    id_Direcipón?: number
    barrio: string
    calle: string
    numero: string
  }

  export type DireccionCreateOrConnectWithoutClienteInput = {
    where: DireccionWhereUniqueInput
    create: XOR<DireccionCreateWithoutClienteInput, DireccionUncheckedCreateWithoutClienteInput>
  }

  export type DireccionCreateManyClienteInputEnvelope = {
    data: DireccionCreateManyClienteInput | DireccionCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PagoCreateWithoutClienteInput = {
    monto_pago: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    estado_pago: string
    pedido: PedidoCreateNestedOneWithoutPagosInput
  }

  export type PagoUncheckedCreateWithoutClienteInput = {
    ID_pagos?: number
    monto_pago: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    estado_pago: string
    id_pedido: number
  }

  export type PagoCreateOrConnectWithoutClienteInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutClienteInput, PagoUncheckedCreateWithoutClienteInput>
  }

  export type PagoCreateManyClienteInputEnvelope = {
    data: PagoCreateManyClienteInput | PagoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PedidoCreateWithoutClienteInput = {
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    pagos?: PagoCreateNestedManyWithoutPedidoInput
    administrador: AdministradorCreateNestedOneWithoutPedidosInput
    productos?: PedidoProductoCreateNestedManyWithoutPedidoInput
    paymentPreferences?: PaymentPreferenceCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutClienteInput = {
    id_pedido?: number
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    id_administrador: number
    pagos?: PagoUncheckedCreateNestedManyWithoutPedidoInput
    productos?: PedidoProductoUncheckedCreateNestedManyWithoutPedidoInput
    paymentPreferences?: PaymentPreferenceUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoCreateManyClienteInputEnvelope = {
    data: PedidoCreateManyClienteInput | PedidoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type TelefonoCreateWithoutClienteInput = {
    númeroTelefono: string
    tipo: string
  }

  export type TelefonoUncheckedCreateWithoutClienteInput = {
    id_telefono?: number
    númeroTelefono: string
    tipo: string
  }

  export type TelefonoCreateOrConnectWithoutClienteInput = {
    where: TelefonoWhereUniqueInput
    create: XOR<TelefonoCreateWithoutClienteInput, TelefonoUncheckedCreateWithoutClienteInput>
  }

  export type TelefonoCreateManyClienteInputEnvelope = {
    data: TelefonoCreateManyClienteInput | TelefonoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type PaymentPreferenceCreateWithoutClienteInput = {
    preference_id: string
    items: string
    payer: string
    status: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    id_pago: string
    radicado: string
    pedido: PedidoCreateNestedOneWithoutPaymentPreferencesInput
  }

  export type PaymentPreferenceUncheckedCreateWithoutClienteInput = {
    preference_id: string
    items: string
    payer: string
    status: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    id_pago: string
    id_pedido: number
    radicado: string
  }

  export type PaymentPreferenceCreateOrConnectWithoutClienteInput = {
    where: PaymentPreferenceWhereUniqueInput
    create: XOR<PaymentPreferenceCreateWithoutClienteInput, PaymentPreferenceUncheckedCreateWithoutClienteInput>
  }

  export type PaymentPreferenceCreateManyClienteInputEnvelope = {
    data: PaymentPreferenceCreateManyClienteInput | PaymentPreferenceCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type DireccionUpsertWithWhereUniqueWithoutClienteInput = {
    where: DireccionWhereUniqueInput
    update: XOR<DireccionUpdateWithoutClienteInput, DireccionUncheckedUpdateWithoutClienteInput>
    create: XOR<DireccionCreateWithoutClienteInput, DireccionUncheckedCreateWithoutClienteInput>
  }

  export type DireccionUpdateWithWhereUniqueWithoutClienteInput = {
    where: DireccionWhereUniqueInput
    data: XOR<DireccionUpdateWithoutClienteInput, DireccionUncheckedUpdateWithoutClienteInput>
  }

  export type DireccionUpdateManyWithWhereWithoutClienteInput = {
    where: DireccionScalarWhereInput
    data: XOR<DireccionUpdateManyMutationInput, DireccionUncheckedUpdateManyWithoutClienteInput>
  }

  export type DireccionScalarWhereInput = {
    AND?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
    OR?: DireccionScalarWhereInput[]
    NOT?: DireccionScalarWhereInput | DireccionScalarWhereInput[]
    id_Direcipón?: IntFilter<"Direccion"> | number
    barrio?: StringFilter<"Direccion"> | string
    calle?: StringFilter<"Direccion"> | string
    numero?: StringFilter<"Direccion"> | string
    id_cliente?: IntFilter<"Direccion"> | number
  }

  export type PagoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PagoWhereUniqueInput
    update: XOR<PagoUpdateWithoutClienteInput, PagoUncheckedUpdateWithoutClienteInput>
    create: XOR<PagoCreateWithoutClienteInput, PagoUncheckedCreateWithoutClienteInput>
  }

  export type PagoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PagoWhereUniqueInput
    data: XOR<PagoUpdateWithoutClienteInput, PagoUncheckedUpdateWithoutClienteInput>
  }

  export type PagoUpdateManyWithWhereWithoutClienteInput = {
    where: PagoScalarWhereInput
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyWithoutClienteInput>
  }

  export type PagoScalarWhereInput = {
    AND?: PagoScalarWhereInput | PagoScalarWhereInput[]
    OR?: PagoScalarWhereInput[]
    NOT?: PagoScalarWhereInput | PagoScalarWhereInput[]
    ID_pagos?: IntFilter<"Pago"> | number
    monto_pago?: DecimalFilter<"Pago"> | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFilter<"Pago"> | string
    estado_pago?: StringFilter<"Pago"> | string
    id_pedido?: IntFilter<"Pago"> | number
    id_cliente?: IntFilter<"Pago"> | number
  }

  export type PedidoUpsertWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
    create: XOR<PedidoCreateWithoutClienteInput, PedidoUncheckedCreateWithoutClienteInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutClienteInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutClienteInput, PedidoUncheckedUpdateWithoutClienteInput>
  }

  export type PedidoUpdateManyWithWhereWithoutClienteInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutClienteInput>
  }

  export type PedidoScalarWhereInput = {
    AND?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    OR?: PedidoScalarWhereInput[]
    NOT?: PedidoScalarWhereInput | PedidoScalarWhereInput[]
    id_pedido?: IntFilter<"Pedido"> | number
    estado_pedido?: StringFilter<"Pedido"> | string
    fecha_pedido?: DateTimeFilter<"Pedido"> | Date | string
    total_pago?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    id_cliente?: IntFilter<"Pedido"> | number
    id_administrador?: IntFilter<"Pedido"> | number
  }

  export type TelefonoUpsertWithWhereUniqueWithoutClienteInput = {
    where: TelefonoWhereUniqueInput
    update: XOR<TelefonoUpdateWithoutClienteInput, TelefonoUncheckedUpdateWithoutClienteInput>
    create: XOR<TelefonoCreateWithoutClienteInput, TelefonoUncheckedCreateWithoutClienteInput>
  }

  export type TelefonoUpdateWithWhereUniqueWithoutClienteInput = {
    where: TelefonoWhereUniqueInput
    data: XOR<TelefonoUpdateWithoutClienteInput, TelefonoUncheckedUpdateWithoutClienteInput>
  }

  export type TelefonoUpdateManyWithWhereWithoutClienteInput = {
    where: TelefonoScalarWhereInput
    data: XOR<TelefonoUpdateManyMutationInput, TelefonoUncheckedUpdateManyWithoutClienteInput>
  }

  export type TelefonoScalarWhereInput = {
    AND?: TelefonoScalarWhereInput | TelefonoScalarWhereInput[]
    OR?: TelefonoScalarWhereInput[]
    NOT?: TelefonoScalarWhereInput | TelefonoScalarWhereInput[]
    id_telefono?: IntFilter<"Telefono"> | number
    númeroTelefono?: StringFilter<"Telefono"> | string
    tipo?: StringFilter<"Telefono"> | string
    id_cliente?: IntFilter<"Telefono"> | number
  }

  export type PaymentPreferenceUpsertWithWhereUniqueWithoutClienteInput = {
    where: PaymentPreferenceWhereUniqueInput
    update: XOR<PaymentPreferenceUpdateWithoutClienteInput, PaymentPreferenceUncheckedUpdateWithoutClienteInput>
    create: XOR<PaymentPreferenceCreateWithoutClienteInput, PaymentPreferenceUncheckedCreateWithoutClienteInput>
  }

  export type PaymentPreferenceUpdateWithWhereUniqueWithoutClienteInput = {
    where: PaymentPreferenceWhereUniqueInput
    data: XOR<PaymentPreferenceUpdateWithoutClienteInput, PaymentPreferenceUncheckedUpdateWithoutClienteInput>
  }

  export type PaymentPreferenceUpdateManyWithWhereWithoutClienteInput = {
    where: PaymentPreferenceScalarWhereInput
    data: XOR<PaymentPreferenceUpdateManyMutationInput, PaymentPreferenceUncheckedUpdateManyWithoutClienteInput>
  }

  export type PaymentPreferenceScalarWhereInput = {
    AND?: PaymentPreferenceScalarWhereInput | PaymentPreferenceScalarWhereInput[]
    OR?: PaymentPreferenceScalarWhereInput[]
    NOT?: PaymentPreferenceScalarWhereInput | PaymentPreferenceScalarWhereInput[]
    preference_id?: StringFilter<"PaymentPreference"> | string
    items?: StringFilter<"PaymentPreference"> | string
    payer?: StringFilter<"PaymentPreference"> | string
    status?: StringFilter<"PaymentPreference"> | string
    fecha_creacion?: DateTimeFilter<"PaymentPreference"> | Date | string
    fecha_actualizacion?: DateTimeNullableFilter<"PaymentPreference"> | Date | string | null
    id_pago?: StringFilter<"PaymentPreference"> | string
    id_cliente?: IntFilter<"PaymentPreference"> | number
    id_pedido?: IntFilter<"PaymentPreference"> | number
    radicado?: StringFilter<"PaymentPreference"> | string
  }

  export type ClienteCreateWithoutTelefonosInput = {
    Nombres: string
    Apellidos: string
    Email: string
    contraseña?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    googleId?: string | null
    role?: string
    direcciones?: DireccionCreateNestedManyWithoutClienteInput
    pagos?: PagoCreateNestedManyWithoutClienteInput
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
    paymentPreferences?: PaymentPreferenceCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutTelefonosInput = {
    id_cliente?: number
    Nombres: string
    Apellidos: string
    Email: string
    contraseña?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    googleId?: string | null
    role?: string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutClienteInput
    pagos?: PagoUncheckedCreateNestedManyWithoutClienteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
    paymentPreferences?: PaymentPreferenceUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutTelefonosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutTelefonosInput, ClienteUncheckedCreateWithoutTelefonosInput>
  }

  export type ClienteUpsertWithoutTelefonosInput = {
    update: XOR<ClienteUpdateWithoutTelefonosInput, ClienteUncheckedUpdateWithoutTelefonosInput>
    create: XOR<ClienteCreateWithoutTelefonosInput, ClienteUncheckedCreateWithoutTelefonosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutTelefonosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutTelefonosInput, ClienteUncheckedUpdateWithoutTelefonosInput>
  }

  export type ClienteUpdateWithoutTelefonosInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUpdateManyWithoutClienteNestedInput
    pagos?: PagoUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
    paymentPreferences?: PaymentPreferenceUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutTelefonosInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUncheckedUpdateManyWithoutClienteNestedInput
    pagos?: PagoUncheckedUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
    paymentPreferences?: PaymentPreferenceUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateWithoutDireccionesInput = {
    Nombres: string
    Apellidos: string
    Email: string
    contraseña?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    googleId?: string | null
    role?: string
    pagos?: PagoCreateNestedManyWithoutClienteInput
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
    telefonos?: TelefonoCreateNestedManyWithoutClienteInput
    paymentPreferences?: PaymentPreferenceCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutDireccionesInput = {
    id_cliente?: number
    Nombres: string
    Apellidos: string
    Email: string
    contraseña?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    googleId?: string | null
    role?: string
    pagos?: PagoUncheckedCreateNestedManyWithoutClienteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
    telefonos?: TelefonoUncheckedCreateNestedManyWithoutClienteInput
    paymentPreferences?: PaymentPreferenceUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutDireccionesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutDireccionesInput, ClienteUncheckedCreateWithoutDireccionesInput>
  }

  export type ClienteUpsertWithoutDireccionesInput = {
    update: XOR<ClienteUpdateWithoutDireccionesInput, ClienteUncheckedUpdateWithoutDireccionesInput>
    create: XOR<ClienteCreateWithoutDireccionesInput, ClienteUncheckedCreateWithoutDireccionesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutDireccionesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutDireccionesInput, ClienteUncheckedUpdateWithoutDireccionesInput>
  }

  export type ClienteUpdateWithoutDireccionesInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    pagos?: PagoUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
    telefonos?: TelefonoUpdateManyWithoutClienteNestedInput
    paymentPreferences?: PaymentPreferenceUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutDireccionesInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    pagos?: PagoUncheckedUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
    telefonos?: TelefonoUncheckedUpdateManyWithoutClienteNestedInput
    paymentPreferences?: PaymentPreferenceUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type PagoCreateWithoutPedidoInput = {
    monto_pago: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    estado_pago: string
    cliente: ClienteCreateNestedOneWithoutPagosInput
  }

  export type PagoUncheckedCreateWithoutPedidoInput = {
    ID_pagos?: number
    monto_pago: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    estado_pago: string
    id_cliente: number
  }

  export type PagoCreateOrConnectWithoutPedidoInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutPedidoInput, PagoUncheckedCreateWithoutPedidoInput>
  }

  export type PagoCreateManyPedidoInputEnvelope = {
    data: PagoCreateManyPedidoInput | PagoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type AdministradorCreateWithoutPedidosInput = {
    Nombres: string
    Apellidos: string
    Email: string
    contraseña: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AdministradorUncheckedCreateWithoutPedidosInput = {
    id_administrador?: number
    Nombres: string
    Apellidos: string
    Email: string
    contraseña: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AdministradorCreateOrConnectWithoutPedidosInput = {
    where: AdministradorWhereUniqueInput
    create: XOR<AdministradorCreateWithoutPedidosInput, AdministradorUncheckedCreateWithoutPedidosInput>
  }

  export type ClienteCreateWithoutPedidosInput = {
    Nombres: string
    Apellidos: string
    Email: string
    contraseña?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    googleId?: string | null
    role?: string
    direcciones?: DireccionCreateNestedManyWithoutClienteInput
    pagos?: PagoCreateNestedManyWithoutClienteInput
    telefonos?: TelefonoCreateNestedManyWithoutClienteInput
    paymentPreferences?: PaymentPreferenceCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutPedidosInput = {
    id_cliente?: number
    Nombres: string
    Apellidos: string
    Email: string
    contraseña?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    googleId?: string | null
    role?: string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutClienteInput
    pagos?: PagoUncheckedCreateNestedManyWithoutClienteInput
    telefonos?: TelefonoUncheckedCreateNestedManyWithoutClienteInput
    paymentPreferences?: PaymentPreferenceUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutPedidosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
  }

  export type PedidoProductoCreateWithoutPedidoInput = {
    cantidad: number
    producto: ProductoCreateNestedOneWithoutPedidosInput
  }

  export type PedidoProductoUncheckedCreateWithoutPedidoInput = {
    id_producto: number
    cantidad: number
  }

  export type PedidoProductoCreateOrConnectWithoutPedidoInput = {
    where: PedidoProductoWhereUniqueInput
    create: XOR<PedidoProductoCreateWithoutPedidoInput, PedidoProductoUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoProductoCreateManyPedidoInputEnvelope = {
    data: PedidoProductoCreateManyPedidoInput | PedidoProductoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type PaymentPreferenceCreateWithoutPedidoInput = {
    preference_id: string
    items: string
    payer: string
    status: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    id_pago: string
    radicado: string
    cliente: ClienteCreateNestedOneWithoutPaymentPreferencesInput
  }

  export type PaymentPreferenceUncheckedCreateWithoutPedidoInput = {
    preference_id: string
    items: string
    payer: string
    status: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    id_pago: string
    id_cliente: number
    radicado: string
  }

  export type PaymentPreferenceCreateOrConnectWithoutPedidoInput = {
    where: PaymentPreferenceWhereUniqueInput
    create: XOR<PaymentPreferenceCreateWithoutPedidoInput, PaymentPreferenceUncheckedCreateWithoutPedidoInput>
  }

  export type PaymentPreferenceCreateManyPedidoInputEnvelope = {
    data: PaymentPreferenceCreateManyPedidoInput | PaymentPreferenceCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type PagoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PagoWhereUniqueInput
    update: XOR<PagoUpdateWithoutPedidoInput, PagoUncheckedUpdateWithoutPedidoInput>
    create: XOR<PagoCreateWithoutPedidoInput, PagoUncheckedCreateWithoutPedidoInput>
  }

  export type PagoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PagoWhereUniqueInput
    data: XOR<PagoUpdateWithoutPedidoInput, PagoUncheckedUpdateWithoutPedidoInput>
  }

  export type PagoUpdateManyWithWhereWithoutPedidoInput = {
    where: PagoScalarWhereInput
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type AdministradorUpsertWithoutPedidosInput = {
    update: XOR<AdministradorUpdateWithoutPedidosInput, AdministradorUncheckedUpdateWithoutPedidosInput>
    create: XOR<AdministradorCreateWithoutPedidosInput, AdministradorUncheckedCreateWithoutPedidosInput>
    where?: AdministradorWhereInput
  }

  export type AdministradorUpdateToOneWithWhereWithoutPedidosInput = {
    where?: AdministradorWhereInput
    data: XOR<AdministradorUpdateWithoutPedidosInput, AdministradorUncheckedUpdateWithoutPedidosInput>
  }

  export type AdministradorUpdateWithoutPedidosInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdministradorUncheckedUpdateWithoutPedidosInput = {
    id_administrador?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClienteUpsertWithoutPedidosInput = {
    update: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
    create: XOR<ClienteCreateWithoutPedidosInput, ClienteUncheckedCreateWithoutPedidosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPedidosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPedidosInput, ClienteUncheckedUpdateWithoutPedidosInput>
  }

  export type ClienteUpdateWithoutPedidosInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUpdateManyWithoutClienteNestedInput
    pagos?: PagoUpdateManyWithoutClienteNestedInput
    telefonos?: TelefonoUpdateManyWithoutClienteNestedInput
    paymentPreferences?: PaymentPreferenceUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutPedidosInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUncheckedUpdateManyWithoutClienteNestedInput
    pagos?: PagoUncheckedUpdateManyWithoutClienteNestedInput
    telefonos?: TelefonoUncheckedUpdateManyWithoutClienteNestedInput
    paymentPreferences?: PaymentPreferenceUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type PedidoProductoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PedidoProductoWhereUniqueInput
    update: XOR<PedidoProductoUpdateWithoutPedidoInput, PedidoProductoUncheckedUpdateWithoutPedidoInput>
    create: XOR<PedidoProductoCreateWithoutPedidoInput, PedidoProductoUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoProductoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PedidoProductoWhereUniqueInput
    data: XOR<PedidoProductoUpdateWithoutPedidoInput, PedidoProductoUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoProductoUpdateManyWithWhereWithoutPedidoInput = {
    where: PedidoProductoScalarWhereInput
    data: XOR<PedidoProductoUpdateManyMutationInput, PedidoProductoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoProductoScalarWhereInput = {
    AND?: PedidoProductoScalarWhereInput | PedidoProductoScalarWhereInput[]
    OR?: PedidoProductoScalarWhereInput[]
    NOT?: PedidoProductoScalarWhereInput | PedidoProductoScalarWhereInput[]
    id_pedido?: IntFilter<"PedidoProducto"> | number
    id_producto?: IntFilter<"PedidoProducto"> | number
    cantidad?: IntFilter<"PedidoProducto"> | number
  }

  export type PaymentPreferenceUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PaymentPreferenceWhereUniqueInput
    update: XOR<PaymentPreferenceUpdateWithoutPedidoInput, PaymentPreferenceUncheckedUpdateWithoutPedidoInput>
    create: XOR<PaymentPreferenceCreateWithoutPedidoInput, PaymentPreferenceUncheckedCreateWithoutPedidoInput>
  }

  export type PaymentPreferenceUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PaymentPreferenceWhereUniqueInput
    data: XOR<PaymentPreferenceUpdateWithoutPedidoInput, PaymentPreferenceUncheckedUpdateWithoutPedidoInput>
  }

  export type PaymentPreferenceUpdateManyWithWhereWithoutPedidoInput = {
    where: PaymentPreferenceScalarWhereInput
    data: XOR<PaymentPreferenceUpdateManyMutationInput, PaymentPreferenceUncheckedUpdateManyWithoutPedidoInput>
  }

  export type ClienteCreateWithoutPagosInput = {
    Nombres: string
    Apellidos: string
    Email: string
    contraseña?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    googleId?: string | null
    role?: string
    direcciones?: DireccionCreateNestedManyWithoutClienteInput
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
    telefonos?: TelefonoCreateNestedManyWithoutClienteInput
    paymentPreferences?: PaymentPreferenceCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutPagosInput = {
    id_cliente?: number
    Nombres: string
    Apellidos: string
    Email: string
    contraseña?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    googleId?: string | null
    role?: string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutClienteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
    telefonos?: TelefonoUncheckedCreateNestedManyWithoutClienteInput
    paymentPreferences?: PaymentPreferenceUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutPagosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPagosInput, ClienteUncheckedCreateWithoutPagosInput>
  }

  export type PedidoCreateWithoutPagosInput = {
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    administrador: AdministradorCreateNestedOneWithoutPedidosInput
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    productos?: PedidoProductoCreateNestedManyWithoutPedidoInput
    paymentPreferences?: PaymentPreferenceCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutPagosInput = {
    id_pedido?: number
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    id_cliente: number
    id_administrador: number
    productos?: PedidoProductoUncheckedCreateNestedManyWithoutPedidoInput
    paymentPreferences?: PaymentPreferenceUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutPagosInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutPagosInput, PedidoUncheckedCreateWithoutPagosInput>
  }

  export type ClienteUpsertWithoutPagosInput = {
    update: XOR<ClienteUpdateWithoutPagosInput, ClienteUncheckedUpdateWithoutPagosInput>
    create: XOR<ClienteCreateWithoutPagosInput, ClienteUncheckedCreateWithoutPagosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPagosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPagosInput, ClienteUncheckedUpdateWithoutPagosInput>
  }

  export type ClienteUpdateWithoutPagosInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
    telefonos?: TelefonoUpdateManyWithoutClienteNestedInput
    paymentPreferences?: PaymentPreferenceUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutPagosInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUncheckedUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
    telefonos?: TelefonoUncheckedUpdateManyWithoutClienteNestedInput
    paymentPreferences?: PaymentPreferenceUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type PedidoUpsertWithoutPagosInput = {
    update: XOR<PedidoUpdateWithoutPagosInput, PedidoUncheckedUpdateWithoutPagosInput>
    create: XOR<PedidoCreateWithoutPagosInput, PedidoUncheckedCreateWithoutPagosInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutPagosInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutPagosInput, PedidoUncheckedUpdateWithoutPagosInput>
  }

  export type PedidoUpdateWithoutPagosInput = {
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    administrador?: AdministradorUpdateOneRequiredWithoutPedidosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    productos?: PedidoProductoUpdateManyWithoutPedidoNestedInput
    paymentPreferences?: PaymentPreferenceUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutPagosInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_administrador?: IntFieldUpdateOperationsInput | number
    productos?: PedidoProductoUncheckedUpdateManyWithoutPedidoNestedInput
    paymentPreferences?: PaymentPreferenceUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateWithoutAdministradorInput = {
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    pagos?: PagoCreateNestedManyWithoutPedidoInput
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    productos?: PedidoProductoCreateNestedManyWithoutPedidoInput
    paymentPreferences?: PaymentPreferenceCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutAdministradorInput = {
    id_pedido?: number
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    id_cliente: number
    pagos?: PagoUncheckedCreateNestedManyWithoutPedidoInput
    productos?: PedidoProductoUncheckedCreateNestedManyWithoutPedidoInput
    paymentPreferences?: PaymentPreferenceUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutAdministradorInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutAdministradorInput, PedidoUncheckedCreateWithoutAdministradorInput>
  }

  export type PedidoCreateManyAdministradorInputEnvelope = {
    data: PedidoCreateManyAdministradorInput | PedidoCreateManyAdministradorInput[]
    skipDuplicates?: boolean
  }

  export type PedidoUpsertWithWhereUniqueWithoutAdministradorInput = {
    where: PedidoWhereUniqueInput
    update: XOR<PedidoUpdateWithoutAdministradorInput, PedidoUncheckedUpdateWithoutAdministradorInput>
    create: XOR<PedidoCreateWithoutAdministradorInput, PedidoUncheckedCreateWithoutAdministradorInput>
  }

  export type PedidoUpdateWithWhereUniqueWithoutAdministradorInput = {
    where: PedidoWhereUniqueInput
    data: XOR<PedidoUpdateWithoutAdministradorInput, PedidoUncheckedUpdateWithoutAdministradorInput>
  }

  export type PedidoUpdateManyWithWhereWithoutAdministradorInput = {
    where: PedidoScalarWhereInput
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyWithoutAdministradorInput>
  }

  export type ProductoCreateWithoutInventarioInput = {
    nombreP: string
    tipo: string
    Precio: Decimal | DecimalJsLike | number | string
    imagen?: Uint8Array | null
    pedidos?: PedidoProductoCreateNestedManyWithoutProductoInput
    proveedor?: ProveedorCreateNestedOneWithoutProductosInput
  }

  export type ProductoUncheckedCreateWithoutInventarioInput = {
    id_producto?: number
    nombreP: string
    tipo: string
    Precio: Decimal | DecimalJsLike | number | string
    imagen?: Uint8Array | null
    id_proveedor?: number | null
    pedidos?: PedidoProductoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutInventarioInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutInventarioInput, ProductoUncheckedCreateWithoutInventarioInput>
  }

  export type ProductoCreateManyInventarioInputEnvelope = {
    data: ProductoCreateManyInventarioInput | ProductoCreateManyInventarioInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithWhereUniqueWithoutInventarioInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutInventarioInput, ProductoUncheckedUpdateWithoutInventarioInput>
    create: XOR<ProductoCreateWithoutInventarioInput, ProductoUncheckedCreateWithoutInventarioInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutInventarioInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutInventarioInput, ProductoUncheckedUpdateWithoutInventarioInput>
  }

  export type ProductoUpdateManyWithWhereWithoutInventarioInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutInventarioInput>
  }

  export type ProductoScalarWhereInput = {
    AND?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    OR?: ProductoScalarWhereInput[]
    NOT?: ProductoScalarWhereInput | ProductoScalarWhereInput[]
    id_producto?: IntFilter<"Producto"> | number
    nombreP?: StringFilter<"Producto"> | string
    tipo?: StringFilter<"Producto"> | string
    Precio?: DecimalFilter<"Producto"> | Decimal | DecimalJsLike | number | string
    imagen?: BytesNullableFilter<"Producto"> | Uint8Array | null
    id_inventario?: IntNullableFilter<"Producto"> | number | null
    id_proveedor?: IntNullableFilter<"Producto"> | number | null
  }

  export type ProductoCreateWithoutProveedorInput = {
    nombreP: string
    tipo: string
    Precio: Decimal | DecimalJsLike | number | string
    imagen?: Uint8Array | null
    pedidos?: PedidoProductoCreateNestedManyWithoutProductoInput
    inventario?: InventarioCreateNestedOneWithoutProductosInput
  }

  export type ProductoUncheckedCreateWithoutProveedorInput = {
    id_producto?: number
    nombreP: string
    tipo: string
    Precio: Decimal | DecimalJsLike | number | string
    imagen?: Uint8Array | null
    id_inventario?: number | null
    pedidos?: PedidoProductoUncheckedCreateNestedManyWithoutProductoInput
  }

  export type ProductoCreateOrConnectWithoutProveedorInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutProveedorInput, ProductoUncheckedCreateWithoutProveedorInput>
  }

  export type ProductoCreateManyProveedorInputEnvelope = {
    data: ProductoCreateManyProveedorInput | ProductoCreateManyProveedorInput[]
    skipDuplicates?: boolean
  }

  export type ProductoUpsertWithWhereUniqueWithoutProveedorInput = {
    where: ProductoWhereUniqueInput
    update: XOR<ProductoUpdateWithoutProveedorInput, ProductoUncheckedUpdateWithoutProveedorInput>
    create: XOR<ProductoCreateWithoutProveedorInput, ProductoUncheckedCreateWithoutProveedorInput>
  }

  export type ProductoUpdateWithWhereUniqueWithoutProveedorInput = {
    where: ProductoWhereUniqueInput
    data: XOR<ProductoUpdateWithoutProveedorInput, ProductoUncheckedUpdateWithoutProveedorInput>
  }

  export type ProductoUpdateManyWithWhereWithoutProveedorInput = {
    where: ProductoScalarWhereInput
    data: XOR<ProductoUpdateManyMutationInput, ProductoUncheckedUpdateManyWithoutProveedorInput>
  }

  export type PedidoProductoCreateWithoutProductoInput = {
    cantidad: number
    pedido: PedidoCreateNestedOneWithoutProductosInput
  }

  export type PedidoProductoUncheckedCreateWithoutProductoInput = {
    id_pedido: number
    cantidad: number
  }

  export type PedidoProductoCreateOrConnectWithoutProductoInput = {
    where: PedidoProductoWhereUniqueInput
    create: XOR<PedidoProductoCreateWithoutProductoInput, PedidoProductoUncheckedCreateWithoutProductoInput>
  }

  export type PedidoProductoCreateManyProductoInputEnvelope = {
    data: PedidoProductoCreateManyProductoInput | PedidoProductoCreateManyProductoInput[]
    skipDuplicates?: boolean
  }

  export type InventarioCreateWithoutProductosInput = {
    cantidad: number
    fechaIngreso: Date | string
    fechaSalida: Date | string
    fechaRealización: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type InventarioUncheckedCreateWithoutProductosInput = {
    id_inventario?: number
    cantidad: number
    fechaIngreso: Date | string
    fechaSalida: Date | string
    fechaRealización: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type InventarioCreateOrConnectWithoutProductosInput = {
    where: InventarioWhereUniqueInput
    create: XOR<InventarioCreateWithoutProductosInput, InventarioUncheckedCreateWithoutProductosInput>
  }

  export type ProveedorCreateWithoutProductosInput = {
    nombres: string
    apellidos: string
    Email: string
    contraseña: Uint8Array
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProveedorUncheckedCreateWithoutProductosInput = {
    id_proveedor?: number
    nombres: string
    apellidos: string
    Email: string
    contraseña: Uint8Array
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProveedorCreateOrConnectWithoutProductosInput = {
    where: ProveedorWhereUniqueInput
    create: XOR<ProveedorCreateWithoutProductosInput, ProveedorUncheckedCreateWithoutProductosInput>
  }

  export type PedidoProductoUpsertWithWhereUniqueWithoutProductoInput = {
    where: PedidoProductoWhereUniqueInput
    update: XOR<PedidoProductoUpdateWithoutProductoInput, PedidoProductoUncheckedUpdateWithoutProductoInput>
    create: XOR<PedidoProductoCreateWithoutProductoInput, PedidoProductoUncheckedCreateWithoutProductoInput>
  }

  export type PedidoProductoUpdateWithWhereUniqueWithoutProductoInput = {
    where: PedidoProductoWhereUniqueInput
    data: XOR<PedidoProductoUpdateWithoutProductoInput, PedidoProductoUncheckedUpdateWithoutProductoInput>
  }

  export type PedidoProductoUpdateManyWithWhereWithoutProductoInput = {
    where: PedidoProductoScalarWhereInput
    data: XOR<PedidoProductoUpdateManyMutationInput, PedidoProductoUncheckedUpdateManyWithoutProductoInput>
  }

  export type InventarioUpsertWithoutProductosInput = {
    update: XOR<InventarioUpdateWithoutProductosInput, InventarioUncheckedUpdateWithoutProductosInput>
    create: XOR<InventarioCreateWithoutProductosInput, InventarioUncheckedCreateWithoutProductosInput>
    where?: InventarioWhereInput
  }

  export type InventarioUpdateToOneWithWhereWithoutProductosInput = {
    where?: InventarioWhereInput
    data: XOR<InventarioUpdateWithoutProductosInput, InventarioUncheckedUpdateWithoutProductosInput>
  }

  export type InventarioUpdateWithoutProductosInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    fechaIngreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRealización?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type InventarioUncheckedUpdateWithoutProductosInput = {
    id_inventario?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
    fechaIngreso?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaSalida?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaRealización?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProveedorUpsertWithoutProductosInput = {
    update: XOR<ProveedorUpdateWithoutProductosInput, ProveedorUncheckedUpdateWithoutProductosInput>
    create: XOR<ProveedorCreateWithoutProductosInput, ProveedorUncheckedCreateWithoutProductosInput>
    where?: ProveedorWhereInput
  }

  export type ProveedorUpdateToOneWithWhereWithoutProductosInput = {
    where?: ProveedorWhereInput
    data: XOR<ProveedorUpdateWithoutProductosInput, ProveedorUncheckedUpdateWithoutProductosInput>
  }

  export type ProveedorUpdateWithoutProductosInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: BytesFieldUpdateOperationsInput | Uint8Array
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProveedorUncheckedUpdateWithoutProductosInput = {
    id_proveedor?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: BytesFieldUpdateOperationsInput | Uint8Array
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PedidoCreateWithoutProductosInput = {
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    pagos?: PagoCreateNestedManyWithoutPedidoInput
    administrador: AdministradorCreateNestedOneWithoutPedidosInput
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    paymentPreferences?: PaymentPreferenceCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutProductosInput = {
    id_pedido?: number
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    id_cliente: number
    id_administrador: number
    pagos?: PagoUncheckedCreateNestedManyWithoutPedidoInput
    paymentPreferences?: PaymentPreferenceUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutProductosInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutProductosInput, PedidoUncheckedCreateWithoutProductosInput>
  }

  export type ProductoCreateWithoutPedidosInput = {
    nombreP: string
    tipo: string
    Precio: Decimal | DecimalJsLike | number | string
    imagen?: Uint8Array | null
    inventario?: InventarioCreateNestedOneWithoutProductosInput
    proveedor?: ProveedorCreateNestedOneWithoutProductosInput
  }

  export type ProductoUncheckedCreateWithoutPedidosInput = {
    id_producto?: number
    nombreP: string
    tipo: string
    Precio: Decimal | DecimalJsLike | number | string
    imagen?: Uint8Array | null
    id_inventario?: number | null
    id_proveedor?: number | null
  }

  export type ProductoCreateOrConnectWithoutPedidosInput = {
    where: ProductoWhereUniqueInput
    create: XOR<ProductoCreateWithoutPedidosInput, ProductoUncheckedCreateWithoutPedidosInput>
  }

  export type PedidoUpsertWithoutProductosInput = {
    update: XOR<PedidoUpdateWithoutProductosInput, PedidoUncheckedUpdateWithoutProductosInput>
    create: XOR<PedidoCreateWithoutProductosInput, PedidoUncheckedCreateWithoutProductosInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutProductosInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutProductosInput, PedidoUncheckedUpdateWithoutProductosInput>
  }

  export type PedidoUpdateWithoutProductosInput = {
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pagos?: PagoUpdateManyWithoutPedidoNestedInput
    administrador?: AdministradorUpdateOneRequiredWithoutPedidosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    paymentPreferences?: PaymentPreferenceUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutProductosInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_administrador?: IntFieldUpdateOperationsInput | number
    pagos?: PagoUncheckedUpdateManyWithoutPedidoNestedInput
    paymentPreferences?: PaymentPreferenceUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type ProductoUpsertWithoutPedidosInput = {
    update: XOR<ProductoUpdateWithoutPedidosInput, ProductoUncheckedUpdateWithoutPedidosInput>
    create: XOR<ProductoCreateWithoutPedidosInput, ProductoUncheckedCreateWithoutPedidosInput>
    where?: ProductoWhereInput
  }

  export type ProductoUpdateToOneWithWhereWithoutPedidosInput = {
    where?: ProductoWhereInput
    data: XOR<ProductoUpdateWithoutPedidosInput, ProductoUncheckedUpdateWithoutPedidosInput>
  }

  export type ProductoUpdateWithoutPedidosInput = {
    nombreP?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    inventario?: InventarioUpdateOneWithoutProductosNestedInput
    proveedor?: ProveedorUpdateOneWithoutProductosNestedInput
  }

  export type ProductoUncheckedUpdateWithoutPedidosInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombreP?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    id_inventario?: NullableIntFieldUpdateOperationsInput | number | null
    id_proveedor?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ClienteCreateWithoutPaymentPreferencesInput = {
    Nombres: string
    Apellidos: string
    Email: string
    contraseña?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    googleId?: string | null
    role?: string
    direcciones?: DireccionCreateNestedManyWithoutClienteInput
    pagos?: PagoCreateNestedManyWithoutClienteInput
    pedidos?: PedidoCreateNestedManyWithoutClienteInput
    telefonos?: TelefonoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateWithoutPaymentPreferencesInput = {
    id_cliente?: number
    Nombres: string
    Apellidos: string
    Email: string
    contraseña?: Uint8Array | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    googleId?: string | null
    role?: string
    direcciones?: DireccionUncheckedCreateNestedManyWithoutClienteInput
    pagos?: PagoUncheckedCreateNestedManyWithoutClienteInput
    pedidos?: PedidoUncheckedCreateNestedManyWithoutClienteInput
    telefonos?: TelefonoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteCreateOrConnectWithoutPaymentPreferencesInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutPaymentPreferencesInput, ClienteUncheckedCreateWithoutPaymentPreferencesInput>
  }

  export type PedidoCreateWithoutPaymentPreferencesInput = {
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    pagos?: PagoCreateNestedManyWithoutPedidoInput
    administrador: AdministradorCreateNestedOneWithoutPedidosInput
    cliente: ClienteCreateNestedOneWithoutPedidosInput
    productos?: PedidoProductoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutPaymentPreferencesInput = {
    id_pedido?: number
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    id_cliente: number
    id_administrador: number
    pagos?: PagoUncheckedCreateNestedManyWithoutPedidoInput
    productos?: PedidoProductoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutPaymentPreferencesInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutPaymentPreferencesInput, PedidoUncheckedCreateWithoutPaymentPreferencesInput>
  }

  export type ClienteUpsertWithoutPaymentPreferencesInput = {
    update: XOR<ClienteUpdateWithoutPaymentPreferencesInput, ClienteUncheckedUpdateWithoutPaymentPreferencesInput>
    create: XOR<ClienteCreateWithoutPaymentPreferencesInput, ClienteUncheckedCreateWithoutPaymentPreferencesInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutPaymentPreferencesInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutPaymentPreferencesInput, ClienteUncheckedUpdateWithoutPaymentPreferencesInput>
  }

  export type ClienteUpdateWithoutPaymentPreferencesInput = {
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUpdateManyWithoutClienteNestedInput
    pagos?: PagoUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUpdateManyWithoutClienteNestedInput
    telefonos?: TelefonoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateWithoutPaymentPreferencesInput = {
    id_cliente?: IntFieldUpdateOperationsInput | number
    Nombres?: StringFieldUpdateOperationsInput | string
    Apellidos?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    contraseña?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    direcciones?: DireccionUncheckedUpdateManyWithoutClienteNestedInput
    pagos?: PagoUncheckedUpdateManyWithoutClienteNestedInput
    pedidos?: PedidoUncheckedUpdateManyWithoutClienteNestedInput
    telefonos?: TelefonoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type PedidoUpsertWithoutPaymentPreferencesInput = {
    update: XOR<PedidoUpdateWithoutPaymentPreferencesInput, PedidoUncheckedUpdateWithoutPaymentPreferencesInput>
    create: XOR<PedidoCreateWithoutPaymentPreferencesInput, PedidoUncheckedCreateWithoutPaymentPreferencesInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutPaymentPreferencesInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutPaymentPreferencesInput, PedidoUncheckedUpdateWithoutPaymentPreferencesInput>
  }

  export type PedidoUpdateWithoutPaymentPreferencesInput = {
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pagos?: PagoUpdateManyWithoutPedidoNestedInput
    administrador?: AdministradorUpdateOneRequiredWithoutPedidosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    productos?: PedidoProductoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutPaymentPreferencesInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    id_administrador?: IntFieldUpdateOperationsInput | number
    pagos?: PagoUncheckedUpdateManyWithoutPedidoNestedInput
    productos?: PedidoProductoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type DireccionCreateManyClienteInput = {
    id_Direcipón?: number
    barrio: string
    calle: string
    numero: string
  }

  export type PagoCreateManyClienteInput = {
    ID_pagos?: number
    monto_pago: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    estado_pago: string
    id_pedido: number
  }

  export type PedidoCreateManyClienteInput = {
    id_pedido?: number
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    id_administrador: number
  }

  export type TelefonoCreateManyClienteInput = {
    id_telefono?: number
    númeroTelefono: string
    tipo: string
  }

  export type PaymentPreferenceCreateManyClienteInput = {
    preference_id: string
    items: string
    payer: string
    status: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    id_pago: string
    id_pedido: number
    radicado: string
  }

  export type DireccionUpdateWithoutClienteInput = {
    barrio?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type DireccionUncheckedUpdateWithoutClienteInput = {
    id_Direcipón?: IntFieldUpdateOperationsInput | number
    barrio?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type DireccionUncheckedUpdateManyWithoutClienteInput = {
    id_Direcipón?: IntFieldUpdateOperationsInput | number
    barrio?: StringFieldUpdateOperationsInput | string
    calle?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
  }

  export type PagoUpdateWithoutClienteInput = {
    monto_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    estado_pago?: StringFieldUpdateOperationsInput | string
    pedido?: PedidoUpdateOneRequiredWithoutPagosNestedInput
  }

  export type PagoUncheckedUpdateWithoutClienteInput = {
    ID_pagos?: IntFieldUpdateOperationsInput | number
    monto_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    estado_pago?: StringFieldUpdateOperationsInput | string
    id_pedido?: IntFieldUpdateOperationsInput | number
  }

  export type PagoUncheckedUpdateManyWithoutClienteInput = {
    ID_pagos?: IntFieldUpdateOperationsInput | number
    monto_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    estado_pago?: StringFieldUpdateOperationsInput | string
    id_pedido?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoUpdateWithoutClienteInput = {
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pagos?: PagoUpdateManyWithoutPedidoNestedInput
    administrador?: AdministradorUpdateOneRequiredWithoutPedidosNestedInput
    productos?: PedidoProductoUpdateManyWithoutPedidoNestedInput
    paymentPreferences?: PaymentPreferenceUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutClienteInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_administrador?: IntFieldUpdateOperationsInput | number
    pagos?: PagoUncheckedUpdateManyWithoutPedidoNestedInput
    productos?: PedidoProductoUncheckedUpdateManyWithoutPedidoNestedInput
    paymentPreferences?: PaymentPreferenceUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutClienteInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_administrador?: IntFieldUpdateOperationsInput | number
  }

  export type TelefonoUpdateWithoutClienteInput = {
    númeroTelefono?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TelefonoUncheckedUpdateWithoutClienteInput = {
    id_telefono?: IntFieldUpdateOperationsInput | number
    númeroTelefono?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TelefonoUncheckedUpdateManyWithoutClienteInput = {
    id_telefono?: IntFieldUpdateOperationsInput | number
    númeroTelefono?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentPreferenceUpdateWithoutClienteInput = {
    preference_id?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    payer?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_pago?: StringFieldUpdateOperationsInput | string
    radicado?: StringFieldUpdateOperationsInput | string
    pedido?: PedidoUpdateOneRequiredWithoutPaymentPreferencesNestedInput
  }

  export type PaymentPreferenceUncheckedUpdateWithoutClienteInput = {
    preference_id?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    payer?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_pago?: StringFieldUpdateOperationsInput | string
    id_pedido?: IntFieldUpdateOperationsInput | number
    radicado?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentPreferenceUncheckedUpdateManyWithoutClienteInput = {
    preference_id?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    payer?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_pago?: StringFieldUpdateOperationsInput | string
    id_pedido?: IntFieldUpdateOperationsInput | number
    radicado?: StringFieldUpdateOperationsInput | string
  }

  export type PagoCreateManyPedidoInput = {
    ID_pagos?: number
    monto_pago: Decimal | DecimalJsLike | number | string
    metodo_pago: string
    estado_pago: string
    id_cliente: number
  }

  export type PedidoProductoCreateManyPedidoInput = {
    id_producto: number
    cantidad: number
  }

  export type PaymentPreferenceCreateManyPedidoInput = {
    preference_id: string
    items: string
    payer: string
    status: string
    fecha_creacion?: Date | string
    fecha_actualizacion?: Date | string | null
    id_pago: string
    id_cliente: number
    radicado: string
  }

  export type PagoUpdateWithoutPedidoInput = {
    monto_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    estado_pago?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutPagosNestedInput
  }

  export type PagoUncheckedUpdateWithoutPedidoInput = {
    ID_pagos?: IntFieldUpdateOperationsInput | number
    monto_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    estado_pago?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type PagoUncheckedUpdateManyWithoutPedidoInput = {
    ID_pagos?: IntFieldUpdateOperationsInput | number
    monto_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    metodo_pago?: StringFieldUpdateOperationsInput | string
    estado_pago?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProductoUpdateWithoutPedidoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    producto?: ProductoUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoProductoUncheckedUpdateWithoutPedidoInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProductoUncheckedUpdateManyWithoutPedidoInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentPreferenceUpdateWithoutPedidoInput = {
    preference_id?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    payer?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_pago?: StringFieldUpdateOperationsInput | string
    radicado?: StringFieldUpdateOperationsInput | string
    cliente?: ClienteUpdateOneRequiredWithoutPaymentPreferencesNestedInput
  }

  export type PaymentPreferenceUncheckedUpdateWithoutPedidoInput = {
    preference_id?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    payer?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_pago?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    radicado?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentPreferenceUncheckedUpdateManyWithoutPedidoInput = {
    preference_id?: StringFieldUpdateOperationsInput | string
    items?: StringFieldUpdateOperationsInput | string
    payer?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    fecha_creacion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_actualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_pago?: StringFieldUpdateOperationsInput | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    radicado?: StringFieldUpdateOperationsInput | string
  }

  export type PedidoCreateManyAdministradorInput = {
    id_pedido?: number
    estado_pedido: string
    fecha_pedido: Date | string
    total_pago: Decimal | DecimalJsLike | number | string
    id_cliente: number
  }

  export type PedidoUpdateWithoutAdministradorInput = {
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pagos?: PagoUpdateManyWithoutPedidoNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutPedidosNestedInput
    productos?: PedidoProductoUpdateManyWithoutPedidoNestedInput
    paymentPreferences?: PaymentPreferenceUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutAdministradorInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_cliente?: IntFieldUpdateOperationsInput | number
    pagos?: PagoUncheckedUpdateManyWithoutPedidoNestedInput
    productos?: PedidoProductoUncheckedUpdateManyWithoutPedidoNestedInput
    paymentPreferences?: PaymentPreferenceUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateManyWithoutAdministradorInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    estado_pedido?: StringFieldUpdateOperationsInput | string
    fecha_pedido?: DateTimeFieldUpdateOperationsInput | Date | string
    total_pago?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    id_cliente?: IntFieldUpdateOperationsInput | number
  }

  export type ProductoCreateManyInventarioInput = {
    id_producto?: number
    nombreP: string
    tipo: string
    Precio: Decimal | DecimalJsLike | number | string
    imagen?: Uint8Array | null
    id_proveedor?: number | null
  }

  export type ProductoUpdateWithoutInventarioInput = {
    nombreP?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    pedidos?: PedidoProductoUpdateManyWithoutProductoNestedInput
    proveedor?: ProveedorUpdateOneWithoutProductosNestedInput
  }

  export type ProductoUncheckedUpdateWithoutInventarioInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombreP?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    id_proveedor?: NullableIntFieldUpdateOperationsInput | number | null
    pedidos?: PedidoProductoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutInventarioInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombreP?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    id_proveedor?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProductoCreateManyProveedorInput = {
    id_producto?: number
    nombreP: string
    tipo: string
    Precio: Decimal | DecimalJsLike | number | string
    imagen?: Uint8Array | null
    id_inventario?: number | null
  }

  export type ProductoUpdateWithoutProveedorInput = {
    nombreP?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    pedidos?: PedidoProductoUpdateManyWithoutProductoNestedInput
    inventario?: InventarioUpdateOneWithoutProductosNestedInput
  }

  export type ProductoUncheckedUpdateWithoutProveedorInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombreP?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    id_inventario?: NullableIntFieldUpdateOperationsInput | number | null
    pedidos?: PedidoProductoUncheckedUpdateManyWithoutProductoNestedInput
  }

  export type ProductoUncheckedUpdateManyWithoutProveedorInput = {
    id_producto?: IntFieldUpdateOperationsInput | number
    nombreP?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    Precio?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    imagen?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    id_inventario?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PedidoProductoCreateManyProductoInput = {
    id_pedido: number
    cantidad: number
  }

  export type PedidoProductoUpdateWithoutProductoInput = {
    cantidad?: IntFieldUpdateOperationsInput | number
    pedido?: PedidoUpdateOneRequiredWithoutProductosNestedInput
  }

  export type PedidoProductoUncheckedUpdateWithoutProductoInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoProductoUncheckedUpdateManyWithoutProductoInput = {
    id_pedido?: IntFieldUpdateOperationsInput | number
    cantidad?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}