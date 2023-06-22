// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import './SobreMi.css'
import Foto from '../../assets/Foto1.png'



const info = {
    parrafo1: 'Soy un entusiasta de la programación web, autodidacta, y ambiciono llegar a un gran nivel, ya sea en el desarrollo de Frontend y Backend.',
    parrafo2: 'Llevo estudiando desde mis años de secundaria, cursé algunos años en ingeniería de sistemas en la UTN FRM, hasta que encontré mi gran pasión en la programación web. Desde el año 2019 estuve estudiando la Tecnicatura Universitaria en Programación en la UTN FRM hasta que la finalicé en el presente año, lo cual abrió mis horizontes y conocimientos sobre el área.',
    parrafo3: 'Actualmente no cuento con experiencia laboral en el sector, aunque en este periodo de tiempo he estado realizando proyectos para mejorar cada vez más mis capacidades en las diferentes tecnologías.'
}

const SobreMi = () => {



  return (
      <div className='sobremi' id='sobreMiRef'>
        <h1 className="sobremi__titulo" >Sobre Mi</h1>
        <div className="sobremi__info">
            <div className="info__texto" >
                <p>{info.parrafo1} <br/><br/></p>
                <p>{info.parrafo2} <br/> <br/></p>
                <p>{info.parrafo3} </p>
            </div>
            <img className="info__imagen" src={Foto} />
        </div>
      </div>
  )
}

export default SobreMi