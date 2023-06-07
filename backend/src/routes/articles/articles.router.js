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

//ユーザーメモの取得
router.post('/get',async (req, res, next) => {
  try {
    const user_id = req.body.params;
    const where = {};

    // IDが指定されている場合はIDを条件へ追加する
    if (user_id) {
      where.author_id = user_id;
    }
    const rows = await db.Articles.findAll({ where });

    // データが存在しない場合は再ログインを促すため、空で返却する
    if (!rows.length) return res.status(200).json({});
    // const userMemo = articleservice.getArticleList(user_id)  //importだと動作しない

    //dataValuesのみの配列にする
    const articleData = rows.map((article)=>{
      return article.dataValues
  });

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
    // console.log("deleteリクエストを受け取りました。");
    // console.log(req.body.id)  //ログイン中のユーザーidをフロントから受け取る
    const memo_id = req.body.id
  
    db.Articles.findOne({
      where: { id: memo_id }
    }).then(user => {
      // console.log(user)
      user.destroy();
    });
    res.status(200).json({});

  } catch (error) {
    console.error(error);
    res.status(500).json({});
  }
});

//メモの更新
router.put('/update',async (req, res, next) => {
  console.log("updateリクエストを受け取りました。");
    console.log(req.body)  
    const title = req.body.title
    const content = req.body.content
    const memo_id = req.body.memo_id

    //変更がなければトップへリダイレクト
    if(title === '' && content === ""){
      res.status(200).json({});
    }
    //タイトルのみ変更の場合
    else if(content === ""){
      db.Articles.findOne({
        where: { id: memo_id }
      }).then(user => {
        user.title = title
        user.save();
      });
      res.status(200).json({});

    }
    //コンテンツのみ変更の場合
    else if(title === ""){
      db.Articles.findOne({
        where: { id: memo_id }
      }).then(user => {
        user.content = content;
        user.save();
      });
      res.status(200).json({});

    }
    //両方変更の場合
    else{
      db.Articles.findOne({
        where: { id: memo_id }
      }).then(user => {
        // console.log(user.title)
        user.title = title;
        user.content = content;
        user.save();
      });
      res.status(200).json({});

    }

  // try {
  //   const memo_id = req.body.id
  
  //   db.Articles.findOne({
  //     where: { id: memo_id }
  //   }).then(user => {
  //     // console.log(user)
  //     user.destroy();
  //   });
    // res.status(200).json({});

  // } 
  // catch (error) {
  //   console.error(error);
  //   res.status(500).json({});
  // }
});

export default router;
