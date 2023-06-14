// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import './Proyectos.css'
//import imagenEjm from '../../assets/imgEjm.jpg'
import CartasProye from '../CartasProye/CartasProye'
// eslint-disable-next-line no-unused-vars
const Proye = [
    {
        id: 1 ,
        name: 'Liverpool Fan Page',
        img: '/src/assets/EjmImg.png',
        href: '/',
        description: 'Texto ejmplo',
    },
    {
        id: 2 ,
        name: 'Postick',
        img: '/src/assets/EjmImg.png',
        href: '/',
        description: 'Texto ejmplo',
    },
    {
        id: 3 ,
        name: 'Roots',
        img: '/src/assets/EjmImg.png',
        href: '/',
        description: 'Texto ejmplo',
    },
    {
        id: 4 ,
        name: 'The ones from The house next door',
        img: '/src/assets/EjmImg.png',
        href: '/',
        description: 'Texto ejmplo',
    },
    {
        id: 5 ,
        name: 'View of the future',
        img: '/src/assets/EjmImg.png',
        href: '/',
        description: 'Texto ejmplo',
    },
    {
        id: 6 ,
        name: '4PM Sun',
        img: '/src/assets/EjmImg.png',
        href: '/',
        description: 'Texto ejmplo',
    },
]

const Proyectos = () => {


  return (
      <div className='container-proyectos' id='proyectoRef' >
        <h1 className="container-proyectos-titulo">Proyectos</h1>
        <div className="container-proyectos-wrapcards" >
            {Proye.map((aux) => (<CartasProye className="wrapcards-card" key={aux.id} Proyecto={aux} />))} 
        </div>
        <a className="container-proyectos-otrospro" href='#'>...Otros proyectos</a>
      </div>
  )
}

export default Proyectos