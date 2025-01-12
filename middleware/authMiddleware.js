import admin from "../config/adminFirebase.js";

const authMiddleware = (req, res, next) => {
    const idToken = req.cookies.token;
  
    if (!idToken) {
      res.locals.user = null; 
      next(); 
    } else {
    admin.auth().verifyIdToken(idToken)
      .then(decodedToken => {
        req.user = decodedToken;
        res.locals.user = decodedToken; 
        next();
      })
      .catch(error => {
        console.error('Error verifying token:', error);
        res.locals.user = null; 
        next();
      });
    }
  };

  export default authMiddleware;