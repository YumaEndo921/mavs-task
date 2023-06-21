import articleService from '../../services/articles/ArticleService.js';
import express from 'express';
import authenticate from '../../middleware/authenticate.js';
import db from '../../models/index.js';

const router = express.Router();
const articleservice = new articleService();

/**
 * メモ新規登録
 */
router.post('/add', authenticate, async (req, res, next) => {
  try {
    //フロントから受け取った情報を格納
    const title = req.body.params.title;      
    const contents = req.body.params.content; 
    const user_id = req.body.params.userId;  
    //データベースに新しいメモデータを作成
    await db.Articles.create({
      title: title,
      content: contents,
      author_id: user_id,    
    });
    const body = 200
    res.status(200).json({body})
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
});

//ユーザーメモの取得
router.post('/get',async (req, res, next) => {
  try {
    // 受け取ったユーザーIDを格納
    const user_id = req.body.params;
    // ユーザーIDとauthor_idが一致するデータを取得
    const userMemo = await articleservice.getArticleList(user_id) 
    // 取り出したデータをdataValuesのみの配列にする
    const articleData = userMemo.map((article)=>{
      return article.dataValues
    });
    //bodyにユーザーメモデータを格納し返却
    const body = articleData;
    res.status(200).json({body});
    } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
});

//メモの削除
router.delete('/delete',async (req, res, next) => {
  try {
    //渡されたメモidを定義
    const article_id = req.body.id
    //データベースから該当のメモ情報を取得し削除
    await articleservice.deleteArticle(article_id) 
    res.status(200).json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
});

//メモの更新
router.put('/update',async (req, res, next) => { 
  try{
    //フロントから受け取った情報を格納
    const title = req.body.title
    const content = req.body.content
    const article_id = req.body.memo_id
    //データベースの変更処理
    await articleservice.updateArticle(article_id,title,content) 
    res.status(200).json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
});

//削除したユーザーメモの取得
router.post('/restore',async (req, res, next) => {
  try {
    // 受け取ったユーザーIDを格納
    const user_id = req.body.params;
    // ユーザーIDとauthor_idが一致するデータを取得
    const userMemo = await articleservice.getDeleteList(user_id) 
    // 取り出したデータをdataValuesのみの配列にする
    const articleData = userMemo.map((article)=>{
      return article.dataValues
    });
    console.log(`restoreで受け取ったデータです${userMemo[0]}`);
    //bodyにユーザーメモデータを格納し返却
    const body = articleData;
    res.status(200).json({body});
    } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
});

export default router;
