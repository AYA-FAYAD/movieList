import React from "react";
import { trpc } from "./client";

const SayHi = () => {
  const { data, isLoading, error } = trpc.useQuery(["sayHi"]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Data: {data}</div>;
};

export default SayHi;
