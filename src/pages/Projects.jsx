
import React,  { useContext }  from 'react'

import AppContext from "../context/AppContext";
import './styles/projects.css'
// Import Swiper React components
import 'swiper/swiper.scss';

function Projects () {
  const {state} =useContext(AppContext)
  const { projects } = state;

  
  return (
    <>
      <div className="content_projects">
          <div className="title-event-projects">
            <div className="line_color-projects"></div>
            <p>
              Nuestros servicios
            </p>
          </div>
          {projects.map((project, i) => (
          <div key={i} className={`row_projects ${project.column}`} >
          <div className="content-service-g-projects">
                  <div className="projects_all" >
                    <div className="wrapper_all-projects">
    
                    <p className="detail-title-projects">{project.name}</p>
                    <div className="content-button-projects">
                        <div className="content-bo-projects">
                            <a className="btn-whatsapp-projects" href={`https://api.whatsapp.com/send?phone=51995508944&text=${project.mensaje}${project.name}`} rel="noopener noreferrer" target="_blank">
                              <button className="button-whatsapp-projects" type="button">
                                  <i className="fab fa-whatsapp-projects"></i> {project.buttonstyle}
                              </button> 
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className="wrapper_two-projects">
                      <div className="wrapper_img-projects">
                        <img className="" src={project.image} alt=""/>
                      </div>
                    </div>
                   </div>
          </div>
          </div>

))}
        
        </div>
    </>
  )
}

export default Projects;