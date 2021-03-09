
import React  from 'react'
import './styles/course.css'
// Import Swiper React components
import 'swiper/swiper.scss';
import course from '../images/course-laptop.png'

function Course () {

  
  return (
    <>
      <div className="content_course">
        <div className="container_course">
          <div className="content_row-course">
             <p>Cursos Online</p> 
            <div className="button-course">
              <a href="leo">
                <button type="button">
                  más informacion
                </button>
              </a>
            </div>
          </div>
          <div className="content_row-course">
            <div className="course_img">
              <img src={course} alt=""/>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Course;