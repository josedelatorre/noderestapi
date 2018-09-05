const config = require('./common/config/env.config.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const UsersRouter = require('./users/routes.config');

app.use(bodyParser.json());
UsersRouter.routesConfig(app);

app.listen(config.port, function () {
    console.log('REST API listening at port -> %s', config.port);
});