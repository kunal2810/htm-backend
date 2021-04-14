const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const axios = require('axios');

const router = express.Router();

/**
 * Save floor
 * @param {Request} req
 * @param {Response} res
 */
function saveFloorDetails(req, res) {
    console.log("sdsfds ===>");
    console.log(process.env.NODE_ROOM_API, req.body);
    axios
        .post(`${process.env.NODE_ROOM_API}/floors`, req.body, {
            // headers: { Authorization: 'sadsadads' },
        })
        .then((response) => {
            res.status(200).send(response.data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
}

router.post('/', saveFloorDetails);

module.exports = router;