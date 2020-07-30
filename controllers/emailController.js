const request = require('request');
const nodemailer = require("nodemailer");

module.exports = {
    
    checkCaptcha: function(req, res) {
        console.log(req.body.value)
       
        // g-recaptcha-response is the key that browser will generate upon form submit.
        // if its blank or null means user has not selected the captcha, so return the error.
        
        if(req.body.value === undefined || req.body.value === '' || req.body.value === null) {
          return res.json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
        }
        // Put your secret key here.
        var secretKey = process.env.RECAPTCHA_SERVER_KEY;
        
        // req.connection.remoteAddress will provide IP address of connected user.
        var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body.value + "&remoteip=" + req.connection.remoteAddress;
        // Hitting GET request to the URL, Google will respond with success or error scenario.
        
        request(verificationUrl,function(error,response,body) {
          body = JSON.parse(body);
          // Success will be true or false depending upon captcha validation.
          if(body.success !== undefined && !body.success) {
            return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
          }
          res.json({"responseCode" : 0,"responseDesc" : "Success"});
        });
    },


    sendGmail:async function(req,res){
      //console.log(req);
      const html_body=req.body.htmlbody;
      
      const configObj={
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth:{
          user: process.env.GMAIL_USERNAME,
          pass:process.env.GMAIL_PASSWORD
        }
        /* auth: {
          type:'OAuth2',
          clientId: process.env.GOOGLE_CLIENT_ID, 
          clientSecret:process.env.GOOGLE_CLIENT_SECRET, 
        } */
      };
        //console.log(configObj)

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport(configObj);

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: '<buildingbetterwomen99@gmail.com>', // sender address
        to: '<buildingbetterwomen99@gmail.com>', // list of receivers
        subject: "BBW Idea Submission", // Subject line
        html: `${html_body}</b>`, // html body
      }).then((res)=> {
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      }
      ).catch((err)=>{
        console.log(err)
      });



    }
};