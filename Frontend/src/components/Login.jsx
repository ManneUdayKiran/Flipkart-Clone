import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import '../App.css';
import Alert from '@mui/material/Alert';
import { signInWithPopup } from 'firebase/auth';
import { provider } from '../firebase'; // adjust if needed
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();


  const handleGoogleLogin = async () => {
  setError('');
  setSuccess(false);
  try {
    await signInWithPopup(auth, provider);
    setSuccess(true);
    navigate('/userpage'); // Redirect to home or desired page after login
  } catch (err) {
    setError(err.message);
  }
};


  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
        navigate('/userpage'); // Redirect to home or desired page after login

    

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess(true);
        navigate('/userpage'); // Redirect to home or desired page after login

      
    } catch (err) {
      setError(err.message);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="login container-fluid mt-5" style={{ maxWidth: '400px', border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
      <h2 className="text-center mb-4">Login</h2>
      {success && (
        <Alert variant="outlined" severity="success" className="mb-3">
          Login successful!
        </Alert>
      )}
      {error && (
        <Alert variant="outlined" severity="error" className="mb-3">
          {error}
        </Alert>
      )}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
        <hr />
<button type="button" className="btn btn-danger w-100 mt-2" onClick={handleGoogleLogin}>
  <GoogleIcon/>Sign in with Google
</button>

      </form>
    </div>
  );
};

export default Login;
