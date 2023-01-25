import express from 'express';

const userRouter = express.Router();

userRouter.get('/login', (req, res) => {
  res.render("user/login");
})

export default userRouter;