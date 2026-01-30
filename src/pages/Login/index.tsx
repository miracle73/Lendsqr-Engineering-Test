import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import LendsqrLogo from "../../assets/images/lendsqr.png";
import SigninImg from "../../assets/images/sign-in.png";

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Simple validation - in real app, this would be an API call
    if (email && password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/users');
    }
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="logo">
          <img src={LendsqrLogo} alt="Lendsqr" />
        </div>
        <div className="illustration">
          <img src={SigninImg} alt="Sign In" />
        </div>
      </div>

      <div className="login-right">
        <div className="login-form-container">
          <h1>Welcome!</h1>
          <p className="subtitle">Enter details to login.</p>

          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group password-group">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'HIDE' : 'SHOW'}
              </button>
            </div>

            <button type="button" className="forgot-password" onClick={() => {}}>FORGOT PASSWORD?</button>

            <button type="submit" className="login-btn">LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;