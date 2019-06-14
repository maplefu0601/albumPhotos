const request = require('request');
const config = require('../config.json');

module.exports = {
    getAlbums(req, res) {
        const userId = req.params.userid;
        request(`${config.albumApi}albums?userId=${userId}`, { json: true }, (err, resp, body) => {
            if (err) {
                console.log('ERROR:', err);
                res.json({ err });
            } else {
                // console.log(resp);
                res.json(body);
            }
        });

    },

    getAllAlbums(req, res) {
        const userId = req.params.userid;
        request(`${config.albumApi}albums`, { json: true }, (err, resp, body) => {
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
