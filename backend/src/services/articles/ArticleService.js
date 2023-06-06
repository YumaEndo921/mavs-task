import db from '../../models/index.js';

// クラス
class ArticleService {
  /**
   * 記事一覧取得
   * @param user_id
   * @return ランダム値
   */
  async getArticleList(user_id) {
    const where = {};
    // IDが指定されている場合はIDを条件へ追加する
    if (user_id) {
      where.author_id = user_id;
    }
    // 検索実行
    const rows = await db.Articles.findAll({ where });
    
    return rows;
  }
  // getArticleList(user_id) {
  //   return [{}];
  // }
  /**
   * 記事情報取得
   * @param user_id
   * @return ランダム値
   */
  // getArticle(user_id, article_id) {
  //   return {};
  // }
  getArticle(user_id, article_id) {
    return {};
  }
}

export default ArticleService;
