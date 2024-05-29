import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./routers";
import { createContext } from "./context";

const app = express();
app.use(cors());

export type AppRouter = typeof appRouter;

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.get("/", (req, res) => {
  return res.json("Hi!!!");
});
app.listen(3000);
