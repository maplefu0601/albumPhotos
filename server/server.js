const express = require('express');
const app = express();
const cors = require('cors');

// set the port
app.set('port', (process.env.PORT || 3001));
app.use(cors());
// routes
const routes = require('./routes/routes.js');
routes(app);

// start the server
app.listen(app.get('port'), function () {
    console.log('server listening on port', app.get('port'));
});

exports.app = app;
