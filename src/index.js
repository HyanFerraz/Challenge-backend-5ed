const express = require ('express');
const videos = require('./routes/videos');
const categories = require('./routes/categories');

require('./database');

const app = express();

app.use(express.json());
app.use(videos);
app.use(categories);

port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
