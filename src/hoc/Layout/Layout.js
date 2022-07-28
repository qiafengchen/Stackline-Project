import React from 'react';
import Toolbar from '../../conponents/Toolbar/Toolbar';

const Layout = ({ children }) => {
  return (
    <div>
      <Toolbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
