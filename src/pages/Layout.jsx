import React from 'react'
import NavBar from './../components/NavBar';
import Footer from './../components/Footer';
import './styles/layout.css';
import MessengerCustomerChat from 'react-messenger-customer-chat'

const Layout = ( {children} ) => {
  return (
    <div className="layout-global">
      <NavBar/>
      <MessengerCustomerChat
    pageId="108577217977757"
    appId="775872919759099"
    /* htmlRef="<REF_STRING>" */
  />
      <div className="layout-content">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default Layout;
