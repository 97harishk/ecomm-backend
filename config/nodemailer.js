const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "97harishkumar@gmail.com",
    pass: "96711@gmail",
  },
});

module.exports = {
  transporter: transporter,
};
