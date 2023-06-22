/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './CartasProye.css'


const CartasProye = ({Proyecto}) => {

  return (
    <div className='card'>
        <img className='card__img' src={Proyecto.img} />
        <div className='card__info'>
          <h1 className='info__titulo'>{Proyecto.name}</h1>
          <p className='info__subtitulo'>{Proyecto.description}</p>
          <div className='card__buttons'>
            <a  className='card__button' href={Proyecto.webSite}>Web Site</a>
            {Proyecto.gitHub.length === 0 &&<a  className='card__button' href={Proyecto.gitHub}>GitHub</a>}
          </div>
        </div>
    </div>
  )
}

export default CartasProye