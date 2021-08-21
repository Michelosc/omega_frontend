import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

function Logout() {
  return (
    <div className="logout">
      <Link to="/Login" className="btnLogout">
        <p>Logout</p>
      </Link>
    </div>
  );
}

export default Logout;
