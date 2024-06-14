import nodemailer from "nodemailer";

const sendUserCodeToEmail = (email,userID,res) => {
  let tranporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "redmerabi@gmail.com",
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: "redmerabi@gmail.com",
    to: email,
    subject: "GET YOUR USER ID FOR SIS",
    text: `Your sis userID is: ${userID}.`,
  };
  tranporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      return res.json({
        status: false,
        message: "Error sending email",
        error: err,
      });
    } else {
      res.json({ status: true, message: "Email sent" });
    }
  });
};

export { sendUserCodeToEmail };
