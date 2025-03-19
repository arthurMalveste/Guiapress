const Sequilize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');

const Article = connection.define('articles', { 
    title: {
        type: Sequilize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequilize.STRING,
        allowNull: false
    },
    body:{
        type: Sequilize.TEXT,
        allowNull: false
    }
});

Article.belongsTo(Category); // Um artigo pertence a uma categoria
Category.hasMany(Article); // Uma categoria tem muitos artigos


module.exports = Article;