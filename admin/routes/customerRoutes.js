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
    return res.status(200).send({
      result: "User Created Successfully"
    });
  } catch (err) {
    console.log("Error ==>", err);
    if (err.code == 11000) {
      return res.status(200).send(
        "Hotel Already Registered"
      );
    } else {
      return res.status(500).send({
        error: "Something went wrong"
      });
    }
  }
};


router.post('/', saveCustomer);

module.exports = router;