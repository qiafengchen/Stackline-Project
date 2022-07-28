import React from 'react';

import burgerLogo from '../../assets/stackline_logo.svg';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <a href="https://www.stackline.com">
      <img src={burgerLogo} alt="MyBurger" />
    </a>
  </div>
);

export default logo;
