import { users } from "../db/schema/schema";
import { db } from "../db/db";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

const getUserSchema = z.object({
  id: z.number().int(),
});

export const userRouter = router({
  getUser: publicProcedure.input(getUserSchema).query(async () => {
    return await db.select().from(users);
  }),
  createUser: publicProcedure
    .input(
      z.object({
        userName: z.string(),
        password: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const newUser = await db
        .insert(users)
        .values({
          userName: input.userName,
          password: input.password,
        })
        .execute();

      return newUser;
    }),
});
