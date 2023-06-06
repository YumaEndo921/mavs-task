import AuthService from '../../services/auth/AuthService.js';
import db from '../../models/index.js';
import express from 'express';

const router = express.Router();
const authService = new AuthService();

/**
 * ユーザー新規登録
 */
router.post('/signup', async (req, res, next) => {  

  
  try {
    const {username, email, password } = req.body;
    const hash_password = authService.hashSha256(password)
    // console.log(hash_password)
  
    const newUser = await db.Users.create({
      name: username,
      email: email,
      password: hash_password,
    });
  
    console.log("データベースに追加しました")
    const body = {};
    res.status(200).json(body);
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
}
);
/**
 *
 */

export default router;
