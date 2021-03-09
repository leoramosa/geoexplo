
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
              <a href="leo">
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