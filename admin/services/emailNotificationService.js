const nodemailer = require("nodemailer");

const emailNotificationService = {
    async sendEmail(email, userName, password) {

        // create reusable transporter object using the default SMTP transport
        var transporter = nodemailer.createTransport({
            service: "Gmail",
            port: 587,
            secure: false,
            auth: {
                user: 'codificasoft@gmail.com',
                pass: 'rajapark@123'
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'codificasoft@gmail.com', // sender address
            to: email, // list of receivers
            subject: "Hotel Tracking System Onboard", // Subject line
            text: "Hello \n\n Here is your Username :- " + userName + "\n Here is your password :- " + password + "\n\nPlease user this username and password for login in App.\n\n Thank you,\nCodificasoft Pvt. ltd.",
        });

        console.log("Message sent: %s", info.messageId);
    }

}

module.exports = emailNotificationService;