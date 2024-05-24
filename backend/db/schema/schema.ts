import { relations } from "drizzle-orm";
import { text, int, sqliteTable } from "drizzle-orm/sqlite-core";
export const users = sqliteTable("users", {
  id: int("id").primaryKey({ autoIncrement: true }),
  userName: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const usersRelations = relations(users, ({ many }) => ({
  movies: many(movies),
}));

export const movies = sqliteTable("movies", {
  id: int("id").primaryKey({ autoIncrement: true }),
  movieId: text("movieId"), //1-add map to check for unique 2-use uuid to genreate id
  title: text("title"), //add map to check for unique
  year: text("year"),
  posterUrl: text("poster"),
  userId: int("user_id")
    .notNull()
    .references(() => users.id),
});

export const movieRelation = relations(movies, ({ one }) => ({
  user: one(users, {
    fields: [movies.userId],
    references: [users.id],
  }),
}));
