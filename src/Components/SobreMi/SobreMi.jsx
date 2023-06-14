// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import './SobreMi.css'
import Foto from '../../assets/Foto1.png'



const info = {
    parrafo1: 'Soy un entusiasta de la programacion web, autodidacta, y ambiciono con llegar a un gran nivel ya sea en el desarrollo de FrontEnd y BackEnd.',
    parrafo2: 'Llevo estudiando desde mis años de secundaria, curse algunos años en ingenieria de sistema en la UTN FRM, hasta que encontre mi gran pasion en la programacion web, y desde el año 2019 estuve estudiando Tecnicatura Universitaria en Programacion en la UTN FRM hata que la finalicé en el presente año, la cual abrio mis horizontes y conocimientos sobre el area.',
    parrafo3: 'Actualmente no cuento con experiencia laboral en el sector, aunque en este periodo de tiempo he estado realizando proyectos para mejorar cada vez mas mis capacidades sobre las diferentes tecnologias.'
}

const SobreMi = () => {



  return (
      <div className='container-sobremi' id='sobreMiRef'>
        <h1 className="container-sobremi-titulo" >Sobre Mi</h1>
        <div className="container-sobremi-info">
            <div className="sobremi-info-texto" >
                <p>{info.parrafo1} <br/><br/></p>
                <p>{info.parrafo2} <br/> <br/></p>
                <p>{info.parrafo3} </p>
            </div>
            <img className="sobremi-info-imagen" src={Foto} />
        </div>
      </div>
  )
}

export default SobreMi