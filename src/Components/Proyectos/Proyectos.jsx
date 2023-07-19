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
        name: 'Roots',
        img: ImgEjm,
        webSite: 'https://francodellinocente.github.io/Portfolio/',
        gitHub: '' ,
        description: 'Texto ejmplo',
    },
    {
        id: 4 ,
        name: 'The ones from The house next door',
        img: ImgEjm,
        webSite: 'https://francodellinocente.github.io/Portfolio/',
        gitHub: '' ,
        description: 'Texto ejmplo',
    },
    {
        id: 5 ,
        name: 'View of the future',
        img: ImgEjm,
        webSite: 'https://francodellinocente.github.io/Portfolio/',
        gitHub: '' ,
        description: 'Texto ejmplo',
    },
    {
        id: 6 ,
        name: '4PM Sun',
        img: ImgEjm,
        webSite: 'https://francodellinocente.github.io/Portfolio/',
        gitHub: '' ,
        description: 'Texto ejmplo',
    },
]

const Proyectos = () => {


  return (
      <div className='proyectos' id='proyectoRef' >
        <h1 className="proyectos__titulo">Proyectos</h1>
        <div className="proyectos__wrapcards" >
            {Proye.map((aux) => (<CartasProye className="wrapcards__card" key={aux.id} Proyecto={aux} />))} 
        </div>
        <a className="proyectos__otrospro" href='#'>...Otros proyectos</a>
      </div>
  )
}

export default Proyectos