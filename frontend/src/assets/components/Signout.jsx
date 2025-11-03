import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Signout.css';

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    alert('Signing out...');       // Alert popup
    localStorage.clear();          // Clear local storage

    setTimeout(() => {
      navigate('/login');          // Redirect to login after delay
    }, 1000); // Optional short delay
  };

  return (
    <div className="signout-container">
      <button className="signout-btn" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default SignOutButton;
