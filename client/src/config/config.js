require("dotenv").config();

module.exports={
    "google": {
        "google_maps_key": process.env.GOOGLE_MAPS_API_KEY,
        "google_email": process.env.GOOGLE_API_EMAIL,
        "google_clientId": process.env.GOOGLE_CLIENT_ID,
        "google_clientSecret":process.env.GOOGLE_CLIENT_SECRET

    },
    "development": {
              
            },
    "test": {
              
            },
    "production": {
              
            }
}
    
