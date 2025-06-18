import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { provider } from '../firebase';
import GoogleIcon from '@mui/icons-material/Google';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignUp = async () => {
  try {
    await signInWithPopup(auth, provider);
    alert('Signed in with Google!');
    navigate('/');  // Redirect wherever appropriate
  } catch (err) {
    setError(err.message);
  }
};


  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Account created successfully!');
      navigate('/login'); // Redirect after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2 className="text-center mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp}>
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
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="text-danger mb-3">{error}</div>}
        <button type="submit" className="btn btn-primary w-100">Create Account</button>
        <hr />
<button type="button" className="btn btn-danger w-100 mt-2" onClick={handleGoogleSignUp}>
 <GoogleIcon/> Sign Up with Google
</button>

      </form>
    </div>
  );
};

export default SignUp;
