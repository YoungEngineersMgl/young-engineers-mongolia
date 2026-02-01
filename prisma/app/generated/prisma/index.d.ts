
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Content
 * 
 */
export type Content = $Result.DefaultSelection<Prisma.$ContentPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Workshop
 * 
 */
export type Workshop = $Result.DefaultSelection<Prisma.$WorkshopPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  SOFTWARE: 'SOFTWARE',
  NANO: 'NANO',
  CHEMICAL: 'CHEMICAL',
  MECHANICAL: 'MECHANICAL',
  ENVIRONMENTAL: 'ENVIRONMENTAL',
  ELECTRICAL: 'ELECTRICAL',
  AEROSPACE: 'AEROSPACE',
  CIVIL: 'CIVIL',
  BIOMEDICAL: 'BIOMEDICAL'
};

export type Category = (typeof Category)[keyof typeof Category]


export const Role: {
  RESEARCH: 'RESEARCH',
  MARKETING: 'MARKETING',
  FOUNDER: 'FOUNDER',
  ENGINEERING: 'ENGINEERING'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AdminStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE'
};

export type AdminStatus = (typeof AdminStatus)[keyof typeof AdminStatus]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AdminStatus = $Enums.AdminStatus

export const AdminStatus: typeof $Enums.AdminStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.content`: Exposes CRUD operations for the **Content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contents
    * const contents = await prisma.content.findMany()
    * ```
    */
  get content(): Prisma.ContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workshop`: Exposes CRUD operations for the **Workshop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workshops
    * const workshops = await prisma.workshop.findMany()
    * ```
    */
  get workshop(): Prisma.WorkshopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Admin: 'Admin',
    Blog: 'Blog',
    Content: 'Content',
    Project: 'Project',
    Event: 'Event',
    Workshop: 'Workshop',
    Comments: 'Comments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "blog" | "content" | "project" | "event" | "workshop" | "comments"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Content: {
        payload: Prisma.$ContentPayload<ExtArgs>
        fields: Prisma.ContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findFirst: {
            args: Prisma.ContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          findMany: {
            args: Prisma.ContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          create: {
            args: Prisma.ContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          createMany: {
            args: Prisma.ContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          delete: {
            args: Prisma.ContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          update: {
            args: Prisma.ContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          deleteMany: {
            args: Prisma.ContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>[]
          }
          upsert: {
            args: Prisma.ContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentPayload>
          }
          aggregate: {
            args: Prisma.ContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContent>
          }
          groupBy: {
            args: Prisma.ContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentCountArgs<ExtArgs>
            result: $Utils.Optional<ContentCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      Workshop: {
        payload: Prisma.$WorkshopPayload<ExtArgs>
        fields: Prisma.WorkshopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkshopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkshopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>
          }
          findFirst: {
            args: Prisma.WorkshopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkshopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>
          }
          findMany: {
            args: Prisma.WorkshopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>[]
          }
          create: {
            args: Prisma.WorkshopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>
          }
          createMany: {
            args: Prisma.WorkshopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkshopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>[]
          }
          delete: {
            args: Prisma.WorkshopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>
          }
          update: {
            args: Prisma.WorkshopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>
          }
          deleteMany: {
            args: Prisma.WorkshopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkshopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkshopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>[]
          }
          upsert: {
            args: Prisma.WorkshopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkshopPayload>
          }
          aggregate: {
            args: Prisma.WorkshopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkshop>
          }
          groupBy: {
            args: Prisma.WorkshopGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkshopGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkshopCountArgs<ExtArgs>
            result: $Utils.Optional<WorkshopCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    blog?: BlogOmit
    content?: ContentOmit
    project?: ProjectOmit
    event?: EventOmit
    workshop?: WorkshopOmit
    comments?: CommentsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    workshopsMarketing: number
    workshopsAdmin: number
    blogResearch: number
    blogAdmin: number
    projectMarketing: number
    projectAdmin: number
    eventMarketing: number
    eventAdmin: number
    projectsEngineering: number
    eventsEngineering: number
    workshopsEngineering: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workshopsMarketing?: boolean | AdminCountOutputTypeCountWorkshopsMarketingArgs
    workshopsAdmin?: boolean | AdminCountOutputTypeCountWorkshopsAdminArgs
    blogResearch?: boolean | AdminCountOutputTypeCountBlogResearchArgs
    blogAdmin?: boolean | AdminCountOutputTypeCountBlogAdminArgs
    projectMarketing?: boolean | AdminCountOutputTypeCountProjectMarketingArgs
    projectAdmin?: boolean | AdminCountOutputTypeCountProjectAdminArgs
    eventMarketing?: boolean | AdminCountOutputTypeCountEventMarketingArgs
    eventAdmin?: boolean | AdminCountOutputTypeCountEventAdminArgs
    projectsEngineering?: boolean | AdminCountOutputTypeCountProjectsEngineeringArgs
    eventsEngineering?: boolean | AdminCountOutputTypeCountEventsEngineeringArgs
    workshopsEngineering?: boolean | AdminCountOutputTypeCountWorkshopsEngineeringArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountWorkshopsMarketingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkshopWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountWorkshopsAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkshopWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountBlogResearchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountBlogAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountProjectMarketingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountProjectAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountEventMarketingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountEventAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountProjectsEngineeringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountEventsEngineeringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountWorkshopsEngineeringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkshopWhereInput
  }


  /**
   * Count Type BlogCountOutputType
   */

  export type BlogCountOutputType = {
    content: number
    comments: number
  }

  export type BlogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | BlogCountOutputTypeCountContentArgs
    comments?: boolean | BlogCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlogCountOutputType
     */
    select?: BlogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
  }

  /**
   * BlogCountOutputType without action
   */
  export type BlogCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    status: $Enums.AdminStatus | null
    inviteToken: string | null
    inviteExpiresAt: Date | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    role: $Enums.Role | null
    status: $Enums.AdminStatus | null
    inviteToken: string | null
    inviteExpiresAt: Date | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    role: number
    status: number
    inviteToken: number
    inviteExpiresAt: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    role?: true
    status?: true
    inviteToken?: true
    inviteExpiresAt?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    role?: true
    status?: true
    inviteToken?: true
    inviteExpiresAt?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    role?: true
    status?: true
    inviteToken?: true
    inviteExpiresAt?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken: string | null
    inviteExpiresAt: Date | null
    email: string
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    status?: boolean
    inviteToken?: boolean
    inviteExpiresAt?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workshopsMarketing?: boolean | Admin$workshopsMarketingArgs<ExtArgs>
    workshopsAdmin?: boolean | Admin$workshopsAdminArgs<ExtArgs>
    blogResearch?: boolean | Admin$blogResearchArgs<ExtArgs>
    blogAdmin?: boolean | Admin$blogAdminArgs<ExtArgs>
    projectMarketing?: boolean | Admin$projectMarketingArgs<ExtArgs>
    projectAdmin?: boolean | Admin$projectAdminArgs<ExtArgs>
    eventMarketing?: boolean | Admin$eventMarketingArgs<ExtArgs>
    eventAdmin?: boolean | Admin$eventAdminArgs<ExtArgs>
    projectsEngineering?: boolean | Admin$projectsEngineeringArgs<ExtArgs>
    eventsEngineering?: boolean | Admin$eventsEngineeringArgs<ExtArgs>
    workshopsEngineering?: boolean | Admin$workshopsEngineeringArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    status?: boolean
    inviteToken?: boolean
    inviteExpiresAt?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    status?: boolean
    inviteToken?: boolean
    inviteExpiresAt?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    role?: boolean
    status?: boolean
    inviteToken?: boolean
    inviteExpiresAt?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "status" | "inviteToken" | "inviteExpiresAt" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workshopsMarketing?: boolean | Admin$workshopsMarketingArgs<ExtArgs>
    workshopsAdmin?: boolean | Admin$workshopsAdminArgs<ExtArgs>
    blogResearch?: boolean | Admin$blogResearchArgs<ExtArgs>
    blogAdmin?: boolean | Admin$blogAdminArgs<ExtArgs>
    projectMarketing?: boolean | Admin$projectMarketingArgs<ExtArgs>
    projectAdmin?: boolean | Admin$projectAdminArgs<ExtArgs>
    eventMarketing?: boolean | Admin$eventMarketingArgs<ExtArgs>
    eventAdmin?: boolean | Admin$eventAdminArgs<ExtArgs>
    projectsEngineering?: boolean | Admin$projectsEngineeringArgs<ExtArgs>
    eventsEngineering?: boolean | Admin$eventsEngineeringArgs<ExtArgs>
    workshopsEngineering?: boolean | Admin$workshopsEngineeringArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      workshopsMarketing: Prisma.$WorkshopPayload<ExtArgs>[]
      workshopsAdmin: Prisma.$WorkshopPayload<ExtArgs>[]
      blogResearch: Prisma.$BlogPayload<ExtArgs>[]
      blogAdmin: Prisma.$BlogPayload<ExtArgs>[]
      projectMarketing: Prisma.$ProjectPayload<ExtArgs>[]
      projectAdmin: Prisma.$ProjectPayload<ExtArgs>[]
      eventMarketing: Prisma.$EventPayload<ExtArgs>[]
      eventAdmin: Prisma.$EventPayload<ExtArgs>[]
      projectsEngineering: Prisma.$ProjectPayload<ExtArgs>[]
      eventsEngineering: Prisma.$EventPayload<ExtArgs>[]
      workshopsEngineering: Prisma.$WorkshopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: $Enums.Role
      status: $Enums.AdminStatus
      inviteToken: string | null
      inviteExpiresAt: Date | null
      email: string
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workshopsMarketing<T extends Admin$workshopsMarketingArgs<ExtArgs> = {}>(args?: Subset<T, Admin$workshopsMarketingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workshopsAdmin<T extends Admin$workshopsAdminArgs<ExtArgs> = {}>(args?: Subset<T, Admin$workshopsAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogResearch<T extends Admin$blogResearchArgs<ExtArgs> = {}>(args?: Subset<T, Admin$blogResearchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    blogAdmin<T extends Admin$blogAdminArgs<ExtArgs> = {}>(args?: Subset<T, Admin$blogAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectMarketing<T extends Admin$projectMarketingArgs<ExtArgs> = {}>(args?: Subset<T, Admin$projectMarketingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectAdmin<T extends Admin$projectAdminArgs<ExtArgs> = {}>(args?: Subset<T, Admin$projectAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventMarketing<T extends Admin$eventMarketingArgs<ExtArgs> = {}>(args?: Subset<T, Admin$eventMarketingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventAdmin<T extends Admin$eventAdminArgs<ExtArgs> = {}>(args?: Subset<T, Admin$eventAdminArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projectsEngineering<T extends Admin$projectsEngineeringArgs<ExtArgs> = {}>(args?: Subset<T, Admin$projectsEngineeringArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    eventsEngineering<T extends Admin$eventsEngineeringArgs<ExtArgs> = {}>(args?: Subset<T, Admin$eventsEngineeringArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workshopsEngineering<T extends Admin$workshopsEngineeringArgs<ExtArgs> = {}>(args?: Subset<T, Admin$workshopsEngineeringArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly role: FieldRef<"Admin", 'Role'>
    readonly status: FieldRef<"Admin", 'AdminStatus'>
    readonly inviteToken: FieldRef<"Admin", 'String'>
    readonly inviteExpiresAt: FieldRef<"Admin", 'DateTime'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.workshopsMarketing
   */
  export type Admin$workshopsMarketingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopInclude<ExtArgs> | null
    where?: WorkshopWhereInput
    orderBy?: WorkshopOrderByWithRelationInput | WorkshopOrderByWithRelationInput[]
    cursor?: WorkshopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkshopScalarFieldEnum | WorkshopScalarFieldEnum[]
  }

  /**
   * Admin.workshopsAdmin
   */
  export type Admin$workshopsAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopInclude<ExtArgs> | null
    where?: WorkshopWhereInput
    orderBy?: WorkshopOrderByWithRelationInput | WorkshopOrderByWithRelationInput[]
    cursor?: WorkshopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkshopScalarFieldEnum | WorkshopScalarFieldEnum[]
  }

  /**
   * Admin.blogResearch
   */
  export type Admin$blogResearchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Admin.blogAdmin
   */
  export type Admin$blogAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    cursor?: BlogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Admin.projectMarketing
   */
  export type Admin$projectMarketingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Admin.projectAdmin
   */
  export type Admin$projectAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Admin.eventMarketing
   */
  export type Admin$eventMarketingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Admin.eventAdmin
   */
  export type Admin$eventAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Admin.projectsEngineering
   */
  export type Admin$projectsEngineeringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Admin.eventsEngineering
   */
  export type Admin$eventsEngineeringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Admin.workshopsEngineering
   */
  export type Admin$workshopsEngineeringArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopInclude<ExtArgs> | null
    where?: WorkshopWhereInput
    orderBy?: WorkshopOrderByWithRelationInput | WorkshopOrderByWithRelationInput[]
    cursor?: WorkshopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkshopScalarFieldEnum | WorkshopScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    title: string | null
    intro: string | null
    imgUrl: string | null
    closingNote: string | null
    publishedDate: Date | null
    authorName: string | null
    researchId: string | null
    adminId: string | null
    category: $Enums.Category | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    intro: string | null
    imgUrl: string | null
    closingNote: string | null
    publishedDate: Date | null
    authorName: string | null
    researchId: string | null
    adminId: string | null
    category: $Enums.Category | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    intro: number
    imgUrl: number
    closingNote: number
    publishedDate: number
    authorName: number
    researchId: number
    adminId: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    intro?: true
    imgUrl?: true
    closingNote?: true
    publishedDate?: true
    authorName?: true
    researchId?: true
    adminId?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    intro?: true
    imgUrl?: true
    closingNote?: true
    publishedDate?: true
    authorName?: true
    researchId?: true
    adminId?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    intro?: true
    imgUrl?: true
    closingNote?: true
    publishedDate?: true
    authorName?: true
    researchId?: true
    adminId?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date
    authorName: string
    researchId: string | null
    adminId: string | null
    category: $Enums.Category
    createdAt: Date
    updatedAt: Date
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    intro?: boolean
    imgUrl?: boolean
    closingNote?: boolean
    publishedDate?: boolean
    authorName?: boolean
    researchId?: boolean
    adminId?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean | Blog$contentArgs<ExtArgs>
    researchAdmin?: boolean | Blog$researchAdminArgs<ExtArgs>
    admin?: boolean | Blog$adminArgs<ExtArgs>
    comments?: boolean | Blog$commentsArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    intro?: boolean
    imgUrl?: boolean
    closingNote?: boolean
    publishedDate?: boolean
    authorName?: boolean
    researchId?: boolean
    adminId?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    researchAdmin?: boolean | Blog$researchAdminArgs<ExtArgs>
    admin?: boolean | Blog$adminArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    intro?: boolean
    imgUrl?: boolean
    closingNote?: boolean
    publishedDate?: boolean
    authorName?: boolean
    researchId?: boolean
    adminId?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    researchAdmin?: boolean | Blog$researchAdminArgs<ExtArgs>
    admin?: boolean | Blog$adminArgs<ExtArgs>
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    intro?: boolean
    imgUrl?: boolean
    closingNote?: boolean
    publishedDate?: boolean
    authorName?: boolean
    researchId?: boolean
    adminId?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "intro" | "imgUrl" | "closingNote" | "publishedDate" | "authorName" | "researchId" | "adminId" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["blog"]>
  export type BlogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    content?: boolean | Blog$contentArgs<ExtArgs>
    researchAdmin?: boolean | Blog$researchAdminArgs<ExtArgs>
    admin?: boolean | Blog$adminArgs<ExtArgs>
    comments?: boolean | Blog$commentsArgs<ExtArgs>
    _count?: boolean | BlogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BlogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    researchAdmin?: boolean | Blog$researchAdminArgs<ExtArgs>
    admin?: boolean | Blog$adminArgs<ExtArgs>
  }
  export type BlogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    researchAdmin?: boolean | Blog$researchAdminArgs<ExtArgs>
    admin?: boolean | Blog$adminArgs<ExtArgs>
  }

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {
      content: Prisma.$ContentPayload<ExtArgs>[]
      researchAdmin: Prisma.$AdminPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
      comments: Prisma.$CommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      intro: string
      imgUrl: string
      closingNote: string
      publishedDate: Date
      authorName: string
      researchId: string | null
      adminId: string | null
      category: $Enums.Category
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    content<T extends Blog$contentArgs<ExtArgs> = {}>(args?: Subset<T, Blog$contentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    researchAdmin<T extends Blog$researchAdminArgs<ExtArgs> = {}>(args?: Subset<T, Blog$researchAdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends Blog$adminArgs<ExtArgs> = {}>(args?: Subset<T, Blog$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comments<T extends Blog$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Blog$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly intro: FieldRef<"Blog", 'String'>
    readonly imgUrl: FieldRef<"Blog", 'String'>
    readonly closingNote: FieldRef<"Blog", 'String'>
    readonly publishedDate: FieldRef<"Blog", 'DateTime'>
    readonly authorName: FieldRef<"Blog", 'String'>
    readonly researchId: FieldRef<"Blog", 'String'>
    readonly adminId: FieldRef<"Blog", 'String'>
    readonly category: FieldRef<"Blog", 'Category'>
    readonly createdAt: FieldRef<"Blog", 'DateTime'>
    readonly updatedAt: FieldRef<"Blog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog.content
   */
  export type Blog$contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    cursor?: ContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Blog.researchAdmin
   */
  export type Blog$researchAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Blog.admin
   */
  export type Blog$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Blog.comments
   */
  export type Blog$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlogInclude<ExtArgs> | null
  }


  /**
   * Model Content
   */

  export type AggregateContent = {
    _count: ContentCountAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  export type ContentMinAggregateOutputType = {
    id: string | null
    blogId: string | null
    subTitle: string | null
    content: string | null
    contentimgUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentMaxAggregateOutputType = {
    id: string | null
    blogId: string | null
    subTitle: string | null
    content: string | null
    contentimgUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContentCountAggregateOutputType = {
    id: number
    blogId: number
    subTitle: number
    content: number
    contentimgUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContentMinAggregateInputType = {
    id?: true
    blogId?: true
    subTitle?: true
    content?: true
    contentimgUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentMaxAggregateInputType = {
    id?: true
    blogId?: true
    subTitle?: true
    content?: true
    contentimgUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContentCountAggregateInputType = {
    id?: true
    blogId?: true
    subTitle?: true
    content?: true
    contentimgUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Content to aggregate.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contents
    **/
    _count?: true | ContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentMaxAggregateInputType
  }

  export type GetContentAggregateType<T extends ContentAggregateArgs> = {
        [P in keyof T & keyof AggregateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContent[P]>
      : GetScalarType<T[P], AggregateContent[P]>
  }




  export type ContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentWhereInput
    orderBy?: ContentOrderByWithAggregationInput | ContentOrderByWithAggregationInput[]
    by: ContentScalarFieldEnum[] | ContentScalarFieldEnum
    having?: ContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentCountAggregateInputType | true
    _min?: ContentMinAggregateInputType
    _max?: ContentMaxAggregateInputType
  }

  export type ContentGroupByOutputType = {
    id: string
    blogId: string
    subTitle: string
    content: string
    contentimgUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ContentCountAggregateOutputType | null
    _min: ContentMinAggregateOutputType | null
    _max: ContentMaxAggregateOutputType | null
  }

  type GetContentGroupByPayload<T extends ContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentGroupByOutputType[P]>
            : GetScalarType<T[P], ContentGroupByOutputType[P]>
        }
      >
    >


  export type ContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    subTitle?: boolean
    content?: boolean
    contentimgUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    subTitle?: boolean
    content?: boolean
    contentimgUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    subTitle?: boolean
    content?: boolean
    contentimgUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["content"]>

  export type ContentSelectScalar = {
    id?: boolean
    blogId?: boolean
    subTitle?: boolean
    content?: boolean
    contentimgUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blogId" | "subTitle" | "content" | "contentimgUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["content"]>
  export type ContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type ContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type ContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }

  export type $ContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Content"
    objects: {
      blog: Prisma.$BlogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blogId: string
      subTitle: string
      content: string
      contentimgUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["content"]>
    composites: {}
  }

  type ContentGetPayload<S extends boolean | null | undefined | ContentDefaultArgs> = $Result.GetResult<Prisma.$ContentPayload, S>

  type ContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentCountAggregateInputType | true
    }

  export interface ContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Content'], meta: { name: 'Content' } }
    /**
     * Find zero or one Content that matches the filter.
     * @param {ContentFindUniqueArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentFindUniqueArgs>(args: SelectSubset<T, ContentFindUniqueArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Content that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentFindUniqueOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentFindFirstArgs>(args?: SelectSubset<T, ContentFindFirstArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindFirstOrThrowArgs} args - Arguments to find a Content
     * @example
     * // Get one Content
     * const content = await prisma.content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contents
     * const contents = await prisma.content.findMany()
     * 
     * // Get first 10 Contents
     * const contents = await prisma.content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentWithIdOnly = await prisma.content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentFindManyArgs>(args?: SelectSubset<T, ContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Content.
     * @param {ContentCreateArgs} args - Arguments to create a Content.
     * @example
     * // Create one Content
     * const Content = await prisma.content.create({
     *   data: {
     *     // ... data to create a Content
     *   }
     * })
     * 
     */
    create<T extends ContentCreateArgs>(args: SelectSubset<T, ContentCreateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contents.
     * @param {ContentCreateManyArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentCreateManyArgs>(args?: SelectSubset<T, ContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contents and returns the data saved in the database.
     * @param {ContentCreateManyAndReturnArgs} args - Arguments to create many Contents.
     * @example
     * // Create many Contents
     * const content = await prisma.content.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Content.
     * @param {ContentDeleteArgs} args - Arguments to delete one Content.
     * @example
     * // Delete one Content
     * const Content = await prisma.content.delete({
     *   where: {
     *     // ... filter to delete one Content
     *   }
     * })
     * 
     */
    delete<T extends ContentDeleteArgs>(args: SelectSubset<T, ContentDeleteArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Content.
     * @param {ContentUpdateArgs} args - Arguments to update one Content.
     * @example
     * // Update one Content
     * const content = await prisma.content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentUpdateArgs>(args: SelectSubset<T, ContentUpdateArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contents.
     * @param {ContentDeleteManyArgs} args - Arguments to filter Contents to delete.
     * @example
     * // Delete a few Contents
     * const { count } = await prisma.content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentDeleteManyArgs>(args?: SelectSubset<T, ContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentUpdateManyArgs>(args: SelectSubset<T, ContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contents and returns the data updated in the database.
     * @param {ContentUpdateManyAndReturnArgs} args - Arguments to update many Contents.
     * @example
     * // Update many Contents
     * const content = await prisma.content.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contents and only return the `id`
     * const contentWithIdOnly = await prisma.content.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContentUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Content.
     * @param {ContentUpsertArgs} args - Arguments to update or create a Content.
     * @example
     * // Update or create a Content
     * const content = await prisma.content.upsert({
     *   create: {
     *     // ... data to create a Content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Content we want to update
     *   }
     * })
     */
    upsert<T extends ContentUpsertArgs>(args: SelectSubset<T, ContentUpsertArgs<ExtArgs>>): Prisma__ContentClient<$Result.GetResult<Prisma.$ContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentCountArgs} args - Arguments to filter Contents to count.
     * @example
     * // Count the number of Contents
     * const count = await prisma.content.count({
     *   where: {
     *     // ... the filter for the Contents we want to count
     *   }
     * })
    **/
    count<T extends ContentCountArgs>(
      args?: Subset<T, ContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentAggregateArgs>(args: Subset<T, ContentAggregateArgs>): Prisma.PrismaPromise<GetContentAggregateType<T>>

    /**
     * Group by Content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentGroupByArgs} args - Group by arguments.
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
      T extends ContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentGroupByArgs['orderBy'] }
        : { orderBy?: ContentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Content model
   */
  readonly fields: ContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Content model
   */
  interface ContentFieldRefs {
    readonly id: FieldRef<"Content", 'String'>
    readonly blogId: FieldRef<"Content", 'String'>
    readonly subTitle: FieldRef<"Content", 'String'>
    readonly content: FieldRef<"Content", 'String'>
    readonly contentimgUrl: FieldRef<"Content", 'String'>
    readonly createdAt: FieldRef<"Content", 'DateTime'>
    readonly updatedAt: FieldRef<"Content", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Content findUnique
   */
  export type ContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findUniqueOrThrow
   */
  export type ContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content findFirst
   */
  export type ContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findFirstOrThrow
   */
  export type ContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Content to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contents.
     */
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content findMany
   */
  export type ContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter, which Contents to fetch.
     */
    where?: ContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contents to fetch.
     */
    orderBy?: ContentOrderByWithRelationInput | ContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contents.
     */
    cursor?: ContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contents.
     */
    skip?: number
    distinct?: ContentScalarFieldEnum | ContentScalarFieldEnum[]
  }

  /**
   * Content create
   */
  export type ContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to create a Content.
     */
    data: XOR<ContentCreateInput, ContentUncheckedCreateInput>
  }

  /**
   * Content createMany
   */
  export type ContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Content createManyAndReturn
   */
  export type ContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to create many Contents.
     */
    data: ContentCreateManyInput | ContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content update
   */
  export type ContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The data needed to update a Content.
     */
    data: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
    /**
     * Choose, which Content to update.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content updateMany
   */
  export type ContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
  }

  /**
   * Content updateManyAndReturn
   */
  export type ContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * The data used to update Contents.
     */
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyInput>
    /**
     * Filter which Contents to update
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Content upsert
   */
  export type ContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * The filter to search for the Content to update in case it exists.
     */
    where: ContentWhereUniqueInput
    /**
     * In case the Content found by the `where` argument doesn't exist, create a new Content with this data.
     */
    create: XOR<ContentCreateInput, ContentUncheckedCreateInput>
    /**
     * In case the Content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentUpdateInput, ContentUncheckedUpdateInput>
  }

  /**
   * Content delete
   */
  export type ContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
    /**
     * Filter which Content to delete.
     */
    where: ContentWhereUniqueInput
  }

  /**
   * Content deleteMany
   */
  export type ContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contents to delete
     */
    where?: ContentWhereInput
    /**
     * Limit how many Contents to delete.
     */
    limit?: number
  }

  /**
   * Content without action
   */
  export type ContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Content
     */
    select?: ContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Content
     */
    omit?: ContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imgUrl: string | null
    marketingId: string | null
    engineeringId: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imgUrl: string | null
    marketingId: string | null
    engineeringId: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title: number
    content: number
    imgUrl: number
    marketingId: number
    engineeringId: number
    adminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imgUrl?: true
    marketingId?: true
    engineeringId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imgUrl?: true
    marketingId?: true
    engineeringId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imgUrl?: true
    marketingId?: true
    engineeringId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title: string
    content: string
    imgUrl: string
    marketingId: string | null
    engineeringId: string | null
    adminId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imgUrl?: boolean
    marketingId?: boolean
    engineeringId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    marketingAdmin?: boolean | Project$marketingAdminArgs<ExtArgs>
    engineeringAdmin?: boolean | Project$engineeringAdminArgs<ExtArgs>
    admin?: boolean | Project$adminArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imgUrl?: boolean
    marketingId?: boolean
    engineeringId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    marketingAdmin?: boolean | Project$marketingAdminArgs<ExtArgs>
    engineeringAdmin?: boolean | Project$engineeringAdminArgs<ExtArgs>
    admin?: boolean | Project$adminArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imgUrl?: boolean
    marketingId?: boolean
    engineeringId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    marketingAdmin?: boolean | Project$marketingAdminArgs<ExtArgs>
    engineeringAdmin?: boolean | Project$engineeringAdminArgs<ExtArgs>
    admin?: boolean | Project$adminArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    imgUrl?: boolean
    marketingId?: boolean
    engineeringId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "imgUrl" | "marketingId" | "engineeringId" | "adminId" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marketingAdmin?: boolean | Project$marketingAdminArgs<ExtArgs>
    engineeringAdmin?: boolean | Project$engineeringAdminArgs<ExtArgs>
    admin?: boolean | Project$adminArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marketingAdmin?: boolean | Project$marketingAdminArgs<ExtArgs>
    engineeringAdmin?: boolean | Project$engineeringAdminArgs<ExtArgs>
    admin?: boolean | Project$adminArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    marketingAdmin?: boolean | Project$marketingAdminArgs<ExtArgs>
    engineeringAdmin?: boolean | Project$engineeringAdminArgs<ExtArgs>
    admin?: boolean | Project$adminArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      marketingAdmin: Prisma.$AdminPayload<ExtArgs> | null
      engineeringAdmin: Prisma.$AdminPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      imgUrl: string
      marketingId: string | null
      engineeringId: string | null
      adminId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    marketingAdmin<T extends Project$marketingAdminArgs<ExtArgs> = {}>(args?: Subset<T, Project$marketingAdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    engineeringAdmin<T extends Project$engineeringAdminArgs<ExtArgs> = {}>(args?: Subset<T, Project$engineeringAdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends Project$adminArgs<ExtArgs> = {}>(args?: Subset<T, Project$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title: FieldRef<"Project", 'String'>
    readonly content: FieldRef<"Project", 'String'>
    readonly imgUrl: FieldRef<"Project", 'String'>
    readonly marketingId: FieldRef<"Project", 'String'>
    readonly engineeringId: FieldRef<"Project", 'String'>
    readonly adminId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.marketingAdmin
   */
  export type Project$marketingAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Project.engineeringAdmin
   */
  export type Project$engineeringAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Project.admin
   */
  export type Project$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imgUrl: string | null
    eventDate: Date | null
    eventStartTime: string | null
    eventEndTime: string | null
    location: string | null
    registerUrl: string | null
    engineeringId: string | null
    marketingId: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imgUrl: string | null
    eventDate: Date | null
    eventStartTime: string | null
    eventEndTime: string | null
    location: string | null
    registerUrl: string | null
    engineeringId: string | null
    marketingId: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    title: number
    content: number
    imgUrl: number
    eventDate: number
    eventStartTime: number
    eventEndTime: number
    location: number
    registerUrl: number
    engineeringId: number
    marketingId: number
    adminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imgUrl?: true
    eventDate?: true
    eventStartTime?: true
    eventEndTime?: true
    location?: true
    registerUrl?: true
    engineeringId?: true
    marketingId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imgUrl?: true
    eventDate?: true
    eventStartTime?: true
    eventEndTime?: true
    location?: true
    registerUrl?: true
    engineeringId?: true
    marketingId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imgUrl?: true
    eventDate?: true
    eventStartTime?: true
    eventEndTime?: true
    location?: true
    registerUrl?: true
    engineeringId?: true
    marketingId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    title: string
    content: string
    imgUrl: string
    eventDate: Date
    eventStartTime: string
    eventEndTime: string
    location: string
    registerUrl: string | null
    engineeringId: string | null
    marketingId: string | null
    adminId: string | null
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imgUrl?: boolean
    eventDate?: boolean
    eventStartTime?: boolean
    eventEndTime?: boolean
    location?: boolean
    registerUrl?: boolean
    engineeringId?: boolean
    marketingId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    engineeringAdmin?: boolean | Event$engineeringAdminArgs<ExtArgs>
    marketingAdmin?: boolean | Event$marketingAdminArgs<ExtArgs>
    admin?: boolean | Event$adminArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imgUrl?: boolean
    eventDate?: boolean
    eventStartTime?: boolean
    eventEndTime?: boolean
    location?: boolean
    registerUrl?: boolean
    engineeringId?: boolean
    marketingId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    engineeringAdmin?: boolean | Event$engineeringAdminArgs<ExtArgs>
    marketingAdmin?: boolean | Event$marketingAdminArgs<ExtArgs>
    admin?: boolean | Event$adminArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imgUrl?: boolean
    eventDate?: boolean
    eventStartTime?: boolean
    eventEndTime?: boolean
    location?: boolean
    registerUrl?: boolean
    engineeringId?: boolean
    marketingId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    engineeringAdmin?: boolean | Event$engineeringAdminArgs<ExtArgs>
    marketingAdmin?: boolean | Event$marketingAdminArgs<ExtArgs>
    admin?: boolean | Event$adminArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    imgUrl?: boolean
    eventDate?: boolean
    eventStartTime?: boolean
    eventEndTime?: boolean
    location?: boolean
    registerUrl?: boolean
    engineeringId?: boolean
    marketingId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "imgUrl" | "eventDate" | "eventStartTime" | "eventEndTime" | "location" | "registerUrl" | "engineeringId" | "marketingId" | "adminId" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineeringAdmin?: boolean | Event$engineeringAdminArgs<ExtArgs>
    marketingAdmin?: boolean | Event$marketingAdminArgs<ExtArgs>
    admin?: boolean | Event$adminArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineeringAdmin?: boolean | Event$engineeringAdminArgs<ExtArgs>
    marketingAdmin?: boolean | Event$marketingAdminArgs<ExtArgs>
    admin?: boolean | Event$adminArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineeringAdmin?: boolean | Event$engineeringAdminArgs<ExtArgs>
    marketingAdmin?: boolean | Event$marketingAdminArgs<ExtArgs>
    admin?: boolean | Event$adminArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      engineeringAdmin: Prisma.$AdminPayload<ExtArgs> | null
      marketingAdmin: Prisma.$AdminPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      imgUrl: string
      eventDate: Date
      eventStartTime: string
      eventEndTime: string
      location: string
      registerUrl: string | null
      engineeringId: string | null
      marketingId: string | null
      adminId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    engineeringAdmin<T extends Event$engineeringAdminArgs<ExtArgs> = {}>(args?: Subset<T, Event$engineeringAdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    marketingAdmin<T extends Event$marketingAdminArgs<ExtArgs> = {}>(args?: Subset<T, Event$marketingAdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends Event$adminArgs<ExtArgs> = {}>(args?: Subset<T, Event$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly content: FieldRef<"Event", 'String'>
    readonly imgUrl: FieldRef<"Event", 'String'>
    readonly eventDate: FieldRef<"Event", 'DateTime'>
    readonly eventStartTime: FieldRef<"Event", 'String'>
    readonly eventEndTime: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly registerUrl: FieldRef<"Event", 'String'>
    readonly engineeringId: FieldRef<"Event", 'String'>
    readonly marketingId: FieldRef<"Event", 'String'>
    readonly adminId: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.engineeringAdmin
   */
  export type Event$engineeringAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Event.marketingAdmin
   */
  export type Event$marketingAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Event.admin
   */
  export type Event$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model Workshop
   */

  export type AggregateWorkshop = {
    _count: WorkshopCountAggregateOutputType | null
    _min: WorkshopMinAggregateOutputType | null
    _max: WorkshopMaxAggregateOutputType | null
  }

  export type WorkshopMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imgUrl: string | null
    workshopDate: Date | null
    workshopStartTime: string | null
    workshopEndTime: string | null
    location: string | null
    registerUrl: string | null
    marketingId: string | null
    engineeringId: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkshopMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    imgUrl: string | null
    workshopDate: Date | null
    workshopStartTime: string | null
    workshopEndTime: string | null
    location: string | null
    registerUrl: string | null
    marketingId: string | null
    engineeringId: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkshopCountAggregateOutputType = {
    id: number
    title: number
    content: number
    imgUrl: number
    workshopDate: number
    workshopStartTime: number
    workshopEndTime: number
    location: number
    registerUrl: number
    marketingId: number
    engineeringId: number
    adminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkshopMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imgUrl?: true
    workshopDate?: true
    workshopStartTime?: true
    workshopEndTime?: true
    location?: true
    registerUrl?: true
    marketingId?: true
    engineeringId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkshopMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imgUrl?: true
    workshopDate?: true
    workshopStartTime?: true
    workshopEndTime?: true
    location?: true
    registerUrl?: true
    marketingId?: true
    engineeringId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkshopCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    imgUrl?: true
    workshopDate?: true
    workshopStartTime?: true
    workshopEndTime?: true
    location?: true
    registerUrl?: true
    marketingId?: true
    engineeringId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkshopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workshop to aggregate.
     */
    where?: WorkshopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workshops to fetch.
     */
    orderBy?: WorkshopOrderByWithRelationInput | WorkshopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkshopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workshops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workshops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workshops
    **/
    _count?: true | WorkshopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkshopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkshopMaxAggregateInputType
  }

  export type GetWorkshopAggregateType<T extends WorkshopAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkshop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkshop[P]>
      : GetScalarType<T[P], AggregateWorkshop[P]>
  }




  export type WorkshopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkshopWhereInput
    orderBy?: WorkshopOrderByWithAggregationInput | WorkshopOrderByWithAggregationInput[]
    by: WorkshopScalarFieldEnum[] | WorkshopScalarFieldEnum
    having?: WorkshopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkshopCountAggregateInputType | true
    _min?: WorkshopMinAggregateInputType
    _max?: WorkshopMaxAggregateInputType
  }

  export type WorkshopGroupByOutputType = {
    id: string
    title: string
    content: string
    imgUrl: string
    workshopDate: Date
    workshopStartTime: string
    workshopEndTime: string
    location: string
    registerUrl: string | null
    marketingId: string | null
    engineeringId: string | null
    adminId: string | null
    createdAt: Date
    updatedAt: Date
    _count: WorkshopCountAggregateOutputType | null
    _min: WorkshopMinAggregateOutputType | null
    _max: WorkshopMaxAggregateOutputType | null
  }

  type GetWorkshopGroupByPayload<T extends WorkshopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkshopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkshopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkshopGroupByOutputType[P]>
            : GetScalarType<T[P], WorkshopGroupByOutputType[P]>
        }
      >
    >


  export type WorkshopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imgUrl?: boolean
    workshopDate?: boolean
    workshopStartTime?: boolean
    workshopEndTime?: boolean
    location?: boolean
    registerUrl?: boolean
    marketingId?: boolean
    engineeringId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    engineeringAdmin?: boolean | Workshop$engineeringAdminArgs<ExtArgs>
    admin?: boolean | Workshop$adminArgs<ExtArgs>
    marketingAdmin?: boolean | Workshop$marketingAdminArgs<ExtArgs>
  }, ExtArgs["result"]["workshop"]>

  export type WorkshopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imgUrl?: boolean
    workshopDate?: boolean
    workshopStartTime?: boolean
    workshopEndTime?: boolean
    location?: boolean
    registerUrl?: boolean
    marketingId?: boolean
    engineeringId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    engineeringAdmin?: boolean | Workshop$engineeringAdminArgs<ExtArgs>
    admin?: boolean | Workshop$adminArgs<ExtArgs>
    marketingAdmin?: boolean | Workshop$marketingAdminArgs<ExtArgs>
  }, ExtArgs["result"]["workshop"]>

  export type WorkshopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    imgUrl?: boolean
    workshopDate?: boolean
    workshopStartTime?: boolean
    workshopEndTime?: boolean
    location?: boolean
    registerUrl?: boolean
    marketingId?: boolean
    engineeringId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    engineeringAdmin?: boolean | Workshop$engineeringAdminArgs<ExtArgs>
    admin?: boolean | Workshop$adminArgs<ExtArgs>
    marketingAdmin?: boolean | Workshop$marketingAdminArgs<ExtArgs>
  }, ExtArgs["result"]["workshop"]>

  export type WorkshopSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    imgUrl?: boolean
    workshopDate?: boolean
    workshopStartTime?: boolean
    workshopEndTime?: boolean
    location?: boolean
    registerUrl?: boolean
    marketingId?: boolean
    engineeringId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkshopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "imgUrl" | "workshopDate" | "workshopStartTime" | "workshopEndTime" | "location" | "registerUrl" | "marketingId" | "engineeringId" | "adminId" | "createdAt" | "updatedAt", ExtArgs["result"]["workshop"]>
  export type WorkshopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineeringAdmin?: boolean | Workshop$engineeringAdminArgs<ExtArgs>
    admin?: boolean | Workshop$adminArgs<ExtArgs>
    marketingAdmin?: boolean | Workshop$marketingAdminArgs<ExtArgs>
  }
  export type WorkshopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineeringAdmin?: boolean | Workshop$engineeringAdminArgs<ExtArgs>
    admin?: boolean | Workshop$adminArgs<ExtArgs>
    marketingAdmin?: boolean | Workshop$marketingAdminArgs<ExtArgs>
  }
  export type WorkshopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineeringAdmin?: boolean | Workshop$engineeringAdminArgs<ExtArgs>
    admin?: boolean | Workshop$adminArgs<ExtArgs>
    marketingAdmin?: boolean | Workshop$marketingAdminArgs<ExtArgs>
  }

  export type $WorkshopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workshop"
    objects: {
      engineeringAdmin: Prisma.$AdminPayload<ExtArgs> | null
      admin: Prisma.$AdminPayload<ExtArgs> | null
      marketingAdmin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      imgUrl: string
      workshopDate: Date
      workshopStartTime: string
      workshopEndTime: string
      location: string
      registerUrl: string | null
      marketingId: string | null
      engineeringId: string | null
      adminId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workshop"]>
    composites: {}
  }

  type WorkshopGetPayload<S extends boolean | null | undefined | WorkshopDefaultArgs> = $Result.GetResult<Prisma.$WorkshopPayload, S>

  type WorkshopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkshopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkshopCountAggregateInputType | true
    }

  export interface WorkshopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workshop'], meta: { name: 'Workshop' } }
    /**
     * Find zero or one Workshop that matches the filter.
     * @param {WorkshopFindUniqueArgs} args - Arguments to find a Workshop
     * @example
     * // Get one Workshop
     * const workshop = await prisma.workshop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkshopFindUniqueArgs>(args: SelectSubset<T, WorkshopFindUniqueArgs<ExtArgs>>): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workshop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkshopFindUniqueOrThrowArgs} args - Arguments to find a Workshop
     * @example
     * // Get one Workshop
     * const workshop = await prisma.workshop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkshopFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkshopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workshop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopFindFirstArgs} args - Arguments to find a Workshop
     * @example
     * // Get one Workshop
     * const workshop = await prisma.workshop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkshopFindFirstArgs>(args?: SelectSubset<T, WorkshopFindFirstArgs<ExtArgs>>): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workshop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopFindFirstOrThrowArgs} args - Arguments to find a Workshop
     * @example
     * // Get one Workshop
     * const workshop = await prisma.workshop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkshopFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkshopFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workshops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workshops
     * const workshops = await prisma.workshop.findMany()
     * 
     * // Get first 10 Workshops
     * const workshops = await prisma.workshop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workshopWithIdOnly = await prisma.workshop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkshopFindManyArgs>(args?: SelectSubset<T, WorkshopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workshop.
     * @param {WorkshopCreateArgs} args - Arguments to create a Workshop.
     * @example
     * // Create one Workshop
     * const Workshop = await prisma.workshop.create({
     *   data: {
     *     // ... data to create a Workshop
     *   }
     * })
     * 
     */
    create<T extends WorkshopCreateArgs>(args: SelectSubset<T, WorkshopCreateArgs<ExtArgs>>): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workshops.
     * @param {WorkshopCreateManyArgs} args - Arguments to create many Workshops.
     * @example
     * // Create many Workshops
     * const workshop = await prisma.workshop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkshopCreateManyArgs>(args?: SelectSubset<T, WorkshopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workshops and returns the data saved in the database.
     * @param {WorkshopCreateManyAndReturnArgs} args - Arguments to create many Workshops.
     * @example
     * // Create many Workshops
     * const workshop = await prisma.workshop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workshops and only return the `id`
     * const workshopWithIdOnly = await prisma.workshop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkshopCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkshopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workshop.
     * @param {WorkshopDeleteArgs} args - Arguments to delete one Workshop.
     * @example
     * // Delete one Workshop
     * const Workshop = await prisma.workshop.delete({
     *   where: {
     *     // ... filter to delete one Workshop
     *   }
     * })
     * 
     */
    delete<T extends WorkshopDeleteArgs>(args: SelectSubset<T, WorkshopDeleteArgs<ExtArgs>>): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workshop.
     * @param {WorkshopUpdateArgs} args - Arguments to update one Workshop.
     * @example
     * // Update one Workshop
     * const workshop = await prisma.workshop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkshopUpdateArgs>(args: SelectSubset<T, WorkshopUpdateArgs<ExtArgs>>): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workshops.
     * @param {WorkshopDeleteManyArgs} args - Arguments to filter Workshops to delete.
     * @example
     * // Delete a few Workshops
     * const { count } = await prisma.workshop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkshopDeleteManyArgs>(args?: SelectSubset<T, WorkshopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workshops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workshops
     * const workshop = await prisma.workshop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkshopUpdateManyArgs>(args: SelectSubset<T, WorkshopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workshops and returns the data updated in the database.
     * @param {WorkshopUpdateManyAndReturnArgs} args - Arguments to update many Workshops.
     * @example
     * // Update many Workshops
     * const workshop = await prisma.workshop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workshops and only return the `id`
     * const workshopWithIdOnly = await prisma.workshop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkshopUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkshopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workshop.
     * @param {WorkshopUpsertArgs} args - Arguments to update or create a Workshop.
     * @example
     * // Update or create a Workshop
     * const workshop = await prisma.workshop.upsert({
     *   create: {
     *     // ... data to create a Workshop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workshop we want to update
     *   }
     * })
     */
    upsert<T extends WorkshopUpsertArgs>(args: SelectSubset<T, WorkshopUpsertArgs<ExtArgs>>): Prisma__WorkshopClient<$Result.GetResult<Prisma.$WorkshopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workshops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopCountArgs} args - Arguments to filter Workshops to count.
     * @example
     * // Count the number of Workshops
     * const count = await prisma.workshop.count({
     *   where: {
     *     // ... the filter for the Workshops we want to count
     *   }
     * })
    **/
    count<T extends WorkshopCountArgs>(
      args?: Subset<T, WorkshopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkshopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workshop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkshopAggregateArgs>(args: Subset<T, WorkshopAggregateArgs>): Prisma.PrismaPromise<GetWorkshopAggregateType<T>>

    /**
     * Group by Workshop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkshopGroupByArgs} args - Group by arguments.
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
      T extends WorkshopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkshopGroupByArgs['orderBy'] }
        : { orderBy?: WorkshopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkshopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkshopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workshop model
   */
  readonly fields: WorkshopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workshop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkshopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    engineeringAdmin<T extends Workshop$engineeringAdminArgs<ExtArgs> = {}>(args?: Subset<T, Workshop$engineeringAdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    admin<T extends Workshop$adminArgs<ExtArgs> = {}>(args?: Subset<T, Workshop$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    marketingAdmin<T extends Workshop$marketingAdminArgs<ExtArgs> = {}>(args?: Subset<T, Workshop$marketingAdminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Workshop model
   */
  interface WorkshopFieldRefs {
    readonly id: FieldRef<"Workshop", 'String'>
    readonly title: FieldRef<"Workshop", 'String'>
    readonly content: FieldRef<"Workshop", 'String'>
    readonly imgUrl: FieldRef<"Workshop", 'String'>
    readonly workshopDate: FieldRef<"Workshop", 'DateTime'>
    readonly workshopStartTime: FieldRef<"Workshop", 'String'>
    readonly workshopEndTime: FieldRef<"Workshop", 'String'>
    readonly location: FieldRef<"Workshop", 'String'>
    readonly registerUrl: FieldRef<"Workshop", 'String'>
    readonly marketingId: FieldRef<"Workshop", 'String'>
    readonly engineeringId: FieldRef<"Workshop", 'String'>
    readonly adminId: FieldRef<"Workshop", 'String'>
    readonly createdAt: FieldRef<"Workshop", 'DateTime'>
    readonly updatedAt: FieldRef<"Workshop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workshop findUnique
   */
  export type WorkshopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * Filter, which Workshop to fetch.
     */
    where: WorkshopWhereUniqueInput
  }

  /**
   * Workshop findUniqueOrThrow
   */
  export type WorkshopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * Filter, which Workshop to fetch.
     */
    where: WorkshopWhereUniqueInput
  }

  /**
   * Workshop findFirst
   */
  export type WorkshopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * Filter, which Workshop to fetch.
     */
    where?: WorkshopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workshops to fetch.
     */
    orderBy?: WorkshopOrderByWithRelationInput | WorkshopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workshops.
     */
    cursor?: WorkshopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workshops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workshops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workshops.
     */
    distinct?: WorkshopScalarFieldEnum | WorkshopScalarFieldEnum[]
  }

  /**
   * Workshop findFirstOrThrow
   */
  export type WorkshopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * Filter, which Workshop to fetch.
     */
    where?: WorkshopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workshops to fetch.
     */
    orderBy?: WorkshopOrderByWithRelationInput | WorkshopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workshops.
     */
    cursor?: WorkshopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workshops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workshops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workshops.
     */
    distinct?: WorkshopScalarFieldEnum | WorkshopScalarFieldEnum[]
  }

  /**
   * Workshop findMany
   */
  export type WorkshopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * Filter, which Workshops to fetch.
     */
    where?: WorkshopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workshops to fetch.
     */
    orderBy?: WorkshopOrderByWithRelationInput | WorkshopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workshops.
     */
    cursor?: WorkshopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workshops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workshops.
     */
    skip?: number
    distinct?: WorkshopScalarFieldEnum | WorkshopScalarFieldEnum[]
  }

  /**
   * Workshop create
   */
  export type WorkshopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * The data needed to create a Workshop.
     */
    data: XOR<WorkshopCreateInput, WorkshopUncheckedCreateInput>
  }

  /**
   * Workshop createMany
   */
  export type WorkshopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workshops.
     */
    data: WorkshopCreateManyInput | WorkshopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workshop createManyAndReturn
   */
  export type WorkshopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * The data used to create many Workshops.
     */
    data: WorkshopCreateManyInput | WorkshopCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workshop update
   */
  export type WorkshopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * The data needed to update a Workshop.
     */
    data: XOR<WorkshopUpdateInput, WorkshopUncheckedUpdateInput>
    /**
     * Choose, which Workshop to update.
     */
    where: WorkshopWhereUniqueInput
  }

  /**
   * Workshop updateMany
   */
  export type WorkshopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workshops.
     */
    data: XOR<WorkshopUpdateManyMutationInput, WorkshopUncheckedUpdateManyInput>
    /**
     * Filter which Workshops to update
     */
    where?: WorkshopWhereInput
    /**
     * Limit how many Workshops to update.
     */
    limit?: number
  }

  /**
   * Workshop updateManyAndReturn
   */
  export type WorkshopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * The data used to update Workshops.
     */
    data: XOR<WorkshopUpdateManyMutationInput, WorkshopUncheckedUpdateManyInput>
    /**
     * Filter which Workshops to update
     */
    where?: WorkshopWhereInput
    /**
     * Limit how many Workshops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workshop upsert
   */
  export type WorkshopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * The filter to search for the Workshop to update in case it exists.
     */
    where: WorkshopWhereUniqueInput
    /**
     * In case the Workshop found by the `where` argument doesn't exist, create a new Workshop with this data.
     */
    create: XOR<WorkshopCreateInput, WorkshopUncheckedCreateInput>
    /**
     * In case the Workshop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkshopUpdateInput, WorkshopUncheckedUpdateInput>
  }

  /**
   * Workshop delete
   */
  export type WorkshopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopInclude<ExtArgs> | null
    /**
     * Filter which Workshop to delete.
     */
    where: WorkshopWhereUniqueInput
  }

  /**
   * Workshop deleteMany
   */
  export type WorkshopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workshops to delete
     */
    where?: WorkshopWhereInput
    /**
     * Limit how many Workshops to delete.
     */
    limit?: number
  }

  /**
   * Workshop.engineeringAdmin
   */
  export type Workshop$engineeringAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Workshop.admin
   */
  export type Workshop$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Workshop.marketingAdmin
   */
  export type Workshop$marketingAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Workshop without action
   */
  export type WorkshopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workshop
     */
    select?: WorkshopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workshop
     */
    omit?: WorkshopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkshopInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsMinAggregateOutputType = {
    id: string | null
    blogId: string | null
    name: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: string | null
    blogId: string | null
    name: string | null
    comment: string | null
    createdAt: Date | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    blogId: number
    name: number
    comment: number
    createdAt: number
    _all: number
  }


  export type CommentsMinAggregateInputType = {
    id?: true
    blogId?: true
    name?: true
    comment?: true
    createdAt?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    blogId?: true
    name?: true
    comment?: true
    createdAt?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    blogId?: true
    name?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: string
    blogId: string
    name: string
    comment: string
    createdAt: Date
    _count: CommentsCountAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    name?: boolean
    comment?: boolean
    createdAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    name?: boolean
    comment?: boolean
    createdAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    blogId?: boolean
    name?: boolean
    comment?: boolean
    createdAt?: boolean
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    blogId?: boolean
    name?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "blogId" | "name" | "comment" | "createdAt", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    blog?: boolean | BlogDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      blog: Prisma.$BlogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      blogId: string
      name: string
      comment: string
      createdAt: Date
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
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
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    blog<T extends BlogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BlogDefaultArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'String'>
    readonly blogId: FieldRef<"Comments", 'String'>
    readonly name: FieldRef<"Comments", 'String'>
    readonly comment: FieldRef<"Comments", 'String'>
    readonly createdAt: FieldRef<"Comments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments updateManyAndReturn
   */
  export type CommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    role: 'role',
    status: 'status',
    inviteToken: 'inviteToken',
    inviteExpiresAt: 'inviteExpiresAt',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    intro: 'intro',
    imgUrl: 'imgUrl',
    closingNote: 'closingNote',
    publishedDate: 'publishedDate',
    authorName: 'authorName',
    researchId: 'researchId',
    adminId: 'adminId',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const ContentScalarFieldEnum: {
    id: 'id',
    blogId: 'blogId',
    subTitle: 'subTitle',
    content: 'content',
    contentimgUrl: 'contentimgUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    imgUrl: 'imgUrl',
    marketingId: 'marketingId',
    engineeringId: 'engineeringId',
    adminId: 'adminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    imgUrl: 'imgUrl',
    eventDate: 'eventDate',
    eventStartTime: 'eventStartTime',
    eventEndTime: 'eventEndTime',
    location: 'location',
    registerUrl: 'registerUrl',
    engineeringId: 'engineeringId',
    marketingId: 'marketingId',
    adminId: 'adminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const WorkshopScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    imgUrl: 'imgUrl',
    workshopDate: 'workshopDate',
    workshopStartTime: 'workshopStartTime',
    workshopEndTime: 'workshopEndTime',
    location: 'location',
    registerUrl: 'registerUrl',
    marketingId: 'marketingId',
    engineeringId: 'engineeringId',
    adminId: 'adminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkshopScalarFieldEnum = (typeof WorkshopScalarFieldEnum)[keyof typeof WorkshopScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    blogId: 'blogId',
    name: 'name',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'AdminStatus'
   */
  export type EnumAdminStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminStatus'>
    


  /**
   * Reference to a field of type 'AdminStatus[]'
   */
  export type ListEnumAdminStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AdminStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    status?: EnumAdminStatusFilter<"Admin"> | $Enums.AdminStatus
    inviteToken?: StringNullableFilter<"Admin"> | string | null
    inviteExpiresAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    email?: StringFilter<"Admin"> | string
    password?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    workshopsMarketing?: WorkshopListRelationFilter
    workshopsAdmin?: WorkshopListRelationFilter
    blogResearch?: BlogListRelationFilter
    blogAdmin?: BlogListRelationFilter
    projectMarketing?: ProjectListRelationFilter
    projectAdmin?: ProjectListRelationFilter
    eventMarketing?: EventListRelationFilter
    eventAdmin?: EventListRelationFilter
    projectsEngineering?: ProjectListRelationFilter
    eventsEngineering?: EventListRelationFilter
    workshopsEngineering?: WorkshopListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    inviteToken?: SortOrderInput | SortOrder
    inviteExpiresAt?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workshopsMarketing?: WorkshopOrderByRelationAggregateInput
    workshopsAdmin?: WorkshopOrderByRelationAggregateInput
    blogResearch?: BlogOrderByRelationAggregateInput
    blogAdmin?: BlogOrderByRelationAggregateInput
    projectMarketing?: ProjectOrderByRelationAggregateInput
    projectAdmin?: ProjectOrderByRelationAggregateInput
    eventMarketing?: EventOrderByRelationAggregateInput
    eventAdmin?: EventOrderByRelationAggregateInput
    projectsEngineering?: ProjectOrderByRelationAggregateInput
    eventsEngineering?: EventOrderByRelationAggregateInput
    workshopsEngineering?: WorkshopOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    status?: EnumAdminStatusFilter<"Admin"> | $Enums.AdminStatus
    inviteToken?: StringNullableFilter<"Admin"> | string | null
    inviteExpiresAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    password?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    workshopsMarketing?: WorkshopListRelationFilter
    workshopsAdmin?: WorkshopListRelationFilter
    blogResearch?: BlogListRelationFilter
    blogAdmin?: BlogListRelationFilter
    projectMarketing?: ProjectListRelationFilter
    projectAdmin?: ProjectListRelationFilter
    eventMarketing?: EventListRelationFilter
    eventAdmin?: EventListRelationFilter
    projectsEngineering?: ProjectListRelationFilter
    eventsEngineering?: EventListRelationFilter
    workshopsEngineering?: WorkshopListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    inviteToken?: SortOrderInput | SortOrder
    inviteExpiresAt?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    role?: EnumRoleWithAggregatesFilter<"Admin"> | $Enums.Role
    status?: EnumAdminStatusWithAggregatesFilter<"Admin"> | $Enums.AdminStatus
    inviteToken?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    inviteExpiresAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    intro?: StringFilter<"Blog"> | string
    imgUrl?: StringFilter<"Blog"> | string
    closingNote?: StringFilter<"Blog"> | string
    publishedDate?: DateTimeFilter<"Blog"> | Date | string
    authorName?: StringFilter<"Blog"> | string
    researchId?: StringNullableFilter<"Blog"> | string | null
    adminId?: StringNullableFilter<"Blog"> | string | null
    category?: EnumCategoryFilter<"Blog"> | $Enums.Category
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    content?: ContentListRelationFilter
    researchAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    comments?: CommentsListRelationFilter
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    intro?: SortOrder
    imgUrl?: SortOrder
    closingNote?: SortOrder
    publishedDate?: SortOrder
    authorName?: SortOrder
    researchId?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: ContentOrderByRelationAggregateInput
    researchAdmin?: AdminOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
    comments?: CommentsOrderByRelationAggregateInput
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    title?: StringFilter<"Blog"> | string
    intro?: StringFilter<"Blog"> | string
    imgUrl?: StringFilter<"Blog"> | string
    closingNote?: StringFilter<"Blog"> | string
    publishedDate?: DateTimeFilter<"Blog"> | Date | string
    authorName?: StringFilter<"Blog"> | string
    researchId?: StringNullableFilter<"Blog"> | string | null
    adminId?: StringNullableFilter<"Blog"> | string | null
    category?: EnumCategoryFilter<"Blog"> | $Enums.Category
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
    content?: ContentListRelationFilter
    researchAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    comments?: CommentsListRelationFilter
  }, "id">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    intro?: SortOrder
    imgUrl?: SortOrder
    closingNote?: SortOrder
    publishedDate?: SortOrder
    authorName?: SortOrder
    researchId?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    intro?: StringWithAggregatesFilter<"Blog"> | string
    imgUrl?: StringWithAggregatesFilter<"Blog"> | string
    closingNote?: StringWithAggregatesFilter<"Blog"> | string
    publishedDate?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    authorName?: StringWithAggregatesFilter<"Blog"> | string
    researchId?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    adminId?: StringNullableWithAggregatesFilter<"Blog"> | string | null
    category?: EnumCategoryWithAggregatesFilter<"Blog"> | $Enums.Category
    createdAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
  }

  export type ContentWhereInput = {
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    id?: StringFilter<"Content"> | string
    blogId?: StringFilter<"Content"> | string
    subTitle?: StringFilter<"Content"> | string
    content?: StringFilter<"Content"> | string
    contentimgUrl?: StringNullableFilter<"Content"> | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }

  export type ContentOrderByWithRelationInput = {
    id?: SortOrder
    blogId?: SortOrder
    subTitle?: SortOrder
    content?: SortOrder
    contentimgUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    blog?: BlogOrderByWithRelationInput
  }

  export type ContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContentWhereInput | ContentWhereInput[]
    OR?: ContentWhereInput[]
    NOT?: ContentWhereInput | ContentWhereInput[]
    blogId?: StringFilter<"Content"> | string
    subTitle?: StringFilter<"Content"> | string
    content?: StringFilter<"Content"> | string
    contentimgUrl?: StringNullableFilter<"Content"> | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }, "id">

  export type ContentOrderByWithAggregationInput = {
    id?: SortOrder
    blogId?: SortOrder
    subTitle?: SortOrder
    content?: SortOrder
    contentimgUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContentCountOrderByAggregateInput
    _max?: ContentMaxOrderByAggregateInput
    _min?: ContentMinOrderByAggregateInput
  }

  export type ContentScalarWhereWithAggregatesInput = {
    AND?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    OR?: ContentScalarWhereWithAggregatesInput[]
    NOT?: ContentScalarWhereWithAggregatesInput | ContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Content"> | string
    blogId?: StringWithAggregatesFilter<"Content"> | string
    subTitle?: StringWithAggregatesFilter<"Content"> | string
    content?: StringWithAggregatesFilter<"Content"> | string
    contentimgUrl?: StringNullableWithAggregatesFilter<"Content"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Content"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    content?: StringFilter<"Project"> | string
    imgUrl?: StringFilter<"Project"> | string
    marketingId?: StringNullableFilter<"Project"> | string | null
    engineeringId?: StringNullableFilter<"Project"> | string | null
    adminId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    marketingAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    engineeringAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    marketingId?: SortOrderInput | SortOrder
    engineeringId?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    marketingAdmin?: AdminOrderByWithRelationInput
    engineeringAdmin?: AdminOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title?: StringFilter<"Project"> | string
    content?: StringFilter<"Project"> | string
    imgUrl?: StringFilter<"Project"> | string
    marketingId?: StringNullableFilter<"Project"> | string | null
    engineeringId?: StringNullableFilter<"Project"> | string | null
    adminId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    marketingAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    engineeringAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    marketingId?: SortOrderInput | SortOrder
    engineeringId?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title?: StringWithAggregatesFilter<"Project"> | string
    content?: StringWithAggregatesFilter<"Project"> | string
    imgUrl?: StringWithAggregatesFilter<"Project"> | string
    marketingId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    engineeringId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    adminId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    content?: StringFilter<"Event"> | string
    imgUrl?: StringFilter<"Event"> | string
    eventDate?: DateTimeFilter<"Event"> | Date | string
    eventStartTime?: StringFilter<"Event"> | string
    eventEndTime?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    registerUrl?: StringNullableFilter<"Event"> | string | null
    engineeringId?: StringNullableFilter<"Event"> | string | null
    marketingId?: StringNullableFilter<"Event"> | string | null
    adminId?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    engineeringAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    marketingAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    eventDate?: SortOrder
    eventStartTime?: SortOrder
    eventEndTime?: SortOrder
    location?: SortOrder
    registerUrl?: SortOrderInput | SortOrder
    engineeringId?: SortOrderInput | SortOrder
    marketingId?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    engineeringAdmin?: AdminOrderByWithRelationInput
    marketingAdmin?: AdminOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    title?: StringFilter<"Event"> | string
    content?: StringFilter<"Event"> | string
    imgUrl?: StringFilter<"Event"> | string
    eventDate?: DateTimeFilter<"Event"> | Date | string
    eventStartTime?: StringFilter<"Event"> | string
    eventEndTime?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    registerUrl?: StringNullableFilter<"Event"> | string | null
    engineeringId?: StringNullableFilter<"Event"> | string | null
    marketingId?: StringNullableFilter<"Event"> | string | null
    adminId?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    engineeringAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    marketingAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    eventDate?: SortOrder
    eventStartTime?: SortOrder
    eventEndTime?: SortOrder
    location?: SortOrder
    registerUrl?: SortOrderInput | SortOrder
    engineeringId?: SortOrderInput | SortOrder
    marketingId?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    content?: StringWithAggregatesFilter<"Event"> | string
    imgUrl?: StringWithAggregatesFilter<"Event"> | string
    eventDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    eventStartTime?: StringWithAggregatesFilter<"Event"> | string
    eventEndTime?: StringWithAggregatesFilter<"Event"> | string
    location?: StringWithAggregatesFilter<"Event"> | string
    registerUrl?: StringNullableWithAggregatesFilter<"Event"> | string | null
    engineeringId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    marketingId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    adminId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type WorkshopWhereInput = {
    AND?: WorkshopWhereInput | WorkshopWhereInput[]
    OR?: WorkshopWhereInput[]
    NOT?: WorkshopWhereInput | WorkshopWhereInput[]
    id?: StringFilter<"Workshop"> | string
    title?: StringFilter<"Workshop"> | string
    content?: StringFilter<"Workshop"> | string
    imgUrl?: StringFilter<"Workshop"> | string
    workshopDate?: DateTimeFilter<"Workshop"> | Date | string
    workshopStartTime?: StringFilter<"Workshop"> | string
    workshopEndTime?: StringFilter<"Workshop"> | string
    location?: StringFilter<"Workshop"> | string
    registerUrl?: StringNullableFilter<"Workshop"> | string | null
    marketingId?: StringNullableFilter<"Workshop"> | string | null
    engineeringId?: StringNullableFilter<"Workshop"> | string | null
    adminId?: StringNullableFilter<"Workshop"> | string | null
    createdAt?: DateTimeFilter<"Workshop"> | Date | string
    updatedAt?: DateTimeFilter<"Workshop"> | Date | string
    engineeringAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    marketingAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type WorkshopOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    workshopDate?: SortOrder
    workshopStartTime?: SortOrder
    workshopEndTime?: SortOrder
    location?: SortOrder
    registerUrl?: SortOrderInput | SortOrder
    marketingId?: SortOrderInput | SortOrder
    engineeringId?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    engineeringAdmin?: AdminOrderByWithRelationInput
    admin?: AdminOrderByWithRelationInput
    marketingAdmin?: AdminOrderByWithRelationInput
  }

  export type WorkshopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkshopWhereInput | WorkshopWhereInput[]
    OR?: WorkshopWhereInput[]
    NOT?: WorkshopWhereInput | WorkshopWhereInput[]
    title?: StringFilter<"Workshop"> | string
    content?: StringFilter<"Workshop"> | string
    imgUrl?: StringFilter<"Workshop"> | string
    workshopDate?: DateTimeFilter<"Workshop"> | Date | string
    workshopStartTime?: StringFilter<"Workshop"> | string
    workshopEndTime?: StringFilter<"Workshop"> | string
    location?: StringFilter<"Workshop"> | string
    registerUrl?: StringNullableFilter<"Workshop"> | string | null
    marketingId?: StringNullableFilter<"Workshop"> | string | null
    engineeringId?: StringNullableFilter<"Workshop"> | string | null
    adminId?: StringNullableFilter<"Workshop"> | string | null
    createdAt?: DateTimeFilter<"Workshop"> | Date | string
    updatedAt?: DateTimeFilter<"Workshop"> | Date | string
    engineeringAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    marketingAdmin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id">

  export type WorkshopOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    workshopDate?: SortOrder
    workshopStartTime?: SortOrder
    workshopEndTime?: SortOrder
    location?: SortOrder
    registerUrl?: SortOrderInput | SortOrder
    marketingId?: SortOrderInput | SortOrder
    engineeringId?: SortOrderInput | SortOrder
    adminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkshopCountOrderByAggregateInput
    _max?: WorkshopMaxOrderByAggregateInput
    _min?: WorkshopMinOrderByAggregateInput
  }

  export type WorkshopScalarWhereWithAggregatesInput = {
    AND?: WorkshopScalarWhereWithAggregatesInput | WorkshopScalarWhereWithAggregatesInput[]
    OR?: WorkshopScalarWhereWithAggregatesInput[]
    NOT?: WorkshopScalarWhereWithAggregatesInput | WorkshopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workshop"> | string
    title?: StringWithAggregatesFilter<"Workshop"> | string
    content?: StringWithAggregatesFilter<"Workshop"> | string
    imgUrl?: StringWithAggregatesFilter<"Workshop"> | string
    workshopDate?: DateTimeWithAggregatesFilter<"Workshop"> | Date | string
    workshopStartTime?: StringWithAggregatesFilter<"Workshop"> | string
    workshopEndTime?: StringWithAggregatesFilter<"Workshop"> | string
    location?: StringWithAggregatesFilter<"Workshop"> | string
    registerUrl?: StringNullableWithAggregatesFilter<"Workshop"> | string | null
    marketingId?: StringNullableWithAggregatesFilter<"Workshop"> | string | null
    engineeringId?: StringNullableWithAggregatesFilter<"Workshop"> | string | null
    adminId?: StringNullableWithAggregatesFilter<"Workshop"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Workshop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workshop"> | Date | string
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: StringFilter<"Comments"> | string
    blogId?: StringFilter<"Comments"> | string
    name?: StringFilter<"Comments"> | string
    comment?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    blogId?: SortOrder
    name?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    blog?: BlogOrderByWithRelationInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    blogId?: StringFilter<"Comments"> | string
    name?: StringFilter<"Comments"> | string
    comment?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
    blog?: XOR<BlogScalarRelationFilter, BlogWhereInput>
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    blogId?: SortOrder
    name?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comments"> | string
    blogId?: StringWithAggregatesFilter<"Comments"> | string
    name?: StringWithAggregatesFilter<"Comments"> | string
    comment?: StringWithAggregatesFilter<"Comments"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comments"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopCreateNestedManyWithoutAdminInput
    blogResearch?: BlogCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectCreateNestedManyWithoutAdminInput
    eventMarketing?: EventCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopUncheckedCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopUncheckedCreateNestedManyWithoutAdminInput
    blogResearch?: BlogUncheckedCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogUncheckedCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectUncheckedCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectUncheckedCreateNestedManyWithoutAdminInput
    eventMarketing?: EventUncheckedCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventUncheckedCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectUncheckedCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventUncheckedCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopUncheckedCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUncheckedUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUncheckedUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUncheckedUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUncheckedUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUncheckedUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUncheckedUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUncheckedUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUncheckedUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUncheckedUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    id?: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date | string
    authorName: string
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentCreateNestedManyWithoutBlogInput
    researchAdmin?: AdminCreateNestedOneWithoutBlogResearchInput
    admin?: AdminCreateNestedOneWithoutBlogAdminInput
    comments?: CommentsCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date | string
    authorName: string
    researchId?: string | null
    adminId?: string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentUncheckedCreateNestedManyWithoutBlogInput
    comments?: CommentsUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateManyWithoutBlogNestedInput
    researchAdmin?: AdminUpdateOneWithoutBlogResearchNestedInput
    admin?: AdminUpdateOneWithoutBlogAdminNestedInput
    comments?: CommentsUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    researchId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUncheckedUpdateManyWithoutBlogNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogCreateManyInput = {
    id?: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date | string
    authorName: string
    researchId?: string | null
    adminId?: string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    researchId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateInput = {
    id?: string
    subTitle: string
    content: string
    contentimgUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    blog: BlogCreateNestedOneWithoutContentInput
  }

  export type ContentUncheckedCreateInput = {
    id?: string
    blogId: string
    subTitle: string
    content: string
    contentimgUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentimgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: BlogUpdateOneRequiredWithoutContentNestedInput
  }

  export type ContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    subTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentimgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateManyInput = {
    id?: string
    blogId: string
    subTitle: string
    content: string
    contentimgUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentimgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    subTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentimgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    marketingAdmin?: AdminCreateNestedOneWithoutProjectMarketingInput
    engineeringAdmin?: AdminCreateNestedOneWithoutProjectsEngineeringInput
    admin?: AdminCreateNestedOneWithoutProjectAdminInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    marketingId?: string | null
    engineeringId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketingAdmin?: AdminUpdateOneWithoutProjectMarketingNestedInput
    engineeringAdmin?: AdminUpdateOneWithoutProjectsEngineeringNestedInput
    admin?: AdminUpdateOneWithoutProjectAdminNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    marketingId?: string | null
    engineeringId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    eventDate: Date | string
    eventStartTime: string
    eventEndTime: string
    location: string
    registerUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    engineeringAdmin?: AdminCreateNestedOneWithoutEventsEngineeringInput
    marketingAdmin?: AdminCreateNestedOneWithoutEventMarketingInput
    admin?: AdminCreateNestedOneWithoutEventAdminInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    eventDate: Date | string
    eventStartTime: string
    eventEndTime: string
    location: string
    registerUrl?: string | null
    engineeringId?: string | null
    marketingId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineeringAdmin?: AdminUpdateOneWithoutEventsEngineeringNestedInput
    marketingAdmin?: AdminUpdateOneWithoutEventMarketingNestedInput
    admin?: AdminUpdateOneWithoutEventAdminNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    eventDate: Date | string
    eventStartTime: string
    eventEndTime: string
    location: string
    registerUrl?: string | null
    engineeringId?: string | null
    marketingId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkshopCreateInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    workshopDate: Date | string
    workshopStartTime: string
    workshopEndTime: string
    location: string
    registerUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    engineeringAdmin?: AdminCreateNestedOneWithoutWorkshopsEngineeringInput
    admin?: AdminCreateNestedOneWithoutWorkshopsAdminInput
    marketingAdmin?: AdminCreateNestedOneWithoutWorkshopsMarketingInput
  }

  export type WorkshopUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    workshopDate: Date | string
    workshopStartTime: string
    workshopEndTime: string
    location: string
    registerUrl?: string | null
    marketingId?: string | null
    engineeringId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkshopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    workshopDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopStartTime?: StringFieldUpdateOperationsInput | string
    workshopEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineeringAdmin?: AdminUpdateOneWithoutWorkshopsEngineeringNestedInput
    admin?: AdminUpdateOneWithoutWorkshopsAdminNestedInput
    marketingAdmin?: AdminUpdateOneWithoutWorkshopsMarketingNestedInput
  }

  export type WorkshopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    workshopDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopStartTime?: StringFieldUpdateOperationsInput | string
    workshopEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkshopCreateManyInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    workshopDate: Date | string
    workshopStartTime: string
    workshopEndTime: string
    location: string
    registerUrl?: string | null
    marketingId?: string | null
    engineeringId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkshopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    workshopDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopStartTime?: StringFieldUpdateOperationsInput | string
    workshopEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkshopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    workshopDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopStartTime?: StringFieldUpdateOperationsInput | string
    workshopEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateInput = {
    id?: string
    name?: string
    comment: string
    createdAt?: Date | string
    blog: BlogCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: string
    blogId: string
    name?: string
    comment: string
    createdAt?: Date | string
  }

  export type CommentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    blog?: BlogUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsCreateManyInput = {
    id?: string
    blogId: string
    name?: string
    comment: string
    createdAt?: Date | string
  }

  export type CommentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    blogId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumAdminStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminStatus | EnumAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminStatusFilter<$PrismaModel> | $Enums.AdminStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkshopListRelationFilter = {
    every?: WorkshopWhereInput
    some?: WorkshopWhereInput
    none?: WorkshopWhereInput
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkshopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    inviteToken?: SortOrder
    inviteExpiresAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    inviteToken?: SortOrder
    inviteExpiresAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    status?: SortOrder
    inviteToken?: SortOrder
    inviteExpiresAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumAdminStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminStatus | EnumAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdminStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminStatusFilter<$PrismaModel>
    _max?: NestedEnumAdminStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type ContentListRelationFilter = {
    every?: ContentWhereInput
    some?: ContentWhereInput
    none?: ContentWhereInput
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type ContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    intro?: SortOrder
    imgUrl?: SortOrder
    closingNote?: SortOrder
    publishedDate?: SortOrder
    authorName?: SortOrder
    researchId?: SortOrder
    adminId?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    intro?: SortOrder
    imgUrl?: SortOrder
    closingNote?: SortOrder
    publishedDate?: SortOrder
    authorName?: SortOrder
    researchId?: SortOrder
    adminId?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    intro?: SortOrder
    imgUrl?: SortOrder
    closingNote?: SortOrder
    publishedDate?: SortOrder
    authorName?: SortOrder
    researchId?: SortOrder
    adminId?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type BlogScalarRelationFilter = {
    is?: BlogWhereInput
    isNot?: BlogWhereInput
  }

  export type ContentCountOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    subTitle?: SortOrder
    content?: SortOrder
    contentimgUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentMaxOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    subTitle?: SortOrder
    content?: SortOrder
    contentimgUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContentMinOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    subTitle?: SortOrder
    content?: SortOrder
    contentimgUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    marketingId?: SortOrder
    engineeringId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    marketingId?: SortOrder
    engineeringId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    marketingId?: SortOrder
    engineeringId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    eventDate?: SortOrder
    eventStartTime?: SortOrder
    eventEndTime?: SortOrder
    location?: SortOrder
    registerUrl?: SortOrder
    engineeringId?: SortOrder
    marketingId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    eventDate?: SortOrder
    eventStartTime?: SortOrder
    eventEndTime?: SortOrder
    location?: SortOrder
    registerUrl?: SortOrder
    engineeringId?: SortOrder
    marketingId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    eventDate?: SortOrder
    eventStartTime?: SortOrder
    eventEndTime?: SortOrder
    location?: SortOrder
    registerUrl?: SortOrder
    engineeringId?: SortOrder
    marketingId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkshopCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    workshopDate?: SortOrder
    workshopStartTime?: SortOrder
    workshopEndTime?: SortOrder
    location?: SortOrder
    registerUrl?: SortOrder
    marketingId?: SortOrder
    engineeringId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkshopMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    workshopDate?: SortOrder
    workshopStartTime?: SortOrder
    workshopEndTime?: SortOrder
    location?: SortOrder
    registerUrl?: SortOrder
    marketingId?: SortOrder
    engineeringId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkshopMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    imgUrl?: SortOrder
    workshopDate?: SortOrder
    workshopStartTime?: SortOrder
    workshopEndTime?: SortOrder
    location?: SortOrder
    registerUrl?: SortOrder
    marketingId?: SortOrder
    engineeringId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    name?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    name?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    blogId?: SortOrder
    name?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkshopCreateNestedManyWithoutMarketingAdminInput = {
    create?: XOR<WorkshopCreateWithoutMarketingAdminInput, WorkshopUncheckedCreateWithoutMarketingAdminInput> | WorkshopCreateWithoutMarketingAdminInput[] | WorkshopUncheckedCreateWithoutMarketingAdminInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutMarketingAdminInput | WorkshopCreateOrConnectWithoutMarketingAdminInput[]
    createMany?: WorkshopCreateManyMarketingAdminInputEnvelope
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
  }

  export type WorkshopCreateNestedManyWithoutAdminInput = {
    create?: XOR<WorkshopCreateWithoutAdminInput, WorkshopUncheckedCreateWithoutAdminInput> | WorkshopCreateWithoutAdminInput[] | WorkshopUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutAdminInput | WorkshopCreateOrConnectWithoutAdminInput[]
    createMany?: WorkshopCreateManyAdminInputEnvelope
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
  }

  export type BlogCreateNestedManyWithoutResearchAdminInput = {
    create?: XOR<BlogCreateWithoutResearchAdminInput, BlogUncheckedCreateWithoutResearchAdminInput> | BlogCreateWithoutResearchAdminInput[] | BlogUncheckedCreateWithoutResearchAdminInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutResearchAdminInput | BlogCreateOrConnectWithoutResearchAdminInput[]
    createMany?: BlogCreateManyResearchAdminInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BlogCreateNestedManyWithoutAdminInput = {
    create?: XOR<BlogCreateWithoutAdminInput, BlogUncheckedCreateWithoutAdminInput> | BlogCreateWithoutAdminInput[] | BlogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAdminInput | BlogCreateOrConnectWithoutAdminInput[]
    createMany?: BlogCreateManyAdminInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutMarketingAdminInput = {
    create?: XOR<ProjectCreateWithoutMarketingAdminInput, ProjectUncheckedCreateWithoutMarketingAdminInput> | ProjectCreateWithoutMarketingAdminInput[] | ProjectUncheckedCreateWithoutMarketingAdminInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutMarketingAdminInput | ProjectCreateOrConnectWithoutMarketingAdminInput[]
    createMany?: ProjectCreateManyMarketingAdminInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutAdminInput = {
    create?: XOR<ProjectCreateWithoutAdminInput, ProjectUncheckedCreateWithoutAdminInput> | ProjectCreateWithoutAdminInput[] | ProjectUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAdminInput | ProjectCreateOrConnectWithoutAdminInput[]
    createMany?: ProjectCreateManyAdminInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutMarketingAdminInput = {
    create?: XOR<EventCreateWithoutMarketingAdminInput, EventUncheckedCreateWithoutMarketingAdminInput> | EventCreateWithoutMarketingAdminInput[] | EventUncheckedCreateWithoutMarketingAdminInput[]
    connectOrCreate?: EventCreateOrConnectWithoutMarketingAdminInput | EventCreateOrConnectWithoutMarketingAdminInput[]
    createMany?: EventCreateManyMarketingAdminInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutAdminInput = {
    create?: XOR<EventCreateWithoutAdminInput, EventUncheckedCreateWithoutAdminInput> | EventCreateWithoutAdminInput[] | EventUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAdminInput | EventCreateOrConnectWithoutAdminInput[]
    createMany?: EventCreateManyAdminInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutEngineeringAdminInput = {
    create?: XOR<ProjectCreateWithoutEngineeringAdminInput, ProjectUncheckedCreateWithoutEngineeringAdminInput> | ProjectCreateWithoutEngineeringAdminInput[] | ProjectUncheckedCreateWithoutEngineeringAdminInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutEngineeringAdminInput | ProjectCreateOrConnectWithoutEngineeringAdminInput[]
    createMany?: ProjectCreateManyEngineeringAdminInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutEngineeringAdminInput = {
    create?: XOR<EventCreateWithoutEngineeringAdminInput, EventUncheckedCreateWithoutEngineeringAdminInput> | EventCreateWithoutEngineeringAdminInput[] | EventUncheckedCreateWithoutEngineeringAdminInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEngineeringAdminInput | EventCreateOrConnectWithoutEngineeringAdminInput[]
    createMany?: EventCreateManyEngineeringAdminInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type WorkshopCreateNestedManyWithoutEngineeringAdminInput = {
    create?: XOR<WorkshopCreateWithoutEngineeringAdminInput, WorkshopUncheckedCreateWithoutEngineeringAdminInput> | WorkshopCreateWithoutEngineeringAdminInput[] | WorkshopUncheckedCreateWithoutEngineeringAdminInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutEngineeringAdminInput | WorkshopCreateOrConnectWithoutEngineeringAdminInput[]
    createMany?: WorkshopCreateManyEngineeringAdminInputEnvelope
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
  }

  export type WorkshopUncheckedCreateNestedManyWithoutMarketingAdminInput = {
    create?: XOR<WorkshopCreateWithoutMarketingAdminInput, WorkshopUncheckedCreateWithoutMarketingAdminInput> | WorkshopCreateWithoutMarketingAdminInput[] | WorkshopUncheckedCreateWithoutMarketingAdminInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutMarketingAdminInput | WorkshopCreateOrConnectWithoutMarketingAdminInput[]
    createMany?: WorkshopCreateManyMarketingAdminInputEnvelope
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
  }

  export type WorkshopUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<WorkshopCreateWithoutAdminInput, WorkshopUncheckedCreateWithoutAdminInput> | WorkshopCreateWithoutAdminInput[] | WorkshopUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutAdminInput | WorkshopCreateOrConnectWithoutAdminInput[]
    createMany?: WorkshopCreateManyAdminInputEnvelope
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutResearchAdminInput = {
    create?: XOR<BlogCreateWithoutResearchAdminInput, BlogUncheckedCreateWithoutResearchAdminInput> | BlogCreateWithoutResearchAdminInput[] | BlogUncheckedCreateWithoutResearchAdminInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutResearchAdminInput | BlogCreateOrConnectWithoutResearchAdminInput[]
    createMany?: BlogCreateManyResearchAdminInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type BlogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<BlogCreateWithoutAdminInput, BlogUncheckedCreateWithoutAdminInput> | BlogCreateWithoutAdminInput[] | BlogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAdminInput | BlogCreateOrConnectWithoutAdminInput[]
    createMany?: BlogCreateManyAdminInputEnvelope
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutMarketingAdminInput = {
    create?: XOR<ProjectCreateWithoutMarketingAdminInput, ProjectUncheckedCreateWithoutMarketingAdminInput> | ProjectCreateWithoutMarketingAdminInput[] | ProjectUncheckedCreateWithoutMarketingAdminInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutMarketingAdminInput | ProjectCreateOrConnectWithoutMarketingAdminInput[]
    createMany?: ProjectCreateManyMarketingAdminInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ProjectCreateWithoutAdminInput, ProjectUncheckedCreateWithoutAdminInput> | ProjectCreateWithoutAdminInput[] | ProjectUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAdminInput | ProjectCreateOrConnectWithoutAdminInput[]
    createMany?: ProjectCreateManyAdminInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutMarketingAdminInput = {
    create?: XOR<EventCreateWithoutMarketingAdminInput, EventUncheckedCreateWithoutMarketingAdminInput> | EventCreateWithoutMarketingAdminInput[] | EventUncheckedCreateWithoutMarketingAdminInput[]
    connectOrCreate?: EventCreateOrConnectWithoutMarketingAdminInput | EventCreateOrConnectWithoutMarketingAdminInput[]
    createMany?: EventCreateManyMarketingAdminInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<EventCreateWithoutAdminInput, EventUncheckedCreateWithoutAdminInput> | EventCreateWithoutAdminInput[] | EventUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAdminInput | EventCreateOrConnectWithoutAdminInput[]
    createMany?: EventCreateManyAdminInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutEngineeringAdminInput = {
    create?: XOR<ProjectCreateWithoutEngineeringAdminInput, ProjectUncheckedCreateWithoutEngineeringAdminInput> | ProjectCreateWithoutEngineeringAdminInput[] | ProjectUncheckedCreateWithoutEngineeringAdminInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutEngineeringAdminInput | ProjectCreateOrConnectWithoutEngineeringAdminInput[]
    createMany?: ProjectCreateManyEngineeringAdminInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutEngineeringAdminInput = {
    create?: XOR<EventCreateWithoutEngineeringAdminInput, EventUncheckedCreateWithoutEngineeringAdminInput> | EventCreateWithoutEngineeringAdminInput[] | EventUncheckedCreateWithoutEngineeringAdminInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEngineeringAdminInput | EventCreateOrConnectWithoutEngineeringAdminInput[]
    createMany?: EventCreateManyEngineeringAdminInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type WorkshopUncheckedCreateNestedManyWithoutEngineeringAdminInput = {
    create?: XOR<WorkshopCreateWithoutEngineeringAdminInput, WorkshopUncheckedCreateWithoutEngineeringAdminInput> | WorkshopCreateWithoutEngineeringAdminInput[] | WorkshopUncheckedCreateWithoutEngineeringAdminInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutEngineeringAdminInput | WorkshopCreateOrConnectWithoutEngineeringAdminInput[]
    createMany?: WorkshopCreateManyEngineeringAdminInputEnvelope
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumAdminStatusFieldUpdateOperationsInput = {
    set?: $Enums.AdminStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkshopUpdateManyWithoutMarketingAdminNestedInput = {
    create?: XOR<WorkshopCreateWithoutMarketingAdminInput, WorkshopUncheckedCreateWithoutMarketingAdminInput> | WorkshopCreateWithoutMarketingAdminInput[] | WorkshopUncheckedCreateWithoutMarketingAdminInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutMarketingAdminInput | WorkshopCreateOrConnectWithoutMarketingAdminInput[]
    upsert?: WorkshopUpsertWithWhereUniqueWithoutMarketingAdminInput | WorkshopUpsertWithWhereUniqueWithoutMarketingAdminInput[]
    createMany?: WorkshopCreateManyMarketingAdminInputEnvelope
    set?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    disconnect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    delete?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    update?: WorkshopUpdateWithWhereUniqueWithoutMarketingAdminInput | WorkshopUpdateWithWhereUniqueWithoutMarketingAdminInput[]
    updateMany?: WorkshopUpdateManyWithWhereWithoutMarketingAdminInput | WorkshopUpdateManyWithWhereWithoutMarketingAdminInput[]
    deleteMany?: WorkshopScalarWhereInput | WorkshopScalarWhereInput[]
  }

  export type WorkshopUpdateManyWithoutAdminNestedInput = {
    create?: XOR<WorkshopCreateWithoutAdminInput, WorkshopUncheckedCreateWithoutAdminInput> | WorkshopCreateWithoutAdminInput[] | WorkshopUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutAdminInput | WorkshopCreateOrConnectWithoutAdminInput[]
    upsert?: WorkshopUpsertWithWhereUniqueWithoutAdminInput | WorkshopUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: WorkshopCreateManyAdminInputEnvelope
    set?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    disconnect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    delete?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    update?: WorkshopUpdateWithWhereUniqueWithoutAdminInput | WorkshopUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: WorkshopUpdateManyWithWhereWithoutAdminInput | WorkshopUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: WorkshopScalarWhereInput | WorkshopScalarWhereInput[]
  }

  export type BlogUpdateManyWithoutResearchAdminNestedInput = {
    create?: XOR<BlogCreateWithoutResearchAdminInput, BlogUncheckedCreateWithoutResearchAdminInput> | BlogCreateWithoutResearchAdminInput[] | BlogUncheckedCreateWithoutResearchAdminInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutResearchAdminInput | BlogCreateOrConnectWithoutResearchAdminInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutResearchAdminInput | BlogUpsertWithWhereUniqueWithoutResearchAdminInput[]
    createMany?: BlogCreateManyResearchAdminInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutResearchAdminInput | BlogUpdateWithWhereUniqueWithoutResearchAdminInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutResearchAdminInput | BlogUpdateManyWithWhereWithoutResearchAdminInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BlogUpdateManyWithoutAdminNestedInput = {
    create?: XOR<BlogCreateWithoutAdminInput, BlogUncheckedCreateWithoutAdminInput> | BlogCreateWithoutAdminInput[] | BlogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAdminInput | BlogCreateOrConnectWithoutAdminInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutAdminInput | BlogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: BlogCreateManyAdminInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutAdminInput | BlogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutAdminInput | BlogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutMarketingAdminNestedInput = {
    create?: XOR<ProjectCreateWithoutMarketingAdminInput, ProjectUncheckedCreateWithoutMarketingAdminInput> | ProjectCreateWithoutMarketingAdminInput[] | ProjectUncheckedCreateWithoutMarketingAdminInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutMarketingAdminInput | ProjectCreateOrConnectWithoutMarketingAdminInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutMarketingAdminInput | ProjectUpsertWithWhereUniqueWithoutMarketingAdminInput[]
    createMany?: ProjectCreateManyMarketingAdminInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutMarketingAdminInput | ProjectUpdateWithWhereUniqueWithoutMarketingAdminInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutMarketingAdminInput | ProjectUpdateManyWithWhereWithoutMarketingAdminInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ProjectCreateWithoutAdminInput, ProjectUncheckedCreateWithoutAdminInput> | ProjectCreateWithoutAdminInput[] | ProjectUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAdminInput | ProjectCreateOrConnectWithoutAdminInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutAdminInput | ProjectUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ProjectCreateManyAdminInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutAdminInput | ProjectUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutAdminInput | ProjectUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type EventUpdateManyWithoutMarketingAdminNestedInput = {
    create?: XOR<EventCreateWithoutMarketingAdminInput, EventUncheckedCreateWithoutMarketingAdminInput> | EventCreateWithoutMarketingAdminInput[] | EventUncheckedCreateWithoutMarketingAdminInput[]
    connectOrCreate?: EventCreateOrConnectWithoutMarketingAdminInput | EventCreateOrConnectWithoutMarketingAdminInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutMarketingAdminInput | EventUpsertWithWhereUniqueWithoutMarketingAdminInput[]
    createMany?: EventCreateManyMarketingAdminInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutMarketingAdminInput | EventUpdateWithWhereUniqueWithoutMarketingAdminInput[]
    updateMany?: EventUpdateManyWithWhereWithoutMarketingAdminInput | EventUpdateManyWithWhereWithoutMarketingAdminInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUpdateManyWithoutAdminNestedInput = {
    create?: XOR<EventCreateWithoutAdminInput, EventUncheckedCreateWithoutAdminInput> | EventCreateWithoutAdminInput[] | EventUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAdminInput | EventCreateOrConnectWithoutAdminInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutAdminInput | EventUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: EventCreateManyAdminInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutAdminInput | EventUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: EventUpdateManyWithWhereWithoutAdminInput | EventUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutEngineeringAdminNestedInput = {
    create?: XOR<ProjectCreateWithoutEngineeringAdminInput, ProjectUncheckedCreateWithoutEngineeringAdminInput> | ProjectCreateWithoutEngineeringAdminInput[] | ProjectUncheckedCreateWithoutEngineeringAdminInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutEngineeringAdminInput | ProjectCreateOrConnectWithoutEngineeringAdminInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutEngineeringAdminInput | ProjectUpsertWithWhereUniqueWithoutEngineeringAdminInput[]
    createMany?: ProjectCreateManyEngineeringAdminInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutEngineeringAdminInput | ProjectUpdateWithWhereUniqueWithoutEngineeringAdminInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutEngineeringAdminInput | ProjectUpdateManyWithWhereWithoutEngineeringAdminInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type EventUpdateManyWithoutEngineeringAdminNestedInput = {
    create?: XOR<EventCreateWithoutEngineeringAdminInput, EventUncheckedCreateWithoutEngineeringAdminInput> | EventCreateWithoutEngineeringAdminInput[] | EventUncheckedCreateWithoutEngineeringAdminInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEngineeringAdminInput | EventCreateOrConnectWithoutEngineeringAdminInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEngineeringAdminInput | EventUpsertWithWhereUniqueWithoutEngineeringAdminInput[]
    createMany?: EventCreateManyEngineeringAdminInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEngineeringAdminInput | EventUpdateWithWhereUniqueWithoutEngineeringAdminInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEngineeringAdminInput | EventUpdateManyWithWhereWithoutEngineeringAdminInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type WorkshopUpdateManyWithoutEngineeringAdminNestedInput = {
    create?: XOR<WorkshopCreateWithoutEngineeringAdminInput, WorkshopUncheckedCreateWithoutEngineeringAdminInput> | WorkshopCreateWithoutEngineeringAdminInput[] | WorkshopUncheckedCreateWithoutEngineeringAdminInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutEngineeringAdminInput | WorkshopCreateOrConnectWithoutEngineeringAdminInput[]
    upsert?: WorkshopUpsertWithWhereUniqueWithoutEngineeringAdminInput | WorkshopUpsertWithWhereUniqueWithoutEngineeringAdminInput[]
    createMany?: WorkshopCreateManyEngineeringAdminInputEnvelope
    set?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    disconnect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    delete?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    update?: WorkshopUpdateWithWhereUniqueWithoutEngineeringAdminInput | WorkshopUpdateWithWhereUniqueWithoutEngineeringAdminInput[]
    updateMany?: WorkshopUpdateManyWithWhereWithoutEngineeringAdminInput | WorkshopUpdateManyWithWhereWithoutEngineeringAdminInput[]
    deleteMany?: WorkshopScalarWhereInput | WorkshopScalarWhereInput[]
  }

  export type WorkshopUncheckedUpdateManyWithoutMarketingAdminNestedInput = {
    create?: XOR<WorkshopCreateWithoutMarketingAdminInput, WorkshopUncheckedCreateWithoutMarketingAdminInput> | WorkshopCreateWithoutMarketingAdminInput[] | WorkshopUncheckedCreateWithoutMarketingAdminInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutMarketingAdminInput | WorkshopCreateOrConnectWithoutMarketingAdminInput[]
    upsert?: WorkshopUpsertWithWhereUniqueWithoutMarketingAdminInput | WorkshopUpsertWithWhereUniqueWithoutMarketingAdminInput[]
    createMany?: WorkshopCreateManyMarketingAdminInputEnvelope
    set?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    disconnect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    delete?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    update?: WorkshopUpdateWithWhereUniqueWithoutMarketingAdminInput | WorkshopUpdateWithWhereUniqueWithoutMarketingAdminInput[]
    updateMany?: WorkshopUpdateManyWithWhereWithoutMarketingAdminInput | WorkshopUpdateManyWithWhereWithoutMarketingAdminInput[]
    deleteMany?: WorkshopScalarWhereInput | WorkshopScalarWhereInput[]
  }

  export type WorkshopUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<WorkshopCreateWithoutAdminInput, WorkshopUncheckedCreateWithoutAdminInput> | WorkshopCreateWithoutAdminInput[] | WorkshopUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutAdminInput | WorkshopCreateOrConnectWithoutAdminInput[]
    upsert?: WorkshopUpsertWithWhereUniqueWithoutAdminInput | WorkshopUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: WorkshopCreateManyAdminInputEnvelope
    set?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    disconnect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    delete?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    update?: WorkshopUpdateWithWhereUniqueWithoutAdminInput | WorkshopUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: WorkshopUpdateManyWithWhereWithoutAdminInput | WorkshopUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: WorkshopScalarWhereInput | WorkshopScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutResearchAdminNestedInput = {
    create?: XOR<BlogCreateWithoutResearchAdminInput, BlogUncheckedCreateWithoutResearchAdminInput> | BlogCreateWithoutResearchAdminInput[] | BlogUncheckedCreateWithoutResearchAdminInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutResearchAdminInput | BlogCreateOrConnectWithoutResearchAdminInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutResearchAdminInput | BlogUpsertWithWhereUniqueWithoutResearchAdminInput[]
    createMany?: BlogCreateManyResearchAdminInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutResearchAdminInput | BlogUpdateWithWhereUniqueWithoutResearchAdminInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutResearchAdminInput | BlogUpdateManyWithWhereWithoutResearchAdminInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type BlogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<BlogCreateWithoutAdminInput, BlogUncheckedCreateWithoutAdminInput> | BlogCreateWithoutAdminInput[] | BlogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BlogCreateOrConnectWithoutAdminInput | BlogCreateOrConnectWithoutAdminInput[]
    upsert?: BlogUpsertWithWhereUniqueWithoutAdminInput | BlogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: BlogCreateManyAdminInputEnvelope
    set?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    disconnect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    delete?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    connect?: BlogWhereUniqueInput | BlogWhereUniqueInput[]
    update?: BlogUpdateWithWhereUniqueWithoutAdminInput | BlogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: BlogUpdateManyWithWhereWithoutAdminInput | BlogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: BlogScalarWhereInput | BlogScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutMarketingAdminNestedInput = {
    create?: XOR<ProjectCreateWithoutMarketingAdminInput, ProjectUncheckedCreateWithoutMarketingAdminInput> | ProjectCreateWithoutMarketingAdminInput[] | ProjectUncheckedCreateWithoutMarketingAdminInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutMarketingAdminInput | ProjectCreateOrConnectWithoutMarketingAdminInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutMarketingAdminInput | ProjectUpsertWithWhereUniqueWithoutMarketingAdminInput[]
    createMany?: ProjectCreateManyMarketingAdminInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutMarketingAdminInput | ProjectUpdateWithWhereUniqueWithoutMarketingAdminInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutMarketingAdminInput | ProjectUpdateManyWithWhereWithoutMarketingAdminInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ProjectCreateWithoutAdminInput, ProjectUncheckedCreateWithoutAdminInput> | ProjectCreateWithoutAdminInput[] | ProjectUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutAdminInput | ProjectCreateOrConnectWithoutAdminInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutAdminInput | ProjectUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ProjectCreateManyAdminInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutAdminInput | ProjectUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutAdminInput | ProjectUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutMarketingAdminNestedInput = {
    create?: XOR<EventCreateWithoutMarketingAdminInput, EventUncheckedCreateWithoutMarketingAdminInput> | EventCreateWithoutMarketingAdminInput[] | EventUncheckedCreateWithoutMarketingAdminInput[]
    connectOrCreate?: EventCreateOrConnectWithoutMarketingAdminInput | EventCreateOrConnectWithoutMarketingAdminInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutMarketingAdminInput | EventUpsertWithWhereUniqueWithoutMarketingAdminInput[]
    createMany?: EventCreateManyMarketingAdminInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutMarketingAdminInput | EventUpdateWithWhereUniqueWithoutMarketingAdminInput[]
    updateMany?: EventUpdateManyWithWhereWithoutMarketingAdminInput | EventUpdateManyWithWhereWithoutMarketingAdminInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<EventCreateWithoutAdminInput, EventUncheckedCreateWithoutAdminInput> | EventCreateWithoutAdminInput[] | EventUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: EventCreateOrConnectWithoutAdminInput | EventCreateOrConnectWithoutAdminInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutAdminInput | EventUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: EventCreateManyAdminInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutAdminInput | EventUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: EventUpdateManyWithWhereWithoutAdminInput | EventUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutEngineeringAdminNestedInput = {
    create?: XOR<ProjectCreateWithoutEngineeringAdminInput, ProjectUncheckedCreateWithoutEngineeringAdminInput> | ProjectCreateWithoutEngineeringAdminInput[] | ProjectUncheckedCreateWithoutEngineeringAdminInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutEngineeringAdminInput | ProjectCreateOrConnectWithoutEngineeringAdminInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutEngineeringAdminInput | ProjectUpsertWithWhereUniqueWithoutEngineeringAdminInput[]
    createMany?: ProjectCreateManyEngineeringAdminInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutEngineeringAdminInput | ProjectUpdateWithWhereUniqueWithoutEngineeringAdminInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutEngineeringAdminInput | ProjectUpdateManyWithWhereWithoutEngineeringAdminInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutEngineeringAdminNestedInput = {
    create?: XOR<EventCreateWithoutEngineeringAdminInput, EventUncheckedCreateWithoutEngineeringAdminInput> | EventCreateWithoutEngineeringAdminInput[] | EventUncheckedCreateWithoutEngineeringAdminInput[]
    connectOrCreate?: EventCreateOrConnectWithoutEngineeringAdminInput | EventCreateOrConnectWithoutEngineeringAdminInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutEngineeringAdminInput | EventUpsertWithWhereUniqueWithoutEngineeringAdminInput[]
    createMany?: EventCreateManyEngineeringAdminInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutEngineeringAdminInput | EventUpdateWithWhereUniqueWithoutEngineeringAdminInput[]
    updateMany?: EventUpdateManyWithWhereWithoutEngineeringAdminInput | EventUpdateManyWithWhereWithoutEngineeringAdminInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type WorkshopUncheckedUpdateManyWithoutEngineeringAdminNestedInput = {
    create?: XOR<WorkshopCreateWithoutEngineeringAdminInput, WorkshopUncheckedCreateWithoutEngineeringAdminInput> | WorkshopCreateWithoutEngineeringAdminInput[] | WorkshopUncheckedCreateWithoutEngineeringAdminInput[]
    connectOrCreate?: WorkshopCreateOrConnectWithoutEngineeringAdminInput | WorkshopCreateOrConnectWithoutEngineeringAdminInput[]
    upsert?: WorkshopUpsertWithWhereUniqueWithoutEngineeringAdminInput | WorkshopUpsertWithWhereUniqueWithoutEngineeringAdminInput[]
    createMany?: WorkshopCreateManyEngineeringAdminInputEnvelope
    set?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    disconnect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    delete?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    connect?: WorkshopWhereUniqueInput | WorkshopWhereUniqueInput[]
    update?: WorkshopUpdateWithWhereUniqueWithoutEngineeringAdminInput | WorkshopUpdateWithWhereUniqueWithoutEngineeringAdminInput[]
    updateMany?: WorkshopUpdateManyWithWhereWithoutEngineeringAdminInput | WorkshopUpdateManyWithWhereWithoutEngineeringAdminInput[]
    deleteMany?: WorkshopScalarWhereInput | WorkshopScalarWhereInput[]
  }

  export type ContentCreateNestedManyWithoutBlogInput = {
    create?: XOR<ContentCreateWithoutBlogInput, ContentUncheckedCreateWithoutBlogInput> | ContentCreateWithoutBlogInput[] | ContentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutBlogInput | ContentCreateOrConnectWithoutBlogInput[]
    createMany?: ContentCreateManyBlogInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type AdminCreateNestedOneWithoutBlogResearchInput = {
    create?: XOR<AdminCreateWithoutBlogResearchInput, AdminUncheckedCreateWithoutBlogResearchInput>
    connectOrCreate?: AdminCreateOrConnectWithoutBlogResearchInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutBlogAdminInput = {
    create?: XOR<AdminCreateWithoutBlogAdminInput, AdminUncheckedCreateWithoutBlogAdminInput>
    connectOrCreate?: AdminCreateOrConnectWithoutBlogAdminInput
    connect?: AdminWhereUniqueInput
  }

  export type CommentsCreateNestedManyWithoutBlogInput = {
    create?: XOR<CommentsCreateWithoutBlogInput, CommentsUncheckedCreateWithoutBlogInput> | CommentsCreateWithoutBlogInput[] | CommentsUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutBlogInput | CommentsCreateOrConnectWithoutBlogInput[]
    createMany?: CommentsCreateManyBlogInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type ContentUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<ContentCreateWithoutBlogInput, ContentUncheckedCreateWithoutBlogInput> | ContentCreateWithoutBlogInput[] | ContentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutBlogInput | ContentCreateOrConnectWithoutBlogInput[]
    createMany?: ContentCreateManyBlogInputEnvelope
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<CommentsCreateWithoutBlogInput, CommentsUncheckedCreateWithoutBlogInput> | CommentsCreateWithoutBlogInput[] | CommentsUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutBlogInput | CommentsCreateOrConnectWithoutBlogInput[]
    createMany?: CommentsCreateManyBlogInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type ContentUpdateManyWithoutBlogNestedInput = {
    create?: XOR<ContentCreateWithoutBlogInput, ContentUncheckedCreateWithoutBlogInput> | ContentCreateWithoutBlogInput[] | ContentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutBlogInput | ContentCreateOrConnectWithoutBlogInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutBlogInput | ContentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: ContentCreateManyBlogInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutBlogInput | ContentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutBlogInput | ContentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type AdminUpdateOneWithoutBlogResearchNestedInput = {
    create?: XOR<AdminCreateWithoutBlogResearchInput, AdminUncheckedCreateWithoutBlogResearchInput>
    connectOrCreate?: AdminCreateOrConnectWithoutBlogResearchInput
    upsert?: AdminUpsertWithoutBlogResearchInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutBlogResearchInput, AdminUpdateWithoutBlogResearchInput>, AdminUncheckedUpdateWithoutBlogResearchInput>
  }

  export type AdminUpdateOneWithoutBlogAdminNestedInput = {
    create?: XOR<AdminCreateWithoutBlogAdminInput, AdminUncheckedCreateWithoutBlogAdminInput>
    connectOrCreate?: AdminCreateOrConnectWithoutBlogAdminInput
    upsert?: AdminUpsertWithoutBlogAdminInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutBlogAdminInput, AdminUpdateWithoutBlogAdminInput>, AdminUncheckedUpdateWithoutBlogAdminInput>
  }

  export type CommentsUpdateManyWithoutBlogNestedInput = {
    create?: XOR<CommentsCreateWithoutBlogInput, CommentsUncheckedCreateWithoutBlogInput> | CommentsCreateWithoutBlogInput[] | CommentsUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutBlogInput | CommentsCreateOrConnectWithoutBlogInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutBlogInput | CommentsUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: CommentsCreateManyBlogInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutBlogInput | CommentsUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutBlogInput | CommentsUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type ContentUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<ContentCreateWithoutBlogInput, ContentUncheckedCreateWithoutBlogInput> | ContentCreateWithoutBlogInput[] | ContentUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: ContentCreateOrConnectWithoutBlogInput | ContentCreateOrConnectWithoutBlogInput[]
    upsert?: ContentUpsertWithWhereUniqueWithoutBlogInput | ContentUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: ContentCreateManyBlogInputEnvelope
    set?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    disconnect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    delete?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    connect?: ContentWhereUniqueInput | ContentWhereUniqueInput[]
    update?: ContentUpdateWithWhereUniqueWithoutBlogInput | ContentUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: ContentUpdateManyWithWhereWithoutBlogInput | ContentUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: ContentScalarWhereInput | ContentScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutBlogNestedInput = {
    create?: XOR<CommentsCreateWithoutBlogInput, CommentsUncheckedCreateWithoutBlogInput> | CommentsCreateWithoutBlogInput[] | CommentsUncheckedCreateWithoutBlogInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutBlogInput | CommentsCreateOrConnectWithoutBlogInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutBlogInput | CommentsUpsertWithWhereUniqueWithoutBlogInput[]
    createMany?: CommentsCreateManyBlogInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutBlogInput | CommentsUpdateWithWhereUniqueWithoutBlogInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutBlogInput | CommentsUpdateManyWithWhereWithoutBlogInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type BlogCreateNestedOneWithoutContentInput = {
    create?: XOR<BlogCreateWithoutContentInput, BlogUncheckedCreateWithoutContentInput>
    connectOrCreate?: BlogCreateOrConnectWithoutContentInput
    connect?: BlogWhereUniqueInput
  }

  export type BlogUpdateOneRequiredWithoutContentNestedInput = {
    create?: XOR<BlogCreateWithoutContentInput, BlogUncheckedCreateWithoutContentInput>
    connectOrCreate?: BlogCreateOrConnectWithoutContentInput
    upsert?: BlogUpsertWithoutContentInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutContentInput, BlogUpdateWithoutContentInput>, BlogUncheckedUpdateWithoutContentInput>
  }

  export type AdminCreateNestedOneWithoutProjectMarketingInput = {
    create?: XOR<AdminCreateWithoutProjectMarketingInput, AdminUncheckedCreateWithoutProjectMarketingInput>
    connectOrCreate?: AdminCreateOrConnectWithoutProjectMarketingInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutProjectsEngineeringInput = {
    create?: XOR<AdminCreateWithoutProjectsEngineeringInput, AdminUncheckedCreateWithoutProjectsEngineeringInput>
    connectOrCreate?: AdminCreateOrConnectWithoutProjectsEngineeringInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutProjectAdminInput = {
    create?: XOR<AdminCreateWithoutProjectAdminInput, AdminUncheckedCreateWithoutProjectAdminInput>
    connectOrCreate?: AdminCreateOrConnectWithoutProjectAdminInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneWithoutProjectMarketingNestedInput = {
    create?: XOR<AdminCreateWithoutProjectMarketingInput, AdminUncheckedCreateWithoutProjectMarketingInput>
    connectOrCreate?: AdminCreateOrConnectWithoutProjectMarketingInput
    upsert?: AdminUpsertWithoutProjectMarketingInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutProjectMarketingInput, AdminUpdateWithoutProjectMarketingInput>, AdminUncheckedUpdateWithoutProjectMarketingInput>
  }

  export type AdminUpdateOneWithoutProjectsEngineeringNestedInput = {
    create?: XOR<AdminCreateWithoutProjectsEngineeringInput, AdminUncheckedCreateWithoutProjectsEngineeringInput>
    connectOrCreate?: AdminCreateOrConnectWithoutProjectsEngineeringInput
    upsert?: AdminUpsertWithoutProjectsEngineeringInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutProjectsEngineeringInput, AdminUpdateWithoutProjectsEngineeringInput>, AdminUncheckedUpdateWithoutProjectsEngineeringInput>
  }

  export type AdminUpdateOneWithoutProjectAdminNestedInput = {
    create?: XOR<AdminCreateWithoutProjectAdminInput, AdminUncheckedCreateWithoutProjectAdminInput>
    connectOrCreate?: AdminCreateOrConnectWithoutProjectAdminInput
    upsert?: AdminUpsertWithoutProjectAdminInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutProjectAdminInput, AdminUpdateWithoutProjectAdminInput>, AdminUncheckedUpdateWithoutProjectAdminInput>
  }

  export type AdminCreateNestedOneWithoutEventsEngineeringInput = {
    create?: XOR<AdminCreateWithoutEventsEngineeringInput, AdminUncheckedCreateWithoutEventsEngineeringInput>
    connectOrCreate?: AdminCreateOrConnectWithoutEventsEngineeringInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutEventMarketingInput = {
    create?: XOR<AdminCreateWithoutEventMarketingInput, AdminUncheckedCreateWithoutEventMarketingInput>
    connectOrCreate?: AdminCreateOrConnectWithoutEventMarketingInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutEventAdminInput = {
    create?: XOR<AdminCreateWithoutEventAdminInput, AdminUncheckedCreateWithoutEventAdminInput>
    connectOrCreate?: AdminCreateOrConnectWithoutEventAdminInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneWithoutEventsEngineeringNestedInput = {
    create?: XOR<AdminCreateWithoutEventsEngineeringInput, AdminUncheckedCreateWithoutEventsEngineeringInput>
    connectOrCreate?: AdminCreateOrConnectWithoutEventsEngineeringInput
    upsert?: AdminUpsertWithoutEventsEngineeringInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutEventsEngineeringInput, AdminUpdateWithoutEventsEngineeringInput>, AdminUncheckedUpdateWithoutEventsEngineeringInput>
  }

  export type AdminUpdateOneWithoutEventMarketingNestedInput = {
    create?: XOR<AdminCreateWithoutEventMarketingInput, AdminUncheckedCreateWithoutEventMarketingInput>
    connectOrCreate?: AdminCreateOrConnectWithoutEventMarketingInput
    upsert?: AdminUpsertWithoutEventMarketingInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutEventMarketingInput, AdminUpdateWithoutEventMarketingInput>, AdminUncheckedUpdateWithoutEventMarketingInput>
  }

  export type AdminUpdateOneWithoutEventAdminNestedInput = {
    create?: XOR<AdminCreateWithoutEventAdminInput, AdminUncheckedCreateWithoutEventAdminInput>
    connectOrCreate?: AdminCreateOrConnectWithoutEventAdminInput
    upsert?: AdminUpsertWithoutEventAdminInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutEventAdminInput, AdminUpdateWithoutEventAdminInput>, AdminUncheckedUpdateWithoutEventAdminInput>
  }

  export type AdminCreateNestedOneWithoutWorkshopsEngineeringInput = {
    create?: XOR<AdminCreateWithoutWorkshopsEngineeringInput, AdminUncheckedCreateWithoutWorkshopsEngineeringInput>
    connectOrCreate?: AdminCreateOrConnectWithoutWorkshopsEngineeringInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutWorkshopsAdminInput = {
    create?: XOR<AdminCreateWithoutWorkshopsAdminInput, AdminUncheckedCreateWithoutWorkshopsAdminInput>
    connectOrCreate?: AdminCreateOrConnectWithoutWorkshopsAdminInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminCreateNestedOneWithoutWorkshopsMarketingInput = {
    create?: XOR<AdminCreateWithoutWorkshopsMarketingInput, AdminUncheckedCreateWithoutWorkshopsMarketingInput>
    connectOrCreate?: AdminCreateOrConnectWithoutWorkshopsMarketingInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneWithoutWorkshopsEngineeringNestedInput = {
    create?: XOR<AdminCreateWithoutWorkshopsEngineeringInput, AdminUncheckedCreateWithoutWorkshopsEngineeringInput>
    connectOrCreate?: AdminCreateOrConnectWithoutWorkshopsEngineeringInput
    upsert?: AdminUpsertWithoutWorkshopsEngineeringInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutWorkshopsEngineeringInput, AdminUpdateWithoutWorkshopsEngineeringInput>, AdminUncheckedUpdateWithoutWorkshopsEngineeringInput>
  }

  export type AdminUpdateOneWithoutWorkshopsAdminNestedInput = {
    create?: XOR<AdminCreateWithoutWorkshopsAdminInput, AdminUncheckedCreateWithoutWorkshopsAdminInput>
    connectOrCreate?: AdminCreateOrConnectWithoutWorkshopsAdminInput
    upsert?: AdminUpsertWithoutWorkshopsAdminInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutWorkshopsAdminInput, AdminUpdateWithoutWorkshopsAdminInput>, AdminUncheckedUpdateWithoutWorkshopsAdminInput>
  }

  export type AdminUpdateOneWithoutWorkshopsMarketingNestedInput = {
    create?: XOR<AdminCreateWithoutWorkshopsMarketingInput, AdminUncheckedCreateWithoutWorkshopsMarketingInput>
    connectOrCreate?: AdminCreateOrConnectWithoutWorkshopsMarketingInput
    upsert?: AdminUpsertWithoutWorkshopsMarketingInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutWorkshopsMarketingInput, AdminUpdateWithoutWorkshopsMarketingInput>, AdminUncheckedUpdateWithoutWorkshopsMarketingInput>
  }

  export type BlogCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BlogCreateWithoutCommentsInput, BlogUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutCommentsInput
    connect?: BlogWhereUniqueInput
  }

  export type BlogUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<BlogCreateWithoutCommentsInput, BlogUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutCommentsInput
    upsert?: BlogUpsertWithoutCommentsInput
    connect?: BlogWhereUniqueInput
    update?: XOR<XOR<BlogUpdateToOneWithWhereWithoutCommentsInput, BlogUpdateWithoutCommentsInput>, BlogUncheckedUpdateWithoutCommentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumAdminStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminStatus | EnumAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminStatusFilter<$PrismaModel> | $Enums.AdminStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumAdminStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AdminStatus | EnumAdminStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AdminStatus[] | ListEnumAdminStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAdminStatusWithAggregatesFilter<$PrismaModel> | $Enums.AdminStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAdminStatusFilter<$PrismaModel>
    _max?: NestedEnumAdminStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type WorkshopCreateWithoutMarketingAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    workshopDate: Date | string
    workshopStartTime: string
    workshopEndTime: string
    location: string
    registerUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    engineeringAdmin?: AdminCreateNestedOneWithoutWorkshopsEngineeringInput
    admin?: AdminCreateNestedOneWithoutWorkshopsAdminInput
  }

  export type WorkshopUncheckedCreateWithoutMarketingAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    workshopDate: Date | string
    workshopStartTime: string
    workshopEndTime: string
    location: string
    registerUrl?: string | null
    engineeringId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkshopCreateOrConnectWithoutMarketingAdminInput = {
    where: WorkshopWhereUniqueInput
    create: XOR<WorkshopCreateWithoutMarketingAdminInput, WorkshopUncheckedCreateWithoutMarketingAdminInput>
  }

  export type WorkshopCreateManyMarketingAdminInputEnvelope = {
    data: WorkshopCreateManyMarketingAdminInput | WorkshopCreateManyMarketingAdminInput[]
    skipDuplicates?: boolean
  }

  export type WorkshopCreateWithoutAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    workshopDate: Date | string
    workshopStartTime: string
    workshopEndTime: string
    location: string
    registerUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    engineeringAdmin?: AdminCreateNestedOneWithoutWorkshopsEngineeringInput
    marketingAdmin?: AdminCreateNestedOneWithoutWorkshopsMarketingInput
  }

  export type WorkshopUncheckedCreateWithoutAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    workshopDate: Date | string
    workshopStartTime: string
    workshopEndTime: string
    location: string
    registerUrl?: string | null
    marketingId?: string | null
    engineeringId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkshopCreateOrConnectWithoutAdminInput = {
    where: WorkshopWhereUniqueInput
    create: XOR<WorkshopCreateWithoutAdminInput, WorkshopUncheckedCreateWithoutAdminInput>
  }

  export type WorkshopCreateManyAdminInputEnvelope = {
    data: WorkshopCreateManyAdminInput | WorkshopCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type BlogCreateWithoutResearchAdminInput = {
    id?: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date | string
    authorName: string
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentCreateNestedManyWithoutBlogInput
    admin?: AdminCreateNestedOneWithoutBlogAdminInput
    comments?: CommentsCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutResearchAdminInput = {
    id?: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date | string
    authorName: string
    adminId?: string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentUncheckedCreateNestedManyWithoutBlogInput
    comments?: CommentsUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutResearchAdminInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutResearchAdminInput, BlogUncheckedCreateWithoutResearchAdminInput>
  }

  export type BlogCreateManyResearchAdminInputEnvelope = {
    data: BlogCreateManyResearchAdminInput | BlogCreateManyResearchAdminInput[]
    skipDuplicates?: boolean
  }

  export type BlogCreateWithoutAdminInput = {
    id?: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date | string
    authorName: string
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentCreateNestedManyWithoutBlogInput
    researchAdmin?: AdminCreateNestedOneWithoutBlogResearchInput
    comments?: CommentsCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutAdminInput = {
    id?: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date | string
    authorName: string
    researchId?: string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentUncheckedCreateNestedManyWithoutBlogInput
    comments?: CommentsUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutAdminInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutAdminInput, BlogUncheckedCreateWithoutAdminInput>
  }

  export type BlogCreateManyAdminInputEnvelope = {
    data: BlogCreateManyAdminInput | BlogCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutMarketingAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    engineeringAdmin?: AdminCreateNestedOneWithoutProjectsEngineeringInput
    admin?: AdminCreateNestedOneWithoutProjectAdminInput
  }

  export type ProjectUncheckedCreateWithoutMarketingAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    engineeringId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutMarketingAdminInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMarketingAdminInput, ProjectUncheckedCreateWithoutMarketingAdminInput>
  }

  export type ProjectCreateManyMarketingAdminInputEnvelope = {
    data: ProjectCreateManyMarketingAdminInput | ProjectCreateManyMarketingAdminInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    marketingAdmin?: AdminCreateNestedOneWithoutProjectMarketingInput
    engineeringAdmin?: AdminCreateNestedOneWithoutProjectsEngineeringInput
  }

  export type ProjectUncheckedCreateWithoutAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    marketingId?: string | null
    engineeringId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutAdminInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAdminInput, ProjectUncheckedCreateWithoutAdminInput>
  }

  export type ProjectCreateManyAdminInputEnvelope = {
    data: ProjectCreateManyAdminInput | ProjectCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutMarketingAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    eventDate: Date | string
    eventStartTime: string
    eventEndTime: string
    location: string
    registerUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    engineeringAdmin?: AdminCreateNestedOneWithoutEventsEngineeringInput
    admin?: AdminCreateNestedOneWithoutEventAdminInput
  }

  export type EventUncheckedCreateWithoutMarketingAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    eventDate: Date | string
    eventStartTime: string
    eventEndTime: string
    location: string
    registerUrl?: string | null
    engineeringId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutMarketingAdminInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutMarketingAdminInput, EventUncheckedCreateWithoutMarketingAdminInput>
  }

  export type EventCreateManyMarketingAdminInputEnvelope = {
    data: EventCreateManyMarketingAdminInput | EventCreateManyMarketingAdminInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    eventDate: Date | string
    eventStartTime: string
    eventEndTime: string
    location: string
    registerUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    engineeringAdmin?: AdminCreateNestedOneWithoutEventsEngineeringInput
    marketingAdmin?: AdminCreateNestedOneWithoutEventMarketingInput
  }

  export type EventUncheckedCreateWithoutAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    eventDate: Date | string
    eventStartTime: string
    eventEndTime: string
    location: string
    registerUrl?: string | null
    engineeringId?: string | null
    marketingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutAdminInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutAdminInput, EventUncheckedCreateWithoutAdminInput>
  }

  export type EventCreateManyAdminInputEnvelope = {
    data: EventCreateManyAdminInput | EventCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type ProjectCreateWithoutEngineeringAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    marketingAdmin?: AdminCreateNestedOneWithoutProjectMarketingInput
    admin?: AdminCreateNestedOneWithoutProjectAdminInput
  }

  export type ProjectUncheckedCreateWithoutEngineeringAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    marketingId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutEngineeringAdminInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEngineeringAdminInput, ProjectUncheckedCreateWithoutEngineeringAdminInput>
  }

  export type ProjectCreateManyEngineeringAdminInputEnvelope = {
    data: ProjectCreateManyEngineeringAdminInput | ProjectCreateManyEngineeringAdminInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutEngineeringAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    eventDate: Date | string
    eventStartTime: string
    eventEndTime: string
    location: string
    registerUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    marketingAdmin?: AdminCreateNestedOneWithoutEventMarketingInput
    admin?: AdminCreateNestedOneWithoutEventAdminInput
  }

  export type EventUncheckedCreateWithoutEngineeringAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    eventDate: Date | string
    eventStartTime: string
    eventEndTime: string
    location: string
    registerUrl?: string | null
    marketingId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateOrConnectWithoutEngineeringAdminInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEngineeringAdminInput, EventUncheckedCreateWithoutEngineeringAdminInput>
  }

  export type EventCreateManyEngineeringAdminInputEnvelope = {
    data: EventCreateManyEngineeringAdminInput | EventCreateManyEngineeringAdminInput[]
    skipDuplicates?: boolean
  }

  export type WorkshopCreateWithoutEngineeringAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    workshopDate: Date | string
    workshopStartTime: string
    workshopEndTime: string
    location: string
    registerUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    admin?: AdminCreateNestedOneWithoutWorkshopsAdminInput
    marketingAdmin?: AdminCreateNestedOneWithoutWorkshopsMarketingInput
  }

  export type WorkshopUncheckedCreateWithoutEngineeringAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    workshopDate: Date | string
    workshopStartTime: string
    workshopEndTime: string
    location: string
    registerUrl?: string | null
    marketingId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkshopCreateOrConnectWithoutEngineeringAdminInput = {
    where: WorkshopWhereUniqueInput
    create: XOR<WorkshopCreateWithoutEngineeringAdminInput, WorkshopUncheckedCreateWithoutEngineeringAdminInput>
  }

  export type WorkshopCreateManyEngineeringAdminInputEnvelope = {
    data: WorkshopCreateManyEngineeringAdminInput | WorkshopCreateManyEngineeringAdminInput[]
    skipDuplicates?: boolean
  }

  export type WorkshopUpsertWithWhereUniqueWithoutMarketingAdminInput = {
    where: WorkshopWhereUniqueInput
    update: XOR<WorkshopUpdateWithoutMarketingAdminInput, WorkshopUncheckedUpdateWithoutMarketingAdminInput>
    create: XOR<WorkshopCreateWithoutMarketingAdminInput, WorkshopUncheckedCreateWithoutMarketingAdminInput>
  }

  export type WorkshopUpdateWithWhereUniqueWithoutMarketingAdminInput = {
    where: WorkshopWhereUniqueInput
    data: XOR<WorkshopUpdateWithoutMarketingAdminInput, WorkshopUncheckedUpdateWithoutMarketingAdminInput>
  }

  export type WorkshopUpdateManyWithWhereWithoutMarketingAdminInput = {
    where: WorkshopScalarWhereInput
    data: XOR<WorkshopUpdateManyMutationInput, WorkshopUncheckedUpdateManyWithoutMarketingAdminInput>
  }

  export type WorkshopScalarWhereInput = {
    AND?: WorkshopScalarWhereInput | WorkshopScalarWhereInput[]
    OR?: WorkshopScalarWhereInput[]
    NOT?: WorkshopScalarWhereInput | WorkshopScalarWhereInput[]
    id?: StringFilter<"Workshop"> | string
    title?: StringFilter<"Workshop"> | string
    content?: StringFilter<"Workshop"> | string
    imgUrl?: StringFilter<"Workshop"> | string
    workshopDate?: DateTimeFilter<"Workshop"> | Date | string
    workshopStartTime?: StringFilter<"Workshop"> | string
    workshopEndTime?: StringFilter<"Workshop"> | string
    location?: StringFilter<"Workshop"> | string
    registerUrl?: StringNullableFilter<"Workshop"> | string | null
    marketingId?: StringNullableFilter<"Workshop"> | string | null
    engineeringId?: StringNullableFilter<"Workshop"> | string | null
    adminId?: StringNullableFilter<"Workshop"> | string | null
    createdAt?: DateTimeFilter<"Workshop"> | Date | string
    updatedAt?: DateTimeFilter<"Workshop"> | Date | string
  }

  export type WorkshopUpsertWithWhereUniqueWithoutAdminInput = {
    where: WorkshopWhereUniqueInput
    update: XOR<WorkshopUpdateWithoutAdminInput, WorkshopUncheckedUpdateWithoutAdminInput>
    create: XOR<WorkshopCreateWithoutAdminInput, WorkshopUncheckedCreateWithoutAdminInput>
  }

  export type WorkshopUpdateWithWhereUniqueWithoutAdminInput = {
    where: WorkshopWhereUniqueInput
    data: XOR<WorkshopUpdateWithoutAdminInput, WorkshopUncheckedUpdateWithoutAdminInput>
  }

  export type WorkshopUpdateManyWithWhereWithoutAdminInput = {
    where: WorkshopScalarWhereInput
    data: XOR<WorkshopUpdateManyMutationInput, WorkshopUncheckedUpdateManyWithoutAdminInput>
  }

  export type BlogUpsertWithWhereUniqueWithoutResearchAdminInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutResearchAdminInput, BlogUncheckedUpdateWithoutResearchAdminInput>
    create: XOR<BlogCreateWithoutResearchAdminInput, BlogUncheckedCreateWithoutResearchAdminInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutResearchAdminInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutResearchAdminInput, BlogUncheckedUpdateWithoutResearchAdminInput>
  }

  export type BlogUpdateManyWithWhereWithoutResearchAdminInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutResearchAdminInput>
  }

  export type BlogScalarWhereInput = {
    AND?: BlogScalarWhereInput | BlogScalarWhereInput[]
    OR?: BlogScalarWhereInput[]
    NOT?: BlogScalarWhereInput | BlogScalarWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    intro?: StringFilter<"Blog"> | string
    imgUrl?: StringFilter<"Blog"> | string
    closingNote?: StringFilter<"Blog"> | string
    publishedDate?: DateTimeFilter<"Blog"> | Date | string
    authorName?: StringFilter<"Blog"> | string
    researchId?: StringNullableFilter<"Blog"> | string | null
    adminId?: StringNullableFilter<"Blog"> | string | null
    category?: EnumCategoryFilter<"Blog"> | $Enums.Category
    createdAt?: DateTimeFilter<"Blog"> | Date | string
    updatedAt?: DateTimeFilter<"Blog"> | Date | string
  }

  export type BlogUpsertWithWhereUniqueWithoutAdminInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutAdminInput, BlogUncheckedUpdateWithoutAdminInput>
    create: XOR<BlogCreateWithoutAdminInput, BlogUncheckedCreateWithoutAdminInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutAdminInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutAdminInput, BlogUncheckedUpdateWithoutAdminInput>
  }

  export type BlogUpdateManyWithWhereWithoutAdminInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutAdminInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutMarketingAdminInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutMarketingAdminInput, ProjectUncheckedUpdateWithoutMarketingAdminInput>
    create: XOR<ProjectCreateWithoutMarketingAdminInput, ProjectUncheckedCreateWithoutMarketingAdminInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutMarketingAdminInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutMarketingAdminInput, ProjectUncheckedUpdateWithoutMarketingAdminInput>
  }

  export type ProjectUpdateManyWithWhereWithoutMarketingAdminInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutMarketingAdminInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    title?: StringFilter<"Project"> | string
    content?: StringFilter<"Project"> | string
    imgUrl?: StringFilter<"Project"> | string
    marketingId?: StringNullableFilter<"Project"> | string | null
    engineeringId?: StringNullableFilter<"Project"> | string | null
    adminId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutAdminInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutAdminInput, ProjectUncheckedUpdateWithoutAdminInput>
    create: XOR<ProjectCreateWithoutAdminInput, ProjectUncheckedCreateWithoutAdminInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutAdminInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutAdminInput, ProjectUncheckedUpdateWithoutAdminInput>
  }

  export type ProjectUpdateManyWithWhereWithoutAdminInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutAdminInput>
  }

  export type EventUpsertWithWhereUniqueWithoutMarketingAdminInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutMarketingAdminInput, EventUncheckedUpdateWithoutMarketingAdminInput>
    create: XOR<EventCreateWithoutMarketingAdminInput, EventUncheckedCreateWithoutMarketingAdminInput>
  }

  export type EventUpdateWithWhereUniqueWithoutMarketingAdminInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutMarketingAdminInput, EventUncheckedUpdateWithoutMarketingAdminInput>
  }

  export type EventUpdateManyWithWhereWithoutMarketingAdminInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutMarketingAdminInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    content?: StringFilter<"Event"> | string
    imgUrl?: StringFilter<"Event"> | string
    eventDate?: DateTimeFilter<"Event"> | Date | string
    eventStartTime?: StringFilter<"Event"> | string
    eventEndTime?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    registerUrl?: StringNullableFilter<"Event"> | string | null
    engineeringId?: StringNullableFilter<"Event"> | string | null
    marketingId?: StringNullableFilter<"Event"> | string | null
    adminId?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventUpsertWithWhereUniqueWithoutAdminInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutAdminInput, EventUncheckedUpdateWithoutAdminInput>
    create: XOR<EventCreateWithoutAdminInput, EventUncheckedCreateWithoutAdminInput>
  }

  export type EventUpdateWithWhereUniqueWithoutAdminInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutAdminInput, EventUncheckedUpdateWithoutAdminInput>
  }

  export type EventUpdateManyWithWhereWithoutAdminInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutAdminInput>
  }

  export type ProjectUpsertWithWhereUniqueWithoutEngineeringAdminInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutEngineeringAdminInput, ProjectUncheckedUpdateWithoutEngineeringAdminInput>
    create: XOR<ProjectCreateWithoutEngineeringAdminInput, ProjectUncheckedCreateWithoutEngineeringAdminInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutEngineeringAdminInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutEngineeringAdminInput, ProjectUncheckedUpdateWithoutEngineeringAdminInput>
  }

  export type ProjectUpdateManyWithWhereWithoutEngineeringAdminInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutEngineeringAdminInput>
  }

  export type EventUpsertWithWhereUniqueWithoutEngineeringAdminInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutEngineeringAdminInput, EventUncheckedUpdateWithoutEngineeringAdminInput>
    create: XOR<EventCreateWithoutEngineeringAdminInput, EventUncheckedCreateWithoutEngineeringAdminInput>
  }

  export type EventUpdateWithWhereUniqueWithoutEngineeringAdminInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutEngineeringAdminInput, EventUncheckedUpdateWithoutEngineeringAdminInput>
  }

  export type EventUpdateManyWithWhereWithoutEngineeringAdminInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutEngineeringAdminInput>
  }

  export type WorkshopUpsertWithWhereUniqueWithoutEngineeringAdminInput = {
    where: WorkshopWhereUniqueInput
    update: XOR<WorkshopUpdateWithoutEngineeringAdminInput, WorkshopUncheckedUpdateWithoutEngineeringAdminInput>
    create: XOR<WorkshopCreateWithoutEngineeringAdminInput, WorkshopUncheckedCreateWithoutEngineeringAdminInput>
  }

  export type WorkshopUpdateWithWhereUniqueWithoutEngineeringAdminInput = {
    where: WorkshopWhereUniqueInput
    data: XOR<WorkshopUpdateWithoutEngineeringAdminInput, WorkshopUncheckedUpdateWithoutEngineeringAdminInput>
  }

  export type WorkshopUpdateManyWithWhereWithoutEngineeringAdminInput = {
    where: WorkshopScalarWhereInput
    data: XOR<WorkshopUpdateManyMutationInput, WorkshopUncheckedUpdateManyWithoutEngineeringAdminInput>
  }

  export type ContentCreateWithoutBlogInput = {
    id?: string
    subTitle: string
    content: string
    contentimgUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentUncheckedCreateWithoutBlogInput = {
    id?: string
    subTitle: string
    content: string
    contentimgUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentCreateOrConnectWithoutBlogInput = {
    where: ContentWhereUniqueInput
    create: XOR<ContentCreateWithoutBlogInput, ContentUncheckedCreateWithoutBlogInput>
  }

  export type ContentCreateManyBlogInputEnvelope = {
    data: ContentCreateManyBlogInput | ContentCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type AdminCreateWithoutBlogResearchInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopCreateNestedManyWithoutAdminInput
    blogAdmin?: BlogCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectCreateNestedManyWithoutAdminInput
    eventMarketing?: EventCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminUncheckedCreateWithoutBlogResearchInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopUncheckedCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopUncheckedCreateNestedManyWithoutAdminInput
    blogAdmin?: BlogUncheckedCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectUncheckedCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectUncheckedCreateNestedManyWithoutAdminInput
    eventMarketing?: EventUncheckedCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventUncheckedCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectUncheckedCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventUncheckedCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopUncheckedCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminCreateOrConnectWithoutBlogResearchInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutBlogResearchInput, AdminUncheckedCreateWithoutBlogResearchInput>
  }

  export type AdminCreateWithoutBlogAdminInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopCreateNestedManyWithoutAdminInput
    blogResearch?: BlogCreateNestedManyWithoutResearchAdminInput
    projectMarketing?: ProjectCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectCreateNestedManyWithoutAdminInput
    eventMarketing?: EventCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminUncheckedCreateWithoutBlogAdminInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopUncheckedCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopUncheckedCreateNestedManyWithoutAdminInput
    blogResearch?: BlogUncheckedCreateNestedManyWithoutResearchAdminInput
    projectMarketing?: ProjectUncheckedCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectUncheckedCreateNestedManyWithoutAdminInput
    eventMarketing?: EventUncheckedCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventUncheckedCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectUncheckedCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventUncheckedCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopUncheckedCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminCreateOrConnectWithoutBlogAdminInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutBlogAdminInput, AdminUncheckedCreateWithoutBlogAdminInput>
  }

  export type CommentsCreateWithoutBlogInput = {
    id?: string
    name?: string
    comment: string
    createdAt?: Date | string
  }

  export type CommentsUncheckedCreateWithoutBlogInput = {
    id?: string
    name?: string
    comment: string
    createdAt?: Date | string
  }

  export type CommentsCreateOrConnectWithoutBlogInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutBlogInput, CommentsUncheckedCreateWithoutBlogInput>
  }

  export type CommentsCreateManyBlogInputEnvelope = {
    data: CommentsCreateManyBlogInput | CommentsCreateManyBlogInput[]
    skipDuplicates?: boolean
  }

  export type ContentUpsertWithWhereUniqueWithoutBlogInput = {
    where: ContentWhereUniqueInput
    update: XOR<ContentUpdateWithoutBlogInput, ContentUncheckedUpdateWithoutBlogInput>
    create: XOR<ContentCreateWithoutBlogInput, ContentUncheckedCreateWithoutBlogInput>
  }

  export type ContentUpdateWithWhereUniqueWithoutBlogInput = {
    where: ContentWhereUniqueInput
    data: XOR<ContentUpdateWithoutBlogInput, ContentUncheckedUpdateWithoutBlogInput>
  }

  export type ContentUpdateManyWithWhereWithoutBlogInput = {
    where: ContentScalarWhereInput
    data: XOR<ContentUpdateManyMutationInput, ContentUncheckedUpdateManyWithoutBlogInput>
  }

  export type ContentScalarWhereInput = {
    AND?: ContentScalarWhereInput | ContentScalarWhereInput[]
    OR?: ContentScalarWhereInput[]
    NOT?: ContentScalarWhereInput | ContentScalarWhereInput[]
    id?: StringFilter<"Content"> | string
    blogId?: StringFilter<"Content"> | string
    subTitle?: StringFilter<"Content"> | string
    content?: StringFilter<"Content"> | string
    contentimgUrl?: StringNullableFilter<"Content"> | string | null
    createdAt?: DateTimeFilter<"Content"> | Date | string
    updatedAt?: DateTimeFilter<"Content"> | Date | string
  }

  export type AdminUpsertWithoutBlogResearchInput = {
    update: XOR<AdminUpdateWithoutBlogResearchInput, AdminUncheckedUpdateWithoutBlogResearchInput>
    create: XOR<AdminCreateWithoutBlogResearchInput, AdminUncheckedCreateWithoutBlogResearchInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutBlogResearchInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutBlogResearchInput, AdminUncheckedUpdateWithoutBlogResearchInput>
  }

  export type AdminUpdateWithoutBlogResearchInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUpdateManyWithoutAdminNestedInput
    blogAdmin?: BlogUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutBlogResearchInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUncheckedUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUncheckedUpdateManyWithoutAdminNestedInput
    blogAdmin?: BlogUncheckedUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUncheckedUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUncheckedUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUncheckedUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUncheckedUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUncheckedUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUpsertWithoutBlogAdminInput = {
    update: XOR<AdminUpdateWithoutBlogAdminInput, AdminUncheckedUpdateWithoutBlogAdminInput>
    create: XOR<AdminCreateWithoutBlogAdminInput, AdminUncheckedCreateWithoutBlogAdminInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutBlogAdminInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutBlogAdminInput, AdminUncheckedUpdateWithoutBlogAdminInput>
  }

  export type AdminUpdateWithoutBlogAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUpdateManyWithoutResearchAdminNestedInput
    projectMarketing?: ProjectUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutBlogAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUncheckedUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUncheckedUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUncheckedUpdateManyWithoutResearchAdminNestedInput
    projectMarketing?: ProjectUncheckedUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUncheckedUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUncheckedUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUncheckedUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUncheckedUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type CommentsUpsertWithWhereUniqueWithoutBlogInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutBlogInput, CommentsUncheckedUpdateWithoutBlogInput>
    create: XOR<CommentsCreateWithoutBlogInput, CommentsUncheckedCreateWithoutBlogInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutBlogInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutBlogInput, CommentsUncheckedUpdateWithoutBlogInput>
  }

  export type CommentsUpdateManyWithWhereWithoutBlogInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutBlogInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: StringFilter<"Comments"> | string
    blogId?: StringFilter<"Comments"> | string
    name?: StringFilter<"Comments"> | string
    comment?: StringFilter<"Comments"> | string
    createdAt?: DateTimeFilter<"Comments"> | Date | string
  }

  export type BlogCreateWithoutContentInput = {
    id?: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date | string
    authorName: string
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    researchAdmin?: AdminCreateNestedOneWithoutBlogResearchInput
    admin?: AdminCreateNestedOneWithoutBlogAdminInput
    comments?: CommentsCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutContentInput = {
    id?: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date | string
    authorName: string
    researchId?: string | null
    adminId?: string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentsUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutContentInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutContentInput, BlogUncheckedCreateWithoutContentInput>
  }

  export type BlogUpsertWithoutContentInput = {
    update: XOR<BlogUpdateWithoutContentInput, BlogUncheckedUpdateWithoutContentInput>
    create: XOR<BlogCreateWithoutContentInput, BlogUncheckedCreateWithoutContentInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutContentInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutContentInput, BlogUncheckedUpdateWithoutContentInput>
  }

  export type BlogUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    researchAdmin?: AdminUpdateOneWithoutBlogResearchNestedInput
    admin?: AdminUpdateOneWithoutBlogAdminNestedInput
    comments?: CommentsUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    researchId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentsUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type AdminCreateWithoutProjectMarketingInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopCreateNestedManyWithoutAdminInput
    blogResearch?: BlogCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogCreateNestedManyWithoutAdminInput
    projectAdmin?: ProjectCreateNestedManyWithoutAdminInput
    eventMarketing?: EventCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminUncheckedCreateWithoutProjectMarketingInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopUncheckedCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopUncheckedCreateNestedManyWithoutAdminInput
    blogResearch?: BlogUncheckedCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogUncheckedCreateNestedManyWithoutAdminInput
    projectAdmin?: ProjectUncheckedCreateNestedManyWithoutAdminInput
    eventMarketing?: EventUncheckedCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventUncheckedCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectUncheckedCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventUncheckedCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopUncheckedCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminCreateOrConnectWithoutProjectMarketingInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutProjectMarketingInput, AdminUncheckedCreateWithoutProjectMarketingInput>
  }

  export type AdminCreateWithoutProjectsEngineeringInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopCreateNestedManyWithoutAdminInput
    blogResearch?: BlogCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectCreateNestedManyWithoutAdminInput
    eventMarketing?: EventCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventCreateNestedManyWithoutAdminInput
    eventsEngineering?: EventCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminUncheckedCreateWithoutProjectsEngineeringInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopUncheckedCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopUncheckedCreateNestedManyWithoutAdminInput
    blogResearch?: BlogUncheckedCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogUncheckedCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectUncheckedCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectUncheckedCreateNestedManyWithoutAdminInput
    eventMarketing?: EventUncheckedCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventUncheckedCreateNestedManyWithoutAdminInput
    eventsEngineering?: EventUncheckedCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopUncheckedCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminCreateOrConnectWithoutProjectsEngineeringInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutProjectsEngineeringInput, AdminUncheckedCreateWithoutProjectsEngineeringInput>
  }

  export type AdminCreateWithoutProjectAdminInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopCreateNestedManyWithoutAdminInput
    blogResearch?: BlogCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectCreateNestedManyWithoutMarketingAdminInput
    eventMarketing?: EventCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminUncheckedCreateWithoutProjectAdminInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopUncheckedCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopUncheckedCreateNestedManyWithoutAdminInput
    blogResearch?: BlogUncheckedCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogUncheckedCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectUncheckedCreateNestedManyWithoutMarketingAdminInput
    eventMarketing?: EventUncheckedCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventUncheckedCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectUncheckedCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventUncheckedCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopUncheckedCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminCreateOrConnectWithoutProjectAdminInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutProjectAdminInput, AdminUncheckedCreateWithoutProjectAdminInput>
  }

  export type AdminUpsertWithoutProjectMarketingInput = {
    update: XOR<AdminUpdateWithoutProjectMarketingInput, AdminUncheckedUpdateWithoutProjectMarketingInput>
    create: XOR<AdminCreateWithoutProjectMarketingInput, AdminUncheckedCreateWithoutProjectMarketingInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutProjectMarketingInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutProjectMarketingInput, AdminUncheckedUpdateWithoutProjectMarketingInput>
  }

  export type AdminUpdateWithoutProjectMarketingInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUpdateManyWithoutAdminNestedInput
    projectAdmin?: ProjectUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutProjectMarketingInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUncheckedUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUncheckedUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUncheckedUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUncheckedUpdateManyWithoutAdminNestedInput
    projectAdmin?: ProjectUncheckedUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUncheckedUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUncheckedUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUncheckedUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUpsertWithoutProjectsEngineeringInput = {
    update: XOR<AdminUpdateWithoutProjectsEngineeringInput, AdminUncheckedUpdateWithoutProjectsEngineeringInput>
    create: XOR<AdminCreateWithoutProjectsEngineeringInput, AdminUncheckedCreateWithoutProjectsEngineeringInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutProjectsEngineeringInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutProjectsEngineeringInput, AdminUncheckedUpdateWithoutProjectsEngineeringInput>
  }

  export type AdminUpdateWithoutProjectsEngineeringInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUpdateManyWithoutAdminNestedInput
    eventsEngineering?: EventUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutProjectsEngineeringInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUncheckedUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUncheckedUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUncheckedUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUncheckedUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUncheckedUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUncheckedUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUncheckedUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUncheckedUpdateManyWithoutAdminNestedInput
    eventsEngineering?: EventUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUncheckedUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUpsertWithoutProjectAdminInput = {
    update: XOR<AdminUpdateWithoutProjectAdminInput, AdminUncheckedUpdateWithoutProjectAdminInput>
    create: XOR<AdminCreateWithoutProjectAdminInput, AdminUncheckedCreateWithoutProjectAdminInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutProjectAdminInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutProjectAdminInput, AdminUncheckedUpdateWithoutProjectAdminInput>
  }

  export type AdminUpdateWithoutProjectAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUpdateManyWithoutMarketingAdminNestedInput
    eventMarketing?: EventUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutProjectAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUncheckedUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUncheckedUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUncheckedUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUncheckedUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUncheckedUpdateManyWithoutMarketingAdminNestedInput
    eventMarketing?: EventUncheckedUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUncheckedUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUncheckedUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminCreateWithoutEventsEngineeringInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopCreateNestedManyWithoutAdminInput
    blogResearch?: BlogCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectCreateNestedManyWithoutAdminInput
    eventMarketing?: EventCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminUncheckedCreateWithoutEventsEngineeringInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopUncheckedCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopUncheckedCreateNestedManyWithoutAdminInput
    blogResearch?: BlogUncheckedCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogUncheckedCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectUncheckedCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectUncheckedCreateNestedManyWithoutAdminInput
    eventMarketing?: EventUncheckedCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventUncheckedCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectUncheckedCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopUncheckedCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminCreateOrConnectWithoutEventsEngineeringInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutEventsEngineeringInput, AdminUncheckedCreateWithoutEventsEngineeringInput>
  }

  export type AdminCreateWithoutEventMarketingInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopCreateNestedManyWithoutAdminInput
    blogResearch?: BlogCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectCreateNestedManyWithoutAdminInput
    eventAdmin?: EventCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminUncheckedCreateWithoutEventMarketingInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopUncheckedCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopUncheckedCreateNestedManyWithoutAdminInput
    blogResearch?: BlogUncheckedCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogUncheckedCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectUncheckedCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectUncheckedCreateNestedManyWithoutAdminInput
    eventAdmin?: EventUncheckedCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectUncheckedCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventUncheckedCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopUncheckedCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminCreateOrConnectWithoutEventMarketingInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutEventMarketingInput, AdminUncheckedCreateWithoutEventMarketingInput>
  }

  export type AdminCreateWithoutEventAdminInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopCreateNestedManyWithoutAdminInput
    blogResearch?: BlogCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectCreateNestedManyWithoutAdminInput
    eventMarketing?: EventCreateNestedManyWithoutMarketingAdminInput
    projectsEngineering?: ProjectCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminUncheckedCreateWithoutEventAdminInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopUncheckedCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopUncheckedCreateNestedManyWithoutAdminInput
    blogResearch?: BlogUncheckedCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogUncheckedCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectUncheckedCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectUncheckedCreateNestedManyWithoutAdminInput
    eventMarketing?: EventUncheckedCreateNestedManyWithoutMarketingAdminInput
    projectsEngineering?: ProjectUncheckedCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventUncheckedCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopUncheckedCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminCreateOrConnectWithoutEventAdminInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutEventAdminInput, AdminUncheckedCreateWithoutEventAdminInput>
  }

  export type AdminUpsertWithoutEventsEngineeringInput = {
    update: XOR<AdminUpdateWithoutEventsEngineeringInput, AdminUncheckedUpdateWithoutEventsEngineeringInput>
    create: XOR<AdminCreateWithoutEventsEngineeringInput, AdminUncheckedCreateWithoutEventsEngineeringInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutEventsEngineeringInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutEventsEngineeringInput, AdminUncheckedUpdateWithoutEventsEngineeringInput>
  }

  export type AdminUpdateWithoutEventsEngineeringInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutEventsEngineeringInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUncheckedUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUncheckedUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUncheckedUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUncheckedUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUncheckedUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUncheckedUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUncheckedUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUncheckedUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUncheckedUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUpsertWithoutEventMarketingInput = {
    update: XOR<AdminUpdateWithoutEventMarketingInput, AdminUncheckedUpdateWithoutEventMarketingInput>
    create: XOR<AdminCreateWithoutEventMarketingInput, AdminUncheckedCreateWithoutEventMarketingInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutEventMarketingInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutEventMarketingInput, AdminUncheckedUpdateWithoutEventMarketingInput>
  }

  export type AdminUpdateWithoutEventMarketingInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUpdateManyWithoutAdminNestedInput
    eventAdmin?: EventUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutEventMarketingInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUncheckedUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUncheckedUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUncheckedUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUncheckedUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUncheckedUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUncheckedUpdateManyWithoutAdminNestedInput
    eventAdmin?: EventUncheckedUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUncheckedUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUpsertWithoutEventAdminInput = {
    update: XOR<AdminUpdateWithoutEventAdminInput, AdminUncheckedUpdateWithoutEventAdminInput>
    create: XOR<AdminCreateWithoutEventAdminInput, AdminUncheckedCreateWithoutEventAdminInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutEventAdminInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutEventAdminInput, AdminUncheckedUpdateWithoutEventAdminInput>
  }

  export type AdminUpdateWithoutEventAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUpdateManyWithoutMarketingAdminNestedInput
    projectsEngineering?: ProjectUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutEventAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUncheckedUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUncheckedUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUncheckedUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUncheckedUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUncheckedUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUncheckedUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUncheckedUpdateManyWithoutMarketingAdminNestedInput
    projectsEngineering?: ProjectUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUncheckedUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminCreateWithoutWorkshopsEngineeringInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopCreateNestedManyWithoutAdminInput
    blogResearch?: BlogCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectCreateNestedManyWithoutAdminInput
    eventMarketing?: EventCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminUncheckedCreateWithoutWorkshopsEngineeringInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopUncheckedCreateNestedManyWithoutMarketingAdminInput
    workshopsAdmin?: WorkshopUncheckedCreateNestedManyWithoutAdminInput
    blogResearch?: BlogUncheckedCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogUncheckedCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectUncheckedCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectUncheckedCreateNestedManyWithoutAdminInput
    eventMarketing?: EventUncheckedCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventUncheckedCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectUncheckedCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventUncheckedCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminCreateOrConnectWithoutWorkshopsEngineeringInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutWorkshopsEngineeringInput, AdminUncheckedCreateWithoutWorkshopsEngineeringInput>
  }

  export type AdminCreateWithoutWorkshopsAdminInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopCreateNestedManyWithoutMarketingAdminInput
    blogResearch?: BlogCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectCreateNestedManyWithoutAdminInput
    eventMarketing?: EventCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminUncheckedCreateWithoutWorkshopsAdminInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsMarketing?: WorkshopUncheckedCreateNestedManyWithoutMarketingAdminInput
    blogResearch?: BlogUncheckedCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogUncheckedCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectUncheckedCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectUncheckedCreateNestedManyWithoutAdminInput
    eventMarketing?: EventUncheckedCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventUncheckedCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectUncheckedCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventUncheckedCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopUncheckedCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminCreateOrConnectWithoutWorkshopsAdminInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutWorkshopsAdminInput, AdminUncheckedCreateWithoutWorkshopsAdminInput>
  }

  export type AdminCreateWithoutWorkshopsMarketingInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsAdmin?: WorkshopCreateNestedManyWithoutAdminInput
    blogResearch?: BlogCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectCreateNestedManyWithoutAdminInput
    eventMarketing?: EventCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminUncheckedCreateWithoutWorkshopsMarketingInput = {
    id?: string
    role: $Enums.Role
    status: $Enums.AdminStatus
    inviteToken?: string | null
    inviteExpiresAt?: Date | string | null
    email: string
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workshopsAdmin?: WorkshopUncheckedCreateNestedManyWithoutAdminInput
    blogResearch?: BlogUncheckedCreateNestedManyWithoutResearchAdminInput
    blogAdmin?: BlogUncheckedCreateNestedManyWithoutAdminInput
    projectMarketing?: ProjectUncheckedCreateNestedManyWithoutMarketingAdminInput
    projectAdmin?: ProjectUncheckedCreateNestedManyWithoutAdminInput
    eventMarketing?: EventUncheckedCreateNestedManyWithoutMarketingAdminInput
    eventAdmin?: EventUncheckedCreateNestedManyWithoutAdminInput
    projectsEngineering?: ProjectUncheckedCreateNestedManyWithoutEngineeringAdminInput
    eventsEngineering?: EventUncheckedCreateNestedManyWithoutEngineeringAdminInput
    workshopsEngineering?: WorkshopUncheckedCreateNestedManyWithoutEngineeringAdminInput
  }

  export type AdminCreateOrConnectWithoutWorkshopsMarketingInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutWorkshopsMarketingInput, AdminUncheckedCreateWithoutWorkshopsMarketingInput>
  }

  export type AdminUpsertWithoutWorkshopsEngineeringInput = {
    update: XOR<AdminUpdateWithoutWorkshopsEngineeringInput, AdminUncheckedUpdateWithoutWorkshopsEngineeringInput>
    create: XOR<AdminCreateWithoutWorkshopsEngineeringInput, AdminUncheckedCreateWithoutWorkshopsEngineeringInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutWorkshopsEngineeringInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutWorkshopsEngineeringInput, AdminUncheckedUpdateWithoutWorkshopsEngineeringInput>
  }

  export type AdminUpdateWithoutWorkshopsEngineeringInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutWorkshopsEngineeringInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUncheckedUpdateManyWithoutMarketingAdminNestedInput
    workshopsAdmin?: WorkshopUncheckedUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUncheckedUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUncheckedUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUncheckedUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUncheckedUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUncheckedUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUncheckedUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUncheckedUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUpsertWithoutWorkshopsAdminInput = {
    update: XOR<AdminUpdateWithoutWorkshopsAdminInput, AdminUncheckedUpdateWithoutWorkshopsAdminInput>
    create: XOR<AdminCreateWithoutWorkshopsAdminInput, AdminUncheckedCreateWithoutWorkshopsAdminInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutWorkshopsAdminInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutWorkshopsAdminInput, AdminUncheckedUpdateWithoutWorkshopsAdminInput>
  }

  export type AdminUpdateWithoutWorkshopsAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUpdateManyWithoutMarketingAdminNestedInput
    blogResearch?: BlogUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutWorkshopsAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsMarketing?: WorkshopUncheckedUpdateManyWithoutMarketingAdminNestedInput
    blogResearch?: BlogUncheckedUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUncheckedUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUncheckedUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUncheckedUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUncheckedUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUncheckedUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUncheckedUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUpsertWithoutWorkshopsMarketingInput = {
    update: XOR<AdminUpdateWithoutWorkshopsMarketingInput, AdminUncheckedUpdateWithoutWorkshopsMarketingInput>
    create: XOR<AdminCreateWithoutWorkshopsMarketingInput, AdminUncheckedCreateWithoutWorkshopsMarketingInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutWorkshopsMarketingInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutWorkshopsMarketingInput, AdminUncheckedUpdateWithoutWorkshopsMarketingInput>
  }

  export type AdminUpdateWithoutWorkshopsMarketingInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsAdmin?: WorkshopUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutWorkshopsMarketingInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    status?: EnumAdminStatusFieldUpdateOperationsInput | $Enums.AdminStatus
    inviteToken?: NullableStringFieldUpdateOperationsInput | string | null
    inviteExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopsAdmin?: WorkshopUncheckedUpdateManyWithoutAdminNestedInput
    blogResearch?: BlogUncheckedUpdateManyWithoutResearchAdminNestedInput
    blogAdmin?: BlogUncheckedUpdateManyWithoutAdminNestedInput
    projectMarketing?: ProjectUncheckedUpdateManyWithoutMarketingAdminNestedInput
    projectAdmin?: ProjectUncheckedUpdateManyWithoutAdminNestedInput
    eventMarketing?: EventUncheckedUpdateManyWithoutMarketingAdminNestedInput
    eventAdmin?: EventUncheckedUpdateManyWithoutAdminNestedInput
    projectsEngineering?: ProjectUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    eventsEngineering?: EventUncheckedUpdateManyWithoutEngineeringAdminNestedInput
    workshopsEngineering?: WorkshopUncheckedUpdateManyWithoutEngineeringAdminNestedInput
  }

  export type BlogCreateWithoutCommentsInput = {
    id?: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date | string
    authorName: string
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentCreateNestedManyWithoutBlogInput
    researchAdmin?: AdminCreateNestedOneWithoutBlogResearchInput
    admin?: AdminCreateNestedOneWithoutBlogAdminInput
  }

  export type BlogUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date | string
    authorName: string
    researchId?: string | null
    adminId?: string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
    content?: ContentUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutCommentsInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutCommentsInput, BlogUncheckedCreateWithoutCommentsInput>
  }

  export type BlogUpsertWithoutCommentsInput = {
    update: XOR<BlogUpdateWithoutCommentsInput, BlogUncheckedUpdateWithoutCommentsInput>
    create: XOR<BlogCreateWithoutCommentsInput, BlogUncheckedCreateWithoutCommentsInput>
    where?: BlogWhereInput
  }

  export type BlogUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BlogWhereInput
    data: XOR<BlogUpdateWithoutCommentsInput, BlogUncheckedUpdateWithoutCommentsInput>
  }

  export type BlogUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateManyWithoutBlogNestedInput
    researchAdmin?: AdminUpdateOneWithoutBlogResearchNestedInput
    admin?: AdminUpdateOneWithoutBlogAdminNestedInput
  }

  export type BlogUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    researchId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type WorkshopCreateManyMarketingAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    workshopDate: Date | string
    workshopStartTime: string
    workshopEndTime: string
    location: string
    registerUrl?: string | null
    engineeringId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkshopCreateManyAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    workshopDate: Date | string
    workshopStartTime: string
    workshopEndTime: string
    location: string
    registerUrl?: string | null
    marketingId?: string | null
    engineeringId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCreateManyResearchAdminInput = {
    id?: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date | string
    authorName: string
    adminId?: string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BlogCreateManyAdminInput = {
    id?: string
    title: string
    intro: string
    imgUrl: string
    closingNote: string
    publishedDate: Date | string
    authorName: string
    researchId?: string | null
    category: $Enums.Category
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyMarketingAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    engineeringId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    marketingId?: string | null
    engineeringId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyMarketingAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    eventDate: Date | string
    eventStartTime: string
    eventEndTime: string
    location: string
    registerUrl?: string | null
    engineeringId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    eventDate: Date | string
    eventStartTime: string
    eventEndTime: string
    location: string
    registerUrl?: string | null
    engineeringId?: string | null
    marketingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateManyEngineeringAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    marketingId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventCreateManyEngineeringAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    eventDate: Date | string
    eventStartTime: string
    eventEndTime: string
    location: string
    registerUrl?: string | null
    marketingId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkshopCreateManyEngineeringAdminInput = {
    id?: string
    title: string
    content: string
    imgUrl: string
    workshopDate: Date | string
    workshopStartTime: string
    workshopEndTime: string
    location: string
    registerUrl?: string | null
    marketingId?: string | null
    adminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkshopUpdateWithoutMarketingAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    workshopDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopStartTime?: StringFieldUpdateOperationsInput | string
    workshopEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineeringAdmin?: AdminUpdateOneWithoutWorkshopsEngineeringNestedInput
    admin?: AdminUpdateOneWithoutWorkshopsAdminNestedInput
  }

  export type WorkshopUncheckedUpdateWithoutMarketingAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    workshopDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopStartTime?: StringFieldUpdateOperationsInput | string
    workshopEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkshopUncheckedUpdateManyWithoutMarketingAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    workshopDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopStartTime?: StringFieldUpdateOperationsInput | string
    workshopEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkshopUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    workshopDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopStartTime?: StringFieldUpdateOperationsInput | string
    workshopEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineeringAdmin?: AdminUpdateOneWithoutWorkshopsEngineeringNestedInput
    marketingAdmin?: AdminUpdateOneWithoutWorkshopsMarketingNestedInput
  }

  export type WorkshopUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    workshopDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopStartTime?: StringFieldUpdateOperationsInput | string
    workshopEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkshopUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    workshopDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopStartTime?: StringFieldUpdateOperationsInput | string
    workshopEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUpdateWithoutResearchAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateManyWithoutBlogNestedInput
    admin?: AdminUpdateOneWithoutBlogAdminNestedInput
    comments?: CommentsUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutResearchAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUncheckedUpdateManyWithoutBlogNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateManyWithoutResearchAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUpdateManyWithoutBlogNestedInput
    researchAdmin?: AdminUpdateOneWithoutBlogResearchNestedInput
    comments?: CommentsUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    researchId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: ContentUncheckedUpdateManyWithoutBlogNestedInput
    comments?: CommentsUncheckedUpdateManyWithoutBlogNestedInput
  }

  export type BlogUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    intro?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    closingNote?: StringFieldUpdateOperationsInput | string
    publishedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    authorName?: StringFieldUpdateOperationsInput | string
    researchId?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutMarketingAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineeringAdmin?: AdminUpdateOneWithoutProjectsEngineeringNestedInput
    admin?: AdminUpdateOneWithoutProjectAdminNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMarketingAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutMarketingAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketingAdmin?: AdminUpdateOneWithoutProjectMarketingNestedInput
    engineeringAdmin?: AdminUpdateOneWithoutProjectsEngineeringNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutMarketingAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineeringAdmin?: AdminUpdateOneWithoutEventsEngineeringNestedInput
    admin?: AdminUpdateOneWithoutEventAdminNestedInput
  }

  export type EventUncheckedUpdateWithoutMarketingAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutMarketingAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineeringAdmin?: AdminUpdateOneWithoutEventsEngineeringNestedInput
    marketingAdmin?: AdminUpdateOneWithoutEventMarketingNestedInput
  }

  export type EventUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    engineeringId?: NullableStringFieldUpdateOperationsInput | string | null
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutEngineeringAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketingAdmin?: AdminUpdateOneWithoutProjectMarketingNestedInput
    admin?: AdminUpdateOneWithoutProjectAdminNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEngineeringAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyWithoutEngineeringAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpdateWithoutEngineeringAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    marketingAdmin?: AdminUpdateOneWithoutEventMarketingNestedInput
    admin?: AdminUpdateOneWithoutEventAdminNestedInput
  }

  export type EventUncheckedUpdateWithoutEngineeringAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyWithoutEngineeringAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    eventDate?: DateTimeFieldUpdateOperationsInput | Date | string
    eventStartTime?: StringFieldUpdateOperationsInput | string
    eventEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkshopUpdateWithoutEngineeringAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    workshopDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopStartTime?: StringFieldUpdateOperationsInput | string
    workshopEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneWithoutWorkshopsAdminNestedInput
    marketingAdmin?: AdminUpdateOneWithoutWorkshopsMarketingNestedInput
  }

  export type WorkshopUncheckedUpdateWithoutEngineeringAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    workshopDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopStartTime?: StringFieldUpdateOperationsInput | string
    workshopEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkshopUncheckedUpdateManyWithoutEngineeringAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    imgUrl?: StringFieldUpdateOperationsInput | string
    workshopDate?: DateTimeFieldUpdateOperationsInput | Date | string
    workshopStartTime?: StringFieldUpdateOperationsInput | string
    workshopEndTime?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    registerUrl?: NullableStringFieldUpdateOperationsInput | string | null
    marketingId?: NullableStringFieldUpdateOperationsInput | string | null
    adminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentCreateManyBlogInput = {
    id?: string
    subTitle: string
    content: string
    contentimgUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentsCreateManyBlogInput = {
    id?: string
    name?: string
    comment: string
    createdAt?: Date | string
  }

  export type ContentUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentimgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentimgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentUncheckedUpdateManyWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    subTitle?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    contentimgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentsUncheckedUpdateManyWithoutBlogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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