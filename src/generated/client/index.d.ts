
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Magazine
 * 
 */
export type Magazine = $Result.DefaultSelection<Prisma.$MagazinePayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model PostTags
 * 
 */
export type PostTags = $Result.DefaultSelection<Prisma.$PostTagsPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Revision
 * 
 */
export type Revision = $Result.DefaultSelection<Prisma.$RevisionPayload>
/**
 * Model Media
 * 
 */
export type Media = $Result.DefaultSelection<Prisma.$MediaPayload>
/**
 * Model PostMedia
 * 
 */
export type PostMedia = $Result.DefaultSelection<Prisma.$PostMediaPayload>
/**
 * Model Subscriber
 * 
 */
export type Subscriber = $Result.DefaultSelection<Prisma.$SubscriberPayload>
/**
 * Model ViewLog
 * 
 */
export type ViewLog = $Result.DefaultSelection<Prisma.$ViewLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  EDITOR: 'EDITOR',
  WRITER: 'WRITER',
  READER: 'READER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const MagazineStatus: {
  DRAFT: 'DRAFT',
  REVIEW: 'REVIEW',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type MagazineStatus = (typeof MagazineStatus)[keyof typeof MagazineStatus]


export const PostType: {
  BLOG: 'BLOG',
  ARTICLE: 'ARTICLE',
  FEATURE: 'FEATURE',
  INTERVIEW: 'INTERVIEW'
};

export type PostType = (typeof PostType)[keyof typeof PostType]


export const PostStatus: {
  DRAFT: 'DRAFT',
  REVIEW: 'REVIEW',
  PUBLISHED: 'PUBLISHED',
  ARCHIVED: 'ARCHIVED'
};

export type PostStatus = (typeof PostStatus)[keyof typeof PostStatus]


export const PostVisibility: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  SUBSCRIBERS_ONLY: 'SUBSCRIBERS_ONLY'
};

export type PostVisibility = (typeof PostVisibility)[keyof typeof PostVisibility]


export const CommentStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type CommentStatus = (typeof CommentStatus)[keyof typeof CommentStatus]


export const MediaType: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  AUDIO: 'AUDIO',
  DOCUMENT: 'DOCUMENT'
};

