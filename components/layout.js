import React from 'react';
import Header from './header';
import Main from './main';


const Layout = ({ children }) => (
  <React.Fragment>
    <Header/>
    <Main>{children}</Main>
  </React.Fragment>
);

export default Layout;