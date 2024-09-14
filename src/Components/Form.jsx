//Hasta las 19:06
/* eslint-disable no-unused-vars */
//import React,
 
import React from "react";
import { useState } from 'react';
import '../Styles/form.css'; // Importa el archivo CSS

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const nameRegex = /^[A-ZÁÉÍÓÚÑ\s]{3,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    if (!nameRegex.test(name)) {
      setNameError('El nombre debe tener al menos 3 caracteres, sólo letras, acentos y espacios válidos.');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!emailRegex.test(email)) {
      setEmailError('El correo electrónico no es válido.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (isValid) {
      setSuccessMessage(`Gracias, ${name}, te contactaremos cuanto antes vía email.`);
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Formulario de Contacto</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre Completo:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value.toUpperCase())}
              placeholder="Ingrese su nombre completo"
            />
            {nameError && <p className="error">{nameError}</p>}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo electrónico"
            />
            {emailError && <p className="error">{emailError}</p>}
          </div>

          <button type="submit">Enviar</button>

          {successMessage && <p className="success">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Form;