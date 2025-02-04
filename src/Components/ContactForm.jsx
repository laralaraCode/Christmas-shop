import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = ()=> {
  const [state, handleSubmit] = useForm("myForm");

  if (state.succeeded) {
      return <p className='footerlink green'>Спасибо за ваше сообщение!</p>;
  }
  
  return (
      <form className='App' onSubmit={handleSubmit}>
      <label className='about' htmlFor="email">
        Ваш e-mail
      </label>
      <input className='inputcontact'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <br/>
      <label className='about' htmlFor="message">
      Ваше сообщение
      </label>
      <textarea className='inputcontact'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='btnSend' type="submit" disabled={state.submitting}>
      Отправить
      </button>
    </form>
  );
}
export default ContactForm;