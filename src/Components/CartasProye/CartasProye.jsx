/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './CartasProye.css'


const CartasProye = ({Proyecto}) => {

  const [hovered, setHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setHovered(true);
  };
  
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className='card'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <img className='card__img' src={hovered ? Proyecto.img : Proyecto.imgLogo} alt={Proyecto.name} />
        <div className='card__info'>
          <h1 className='info__titulo'>{Proyecto.name}</h1>
          <p className='info__subtitulo'>{Proyecto.description}</p>
          <div className='card__technologies'>
          {Proyecto.technologies.map((aux) => (
                <div className='technologies__pill' key={aux.id} style={{ backgroundColor: aux.teccolor }}>
                  {aux.tecname}
                </div>
          ))}
          </div>
          <div className='card__buttons'>
            <a  className='card__button' href={Proyecto.webSite}>Web Site</a>
            {Proyecto.gitHub.length !== 0 &&<a  className='card__button' href={Proyecto.gitHub}>GitHub</a>}
          </div>
        </div>
    </div>
  )
}

export default CartasProye