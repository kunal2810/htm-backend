const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const axios = require('axios');

const router = express.Router();

/**
 * Save a new customer from admin
 * @param {Request} req
 * @param {Response} res
 */
function saveCustomer(req, res) {
    console.log("sdsfds");
    console.log(process.env.NODE_ADMIN_API, req.body);
    axios
        .post(`${process.env.NODE_ADMIN_API}/customers`, req.body, {
            // headers: { Authorization: 'sadsadads' },
        })
        .then((response) => {
            res.status(200).send(response.data);
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
}

router.post('/', saveCustomer);

module.exports = router;