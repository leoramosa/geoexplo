import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import '../styles/Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <div className='form-inputs'>
          <label className='form-label'>Nombre</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='escribe tu nombre'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Escribe tu email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Asunto</label>
          <input
            className='form-input'
            type='text'
            name='asunto'
            placeholder='escribe el asunto'
            value={values.asunto}
            onChange={handleChange}
          />
          {errors.asunto && <p>{errors.asunto}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Mensaje</label>
          <textarea
          className='form-input textarea'
          type='text'
          name='message'
          placeholder='Escribe un mensaje'
          value={values.message}
          onChange={handleChange}
          >
          </textarea>
            {errors.asunto && <p>{errors.message}</p>}
        </div>
        {
          values.username !== '' && 
          values.email !== '' && 
          values.asunto !== '' && 
          values.message !== '' 
          ?
          <button className='form-input-btn' type='submit'>
          Enviar
        </button>
          : 
          <div className='form-btn-disable'>
          completar campos
        </div>
        }
        
      </form>
    </div>
  );
};

export default FormSignup;