import React,{ useState} from 'react'
import { NavLink } from "react-router-dom";
import Menu from '../images/bars-solid.svg'
import Close from '../images/times-solid.svg'
import logoAle from '../images/logo.png'
import "./styles/navbar.css";

const NavBar = () => {
  const [menu, setMenu] = useState(false)

    const toggleMenu = () =>{
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }
  return (
    <div>
     <div className="content_navbar">
       <div className="content-nav">
       <div className="logo">
                <NavLink  to="/"><img src={logoAle} alt=""/></NavLink>
            </div>
          <div className="menu" onClick={toggleMenu}>
            <img src={Menu} alt="" width="30" />
            </div>

            
            <ul style={styleMenu}>
                <li onClick={toggleMenu} className="navevent"><NavLink activeClassName="current" to="/" exact>Inicio</NavLink></li>
                <li onClick={toggleMenu} className="navevent"><NavLink activeClassName="current" to="/nosotros" exact>Nosotros</NavLink></li>
                <li onClick={toggleMenu} className="navevent"><NavLink activeClassName="current" to="/servicios" exact>Servicios</NavLink></li>
                <li onClick={toggleMenu} className="navevent"><NavLink activeClassName="current" to="/proyectos" exact>Proyectos</NavLink></li>
                <li onClick={toggleMenu} className="navevent"><NavLink activeClassName="current" to="/geoplay" exact>GeoPlay</NavLink></li>
                <li onClick={toggleMenu} className="navevent"><NavLink activeClassName="current" to="/cursos" exact>Cursos</NavLink></li>
               

                <li onClick={toggleMenu} className="navevent"><NavLink activeClassName="current" to="/contacto" exact>Contáctanos</NavLink></li>
                <li onClick={toggleMenu}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>

       </div>
     </div>
    </div>
  )
}

export default NavBar;