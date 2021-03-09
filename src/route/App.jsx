import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
/* import { Router } from '@reach/router' */
import Home from  '../pages/Home'
import About from  '../pages/About'
import Services from  '../pages/Services'
import Projects from  '../pages/Projects'
import Course from  '../pages/Course'
import Game from  '../pages/Game'
import NotFound from  '../pages/NotFound'
import Contact from  '../pages/Contact'
import Layout from '../pages/Layout';
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import ServiceOne from '../pages/products/ServiceOne'
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
            <Route  exact path="/proyectos" component={Projects}  />
            <Route  exact path="/geoplay" component={Game}  />
            <Route  exact path="/cursos" component={Course}  />
            <Route  exact path="/contacto"  component={Contact} />
            </Layout>
            
            <Route component={NotFound} />
        </Switch>
        
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
