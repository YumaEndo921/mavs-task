import articleService from '../../services/articles/ArticleService.js';
import express from 'express';
import authenticate from '../../middleware/authenticate.js';
import db from '../../models/index.js';

const router = express.Router();
// const articleservice = new articleService();

/**
 * メモ新規登録
 */
router.post('/add', authenticate, async (req, res, next) => {

  try {
    // let body = {};
    const title = req.body.params.title;     //フロントから受け取ったタイトル名
    const contents = req.body.params.content;  //フロントから受け取ったテキスト内容
    const userId = req.body.params.userId;  //フロントから受け取ったテキスト内容
  
    const newUser = await db.Articles.create({
      title: title,
      content: contents,
      author_id: userId,    
    });
    console.log("データベースに情報を追加しました");
    
    res.status(200).json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
});

export default router;
