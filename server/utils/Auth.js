const jwt = require('jsonwebtoken');

const secret = 'hopeeverythingworks';
const expiration = '24h';

module.exports = {
  authMiddleware: function ({req} ) {

    let token = req.body.token || req.query.token || req.headers.authorization;

console.log(req.headers.authorization);
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
  
    return req;
  },


  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };
    console.log("Making a token.")



    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};


