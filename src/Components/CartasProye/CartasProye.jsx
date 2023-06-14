/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './CartasProye.css'


const CartasProye = ({Proyecto}) => {

  return (
    <div className='container-card'>
        <img className='card-img' src={Proyecto.img} />
        <div className='container-card-info'>
          <h1 className='info-titulo'>{Proyecto.name}</h1>
          <p className='info-subtitulo'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis alias error, pariatur fuga quaerat</p>
          <div className='container-card-boton'>
            <a  className='card-boton' href="#">GitHub</a>
            <a  className='card-boton' href="#">Web Site</a>
          </div>
        </div>
    </div>
  )
}

export default CartasProye