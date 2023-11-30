const passport = require('passport');

exports.isAuth = (req, res, done) => {
    return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
    return { id: user.id, role: user.role };
  };
  
  exports.cookieExtractor = function (req) {
    let token = null;
    if (req && req.cookies) {
      token = req.cookies['jwt'];
    }
    //TODO : this is temporary token for testing without cookie
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjMxMDFiYjgyMjljNzg4Mjg4NDQ5OCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzAxMTUxNTYzfQ.4Z5Vz0zabbitja8aROoPwezn-12VVXFd5ncOGGJLYkc"
    return token;
  };