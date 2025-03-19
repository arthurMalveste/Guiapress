const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');


const categoriesController = require('./categories/CategoriesController');
const articlesController = require('./articles/ArticlesController');

// view engine and static
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// database
connection
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// routes controllers
app.use('/', categoriesController);
app.use('/', articlesController);

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});