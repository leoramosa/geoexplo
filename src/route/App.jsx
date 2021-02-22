import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* import { Router } from '@reach/router' */
import Home from  '../pages/Home'
import About from  '../pages/About'
import Services from  '../pages/Services'
import NotFound from  '../pages/NotFound'
import Contact from  '../pages/Contact'
import Layout from '../pages/Layout';
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import ServiceOne from '../pages/products/ServiceOne'
import ServiceTwo from '../pages/products/ServiceTwo'
import ServiceThree from '../pages/products/ServiceThree'
import ServiceFour from '../pages/products/ServiceFour'
import '@fortawesome/fontawesome-free/css/all.min.css';
import ScrollTop from '../components/ScrollTop';

function App ()  {
  const initialState = useInitialState()

  return (
    <BrowserRouter>
      <ScrollTop/>
      <AppContext.Provider value={initialState}>
          
          <Switch>

            <Route exact path="/" >
                  <Home/>
            </Route>

            <Layout>
            <Route  exact path="/nosotros" component={About} />
            <Route  exact path="/servicios" component={Services}  />
            <Route  exact path="/servicios/tramite-de-concesiones-mineras" component={ServiceOne}  />
            <Route  exact path="/servicios/consulta-astral" component={ServiceTwo}  />
            <Route  exact path="/servicios/psicomatrix" component={ServiceThree}  />
            <Route  exact path="/productos/floral-healing-pharmacy" component={ServiceFour}  />
            <Route  exact path="/contacto"  component={Contact} />
            </Layout>
            
            <Route component={NotFound} />
        </Switch>
        
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
