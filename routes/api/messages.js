const express = require('express');
const router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/messages', function(req, res, next) {

    axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
        .then(result => {
            res.json(result.data);
        })
        .catch(err => {
            next(err);
        })
});

module.exports = router;
