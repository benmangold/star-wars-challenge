const { PORT } = require('./node.config')

const express = require('express');

const app = express();

app.use(express.static('dist'));

app.listen(PORT, () => console.log(`listening at ${PORT}`));
