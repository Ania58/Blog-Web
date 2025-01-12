import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import admin from "firebase-admin";
const auth = admin.auth();

const registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      await auth.createUser({ email, password });
      res.redirect('/login');
    } catch (error) {
      console.error('Error creating new user:', error);
      res.render("register.ejs", { error: "User could not be created. Try again!" });
    }
  };
  
  const loginUser = async (req, res) => {
    const { email, password } = req.body;

  try {
    const clientAuth = getAuth(); 
    const userCredential = await signInWithEmailAndPassword(clientAuth, email, password);
    const idToken = await userCredential.user.getIdToken(); 

    await auth.verifyIdToken(idToken);

    res.cookie('token', idToken, { httpOnly: true, secure: false });
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Error during login:', error);
    res.render("login.ejs", { error: "Invalid credentials. Please try again!" });
  }
  };


  const logoutUser = (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
  };

 
const registerForm = (req, res) => {
    res.render("register.ejs", { error: null });
  };
  
 
  const loginForm = (req, res) => {
    res.render("login.ejs", { error: null });
  };
  
  export { registerUser, loginUser, logoutUser, registerForm, loginForm }