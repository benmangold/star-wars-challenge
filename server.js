const { PORT } = require('./node.config')

const express = require('express');
const app = express();
const compression = require('compression')
app.use(compression())

app.use(express.static('dist'));

app.listen(PORT, () => console.log(`listening at ${PORT}`));
