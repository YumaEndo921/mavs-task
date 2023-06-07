import AuthService from '../../services/auth/AuthService.js';
import UserService from '../../services/users/UserService.js';
import db from '../../models/index.js';
import express from 'express';

const router = express.Router();
const authService = new AuthService();
const userService = new UserService();

/**
 * ユーザー新規登録
 */
router.post('/signup', async (req, res, next) => {  

  
  try {
    const {username, email, password } = req.body;
    const hash_password = authService.hashSha256(password)
    // console.log(hash_password)

    //メールアドレス重複チェック
    db.Users.findOne({
      where: { email: email }
    }).then(user => {
      // console.log(user)
      if(user == null){
        const body = 200
        res.status(200).json({body});
        // ユーザー情報追加
        const newUser = db.Users.create({
        name: username,
        email: email,
        password: hash_password,
      });
      console.log("データベースに追加しました")
      }
      else{
        res.status(200).json({})
        return
      }      
    });
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
