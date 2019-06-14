const request = require('request');
const config = require('../config.json');

module.exports = {
    getUsers(req, res) {
        request(`${config.albumApi}users`, { json: true }, (err, resp, body) => {
            if (err) {
                console.log('ERROR:', err);
                res.json({ err });
            } else {
                // console.log(resp);
                res.json(body);
            }
        });

    },

    getUserById(req, res) {
        const userId = req.params.userid;
        request(`${config.albumApi}users/${userId}`, { json: true }, (err, resp, body) => {
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
