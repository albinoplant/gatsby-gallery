import React from 'react';
import Header from './header';
import Main from './main';


const Layout = ({children, visable}) => (
  <React.Fragment>
    <Header visable = {visable}/>
    <Main>{children}</Main>
  </React.Fragment>
);

export default Layout;