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
        imgLogo:"https://i.postimg.cc/N0P78BPv/1portfolio.png",
        technologies:[
            {
                tecname: "React",
                teccolor: "#098DE3",
            },
            {
                tecname: "Css",
                teccolor: "#0E74BC",
            },
        ],
        webSite: 'https://francodellinocente.github.io/Portfolio/',
        gitHub: 'https://github.com/FrancoDellinocente/Portfolio',
        description: 'Portfolio creado con React y CSS utilizando metodologia BEM',
    },
    {
        id: 2 ,
        name: 'Gabrielle Ricciardi',
        img: "https://i.postimg.cc/sfPKyWnG/Captura-gabrielle-ricciardi.png",
        imgLogo:"https://i.postimg.cc/fR8xZMsS/1gabri.png",
        technologies:[
            {
                tecname: "React",
                teccolor: "#098DE3",
            },
            {
                tecname: "Css",
                teccolor: "#0E74BC",
            },
        ],
        webSite: 'https://gabrielle-ricciardi-wv3q.vercel.app/',
        gitHub: 'https://github.com/FrancoDellinocente/Gabrielle-Ricciardi' ,
        description: 'Landing page simulado una pagina de una bodega, se uso React y Css, Todas las imagenes y textos fueron generados por IA',
    },
    {
        id: 3 ,
        name: 'The Met Explorer',
        img: "https://i.postimg.cc/MTK8bNwr/themet.png",
        imgLogo:"https://i.postimg.cc/wTcXfhbV/1themet.png",
        technologies:[
            {
                tecname: "Vue 3",
                teccolor: "#3ABA81",
            },
            {
                tecname: "TypeScript",
                teccolor: "#3178C6",
            },
            {
                tecname: "Css",
                teccolor: "#0E74BC",
            },
        ],
        webSite: 'https://francodellinocente.github.io/The_Met_Art_Explorer/#/',
        gitHub: 'https://github.com/FrancoDellinocente/The_Met_Art_Explorer' ,
        description: 'Landing page que consulta API de TheMet, se puede buscar e inspexionar los datos de las obras',
    },
]

const Proyectos = () => {


  return (
      <div className='proyectos' id='proyectoRef' >
        <h1 className="proyectos__titulo">Proyectos</h1>
        <div className="proyectos__wrapcards" >
        {Proye.map((aux) => (
            <div key={aux.id} className='wrapcards__card'>
                <CartasProye  Proyecto={aux} />
            </div>
        ))} 
        </div>
        <a className="proyectos__otrospro" href='https://github.com/FrancoDellinocente'>...Otros proyectos</a>
      </div>
  )
}

export default Proyectos