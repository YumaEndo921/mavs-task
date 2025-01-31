'use strict';
import { Model } from 'sequelize';
const createModel = (sequelize, DataTypes) => {
  class articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  articles.init(
    {
      id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        primaryKey: true, // 主キーとしてマークする
        autoIncrement: true
      },
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      author_id: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
      deleted_at:  DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'articles',
      underscored: true,
      paranoid: true,
    }
  );
  return articles;
};

export default createModel;
