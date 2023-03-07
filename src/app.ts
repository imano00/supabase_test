import { Application, Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import userRouter from "./routes/user.ts";

const app = new Application();

const router = new Router();

router.get("/", (ctx) => {
  console.log("akjshak");

  ctx.response.body = "Hello World!";
});

app.use(router.routes());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

console.log("Server is listening on port 80");

await app.listen({ port: 80 });
