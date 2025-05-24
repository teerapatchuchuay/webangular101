let express = require('express');
const path = require('path');
mongoose = require('mongoose');
cors = require('cors');
bodyParser = require('body-parser');
mongodb = require('./database/db');


mongoose.Promise = global.Promise;
mongoose.connect(mongodb.db, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected success');
}, error => {
    console.log('Could not connect to database: ' + error);
});

const bookRouter = require('./server');
const { create } = require('./module/book');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
}
);

//api rooter
app.use('/api', bookRouter);
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

// 404
app.use((req, res, next) => {
    next(createError('404'));
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.static(err.statusCode).send(err.message);
}
);

