const express = require('express');
const app = express();
const config = require('./config/config');
require('./routes/routes')(app)

app.listen(config.PORT, () => {
    console.log(`Server is listening on port ${config.PORT}`);
});