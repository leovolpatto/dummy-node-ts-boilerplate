import express = require('express');
import path = require('path');

import root from './routes/root';
import users from './routes/user';

var app = express();
app.use(function (req: express.Request, res: express.Response, next) {//log violento
    console.info('[log] ' + req.method + req.baseUrl + req.path);
    next();
});

app.use('/', root);
app.use('/users', users);

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err['status'] = 404;
    next(err);
});

app.use((err: any, req, res, next) => {
    res.status(err.status || 500);
    res.json(err);
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.info('Express server is now listening on port ' + server.address().port);
});
