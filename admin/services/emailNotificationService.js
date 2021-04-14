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
            to: "kunalarora2810@gmail.com", // list of receivers
            subject: "Hello", // Subject line
            text: "Hello world?", // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
    }

}

module.exports = emailNotificationService;