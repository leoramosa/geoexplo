/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContext from "../context/AppContext";
// Import Swiper React components
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import './styles/services.css'
import './styles/products.css'

function Products () {
  const {state} =useContext(AppContext)
  const { products } = state;
  return (
    <>
        <div className="title-event">
          <p>
             Productos
          </p>
          </div>
          <>
          {products.map((product, i) => (
            <div key={product+i} className="productOne">
                      <div className="content-imagen">
                        <img src={product.image} alt={product.name}/>
                      </div>
                        <div className="detalle">
                          <p className="detail-title">{product.name}</p>
                          <p className="detail-price">{product.price}</p>
                          <div className="little-description">
                              <div className="breve">{product.breve}</div>
                          </div>
                          
                              { product.buttontype === 'comprar' ? 
                              <div className="content-button">
                            <div className="content-bo">
                              <button className="button-whatsapp" type="button">
                              <a className="btn-whatsapp" href={`https://api.whatsapp.com/send?phone=51990319569&text=${product.mensaje}`} rel="noopener noreferrer" target="_blank">
                                 <i className="fab fa-whatsapp"></i> {product.buttontype}
                                 </a>
                                </button> 
                                
                                
                                </div>
                                <div className="content-bt">
                                <Link className="detail-ver" to={`/${product.tipo}/${product.details}`}>ver más</Link>
                                </div>
                                </div>

                                : 
                                <div className="content-button-disable">
                                  <div className="button-whatsapp-disable">{product.buttontype}</div>
                                  <div className="content-bt">
                                <Link className="detail-ver" to={`/${product.tipo}/${product.details}`}>ver más</Link>
                                </div>
                                </div>
                                
                            
                            }

                        </div>
                    </div>
                ))}
          </>
    </>
  )
}

export default Products;