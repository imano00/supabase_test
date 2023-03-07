import { Router, RouterContext } from "https://deno.land/x/oak@v12.1.0/mod.ts";

const router = new Router();

router.get("/users", (ctx: RouterContext) => {
  ctx.response.body = "List of users";
});

router.get("/user/:id", (ctx: RouterContext) => {
  const { id } = ctx.params;
  ctx.response.body = `User with ID ${id}`;
});

const userRouter = new Router();

export default router;