// Create web server
// 1. Import express
const express = require('express');
const bodyParser = require('body-parser');
const commentRouter = require('./routes/comments');
const app = express();
const port = process.env.PORT || 3000;

// 2. Use express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/comments', commentRouter);

// 3. Start web server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});