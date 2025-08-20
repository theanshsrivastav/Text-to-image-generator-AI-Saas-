import { registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay } from '../controllers/userController.js';
import express from 'express';
import userAuth from '../middlewares/auth.js';

const userRouter = express.Router();

userRouter.post('/register', registerUser);                  //http://localhost:4000/api/user/register
userRouter.post('/login', loginUser);                        //http://localhost:4000/api/user/login
userRouter.get('/credits', userAuth, userCredits);          //http://localhost:4000/api/user/credits
userRouter.post('/pay-razor', userAuth, paymentRazorpay);
userRouter.post('/verify-razor', userAuth, verifyRazorpay);

export default userRouter;