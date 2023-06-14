// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import './Contactame.css'
import emailjs from '@emailjs/browser';
import 'aos/dist/aos.css';

const Contactame = () => {

    const form = useRef();

    const User_Id = import.meta.env.VITE_USER_ID;
    const Template_Id = import.meta.env.VITE_TEMPLATE_ID;
    const Public_Key = import.meta.env.VITE_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(User_Id, Template_Id, form.current, Public_Key)
          .then((result) => {
              console.log(result.text);
              e.target.reset()
          }, (error) => {
              console.log(error.text);
          });
          
      };
    

    return (
        <div className='container-contactame' id='contactameRef'>
            <h1 className="container-contactame-titulo">Contactame</h1>
            <form ref={form} onSubmit={sendEmail} className="container-contactame-formulario" action="">
                    <div className="form-section">
                        <label className="form-nameData">Nombre Completo</label>
                        <input className="form-data" type="text" name="name" required></input>
                    </div>
                    <div className="form-section">
                        <label className="form-nameData">Direccion Email</label>
                        <input className="form-data" type="email" name="user_email" required></input>
                    </div>
                    <div className="form-section">
                        <label className="form-nameData">Numero De Telefono (Opcional)</label>
                        <input className="form-data" type="tel" name="phone"></input>
                    </div>
                    <div className="form-section">
                        <label className="form-nameData">Asunto</label>
                        <input className="form-data" type="text" name="subject" required></input>
                    </div>
                    <div className="form-section">
                        <label className="form-nameData">Mensaje</label> 
                        <textarea className="form-dataArea" name="message" rows="5" required></textarea>
                    </div>
                    <button className="form-button">
                        Send
                    </button>
            </form>
        </div>
  )
}

export default Contactame