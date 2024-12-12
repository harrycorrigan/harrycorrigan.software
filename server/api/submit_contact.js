const { check, validationResult } = require('express-validator');


const nodemailer = require('nodemailer');
const mailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.CONTACT_EMAIL_SENDER,
    pass: process.env.CONTACT_EMAIL_PWD
  }
});

function sendContactEmail(ipAddr, name, email, message){
  let mailDetails = {
        from: 'hcsoftware.mailer@gmail.com',
        to: 'hello@harrycorrigan.software',
        subject: 'Website Contact',
        text: `From Addr: ${ipAddr}\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  mailTransporter
      .sendMail(mailDetails,
          function (err, data) {
              if (err) {
                console.log(err);
              }
          }
      );
}

const blacklistChars = `<>'"*`;
var contactFormValidation = [
  check("name")
    .notEmpty().withMessage("Name must be provided")
    .isLength({"max": 100}).withMessage("Invalid name")
    .trim().blacklist(blacklistChars).escape(),
  check("email")
    .notEmpty().withMessage("Email must be provided")
    .isEmail().withMessage("Must be email")
    .isLength({"max": 200}).withMessage("Invalid email")
    .normalizeEmail().trim().blacklist(blacklistChars).escape(),
  check("message")
    .notEmpty().withMessage("Message must be provided")
    .isLength({"max": 2000}).withMessage("Invalid message")
    .trim().blacklist(blacklistChars).escape()
]

module.exports = function(app){
    app.post("/api/submitContact", contactFormValidation, (req, res) => {
      const errors = validationResult(req);
      if(!errors.isEmpty()){
        return res.status(422).json({ errors: errors.array() });
      }
  
      let ipAddr = req.socket.remoteAddress;
      let name = req.body.name;
      let email = req.body.email;
      let message = req.body.message;

      sendContactEmail(ipAddr, name, email, message)
      return res.send("OK");

    });
}