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
});

export const userMovies = sqliteTable("user_movise", {
  userId: int("user_id")
    .notNull()
    .references(() => users.id),
  movieId: int("movie_id")
    .notNull()
    .references(() => movies.id),
});

export const userRelations = relations(users, ({ many }) => ({
  movies: many(userMovies),
}));

export const movieRelations = relations(movies, ({ many }) => ({
  users: many(userMovies),
}));

export const userMoviesRelations = relations(userMovies, ({ one }) => ({
  user: one(users, { fields: [userMovies.userId], references: [users.id] }),
  movie: one(movies, { fields: [userMovies.movieId], references: [movies.id] }),
}));
