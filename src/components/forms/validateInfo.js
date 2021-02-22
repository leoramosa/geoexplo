export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = 'nombre requerido';
  }
  if (!values.asunto.trim()) {
    errors.asunto = 'asunto requerido';
  }
  
  if (!values.message.trim()) {
    errors.message = 'mensaje requerido';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email es inválido';
  }

  
  return errors;
}