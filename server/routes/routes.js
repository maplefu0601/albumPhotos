'use strict';

module.exports = function (app) {

    // INDEX ROUTES
    app.get('/', function (req, res) {
        res.sendFile(process.cwd() + '/public/html/index.html');
    });

    // REACT ROUTES
    // album
    const albumRoutes = require('./album_routes');
    app.use('/api/albums', albumRoutes);

    const photoRoutes = require('./photo_routes');
    app.use('/api/photos', photoRoutes);

    // USER ROUTES
    const userRoutes = require('./user_routes');
    app.use('/api/users', userRoutes);

};
