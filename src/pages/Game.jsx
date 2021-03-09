
import React  from 'react'
import './styles/game.css'
// Import Swiper React components
import 'swiper/swiper.scss';
import game from '../images/game-geo.png'

function Game () {

  
  return (
    <>
      <div className="content_game">
        <div className="container_game">
          <div className="content_row-game">
             <p>Geo Play</p> 
            <div className="button-game">
              <a href="https://api.whatsapp.com/send?phone=51995508944&text=Hola%20quisiera%20m%C3%A1s%20infomacion%20sobre%20el%20juego%20GeoPlay" rel="noopener noreferrer" target="_blank">
                <button type="button">
                  más informacion
                </button>
              </a>
            </div>
          </div>
          <div className="content_row-game">
            <div className="game_img">
              <img src={game} alt=""/>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Game;