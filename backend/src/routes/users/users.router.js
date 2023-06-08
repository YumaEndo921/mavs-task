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
    //フロントから受け取った情報を格納
    const {username, email, password } = req.body;
    //パスワードをハッシュ化
    const hash_password = authService.hashSha256(password)
    //メールアドレス重複チェック
      //データベース内にemai情報があるかチェック
      db.Users.findOne({
      where: { email: email }
      }).then(user => {
      //同じ情報がない場合処理を継続
      if(user == null){
        // ユーザー情報追加
        const newUser = db.Users.create({
        name: username,
        email: email,
        password: hash_password,
      });
      console.log("データベースに追加しました")
      const body = 200
      res.status(200).json({body})
      }

      //重複した情報がある場合処理を終了
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
