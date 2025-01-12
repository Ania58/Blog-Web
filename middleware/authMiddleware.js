import admin from "firebase-admin";
const auth = admin.auth();

const authMiddleware = (req, res, next) => {
    const idToken = req.cookies.token;
  
    if (!idToken) {
      return res.redirect('/login');
    }
  
    auth.verifyIdToken(idToken)
      .then(decodedToken => {
        req.user = decodedToken;
        next();
      })
      .catch(error => {
        console.error('Error verifying token:', error);
        res.redirect('/login');
      });
  };

  export default authMiddleware;