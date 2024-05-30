import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { userRouter } from "./routers/users";
import { createContext } from "./context";

const app = express();
app.use(cors());

export type AppRouter = typeof userRouter;

app.use(
  "/trpc",
  createExpressMiddleware({
    router: userRouter,
    createContext,
  })
);
console.log(userRouter);

app.get("/", (req, res) => {
  return res.send("Hi!!!");
});

app.get("/createuser", (req, res) => {
  return res.send({ data: { username: "fofo", password: "123123" } });
});
app.listen(3000, () => {
  console.log("open on port 3000");
});
