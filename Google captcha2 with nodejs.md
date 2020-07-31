#Google Captcha2 using "react-google-recaptcha" and node.js 

You need to sign up for a captcha API pair  from the following website: https://www.google.com/recaptcha
Docs on Google Captcha version 2 are available from: https://developers.google.com/recaptcha/docs/display



##Client-side code:
### Dependencies
Install "react-google-recaptcha" on your client-side

###Component
<ReCAPTCHA
    sitekey= //enter your key for your website here
    onChange={onChange}
    ref={recaptchaRef}
/> 

### Function
Function for client side code to check whether the captcha box has been checked:

    const recaptchaRef = React.useRef();
    const [capOk,setCapOk]=useState(false);  // I use this just to not send an email if the Captcha failed.
    function onChange(value){
        console.log("captcha value:" , value);
        API.checkGoogleCaptcha(value)
        .then((res)=>{
            console.log(res);
            setCapOk(true);
        })
        .catch((err)=>{
            console.log(err);
            setCapOk(false);
        });  
    }

###API Call using Axios
checkGoogleCaptcha: function(key){
        return axios.post(`/submit`,{value:key})
   
##Server-side
###Dependencies
const bodyParser = require('body-parser');

###Server.js
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));




###Route
app.post("/submit",em.checkCaptcha);

###Controller js code

checkCaptcha: function(req, res) {
        
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

