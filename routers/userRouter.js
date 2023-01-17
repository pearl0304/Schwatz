import express from 'express';

const userRouter = express.Router();

userRouter.get('/signUp', (req, res) => {
  res.render('signUp')
})

userRouter.get('/login', (req, res) => {
  res.render('login')
})

export default userRouter;