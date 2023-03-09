import React from 'react';
import Navbar from '../Career/Dashboard/Navbar';
import Footer from '../Footer/Footer';

const OnlineJobLayout = ({children}) => {
    return (
        <div>
     <Navbar />
      {children}
      <Footer />
        </div>
    );
};

export default OnlineJobLayout;