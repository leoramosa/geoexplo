import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
const useForm = (callback, validate) => {

  const frmContact = { username:'', email:'', asunto:'', message:'' };
  const [values, setValues] = useState(frmContact);


  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
  };

 /*  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_3zxeg35', values, 'user_rPPWQKnZV3R0p4Gt6M7Hu')
      .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setErrors(validate(values));
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  } */

  const handleSubmit = e =>{
    e.preventDefault();
   
  emailjs.send('gmail','template_3zxeg35', values, 'user_rPPWQKnZV3R0p4Gt6M7Hu')
  .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
         setErrors(validate(values));
    setIsSubmitting(true);
  }, (err) => {
         console.log('FAILED...', err);
  });
  e.target.reset()
 }

 /*  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    emailjs.sendForm('gmail', 'template_3zxeg35', values, 'user_rPPWQKnZV3R0p4Gt6M7Hu')
      .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setValues(frmContact)
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

  }; */

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
        
      }
    },
    [errors, callback, isSubmitting]
  );

  return { handleChange, handleSubmit, values, errors};
};

export default useForm;