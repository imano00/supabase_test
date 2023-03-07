import { Application } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import userRouter from "./routes/user.ts";

const app = new Application();

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

console.log("Server is listening on port 8000");

await app.listen({ port: 8000 });
