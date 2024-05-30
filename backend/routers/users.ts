import { z } from "zod";
import { router, publicProcedure } from "../trpc";

import { users } from "../db/schema/schema";
import { db } from "../db/db";

// const getUserSchema = z.object({
//   id: z.number().int(),
// });

export const userRouter = router({
  getUser: publicProcedure.query(async () => {
    const allUsers = await db.select().from(users).execute();
    return allUsers;
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
