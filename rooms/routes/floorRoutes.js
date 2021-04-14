const express = require('express');

const router = express.Router();
const FloorService = require('../services/floorService');

const saveFloorDetails = async (req, res) => {
    try {
        console.log(req.body.floorDetails);
        // FloorService.saveFloor(req);
    } catch (err) {

    }
}


router.post('/', saveFloorDetails);

module.exports = router;