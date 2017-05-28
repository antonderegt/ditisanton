const express = require('express'),
      router = express.Router(),
      nodemailer = require('nodemailer')

router.post('/', (req, res) => {
  let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
          user: process.env.EMAIL_ADDRESS, // Your email id
          pass: process.env.EMAIL_PASSWORD // Your password
      }
  });

  let { text, subject } = req.body

  let mailOptions = {
      from: `"ditisAnton" <${process.env.EMAIL_ADDRESS}>`, // sender address
      to: process.env.EMAIL_ADDRESS, // list of receivers
      subject, // Subject line
      text, // plaintext body
      // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if(error){
          console.log(error);
          res.json({yo: 'error'});
      }else{
          console.log('Message sent: ' + info.response);
          res.json({yo: info.response});
      };
  });
})

module.exports = router
