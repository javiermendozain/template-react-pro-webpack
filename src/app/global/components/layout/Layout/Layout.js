import React from 'react';
import Content from '../Content/Content';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout=({children})=>{
  return (
    <div>
      <Header />
      <Content>
        {children}
      </Content>
      <Footer />
    </div>
  );
};

export default Layout;
