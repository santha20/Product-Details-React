import React from 'react';
import classes from './Topbar.module.css';

const Topbar = () => {
    return(
        <header className="App-header">
        <nav className={classes.Topbar}>
        <img src="amazon-png-logo-vector-6695.png"  alt="Amazon Logo"></img>
      </nav>
      </header>
    )
}

export default Topbar;