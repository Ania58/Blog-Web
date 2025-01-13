const ensureAuthenticated = (req, res, next) => {
  if (!req.user || !req.user.uid) {
    return res.redirect('/login');  
  }
  next(); 
};

export default ensureAuthenticated;