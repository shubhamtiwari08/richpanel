const passport           = require('passport');
const FacebookStrategy   = require('passport-facebook').Strategy;
require('dotenv').config();



passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "/auth/facebook/callback",
     profileFields: ['id', 'displayName', 'photos', 'email',]
  },
  async function(accessToken, refreshToken, profile, cb) {
    console.log(profile.id, accessToken)
    try {
        const user = await User.findOne({ facebookId: profile.id });
      
        if (!user) {
          const newUser = new User({ facebookId: profile.id });
          const savedUser = await newUser.save();
       
          return cb(null, savedUser);
        } else {
          
          return cb(null, user);
        }
  
        
      } catch (err) {
        return cb(err, null);
      }
      
  }
  ));
  