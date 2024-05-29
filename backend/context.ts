// import {inferAsyncReturnType} from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context

// export type Context = inferAsyncReturnType<typeof createContext>;

// import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

// export function createContext({ req, res }: CreateExpressContextOptions) {
//   return {
//     req,
//     res,
//     isAdmin: true,
//   };
// }
export type Context = ReturnType<typeof createContext>;
