import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.navContainer}>
        <Link to="/" style={styles.link}>
          Home
        </Link>
        <div>
          <Link to="/login" style={styles.link}>
            Login
          </Link>
          <Link to="/signup" style={styles.link}>
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: '#333',
    padding: '10px 20px',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: '#fff',
    marginLeft: '15px',
    textDecoration: 'none',
    fontSize: '18px',
  },
};

export default Navbar;
