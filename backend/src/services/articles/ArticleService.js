import db from '../../models/index.js';

// クラス
class ArticleService {
  /**
   * 記事一覧取得
   * @param user_id
   * @return rows
   */
  async getArticleList(user_id) {
    const where = {};
    // IDが指定されている場合はIDを条件へ追加する
    if (user_id) {
      where.author_id = user_id;
    }
    // 検索実行
    const rows = await db.Articles.findAll({ where }); 
    //データを返す
    return rows;
  }

  /**
   * 記事一覧取得
   * @param user_id
   * @return rows
   */
  async getDeleteList(user_id) {
    const where = {};
    // IDが指定されている場合はIDを条件へ追加する
    if (user_id) {
      where.author_id = user_id;
    }
    // 検索実行
    const rows = await db.Articles.findAll({ where,paranoid: false}); 
    //データを返す
    // console.log(rows);
    return rows;
  }

  /**
   * 記事情報取得・削除
   * @param article_id
   */
  async deleteArticle(article_id) {
    //渡されたidと一致するメモを抽出
    db.Articles.findOne({
      where: { id: article_id }})
    //メモ情報を削除
    .then(user => {
      user.destroy();
    });
    return {};
  }
  
  /**
   * メモの更新
   * @param {article_id,title,content}
   */
  async updateArticle(article_id,title,content){
    //渡されたidと一致するメモを抽出
    db.Articles.findOne({
      where: { id: article_id}
    })
    //メモ情報を更新
    .then(user => {
      user.title = title;
      user.content = content;
      user.save();
    });
  }
}

export default ArticleService;
