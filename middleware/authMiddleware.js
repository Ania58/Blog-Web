import admin from "../config/adminFirebase.js";

const authMiddleware = (req, res, next) => {
    const idToken = req.cookies.token;
  
    if (!idToken) {
      req.user = null; 
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
        req.user = null;
        res.locals.user = null; 
        next();
      });
    }
  };

  export default authMiddleware;