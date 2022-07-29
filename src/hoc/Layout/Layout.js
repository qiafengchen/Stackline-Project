import React from 'react';
import { useDispatch } from 'react-redux';
import Toolbar from '../../conponents/Toolbar/Toolbar';

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: 'fetchData' });
  });
  return (
    <div>
      <Toolbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
