import { Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";

const router = new Router();

router.get("/", (ctx) => {
  console.log("akjshak");

  ctx.response.body = "Hello World! fromuser";
});

router.get("/:id", (ctx) => {
  const { id } = ctx.params;
  ctx.response.body = `User with ID ${id}`;
});

const userRouter = new Router();

userRouter.prefix("/user");
userRouter.use(router.routes());

export default userRouter;
