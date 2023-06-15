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
        <div className='contactame' id='contactameRef'>
            <h1 className="contactame__titulo">Contactame</h1>
            <form ref={form} onSubmit={sendEmail} className="contactame__form" action="">
                    <div className="form__section">
                        <label className="form__namedata">Nombre Completo</label>
                        <input className="form__data" type="text" name="name" required></input>
                    </div>
                    <div className="form__section">
                        <label className="form__namedata">Direccion Email</label>
                        <input className="form__data" type="email" name="user_email" required></input>
                    </div>
                    <div className="form__section">
                        <label className="form__namedata">Numero De Telefono (Opcional)</label>
                        <input className="form__data" type="tel" name="phone"></input>
                    </div>
                    <div className="form__section">
                        <label className="form__namedata">Asunto</label>
                        <input className="form__data" type="text" name="subject" required></input>
                    </div>
                    <div className="form__section">
                        <label className="form__namedata">Mensaje</label> 
                        <textarea className="form__dataarea" name="message" rows="5" required></textarea>
                    </div>
                    <button className="form__button">
                        Send
                    </button>
            </form>
        </div>
  )
}

export default Contactame