const express = require ('express');
const cookieParser = require('cookie-parser');

const videos = require('./routes/videos');
const categories = require('./routes/categories');
const authentication = require('./routes/authentication');

require('./database');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(videos);
app.use(categories);
app.use(authentication);

port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
