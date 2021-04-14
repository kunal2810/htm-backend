const express = require('express');

const router = express.Router();
const CustomerService = require('../services/customerService');
const emailNotifcationService = require('../services/emailNotificationService');
const generator = require('generate-password');

/**
 * Save a new customer
 * @param {Request} req
 * @param {Response} res
 */
const saveCustomer = async (req, res) => {
  try {
    const { hotelName, hotelAddress, email, mobileNumber } = req.body;
    const userName = req.body.hotelName.replace(/ +/g, "");
    const password = generator.generate({
      length: 10,
      numbers: true,
    });
    const body = {
      userName,
      password,
      hotelName,
      hotelAddress,
      email,
      users: {
        mobileNumber,
        designation: 'owner'
      }
    }
    const result = await CustomerService.saveCustomer(body);
    emailNotifcationService.sendEmail(email, userName, password);
    console.log("result ==>", result);
    res.status(200).send(result);
  } catch (err) {
    console.log("Error ==>", err);
    if(err.code == '11000'){
      res.status(200).send(result);
    }else {

    }
    res.status(500).send(err.message || err);
  }
};


router.post('/', saveCustomer);

module.exports = router;