import articleService from '../../services/articles/ArticleService.js';
import express from 'express';
import authenticate from '../../middleware/authenticate.js';

const router = express.Router();
// const articleservice = new articleService();

/**
 * メモ新規登録
 */
router.post('/add',  async (req, res, next) => {

  const {title, contents } = req.body;
  
  // console.log( req.headers["authorization"])
  console.log("メモ情報を受け取りました")
  
    // const newUser = await db.Users.create({
    //   name: username,
    //   email: email,
    //   password: hash_password,
    // });

  // try {
  //   let body = {};

  //   res.status(200).json(body);
  // } catch (error) {
  //   console.error(error);
  //   res.status(500).json({});
  // }
});

export default router;