export type MediaType = (typeof MediaType)[keyof typeof MediaType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type MagazineStatus = $Enums.MagazineStatus

export const MagazineStatus: typeof $Enums.MagazineStatus

export type PostType = $Enums.PostType

export const PostType: typeof $Enums.PostType

export type PostStatus = $Enums.PostStatus

export const PostStatus: typeof $Enums.PostStatus

export type PostVisibility = $Enums.PostVisibility

export const PostVisibility: typeof $Enums.PostVisibility

export type CommentStatus = $Enums.CommentStatus

export const CommentStatus: typeof $Enums.CommentStatus

export type MediaType = $Enums.MediaType

export const MediaType: typeof $Enums.MediaType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.magazine`: Exposes CRUD operations for the **Magazine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Magazines
    * const magazines = await prisma.magazine.findMany()
    * ```
    */
  get magazine(): Prisma.MagazineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postTags`: Exposes CRUD operations for the **PostTags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostTags
    * const postTags = await prisma.postTags.findMany()
    * ```
    */
  get postTags(): Prisma.PostTagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.revision`: Exposes CRUD operations for the **Revision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Revisions
    * const revisions = await prisma.revision.findMany()
    * ```
    */
  get revision(): Prisma.RevisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.media`: Exposes CRUD operations for the **Media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Media
    * const media = await prisma.media.findMany()
    * ```
    */
  get media(): Prisma.MediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postMedia`: Exposes CRUD operations for the **PostMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostMedias
    * const postMedias = await prisma.postMedia.findMany()
    * ```
    */
  get postMedia(): Prisma.PostMediaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriber`: Exposes CRUD operations for the **Subscriber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscribers
    * const subscribers = await prisma.subscriber.findMany()
    * ```
    */
  get subscriber(): Prisma.SubscriberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viewLog`: Exposes CRUD operations for the **ViewLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViewLogs
    * const viewLogs = await prisma.viewLog.findMany()
    * ```
    */
  get viewLog(): Prisma.ViewLogDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.0.0
   * Query Engine version: 0c19ccc313cf9911a90d99d2ac2eb0280c76c513
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
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Category: 'Category',
    Tag: 'Tag',
    Magazine: 'Magazine',
    Post: 'Post',
    PostTags: 'PostTags',
    Comment: 'Comment',
    Revision: 'Revision',
    Media: 'Media',
    PostMedia: 'PostMedia',
    Subscriber: 'Subscriber',
    ViewLog: 'ViewLog'
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
      modelProps: "user" | "account" | "session" | "verificationToken" | "category" | "tag" | "magazine" | "post" | "postTags" | "comment" | "revision" | "media" | "postMedia" | "subscriber" | "viewLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Magazine: {
        payload: Prisma.$MagazinePayload<ExtArgs>
        fields: Prisma.MagazineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MagazineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MagazineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>
          }
          findFirst: {
            args: Prisma.MagazineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MagazineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>
          }
          findMany: {
            args: Prisma.MagazineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>[]
          }
          create: {
            args: Prisma.MagazineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>
          }
          createMany: {
            args: Prisma.MagazineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MagazineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>
          }
          update: {
            args: Prisma.MagazineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>
          }
          deleteMany: {
            args: Prisma.MagazineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MagazineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MagazineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MagazinePayload>
          }
          aggregate: {
            args: Prisma.MagazineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMagazine>
          }
          groupBy: {
            args: Prisma.MagazineGroupByArgs<ExtArgs>
            result: $Utils.Optional<MagazineGroupByOutputType>[]
          }
          count: {
            args: Prisma.MagazineCountArgs<ExtArgs>
            result: $Utils.Optional<MagazineCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      PostTags: {
        payload: Prisma.$PostTagsPayload<ExtArgs>
        fields: Prisma.PostTagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostTagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostTagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagsPayload>
          }
          findFirst: {
            args: Prisma.PostTagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostTagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagsPayload>
          }
          findMany: {
            args: Prisma.PostTagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagsPayload>[]
          }
          create: {
            args: Prisma.PostTagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagsPayload>
          }
          createMany: {
            args: Prisma.PostTagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostTagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagsPayload>
          }
          update: {
            args: Prisma.PostTagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagsPayload>
          }
          deleteMany: {
            args: Prisma.PostTagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostTagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostTagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostTagsPayload>
          }
          aggregate: {
            args: Prisma.PostTagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostTags>
          }
          groupBy: {
            args: Prisma.PostTagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostTagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostTagsCountArgs<ExtArgs>
            result: $Utils.Optional<PostTagsCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Revision: {
        payload: Prisma.$RevisionPayload<ExtArgs>
        fields: Prisma.RevisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RevisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RevisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          findFirst: {
            args: Prisma.RevisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RevisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          findMany: {
            args: Prisma.RevisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>[]
          }
          create: {
            args: Prisma.RevisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          createMany: {
            args: Prisma.RevisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RevisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          update: {
            args: Prisma.RevisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          deleteMany: {
            args: Prisma.RevisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RevisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RevisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RevisionPayload>
          }
          aggregate: {
            args: Prisma.RevisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRevision>
          }
          groupBy: {
            args: Prisma.RevisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RevisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RevisionCountArgs<ExtArgs>
            result: $Utils.Optional<RevisionCountAggregateOutputType> | number
          }
        }
      }
      Media: {
        payload: Prisma.$MediaPayload<ExtArgs>
        fields: Prisma.MediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findFirst: {
            args: Prisma.MediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          findMany: {
            args: Prisma.MediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>[]
          }
          create: {
            args: Prisma.MediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          createMany: {
            args: Prisma.MediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          update: {
            args: Prisma.MediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          deleteMany: {
            args: Prisma.MediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaPayload>
          }
          aggregate: {
            args: Prisma.MediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedia>
          }
          groupBy: {
            args: Prisma.MediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaCountArgs<ExtArgs>
            result: $Utils.Optional<MediaCountAggregateOutputType> | number
          }
        }
      }
      PostMedia: {
        payload: Prisma.$PostMediaPayload<ExtArgs>
        fields: Prisma.PostMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          findFirst: {
            args: Prisma.PostMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          findMany: {
            args: Prisma.PostMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>[]
          }
          create: {
            args: Prisma.PostMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          createMany: {
            args: Prisma.PostMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          update: {
            args: Prisma.PostMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          deleteMany: {
            args: Prisma.PostMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostMediaPayload>
          }
          aggregate: {
            args: Prisma.PostMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostMedia>
          }
          groupBy: {
            args: Prisma.PostMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostMediaCountArgs<ExtArgs>
            result: $Utils.Optional<PostMediaCountAggregateOutputType> | number
          }
        }
      }
      Subscriber: {
        payload: Prisma.$SubscriberPayload<ExtArgs>
        fields: Prisma.SubscriberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          findFirst: {
            args: Prisma.SubscriberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          findMany: {
            args: Prisma.SubscriberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>[]
          }
          create: {
            args: Prisma.SubscriberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          createMany: {
            args: Prisma.SubscriberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          update: {
            args: Prisma.SubscriberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          deleteMany: {
            args: Prisma.SubscriberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriberPayload>
          }
          aggregate: {
            args: Prisma.SubscriberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriber>
          }
          groupBy: {
            args: Prisma.SubscriberGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriberGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriberCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriberCountAggregateOutputType> | number
          }
        }
      }
      ViewLog: {
        payload: Prisma.$ViewLogPayload<ExtArgs>
        fields: Prisma.ViewLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>
          }
          findFirst: {
            args: Prisma.ViewLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>
          }
          findMany: {
            args: Prisma.ViewLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>[]
          }
          create: {
            args: Prisma.ViewLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>
          }
          createMany: {
            args: Prisma.ViewLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ViewLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>
          }
          update: {
            args: Prisma.ViewLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>
          }
          deleteMany: {
            args: Prisma.ViewLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ViewLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewLogPayload>
          }
          aggregate: {
            args: Prisma.ViewLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViewLog>
          }
          groupBy: {
            args: Prisma.ViewLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewLogCountArgs<ExtArgs>
            result: $Utils.Optional<ViewLogCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    category?: CategoryOmit
    tag?: TagOmit
    magazine?: MagazineOmit
    post?: PostOmit
    postTags?: PostTagsOmit
    comment?: CommentOmit
    revision?: RevisionOmit
    media?: MediaOmit
    postMedia?: PostMediaOmit
    subscriber?: SubscriberOmit
    viewLog?: ViewLogOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    posts: number
    comments: number
    revisions: number
    media: number
    editedMagazines: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    revisions?: boolean | UserCountOutputTypeCountRevisionsArgs
    media?: boolean | UserCountOutputTypeCountMediaArgs
    editedMagazines?: boolean | UserCountOutputTypeCountEditedMagazinesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEditedMagazinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MagazineWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    children: number
    posts: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | CategoryCountOutputTypeCountChildrenArgs
    posts?: boolean | CategoryCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    posts: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | TagCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagsWhereInput
  }


  /**
   * Count Type MagazineCountOutputType
   */

  export type MagazineCountOutputType = {
    posts: number
  }

  export type MagazineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | MagazineCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * MagazineCountOutputType without action
   */
  export type MagazineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MagazineCountOutputType
     */
    select?: MagazineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MagazineCountOutputType without action
   */
  export type MagazineCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    tags: number
    comments: number
    revisions: number
    media: number
    viewLogs: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | PostCountOutputTypeCountTagsArgs
    comments?: boolean | PostCountOutputTypeCountCommentsArgs
    revisions?: boolean | PostCountOutputTypeCountRevisionsArgs
    media?: boolean | PostCountOutputTypeCountMediaArgs
    viewLogs?: boolean | PostCountOutputTypeCountViewLogsArgs
  }

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagsWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountRevisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostMediaWhereInput
  }

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountViewLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewLogWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    children: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | CommentCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type MediaCountOutputType
   */

  export type MediaCountOutputType = {
    posts: number
  }

  export type MediaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | MediaCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaCountOutputType
     */
    select?: MediaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MediaCountOutputType without action
   */
  export type MediaCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostMediaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: $Enums.UserRole | null
    bio: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: $Enums.UserRole | null
    bio: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    emailVerified: number
    image: number
    role: number
    bio: number
    avatarUrl: number
    socialLinks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    bio?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    bio?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    emailVerified?: true
    image?: true
    role?: true
    bio?: true
    avatarUrl?: true
    socialLinks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    username: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    role: $Enums.UserRole
    bio: string | null
    avatarUrl: string | null
    socialLinks: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    bio?: boolean
    avatarUrl?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    revisions?: boolean | User$revisionsArgs<ExtArgs>
    media?: boolean | User$mediaArgs<ExtArgs>
    editedMagazines?: boolean | User$editedMagazinesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    role?: boolean
    bio?: boolean
    avatarUrl?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "email" | "emailVerified" | "image" | "role" | "bio" | "avatarUrl" | "socialLinks" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    revisions?: boolean | User$revisionsArgs<ExtArgs>
    media?: boolean | User$mediaArgs<ExtArgs>
    editedMagazines?: boolean | User$editedMagazinesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      revisions: Prisma.$RevisionPayload<ExtArgs>[]
      media: Prisma.$MediaPayload<ExtArgs>[]
      editedMagazines: Prisma.$MagazinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      username: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      role: $Enums.UserRole
      bio: string | null
      avatarUrl: string | null
      socialLinks: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    revisions<T extends User$revisionsArgs<ExtArgs> = {}>(args?: Subset<T, User$revisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends User$mediaArgs<ExtArgs> = {}>(args?: Subset<T, User$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    editedMagazines<T extends User$editedMagazinesArgs<ExtArgs> = {}>(args?: Subset<T, User$editedMagazinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly bio: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly socialLinks: FieldRef<"User", 'Json'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.revisions
   */
  export type User$revisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    where?: RevisionWhereInput
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    cursor?: RevisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevisionScalarFieldEnum | RevisionScalarFieldEnum[]
  }

  /**
   * User.media
   */
  export type User$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    cursor?: MediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * User.editedMagazines
   */
  export type User$editedMagazinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Magazine
     */
    omit?: MagazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagazineInclude<ExtArgs> | null
    where?: MagazineWhereInput
    orderBy?: MagazineOrderByWithRelationInput | MagazineOrderByWithRelationInput[]
    cursor?: MagazineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MagazineScalarFieldEnum | MagazineScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string | null
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string | null
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>



  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>



  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    parentId: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    parentId: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    parentId: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    parentId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    parentId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    parentId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    parentId: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    parentId?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    parentId?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "parentId", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    posts?: boolean | Category$postsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      parent: Prisma.$CategoryPayload<ExtArgs> | null
      children: Prisma.$CategoryPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      parentId: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Category$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Category$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends Category$postsArgs<ExtArgs> = {}>(args?: Subset<T, Category$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly parentId: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category.children
   */
  export type Category$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.posts
   */
  export type Category$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    slug: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    posts?: boolean | Tag$postsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>



  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Tag$postsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      posts: Prisma.$PostTagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
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
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends Tag$postsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly slug: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.posts
   */
  export type Tag$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTags
     */
    select?: PostTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTags
     */
    omit?: PostTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagsInclude<ExtArgs> | null
    where?: PostTagsWhereInput
    orderBy?: PostTagsOrderByWithRelationInput | PostTagsOrderByWithRelationInput[]
    cursor?: PostTagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTagsScalarFieldEnum | PostTagsScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Magazine
   */

  export type AggregateMagazine = {
    _count: MagazineCountAggregateOutputType | null
    _avg: MagazineAvgAggregateOutputType | null
    _sum: MagazineSumAggregateOutputType | null
    _min: MagazineMinAggregateOutputType | null
    _max: MagazineMaxAggregateOutputType | null
  }

  export type MagazineAvgAggregateOutputType = {
    issueNumber: number | null
  }

  export type MagazineSumAggregateOutputType = {
    issueNumber: number | null
  }

  export type MagazineMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    coverImageUrl: string | null
    issueNumber: number | null
    publishedAt: Date | null
    status: $Enums.MagazineStatus | null
    editorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MagazineMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    description: string | null
    coverImageUrl: string | null
    issueNumber: number | null
    publishedAt: Date | null
    status: $Enums.MagazineStatus | null
    editorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MagazineCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    description: number
    coverImageUrl: number
    issueNumber: number
    publishedAt: number
    status: number
    editorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MagazineAvgAggregateInputType = {
    issueNumber?: true
  }

  export type MagazineSumAggregateInputType = {
    issueNumber?: true
  }

  export type MagazineMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    coverImageUrl?: true
    issueNumber?: true
    publishedAt?: true
    status?: true
    editorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MagazineMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    coverImageUrl?: true
    issueNumber?: true
    publishedAt?: true
    status?: true
    editorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MagazineCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    description?: true
    coverImageUrl?: true
    issueNumber?: true
    publishedAt?: true
    status?: true
    editorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MagazineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Magazine to aggregate.
     */
    where?: MagazineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Magazines to fetch.
     */
    orderBy?: MagazineOrderByWithRelationInput | MagazineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MagazineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Magazines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Magazines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Magazines
    **/
    _count?: true | MagazineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MagazineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MagazineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MagazineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MagazineMaxAggregateInputType
  }

  export type GetMagazineAggregateType<T extends MagazineAggregateArgs> = {
        [P in keyof T & keyof AggregateMagazine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMagazine[P]>
      : GetScalarType<T[P], AggregateMagazine[P]>
  }




  export type MagazineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MagazineWhereInput
    orderBy?: MagazineOrderByWithAggregationInput | MagazineOrderByWithAggregationInput[]
    by: MagazineScalarFieldEnum[] | MagazineScalarFieldEnum
    having?: MagazineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MagazineCountAggregateInputType | true
    _avg?: MagazineAvgAggregateInputType
    _sum?: MagazineSumAggregateInputType
    _min?: MagazineMinAggregateInputType
    _max?: MagazineMaxAggregateInputType
  }

  export type MagazineGroupByOutputType = {
    id: string
    title: string | null
    slug: string
    description: string | null
    coverImageUrl: string | null
    issueNumber: number | null
    publishedAt: Date | null
    status: $Enums.MagazineStatus
    editorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MagazineCountAggregateOutputType | null
    _avg: MagazineAvgAggregateOutputType | null
    _sum: MagazineSumAggregateOutputType | null
    _min: MagazineMinAggregateOutputType | null
    _max: MagazineMaxAggregateOutputType | null
  }

  type GetMagazineGroupByPayload<T extends MagazineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MagazineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MagazineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MagazineGroupByOutputType[P]>
            : GetScalarType<T[P], MagazineGroupByOutputType[P]>
        }
      >
    >


  export type MagazineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    coverImageUrl?: boolean
    issueNumber?: boolean
    publishedAt?: boolean
    status?: boolean
    editorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    editor?: boolean | Magazine$editorArgs<ExtArgs>
    posts?: boolean | Magazine$postsArgs<ExtArgs>
    _count?: boolean | MagazineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["magazine"]>



  export type MagazineSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    description?: boolean
    coverImageUrl?: boolean
    issueNumber?: boolean
    publishedAt?: boolean
    status?: boolean
    editorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MagazineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "description" | "coverImageUrl" | "issueNumber" | "publishedAt" | "status" | "editorId" | "createdAt" | "updatedAt", ExtArgs["result"]["magazine"]>
  export type MagazineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    editor?: boolean | Magazine$editorArgs<ExtArgs>
    posts?: boolean | Magazine$postsArgs<ExtArgs>
    _count?: boolean | MagazineCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MagazinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Magazine"
    objects: {
      editor: Prisma.$UserPayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      slug: string
      description: string | null
      coverImageUrl: string | null
      issueNumber: number | null
      publishedAt: Date | null
      status: $Enums.MagazineStatus
      editorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["magazine"]>
    composites: {}
  }

  type MagazineGetPayload<S extends boolean | null | undefined | MagazineDefaultArgs> = $Result.GetResult<Prisma.$MagazinePayload, S>

  type MagazineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MagazineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MagazineCountAggregateInputType | true
    }

  export interface MagazineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Magazine'], meta: { name: 'Magazine' } }
    /**
     * Find zero or one Magazine that matches the filter.
     * @param {MagazineFindUniqueArgs} args - Arguments to find a Magazine
     * @example
     * // Get one Magazine
     * const magazine = await prisma.magazine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MagazineFindUniqueArgs>(args: SelectSubset<T, MagazineFindUniqueArgs<ExtArgs>>): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Magazine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MagazineFindUniqueOrThrowArgs} args - Arguments to find a Magazine
     * @example
     * // Get one Magazine
     * const magazine = await prisma.magazine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MagazineFindUniqueOrThrowArgs>(args: SelectSubset<T, MagazineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Magazine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineFindFirstArgs} args - Arguments to find a Magazine
     * @example
     * // Get one Magazine
     * const magazine = await prisma.magazine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MagazineFindFirstArgs>(args?: SelectSubset<T, MagazineFindFirstArgs<ExtArgs>>): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Magazine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineFindFirstOrThrowArgs} args - Arguments to find a Magazine
     * @example
     * // Get one Magazine
     * const magazine = await prisma.magazine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MagazineFindFirstOrThrowArgs>(args?: SelectSubset<T, MagazineFindFirstOrThrowArgs<ExtArgs>>): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Magazines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Magazines
     * const magazines = await prisma.magazine.findMany()
     * 
     * // Get first 10 Magazines
     * const magazines = await prisma.magazine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const magazineWithIdOnly = await prisma.magazine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MagazineFindManyArgs>(args?: SelectSubset<T, MagazineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Magazine.
     * @param {MagazineCreateArgs} args - Arguments to create a Magazine.
     * @example
     * // Create one Magazine
     * const Magazine = await prisma.magazine.create({
     *   data: {
     *     // ... data to create a Magazine
     *   }
     * })
     * 
     */
    create<T extends MagazineCreateArgs>(args: SelectSubset<T, MagazineCreateArgs<ExtArgs>>): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Magazines.
     * @param {MagazineCreateManyArgs} args - Arguments to create many Magazines.
     * @example
     * // Create many Magazines
     * const magazine = await prisma.magazine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MagazineCreateManyArgs>(args?: SelectSubset<T, MagazineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Magazine.
     * @param {MagazineDeleteArgs} args - Arguments to delete one Magazine.
     * @example
     * // Delete one Magazine
     * const Magazine = await prisma.magazine.delete({
     *   where: {
     *     // ... filter to delete one Magazine
     *   }
     * })
     * 
     */
    delete<T extends MagazineDeleteArgs>(args: SelectSubset<T, MagazineDeleteArgs<ExtArgs>>): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Magazine.
     * @param {MagazineUpdateArgs} args - Arguments to update one Magazine.
     * @example
     * // Update one Magazine
     * const magazine = await prisma.magazine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MagazineUpdateArgs>(args: SelectSubset<T, MagazineUpdateArgs<ExtArgs>>): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Magazines.
     * @param {MagazineDeleteManyArgs} args - Arguments to filter Magazines to delete.
     * @example
     * // Delete a few Magazines
     * const { count } = await prisma.magazine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MagazineDeleteManyArgs>(args?: SelectSubset<T, MagazineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Magazines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Magazines
     * const magazine = await prisma.magazine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MagazineUpdateManyArgs>(args: SelectSubset<T, MagazineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Magazine.
     * @param {MagazineUpsertArgs} args - Arguments to update or create a Magazine.
     * @example
     * // Update or create a Magazine
     * const magazine = await prisma.magazine.upsert({
     *   create: {
     *     // ... data to create a Magazine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Magazine we want to update
     *   }
     * })
     */
    upsert<T extends MagazineUpsertArgs>(args: SelectSubset<T, MagazineUpsertArgs<ExtArgs>>): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Magazines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineCountArgs} args - Arguments to filter Magazines to count.
     * @example
     * // Count the number of Magazines
     * const count = await prisma.magazine.count({
     *   where: {
     *     // ... the filter for the Magazines we want to count
     *   }
     * })
    **/
    count<T extends MagazineCountArgs>(
      args?: Subset<T, MagazineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MagazineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Magazine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MagazineAggregateArgs>(args: Subset<T, MagazineAggregateArgs>): Prisma.PrismaPromise<GetMagazineAggregateType<T>>

    /**
     * Group by Magazine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MagazineGroupByArgs} args - Group by arguments.
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
      T extends MagazineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MagazineGroupByArgs['orderBy'] }
        : { orderBy?: MagazineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MagazineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMagazineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Magazine model
   */
  readonly fields: MagazineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Magazine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MagazineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    editor<T extends Magazine$editorArgs<ExtArgs> = {}>(args?: Subset<T, Magazine$editorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends Magazine$postsArgs<ExtArgs> = {}>(args?: Subset<T, Magazine$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Magazine model
   */
  interface MagazineFieldRefs {
    readonly id: FieldRef<"Magazine", 'String'>
    readonly title: FieldRef<"Magazine", 'String'>
    readonly slug: FieldRef<"Magazine", 'String'>
    readonly description: FieldRef<"Magazine", 'String'>
    readonly coverImageUrl: FieldRef<"Magazine", 'String'>
    readonly issueNumber: FieldRef<"Magazine", 'Int'>
    readonly publishedAt: FieldRef<"Magazine", 'DateTime'>
    readonly status: FieldRef<"Magazine", 'MagazineStatus'>
    readonly editorId: FieldRef<"Magazine", 'String'>
    readonly createdAt: FieldRef<"Magazine", 'DateTime'>
    readonly updatedAt: FieldRef<"Magazine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Magazine findUnique
   */
  export type MagazineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Magazine
     */
    omit?: MagazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * Filter, which Magazine to fetch.
     */
    where: MagazineWhereUniqueInput
  }

  /**
   * Magazine findUniqueOrThrow
   */
  export type MagazineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Magazine
     */
    omit?: MagazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * Filter, which Magazine to fetch.
     */
    where: MagazineWhereUniqueInput
  }

  /**
   * Magazine findFirst
   */
  export type MagazineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Magazine
     */
    omit?: MagazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * Filter, which Magazine to fetch.
     */
    where?: MagazineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Magazines to fetch.
     */
    orderBy?: MagazineOrderByWithRelationInput | MagazineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Magazines.
     */
    cursor?: MagazineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Magazines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Magazines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Magazines.
     */
    distinct?: MagazineScalarFieldEnum | MagazineScalarFieldEnum[]
  }

  /**
   * Magazine findFirstOrThrow
   */
  export type MagazineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Magazine
     */
    omit?: MagazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * Filter, which Magazine to fetch.
     */
    where?: MagazineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Magazines to fetch.
     */
    orderBy?: MagazineOrderByWithRelationInput | MagazineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Magazines.
     */
    cursor?: MagazineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Magazines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Magazines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Magazines.
     */
    distinct?: MagazineScalarFieldEnum | MagazineScalarFieldEnum[]
  }

  /**
   * Magazine findMany
   */
  export type MagazineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Magazine
     */
    omit?: MagazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * Filter, which Magazines to fetch.
     */
    where?: MagazineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Magazines to fetch.
     */
    orderBy?: MagazineOrderByWithRelationInput | MagazineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Magazines.
     */
    cursor?: MagazineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Magazines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Magazines.
     */
    skip?: number
    distinct?: MagazineScalarFieldEnum | MagazineScalarFieldEnum[]
  }

  /**
   * Magazine create
   */
  export type MagazineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Magazine
     */
    omit?: MagazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * The data needed to create a Magazine.
     */
    data: XOR<MagazineCreateInput, MagazineUncheckedCreateInput>
  }

  /**
   * Magazine createMany
   */
  export type MagazineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Magazines.
     */
    data: MagazineCreateManyInput | MagazineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Magazine update
   */
  export type MagazineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Magazine
     */
    omit?: MagazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * The data needed to update a Magazine.
     */
    data: XOR<MagazineUpdateInput, MagazineUncheckedUpdateInput>
    /**
     * Choose, which Magazine to update.
     */
    where: MagazineWhereUniqueInput
  }

  /**
   * Magazine updateMany
   */
  export type MagazineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Magazines.
     */
    data: XOR<MagazineUpdateManyMutationInput, MagazineUncheckedUpdateManyInput>
    /**
     * Filter which Magazines to update
     */
    where?: MagazineWhereInput
    /**
     * Limit how many Magazines to update.
     */
    limit?: number
  }

  /**
   * Magazine upsert
   */
  export type MagazineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Magazine
     */
    omit?: MagazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * The filter to search for the Magazine to update in case it exists.
     */
    where: MagazineWhereUniqueInput
    /**
     * In case the Magazine found by the `where` argument doesn't exist, create a new Magazine with this data.
     */
    create: XOR<MagazineCreateInput, MagazineUncheckedCreateInput>
    /**
     * In case the Magazine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MagazineUpdateInput, MagazineUncheckedUpdateInput>
  }

  /**
   * Magazine delete
   */
  export type MagazineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Magazine
     */
    omit?: MagazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagazineInclude<ExtArgs> | null
    /**
     * Filter which Magazine to delete.
     */
    where: MagazineWhereUniqueInput
  }

  /**
   * Magazine deleteMany
   */
  export type MagazineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Magazines to delete
     */
    where?: MagazineWhereInput
    /**
     * Limit how many Magazines to delete.
     */
    limit?: number
  }

  /**
   * Magazine.editor
   */
  export type Magazine$editorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Magazine.posts
   */
  export type Magazine$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Magazine without action
   */
  export type MagazineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Magazine
     */
    omit?: MagazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagazineInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    readMinutes: number | null
    views: number | null
    likes: number | null
  }

  export type PostSumAggregateOutputType = {
    readMinutes: number | null
    views: number | null
    likes: number | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    readMinutes: number | null
    type: $Enums.PostType | null
    coverImageUrl: string | null
    status: $Enums.PostStatus | null
    visibility: $Enums.PostVisibility | null
    isFeatured: boolean | null
    scheduledAt: Date | null
    publishedAt: Date | null
    authorId: string | null
    magazineId: string | null
    categoryId: string | null
    views: number | null
    likes: number | null
    metaTitle: string | null
    metaDescription: string | null
    metaKeywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    title: string | null
    slug: string | null
    excerpt: string | null
    content: string | null
    readMinutes: number | null
    type: $Enums.PostType | null
    coverImageUrl: string | null
    status: $Enums.PostStatus | null
    visibility: $Enums.PostVisibility | null
    isFeatured: boolean | null
    scheduledAt: Date | null
    publishedAt: Date | null
    authorId: string | null
    magazineId: string | null
    categoryId: string | null
    views: number | null
    likes: number | null
    metaTitle: string | null
    metaDescription: string | null
    metaKeywords: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    excerpt: number
    content: number
    readMinutes: number
    type: number
    coverImageUrl: number
    status: number
    visibility: number
    isFeatured: number
    scheduledAt: number
    publishedAt: number
    authorId: number
    magazineId: number
    categoryId: number
    views: number
    likes: number
    metaTitle: number
    metaDescription: number
    metaKeywords: number
    slugHistory: number
    seoSchema: number
    settings: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    readMinutes?: true
    views?: true
    likes?: true
  }

  export type PostSumAggregateInputType = {
    readMinutes?: true
    views?: true
    likes?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    readMinutes?: true
    type?: true
    coverImageUrl?: true
    status?: true
    visibility?: true
    isFeatured?: true
    scheduledAt?: true
    publishedAt?: true
    authorId?: true
    magazineId?: true
    categoryId?: true
    views?: true
    likes?: true
    metaTitle?: true
    metaDescription?: true
    metaKeywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    readMinutes?: true
    type?: true
    coverImageUrl?: true
    status?: true
    visibility?: true
    isFeatured?: true
    scheduledAt?: true
    publishedAt?: true
    authorId?: true
    magazineId?: true
    categoryId?: true
    views?: true
    likes?: true
    metaTitle?: true
    metaDescription?: true
    metaKeywords?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    excerpt?: true
    content?: true
    readMinutes?: true
    type?: true
    coverImageUrl?: true
    status?: true
    visibility?: true
    isFeatured?: true
    scheduledAt?: true
    publishedAt?: true
    authorId?: true
    magazineId?: true
    categoryId?: true
    views?: true
    likes?: true
    metaTitle?: true
    metaDescription?: true
    metaKeywords?: true
    slugHistory?: true
    seoSchema?: true
    settings?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    title: string
    slug: string
    excerpt: string | null
    content: string
    readMinutes: number | null
    type: $Enums.PostType
    coverImageUrl: string | null
    status: $Enums.PostStatus
    visibility: $Enums.PostVisibility
    isFeatured: boolean
    scheduledAt: Date | null
    publishedAt: Date | null
    authorId: string
    magazineId: string | null
    categoryId: string | null
    views: number
    likes: number
    metaTitle: string | null
    metaDescription: string | null
    metaKeywords: string | null
    slugHistory: JsonValue | null
    seoSchema: JsonValue | null
    settings: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    readMinutes?: boolean
    type?: boolean
    coverImageUrl?: boolean
    status?: boolean
    visibility?: boolean
    isFeatured?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    authorId?: boolean
    magazineId?: boolean
    categoryId?: boolean
    views?: boolean
    likes?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    slugHistory?: boolean
    seoSchema?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    magazine?: boolean | Post$magazineArgs<ExtArgs>
    category?: boolean | Post$categoryArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    revisions?: boolean | Post$revisionsArgs<ExtArgs>
    media?: boolean | Post$mediaArgs<ExtArgs>
    viewLogs?: boolean | Post$viewLogsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    excerpt?: boolean
    content?: boolean
    readMinutes?: boolean
    type?: boolean
    coverImageUrl?: boolean
    status?: boolean
    visibility?: boolean
    isFeatured?: boolean
    scheduledAt?: boolean
    publishedAt?: boolean
    authorId?: boolean
    magazineId?: boolean
    categoryId?: boolean
    views?: boolean
    likes?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    slugHistory?: boolean
    seoSchema?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "slug" | "excerpt" | "content" | "readMinutes" | "type" | "coverImageUrl" | "status" | "visibility" | "isFeatured" | "scheduledAt" | "publishedAt" | "authorId" | "magazineId" | "categoryId" | "views" | "likes" | "metaTitle" | "metaDescription" | "metaKeywords" | "slugHistory" | "seoSchema" | "settings" | "createdAt" | "updatedAt", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    magazine?: boolean | Post$magazineArgs<ExtArgs>
    category?: boolean | Post$categoryArgs<ExtArgs>
    tags?: boolean | Post$tagsArgs<ExtArgs>
    comments?: boolean | Post$commentsArgs<ExtArgs>
    revisions?: boolean | Post$revisionsArgs<ExtArgs>
    media?: boolean | Post$mediaArgs<ExtArgs>
    viewLogs?: boolean | Post$viewLogsArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      magazine: Prisma.$MagazinePayload<ExtArgs> | null
      category: Prisma.$CategoryPayload<ExtArgs> | null
      tags: Prisma.$PostTagsPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      revisions: Prisma.$RevisionPayload<ExtArgs>[]
      media: Prisma.$PostMediaPayload<ExtArgs>[]
      viewLogs: Prisma.$ViewLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      slug: string
      excerpt: string | null
      content: string
      readMinutes: number | null
      type: $Enums.PostType
      coverImageUrl: string | null
      status: $Enums.PostStatus
      visibility: $Enums.PostVisibility
      isFeatured: boolean
      scheduledAt: Date | null
      publishedAt: Date | null
      authorId: string
      magazineId: string | null
      categoryId: string | null
      views: number
      likes: number
      metaTitle: string | null
      metaDescription: string | null
      metaKeywords: string | null
      slugHistory: Prisma.JsonValue | null
      seoSchema: Prisma.JsonValue | null
      settings: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    magazine<T extends Post$magazineArgs<ExtArgs> = {}>(args?: Subset<T, Post$magazineArgs<ExtArgs>>): Prisma__MagazineClient<$Result.GetResult<Prisma.$MagazinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    category<T extends Post$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Post$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tags<T extends Post$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Post$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Post$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Post$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    revisions<T extends Post$revisionsArgs<ExtArgs> = {}>(args?: Subset<T, Post$revisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    media<T extends Post$mediaArgs<ExtArgs> = {}>(args?: Subset<T, Post$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viewLogs<T extends Post$viewLogsArgs<ExtArgs> = {}>(args?: Subset<T, Post$viewLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly slug: FieldRef<"Post", 'String'>
    readonly excerpt: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly readMinutes: FieldRef<"Post", 'Int'>
    readonly type: FieldRef<"Post", 'PostType'>
    readonly coverImageUrl: FieldRef<"Post", 'String'>
    readonly status: FieldRef<"Post", 'PostStatus'>
    readonly visibility: FieldRef<"Post", 'PostVisibility'>
    readonly isFeatured: FieldRef<"Post", 'Boolean'>
    readonly scheduledAt: FieldRef<"Post", 'DateTime'>
    readonly publishedAt: FieldRef<"Post", 'DateTime'>
    readonly authorId: FieldRef<"Post", 'String'>
    readonly magazineId: FieldRef<"Post", 'String'>
    readonly categoryId: FieldRef<"Post", 'String'>
    readonly views: FieldRef<"Post", 'Int'>
    readonly likes: FieldRef<"Post", 'Int'>
    readonly metaTitle: FieldRef<"Post", 'String'>
    readonly metaDescription: FieldRef<"Post", 'String'>
    readonly metaKeywords: FieldRef<"Post", 'String'>
    readonly slugHistory: FieldRef<"Post", 'Json'>
    readonly seoSchema: FieldRef<"Post", 'Json'>
    readonly settings: FieldRef<"Post", 'Json'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.magazine
   */
  export type Post$magazineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Magazine
     */
    select?: MagazineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Magazine
     */
    omit?: MagazineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MagazineInclude<ExtArgs> | null
    where?: MagazineWhereInput
  }

  /**
   * Post.category
   */
  export type Post$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Post.tags
   */
  export type Post$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTags
     */
    select?: PostTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTags
     */
    omit?: PostTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagsInclude<ExtArgs> | null
    where?: PostTagsWhereInput
    orderBy?: PostTagsOrderByWithRelationInput | PostTagsOrderByWithRelationInput[]
    cursor?: PostTagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostTagsScalarFieldEnum | PostTagsScalarFieldEnum[]
  }

  /**
   * Post.comments
   */
  export type Post$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Post.revisions
   */
  export type Post$revisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    where?: RevisionWhereInput
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    cursor?: RevisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RevisionScalarFieldEnum | RevisionScalarFieldEnum[]
  }

  /**
   * Post.media
   */
  export type Post$mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    where?: PostMediaWhereInput
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    cursor?: PostMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostMediaScalarFieldEnum | PostMediaScalarFieldEnum[]
  }

  /**
   * Post.viewLogs
   */
  export type Post$viewLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    where?: ViewLogWhereInput
    orderBy?: ViewLogOrderByWithRelationInput | ViewLogOrderByWithRelationInput[]
    cursor?: ViewLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewLogScalarFieldEnum | ViewLogScalarFieldEnum[]
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model PostTags
   */

  export type AggregatePostTags = {
    _count: PostTagsCountAggregateOutputType | null
    _min: PostTagsMinAggregateOutputType | null
    _max: PostTagsMaxAggregateOutputType | null
  }

  export type PostTagsMinAggregateOutputType = {
    postId: string | null
    tagId: string | null
  }

  export type PostTagsMaxAggregateOutputType = {
    postId: string | null
    tagId: string | null
  }

  export type PostTagsCountAggregateOutputType = {
    postId: number
    tagId: number
    _all: number
  }


  export type PostTagsMinAggregateInputType = {
    postId?: true
    tagId?: true
  }

  export type PostTagsMaxAggregateInputType = {
    postId?: true
    tagId?: true
  }

  export type PostTagsCountAggregateInputType = {
    postId?: true
    tagId?: true
    _all?: true
  }

  export type PostTagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTags to aggregate.
     */
    where?: PostTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagsOrderByWithRelationInput | PostTagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostTags
    **/
    _count?: true | PostTagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostTagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostTagsMaxAggregateInputType
  }

  export type GetPostTagsAggregateType<T extends PostTagsAggregateArgs> = {
        [P in keyof T & keyof AggregatePostTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostTags[P]>
      : GetScalarType<T[P], AggregatePostTags[P]>
  }




  export type PostTagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostTagsWhereInput
    orderBy?: PostTagsOrderByWithAggregationInput | PostTagsOrderByWithAggregationInput[]
    by: PostTagsScalarFieldEnum[] | PostTagsScalarFieldEnum
    having?: PostTagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostTagsCountAggregateInputType | true
    _min?: PostTagsMinAggregateInputType
    _max?: PostTagsMaxAggregateInputType
  }

  export type PostTagsGroupByOutputType = {
    postId: string
    tagId: string
    _count: PostTagsCountAggregateOutputType | null
    _min: PostTagsMinAggregateOutputType | null
    _max: PostTagsMaxAggregateOutputType | null
  }

  type GetPostTagsGroupByPayload<T extends PostTagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostTagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostTagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostTagsGroupByOutputType[P]>
            : GetScalarType<T[P], PostTagsGroupByOutputType[P]>
        }
      >
    >


  export type PostTagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    tagId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postTags"]>



  export type PostTagsSelectScalar = {
    postId?: boolean
    tagId?: boolean
  }

  export type PostTagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "tagId", ExtArgs["result"]["postTags"]>
  export type PostTagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $PostTagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostTags"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: string
      tagId: string
    }, ExtArgs["result"]["postTags"]>
    composites: {}
  }

  type PostTagsGetPayload<S extends boolean | null | undefined | PostTagsDefaultArgs> = $Result.GetResult<Prisma.$PostTagsPayload, S>

  type PostTagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostTagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostTagsCountAggregateInputType | true
    }

  export interface PostTagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostTags'], meta: { name: 'PostTags' } }
    /**
     * Find zero or one PostTags that matches the filter.
     * @param {PostTagsFindUniqueArgs} args - Arguments to find a PostTags
     * @example
     * // Get one PostTags
     * const postTags = await prisma.postTags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostTagsFindUniqueArgs>(args: SelectSubset<T, PostTagsFindUniqueArgs<ExtArgs>>): Prisma__PostTagsClient<$Result.GetResult<Prisma.$PostTagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostTags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostTagsFindUniqueOrThrowArgs} args - Arguments to find a PostTags
     * @example
     * // Get one PostTags
     * const postTags = await prisma.postTags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostTagsFindUniqueOrThrowArgs>(args: SelectSubset<T, PostTagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostTagsClient<$Result.GetResult<Prisma.$PostTagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagsFindFirstArgs} args - Arguments to find a PostTags
     * @example
     * // Get one PostTags
     * const postTags = await prisma.postTags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostTagsFindFirstArgs>(args?: SelectSubset<T, PostTagsFindFirstArgs<ExtArgs>>): Prisma__PostTagsClient<$Result.GetResult<Prisma.$PostTagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostTags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagsFindFirstOrThrowArgs} args - Arguments to find a PostTags
     * @example
     * // Get one PostTags
     * const postTags = await prisma.postTags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostTagsFindFirstOrThrowArgs>(args?: SelectSubset<T, PostTagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostTagsClient<$Result.GetResult<Prisma.$PostTagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostTags
     * const postTags = await prisma.postTags.findMany()
     * 
     * // Get first 10 PostTags
     * const postTags = await prisma.postTags.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const postTagsWithPostIdOnly = await prisma.postTags.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends PostTagsFindManyArgs>(args?: SelectSubset<T, PostTagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostTagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostTags.
     * @param {PostTagsCreateArgs} args - Arguments to create a PostTags.
     * @example
     * // Create one PostTags
     * const PostTags = await prisma.postTags.create({
     *   data: {
     *     // ... data to create a PostTags
     *   }
     * })
     * 
     */
    create<T extends PostTagsCreateArgs>(args: SelectSubset<T, PostTagsCreateArgs<ExtArgs>>): Prisma__PostTagsClient<$Result.GetResult<Prisma.$PostTagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostTags.
     * @param {PostTagsCreateManyArgs} args - Arguments to create many PostTags.
     * @example
     * // Create many PostTags
     * const postTags = await prisma.postTags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostTagsCreateManyArgs>(args?: SelectSubset<T, PostTagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostTags.
     * @param {PostTagsDeleteArgs} args - Arguments to delete one PostTags.
     * @example
     * // Delete one PostTags
     * const PostTags = await prisma.postTags.delete({
     *   where: {
     *     // ... filter to delete one PostTags
     *   }
     * })
     * 
     */
    delete<T extends PostTagsDeleteArgs>(args: SelectSubset<T, PostTagsDeleteArgs<ExtArgs>>): Prisma__PostTagsClient<$Result.GetResult<Prisma.$PostTagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostTags.
     * @param {PostTagsUpdateArgs} args - Arguments to update one PostTags.
     * @example
     * // Update one PostTags
     * const postTags = await prisma.postTags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostTagsUpdateArgs>(args: SelectSubset<T, PostTagsUpdateArgs<ExtArgs>>): Prisma__PostTagsClient<$Result.GetResult<Prisma.$PostTagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostTags.
     * @param {PostTagsDeleteManyArgs} args - Arguments to filter PostTags to delete.
     * @example
     * // Delete a few PostTags
     * const { count } = await prisma.postTags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostTagsDeleteManyArgs>(args?: SelectSubset<T, PostTagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostTags
     * const postTags = await prisma.postTags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostTagsUpdateManyArgs>(args: SelectSubset<T, PostTagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostTags.
     * @param {PostTagsUpsertArgs} args - Arguments to update or create a PostTags.
     * @example
     * // Update or create a PostTags
     * const postTags = await prisma.postTags.upsert({
     *   create: {
     *     // ... data to create a PostTags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostTags we want to update
     *   }
     * })
     */
    upsert<T extends PostTagsUpsertArgs>(args: SelectSubset<T, PostTagsUpsertArgs<ExtArgs>>): Prisma__PostTagsClient<$Result.GetResult<Prisma.$PostTagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagsCountArgs} args - Arguments to filter PostTags to count.
     * @example
     * // Count the number of PostTags
     * const count = await prisma.postTags.count({
     *   where: {
     *     // ... the filter for the PostTags we want to count
     *   }
     * })
    **/
    count<T extends PostTagsCountArgs>(
      args?: Subset<T, PostTagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostTagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostTagsAggregateArgs>(args: Subset<T, PostTagsAggregateArgs>): Prisma.PrismaPromise<GetPostTagsAggregateType<T>>

    /**
     * Group by PostTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostTagsGroupByArgs} args - Group by arguments.
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
      T extends PostTagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostTagsGroupByArgs['orderBy'] }
        : { orderBy?: PostTagsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostTagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostTags model
   */
  readonly fields: PostTagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostTags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostTagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostTags model
   */
  interface PostTagsFieldRefs {
    readonly postId: FieldRef<"PostTags", 'String'>
    readonly tagId: FieldRef<"PostTags", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostTags findUnique
   */
  export type PostTagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTags
     */
    select?: PostTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTags
     */
    omit?: PostTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagsInclude<ExtArgs> | null
    /**
     * Filter, which PostTags to fetch.
     */
    where: PostTagsWhereUniqueInput
  }

  /**
   * PostTags findUniqueOrThrow
   */
  export type PostTagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTags
     */
    select?: PostTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTags
     */
    omit?: PostTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagsInclude<ExtArgs> | null
    /**
     * Filter, which PostTags to fetch.
     */
    where: PostTagsWhereUniqueInput
  }

  /**
   * PostTags findFirst
   */
  export type PostTagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTags
     */
    select?: PostTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTags
     */
    omit?: PostTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagsInclude<ExtArgs> | null
    /**
     * Filter, which PostTags to fetch.
     */
    where?: PostTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagsOrderByWithRelationInput | PostTagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagsScalarFieldEnum | PostTagsScalarFieldEnum[]
  }

  /**
   * PostTags findFirstOrThrow
   */
  export type PostTagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTags
     */
    select?: PostTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTags
     */
    omit?: PostTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagsInclude<ExtArgs> | null
    /**
     * Filter, which PostTags to fetch.
     */
    where?: PostTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagsOrderByWithRelationInput | PostTagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostTags.
     */
    cursor?: PostTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostTags.
     */
    distinct?: PostTagsScalarFieldEnum | PostTagsScalarFieldEnum[]
  }

  /**
   * PostTags findMany
   */
  export type PostTagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTags
     */
    select?: PostTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTags
     */
    omit?: PostTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagsInclude<ExtArgs> | null
    /**
     * Filter, which PostTags to fetch.
     */
    where?: PostTagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostTags to fetch.
     */
    orderBy?: PostTagsOrderByWithRelationInput | PostTagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostTags.
     */
    cursor?: PostTagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostTags.
     */
    skip?: number
    distinct?: PostTagsScalarFieldEnum | PostTagsScalarFieldEnum[]
  }

  /**
   * PostTags create
   */
  export type PostTagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTags
     */
    select?: PostTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTags
     */
    omit?: PostTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagsInclude<ExtArgs> | null
    /**
     * The data needed to create a PostTags.
     */
    data: XOR<PostTagsCreateInput, PostTagsUncheckedCreateInput>
  }

  /**
   * PostTags createMany
   */
  export type PostTagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostTags.
     */
    data: PostTagsCreateManyInput | PostTagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostTags update
   */
  export type PostTagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTags
     */
    select?: PostTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTags
     */
    omit?: PostTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagsInclude<ExtArgs> | null
    /**
     * The data needed to update a PostTags.
     */
    data: XOR<PostTagsUpdateInput, PostTagsUncheckedUpdateInput>
    /**
     * Choose, which PostTags to update.
     */
    where: PostTagsWhereUniqueInput
  }

  /**
   * PostTags updateMany
   */
  export type PostTagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostTags.
     */
    data: XOR<PostTagsUpdateManyMutationInput, PostTagsUncheckedUpdateManyInput>
    /**
     * Filter which PostTags to update
     */
    where?: PostTagsWhereInput
    /**
     * Limit how many PostTags to update.
     */
    limit?: number
  }

  /**
   * PostTags upsert
   */
  export type PostTagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTags
     */
    select?: PostTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTags
     */
    omit?: PostTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagsInclude<ExtArgs> | null
    /**
     * The filter to search for the PostTags to update in case it exists.
     */
    where: PostTagsWhereUniqueInput
    /**
     * In case the PostTags found by the `where` argument doesn't exist, create a new PostTags with this data.
     */
    create: XOR<PostTagsCreateInput, PostTagsUncheckedCreateInput>
    /**
     * In case the PostTags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostTagsUpdateInput, PostTagsUncheckedUpdateInput>
  }

  /**
   * PostTags delete
   */
  export type PostTagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTags
     */
    select?: PostTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTags
     */
    omit?: PostTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagsInclude<ExtArgs> | null
    /**
     * Filter which PostTags to delete.
     */
    where: PostTagsWhereUniqueInput
  }

  /**
   * PostTags deleteMany
   */
  export type PostTagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostTags to delete
     */
    where?: PostTagsWhereInput
    /**
     * Limit how many PostTags to delete.
     */
    limit?: number
  }

  /**
   * PostTags without action
   */
  export type PostTagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostTags
     */
    select?: PostTagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostTags
     */
    omit?: PostTagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostTagsInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    postId: string | null
    authorId: string | null
    content: string | null
    parentId: string | null
    status: $Enums.CommentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    authorId: string | null
    content: string | null
    parentId: string | null
    status: $Enums.CommentStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    postId: number
    authorId: number
    content: number
    parentId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    postId?: true
    authorId?: true
    content?: true
    parentId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    postId?: true
    authorId?: true
    content?: true
    parentId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    postId?: true
    authorId?: true
    content?: true
    parentId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
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
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    postId: string
    authorId: string | null
    content: string
    parentId: string | null
    status: $Enums.CommentStatus
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    authorId?: boolean
    content?: boolean
    parentId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    author?: boolean | Comment$authorArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    children?: boolean | Comment$childrenArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    postId?: boolean
    authorId?: boolean
    content?: boolean
    parentId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "authorId" | "content" | "parentId" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    author?: boolean | Comment$authorArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    children?: boolean | Comment$childrenArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs> | null
      parent: Prisma.$CommentPayload<ExtArgs> | null
      children: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      authorId: string | null
      content: string
      parentId: string | null
      status: $Enums.CommentStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends Comment$authorArgs<ExtArgs> = {}>(args?: Subset<T, Comment$authorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Comment$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Comment$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly postId: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
    readonly status: FieldRef<"Comment", 'CommentStatus'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
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
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
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
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
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
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.author
   */
  export type Comment$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.children
   */
  export type Comment$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Revision
   */

  export type AggregateRevision = {
    _count: RevisionCountAggregateOutputType | null
    _min: RevisionMinAggregateOutputType | null
    _max: RevisionMaxAggregateOutputType | null
  }

  export type RevisionMinAggregateOutputType = {
    id: string | null
    postId: string | null
    authorId: string | null
    content: string | null
    title: string | null
    createdAt: Date | null
  }

  export type RevisionMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    authorId: string | null
    content: string | null
    title: string | null
    createdAt: Date | null
  }

  export type RevisionCountAggregateOutputType = {
    id: number
    postId: number
    authorId: number
    content: number
    title: number
    createdAt: number
    _all: number
  }


  export type RevisionMinAggregateInputType = {
    id?: true
    postId?: true
    authorId?: true
    content?: true
    title?: true
    createdAt?: true
  }

  export type RevisionMaxAggregateInputType = {
    id?: true
    postId?: true
    authorId?: true
    content?: true
    title?: true
    createdAt?: true
  }

  export type RevisionCountAggregateInputType = {
    id?: true
    postId?: true
    authorId?: true
    content?: true
    title?: true
    createdAt?: true
    _all?: true
  }

  export type RevisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Revision to aggregate.
     */
    where?: RevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revisions to fetch.
     */
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Revisions
    **/
    _count?: true | RevisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RevisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RevisionMaxAggregateInputType
  }

  export type GetRevisionAggregateType<T extends RevisionAggregateArgs> = {
        [P in keyof T & keyof AggregateRevision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRevision[P]>
      : GetScalarType<T[P], AggregateRevision[P]>
  }




  export type RevisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RevisionWhereInput
    orderBy?: RevisionOrderByWithAggregationInput | RevisionOrderByWithAggregationInput[]
    by: RevisionScalarFieldEnum[] | RevisionScalarFieldEnum
    having?: RevisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RevisionCountAggregateInputType | true
    _min?: RevisionMinAggregateInputType
    _max?: RevisionMaxAggregateInputType
  }

  export type RevisionGroupByOutputType = {
    id: string
    postId: string
    authorId: string
    content: string
    title: string | null
    createdAt: Date
    _count: RevisionCountAggregateOutputType | null
    _min: RevisionMinAggregateOutputType | null
    _max: RevisionMaxAggregateOutputType | null
  }

  type GetRevisionGroupByPayload<T extends RevisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RevisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RevisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RevisionGroupByOutputType[P]>
            : GetScalarType<T[P], RevisionGroupByOutputType[P]>
        }
      >
    >


  export type RevisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    authorId?: boolean
    content?: boolean
    title?: boolean
    createdAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["revision"]>



  export type RevisionSelectScalar = {
    id?: boolean
    postId?: boolean
    authorId?: boolean
    content?: boolean
    title?: boolean
    createdAt?: boolean
  }

  export type RevisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "authorId" | "content" | "title" | "createdAt", ExtArgs["result"]["revision"]>
  export type RevisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RevisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Revision"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      authorId: string
      content: string
      title: string | null
      createdAt: Date
    }, ExtArgs["result"]["revision"]>
    composites: {}
  }

  type RevisionGetPayload<S extends boolean | null | undefined | RevisionDefaultArgs> = $Result.GetResult<Prisma.$RevisionPayload, S>

  type RevisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RevisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RevisionCountAggregateInputType | true
    }

  export interface RevisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Revision'], meta: { name: 'Revision' } }
    /**
     * Find zero or one Revision that matches the filter.
     * @param {RevisionFindUniqueArgs} args - Arguments to find a Revision
     * @example
     * // Get one Revision
     * const revision = await prisma.revision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RevisionFindUniqueArgs>(args: SelectSubset<T, RevisionFindUniqueArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Revision that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RevisionFindUniqueOrThrowArgs} args - Arguments to find a Revision
     * @example
     * // Get one Revision
     * const revision = await prisma.revision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RevisionFindUniqueOrThrowArgs>(args: SelectSubset<T, RevisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Revision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionFindFirstArgs} args - Arguments to find a Revision
     * @example
     * // Get one Revision
     * const revision = await prisma.revision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RevisionFindFirstArgs>(args?: SelectSubset<T, RevisionFindFirstArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Revision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionFindFirstOrThrowArgs} args - Arguments to find a Revision
     * @example
     * // Get one Revision
     * const revision = await prisma.revision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RevisionFindFirstOrThrowArgs>(args?: SelectSubset<T, RevisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Revisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Revisions
     * const revisions = await prisma.revision.findMany()
     * 
     * // Get first 10 Revisions
     * const revisions = await prisma.revision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const revisionWithIdOnly = await prisma.revision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RevisionFindManyArgs>(args?: SelectSubset<T, RevisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Revision.
     * @param {RevisionCreateArgs} args - Arguments to create a Revision.
     * @example
     * // Create one Revision
     * const Revision = await prisma.revision.create({
     *   data: {
     *     // ... data to create a Revision
     *   }
     * })
     * 
     */
    create<T extends RevisionCreateArgs>(args: SelectSubset<T, RevisionCreateArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Revisions.
     * @param {RevisionCreateManyArgs} args - Arguments to create many Revisions.
     * @example
     * // Create many Revisions
     * const revision = await prisma.revision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RevisionCreateManyArgs>(args?: SelectSubset<T, RevisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Revision.
     * @param {RevisionDeleteArgs} args - Arguments to delete one Revision.
     * @example
     * // Delete one Revision
     * const Revision = await prisma.revision.delete({
     *   where: {
     *     // ... filter to delete one Revision
     *   }
     * })
     * 
     */
    delete<T extends RevisionDeleteArgs>(args: SelectSubset<T, RevisionDeleteArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Revision.
     * @param {RevisionUpdateArgs} args - Arguments to update one Revision.
     * @example
     * // Update one Revision
     * const revision = await prisma.revision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RevisionUpdateArgs>(args: SelectSubset<T, RevisionUpdateArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Revisions.
     * @param {RevisionDeleteManyArgs} args - Arguments to filter Revisions to delete.
     * @example
     * // Delete a few Revisions
     * const { count } = await prisma.revision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RevisionDeleteManyArgs>(args?: SelectSubset<T, RevisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Revisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Revisions
     * const revision = await prisma.revision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RevisionUpdateManyArgs>(args: SelectSubset<T, RevisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Revision.
     * @param {RevisionUpsertArgs} args - Arguments to update or create a Revision.
     * @example
     * // Update or create a Revision
     * const revision = await prisma.revision.upsert({
     *   create: {
     *     // ... data to create a Revision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Revision we want to update
     *   }
     * })
     */
    upsert<T extends RevisionUpsertArgs>(args: SelectSubset<T, RevisionUpsertArgs<ExtArgs>>): Prisma__RevisionClient<$Result.GetResult<Prisma.$RevisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Revisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionCountArgs} args - Arguments to filter Revisions to count.
     * @example
     * // Count the number of Revisions
     * const count = await prisma.revision.count({
     *   where: {
     *     // ... the filter for the Revisions we want to count
     *   }
     * })
    **/
    count<T extends RevisionCountArgs>(
      args?: Subset<T, RevisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RevisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Revision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RevisionAggregateArgs>(args: Subset<T, RevisionAggregateArgs>): Prisma.PrismaPromise<GetRevisionAggregateType<T>>

    /**
     * Group by Revision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RevisionGroupByArgs} args - Group by arguments.
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
      T extends RevisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RevisionGroupByArgs['orderBy'] }
        : { orderBy?: RevisionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RevisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRevisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Revision model
   */
  readonly fields: RevisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Revision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RevisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Revision model
   */
  interface RevisionFieldRefs {
    readonly id: FieldRef<"Revision", 'String'>
    readonly postId: FieldRef<"Revision", 'String'>
    readonly authorId: FieldRef<"Revision", 'String'>
    readonly content: FieldRef<"Revision", 'String'>
    readonly title: FieldRef<"Revision", 'String'>
    readonly createdAt: FieldRef<"Revision", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Revision findUnique
   */
  export type RevisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revision to fetch.
     */
    where: RevisionWhereUniqueInput
  }

  /**
   * Revision findUniqueOrThrow
   */
  export type RevisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revision to fetch.
     */
    where: RevisionWhereUniqueInput
  }

  /**
   * Revision findFirst
   */
  export type RevisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revision to fetch.
     */
    where?: RevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revisions to fetch.
     */
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Revisions.
     */
    cursor?: RevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Revisions.
     */
    distinct?: RevisionScalarFieldEnum | RevisionScalarFieldEnum[]
  }

  /**
   * Revision findFirstOrThrow
   */
  export type RevisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revision to fetch.
     */
    where?: RevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revisions to fetch.
     */
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Revisions.
     */
    cursor?: RevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Revisions.
     */
    distinct?: RevisionScalarFieldEnum | RevisionScalarFieldEnum[]
  }

  /**
   * Revision findMany
   */
  export type RevisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter, which Revisions to fetch.
     */
    where?: RevisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Revisions to fetch.
     */
    orderBy?: RevisionOrderByWithRelationInput | RevisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Revisions.
     */
    cursor?: RevisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Revisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Revisions.
     */
    skip?: number
    distinct?: RevisionScalarFieldEnum | RevisionScalarFieldEnum[]
  }

  /**
   * Revision create
   */
  export type RevisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Revision.
     */
    data: XOR<RevisionCreateInput, RevisionUncheckedCreateInput>
  }

  /**
   * Revision createMany
   */
  export type RevisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Revisions.
     */
    data: RevisionCreateManyInput | RevisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Revision update
   */
  export type RevisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Revision.
     */
    data: XOR<RevisionUpdateInput, RevisionUncheckedUpdateInput>
    /**
     * Choose, which Revision to update.
     */
    where: RevisionWhereUniqueInput
  }

  /**
   * Revision updateMany
   */
  export type RevisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Revisions.
     */
    data: XOR<RevisionUpdateManyMutationInput, RevisionUncheckedUpdateManyInput>
    /**
     * Filter which Revisions to update
     */
    where?: RevisionWhereInput
    /**
     * Limit how many Revisions to update.
     */
    limit?: number
  }

  /**
   * Revision upsert
   */
  export type RevisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Revision to update in case it exists.
     */
    where: RevisionWhereUniqueInput
    /**
     * In case the Revision found by the `where` argument doesn't exist, create a new Revision with this data.
     */
    create: XOR<RevisionCreateInput, RevisionUncheckedCreateInput>
    /**
     * In case the Revision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RevisionUpdateInput, RevisionUncheckedUpdateInput>
  }

  /**
   * Revision delete
   */
  export type RevisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
    /**
     * Filter which Revision to delete.
     */
    where: RevisionWhereUniqueInput
  }

  /**
   * Revision deleteMany
   */
  export type RevisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Revisions to delete
     */
    where?: RevisionWhereInput
    /**
     * Limit how many Revisions to delete.
     */
    limit?: number
  }

  /**
   * Revision without action
   */
  export type RevisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Revision
     */
    select?: RevisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Revision
     */
    omit?: RevisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RevisionInclude<ExtArgs> | null
  }


  /**
   * Model Media
   */

  export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  export type MediaMinAggregateOutputType = {
    id: string | null
    url: string | null
    altText: string | null
    caption: string | null
    type: $Enums.MediaType | null
    uploadedById: string | null
    createdAt: Date | null
  }

  export type MediaMaxAggregateOutputType = {
    id: string | null
    url: string | null
    altText: string | null
    caption: string | null
    type: $Enums.MediaType | null
    uploadedById: string | null
    createdAt: Date | null
  }

  export type MediaCountAggregateOutputType = {
    id: number
    url: number
    altText: number
    caption: number
    type: number
    uploadedById: number
    createdAt: number
    _all: number
  }


  export type MediaMinAggregateInputType = {
    id?: true
    url?: true
    altText?: true
    caption?: true
    type?: true
    uploadedById?: true
    createdAt?: true
  }

  export type MediaMaxAggregateInputType = {
    id?: true
    url?: true
    altText?: true
    caption?: true
    type?: true
    uploadedById?: true
    createdAt?: true
  }

  export type MediaCountAggregateInputType = {
    id?: true
    url?: true
    altText?: true
    caption?: true
    type?: true
    uploadedById?: true
    createdAt?: true
    _all?: true
  }

  export type MediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to aggregate.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Media
    **/
    _count?: true | MediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaMaxAggregateInputType
  }

  export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
        [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedia[P]>
      : GetScalarType<T[P], AggregateMedia[P]>
  }




  export type MediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaWhereInput
    orderBy?: MediaOrderByWithAggregationInput | MediaOrderByWithAggregationInput[]
    by: MediaScalarFieldEnum[] | MediaScalarFieldEnum
    having?: MediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaCountAggregateInputType | true
    _min?: MediaMinAggregateInputType
    _max?: MediaMaxAggregateInputType
  }

  export type MediaGroupByOutputType = {
    id: string
    url: string
    altText: string | null
    caption: string | null
    type: $Enums.MediaType
    uploadedById: string | null
    createdAt: Date
    _count: MediaCountAggregateOutputType | null
    _min: MediaMinAggregateOutputType | null
    _max: MediaMaxAggregateOutputType | null
  }

  type GetMediaGroupByPayload<T extends MediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaGroupByOutputType[P]>
            : GetScalarType<T[P], MediaGroupByOutputType[P]>
        }
      >
    >


  export type MediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    altText?: boolean
    caption?: boolean
    type?: boolean
    uploadedById?: boolean
    createdAt?: boolean
    uploadedBy?: boolean | Media$uploadedByArgs<ExtArgs>
    posts?: boolean | Media$postsArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["media"]>



  export type MediaSelectScalar = {
    id?: boolean
    url?: boolean
    altText?: boolean
    caption?: boolean
    type?: boolean
    uploadedById?: boolean
    createdAt?: boolean
  }

  export type MediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "altText" | "caption" | "type" | "uploadedById" | "createdAt", ExtArgs["result"]["media"]>
  export type MediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploadedBy?: boolean | Media$uploadedByArgs<ExtArgs>
    posts?: boolean | Media$postsArgs<ExtArgs>
    _count?: boolean | MediaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Media"
    objects: {
      uploadedBy: Prisma.$UserPayload<ExtArgs> | null
      posts: Prisma.$PostMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      altText: string | null
      caption: string | null
      type: $Enums.MediaType
      uploadedById: string | null
      createdAt: Date
    }, ExtArgs["result"]["media"]>
    composites: {}
  }

  type MediaGetPayload<S extends boolean | null | undefined | MediaDefaultArgs> = $Result.GetResult<Prisma.$MediaPayload, S>

  type MediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MediaCountAggregateInputType | true
    }

  export interface MediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Media'], meta: { name: 'Media' } }
    /**
     * Find zero or one Media that matches the filter.
     * @param {MediaFindUniqueArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFindUniqueArgs>(args: SelectSubset<T, MediaFindUniqueArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Media that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MediaFindUniqueOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFindFirstArgs>(args?: SelectSubset<T, MediaFindFirstArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindFirstOrThrowArgs} args - Arguments to find a Media
     * @example
     * // Get one Media
     * const media = await prisma.media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Media
     * const media = await prisma.media.findMany()
     * 
     * // Get first 10 Media
     * const media = await prisma.media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaWithIdOnly = await prisma.media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaFindManyArgs>(args?: SelectSubset<T, MediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Media.
     * @param {MediaCreateArgs} args - Arguments to create a Media.
     * @example
     * // Create one Media
     * const Media = await prisma.media.create({
     *   data: {
     *     // ... data to create a Media
     *   }
     * })
     * 
     */
    create<T extends MediaCreateArgs>(args: SelectSubset<T, MediaCreateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Media.
     * @param {MediaCreateManyArgs} args - Arguments to create many Media.
     * @example
     * // Create many Media
     * const media = await prisma.media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaCreateManyArgs>(args?: SelectSubset<T, MediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Media.
     * @param {MediaDeleteArgs} args - Arguments to delete one Media.
     * @example
     * // Delete one Media
     * const Media = await prisma.media.delete({
     *   where: {
     *     // ... filter to delete one Media
     *   }
     * })
     * 
     */
    delete<T extends MediaDeleteArgs>(args: SelectSubset<T, MediaDeleteArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Media.
     * @param {MediaUpdateArgs} args - Arguments to update one Media.
     * @example
     * // Update one Media
     * const media = await prisma.media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaUpdateArgs>(args: SelectSubset<T, MediaUpdateArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Media.
     * @param {MediaDeleteManyArgs} args - Arguments to filter Media to delete.
     * @example
     * // Delete a few Media
     * const { count } = await prisma.media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaDeleteManyArgs>(args?: SelectSubset<T, MediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Media
     * const media = await prisma.media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaUpdateManyArgs>(args: SelectSubset<T, MediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Media.
     * @param {MediaUpsertArgs} args - Arguments to update or create a Media.
     * @example
     * // Update or create a Media
     * const media = await prisma.media.upsert({
     *   create: {
     *     // ... data to create a Media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Media we want to update
     *   }
     * })
     */
    upsert<T extends MediaUpsertArgs>(args: SelectSubset<T, MediaUpsertArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaCountArgs} args - Arguments to filter Media to count.
     * @example
     * // Count the number of Media
     * const count = await prisma.media.count({
     *   where: {
     *     // ... the filter for the Media we want to count
     *   }
     * })
    **/
    count<T extends MediaCountArgs>(
      args?: Subset<T, MediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaAggregateArgs>(args: Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>

    /**
     * Group by Media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaGroupByArgs} args - Group by arguments.
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
      T extends MediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaGroupByArgs['orderBy'] }
        : { orderBy?: MediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Media model
   */
  readonly fields: MediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploadedBy<T extends Media$uploadedByArgs<ExtArgs> = {}>(args?: Subset<T, Media$uploadedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends Media$postsArgs<ExtArgs> = {}>(args?: Subset<T, Media$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Media model
   */
  interface MediaFieldRefs {
    readonly id: FieldRef<"Media", 'String'>
    readonly url: FieldRef<"Media", 'String'>
    readonly altText: FieldRef<"Media", 'String'>
    readonly caption: FieldRef<"Media", 'String'>
    readonly type: FieldRef<"Media", 'MediaType'>
    readonly uploadedById: FieldRef<"Media", 'String'>
    readonly createdAt: FieldRef<"Media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Media findUnique
   */
  export type MediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findUniqueOrThrow
   */
  export type MediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media findFirst
   */
  export type MediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findFirstOrThrow
   */
  export type MediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Media.
     */
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media findMany
   */
  export type MediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter, which Media to fetch.
     */
    where?: MediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Media to fetch.
     */
    orderBy?: MediaOrderByWithRelationInput | MediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Media.
     */
    cursor?: MediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Media from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Media.
     */
    skip?: number
    distinct?: MediaScalarFieldEnum | MediaScalarFieldEnum[]
  }

  /**
   * Media create
   */
  export type MediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to create a Media.
     */
    data: XOR<MediaCreateInput, MediaUncheckedCreateInput>
  }

  /**
   * Media createMany
   */
  export type MediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Media.
     */
    data: MediaCreateManyInput | MediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Media update
   */
  export type MediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The data needed to update a Media.
     */
    data: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
    /**
     * Choose, which Media to update.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media updateMany
   */
  export type MediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Media.
     */
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyInput>
    /**
     * Filter which Media to update
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to update.
     */
    limit?: number
  }

  /**
   * Media upsert
   */
  export type MediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * The filter to search for the Media to update in case it exists.
     */
    where: MediaWhereUniqueInput
    /**
     * In case the Media found by the `where` argument doesn't exist, create a new Media with this data.
     */
    create: XOR<MediaCreateInput, MediaUncheckedCreateInput>
    /**
     * In case the Media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaUpdateInput, MediaUncheckedUpdateInput>
  }

  /**
   * Media delete
   */
  export type MediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
    /**
     * Filter which Media to delete.
     */
    where: MediaWhereUniqueInput
  }

  /**
   * Media deleteMany
   */
  export type MediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Media to delete
     */
    where?: MediaWhereInput
    /**
     * Limit how many Media to delete.
     */
    limit?: number
  }

  /**
   * Media.uploadedBy
   */
  export type Media$uploadedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Media.posts
   */
  export type Media$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    where?: PostMediaWhereInput
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    cursor?: PostMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostMediaScalarFieldEnum | PostMediaScalarFieldEnum[]
  }

  /**
   * Media without action
   */
  export type MediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Media
     */
    select?: MediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Media
     */
    omit?: MediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaInclude<ExtArgs> | null
  }


  /**
   * Model PostMedia
   */

  export type AggregatePostMedia = {
    _count: PostMediaCountAggregateOutputType | null
    _min: PostMediaMinAggregateOutputType | null
    _max: PostMediaMaxAggregateOutputType | null
  }

  export type PostMediaMinAggregateOutputType = {
    postId: string | null
    mediaId: string | null
  }

  export type PostMediaMaxAggregateOutputType = {
    postId: string | null
    mediaId: string | null
  }

  export type PostMediaCountAggregateOutputType = {
    postId: number
    mediaId: number
    _all: number
  }


  export type PostMediaMinAggregateInputType = {
    postId?: true
    mediaId?: true
  }

  export type PostMediaMaxAggregateInputType = {
    postId?: true
    mediaId?: true
  }

  export type PostMediaCountAggregateInputType = {
    postId?: true
    mediaId?: true
    _all?: true
  }

  export type PostMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostMedia to aggregate.
     */
    where?: PostMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMedias to fetch.
     */
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostMedias
    **/
    _count?: true | PostMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMediaMaxAggregateInputType
  }

  export type GetPostMediaAggregateType<T extends PostMediaAggregateArgs> = {
        [P in keyof T & keyof AggregatePostMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostMedia[P]>
      : GetScalarType<T[P], AggregatePostMedia[P]>
  }




  export type PostMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostMediaWhereInput
    orderBy?: PostMediaOrderByWithAggregationInput | PostMediaOrderByWithAggregationInput[]
    by: PostMediaScalarFieldEnum[] | PostMediaScalarFieldEnum
    having?: PostMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostMediaCountAggregateInputType | true
    _min?: PostMediaMinAggregateInputType
    _max?: PostMediaMaxAggregateInputType
  }

  export type PostMediaGroupByOutputType = {
    postId: string
    mediaId: string
    _count: PostMediaCountAggregateOutputType | null
    _min: PostMediaMinAggregateOutputType | null
    _max: PostMediaMaxAggregateOutputType | null
  }

  type GetPostMediaGroupByPayload<T extends PostMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostMediaGroupByOutputType[P]>
            : GetScalarType<T[P], PostMediaGroupByOutputType[P]>
        }
      >
    >


  export type PostMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postId?: boolean
    mediaId?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postMedia"]>



  export type PostMediaSelectScalar = {
    postId?: boolean
    mediaId?: boolean
  }

  export type PostMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"postId" | "mediaId", ExtArgs["result"]["postMedia"]>
  export type PostMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    media?: boolean | MediaDefaultArgs<ExtArgs>
  }

  export type $PostMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostMedia"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      media: Prisma.$MediaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postId: string
      mediaId: string
    }, ExtArgs["result"]["postMedia"]>
    composites: {}
  }

  type PostMediaGetPayload<S extends boolean | null | undefined | PostMediaDefaultArgs> = $Result.GetResult<Prisma.$PostMediaPayload, S>

  type PostMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostMediaCountAggregateInputType | true
    }

  export interface PostMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostMedia'], meta: { name: 'PostMedia' } }
    /**
     * Find zero or one PostMedia that matches the filter.
     * @param {PostMediaFindUniqueArgs} args - Arguments to find a PostMedia
     * @example
     * // Get one PostMedia
     * const postMedia = await prisma.postMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostMediaFindUniqueArgs>(args: SelectSubset<T, PostMediaFindUniqueArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostMediaFindUniqueOrThrowArgs} args - Arguments to find a PostMedia
     * @example
     * // Get one PostMedia
     * const postMedia = await prisma.postMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, PostMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaFindFirstArgs} args - Arguments to find a PostMedia
     * @example
     * // Get one PostMedia
     * const postMedia = await prisma.postMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostMediaFindFirstArgs>(args?: SelectSubset<T, PostMediaFindFirstArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaFindFirstOrThrowArgs} args - Arguments to find a PostMedia
     * @example
     * // Get one PostMedia
     * const postMedia = await prisma.postMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, PostMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostMedias
     * const postMedias = await prisma.postMedia.findMany()
     * 
     * // Get first 10 PostMedias
     * const postMedias = await prisma.postMedia.findMany({ take: 10 })
     * 
     * // Only select the `postId`
     * const postMediaWithPostIdOnly = await prisma.postMedia.findMany({ select: { postId: true } })
     * 
     */
    findMany<T extends PostMediaFindManyArgs>(args?: SelectSubset<T, PostMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostMedia.
     * @param {PostMediaCreateArgs} args - Arguments to create a PostMedia.
     * @example
     * // Create one PostMedia
     * const PostMedia = await prisma.postMedia.create({
     *   data: {
     *     // ... data to create a PostMedia
     *   }
     * })
     * 
     */
    create<T extends PostMediaCreateArgs>(args: SelectSubset<T, PostMediaCreateArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostMedias.
     * @param {PostMediaCreateManyArgs} args - Arguments to create many PostMedias.
     * @example
     * // Create many PostMedias
     * const postMedia = await prisma.postMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostMediaCreateManyArgs>(args?: SelectSubset<T, PostMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PostMedia.
     * @param {PostMediaDeleteArgs} args - Arguments to delete one PostMedia.
     * @example
     * // Delete one PostMedia
     * const PostMedia = await prisma.postMedia.delete({
     *   where: {
     *     // ... filter to delete one PostMedia
     *   }
     * })
     * 
     */
    delete<T extends PostMediaDeleteArgs>(args: SelectSubset<T, PostMediaDeleteArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostMedia.
     * @param {PostMediaUpdateArgs} args - Arguments to update one PostMedia.
     * @example
     * // Update one PostMedia
     * const postMedia = await prisma.postMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostMediaUpdateArgs>(args: SelectSubset<T, PostMediaUpdateArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostMedias.
     * @param {PostMediaDeleteManyArgs} args - Arguments to filter PostMedias to delete.
     * @example
     * // Delete a few PostMedias
     * const { count } = await prisma.postMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostMediaDeleteManyArgs>(args?: SelectSubset<T, PostMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostMedias
     * const postMedia = await prisma.postMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostMediaUpdateManyArgs>(args: SelectSubset<T, PostMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostMedia.
     * @param {PostMediaUpsertArgs} args - Arguments to update or create a PostMedia.
     * @example
     * // Update or create a PostMedia
     * const postMedia = await prisma.postMedia.upsert({
     *   create: {
     *     // ... data to create a PostMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostMedia we want to update
     *   }
     * })
     */
    upsert<T extends PostMediaUpsertArgs>(args: SelectSubset<T, PostMediaUpsertArgs<ExtArgs>>): Prisma__PostMediaClient<$Result.GetResult<Prisma.$PostMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaCountArgs} args - Arguments to filter PostMedias to count.
     * @example
     * // Count the number of PostMedias
     * const count = await prisma.postMedia.count({
     *   where: {
     *     // ... the filter for the PostMedias we want to count
     *   }
     * })
    **/
    count<T extends PostMediaCountArgs>(
      args?: Subset<T, PostMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostMediaAggregateArgs>(args: Subset<T, PostMediaAggregateArgs>): Prisma.PrismaPromise<GetPostMediaAggregateType<T>>

    /**
     * Group by PostMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostMediaGroupByArgs} args - Group by arguments.
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
      T extends PostMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostMediaGroupByArgs['orderBy'] }
        : { orderBy?: PostMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostMedia model
   */
  readonly fields: PostMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    media<T extends MediaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MediaDefaultArgs<ExtArgs>>): Prisma__MediaClient<$Result.GetResult<Prisma.$MediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PostMedia model
   */
  interface PostMediaFieldRefs {
    readonly postId: FieldRef<"PostMedia", 'String'>
    readonly mediaId: FieldRef<"PostMedia", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PostMedia findUnique
   */
  export type PostMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedia to fetch.
     */
    where: PostMediaWhereUniqueInput
  }

  /**
   * PostMedia findUniqueOrThrow
   */
  export type PostMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedia to fetch.
     */
    where: PostMediaWhereUniqueInput
  }

  /**
   * PostMedia findFirst
   */
  export type PostMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedia to fetch.
     */
    where?: PostMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMedias to fetch.
     */
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostMedias.
     */
    cursor?: PostMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostMedias.
     */
    distinct?: PostMediaScalarFieldEnum | PostMediaScalarFieldEnum[]
  }

  /**
   * PostMedia findFirstOrThrow
   */
  export type PostMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedia to fetch.
     */
    where?: PostMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMedias to fetch.
     */
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostMedias.
     */
    cursor?: PostMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostMedias.
     */
    distinct?: PostMediaScalarFieldEnum | PostMediaScalarFieldEnum[]
  }

  /**
   * PostMedia findMany
   */
  export type PostMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter, which PostMedias to fetch.
     */
    where?: PostMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostMedias to fetch.
     */
    orderBy?: PostMediaOrderByWithRelationInput | PostMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostMedias.
     */
    cursor?: PostMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostMedias.
     */
    skip?: number
    distinct?: PostMediaScalarFieldEnum | PostMediaScalarFieldEnum[]
  }

  /**
   * PostMedia create
   */
  export type PostMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a PostMedia.
     */
    data: XOR<PostMediaCreateInput, PostMediaUncheckedCreateInput>
  }

  /**
   * PostMedia createMany
   */
  export type PostMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostMedias.
     */
    data: PostMediaCreateManyInput | PostMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostMedia update
   */
  export type PostMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a PostMedia.
     */
    data: XOR<PostMediaUpdateInput, PostMediaUncheckedUpdateInput>
    /**
     * Choose, which PostMedia to update.
     */
    where: PostMediaWhereUniqueInput
  }

  /**
   * PostMedia updateMany
   */
  export type PostMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostMedias.
     */
    data: XOR<PostMediaUpdateManyMutationInput, PostMediaUncheckedUpdateManyInput>
    /**
     * Filter which PostMedias to update
     */
    where?: PostMediaWhereInput
    /**
     * Limit how many PostMedias to update.
     */
    limit?: number
  }

  /**
   * PostMedia upsert
   */
  export type PostMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the PostMedia to update in case it exists.
     */
    where: PostMediaWhereUniqueInput
    /**
     * In case the PostMedia found by the `where` argument doesn't exist, create a new PostMedia with this data.
     */
    create: XOR<PostMediaCreateInput, PostMediaUncheckedCreateInput>
    /**
     * In case the PostMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostMediaUpdateInput, PostMediaUncheckedUpdateInput>
  }

  /**
   * PostMedia delete
   */
  export type PostMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
    /**
     * Filter which PostMedia to delete.
     */
    where: PostMediaWhereUniqueInput
  }

  /**
   * PostMedia deleteMany
   */
  export type PostMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostMedias to delete
     */
    where?: PostMediaWhereInput
    /**
     * Limit how many PostMedias to delete.
     */
    limit?: number
  }

  /**
   * PostMedia without action
   */
  export type PostMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostMedia
     */
    select?: PostMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostMedia
     */
    omit?: PostMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostMediaInclude<ExtArgs> | null
  }


  /**
   * Model Subscriber
   */

  export type AggregateSubscriber = {
    _count: SubscriberCountAggregateOutputType | null
    _min: SubscriberMinAggregateOutputType | null
    _max: SubscriberMaxAggregateOutputType | null
  }

  export type SubscriberMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    verified: boolean | null
    subscribedAt: Date | null
    unsubscribedAt: Date | null
  }

  export type SubscriberMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    verified: boolean | null
    subscribedAt: Date | null
    unsubscribedAt: Date | null
  }

  export type SubscriberCountAggregateOutputType = {
    id: number
    email: number
    name: number
    verified: number
    subscribedAt: number
    unsubscribedAt: number
    _all: number
  }


  export type SubscriberMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    verified?: true
    subscribedAt?: true
    unsubscribedAt?: true
  }

  export type SubscriberMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    verified?: true
    subscribedAt?: true
    unsubscribedAt?: true
  }

  export type SubscriberCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    verified?: true
    subscribedAt?: true
    unsubscribedAt?: true
    _all?: true
  }

  export type SubscriberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriber to aggregate.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscribers
    **/
    _count?: true | SubscriberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriberMaxAggregateInputType
  }

  export type GetSubscriberAggregateType<T extends SubscriberAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriber[P]>
      : GetScalarType<T[P], AggregateSubscriber[P]>
  }




  export type SubscriberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriberWhereInput
    orderBy?: SubscriberOrderByWithAggregationInput | SubscriberOrderByWithAggregationInput[]
    by: SubscriberScalarFieldEnum[] | SubscriberScalarFieldEnum
    having?: SubscriberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriberCountAggregateInputType | true
    _min?: SubscriberMinAggregateInputType
    _max?: SubscriberMaxAggregateInputType
  }

  export type SubscriberGroupByOutputType = {
    id: string
    email: string
    name: string | null
    verified: boolean
    subscribedAt: Date
    unsubscribedAt: Date | null
    _count: SubscriberCountAggregateOutputType | null
    _min: SubscriberMinAggregateOutputType | null
    _max: SubscriberMaxAggregateOutputType | null
  }

  type GetSubscriberGroupByPayload<T extends SubscriberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriberGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriberGroupByOutputType[P]>
        }
      >
    >


  export type SubscriberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    verified?: boolean
    subscribedAt?: boolean
    unsubscribedAt?: boolean
  }, ExtArgs["result"]["subscriber"]>



  export type SubscriberSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    verified?: boolean
    subscribedAt?: boolean
    unsubscribedAt?: boolean
  }

  export type SubscriberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "verified" | "subscribedAt" | "unsubscribedAt", ExtArgs["result"]["subscriber"]>

  export type $SubscriberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscriber"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      verified: boolean
      subscribedAt: Date
      unsubscribedAt: Date | null
    }, ExtArgs["result"]["subscriber"]>
    composites: {}
  }

  type SubscriberGetPayload<S extends boolean | null | undefined | SubscriberDefaultArgs> = $Result.GetResult<Prisma.$SubscriberPayload, S>

  type SubscriberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriberCountAggregateInputType | true
    }

  export interface SubscriberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscriber'], meta: { name: 'Subscriber' } }
    /**
     * Find zero or one Subscriber that matches the filter.
     * @param {SubscriberFindUniqueArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriberFindUniqueArgs>(args: SelectSubset<T, SubscriberFindUniqueArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscriber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriberFindUniqueOrThrowArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriberFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindFirstArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriberFindFirstArgs>(args?: SelectSubset<T, SubscriberFindFirstArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscriber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindFirstOrThrowArgs} args - Arguments to find a Subscriber
     * @example
     * // Get one Subscriber
     * const subscriber = await prisma.subscriber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriberFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriberFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscribers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscribers
     * const subscribers = await prisma.subscriber.findMany()
     * 
     * // Get first 10 Subscribers
     * const subscribers = await prisma.subscriber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriberWithIdOnly = await prisma.subscriber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriberFindManyArgs>(args?: SelectSubset<T, SubscriberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscriber.
     * @param {SubscriberCreateArgs} args - Arguments to create a Subscriber.
     * @example
     * // Create one Subscriber
     * const Subscriber = await prisma.subscriber.create({
     *   data: {
     *     // ... data to create a Subscriber
     *   }
     * })
     * 
     */
    create<T extends SubscriberCreateArgs>(args: SelectSubset<T, SubscriberCreateArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscribers.
     * @param {SubscriberCreateManyArgs} args - Arguments to create many Subscribers.
     * @example
     * // Create many Subscribers
     * const subscriber = await prisma.subscriber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriberCreateManyArgs>(args?: SelectSubset<T, SubscriberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscriber.
     * @param {SubscriberDeleteArgs} args - Arguments to delete one Subscriber.
     * @example
     * // Delete one Subscriber
     * const Subscriber = await prisma.subscriber.delete({
     *   where: {
     *     // ... filter to delete one Subscriber
     *   }
     * })
     * 
     */
    delete<T extends SubscriberDeleteArgs>(args: SelectSubset<T, SubscriberDeleteArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscriber.
     * @param {SubscriberUpdateArgs} args - Arguments to update one Subscriber.
     * @example
     * // Update one Subscriber
     * const subscriber = await prisma.subscriber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriberUpdateArgs>(args: SelectSubset<T, SubscriberUpdateArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscribers.
     * @param {SubscriberDeleteManyArgs} args - Arguments to filter Subscribers to delete.
     * @example
     * // Delete a few Subscribers
     * const { count } = await prisma.subscriber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriberDeleteManyArgs>(args?: SelectSubset<T, SubscriberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscribers
     * const subscriber = await prisma.subscriber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriberUpdateManyArgs>(args: SelectSubset<T, SubscriberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscriber.
     * @param {SubscriberUpsertArgs} args - Arguments to update or create a Subscriber.
     * @example
     * // Update or create a Subscriber
     * const subscriber = await prisma.subscriber.upsert({
     *   create: {
     *     // ... data to create a Subscriber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscriber we want to update
     *   }
     * })
     */
    upsert<T extends SubscriberUpsertArgs>(args: SelectSubset<T, SubscriberUpsertArgs<ExtArgs>>): Prisma__SubscriberClient<$Result.GetResult<Prisma.$SubscriberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscribers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberCountArgs} args - Arguments to filter Subscribers to count.
     * @example
     * // Count the number of Subscribers
     * const count = await prisma.subscriber.count({
     *   where: {
     *     // ... the filter for the Subscribers we want to count
     *   }
     * })
    **/
    count<T extends SubscriberCountArgs>(
      args?: Subset<T, SubscriberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriberAggregateArgs>(args: Subset<T, SubscriberAggregateArgs>): Prisma.PrismaPromise<GetSubscriberAggregateType<T>>

    /**
     * Group by Subscriber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriberGroupByArgs} args - Group by arguments.
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
      T extends SubscriberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriberGroupByArgs['orderBy'] }
        : { orderBy?: SubscriberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscriber model
   */
  readonly fields: SubscriberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscriber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Subscriber model
   */
  interface SubscriberFieldRefs {
    readonly id: FieldRef<"Subscriber", 'String'>
    readonly email: FieldRef<"Subscriber", 'String'>
    readonly name: FieldRef<"Subscriber", 'String'>
    readonly verified: FieldRef<"Subscriber", 'Boolean'>
    readonly subscribedAt: FieldRef<"Subscriber", 'DateTime'>
    readonly unsubscribedAt: FieldRef<"Subscriber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscriber findUnique
   */
  export type SubscriberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber findUniqueOrThrow
   */
  export type SubscriberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber findFirst
   */
  export type SubscriberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber findFirstOrThrow
   */
  export type SubscriberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscriber to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscribers.
     */
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber findMany
   */
  export type SubscriberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter, which Subscribers to fetch.
     */
    where?: SubscriberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscribers to fetch.
     */
    orderBy?: SubscriberOrderByWithRelationInput | SubscriberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscribers.
     */
    cursor?: SubscriberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscribers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscribers.
     */
    skip?: number
    distinct?: SubscriberScalarFieldEnum | SubscriberScalarFieldEnum[]
  }

  /**
   * Subscriber create
   */
  export type SubscriberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The data needed to create a Subscriber.
     */
    data: XOR<SubscriberCreateInput, SubscriberUncheckedCreateInput>
  }

  /**
   * Subscriber createMany
   */
  export type SubscriberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscribers.
     */
    data: SubscriberCreateManyInput | SubscriberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscriber update
   */
  export type SubscriberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The data needed to update a Subscriber.
     */
    data: XOR<SubscriberUpdateInput, SubscriberUncheckedUpdateInput>
    /**
     * Choose, which Subscriber to update.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber updateMany
   */
  export type SubscriberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscribers.
     */
    data: XOR<SubscriberUpdateManyMutationInput, SubscriberUncheckedUpdateManyInput>
    /**
     * Filter which Subscribers to update
     */
    where?: SubscriberWhereInput
    /**
     * Limit how many Subscribers to update.
     */
    limit?: number
  }

  /**
   * Subscriber upsert
   */
  export type SubscriberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * The filter to search for the Subscriber to update in case it exists.
     */
    where: SubscriberWhereUniqueInput
    /**
     * In case the Subscriber found by the `where` argument doesn't exist, create a new Subscriber with this data.
     */
    create: XOR<SubscriberCreateInput, SubscriberUncheckedCreateInput>
    /**
     * In case the Subscriber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriberUpdateInput, SubscriberUncheckedUpdateInput>
  }

  /**
   * Subscriber delete
   */
  export type SubscriberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
    /**
     * Filter which Subscriber to delete.
     */
    where: SubscriberWhereUniqueInput
  }

  /**
   * Subscriber deleteMany
   */
  export type SubscriberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscribers to delete
     */
    where?: SubscriberWhereInput
    /**
     * Limit how many Subscribers to delete.
     */
    limit?: number
  }

  /**
   * Subscriber without action
   */
  export type SubscriberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscriber
     */
    select?: SubscriberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscriber
     */
    omit?: SubscriberOmit<ExtArgs> | null
  }


  /**
   * Model ViewLog
   */

  export type AggregateViewLog = {
    _count: ViewLogCountAggregateOutputType | null
    _min: ViewLogMinAggregateOutputType | null
    _max: ViewLogMaxAggregateOutputType | null
  }

  export type ViewLogMinAggregateOutputType = {
    id: string | null
    postId: string | null
    viewerIp: string | null
    userAgent: string | null
    viewedAt: Date | null
  }

  export type ViewLogMaxAggregateOutputType = {
    id: string | null
    postId: string | null
    viewerIp: string | null
    userAgent: string | null
    viewedAt: Date | null
  }

  export type ViewLogCountAggregateOutputType = {
    id: number
    postId: number
    viewerIp: number
    userAgent: number
    viewedAt: number
    _all: number
  }


  export type ViewLogMinAggregateInputType = {
    id?: true
    postId?: true
    viewerIp?: true
    userAgent?: true
    viewedAt?: true
  }

  export type ViewLogMaxAggregateInputType = {
    id?: true
    postId?: true
    viewerIp?: true
    userAgent?: true
    viewedAt?: true
  }

  export type ViewLogCountAggregateInputType = {
    id?: true
    postId?: true
    viewerIp?: true
    userAgent?: true
    viewedAt?: true
    _all?: true
  }

  export type ViewLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewLog to aggregate.
     */
    where?: ViewLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewLogs to fetch.
     */
    orderBy?: ViewLogOrderByWithRelationInput | ViewLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViewLogs
    **/
    _count?: true | ViewLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewLogMaxAggregateInputType
  }

  export type GetViewLogAggregateType<T extends ViewLogAggregateArgs> = {
        [P in keyof T & keyof AggregateViewLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViewLog[P]>
      : GetScalarType<T[P], AggregateViewLog[P]>
  }




  export type ViewLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewLogWhereInput
    orderBy?: ViewLogOrderByWithAggregationInput | ViewLogOrderByWithAggregationInput[]
    by: ViewLogScalarFieldEnum[] | ViewLogScalarFieldEnum
    having?: ViewLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewLogCountAggregateInputType | true
    _min?: ViewLogMinAggregateInputType
    _max?: ViewLogMaxAggregateInputType
  }

  export type ViewLogGroupByOutputType = {
    id: string
    postId: string
    viewerIp: string | null
    userAgent: string | null
    viewedAt: Date
    _count: ViewLogCountAggregateOutputType | null
    _min: ViewLogMinAggregateOutputType | null
    _max: ViewLogMaxAggregateOutputType | null
  }

  type GetViewLogGroupByPayload<T extends ViewLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewLogGroupByOutputType[P]>
            : GetScalarType<T[P], ViewLogGroupByOutputType[P]>
        }
      >
    >


  export type ViewLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postId?: boolean
    viewerIp?: boolean
    userAgent?: boolean
    viewedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viewLog"]>



  export type ViewLogSelectScalar = {
    id?: boolean
    postId?: boolean
    viewerIp?: boolean
    userAgent?: boolean
    viewedAt?: boolean
  }

  export type ViewLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postId" | "viewerIp" | "userAgent" | "viewedAt", ExtArgs["result"]["viewLog"]>
  export type ViewLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }

  export type $ViewLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViewLog"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postId: string
      viewerIp: string | null
      userAgent: string | null
      viewedAt: Date
    }, ExtArgs["result"]["viewLog"]>
    composites: {}
  }

  type ViewLogGetPayload<S extends boolean | null | undefined | ViewLogDefaultArgs> = $Result.GetResult<Prisma.$ViewLogPayload, S>

  type ViewLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewLogCountAggregateInputType | true
    }

  export interface ViewLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViewLog'], meta: { name: 'ViewLog' } }
    /**
     * Find zero or one ViewLog that matches the filter.
     * @param {ViewLogFindUniqueArgs} args - Arguments to find a ViewLog
     * @example
     * // Get one ViewLog
     * const viewLog = await prisma.viewLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewLogFindUniqueArgs>(args: SelectSubset<T, ViewLogFindUniqueArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ViewLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewLogFindUniqueOrThrowArgs} args - Arguments to find a ViewLog
     * @example
     * // Get one ViewLog
     * const viewLog = await prisma.viewLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogFindFirstArgs} args - Arguments to find a ViewLog
     * @example
     * // Get one ViewLog
     * const viewLog = await prisma.viewLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewLogFindFirstArgs>(args?: SelectSubset<T, ViewLogFindFirstArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ViewLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogFindFirstOrThrowArgs} args - Arguments to find a ViewLog
     * @example
     * // Get one ViewLog
     * const viewLog = await prisma.viewLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ViewLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViewLogs
     * const viewLogs = await prisma.viewLog.findMany()
     * 
     * // Get first 10 ViewLogs
     * const viewLogs = await prisma.viewLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewLogWithIdOnly = await prisma.viewLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewLogFindManyArgs>(args?: SelectSubset<T, ViewLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ViewLog.
     * @param {ViewLogCreateArgs} args - Arguments to create a ViewLog.
     * @example
     * // Create one ViewLog
     * const ViewLog = await prisma.viewLog.create({
     *   data: {
     *     // ... data to create a ViewLog
     *   }
     * })
     * 
     */
    create<T extends ViewLogCreateArgs>(args: SelectSubset<T, ViewLogCreateArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ViewLogs.
     * @param {ViewLogCreateManyArgs} args - Arguments to create many ViewLogs.
     * @example
     * // Create many ViewLogs
     * const viewLog = await prisma.viewLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewLogCreateManyArgs>(args?: SelectSubset<T, ViewLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ViewLog.
     * @param {ViewLogDeleteArgs} args - Arguments to delete one ViewLog.
     * @example
     * // Delete one ViewLog
     * const ViewLog = await prisma.viewLog.delete({
     *   where: {
     *     // ... filter to delete one ViewLog
     *   }
     * })
     * 
     */
    delete<T extends ViewLogDeleteArgs>(args: SelectSubset<T, ViewLogDeleteArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ViewLog.
     * @param {ViewLogUpdateArgs} args - Arguments to update one ViewLog.
     * @example
     * // Update one ViewLog
     * const viewLog = await prisma.viewLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewLogUpdateArgs>(args: SelectSubset<T, ViewLogUpdateArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ViewLogs.
     * @param {ViewLogDeleteManyArgs} args - Arguments to filter ViewLogs to delete.
     * @example
     * // Delete a few ViewLogs
     * const { count } = await prisma.viewLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewLogDeleteManyArgs>(args?: SelectSubset<T, ViewLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViewLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViewLogs
     * const viewLog = await prisma.viewLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewLogUpdateManyArgs>(args: SelectSubset<T, ViewLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ViewLog.
     * @param {ViewLogUpsertArgs} args - Arguments to update or create a ViewLog.
     * @example
     * // Update or create a ViewLog
     * const viewLog = await prisma.viewLog.upsert({
     *   create: {
     *     // ... data to create a ViewLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViewLog we want to update
     *   }
     * })
     */
    upsert<T extends ViewLogUpsertArgs>(args: SelectSubset<T, ViewLogUpsertArgs<ExtArgs>>): Prisma__ViewLogClient<$Result.GetResult<Prisma.$ViewLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ViewLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogCountArgs} args - Arguments to filter ViewLogs to count.
     * @example
     * // Count the number of ViewLogs
     * const count = await prisma.viewLog.count({
     *   where: {
     *     // ... the filter for the ViewLogs we want to count
     *   }
     * })
    **/
    count<T extends ViewLogCountArgs>(
      args?: Subset<T, ViewLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViewLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewLogAggregateArgs>(args: Subset<T, ViewLogAggregateArgs>): Prisma.PrismaPromise<GetViewLogAggregateType<T>>

    /**
     * Group by ViewLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewLogGroupByArgs} args - Group by arguments.
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
      T extends ViewLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewLogGroupByArgs['orderBy'] }
        : { orderBy?: ViewLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViewLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViewLog model
   */
  readonly fields: ViewLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViewLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ViewLog model
   */
  interface ViewLogFieldRefs {
    readonly id: FieldRef<"ViewLog", 'String'>
    readonly postId: FieldRef<"ViewLog", 'String'>
    readonly viewerIp: FieldRef<"ViewLog", 'String'>
    readonly userAgent: FieldRef<"ViewLog", 'String'>
    readonly viewedAt: FieldRef<"ViewLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ViewLog findUnique
   */
  export type ViewLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * Filter, which ViewLog to fetch.
     */
    where: ViewLogWhereUniqueInput
  }

  /**
   * ViewLog findUniqueOrThrow
   */
  export type ViewLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * Filter, which ViewLog to fetch.
     */
    where: ViewLogWhereUniqueInput
  }

  /**
   * ViewLog findFirst
   */
  export type ViewLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * Filter, which ViewLog to fetch.
     */
    where?: ViewLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewLogs to fetch.
     */
    orderBy?: ViewLogOrderByWithRelationInput | ViewLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewLogs.
     */
    cursor?: ViewLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewLogs.
     */
    distinct?: ViewLogScalarFieldEnum | ViewLogScalarFieldEnum[]
  }

  /**
   * ViewLog findFirstOrThrow
   */
  export type ViewLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * Filter, which ViewLog to fetch.
     */
    where?: ViewLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewLogs to fetch.
     */
    orderBy?: ViewLogOrderByWithRelationInput | ViewLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViewLogs.
     */
    cursor?: ViewLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViewLogs.
     */
    distinct?: ViewLogScalarFieldEnum | ViewLogScalarFieldEnum[]
  }

  /**
   * ViewLog findMany
   */
  export type ViewLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * Filter, which ViewLogs to fetch.
     */
    where?: ViewLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViewLogs to fetch.
     */
    orderBy?: ViewLogOrderByWithRelationInput | ViewLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViewLogs.
     */
    cursor?: ViewLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViewLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViewLogs.
     */
    skip?: number
    distinct?: ViewLogScalarFieldEnum | ViewLogScalarFieldEnum[]
  }

  /**
   * ViewLog create
   */
  export type ViewLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ViewLog.
     */
    data: XOR<ViewLogCreateInput, ViewLogUncheckedCreateInput>
  }

  /**
   * ViewLog createMany
   */
  export type ViewLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViewLogs.
     */
    data: ViewLogCreateManyInput | ViewLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViewLog update
   */
  export type ViewLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ViewLog.
     */
    data: XOR<ViewLogUpdateInput, ViewLogUncheckedUpdateInput>
    /**
     * Choose, which ViewLog to update.
     */
    where: ViewLogWhereUniqueInput
  }

  /**
   * ViewLog updateMany
   */
  export type ViewLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViewLogs.
     */
    data: XOR<ViewLogUpdateManyMutationInput, ViewLogUncheckedUpdateManyInput>
    /**
     * Filter which ViewLogs to update
     */
    where?: ViewLogWhereInput
    /**
     * Limit how many ViewLogs to update.
     */
    limit?: number
  }

  /**
   * ViewLog upsert
   */
  export type ViewLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ViewLog to update in case it exists.
     */
    where: ViewLogWhereUniqueInput
    /**
     * In case the ViewLog found by the `where` argument doesn't exist, create a new ViewLog with this data.
     */
    create: XOR<ViewLogCreateInput, ViewLogUncheckedCreateInput>
    /**
     * In case the ViewLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewLogUpdateInput, ViewLogUncheckedUpdateInput>
  }

  /**
   * ViewLog delete
   */
  export type ViewLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
    /**
     * Filter which ViewLog to delete.
     */
    where: ViewLogWhereUniqueInput
  }

  /**
   * ViewLog deleteMany
   */
  export type ViewLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViewLogs to delete
     */
    where?: ViewLogWhereInput
    /**
     * Limit how many ViewLogs to delete.
     */
    limit?: number
  }

  /**
   * ViewLog without action
   */
  export type ViewLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewLog
     */
    select?: ViewLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ViewLog
     */
    omit?: ViewLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    role: 'role',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    socialLinks: 'socialLinks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    parentId: 'parentId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const MagazineScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    coverImageUrl: 'coverImageUrl',
    issueNumber: 'issueNumber',
    publishedAt: 'publishedAt',
    status: 'status',
    editorId: 'editorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MagazineScalarFieldEnum = (typeof MagazineScalarFieldEnum)[keyof typeof MagazineScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    content: 'content',
    readMinutes: 'readMinutes',
    type: 'type',
    coverImageUrl: 'coverImageUrl',
    status: 'status',
    visibility: 'visibility',
    isFeatured: 'isFeatured',
    scheduledAt: 'scheduledAt',
    publishedAt: 'publishedAt',
    authorId: 'authorId',
    magazineId: 'magazineId',
    categoryId: 'categoryId',
    views: 'views',
    likes: 'likes',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    metaKeywords: 'metaKeywords',
    slugHistory: 'slugHistory',
    seoSchema: 'seoSchema',
    settings: 'settings',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const PostTagsScalarFieldEnum: {
    postId: 'postId',
    tagId: 'tagId'
  };

  export type PostTagsScalarFieldEnum = (typeof PostTagsScalarFieldEnum)[keyof typeof PostTagsScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    authorId: 'authorId',
    content: 'content',
    parentId: 'parentId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const RevisionScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    authorId: 'authorId',
    content: 'content',
    title: 'title',
    createdAt: 'createdAt'
  };

  export type RevisionScalarFieldEnum = (typeof RevisionScalarFieldEnum)[keyof typeof RevisionScalarFieldEnum]


  export const MediaScalarFieldEnum: {
    id: 'id',
    url: 'url',
    altText: 'altText',
    caption: 'caption',
    type: 'type',
    uploadedById: 'uploadedById',
    createdAt: 'createdAt'
  };

  export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum]


  export const PostMediaScalarFieldEnum: {
    postId: 'postId',
    mediaId: 'mediaId'
  };

  export type PostMediaScalarFieldEnum = (typeof PostMediaScalarFieldEnum)[keyof typeof PostMediaScalarFieldEnum]


  export const SubscriberScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    verified: 'verified',
    subscribedAt: 'subscribedAt',
    unsubscribedAt: 'unsubscribedAt'
  };

  export type SubscriberScalarFieldEnum = (typeof SubscriberScalarFieldEnum)[keyof typeof SubscriberScalarFieldEnum]


  export const ViewLogScalarFieldEnum: {
    id: 'id',
    postId: 'postId',
    viewerIp: 'viewerIp',
    userAgent: 'userAgent',
    viewedAt: 'viewedAt'
  };

  export type ViewLogScalarFieldEnum = (typeof ViewLogScalarFieldEnum)[keyof typeof ViewLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email',
    image: 'image',
    bio: 'bio',
    avatarUrl: 'avatarUrl'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const AccountOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const SessionOrderByRelevanceFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId'
  };

  export type SessionOrderByRelevanceFieldEnum = (typeof SessionOrderByRelevanceFieldEnum)[keyof typeof SessionOrderByRelevanceFieldEnum]


  export const VerificationTokenOrderByRelevanceFieldEnum: {
    identifier: 'identifier',
    token: 'token'
  };

  export type VerificationTokenOrderByRelevanceFieldEnum = (typeof VerificationTokenOrderByRelevanceFieldEnum)[keyof typeof VerificationTokenOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    parentId: 'parentId'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const TagOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type TagOrderByRelevanceFieldEnum = (typeof TagOrderByRelevanceFieldEnum)[keyof typeof TagOrderByRelevanceFieldEnum]


  export const MagazineOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    description: 'description',
    coverImageUrl: 'coverImageUrl',
    editorId: 'editorId'
  };

  export type MagazineOrderByRelevanceFieldEnum = (typeof MagazineOrderByRelevanceFieldEnum)[keyof typeof MagazineOrderByRelevanceFieldEnum]


  export const PostOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    slug: 'slug',
    excerpt: 'excerpt',
    content: 'content',
    coverImageUrl: 'coverImageUrl',
    authorId: 'authorId',
    magazineId: 'magazineId',
    categoryId: 'categoryId',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    metaKeywords: 'metaKeywords'
  };

  export type PostOrderByRelevanceFieldEnum = (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]


  export const PostTagsOrderByRelevanceFieldEnum: {
    postId: 'postId',
    tagId: 'tagId'
  };

  export type PostTagsOrderByRelevanceFieldEnum = (typeof PostTagsOrderByRelevanceFieldEnum)[keyof typeof PostTagsOrderByRelevanceFieldEnum]


  export const CommentOrderByRelevanceFieldEnum: {
    id: 'id',
    postId: 'postId',
    authorId: 'authorId',
    content: 'content',
    parentId: 'parentId'
  };

  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]


  export const RevisionOrderByRelevanceFieldEnum: {
    id: 'id',
    postId: 'postId',
    authorId: 'authorId',
    content: 'content',
    title: 'title'
  };

  export type RevisionOrderByRelevanceFieldEnum = (typeof RevisionOrderByRelevanceFieldEnum)[keyof typeof RevisionOrderByRelevanceFieldEnum]


  export const MediaOrderByRelevanceFieldEnum: {
    id: 'id',
    url: 'url',
    altText: 'altText',
    caption: 'caption',
    uploadedById: 'uploadedById'
  };

  export type MediaOrderByRelevanceFieldEnum = (typeof MediaOrderByRelevanceFieldEnum)[keyof typeof MediaOrderByRelevanceFieldEnum]


  export const PostMediaOrderByRelevanceFieldEnum: {
    postId: 'postId',
    mediaId: 'mediaId'
  };

  export type PostMediaOrderByRelevanceFieldEnum = (typeof PostMediaOrderByRelevanceFieldEnum)[keyof typeof PostMediaOrderByRelevanceFieldEnum]


  export const SubscriberOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name'
  };

  export type SubscriberOrderByRelevanceFieldEnum = (typeof SubscriberOrderByRelevanceFieldEnum)[keyof typeof SubscriberOrderByRelevanceFieldEnum]


  export const ViewLogOrderByRelevanceFieldEnum: {
    id: 'id',
    postId: 'postId',
    viewerIp: 'viewerIp',
    userAgent: 'userAgent'
  };

  export type ViewLogOrderByRelevanceFieldEnum = (typeof ViewLogOrderByRelevanceFieldEnum)[keyof typeof ViewLogOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'MagazineStatus'
   */
  export type EnumMagazineStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MagazineStatus'>
    


  /**
   * Reference to a field of type 'PostType'
   */
  export type EnumPostTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostType'>
    


  /**
   * Reference to a field of type 'PostStatus'
   */
  export type EnumPostStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostStatus'>
    


  /**
   * Reference to a field of type 'PostVisibility'
   */
  export type EnumPostVisibilityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostVisibility'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CommentStatus'
   */
  export type EnumCommentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommentStatus'>
    


  /**
   * Reference to a field of type 'MediaType'
   */
  export type EnumMediaTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MediaType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    socialLinks?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    revisions?: RevisionListRelationFilter
    media?: MediaListRelationFilter
    editedMagazines?: MagazineListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    revisions?: RevisionOrderByRelationAggregateInput
    media?: MediaOrderByRelationAggregateInput
    editedMagazines?: MagazineOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    socialLinks?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    posts?: PostListRelationFilter
    comments?: CommentListRelationFilter
    revisions?: RevisionListRelationFilter
    media?: MediaListRelationFilter
    editedMagazines?: MagazineListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    socialLinks?: JsonNullableWithAggregatesFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringNullableFilter<"Account"> | string | null
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrderInput | SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringNullableFilter<"Account"> | string | null
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrderInput | SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: SessionOrderByRelevanceInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _relevance?: VerificationTokenOrderByRelevanceInput
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    parentId?: StringNullableFilter<"Category"> | string | null
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    posts?: PostListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrderInput | SortOrder
    parent?: CategoryOrderByWithRelationInput
    children?: CategoryOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    parentId?: StringNullableFilter<"Category"> | string | null
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    posts?: PostListRelationFilter
  }, "id" | "name" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    parentId?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    slug?: StringFilter<"Tag"> | string
    posts?: PostTagsListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    posts?: PostTagsOrderByRelationAggregateInput
    _relevance?: TagOrderByRelevanceInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    posts?: PostTagsListRelationFilter
  }, "id" | "name" | "slug">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    slug?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type MagazineWhereInput = {
    AND?: MagazineWhereInput | MagazineWhereInput[]
    OR?: MagazineWhereInput[]
    NOT?: MagazineWhereInput | MagazineWhereInput[]
    id?: StringFilter<"Magazine"> | string
    title?: StringNullableFilter<"Magazine"> | string | null
    slug?: StringFilter<"Magazine"> | string
    description?: StringNullableFilter<"Magazine"> | string | null
    coverImageUrl?: StringNullableFilter<"Magazine"> | string | null
    issueNumber?: IntNullableFilter<"Magazine"> | number | null
    publishedAt?: DateTimeNullableFilter<"Magazine"> | Date | string | null
    status?: EnumMagazineStatusFilter<"Magazine"> | $Enums.MagazineStatus
    editorId?: StringNullableFilter<"Magazine"> | string | null
    createdAt?: DateTimeFilter<"Magazine"> | Date | string
    updatedAt?: DateTimeFilter<"Magazine"> | Date | string
    editor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    posts?: PostListRelationFilter
  }

  export type MagazineOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    issueNumber?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    editorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    editor?: UserOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    _relevance?: MagazineOrderByRelevanceInput
  }

  export type MagazineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: MagazineWhereInput | MagazineWhereInput[]
    OR?: MagazineWhereInput[]
    NOT?: MagazineWhereInput | MagazineWhereInput[]
    title?: StringNullableFilter<"Magazine"> | string | null
    description?: StringNullableFilter<"Magazine"> | string | null
    coverImageUrl?: StringNullableFilter<"Magazine"> | string | null
    issueNumber?: IntNullableFilter<"Magazine"> | number | null
    publishedAt?: DateTimeNullableFilter<"Magazine"> | Date | string | null
    status?: EnumMagazineStatusFilter<"Magazine"> | $Enums.MagazineStatus
    editorId?: StringNullableFilter<"Magazine"> | string | null
    createdAt?: DateTimeFilter<"Magazine"> | Date | string
    updatedAt?: DateTimeFilter<"Magazine"> | Date | string
    editor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    posts?: PostListRelationFilter
  }, "id" | "slug">

  export type MagazineOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    issueNumber?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    editorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MagazineCountOrderByAggregateInput
    _avg?: MagazineAvgOrderByAggregateInput
    _max?: MagazineMaxOrderByAggregateInput
    _min?: MagazineMinOrderByAggregateInput
    _sum?: MagazineSumOrderByAggregateInput
  }

  export type MagazineScalarWhereWithAggregatesInput = {
    AND?: MagazineScalarWhereWithAggregatesInput | MagazineScalarWhereWithAggregatesInput[]
    OR?: MagazineScalarWhereWithAggregatesInput[]
    NOT?: MagazineScalarWhereWithAggregatesInput | MagazineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Magazine"> | string
    title?: StringNullableWithAggregatesFilter<"Magazine"> | string | null
    slug?: StringWithAggregatesFilter<"Magazine"> | string
    description?: StringNullableWithAggregatesFilter<"Magazine"> | string | null
    coverImageUrl?: StringNullableWithAggregatesFilter<"Magazine"> | string | null
    issueNumber?: IntNullableWithAggregatesFilter<"Magazine"> | number | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Magazine"> | Date | string | null
    status?: EnumMagazineStatusWithAggregatesFilter<"Magazine"> | $Enums.MagazineStatus
    editorId?: StringNullableWithAggregatesFilter<"Magazine"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Magazine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Magazine"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    excerpt?: StringNullableFilter<"Post"> | string | null
    content?: StringFilter<"Post"> | string
    readMinutes?: IntNullableFilter<"Post"> | number | null
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    coverImageUrl?: StringNullableFilter<"Post"> | string | null
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    visibility?: EnumPostVisibilityFilter<"Post"> | $Enums.PostVisibility
    isFeatured?: BoolFilter<"Post"> | boolean
    scheduledAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    authorId?: StringFilter<"Post"> | string
    magazineId?: StringNullableFilter<"Post"> | string | null
    categoryId?: StringNullableFilter<"Post"> | string | null
    views?: IntFilter<"Post"> | number
    likes?: IntFilter<"Post"> | number
    metaTitle?: StringNullableFilter<"Post"> | string | null
    metaDescription?: StringNullableFilter<"Post"> | string | null
    metaKeywords?: StringNullableFilter<"Post"> | string | null
    slugHistory?: JsonNullableFilter<"Post">
    seoSchema?: JsonNullableFilter<"Post">
    settings?: JsonNullableFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    magazine?: XOR<MagazineNullableScalarRelationFilter, MagazineWhereInput> | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    tags?: PostTagsListRelationFilter
    comments?: CommentListRelationFilter
    revisions?: RevisionListRelationFilter
    media?: PostMediaListRelationFilter
    viewLogs?: ViewLogListRelationFilter
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    readMinutes?: SortOrderInput | SortOrder
    type?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    visibility?: SortOrder
    isFeatured?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    authorId?: SortOrder
    magazineId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    views?: SortOrder
    likes?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    metaKeywords?: SortOrderInput | SortOrder
    slugHistory?: SortOrderInput | SortOrder
    seoSchema?: SortOrderInput | SortOrder
    settings?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    magazine?: MagazineOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    tags?: PostTagsOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    revisions?: RevisionOrderByRelationAggregateInput
    media?: PostMediaOrderByRelationAggregateInput
    viewLogs?: ViewLogOrderByRelationAggregateInput
    _relevance?: PostOrderByRelevanceInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    excerpt?: StringNullableFilter<"Post"> | string | null
    content?: StringFilter<"Post"> | string
    readMinutes?: IntNullableFilter<"Post"> | number | null
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    coverImageUrl?: StringNullableFilter<"Post"> | string | null
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    visibility?: EnumPostVisibilityFilter<"Post"> | $Enums.PostVisibility
    isFeatured?: BoolFilter<"Post"> | boolean
    scheduledAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    authorId?: StringFilter<"Post"> | string
    magazineId?: StringNullableFilter<"Post"> | string | null
    categoryId?: StringNullableFilter<"Post"> | string | null
    views?: IntFilter<"Post"> | number
    likes?: IntFilter<"Post"> | number
    metaTitle?: StringNullableFilter<"Post"> | string | null
    metaDescription?: StringNullableFilter<"Post"> | string | null
    metaKeywords?: StringNullableFilter<"Post"> | string | null
    slugHistory?: JsonNullableFilter<"Post">
    seoSchema?: JsonNullableFilter<"Post">
    settings?: JsonNullableFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    magazine?: XOR<MagazineNullableScalarRelationFilter, MagazineWhereInput> | null
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    tags?: PostTagsListRelationFilter
    comments?: CommentListRelationFilter
    revisions?: RevisionListRelationFilter
    media?: PostMediaListRelationFilter
    viewLogs?: ViewLogListRelationFilter
  }, "id" | "slug">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrderInput | SortOrder
    content?: SortOrder
    readMinutes?: SortOrderInput | SortOrder
    type?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    visibility?: SortOrder
    isFeatured?: SortOrder
    scheduledAt?: SortOrderInput | SortOrder
    publishedAt?: SortOrderInput | SortOrder
    authorId?: SortOrder
    magazineId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    views?: SortOrder
    likes?: SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    metaKeywords?: SortOrderInput | SortOrder
    slugHistory?: SortOrderInput | SortOrder
    seoSchema?: SortOrderInput | SortOrder
    settings?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    slug?: StringWithAggregatesFilter<"Post"> | string
    excerpt?: StringNullableWithAggregatesFilter<"Post"> | string | null
    content?: StringWithAggregatesFilter<"Post"> | string
    readMinutes?: IntNullableWithAggregatesFilter<"Post"> | number | null
    type?: EnumPostTypeWithAggregatesFilter<"Post"> | $Enums.PostType
    coverImageUrl?: StringNullableWithAggregatesFilter<"Post"> | string | null
    status?: EnumPostStatusWithAggregatesFilter<"Post"> | $Enums.PostStatus
    visibility?: EnumPostVisibilityWithAggregatesFilter<"Post"> | $Enums.PostVisibility
    isFeatured?: BoolWithAggregatesFilter<"Post"> | boolean
    scheduledAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Post"> | Date | string | null
    authorId?: StringWithAggregatesFilter<"Post"> | string
    magazineId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Post"> | string | null
    views?: IntWithAggregatesFilter<"Post"> | number
    likes?: IntWithAggregatesFilter<"Post"> | number
    metaTitle?: StringNullableWithAggregatesFilter<"Post"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"Post"> | string | null
    metaKeywords?: StringNullableWithAggregatesFilter<"Post"> | string | null
    slugHistory?: JsonNullableWithAggregatesFilter<"Post">
    seoSchema?: JsonNullableWithAggregatesFilter<"Post">
    settings?: JsonNullableWithAggregatesFilter<"Post">
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
  }

  export type PostTagsWhereInput = {
    AND?: PostTagsWhereInput | PostTagsWhereInput[]
    OR?: PostTagsWhereInput[]
    NOT?: PostTagsWhereInput | PostTagsWhereInput[]
    postId?: StringFilter<"PostTags"> | string
    tagId?: StringFilter<"PostTags"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type PostTagsOrderByWithRelationInput = {
    postId?: SortOrder
    tagId?: SortOrder
    post?: PostOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
    _relevance?: PostTagsOrderByRelevanceInput
  }

  export type PostTagsWhereUniqueInput = Prisma.AtLeast<{
    postId_tagId?: PostTagsPostIdTagIdCompoundUniqueInput
    AND?: PostTagsWhereInput | PostTagsWhereInput[]
    OR?: PostTagsWhereInput[]
    NOT?: PostTagsWhereInput | PostTagsWhereInput[]
    postId?: StringFilter<"PostTags"> | string
    tagId?: StringFilter<"PostTags"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "postId_tagId">

  export type PostTagsOrderByWithAggregationInput = {
    postId?: SortOrder
    tagId?: SortOrder
    _count?: PostTagsCountOrderByAggregateInput
    _max?: PostTagsMaxOrderByAggregateInput
    _min?: PostTagsMinOrderByAggregateInput
  }

  export type PostTagsScalarWhereWithAggregatesInput = {
    AND?: PostTagsScalarWhereWithAggregatesInput | PostTagsScalarWhereWithAggregatesInput[]
    OR?: PostTagsScalarWhereWithAggregatesInput[]
    NOT?: PostTagsScalarWhereWithAggregatesInput | PostTagsScalarWhereWithAggregatesInput[]
    postId?: StringWithAggregatesFilter<"PostTags"> | string
    tagId?: StringWithAggregatesFilter<"PostTags"> | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    authorId?: StringNullableFilter<"Comment"> | string | null
    content?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    status?: EnumCommentStatusFilter<"Comment"> | $Enums.CommentStatus
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    children?: CommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrderInput | SortOrder
    content?: SortOrder
    parentId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    children?: CommentOrderByRelationAggregateInput
    _relevance?: CommentOrderByRelevanceInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    postId?: StringFilter<"Comment"> | string
    authorId?: StringNullableFilter<"Comment"> | string | null
    content?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    status?: EnumCommentStatusFilter<"Comment"> | $Enums.CommentStatus
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    author?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    children?: CommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrderInput | SortOrder
    content?: SortOrder
    parentId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    postId?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    content?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    status?: EnumCommentStatusWithAggregatesFilter<"Comment"> | $Enums.CommentStatus
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type RevisionWhereInput = {
    AND?: RevisionWhereInput | RevisionWhereInput[]
    OR?: RevisionWhereInput[]
    NOT?: RevisionWhereInput | RevisionWhereInput[]
    id?: StringFilter<"Revision"> | string
    postId?: StringFilter<"Revision"> | string
    authorId?: StringFilter<"Revision"> | string
    content?: StringFilter<"Revision"> | string
    title?: StringNullableFilter<"Revision"> | string | null
    createdAt?: DateTimeFilter<"Revision"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RevisionOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    post?: PostOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    _relevance?: RevisionOrderByRelevanceInput
  }

  export type RevisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RevisionWhereInput | RevisionWhereInput[]
    OR?: RevisionWhereInput[]
    NOT?: RevisionWhereInput | RevisionWhereInput[]
    postId?: StringFilter<"Revision"> | string
    authorId?: StringFilter<"Revision"> | string
    content?: StringFilter<"Revision"> | string
    title?: StringNullableFilter<"Revision"> | string | null
    createdAt?: DateTimeFilter<"Revision"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RevisionOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RevisionCountOrderByAggregateInput
    _max?: RevisionMaxOrderByAggregateInput
    _min?: RevisionMinOrderByAggregateInput
  }

  export type RevisionScalarWhereWithAggregatesInput = {
    AND?: RevisionScalarWhereWithAggregatesInput | RevisionScalarWhereWithAggregatesInput[]
    OR?: RevisionScalarWhereWithAggregatesInput[]
    NOT?: RevisionScalarWhereWithAggregatesInput | RevisionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Revision"> | string
    postId?: StringWithAggregatesFilter<"Revision"> | string
    authorId?: StringWithAggregatesFilter<"Revision"> | string
    content?: StringWithAggregatesFilter<"Revision"> | string
    title?: StringNullableWithAggregatesFilter<"Revision"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Revision"> | Date | string
  }

  export type MediaWhereInput = {
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    id?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    altText?: StringNullableFilter<"Media"> | string | null
    caption?: StringNullableFilter<"Media"> | string | null
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    uploadedById?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    uploadedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    posts?: PostMediaListRelationFilter
  }

  export type MediaOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    type?: SortOrder
    uploadedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    uploadedBy?: UserOrderByWithRelationInput
    posts?: PostMediaOrderByRelationAggregateInput
    _relevance?: MediaOrderByRelevanceInput
  }

  export type MediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MediaWhereInput | MediaWhereInput[]
    OR?: MediaWhereInput[]
    NOT?: MediaWhereInput | MediaWhereInput[]
    url?: StringFilter<"Media"> | string
    altText?: StringNullableFilter<"Media"> | string | null
    caption?: StringNullableFilter<"Media"> | string | null
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    uploadedById?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
    uploadedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    posts?: PostMediaListRelationFilter
  }, "id">

  export type MediaOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    type?: SortOrder
    uploadedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MediaCountOrderByAggregateInput
    _max?: MediaMaxOrderByAggregateInput
    _min?: MediaMinOrderByAggregateInput
  }

  export type MediaScalarWhereWithAggregatesInput = {
    AND?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    OR?: MediaScalarWhereWithAggregatesInput[]
    NOT?: MediaScalarWhereWithAggregatesInput | MediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Media"> | string
    url?: StringWithAggregatesFilter<"Media"> | string
    altText?: StringNullableWithAggregatesFilter<"Media"> | string | null
    caption?: StringNullableWithAggregatesFilter<"Media"> | string | null
    type?: EnumMediaTypeWithAggregatesFilter<"Media"> | $Enums.MediaType
    uploadedById?: StringNullableWithAggregatesFilter<"Media"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Media"> | Date | string
  }

  export type PostMediaWhereInput = {
    AND?: PostMediaWhereInput | PostMediaWhereInput[]
    OR?: PostMediaWhereInput[]
    NOT?: PostMediaWhereInput | PostMediaWhereInput[]
    postId?: StringFilter<"PostMedia"> | string
    mediaId?: StringFilter<"PostMedia"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
  }

  export type PostMediaOrderByWithRelationInput = {
    postId?: SortOrder
    mediaId?: SortOrder
    post?: PostOrderByWithRelationInput
    media?: MediaOrderByWithRelationInput
    _relevance?: PostMediaOrderByRelevanceInput
  }

  export type PostMediaWhereUniqueInput = Prisma.AtLeast<{
    postId_mediaId?: PostMediaPostIdMediaIdCompoundUniqueInput
    AND?: PostMediaWhereInput | PostMediaWhereInput[]
    OR?: PostMediaWhereInput[]
    NOT?: PostMediaWhereInput | PostMediaWhereInput[]
    postId?: StringFilter<"PostMedia"> | string
    mediaId?: StringFilter<"PostMedia"> | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
    media?: XOR<MediaScalarRelationFilter, MediaWhereInput>
  }, "postId_mediaId">

  export type PostMediaOrderByWithAggregationInput = {
    postId?: SortOrder
    mediaId?: SortOrder
    _count?: PostMediaCountOrderByAggregateInput
    _max?: PostMediaMaxOrderByAggregateInput
    _min?: PostMediaMinOrderByAggregateInput
  }

  export type PostMediaScalarWhereWithAggregatesInput = {
    AND?: PostMediaScalarWhereWithAggregatesInput | PostMediaScalarWhereWithAggregatesInput[]
    OR?: PostMediaScalarWhereWithAggregatesInput[]
    NOT?: PostMediaScalarWhereWithAggregatesInput | PostMediaScalarWhereWithAggregatesInput[]
    postId?: StringWithAggregatesFilter<"PostMedia"> | string
    mediaId?: StringWithAggregatesFilter<"PostMedia"> | string
  }

  export type SubscriberWhereInput = {
    AND?: SubscriberWhereInput | SubscriberWhereInput[]
    OR?: SubscriberWhereInput[]
    NOT?: SubscriberWhereInput | SubscriberWhereInput[]
    id?: StringFilter<"Subscriber"> | string
    email?: StringFilter<"Subscriber"> | string
    name?: StringNullableFilter<"Subscriber"> | string | null
    verified?: BoolFilter<"Subscriber"> | boolean
    subscribedAt?: DateTimeFilter<"Subscriber"> | Date | string
    unsubscribedAt?: DateTimeNullableFilter<"Subscriber"> | Date | string | null
  }

  export type SubscriberOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    verified?: SortOrder
    subscribedAt?: SortOrder
    unsubscribedAt?: SortOrderInput | SortOrder
    _relevance?: SubscriberOrderByRelevanceInput
  }

  export type SubscriberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: SubscriberWhereInput | SubscriberWhereInput[]
    OR?: SubscriberWhereInput[]
    NOT?: SubscriberWhereInput | SubscriberWhereInput[]
    name?: StringNullableFilter<"Subscriber"> | string | null
    verified?: BoolFilter<"Subscriber"> | boolean
    subscribedAt?: DateTimeFilter<"Subscriber"> | Date | string
    unsubscribedAt?: DateTimeNullableFilter<"Subscriber"> | Date | string | null
  }, "id" | "email">

  export type SubscriberOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    verified?: SortOrder
    subscribedAt?: SortOrder
    unsubscribedAt?: SortOrderInput | SortOrder
    _count?: SubscriberCountOrderByAggregateInput
    _max?: SubscriberMaxOrderByAggregateInput
    _min?: SubscriberMinOrderByAggregateInput
  }

  export type SubscriberScalarWhereWithAggregatesInput = {
    AND?: SubscriberScalarWhereWithAggregatesInput | SubscriberScalarWhereWithAggregatesInput[]
    OR?: SubscriberScalarWhereWithAggregatesInput[]
    NOT?: SubscriberScalarWhereWithAggregatesInput | SubscriberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscriber"> | string
    email?: StringWithAggregatesFilter<"Subscriber"> | string
    name?: StringNullableWithAggregatesFilter<"Subscriber"> | string | null
    verified?: BoolWithAggregatesFilter<"Subscriber"> | boolean
    subscribedAt?: DateTimeWithAggregatesFilter<"Subscriber"> | Date | string
    unsubscribedAt?: DateTimeNullableWithAggregatesFilter<"Subscriber"> | Date | string | null
  }

  export type ViewLogWhereInput = {
    AND?: ViewLogWhereInput | ViewLogWhereInput[]
    OR?: ViewLogWhereInput[]
    NOT?: ViewLogWhereInput | ViewLogWhereInput[]
    id?: StringFilter<"ViewLog"> | string
    postId?: StringFilter<"ViewLog"> | string
    viewerIp?: StringNullableFilter<"ViewLog"> | string | null
    userAgent?: StringNullableFilter<"ViewLog"> | string | null
    viewedAt?: DateTimeFilter<"ViewLog"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }

  export type ViewLogOrderByWithRelationInput = {
    id?: SortOrder
    postId?: SortOrder
    viewerIp?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    viewedAt?: SortOrder
    post?: PostOrderByWithRelationInput
    _relevance?: ViewLogOrderByRelevanceInput
  }

  export type ViewLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewLogWhereInput | ViewLogWhereInput[]
    OR?: ViewLogWhereInput[]
    NOT?: ViewLogWhereInput | ViewLogWhereInput[]
    postId?: StringFilter<"ViewLog"> | string
    viewerIp?: StringNullableFilter<"ViewLog"> | string | null
    userAgent?: StringNullableFilter<"ViewLog"> | string | null
    viewedAt?: DateTimeFilter<"ViewLog"> | Date | string
    post?: XOR<PostScalarRelationFilter, PostWhereInput>
  }, "id">

  export type ViewLogOrderByWithAggregationInput = {
    id?: SortOrder
    postId?: SortOrder
    viewerIp?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    viewedAt?: SortOrder
    _count?: ViewLogCountOrderByAggregateInput
    _max?: ViewLogMaxOrderByAggregateInput
    _min?: ViewLogMinOrderByAggregateInput
  }

  export type ViewLogScalarWhereWithAggregatesInput = {
    AND?: ViewLogScalarWhereWithAggregatesInput | ViewLogScalarWhereWithAggregatesInput[]
    OR?: ViewLogScalarWhereWithAggregatesInput[]
    NOT?: ViewLogScalarWhereWithAggregatesInput | ViewLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ViewLog"> | string
    postId?: StringWithAggregatesFilter<"ViewLog"> | string
    viewerIp?: StringNullableWithAggregatesFilter<"ViewLog"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"ViewLog"> | string | null
    viewedAt?: DateTimeWithAggregatesFilter<"ViewLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    revisions?: RevisionCreateNestedManyWithoutAuthorInput
    media?: MediaCreateNestedManyWithoutUploadedByInput
    editedMagazines?: MagazineCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutAuthorInput
    media?: MediaUncheckedCreateNestedManyWithoutUploadedByInput
    editedMagazines?: MagazineUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUpdateManyWithoutAuthorNestedInput
    media?: MediaUpdateManyWithoutUploadedByNestedInput
    editedMagazines?: MagazineUpdateManyWithoutEditorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutAuthorNestedInput
    media?: MediaUncheckedUpdateManyWithoutUploadedByNestedInput
    editedMagazines?: MagazineUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type?: string | null
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type?: string | null
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type?: string | null
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    posts?: PostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    parentId?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    posts?: PostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    posts?: PostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    posts?: PostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    parentId?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TagCreateInput = {
    id?: string
    name: string
    slug: string
    posts?: PostTagsCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    posts?: PostTagsUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    posts?: PostTagsUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    posts?: PostTagsUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    slug: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type MagazineCreateInput = {
    id?: string
    title?: string | null
    slug: string
    description?: string | null
    coverImageUrl?: string | null
    issueNumber?: number | null
    publishedAt?: Date | string | null
    status?: $Enums.MagazineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    editor?: UserCreateNestedOneWithoutEditedMagazinesInput
    posts?: PostCreateNestedManyWithoutMagazineInput
  }

  export type MagazineUncheckedCreateInput = {
    id?: string
    title?: string | null
    slug: string
    description?: string | null
    coverImageUrl?: string | null
    issueNumber?: number | null
    publishedAt?: Date | string | null
    status?: $Enums.MagazineStatus
    editorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutMagazineInput
  }

  export type MagazineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMagazineStatusFieldUpdateOperationsInput | $Enums.MagazineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editor?: UserUpdateOneWithoutEditedMagazinesNestedInput
    posts?: PostUpdateManyWithoutMagazineNestedInput
  }

  export type MagazineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMagazineStatusFieldUpdateOperationsInput | $Enums.MagazineStatus
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutMagazineNestedInput
  }

  export type MagazineCreateManyInput = {
    id?: string
    title?: string | null
    slug: string
    description?: string | null
    coverImageUrl?: string | null
    issueNumber?: number | null
    publishedAt?: Date | string | null
    status?: $Enums.MagazineStatus
    editorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MagazineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMagazineStatusFieldUpdateOperationsInput | $Enums.MagazineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagazineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMagazineStatusFieldUpdateOperationsInput | $Enums.MagazineStatus
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    magazine?: MagazineCreateNestedOneWithoutPostsInput
    category?: CategoryCreateNestedOneWithoutPostsInput
    tags?: PostTagsCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    revisions?: RevisionCreateNestedManyWithoutPostInput
    media?: PostMediaCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    authorId: string
    magazineId?: string | null
    categoryId?: string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PostTagsUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutPostInput
    media?: PostMediaUncheckedCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    magazine?: MagazineUpdateOneWithoutPostsNestedInput
    category?: CategoryUpdateOneWithoutPostsNestedInput
    tags?: PostTagsUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    revisions?: RevisionUpdateManyWithoutPostNestedInput
    media?: PostMediaUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PostTagsUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutPostNestedInput
    media?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    authorId: string
    magazineId?: string | null
    categoryId?: string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagsCreateInput = {
    post: PostCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutPostsInput
  }

  export type PostTagsUncheckedCreateInput = {
    postId: string
    tagId: string
  }

  export type PostTagsUpdateInput = {
    post?: PostUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostTagsUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagsCreateManyInput = {
    postId: string
    tagId: string
  }

  export type PostTagsUpdateManyMutationInput = {

  }

  export type PostTagsUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    author?: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutChildrenInput
    children?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    postId: string
    authorId?: string | null
    content: string
    parentId?: string | null
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    author?: UserUpdateOneWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutChildrenNestedInput
    children?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    postId: string
    authorId?: string | null
    content: string
    parentId?: string | null
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionCreateInput = {
    id?: string
    content: string
    title?: string | null
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutRevisionsInput
    author: UserCreateNestedOneWithoutRevisionsInput
  }

  export type RevisionUncheckedCreateInput = {
    id?: string
    postId: string
    authorId: string
    content: string
    title?: string | null
    createdAt?: Date | string
  }

  export type RevisionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutRevisionsNestedInput
    author?: UserUpdateOneRequiredWithoutRevisionsNestedInput
  }

  export type RevisionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionCreateManyInput = {
    id?: string
    postId: string
    authorId: string
    content: string
    title?: string | null
    createdAt?: Date | string
  }

  export type RevisionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaCreateInput = {
    id?: string
    url: string
    altText?: string | null
    caption?: string | null
    type: $Enums.MediaType
    createdAt?: Date | string
    uploadedBy?: UserCreateNestedOneWithoutMediaInput
    posts?: PostMediaCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateInput = {
    id?: string
    url: string
    altText?: string | null
    caption?: string | null
    type: $Enums.MediaType
    uploadedById?: string | null
    createdAt?: Date | string
    posts?: PostMediaUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneWithoutMediaNestedInput
    posts?: PostMediaUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostMediaUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaCreateManyInput = {
    id?: string
    url: string
    altText?: string | null
    caption?: string | null
    type: $Enums.MediaType
    uploadedById?: string | null
    createdAt?: Date | string
  }

  export type MediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMediaCreateInput = {
    post: PostCreateNestedOneWithoutMediaInput
    media: MediaCreateNestedOneWithoutPostsInput
  }

  export type PostMediaUncheckedCreateInput = {
    postId: string
    mediaId: string
  }

  export type PostMediaUpdateInput = {
    post?: PostUpdateOneRequiredWithoutMediaNestedInput
    media?: MediaUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostMediaUncheckedUpdateInput = {
    postId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type PostMediaCreateManyInput = {
    postId: string
    mediaId: string
  }

  export type PostMediaUpdateManyMutationInput = {

  }

  export type PostMediaUncheckedUpdateManyInput = {
    postId?: StringFieldUpdateOperationsInput | string
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriberCreateInput = {
    id?: string
    email: string
    name?: string | null
    verified?: boolean
    subscribedAt?: Date | string
    unsubscribedAt?: Date | string | null
  }

  export type SubscriberUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    verified?: boolean
    subscribedAt?: Date | string
    unsubscribedAt?: Date | string | null
  }

  export type SubscriberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    subscribedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unsubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    subscribedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unsubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriberCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    verified?: boolean
    subscribedAt?: Date | string
    unsubscribedAt?: Date | string | null
  }

  export type SubscriberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    subscribedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unsubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    subscribedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unsubscribedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ViewLogCreateInput = {
    id?: string
    viewerIp?: string | null
    userAgent?: string | null
    viewedAt?: Date | string
    post: PostCreateNestedOneWithoutViewLogsInput
  }

  export type ViewLogUncheckedCreateInput = {
    id?: string
    postId: string
    viewerIp?: string | null
    userAgent?: string | null
    viewedAt?: Date | string
  }

  export type ViewLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutViewLogsNestedInput
  }

  export type ViewLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewLogCreateManyInput = {
    id?: string
    postId: string
    viewerIp?: string | null
    userAgent?: string | null
    viewedAt?: Date | string
  }

  export type ViewLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type RevisionListRelationFilter = {
    every?: RevisionWhereInput
    some?: RevisionWhereInput
    none?: RevisionWhereInput
  }

  export type MediaListRelationFilter = {
    every?: MediaWhereInput
    some?: MediaWhereInput
    none?: MediaWhereInput
  }

  export type MagazineListRelationFilter = {
    every?: MagazineWhereInput
    some?: MagazineWhereInput
    none?: MagazineWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RevisionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MagazineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    socialLinks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
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

  export type SessionOrderByRelevanceInput = {
    fields: SessionOrderByRelevanceFieldEnum | SessionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenOrderByRelevanceInput = {
    fields: VerificationTokenOrderByRelevanceFieldEnum | VerificationTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    parentId?: SortOrder
  }

  export type PostTagsListRelationFilter = {
    every?: PostTagsWhereInput
    some?: PostTagsWhereInput
    none?: PostTagsWhereInput
  }

  export type PostTagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagOrderByRelevanceInput = {
    fields: TagOrderByRelevanceFieldEnum | TagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
  }

  export type EnumMagazineStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MagazineStatus | EnumMagazineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MagazineStatus[]
    notIn?: $Enums.MagazineStatus[]
    not?: NestedEnumMagazineStatusFilter<$PrismaModel> | $Enums.MagazineStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MagazineOrderByRelevanceInput = {
    fields: MagazineOrderByRelevanceFieldEnum | MagazineOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MagazineCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    coverImageUrl?: SortOrder
    issueNumber?: SortOrder
    publishedAt?: SortOrder
    status?: SortOrder
    editorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MagazineAvgOrderByAggregateInput = {
    issueNumber?: SortOrder
  }

  export type MagazineMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    coverImageUrl?: SortOrder
    issueNumber?: SortOrder
    publishedAt?: SortOrder
    status?: SortOrder
    editorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MagazineMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    coverImageUrl?: SortOrder
    issueNumber?: SortOrder
    publishedAt?: SortOrder
    status?: SortOrder
    editorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MagazineSumOrderByAggregateInput = {
    issueNumber?: SortOrder
  }

  export type EnumMagazineStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MagazineStatus | EnumMagazineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MagazineStatus[]
    notIn?: $Enums.MagazineStatus[]
    not?: NestedEnumMagazineStatusWithAggregatesFilter<$PrismaModel> | $Enums.MagazineStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMagazineStatusFilter<$PrismaModel>
    _max?: NestedEnumMagazineStatusFilter<$PrismaModel>
  }

  export type EnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[]
    notIn?: $Enums.PostType[]
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType
  }

  export type EnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[]
    notIn?: $Enums.PostStatus[]
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type EnumPostVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.PostVisibility | EnumPostVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.PostVisibility[]
    notIn?: $Enums.PostVisibility[]
    not?: NestedEnumPostVisibilityFilter<$PrismaModel> | $Enums.PostVisibility
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type MagazineNullableScalarRelationFilter = {
    is?: MagazineWhereInput | null
    isNot?: MagazineWhereInput | null
  }

  export type PostMediaListRelationFilter = {
    every?: PostMediaWhereInput
    some?: PostMediaWhereInput
    none?: PostMediaWhereInput
  }

  export type ViewLogListRelationFilter = {
    every?: ViewLogWhereInput
    some?: ViewLogWhereInput
    none?: ViewLogWhereInput
  }

  export type PostMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelevanceInput = {
    fields: PostOrderByRelevanceFieldEnum | PostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    readMinutes?: SortOrder
    type?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    visibility?: SortOrder
    isFeatured?: SortOrder
    scheduledAt?: SortOrder
    publishedAt?: SortOrder
    authorId?: SortOrder
    magazineId?: SortOrder
    categoryId?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    slugHistory?: SortOrder
    seoSchema?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    readMinutes?: SortOrder
    views?: SortOrder
    likes?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    readMinutes?: SortOrder
    type?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    visibility?: SortOrder
    isFeatured?: SortOrder
    scheduledAt?: SortOrder
    publishedAt?: SortOrder
    authorId?: SortOrder
    magazineId?: SortOrder
    categoryId?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    excerpt?: SortOrder
    content?: SortOrder
    readMinutes?: SortOrder
    type?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    visibility?: SortOrder
    isFeatured?: SortOrder
    scheduledAt?: SortOrder
    publishedAt?: SortOrder
    authorId?: SortOrder
    magazineId?: SortOrder
    categoryId?: SortOrder
    views?: SortOrder
    likes?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    readMinutes?: SortOrder
    views?: SortOrder
    likes?: SortOrder
  }

  export type EnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[]
    notIn?: $Enums.PostType[]
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPostTypeFilter<$PrismaModel>
  }

  export type EnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[]
    notIn?: $Enums.PostStatus[]
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type EnumPostVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostVisibility | EnumPostVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.PostVisibility[]
    notIn?: $Enums.PostVisibility[]
    not?: NestedEnumPostVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.PostVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostVisibilityFilter<$PrismaModel>
    _max?: NestedEnumPostVisibilityFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type PostScalarRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type PostTagsOrderByRelevanceInput = {
    fields: PostTagsOrderByRelevanceFieldEnum | PostTagsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostTagsPostIdTagIdCompoundUniqueInput = {
    postId: string
    tagId: string
  }

  export type PostTagsCountOrderByAggregateInput = {
    postId?: SortOrder
    tagId?: SortOrder
  }

  export type PostTagsMaxOrderByAggregateInput = {
    postId?: SortOrder
    tagId?: SortOrder
  }

  export type PostTagsMinOrderByAggregateInput = {
    postId?: SortOrder
    tagId?: SortOrder
  }

  export type EnumCommentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatus | EnumCommentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatus[]
    notIn?: $Enums.CommentStatus[]
    not?: NestedEnumCommentStatusFilter<$PrismaModel> | $Enums.CommentStatus
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentOrderByRelevanceInput = {
    fields: CommentOrderByRelevanceFieldEnum | CommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    parentId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCommentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatus | EnumCommentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatus[]
    notIn?: $Enums.CommentStatus[]
    not?: NestedEnumCommentStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentStatusFilter<$PrismaModel>
    _max?: NestedEnumCommentStatusFilter<$PrismaModel>
  }

  export type RevisionOrderByRelevanceInput = {
    fields: RevisionOrderByRelevanceFieldEnum | RevisionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RevisionCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type RevisionMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type RevisionMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    authorId?: SortOrder
    content?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[]
    notIn?: $Enums.MediaType[]
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type MediaOrderByRelevanceInput = {
    fields: MediaOrderByRelevanceFieldEnum | MediaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MediaCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    caption?: SortOrder
    type?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    caption?: SortOrder
    type?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
  }

  export type MediaMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    altText?: SortOrder
    caption?: SortOrder
    type?: SortOrder
    uploadedById?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[]
    notIn?: $Enums.MediaType[]
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type MediaScalarRelationFilter = {
    is?: MediaWhereInput
    isNot?: MediaWhereInput
  }

  export type PostMediaOrderByRelevanceInput = {
    fields: PostMediaOrderByRelevanceFieldEnum | PostMediaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostMediaPostIdMediaIdCompoundUniqueInput = {
    postId: string
    mediaId: string
  }

  export type PostMediaCountOrderByAggregateInput = {
    postId?: SortOrder
    mediaId?: SortOrder
  }

  export type PostMediaMaxOrderByAggregateInput = {
    postId?: SortOrder
    mediaId?: SortOrder
  }

  export type PostMediaMinOrderByAggregateInput = {
    postId?: SortOrder
    mediaId?: SortOrder
  }

  export type SubscriberOrderByRelevanceInput = {
    fields: SubscriberOrderByRelevanceFieldEnum | SubscriberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubscriberCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    verified?: SortOrder
    subscribedAt?: SortOrder
    unsubscribedAt?: SortOrder
  }

  export type SubscriberMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    verified?: SortOrder
    subscribedAt?: SortOrder
    unsubscribedAt?: SortOrder
  }

  export type SubscriberMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    verified?: SortOrder
    subscribedAt?: SortOrder
    unsubscribedAt?: SortOrder
  }

  export type ViewLogOrderByRelevanceInput = {
    fields: ViewLogOrderByRelevanceFieldEnum | ViewLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ViewLogCountOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    viewerIp?: SortOrder
    userAgent?: SortOrder
    viewedAt?: SortOrder
  }

  export type ViewLogMaxOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    viewerIp?: SortOrder
    userAgent?: SortOrder
    viewedAt?: SortOrder
  }

  export type ViewLogMinOrderByAggregateInput = {
    id?: SortOrder
    postId?: SortOrder
    viewerIp?: SortOrder
    userAgent?: SortOrder
    viewedAt?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type RevisionCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RevisionCreateWithoutAuthorInput, RevisionUncheckedCreateWithoutAuthorInput> | RevisionCreateWithoutAuthorInput[] | RevisionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutAuthorInput | RevisionCreateOrConnectWithoutAuthorInput[]
    createMany?: RevisionCreateManyAuthorInputEnvelope
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
  }

  export type MediaCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<MediaCreateWithoutUploadedByInput, MediaUncheckedCreateWithoutUploadedByInput> | MediaCreateWithoutUploadedByInput[] | MediaUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutUploadedByInput | MediaCreateOrConnectWithoutUploadedByInput[]
    createMany?: MediaCreateManyUploadedByInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type MagazineCreateNestedManyWithoutEditorInput = {
    create?: XOR<MagazineCreateWithoutEditorInput, MagazineUncheckedCreateWithoutEditorInput> | MagazineCreateWithoutEditorInput[] | MagazineUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: MagazineCreateOrConnectWithoutEditorInput | MagazineCreateOrConnectWithoutEditorInput[]
    createMany?: MagazineCreateManyEditorInputEnvelope
    connect?: MagazineWhereUniqueInput | MagazineWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type RevisionUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<RevisionCreateWithoutAuthorInput, RevisionUncheckedCreateWithoutAuthorInput> | RevisionCreateWithoutAuthorInput[] | RevisionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutAuthorInput | RevisionCreateOrConnectWithoutAuthorInput[]
    createMany?: RevisionCreateManyAuthorInputEnvelope
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
  }

  export type MediaUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: XOR<MediaCreateWithoutUploadedByInput, MediaUncheckedCreateWithoutUploadedByInput> | MediaCreateWithoutUploadedByInput[] | MediaUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutUploadedByInput | MediaCreateOrConnectWithoutUploadedByInput[]
    createMany?: MediaCreateManyUploadedByInputEnvelope
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
  }

  export type MagazineUncheckedCreateNestedManyWithoutEditorInput = {
    create?: XOR<MagazineCreateWithoutEditorInput, MagazineUncheckedCreateWithoutEditorInput> | MagazineCreateWithoutEditorInput[] | MagazineUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: MagazineCreateOrConnectWithoutEditorInput | MagazineCreateOrConnectWithoutEditorInput[]
    createMany?: MagazineCreateManyEditorInputEnvelope
    connect?: MagazineWhereUniqueInput | MagazineWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RevisionUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RevisionCreateWithoutAuthorInput, RevisionUncheckedCreateWithoutAuthorInput> | RevisionCreateWithoutAuthorInput[] | RevisionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutAuthorInput | RevisionCreateOrConnectWithoutAuthorInput[]
    upsert?: RevisionUpsertWithWhereUniqueWithoutAuthorInput | RevisionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RevisionCreateManyAuthorInputEnvelope
    set?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    disconnect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    delete?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    update?: RevisionUpdateWithWhereUniqueWithoutAuthorInput | RevisionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RevisionUpdateManyWithWhereWithoutAuthorInput | RevisionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RevisionScalarWhereInput | RevisionScalarWhereInput[]
  }

  export type MediaUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<MediaCreateWithoutUploadedByInput, MediaUncheckedCreateWithoutUploadedByInput> | MediaCreateWithoutUploadedByInput[] | MediaUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutUploadedByInput | MediaCreateOrConnectWithoutUploadedByInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutUploadedByInput | MediaUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: MediaCreateManyUploadedByInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutUploadedByInput | MediaUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutUploadedByInput | MediaUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type MagazineUpdateManyWithoutEditorNestedInput = {
    create?: XOR<MagazineCreateWithoutEditorInput, MagazineUncheckedCreateWithoutEditorInput> | MagazineCreateWithoutEditorInput[] | MagazineUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: MagazineCreateOrConnectWithoutEditorInput | MagazineCreateOrConnectWithoutEditorInput[]
    upsert?: MagazineUpsertWithWhereUniqueWithoutEditorInput | MagazineUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: MagazineCreateManyEditorInputEnvelope
    set?: MagazineWhereUniqueInput | MagazineWhereUniqueInput[]
    disconnect?: MagazineWhereUniqueInput | MagazineWhereUniqueInput[]
    delete?: MagazineWhereUniqueInput | MagazineWhereUniqueInput[]
    connect?: MagazineWhereUniqueInput | MagazineWhereUniqueInput[]
    update?: MagazineUpdateWithWhereUniqueWithoutEditorInput | MagazineUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: MagazineUpdateManyWithWhereWithoutEditorInput | MagazineUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: MagazineScalarWhereInput | MagazineScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RevisionUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<RevisionCreateWithoutAuthorInput, RevisionUncheckedCreateWithoutAuthorInput> | RevisionCreateWithoutAuthorInput[] | RevisionUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutAuthorInput | RevisionCreateOrConnectWithoutAuthorInput[]
    upsert?: RevisionUpsertWithWhereUniqueWithoutAuthorInput | RevisionUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: RevisionCreateManyAuthorInputEnvelope
    set?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    disconnect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    delete?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    update?: RevisionUpdateWithWhereUniqueWithoutAuthorInput | RevisionUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: RevisionUpdateManyWithWhereWithoutAuthorInput | RevisionUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: RevisionScalarWhereInput | RevisionScalarWhereInput[]
  }

  export type MediaUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: XOR<MediaCreateWithoutUploadedByInput, MediaUncheckedCreateWithoutUploadedByInput> | MediaCreateWithoutUploadedByInput[] | MediaUncheckedCreateWithoutUploadedByInput[]
    connectOrCreate?: MediaCreateOrConnectWithoutUploadedByInput | MediaCreateOrConnectWithoutUploadedByInput[]
    upsert?: MediaUpsertWithWhereUniqueWithoutUploadedByInput | MediaUpsertWithWhereUniqueWithoutUploadedByInput[]
    createMany?: MediaCreateManyUploadedByInputEnvelope
    set?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    disconnect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    delete?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    connect?: MediaWhereUniqueInput | MediaWhereUniqueInput[]
    update?: MediaUpdateWithWhereUniqueWithoutUploadedByInput | MediaUpdateWithWhereUniqueWithoutUploadedByInput[]
    updateMany?: MediaUpdateManyWithWhereWithoutUploadedByInput | MediaUpdateManyWithWhereWithoutUploadedByInput[]
    deleteMany?: MediaScalarWhereInput | MediaScalarWhereInput[]
  }

  export type MagazineUncheckedUpdateManyWithoutEditorNestedInput = {
    create?: XOR<MagazineCreateWithoutEditorInput, MagazineUncheckedCreateWithoutEditorInput> | MagazineCreateWithoutEditorInput[] | MagazineUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: MagazineCreateOrConnectWithoutEditorInput | MagazineCreateOrConnectWithoutEditorInput[]
    upsert?: MagazineUpsertWithWhereUniqueWithoutEditorInput | MagazineUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: MagazineCreateManyEditorInputEnvelope
    set?: MagazineWhereUniqueInput | MagazineWhereUniqueInput[]
    disconnect?: MagazineWhereUniqueInput | MagazineWhereUniqueInput[]
    delete?: MagazineWhereUniqueInput | MagazineWhereUniqueInput[]
    connect?: MagazineWhereUniqueInput | MagazineWhereUniqueInput[]
    update?: MagazineUpdateWithWhereUniqueWithoutEditorInput | MagazineUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: MagazineUpdateManyWithWhereWithoutEditorInput | MagazineUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: MagazineScalarWhereInput | MagazineScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type CategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    createMany?: PostCreateManyCategoryInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    createMany?: PostCreateManyCategoryInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type CategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    upsert?: CategoryUpsertWithoutChildrenInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutChildrenInput, CategoryUpdateWithoutChildrenInput>, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoryInput | PostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PostCreateManyCategoryInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoryInput | PostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoryInput | PostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput> | PostCreateWithoutCategoryInput[] | PostUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCategoryInput | PostCreateOrConnectWithoutCategoryInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCategoryInput | PostUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PostCreateManyCategoryInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCategoryInput | PostUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCategoryInput | PostUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostTagsCreateNestedManyWithoutTagInput = {
    create?: XOR<PostTagsCreateWithoutTagInput, PostTagsUncheckedCreateWithoutTagInput> | PostTagsCreateWithoutTagInput[] | PostTagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagsCreateOrConnectWithoutTagInput | PostTagsCreateOrConnectWithoutTagInput[]
    createMany?: PostTagsCreateManyTagInputEnvelope
    connect?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
  }

  export type PostTagsUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<PostTagsCreateWithoutTagInput, PostTagsUncheckedCreateWithoutTagInput> | PostTagsCreateWithoutTagInput[] | PostTagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagsCreateOrConnectWithoutTagInput | PostTagsCreateOrConnectWithoutTagInput[]
    createMany?: PostTagsCreateManyTagInputEnvelope
    connect?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
  }

  export type PostTagsUpdateManyWithoutTagNestedInput = {
    create?: XOR<PostTagsCreateWithoutTagInput, PostTagsUncheckedCreateWithoutTagInput> | PostTagsCreateWithoutTagInput[] | PostTagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagsCreateOrConnectWithoutTagInput | PostTagsCreateOrConnectWithoutTagInput[]
    upsert?: PostTagsUpsertWithWhereUniqueWithoutTagInput | PostTagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PostTagsCreateManyTagInputEnvelope
    set?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    disconnect?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    delete?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    connect?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    update?: PostTagsUpdateWithWhereUniqueWithoutTagInput | PostTagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PostTagsUpdateManyWithWhereWithoutTagInput | PostTagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PostTagsScalarWhereInput | PostTagsScalarWhereInput[]
  }

  export type PostTagsUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<PostTagsCreateWithoutTagInput, PostTagsUncheckedCreateWithoutTagInput> | PostTagsCreateWithoutTagInput[] | PostTagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PostTagsCreateOrConnectWithoutTagInput | PostTagsCreateOrConnectWithoutTagInput[]
    upsert?: PostTagsUpsertWithWhereUniqueWithoutTagInput | PostTagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PostTagsCreateManyTagInputEnvelope
    set?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    disconnect?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    delete?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    connect?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    update?: PostTagsUpdateWithWhereUniqueWithoutTagInput | PostTagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PostTagsUpdateManyWithWhereWithoutTagInput | PostTagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PostTagsScalarWhereInput | PostTagsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEditedMagazinesInput = {
    create?: XOR<UserCreateWithoutEditedMagazinesInput, UserUncheckedCreateWithoutEditedMagazinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditedMagazinesInput
    connect?: UserWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutMagazineInput = {
    create?: XOR<PostCreateWithoutMagazineInput, PostUncheckedCreateWithoutMagazineInput> | PostCreateWithoutMagazineInput[] | PostUncheckedCreateWithoutMagazineInput[]
    connectOrCreate?: PostCreateOrConnectWithoutMagazineInput | PostCreateOrConnectWithoutMagazineInput[]
    createMany?: PostCreateManyMagazineInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutMagazineInput = {
    create?: XOR<PostCreateWithoutMagazineInput, PostUncheckedCreateWithoutMagazineInput> | PostCreateWithoutMagazineInput[] | PostUncheckedCreateWithoutMagazineInput[]
    connectOrCreate?: PostCreateOrConnectWithoutMagazineInput | PostCreateOrConnectWithoutMagazineInput[]
    createMany?: PostCreateManyMagazineInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type EnumMagazineStatusFieldUpdateOperationsInput = {
    set?: $Enums.MagazineStatus
  }

  export type UserUpdateOneWithoutEditedMagazinesNestedInput = {
    create?: XOR<UserCreateWithoutEditedMagazinesInput, UserUncheckedCreateWithoutEditedMagazinesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditedMagazinesInput
    upsert?: UserUpsertWithoutEditedMagazinesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEditedMagazinesInput, UserUpdateWithoutEditedMagazinesInput>, UserUncheckedUpdateWithoutEditedMagazinesInput>
  }

  export type PostUpdateManyWithoutMagazineNestedInput = {
    create?: XOR<PostCreateWithoutMagazineInput, PostUncheckedCreateWithoutMagazineInput> | PostCreateWithoutMagazineInput[] | PostUncheckedCreateWithoutMagazineInput[]
    connectOrCreate?: PostCreateOrConnectWithoutMagazineInput | PostCreateOrConnectWithoutMagazineInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutMagazineInput | PostUpsertWithWhereUniqueWithoutMagazineInput[]
    createMany?: PostCreateManyMagazineInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutMagazineInput | PostUpdateWithWhereUniqueWithoutMagazineInput[]
    updateMany?: PostUpdateManyWithWhereWithoutMagazineInput | PostUpdateManyWithWhereWithoutMagazineInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutMagazineNestedInput = {
    create?: XOR<PostCreateWithoutMagazineInput, PostUncheckedCreateWithoutMagazineInput> | PostCreateWithoutMagazineInput[] | PostUncheckedCreateWithoutMagazineInput[]
    connectOrCreate?: PostCreateOrConnectWithoutMagazineInput | PostCreateOrConnectWithoutMagazineInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutMagazineInput | PostUpsertWithWhereUniqueWithoutMagazineInput[]
    createMany?: PostCreateManyMagazineInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutMagazineInput | PostUpdateWithWhereUniqueWithoutMagazineInput[]
    updateMany?: PostUpdateManyWithWhereWithoutMagazineInput | PostUpdateManyWithWhereWithoutMagazineInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type MagazineCreateNestedOneWithoutPostsInput = {
    create?: XOR<MagazineCreateWithoutPostsInput, MagazineUncheckedCreateWithoutPostsInput>
    connectOrCreate?: MagazineCreateOrConnectWithoutPostsInput
    connect?: MagazineWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutPostsInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    connect?: CategoryWhereUniqueInput
  }

  export type PostTagsCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTagsCreateWithoutPostInput, PostTagsUncheckedCreateWithoutPostInput> | PostTagsCreateWithoutPostInput[] | PostTagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagsCreateOrConnectWithoutPostInput | PostTagsCreateOrConnectWithoutPostInput[]
    createMany?: PostTagsCreateManyPostInputEnvelope
    connect?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type RevisionCreateNestedManyWithoutPostInput = {
    create?: XOR<RevisionCreateWithoutPostInput, RevisionUncheckedCreateWithoutPostInput> | RevisionCreateWithoutPostInput[] | RevisionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutPostInput | RevisionCreateOrConnectWithoutPostInput[]
    createMany?: RevisionCreateManyPostInputEnvelope
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
  }

  export type PostMediaCreateNestedManyWithoutPostInput = {
    create?: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput> | PostMediaCreateWithoutPostInput[] | PostMediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput | PostMediaCreateOrConnectWithoutPostInput[]
    createMany?: PostMediaCreateManyPostInputEnvelope
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
  }

  export type ViewLogCreateNestedManyWithoutPostInput = {
    create?: XOR<ViewLogCreateWithoutPostInput, ViewLogUncheckedCreateWithoutPostInput> | ViewLogCreateWithoutPostInput[] | ViewLogUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutPostInput | ViewLogCreateOrConnectWithoutPostInput[]
    createMany?: ViewLogCreateManyPostInputEnvelope
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
  }

  export type PostTagsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostTagsCreateWithoutPostInput, PostTagsUncheckedCreateWithoutPostInput> | PostTagsCreateWithoutPostInput[] | PostTagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagsCreateOrConnectWithoutPostInput | PostTagsCreateOrConnectWithoutPostInput[]
    createMany?: PostTagsCreateManyPostInputEnvelope
    connect?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type RevisionUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<RevisionCreateWithoutPostInput, RevisionUncheckedCreateWithoutPostInput> | RevisionCreateWithoutPostInput[] | RevisionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutPostInput | RevisionCreateOrConnectWithoutPostInput[]
    createMany?: RevisionCreateManyPostInputEnvelope
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
  }

  export type PostMediaUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput> | PostMediaCreateWithoutPostInput[] | PostMediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput | PostMediaCreateOrConnectWithoutPostInput[]
    createMany?: PostMediaCreateManyPostInputEnvelope
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
  }

  export type ViewLogUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<ViewLogCreateWithoutPostInput, ViewLogUncheckedCreateWithoutPostInput> | ViewLogCreateWithoutPostInput[] | ViewLogUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutPostInput | ViewLogCreateOrConnectWithoutPostInput[]
    createMany?: ViewLogCreateManyPostInputEnvelope
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
  }

  export type EnumPostTypeFieldUpdateOperationsInput = {
    set?: $Enums.PostType
  }

  export type EnumPostStatusFieldUpdateOperationsInput = {
    set?: $Enums.PostStatus
  }

  export type EnumPostVisibilityFieldUpdateOperationsInput = {
    set?: $Enums.PostVisibility
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type MagazineUpdateOneWithoutPostsNestedInput = {
    create?: XOR<MagazineCreateWithoutPostsInput, MagazineUncheckedCreateWithoutPostsInput>
    connectOrCreate?: MagazineCreateOrConnectWithoutPostsInput
    upsert?: MagazineUpsertWithoutPostsInput
    disconnect?: MagazineWhereInput | boolean
    delete?: MagazineWhereInput | boolean
    connect?: MagazineWhereUniqueInput
    update?: XOR<XOR<MagazineUpdateToOneWithWhereWithoutPostsInput, MagazineUpdateWithoutPostsInput>, MagazineUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateOneWithoutPostsNestedInput = {
    create?: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutPostsInput
    upsert?: CategoryUpsertWithoutPostsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutPostsInput, CategoryUpdateWithoutPostsInput>, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type PostTagsUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTagsCreateWithoutPostInput, PostTagsUncheckedCreateWithoutPostInput> | PostTagsCreateWithoutPostInput[] | PostTagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagsCreateOrConnectWithoutPostInput | PostTagsCreateOrConnectWithoutPostInput[]
    upsert?: PostTagsUpsertWithWhereUniqueWithoutPostInput | PostTagsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTagsCreateManyPostInputEnvelope
    set?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    disconnect?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    delete?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    connect?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    update?: PostTagsUpdateWithWhereUniqueWithoutPostInput | PostTagsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTagsUpdateManyWithWhereWithoutPostInput | PostTagsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTagsScalarWhereInput | PostTagsScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RevisionUpdateManyWithoutPostNestedInput = {
    create?: XOR<RevisionCreateWithoutPostInput, RevisionUncheckedCreateWithoutPostInput> | RevisionCreateWithoutPostInput[] | RevisionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutPostInput | RevisionCreateOrConnectWithoutPostInput[]
    upsert?: RevisionUpsertWithWhereUniqueWithoutPostInput | RevisionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: RevisionCreateManyPostInputEnvelope
    set?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    disconnect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    delete?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    update?: RevisionUpdateWithWhereUniqueWithoutPostInput | RevisionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: RevisionUpdateManyWithWhereWithoutPostInput | RevisionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: RevisionScalarWhereInput | RevisionScalarWhereInput[]
  }

  export type PostMediaUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput> | PostMediaCreateWithoutPostInput[] | PostMediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput | PostMediaCreateOrConnectWithoutPostInput[]
    upsert?: PostMediaUpsertWithWhereUniqueWithoutPostInput | PostMediaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostMediaCreateManyPostInputEnvelope
    set?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    disconnect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    delete?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    update?: PostMediaUpdateWithWhereUniqueWithoutPostInput | PostMediaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostMediaUpdateManyWithWhereWithoutPostInput | PostMediaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
  }

  export type ViewLogUpdateManyWithoutPostNestedInput = {
    create?: XOR<ViewLogCreateWithoutPostInput, ViewLogUncheckedCreateWithoutPostInput> | ViewLogCreateWithoutPostInput[] | ViewLogUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutPostInput | ViewLogCreateOrConnectWithoutPostInput[]
    upsert?: ViewLogUpsertWithWhereUniqueWithoutPostInput | ViewLogUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ViewLogCreateManyPostInputEnvelope
    set?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    disconnect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    delete?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    update?: ViewLogUpdateWithWhereUniqueWithoutPostInput | ViewLogUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ViewLogUpdateManyWithWhereWithoutPostInput | ViewLogUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ViewLogScalarWhereInput | ViewLogScalarWhereInput[]
  }

  export type PostTagsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostTagsCreateWithoutPostInput, PostTagsUncheckedCreateWithoutPostInput> | PostTagsCreateWithoutPostInput[] | PostTagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostTagsCreateOrConnectWithoutPostInput | PostTagsCreateOrConnectWithoutPostInput[]
    upsert?: PostTagsUpsertWithWhereUniqueWithoutPostInput | PostTagsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostTagsCreateManyPostInputEnvelope
    set?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    disconnect?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    delete?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    connect?: PostTagsWhereUniqueInput | PostTagsWhereUniqueInput[]
    update?: PostTagsUpdateWithWhereUniqueWithoutPostInput | PostTagsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostTagsUpdateManyWithWhereWithoutPostInput | PostTagsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostTagsScalarWhereInput | PostTagsScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput> | CommentCreateWithoutPostInput[] | CommentUncheckedCreateWithoutPostInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutPostInput | CommentCreateOrConnectWithoutPostInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutPostInput | CommentUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: CommentCreateManyPostInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutPostInput | CommentUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutPostInput | CommentUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RevisionUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<RevisionCreateWithoutPostInput, RevisionUncheckedCreateWithoutPostInput> | RevisionCreateWithoutPostInput[] | RevisionUncheckedCreateWithoutPostInput[]
    connectOrCreate?: RevisionCreateOrConnectWithoutPostInput | RevisionCreateOrConnectWithoutPostInput[]
    upsert?: RevisionUpsertWithWhereUniqueWithoutPostInput | RevisionUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: RevisionCreateManyPostInputEnvelope
    set?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    disconnect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    delete?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    connect?: RevisionWhereUniqueInput | RevisionWhereUniqueInput[]
    update?: RevisionUpdateWithWhereUniqueWithoutPostInput | RevisionUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: RevisionUpdateManyWithWhereWithoutPostInput | RevisionUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: RevisionScalarWhereInput | RevisionScalarWhereInput[]
  }

  export type PostMediaUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput> | PostMediaCreateWithoutPostInput[] | PostMediaUncheckedCreateWithoutPostInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutPostInput | PostMediaCreateOrConnectWithoutPostInput[]
    upsert?: PostMediaUpsertWithWhereUniqueWithoutPostInput | PostMediaUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: PostMediaCreateManyPostInputEnvelope
    set?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    disconnect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    delete?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    update?: PostMediaUpdateWithWhereUniqueWithoutPostInput | PostMediaUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: PostMediaUpdateManyWithWhereWithoutPostInput | PostMediaUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
  }

  export type ViewLogUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<ViewLogCreateWithoutPostInput, ViewLogUncheckedCreateWithoutPostInput> | ViewLogCreateWithoutPostInput[] | ViewLogUncheckedCreateWithoutPostInput[]
    connectOrCreate?: ViewLogCreateOrConnectWithoutPostInput | ViewLogCreateOrConnectWithoutPostInput[]
    upsert?: ViewLogUpsertWithWhereUniqueWithoutPostInput | ViewLogUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: ViewLogCreateManyPostInputEnvelope
    set?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    disconnect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    delete?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    connect?: ViewLogWhereUniqueInput | ViewLogWhereUniqueInput[]
    update?: ViewLogUpdateWithWhereUniqueWithoutPostInput | ViewLogUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: ViewLogUpdateManyWithWhereWithoutPostInput | ViewLogUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: ViewLogScalarWhereInput | ViewLogScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutTagsInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    connect?: PostWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutPostsInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput
    connect?: TagWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PostCreateOrConnectWithoutTagsInput
    upsert?: PostUpsertWithoutTagsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutTagsInput, PostUpdateWithoutTagsInput>, PostUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPostsInput
    upsert?: TagUpsertWithoutPostsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutPostsInput, TagUpdateWithoutPostsInput>, TagUncheckedUpdateWithoutPostsInput>
  }

  export type PostCreateNestedOneWithoutCommentsInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CommentCreateWithoutChildrenInput, CommentUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CommentCreateOrConnectWithoutChildrenInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type EnumCommentStatusFieldUpdateOperationsInput = {
    set?: $Enums.CommentStatus
  }

  export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: PostCreateOrConnectWithoutCommentsInput
    upsert?: PostUpsertWithoutCommentsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutCommentsInput, PostUpdateWithoutCommentsInput>, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CommentCreateWithoutChildrenInput, CommentUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CommentCreateOrConnectWithoutChildrenInput
    upsert?: CommentUpsertWithoutChildrenInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutChildrenInput, CommentUpdateWithoutChildrenInput>, CommentUncheckedUpdateWithoutChildrenInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutRevisionsInput = {
    create?: XOR<PostCreateWithoutRevisionsInput, PostUncheckedCreateWithoutRevisionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutRevisionsInput
    connect?: PostWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRevisionsInput = {
    create?: XOR<UserCreateWithoutRevisionsInput, UserUncheckedCreateWithoutRevisionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRevisionsInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutRevisionsNestedInput = {
    create?: XOR<PostCreateWithoutRevisionsInput, PostUncheckedCreateWithoutRevisionsInput>
    connectOrCreate?: PostCreateOrConnectWithoutRevisionsInput
    upsert?: PostUpsertWithoutRevisionsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutRevisionsInput, PostUpdateWithoutRevisionsInput>, PostUncheckedUpdateWithoutRevisionsInput>
  }

  export type UserUpdateOneRequiredWithoutRevisionsNestedInput = {
    create?: XOR<UserCreateWithoutRevisionsInput, UserUncheckedCreateWithoutRevisionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRevisionsInput
    upsert?: UserUpsertWithoutRevisionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRevisionsInput, UserUpdateWithoutRevisionsInput>, UserUncheckedUpdateWithoutRevisionsInput>
  }

  export type UserCreateNestedOneWithoutMediaInput = {
    create?: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediaInput
    connect?: UserWhereUniqueInput
  }

  export type PostMediaCreateNestedManyWithoutMediaInput = {
    create?: XOR<PostMediaCreateWithoutMediaInput, PostMediaUncheckedCreateWithoutMediaInput> | PostMediaCreateWithoutMediaInput[] | PostMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutMediaInput | PostMediaCreateOrConnectWithoutMediaInput[]
    createMany?: PostMediaCreateManyMediaInputEnvelope
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
  }

  export type PostMediaUncheckedCreateNestedManyWithoutMediaInput = {
    create?: XOR<PostMediaCreateWithoutMediaInput, PostMediaUncheckedCreateWithoutMediaInput> | PostMediaCreateWithoutMediaInput[] | PostMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutMediaInput | PostMediaCreateOrConnectWithoutMediaInput[]
    createMany?: PostMediaCreateManyMediaInputEnvelope
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
  }

  export type EnumMediaTypeFieldUpdateOperationsInput = {
    set?: $Enums.MediaType
  }

  export type UserUpdateOneWithoutMediaNestedInput = {
    create?: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutMediaInput
    upsert?: UserUpsertWithoutMediaInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMediaInput, UserUpdateWithoutMediaInput>, UserUncheckedUpdateWithoutMediaInput>
  }

  export type PostMediaUpdateManyWithoutMediaNestedInput = {
    create?: XOR<PostMediaCreateWithoutMediaInput, PostMediaUncheckedCreateWithoutMediaInput> | PostMediaCreateWithoutMediaInput[] | PostMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutMediaInput | PostMediaCreateOrConnectWithoutMediaInput[]
    upsert?: PostMediaUpsertWithWhereUniqueWithoutMediaInput | PostMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: PostMediaCreateManyMediaInputEnvelope
    set?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    disconnect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    delete?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    update?: PostMediaUpdateWithWhereUniqueWithoutMediaInput | PostMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: PostMediaUpdateManyWithWhereWithoutMediaInput | PostMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
  }

  export type PostMediaUncheckedUpdateManyWithoutMediaNestedInput = {
    create?: XOR<PostMediaCreateWithoutMediaInput, PostMediaUncheckedCreateWithoutMediaInput> | PostMediaCreateWithoutMediaInput[] | PostMediaUncheckedCreateWithoutMediaInput[]
    connectOrCreate?: PostMediaCreateOrConnectWithoutMediaInput | PostMediaCreateOrConnectWithoutMediaInput[]
    upsert?: PostMediaUpsertWithWhereUniqueWithoutMediaInput | PostMediaUpsertWithWhereUniqueWithoutMediaInput[]
    createMany?: PostMediaCreateManyMediaInputEnvelope
    set?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    disconnect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    delete?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    connect?: PostMediaWhereUniqueInput | PostMediaWhereUniqueInput[]
    update?: PostMediaUpdateWithWhereUniqueWithoutMediaInput | PostMediaUpdateWithWhereUniqueWithoutMediaInput[]
    updateMany?: PostMediaUpdateManyWithWhereWithoutMediaInput | PostMediaUpdateManyWithWhereWithoutMediaInput[]
    deleteMany?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutMediaInput = {
    create?: XOR<PostCreateWithoutMediaInput, PostUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PostCreateOrConnectWithoutMediaInput
    connect?: PostWhereUniqueInput
  }

  export type MediaCreateNestedOneWithoutPostsInput = {
    create?: XOR<MediaCreateWithoutPostsInput, MediaUncheckedCreateWithoutPostsInput>
    connectOrCreate?: MediaCreateOrConnectWithoutPostsInput
    connect?: MediaWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutMediaNestedInput = {
    create?: XOR<PostCreateWithoutMediaInput, PostUncheckedCreateWithoutMediaInput>
    connectOrCreate?: PostCreateOrConnectWithoutMediaInput
    upsert?: PostUpsertWithoutMediaInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutMediaInput, PostUpdateWithoutMediaInput>, PostUncheckedUpdateWithoutMediaInput>
  }

  export type MediaUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<MediaCreateWithoutPostsInput, MediaUncheckedCreateWithoutPostsInput>
    connectOrCreate?: MediaCreateOrConnectWithoutPostsInput
    upsert?: MediaUpsertWithoutPostsInput
    connect?: MediaWhereUniqueInput
    update?: XOR<XOR<MediaUpdateToOneWithWhereWithoutPostsInput, MediaUpdateWithoutPostsInput>, MediaUncheckedUpdateWithoutPostsInput>
  }

  export type PostCreateNestedOneWithoutViewLogsInput = {
    create?: XOR<PostCreateWithoutViewLogsInput, PostUncheckedCreateWithoutViewLogsInput>
    connectOrCreate?: PostCreateOrConnectWithoutViewLogsInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutViewLogsNestedInput = {
    create?: XOR<PostCreateWithoutViewLogsInput, PostUncheckedCreateWithoutViewLogsInput>
    connectOrCreate?: PostCreateOrConnectWithoutViewLogsInput
    upsert?: PostUpsertWithoutViewLogsInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutViewLogsInput, PostUpdateWithoutViewLogsInput>, PostUncheckedUpdateWithoutViewLogsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumMagazineStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MagazineStatus | EnumMagazineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MagazineStatus[]
    notIn?: $Enums.MagazineStatus[]
    not?: NestedEnumMagazineStatusFilter<$PrismaModel> | $Enums.MagazineStatus
  }

  export type NestedEnumMagazineStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MagazineStatus | EnumMagazineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MagazineStatus[]
    notIn?: $Enums.MagazineStatus[]
    not?: NestedEnumMagazineStatusWithAggregatesFilter<$PrismaModel> | $Enums.MagazineStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMagazineStatusFilter<$PrismaModel>
    _max?: NestedEnumMagazineStatusFilter<$PrismaModel>
  }

  export type NestedEnumPostTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[]
    notIn?: $Enums.PostType[]
    not?: NestedEnumPostTypeFilter<$PrismaModel> | $Enums.PostType
  }

  export type NestedEnumPostStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[]
    notIn?: $Enums.PostStatus[]
    not?: NestedEnumPostStatusFilter<$PrismaModel> | $Enums.PostStatus
  }

  export type NestedEnumPostVisibilityFilter<$PrismaModel = never> = {
    equals?: $Enums.PostVisibility | EnumPostVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.PostVisibility[]
    notIn?: $Enums.PostVisibility[]
    not?: NestedEnumPostVisibilityFilter<$PrismaModel> | $Enums.PostVisibility
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPostTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostType | EnumPostTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PostType[]
    notIn?: $Enums.PostType[]
    not?: NestedEnumPostTypeWithAggregatesFilter<$PrismaModel> | $Enums.PostType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostTypeFilter<$PrismaModel>
    _max?: NestedEnumPostTypeFilter<$PrismaModel>
  }

  export type NestedEnumPostStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostStatus | EnumPostStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PostStatus[]
    notIn?: $Enums.PostStatus[]
    not?: NestedEnumPostStatusWithAggregatesFilter<$PrismaModel> | $Enums.PostStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostStatusFilter<$PrismaModel>
    _max?: NestedEnumPostStatusFilter<$PrismaModel>
  }

  export type NestedEnumPostVisibilityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostVisibility | EnumPostVisibilityFieldRefInput<$PrismaModel>
    in?: $Enums.PostVisibility[]
    notIn?: $Enums.PostVisibility[]
    not?: NestedEnumPostVisibilityWithAggregatesFilter<$PrismaModel> | $Enums.PostVisibility
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPostVisibilityFilter<$PrismaModel>
    _max?: NestedEnumPostVisibilityFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumCommentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatus | EnumCommentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatus[]
    notIn?: $Enums.CommentStatus[]
    not?: NestedEnumCommentStatusFilter<$PrismaModel> | $Enums.CommentStatus
  }

  export type NestedEnumCommentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommentStatus | EnumCommentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommentStatus[]
    notIn?: $Enums.CommentStatus[]
    not?: NestedEnumCommentStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommentStatusFilter<$PrismaModel>
    _max?: NestedEnumCommentStatusFilter<$PrismaModel>
  }

  export type NestedEnumMediaTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[]
    notIn?: $Enums.MediaType[]
    not?: NestedEnumMediaTypeFilter<$PrismaModel> | $Enums.MediaType
  }

  export type NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MediaType | EnumMediaTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MediaType[]
    notIn?: $Enums.MediaType[]
    not?: NestedEnumMediaTypeWithAggregatesFilter<$PrismaModel> | $Enums.MediaType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMediaTypeFilter<$PrismaModel>
    _max?: NestedEnumMediaTypeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type?: string | null
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type?: string | null
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    magazine?: MagazineCreateNestedOneWithoutPostsInput
    category?: CategoryCreateNestedOneWithoutPostsInput
    tags?: PostTagsCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    revisions?: RevisionCreateNestedManyWithoutPostInput
    media?: PostMediaCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    magazineId?: string | null
    categoryId?: string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PostTagsUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutPostInput
    media?: PostMediaUncheckedCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    content: string
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutChildrenInput
    children?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    postId: string
    content: string
    parentId?: string | null
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type RevisionCreateWithoutAuthorInput = {
    id?: string
    content: string
    title?: string | null
    createdAt?: Date | string
    post: PostCreateNestedOneWithoutRevisionsInput
  }

  export type RevisionUncheckedCreateWithoutAuthorInput = {
    id?: string
    postId: string
    content: string
    title?: string | null
    createdAt?: Date | string
  }

  export type RevisionCreateOrConnectWithoutAuthorInput = {
    where: RevisionWhereUniqueInput
    create: XOR<RevisionCreateWithoutAuthorInput, RevisionUncheckedCreateWithoutAuthorInput>
  }

  export type RevisionCreateManyAuthorInputEnvelope = {
    data: RevisionCreateManyAuthorInput | RevisionCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type MediaCreateWithoutUploadedByInput = {
    id?: string
    url: string
    altText?: string | null
    caption?: string | null
    type: $Enums.MediaType
    createdAt?: Date | string
    posts?: PostMediaCreateNestedManyWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutUploadedByInput = {
    id?: string
    url: string
    altText?: string | null
    caption?: string | null
    type: $Enums.MediaType
    createdAt?: Date | string
    posts?: PostMediaUncheckedCreateNestedManyWithoutMediaInput
  }

  export type MediaCreateOrConnectWithoutUploadedByInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutUploadedByInput, MediaUncheckedCreateWithoutUploadedByInput>
  }

  export type MediaCreateManyUploadedByInputEnvelope = {
    data: MediaCreateManyUploadedByInput | MediaCreateManyUploadedByInput[]
    skipDuplicates?: boolean
  }

  export type MagazineCreateWithoutEditorInput = {
    id?: string
    title?: string | null
    slug: string
    description?: string | null
    coverImageUrl?: string | null
    issueNumber?: number | null
    publishedAt?: Date | string | null
    status?: $Enums.MagazineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostCreateNestedManyWithoutMagazineInput
  }

  export type MagazineUncheckedCreateWithoutEditorInput = {
    id?: string
    title?: string | null
    slug: string
    description?: string | null
    coverImageUrl?: string | null
    issueNumber?: number | null
    publishedAt?: Date | string | null
    status?: $Enums.MagazineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    posts?: PostUncheckedCreateNestedManyWithoutMagazineInput
  }

  export type MagazineCreateOrConnectWithoutEditorInput = {
    where: MagazineWhereUniqueInput
    create: XOR<MagazineCreateWithoutEditorInput, MagazineUncheckedCreateWithoutEditorInput>
  }

  export type MagazineCreateManyEditorInputEnvelope = {
    data: MagazineCreateManyEditorInput | MagazineCreateManyEditorInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringNullableFilter<"Account"> | string | null
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    slug?: StringFilter<"Post"> | string
    excerpt?: StringNullableFilter<"Post"> | string | null
    content?: StringFilter<"Post"> | string
    readMinutes?: IntNullableFilter<"Post"> | number | null
    type?: EnumPostTypeFilter<"Post"> | $Enums.PostType
    coverImageUrl?: StringNullableFilter<"Post"> | string | null
    status?: EnumPostStatusFilter<"Post"> | $Enums.PostStatus
    visibility?: EnumPostVisibilityFilter<"Post"> | $Enums.PostVisibility
    isFeatured?: BoolFilter<"Post"> | boolean
    scheduledAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    publishedAt?: DateTimeNullableFilter<"Post"> | Date | string | null
    authorId?: StringFilter<"Post"> | string
    magazineId?: StringNullableFilter<"Post"> | string | null
    categoryId?: StringNullableFilter<"Post"> | string | null
    views?: IntFilter<"Post"> | number
    likes?: IntFilter<"Post"> | number
    metaTitle?: StringNullableFilter<"Post"> | string | null
    metaDescription?: StringNullableFilter<"Post"> | string | null
    metaKeywords?: StringNullableFilter<"Post"> | string | null
    slugHistory?: JsonNullableFilter<"Post">
    seoSchema?: JsonNullableFilter<"Post">
    settings?: JsonNullableFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    postId?: StringFilter<"Comment"> | string
    authorId?: StringNullableFilter<"Comment"> | string | null
    content?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    status?: EnumCommentStatusFilter<"Comment"> | $Enums.CommentStatus
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type RevisionUpsertWithWhereUniqueWithoutAuthorInput = {
    where: RevisionWhereUniqueInput
    update: XOR<RevisionUpdateWithoutAuthorInput, RevisionUncheckedUpdateWithoutAuthorInput>
    create: XOR<RevisionCreateWithoutAuthorInput, RevisionUncheckedCreateWithoutAuthorInput>
  }

  export type RevisionUpdateWithWhereUniqueWithoutAuthorInput = {
    where: RevisionWhereUniqueInput
    data: XOR<RevisionUpdateWithoutAuthorInput, RevisionUncheckedUpdateWithoutAuthorInput>
  }

  export type RevisionUpdateManyWithWhereWithoutAuthorInput = {
    where: RevisionScalarWhereInput
    data: XOR<RevisionUpdateManyMutationInput, RevisionUncheckedUpdateManyWithoutAuthorInput>
  }

  export type RevisionScalarWhereInput = {
    AND?: RevisionScalarWhereInput | RevisionScalarWhereInput[]
    OR?: RevisionScalarWhereInput[]
    NOT?: RevisionScalarWhereInput | RevisionScalarWhereInput[]
    id?: StringFilter<"Revision"> | string
    postId?: StringFilter<"Revision"> | string
    authorId?: StringFilter<"Revision"> | string
    content?: StringFilter<"Revision"> | string
    title?: StringNullableFilter<"Revision"> | string | null
    createdAt?: DateTimeFilter<"Revision"> | Date | string
  }

  export type MediaUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: MediaWhereUniqueInput
    update: XOR<MediaUpdateWithoutUploadedByInput, MediaUncheckedUpdateWithoutUploadedByInput>
    create: XOR<MediaCreateWithoutUploadedByInput, MediaUncheckedCreateWithoutUploadedByInput>
  }

  export type MediaUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: MediaWhereUniqueInput
    data: XOR<MediaUpdateWithoutUploadedByInput, MediaUncheckedUpdateWithoutUploadedByInput>
  }

  export type MediaUpdateManyWithWhereWithoutUploadedByInput = {
    where: MediaScalarWhereInput
    data: XOR<MediaUpdateManyMutationInput, MediaUncheckedUpdateManyWithoutUploadedByInput>
  }

  export type MediaScalarWhereInput = {
    AND?: MediaScalarWhereInput | MediaScalarWhereInput[]
    OR?: MediaScalarWhereInput[]
    NOT?: MediaScalarWhereInput | MediaScalarWhereInput[]
    id?: StringFilter<"Media"> | string
    url?: StringFilter<"Media"> | string
    altText?: StringNullableFilter<"Media"> | string | null
    caption?: StringNullableFilter<"Media"> | string | null
    type?: EnumMediaTypeFilter<"Media"> | $Enums.MediaType
    uploadedById?: StringNullableFilter<"Media"> | string | null
    createdAt?: DateTimeFilter<"Media"> | Date | string
  }

  export type MagazineUpsertWithWhereUniqueWithoutEditorInput = {
    where: MagazineWhereUniqueInput
    update: XOR<MagazineUpdateWithoutEditorInput, MagazineUncheckedUpdateWithoutEditorInput>
    create: XOR<MagazineCreateWithoutEditorInput, MagazineUncheckedCreateWithoutEditorInput>
  }

  export type MagazineUpdateWithWhereUniqueWithoutEditorInput = {
    where: MagazineWhereUniqueInput
    data: XOR<MagazineUpdateWithoutEditorInput, MagazineUncheckedUpdateWithoutEditorInput>
  }

  export type MagazineUpdateManyWithWhereWithoutEditorInput = {
    where: MagazineScalarWhereInput
    data: XOR<MagazineUpdateManyMutationInput, MagazineUncheckedUpdateManyWithoutEditorInput>
  }

  export type MagazineScalarWhereInput = {
    AND?: MagazineScalarWhereInput | MagazineScalarWhereInput[]
    OR?: MagazineScalarWhereInput[]
    NOT?: MagazineScalarWhereInput | MagazineScalarWhereInput[]
    id?: StringFilter<"Magazine"> | string
    title?: StringNullableFilter<"Magazine"> | string | null
    slug?: StringFilter<"Magazine"> | string
    description?: StringNullableFilter<"Magazine"> | string | null
    coverImageUrl?: StringNullableFilter<"Magazine"> | string | null
    issueNumber?: IntNullableFilter<"Magazine"> | number | null
    publishedAt?: DateTimeNullableFilter<"Magazine"> | Date | string | null
    status?: EnumMagazineStatusFilter<"Magazine"> | $Enums.MagazineStatus
    editorId?: StringNullableFilter<"Magazine"> | string | null
    createdAt?: DateTimeFilter<"Magazine"> | Date | string
    updatedAt?: DateTimeFilter<"Magazine"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    revisions?: RevisionCreateNestedManyWithoutAuthorInput
    media?: MediaCreateNestedManyWithoutUploadedByInput
    editedMagazines?: MagazineCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutAuthorInput
    media?: MediaUncheckedCreateNestedManyWithoutUploadedByInput
    editedMagazines?: MagazineUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUpdateManyWithoutAuthorNestedInput
    media?: MediaUpdateManyWithoutUploadedByNestedInput
    editedMagazines?: MagazineUpdateManyWithoutEditorNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutAuthorNestedInput
    media?: MediaUncheckedUpdateManyWithoutUploadedByNestedInput
    editedMagazines?: MagazineUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    revisions?: RevisionCreateNestedManyWithoutAuthorInput
    media?: MediaCreateNestedManyWithoutUploadedByInput
    editedMagazines?: MagazineCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutAuthorInput
    media?: MediaUncheckedCreateNestedManyWithoutUploadedByInput
    editedMagazines?: MagazineUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUpdateManyWithoutAuthorNestedInput
    media?: MediaUpdateManyWithoutUploadedByNestedInput
    editedMagazines?: MagazineUpdateManyWithoutEditorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutAuthorNestedInput
    media?: MediaUncheckedUpdateManyWithoutUploadedByNestedInput
    editedMagazines?: MagazineUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type CategoryCreateWithoutChildrenInput = {
    id?: string
    name: string
    slug: string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    posts?: PostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    slug: string
    parentId?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutChildrenInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type CategoryCreateWithoutParentInput = {
    id?: string
    name: string
    slug: string
    children?: CategoryCreateNestedManyWithoutParentInput
    posts?: PostCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    slug: string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    posts?: PostUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    magazine?: MagazineCreateNestedOneWithoutPostsInput
    tags?: PostTagsCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    revisions?: RevisionCreateNestedManyWithoutPostInput
    media?: PostMediaCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    authorId: string
    magazineId?: string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PostTagsUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutPostInput
    media?: PostMediaUncheckedCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCategoryInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
  }

  export type PostCreateManyCategoryInputEnvelope = {
    data: PostCreateManyCategoryInput | PostCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutChildrenInput = {
    update: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    posts?: PostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    parentId?: StringNullableFilter<"Category"> | string | null
  }

  export type PostUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCategoryInput, PostUncheckedUpdateWithoutCategoryInput>
    create: XOR<PostCreateWithoutCategoryInput, PostUncheckedCreateWithoutCategoryInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCategoryInput, PostUncheckedUpdateWithoutCategoryInput>
  }

  export type PostUpdateManyWithWhereWithoutCategoryInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PostTagsCreateWithoutTagInput = {
    post: PostCreateNestedOneWithoutTagsInput
  }

  export type PostTagsUncheckedCreateWithoutTagInput = {
    postId: string
  }

  export type PostTagsCreateOrConnectWithoutTagInput = {
    where: PostTagsWhereUniqueInput
    create: XOR<PostTagsCreateWithoutTagInput, PostTagsUncheckedCreateWithoutTagInput>
  }

  export type PostTagsCreateManyTagInputEnvelope = {
    data: PostTagsCreateManyTagInput | PostTagsCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type PostTagsUpsertWithWhereUniqueWithoutTagInput = {
    where: PostTagsWhereUniqueInput
    update: XOR<PostTagsUpdateWithoutTagInput, PostTagsUncheckedUpdateWithoutTagInput>
    create: XOR<PostTagsCreateWithoutTagInput, PostTagsUncheckedCreateWithoutTagInput>
  }

  export type PostTagsUpdateWithWhereUniqueWithoutTagInput = {
    where: PostTagsWhereUniqueInput
    data: XOR<PostTagsUpdateWithoutTagInput, PostTagsUncheckedUpdateWithoutTagInput>
  }

  export type PostTagsUpdateManyWithWhereWithoutTagInput = {
    where: PostTagsScalarWhereInput
    data: XOR<PostTagsUpdateManyMutationInput, PostTagsUncheckedUpdateManyWithoutTagInput>
  }

  export type PostTagsScalarWhereInput = {
    AND?: PostTagsScalarWhereInput | PostTagsScalarWhereInput[]
    OR?: PostTagsScalarWhereInput[]
    NOT?: PostTagsScalarWhereInput | PostTagsScalarWhereInput[]
    postId?: StringFilter<"PostTags"> | string
    tagId?: StringFilter<"PostTags"> | string
  }

  export type UserCreateWithoutEditedMagazinesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    revisions?: RevisionCreateNestedManyWithoutAuthorInput
    media?: MediaCreateNestedManyWithoutUploadedByInput
  }

  export type UserUncheckedCreateWithoutEditedMagazinesInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutAuthorInput
    media?: MediaUncheckedCreateNestedManyWithoutUploadedByInput
  }

  export type UserCreateOrConnectWithoutEditedMagazinesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEditedMagazinesInput, UserUncheckedCreateWithoutEditedMagazinesInput>
  }

  export type PostCreateWithoutMagazineInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    category?: CategoryCreateNestedOneWithoutPostsInput
    tags?: PostTagsCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    revisions?: RevisionCreateNestedManyWithoutPostInput
    media?: PostMediaCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutMagazineInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    authorId: string
    categoryId?: string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PostTagsUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutPostInput
    media?: PostMediaUncheckedCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutMagazineInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutMagazineInput, PostUncheckedCreateWithoutMagazineInput>
  }

  export type PostCreateManyMagazineInputEnvelope = {
    data: PostCreateManyMagazineInput | PostCreateManyMagazineInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEditedMagazinesInput = {
    update: XOR<UserUpdateWithoutEditedMagazinesInput, UserUncheckedUpdateWithoutEditedMagazinesInput>
    create: XOR<UserCreateWithoutEditedMagazinesInput, UserUncheckedCreateWithoutEditedMagazinesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEditedMagazinesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEditedMagazinesInput, UserUncheckedUpdateWithoutEditedMagazinesInput>
  }

  export type UserUpdateWithoutEditedMagazinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUpdateManyWithoutAuthorNestedInput
    media?: MediaUpdateManyWithoutUploadedByNestedInput
  }

  export type UserUncheckedUpdateWithoutEditedMagazinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutAuthorNestedInput
    media?: MediaUncheckedUpdateManyWithoutUploadedByNestedInput
  }

  export type PostUpsertWithWhereUniqueWithoutMagazineInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutMagazineInput, PostUncheckedUpdateWithoutMagazineInput>
    create: XOR<PostCreateWithoutMagazineInput, PostUncheckedCreateWithoutMagazineInput>
  }

  export type PostUpdateWithWhereUniqueWithoutMagazineInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutMagazineInput, PostUncheckedUpdateWithoutMagazineInput>
  }

  export type PostUpdateManyWithWhereWithoutMagazineInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutMagazineInput>
  }

  export type UserCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    revisions?: RevisionCreateNestedManyWithoutAuthorInput
    media?: MediaCreateNestedManyWithoutUploadedByInput
    editedMagazines?: MagazineCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutAuthorInput
    media?: MediaUncheckedCreateNestedManyWithoutUploadedByInput
    editedMagazines?: MagazineUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type MagazineCreateWithoutPostsInput = {
    id?: string
    title?: string | null
    slug: string
    description?: string | null
    coverImageUrl?: string | null
    issueNumber?: number | null
    publishedAt?: Date | string | null
    status?: $Enums.MagazineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    editor?: UserCreateNestedOneWithoutEditedMagazinesInput
  }

  export type MagazineUncheckedCreateWithoutPostsInput = {
    id?: string
    title?: string | null
    slug: string
    description?: string | null
    coverImageUrl?: string | null
    issueNumber?: number | null
    publishedAt?: Date | string | null
    status?: $Enums.MagazineStatus
    editorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MagazineCreateOrConnectWithoutPostsInput = {
    where: MagazineWhereUniqueInput
    create: XOR<MagazineCreateWithoutPostsInput, MagazineUncheckedCreateWithoutPostsInput>
  }

  export type CategoryCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
  }

  export type CategoryUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
    parentId?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutPostsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
  }

  export type PostTagsCreateWithoutPostInput = {
    tag: TagCreateNestedOneWithoutPostsInput
  }

  export type PostTagsUncheckedCreateWithoutPostInput = {
    tagId: string
  }

  export type PostTagsCreateOrConnectWithoutPostInput = {
    where: PostTagsWhereUniqueInput
    create: XOR<PostTagsCreateWithoutPostInput, PostTagsUncheckedCreateWithoutPostInput>
  }

  export type PostTagsCreateManyPostInputEnvelope = {
    data: PostTagsCreateManyPostInput | PostTagsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutPostInput = {
    id?: string
    content: string
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    author?: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutChildrenInput
    children?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutPostInput = {
    id?: string
    authorId?: string | null
    content: string
    parentId?: string | null
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutPostInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentCreateManyPostInputEnvelope = {
    data: CommentCreateManyPostInput | CommentCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type RevisionCreateWithoutPostInput = {
    id?: string
    content: string
    title?: string | null
    createdAt?: Date | string
    author: UserCreateNestedOneWithoutRevisionsInput
  }

  export type RevisionUncheckedCreateWithoutPostInput = {
    id?: string
    authorId: string
    content: string
    title?: string | null
    createdAt?: Date | string
  }

  export type RevisionCreateOrConnectWithoutPostInput = {
    where: RevisionWhereUniqueInput
    create: XOR<RevisionCreateWithoutPostInput, RevisionUncheckedCreateWithoutPostInput>
  }

  export type RevisionCreateManyPostInputEnvelope = {
    data: RevisionCreateManyPostInput | RevisionCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type PostMediaCreateWithoutPostInput = {
    media: MediaCreateNestedOneWithoutPostsInput
  }

  export type PostMediaUncheckedCreateWithoutPostInput = {
    mediaId: string
  }

  export type PostMediaCreateOrConnectWithoutPostInput = {
    where: PostMediaWhereUniqueInput
    create: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput>
  }

  export type PostMediaCreateManyPostInputEnvelope = {
    data: PostMediaCreateManyPostInput | PostMediaCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type ViewLogCreateWithoutPostInput = {
    id?: string
    viewerIp?: string | null
    userAgent?: string | null
    viewedAt?: Date | string
  }

  export type ViewLogUncheckedCreateWithoutPostInput = {
    id?: string
    viewerIp?: string | null
    userAgent?: string | null
    viewedAt?: Date | string
  }

  export type ViewLogCreateOrConnectWithoutPostInput = {
    where: ViewLogWhereUniqueInput
    create: XOR<ViewLogCreateWithoutPostInput, ViewLogUncheckedCreateWithoutPostInput>
  }

  export type ViewLogCreateManyPostInputEnvelope = {
    data: ViewLogCreateManyPostInput | ViewLogCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUpdateManyWithoutAuthorNestedInput
    media?: MediaUpdateManyWithoutUploadedByNestedInput
    editedMagazines?: MagazineUpdateManyWithoutEditorNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutAuthorNestedInput
    media?: MediaUncheckedUpdateManyWithoutUploadedByNestedInput
    editedMagazines?: MagazineUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type MagazineUpsertWithoutPostsInput = {
    update: XOR<MagazineUpdateWithoutPostsInput, MagazineUncheckedUpdateWithoutPostsInput>
    create: XOR<MagazineCreateWithoutPostsInput, MagazineUncheckedCreateWithoutPostsInput>
    where?: MagazineWhereInput
  }

  export type MagazineUpdateToOneWithWhereWithoutPostsInput = {
    where?: MagazineWhereInput
    data: XOR<MagazineUpdateWithoutPostsInput, MagazineUncheckedUpdateWithoutPostsInput>
  }

  export type MagazineUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMagazineStatusFieldUpdateOperationsInput | $Enums.MagazineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editor?: UserUpdateOneWithoutEditedMagazinesNestedInput
  }

  export type MagazineUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMagazineStatusFieldUpdateOperationsInput | $Enums.MagazineStatus
    editorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutPostsInput = {
    update: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
    create: XOR<CategoryCreateWithoutPostsInput, CategoryUncheckedCreateWithoutPostsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutPostsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutPostsInput, CategoryUncheckedUpdateWithoutPostsInput>
  }

  export type CategoryUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
  }

  export type CategoryUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type PostTagsUpsertWithWhereUniqueWithoutPostInput = {
    where: PostTagsWhereUniqueInput
    update: XOR<PostTagsUpdateWithoutPostInput, PostTagsUncheckedUpdateWithoutPostInput>
    create: XOR<PostTagsCreateWithoutPostInput, PostTagsUncheckedCreateWithoutPostInput>
  }

  export type PostTagsUpdateWithWhereUniqueWithoutPostInput = {
    where: PostTagsWhereUniqueInput
    data: XOR<PostTagsUpdateWithoutPostInput, PostTagsUncheckedUpdateWithoutPostInput>
  }

  export type PostTagsUpdateManyWithWhereWithoutPostInput = {
    where: PostTagsScalarWhereInput
    data: XOR<PostTagsUpdateManyMutationInput, PostTagsUncheckedUpdateManyWithoutPostInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
    create: XOR<CommentCreateWithoutPostInput, CommentUncheckedCreateWithoutPostInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutPostInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutPostInput, CommentUncheckedUpdateWithoutPostInput>
  }

  export type CommentUpdateManyWithWhereWithoutPostInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutPostInput>
  }

  export type RevisionUpsertWithWhereUniqueWithoutPostInput = {
    where: RevisionWhereUniqueInput
    update: XOR<RevisionUpdateWithoutPostInput, RevisionUncheckedUpdateWithoutPostInput>
    create: XOR<RevisionCreateWithoutPostInput, RevisionUncheckedCreateWithoutPostInput>
  }

  export type RevisionUpdateWithWhereUniqueWithoutPostInput = {
    where: RevisionWhereUniqueInput
    data: XOR<RevisionUpdateWithoutPostInput, RevisionUncheckedUpdateWithoutPostInput>
  }

  export type RevisionUpdateManyWithWhereWithoutPostInput = {
    where: RevisionScalarWhereInput
    data: XOR<RevisionUpdateManyMutationInput, RevisionUncheckedUpdateManyWithoutPostInput>
  }

  export type PostMediaUpsertWithWhereUniqueWithoutPostInput = {
    where: PostMediaWhereUniqueInput
    update: XOR<PostMediaUpdateWithoutPostInput, PostMediaUncheckedUpdateWithoutPostInput>
    create: XOR<PostMediaCreateWithoutPostInput, PostMediaUncheckedCreateWithoutPostInput>
  }

  export type PostMediaUpdateWithWhereUniqueWithoutPostInput = {
    where: PostMediaWhereUniqueInput
    data: XOR<PostMediaUpdateWithoutPostInput, PostMediaUncheckedUpdateWithoutPostInput>
  }

  export type PostMediaUpdateManyWithWhereWithoutPostInput = {
    where: PostMediaScalarWhereInput
    data: XOR<PostMediaUpdateManyMutationInput, PostMediaUncheckedUpdateManyWithoutPostInput>
  }

  export type PostMediaScalarWhereInput = {
    AND?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
    OR?: PostMediaScalarWhereInput[]
    NOT?: PostMediaScalarWhereInput | PostMediaScalarWhereInput[]
    postId?: StringFilter<"PostMedia"> | string
    mediaId?: StringFilter<"PostMedia"> | string
  }

  export type ViewLogUpsertWithWhereUniqueWithoutPostInput = {
    where: ViewLogWhereUniqueInput
    update: XOR<ViewLogUpdateWithoutPostInput, ViewLogUncheckedUpdateWithoutPostInput>
    create: XOR<ViewLogCreateWithoutPostInput, ViewLogUncheckedCreateWithoutPostInput>
  }

  export type ViewLogUpdateWithWhereUniqueWithoutPostInput = {
    where: ViewLogWhereUniqueInput
    data: XOR<ViewLogUpdateWithoutPostInput, ViewLogUncheckedUpdateWithoutPostInput>
  }

  export type ViewLogUpdateManyWithWhereWithoutPostInput = {
    where: ViewLogScalarWhereInput
    data: XOR<ViewLogUpdateManyMutationInput, ViewLogUncheckedUpdateManyWithoutPostInput>
  }

  export type ViewLogScalarWhereInput = {
    AND?: ViewLogScalarWhereInput | ViewLogScalarWhereInput[]
    OR?: ViewLogScalarWhereInput[]
    NOT?: ViewLogScalarWhereInput | ViewLogScalarWhereInput[]
    id?: StringFilter<"ViewLog"> | string
    postId?: StringFilter<"ViewLog"> | string
    viewerIp?: StringNullableFilter<"ViewLog"> | string | null
    userAgent?: StringNullableFilter<"ViewLog"> | string | null
    viewedAt?: DateTimeFilter<"ViewLog"> | Date | string
  }

  export type PostCreateWithoutTagsInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    magazine?: MagazineCreateNestedOneWithoutPostsInput
    category?: CategoryCreateNestedOneWithoutPostsInput
    comments?: CommentCreateNestedManyWithoutPostInput
    revisions?: RevisionCreateNestedManyWithoutPostInput
    media?: PostMediaCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    authorId: string
    magazineId?: string | null
    categoryId?: string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutPostInput
    media?: PostMediaUncheckedCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutTagsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
  }

  export type TagUncheckedCreateWithoutPostsInput = {
    id?: string
    name: string
    slug: string
  }

  export type TagCreateOrConnectWithoutPostsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
  }

  export type PostUpsertWithoutTagsInput = {
    update: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
    create: XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutTagsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>
  }

  export type PostUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    magazine?: MagazineUpdateOneWithoutPostsNestedInput
    category?: CategoryUpdateOneWithoutPostsNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    revisions?: RevisionUpdateManyWithoutPostNestedInput
    media?: PostMediaUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutPostNestedInput
    media?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPostNestedInput
  }

  export type TagUpsertWithoutPostsInput = {
    update: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
    create: XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutPostsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>
  }

  export type TagUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateWithoutCommentsInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    magazine?: MagazineCreateNestedOneWithoutPostsInput
    category?: CategoryCreateNestedOneWithoutPostsInput
    tags?: PostTagsCreateNestedManyWithoutPostInput
    revisions?: RevisionCreateNestedManyWithoutPostInput
    media?: PostMediaCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutCommentsInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    authorId: string
    magazineId?: string | null
    categoryId?: string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PostTagsUncheckedCreateNestedManyWithoutPostInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutPostInput
    media?: PostMediaUncheckedCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutCommentsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    revisions?: RevisionCreateNestedManyWithoutAuthorInput
    media?: MediaCreateNestedManyWithoutUploadedByInput
    editedMagazines?: MagazineCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutAuthorInput
    media?: MediaUncheckedCreateNestedManyWithoutUploadedByInput
    editedMagazines?: MagazineUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutChildrenInput = {
    id?: string
    content: string
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    author?: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutChildrenInput
  }

  export type CommentUncheckedCreateWithoutChildrenInput = {
    id?: string
    postId: string
    authorId?: string | null
    content: string
    parentId?: string | null
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutChildrenInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutChildrenInput, CommentUncheckedCreateWithoutChildrenInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    content: string
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutCommentsInput
    author?: UserCreateNestedOneWithoutCommentsInput
    children?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    postId: string
    authorId?: string | null
    content: string
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithoutCommentsInput = {
    update: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
    create: XOR<PostCreateWithoutCommentsInput, PostUncheckedCreateWithoutCommentsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutCommentsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutCommentsInput, PostUncheckedUpdateWithoutCommentsInput>
  }

  export type PostUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    magazine?: MagazineUpdateOneWithoutPostsNestedInput
    category?: CategoryUpdateOneWithoutPostsNestedInput
    tags?: PostTagsUpdateManyWithoutPostNestedInput
    revisions?: RevisionUpdateManyWithoutPostNestedInput
    media?: PostMediaUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PostTagsUncheckedUpdateManyWithoutPostNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutPostNestedInput
    media?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUpdateManyWithoutAuthorNestedInput
    media?: MediaUpdateManyWithoutUploadedByNestedInput
    editedMagazines?: MagazineUpdateManyWithoutEditorNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutAuthorNestedInput
    media?: MediaUncheckedUpdateManyWithoutUploadedByNestedInput
    editedMagazines?: MagazineUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type CommentUpsertWithoutChildrenInput = {
    update: XOR<CommentUpdateWithoutChildrenInput, CommentUncheckedUpdateWithoutChildrenInput>
    create: XOR<CommentCreateWithoutChildrenInput, CommentUncheckedCreateWithoutChildrenInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutChildrenInput, CommentUncheckedUpdateWithoutChildrenInput>
  }

  export type CommentUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    author?: UserUpdateOneWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutChildrenNestedInput
  }

  export type CommentUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type PostCreateWithoutRevisionsInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    magazine?: MagazineCreateNestedOneWithoutPostsInput
    category?: CategoryCreateNestedOneWithoutPostsInput
    tags?: PostTagsCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    media?: PostMediaCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutRevisionsInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    authorId: string
    magazineId?: string | null
    categoryId?: string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PostTagsUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    media?: PostMediaUncheckedCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutRevisionsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutRevisionsInput, PostUncheckedCreateWithoutRevisionsInput>
  }

  export type UserCreateWithoutRevisionsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    media?: MediaCreateNestedManyWithoutUploadedByInput
    editedMagazines?: MagazineCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateWithoutRevisionsInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    media?: MediaUncheckedCreateNestedManyWithoutUploadedByInput
    editedMagazines?: MagazineUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserCreateOrConnectWithoutRevisionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRevisionsInput, UserUncheckedCreateWithoutRevisionsInput>
  }

  export type PostUpsertWithoutRevisionsInput = {
    update: XOR<PostUpdateWithoutRevisionsInput, PostUncheckedUpdateWithoutRevisionsInput>
    create: XOR<PostCreateWithoutRevisionsInput, PostUncheckedCreateWithoutRevisionsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutRevisionsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutRevisionsInput, PostUncheckedUpdateWithoutRevisionsInput>
  }

  export type PostUpdateWithoutRevisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    magazine?: MagazineUpdateOneWithoutPostsNestedInput
    category?: CategoryUpdateOneWithoutPostsNestedInput
    tags?: PostTagsUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    media?: PostMediaUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutRevisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PostTagsUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    media?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPostNestedInput
  }

  export type UserUpsertWithoutRevisionsInput = {
    update: XOR<UserUpdateWithoutRevisionsInput, UserUncheckedUpdateWithoutRevisionsInput>
    create: XOR<UserCreateWithoutRevisionsInput, UserUncheckedCreateWithoutRevisionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRevisionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRevisionsInput, UserUncheckedUpdateWithoutRevisionsInput>
  }

  export type UserUpdateWithoutRevisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    media?: MediaUpdateManyWithoutUploadedByNestedInput
    editedMagazines?: MagazineUpdateManyWithoutEditorNestedInput
  }

  export type UserUncheckedUpdateWithoutRevisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    media?: MediaUncheckedUpdateManyWithoutUploadedByNestedInput
    editedMagazines?: MagazineUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type UserCreateWithoutMediaInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    revisions?: RevisionCreateNestedManyWithoutAuthorInput
    editedMagazines?: MagazineCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateWithoutMediaInput = {
    id?: string
    name?: string | null
    username?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    role?: $Enums.UserRole
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutAuthorInput
    editedMagazines?: MagazineUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserCreateOrConnectWithoutMediaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
  }

  export type PostMediaCreateWithoutMediaInput = {
    post: PostCreateNestedOneWithoutMediaInput
  }

  export type PostMediaUncheckedCreateWithoutMediaInput = {
    postId: string
  }

  export type PostMediaCreateOrConnectWithoutMediaInput = {
    where: PostMediaWhereUniqueInput
    create: XOR<PostMediaCreateWithoutMediaInput, PostMediaUncheckedCreateWithoutMediaInput>
  }

  export type PostMediaCreateManyMediaInputEnvelope = {
    data: PostMediaCreateManyMediaInput | PostMediaCreateManyMediaInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMediaInput = {
    update: XOR<UserUpdateWithoutMediaInput, UserUncheckedUpdateWithoutMediaInput>
    create: XOR<UserCreateWithoutMediaInput, UserUncheckedCreateWithoutMediaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMediaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMediaInput, UserUncheckedUpdateWithoutMediaInput>
  }

  export type UserUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUpdateManyWithoutAuthorNestedInput
    editedMagazines?: MagazineUpdateManyWithoutEditorNestedInput
  }

  export type UserUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutAuthorNestedInput
    editedMagazines?: MagazineUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type PostMediaUpsertWithWhereUniqueWithoutMediaInput = {
    where: PostMediaWhereUniqueInput
    update: XOR<PostMediaUpdateWithoutMediaInput, PostMediaUncheckedUpdateWithoutMediaInput>
    create: XOR<PostMediaCreateWithoutMediaInput, PostMediaUncheckedCreateWithoutMediaInput>
  }

  export type PostMediaUpdateWithWhereUniqueWithoutMediaInput = {
    where: PostMediaWhereUniqueInput
    data: XOR<PostMediaUpdateWithoutMediaInput, PostMediaUncheckedUpdateWithoutMediaInput>
  }

  export type PostMediaUpdateManyWithWhereWithoutMediaInput = {
    where: PostMediaScalarWhereInput
    data: XOR<PostMediaUpdateManyMutationInput, PostMediaUncheckedUpdateManyWithoutMediaInput>
  }

  export type PostCreateWithoutMediaInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    magazine?: MagazineCreateNestedOneWithoutPostsInput
    category?: CategoryCreateNestedOneWithoutPostsInput
    tags?: PostTagsCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    revisions?: RevisionCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutMediaInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    authorId: string
    magazineId?: string | null
    categoryId?: string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PostTagsUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutPostInput
    viewLogs?: ViewLogUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutMediaInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutMediaInput, PostUncheckedCreateWithoutMediaInput>
  }

  export type MediaCreateWithoutPostsInput = {
    id?: string
    url: string
    altText?: string | null
    caption?: string | null
    type: $Enums.MediaType
    createdAt?: Date | string
    uploadedBy?: UserCreateNestedOneWithoutMediaInput
  }

  export type MediaUncheckedCreateWithoutPostsInput = {
    id?: string
    url: string
    altText?: string | null
    caption?: string | null
    type: $Enums.MediaType
    uploadedById?: string | null
    createdAt?: Date | string
  }

  export type MediaCreateOrConnectWithoutPostsInput = {
    where: MediaWhereUniqueInput
    create: XOR<MediaCreateWithoutPostsInput, MediaUncheckedCreateWithoutPostsInput>
  }

  export type PostUpsertWithoutMediaInput = {
    update: XOR<PostUpdateWithoutMediaInput, PostUncheckedUpdateWithoutMediaInput>
    create: XOR<PostCreateWithoutMediaInput, PostUncheckedCreateWithoutMediaInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutMediaInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutMediaInput, PostUncheckedUpdateWithoutMediaInput>
  }

  export type PostUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    magazine?: MagazineUpdateOneWithoutPostsNestedInput
    category?: CategoryUpdateOneWithoutPostsNestedInput
    tags?: PostTagsUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    revisions?: RevisionUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PostTagsUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPostNestedInput
  }

  export type MediaUpsertWithoutPostsInput = {
    update: XOR<MediaUpdateWithoutPostsInput, MediaUncheckedUpdateWithoutPostsInput>
    create: XOR<MediaCreateWithoutPostsInput, MediaUncheckedCreateWithoutPostsInput>
    where?: MediaWhereInput
  }

  export type MediaUpdateToOneWithWhereWithoutPostsInput = {
    where?: MediaWhereInput
    data: XOR<MediaUpdateWithoutPostsInput, MediaUncheckedUpdateWithoutPostsInput>
  }

  export type MediaUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploadedBy?: UserUpdateOneWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    uploadedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateWithoutViewLogsInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPostsInput
    magazine?: MagazineCreateNestedOneWithoutPostsInput
    category?: CategoryCreateNestedOneWithoutPostsInput
    tags?: PostTagsCreateNestedManyWithoutPostInput
    comments?: CommentCreateNestedManyWithoutPostInput
    revisions?: RevisionCreateNestedManyWithoutPostInput
    media?: PostMediaCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutViewLogsInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    authorId: string
    magazineId?: string | null
    categoryId?: string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PostTagsUncheckedCreateNestedManyWithoutPostInput
    comments?: CommentUncheckedCreateNestedManyWithoutPostInput
    revisions?: RevisionUncheckedCreateNestedManyWithoutPostInput
    media?: PostMediaUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutViewLogsInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutViewLogsInput, PostUncheckedCreateWithoutViewLogsInput>
  }

  export type PostUpsertWithoutViewLogsInput = {
    update: XOR<PostUpdateWithoutViewLogsInput, PostUncheckedUpdateWithoutViewLogsInput>
    create: XOR<PostCreateWithoutViewLogsInput, PostUncheckedCreateWithoutViewLogsInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutViewLogsInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutViewLogsInput, PostUncheckedUpdateWithoutViewLogsInput>
  }

  export type PostUpdateWithoutViewLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    magazine?: MagazineUpdateOneWithoutPostsNestedInput
    category?: CategoryUpdateOneWithoutPostsNestedInput
    tags?: PostTagsUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    revisions?: RevisionUpdateManyWithoutPostNestedInput
    media?: PostMediaUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutViewLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PostTagsUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutPostNestedInput
    media?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type?: string | null
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type PostCreateManyAuthorInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    magazineId?: string | null
    categoryId?: string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    postId: string
    content: string
    parentId?: string | null
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevisionCreateManyAuthorInput = {
    id?: string
    postId: string
    content: string
    title?: string | null
    createdAt?: Date | string
  }

  export type MediaCreateManyUploadedByInput = {
    id?: string
    url: string
    altText?: string | null
    caption?: string | null
    type: $Enums.MediaType
    createdAt?: Date | string
  }

  export type MagazineCreateManyEditorInput = {
    id?: string
    title?: string | null
    slug: string
    description?: string | null
    coverImageUrl?: string | null
    issueNumber?: number | null
    publishedAt?: Date | string | null
    status?: $Enums.MagazineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    magazine?: MagazineUpdateOneWithoutPostsNestedInput
    category?: CategoryUpdateOneWithoutPostsNestedInput
    tags?: PostTagsUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    revisions?: RevisionUpdateManyWithoutPostNestedInput
    media?: PostMediaUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PostTagsUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutPostNestedInput
    media?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutChildrenNestedInput
    children?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutRevisionsNestedInput
  }

  export type RevisionUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostMediaUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostMediaUncheckedUpdateManyWithoutMediaNestedInput
  }

  export type MediaUncheckedUpdateManyWithoutUploadedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumMediaTypeFieldUpdateOperationsInput | $Enums.MediaType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MagazineUpdateWithoutEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMagazineStatusFieldUpdateOperationsInput | $Enums.MagazineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUpdateManyWithoutMagazineNestedInput
  }

  export type MagazineUncheckedUpdateWithoutEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMagazineStatusFieldUpdateOperationsInput | $Enums.MagazineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    posts?: PostUncheckedUpdateManyWithoutMagazineNestedInput
  }

  export type MagazineUncheckedUpdateManyWithoutEditorInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    issueNumber?: NullableIntFieldUpdateOperationsInput | number | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumMagazineStatusFieldUpdateOperationsInput | $Enums.MagazineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateManyParentInput = {
    id?: string
    name: string
    slug: string
  }

  export type PostCreateManyCategoryInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    authorId: string
    magazineId?: string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    posts?: PostUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    posts?: PostUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    magazine?: MagazineUpdateOneWithoutPostsNestedInput
    tags?: PostTagsUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    revisions?: RevisionUpdateManyWithoutPostNestedInput
    media?: PostMediaUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PostTagsUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutPostNestedInput
    media?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    magazineId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagsCreateManyTagInput = {
    postId: string
  }

  export type PostTagsUpdateWithoutTagInput = {
    post?: PostUpdateOneRequiredWithoutTagsNestedInput
  }

  export type PostTagsUncheckedUpdateWithoutTagInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagsUncheckedUpdateManyWithoutTagInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyMagazineInput = {
    id?: string
    title: string
    slug: string
    excerpt?: string | null
    content: string
    readMinutes?: number | null
    type?: $Enums.PostType
    coverImageUrl?: string | null
    status?: $Enums.PostStatus
    visibility?: $Enums.PostVisibility
    isFeatured?: boolean
    scheduledAt?: Date | string | null
    publishedAt?: Date | string | null
    authorId: string
    categoryId?: string | null
    views?: number
    likes?: number
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUpdateWithoutMagazineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    category?: CategoryUpdateOneWithoutPostsNestedInput
    tags?: PostTagsUpdateManyWithoutPostNestedInput
    comments?: CommentUpdateManyWithoutPostNestedInput
    revisions?: RevisionUpdateManyWithoutPostNestedInput
    media?: PostMediaUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutMagazineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PostTagsUncheckedUpdateManyWithoutPostNestedInput
    comments?: CommentUncheckedUpdateManyWithoutPostNestedInput
    revisions?: RevisionUncheckedUpdateManyWithoutPostNestedInput
    media?: PostMediaUncheckedUpdateManyWithoutPostNestedInput
    viewLogs?: ViewLogUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutMagazineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    excerpt?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    readMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: EnumPostTypeFieldUpdateOperationsInput | $Enums.PostType
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPostStatusFieldUpdateOperationsInput | $Enums.PostStatus
    visibility?: EnumPostVisibilityFieldUpdateOperationsInput | $Enums.PostVisibility
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    scheduledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    views?: IntFieldUpdateOperationsInput | number
    likes?: IntFieldUpdateOperationsInput | number
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    slugHistory?: NullableJsonNullValueInput | InputJsonValue
    seoSchema?: NullableJsonNullValueInput | InputJsonValue
    settings?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostTagsCreateManyPostInput = {
    tagId: string
  }

  export type CommentCreateManyPostInput = {
    id?: string
    authorId?: string | null
    content: string
    parentId?: string | null
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RevisionCreateManyPostInput = {
    id?: string
    authorId: string
    content: string
    title?: string | null
    createdAt?: Date | string
  }

  export type PostMediaCreateManyPostInput = {
    mediaId: string
  }

  export type ViewLogCreateManyPostInput = {
    id?: string
    viewerIp?: string | null
    userAgent?: string | null
    viewedAt?: Date | string
  }

  export type PostTagsUpdateWithoutPostInput = {
    tag?: TagUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostTagsUncheckedUpdateWithoutPostInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type PostTagsUncheckedUpdateManyWithoutPostInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type CommentUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutChildrenNestedInput
    children?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutRevisionsNestedInput
  }

  export type RevisionUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RevisionUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMediaUpdateWithoutPostInput = {
    media?: MediaUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostMediaUncheckedUpdateWithoutPostInput = {
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type PostMediaUncheckedUpdateManyWithoutPostInput = {
    mediaId?: StringFieldUpdateOperationsInput | string
  }

  export type ViewLogUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewLogUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewLogUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    viewerIp?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyParentInput = {
    id?: string
    postId: string
    authorId?: string | null
    content: string
    status?: $Enums.CommentStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutCommentsNestedInput
    author?: UserUpdateOneWithoutCommentsNestedInput
    children?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
    authorId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    status?: EnumCommentStatusFieldUpdateOperationsInput | $Enums.CommentStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostMediaCreateManyMediaInput = {
    postId: string
  }

  export type PostMediaUpdateWithoutMediaInput = {
    post?: PostUpdateOneRequiredWithoutMediaNestedInput
  }

  export type PostMediaUncheckedUpdateWithoutMediaInput = {
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type PostMediaUncheckedUpdateManyWithoutMediaInput = {
    postId?: StringFieldUpdateOperationsInput | string
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