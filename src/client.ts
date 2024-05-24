import { createTRPCClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from "../backend/api";

export const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000/trpc",
    }),
  ],
});
// async function main() {
//   const result = await clinet.sayHi.query();
//   console.log(result);
// }
// async function main() {
//   const result = await clinet.log.mutate("hi from clinet");
//   console.log(result);
// }
// async function main() {
//   const result = await clinet.users.get.query({ userId: "2134" });
//   console.log(result);
// }
// async function main() {
//   const result = await trpc.users.update.mutate({
//     userId: "2134",
//     name: "aya",
//   });
//   console.log(result);
// }

// export default main();
