import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth'; // Import the signOut function from Firebase Auth
import { auth } from '../firebase';

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      // Successful logout
      alert("You are now logged out!");
    })
    .catch((error) => {
      // Handle any errors that occur during logout
      console.error("Logout error:", error);
      alert("Logout failed. Please try again.");
    });
};

function Settings() {
  return (
    <div>
      <div>Settings</div>
      <div>
        <button
          className="my-20 bg-green-900 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
      <p>
        <Link to="/login" className="text-yellow-400">
          Return to Login
        </Link>
      </p>
    </div>
  );
}

export default Settings;