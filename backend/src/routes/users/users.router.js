import AuthService from '../../services/auth/AuthService.js';
import UserService from '../../services/users/UserService.js';
import db from '../../models/index.js';
import express from 'express';

const router = express.Router();
const authService = new AuthService();
// const userService = new UserService();


/**
 * ユーザー新規登録
 */
router.post('/createUser', async (req, res, next) => {  

  const {username, email, password } = req.body;
  const hash_password = authService.hashSha256(password)
  console.log(hash_password)

  const newUser = await db.Users.create({
    name: username,
    email: email,
    password: hash_password,
  });



  console.log("データベースに追加しました")
  // console.log(username,email,password); //インプット情報を取得できた
//   try {
//     let res = {};

//     const body = {};
//     res.status(200).json(body);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json(body);
//   }
}
);
/**
 *
 */

export default router;
