import { Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello World!";
});

router.get("/user/:id", (ctx) => {
  const { id } = ctx.params;
  ctx.response.body = `User with ID ${id}`;
});

const userRouter = new Router();

userRouter.prefix("user");

export default userRouter;
