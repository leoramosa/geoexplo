import React from 'react'
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import './styles/layout.css';

const Layout = ( {children} ) => {
  return (
    <div className="layout-global">
      <NavBar/>
      <div className="layout-content">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;
