// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import './Proyectos.css'
//import imagenEjm from '../../assets/imgEjm.jpg'
import CartasProye from '../CartasProye/CartasProye'
import ImgEjm from '../../assets/EjmImg.png'
// eslint-disable-next-line no-unused-vars
const Proye = [
    {
        id: 1 ,
        name: 'Portfolio',
        img: ImgEjm,
        webSite: 'https://francodellinocente.github.io/Portfolio/',
        gitHub: 'https://github.com/FrancoDellinocente/Portfolio',
        description: 'Portfolio creado con React y CSS utilizando metodologia BEM',
    },
    {
        id: 2 ,
        name: 'Gabrielle Ricciardi',
        img: "https://i.postimg.cc/sfPKyWnG/Captura-gabrielle-ricciardi.png",
        webSite: 'https://gabrielle-ricciardi-wv3q.vercel.app/',
        gitHub: 'https://github.com/FrancoDellinocente/Gabrielle-Ricciardi' ,
        description: 'Landing page creada con React y CSS utilizando metodologia BEM',
    },
    {
        id: 3 ,
        name: 'The Met Explorer',
        img: "https://i.postimg.cc/MTK8bNwr/themet.png",
        webSite: 'https://francodellinocente.github.io/The_Met_Art_Explorer/#/',
        gitHub: 'https://github.com/FrancoDellinocente/The_Met_Art_Explorer' ,
        description: 'Landing page que consulta API de TheMet',
    },
]

const Proyectos = () => {


  return (
      <div className='proyectos' id='proyectoRef' >
        <h1 className="proyectos__titulo">Proyectos</h1>
        <div className="proyectos__wrapcards" >
            {Proye.map((aux) => (<CartasProye className="wrapcards__card" key={aux.id} Proyecto={aux} />))} 
        </div>
        <a className="proyectos__otrospro" href='https://github.com/FrancoDellinocente'>...Otros proyectos</a>
      </div>
  )
}

export default Proyectos