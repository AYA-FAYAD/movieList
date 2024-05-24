import { t } from "../trpc";
import { userRouter } from "./users";
export const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "hi from backend aya try to conect trpc";
  }),
  log: t.procedure
    .input((v) => {
      if (typeof v === "string") return v;

      throw new Error("invaild input:Expected string");
    })
    .mutation((req) => {
      console.log(`clinet says:${req.input}`);
      return true;
    }),
  users: userRouter,
});

// export const mergeRouters = t.mergeRouters(appRouter, userRouter);
