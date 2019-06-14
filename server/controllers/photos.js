const request = require('request');
const config = require('../config.json');

module.exports = {
    getPhotos(req, res) {
        const albumId = req.params.albumid;
        request(`${config.albumApi}photos?albumId=${albumId}`, { json: true }, (err, resp, body) => {
            if (err) {
                console.log('ERROR:', err);
                res.json({ err });
            } else {
                // console.log(resp);
                res.json(body);
            }
        });

    },

    getAllPhotos(req, res) {
        const albumId = req.params.albumid;
        request(`${config.albumApi}photos`, { json: true }, (err, resp, body) => {
            if (err) {
                console.log('ERROR:', err);
                res.json({ err });
            } else {
                // console.log(resp);
                res.json(body);
            }
        });

    }
}
