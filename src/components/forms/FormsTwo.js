import React, {useState} from 'react';
import emailjs from 'emailjs-com';
const FormsTwo = () => {
   const frmContact = { username:'', email:'', asunto:'', mensaje:'' };
   const [contact,setContact] = useState(frmContact);
   const [showMessage, setShowMessage] = useState(false);
   const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
   };
   const handleSubmit = e =>{
	    e.preventDefault();
	   
		emailjs.send('gmail','template_3zxeg35', contact, 'user_rPPWQKnZV3R0p4Gt6M7Hu')
		.then((response) => {
				   console.log('SUCCESS!', response.status, response.text);
				   setContact(frmContact);
				   setShowMessage(true);
		}, (err) => {
				   console.log('FAILED...', err);
		});
		e.target.reset()
	 }
	 
	
  return (
    <div className="container pt-2 text-center">
    { showMessage ? <div className="" role="alert">Email Send Success!!</div> : ''}
		<form onSubmit={handleSubmit}>
		<div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Nombre</b> <br/>
						<input value={contact.username} required type="text" name="username" onChange={handleChange}  className="form-control" placeholder="Your email" />
					</div>
		</div>
    <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Your Email</b> <br/>
						<input required type="email" value={contact.email} name="email" onChange={handleChange} className="form-control" placeholder="Your email" />
					</div>
		</div>
    <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Asunto</b> <br/>
						<input value={contact.asunto} required type="text" name="asunto" onChange={handleChange}  className="form-control" placeholder="Your email" />
					</div>
		</div>
    <div className="pt-3 col-md-5 mx-auto">
					<div className="form-group text-left"> <b>Describe your concerns</b> <br/>
						<textarea id="mensaje" value={contact.mensaje} required type="area"   name="mensaje" onChange={handleChange} className="form-control" placeholder="Describe your concerns" ></textarea>
					</div>
		</div>
    <div className="pt-3 col-md-5 mx-auto text-left">
					<button className="btn btn-primary">Submit</button>
			  </div>

		</form>
	</div>
  )
}
export default FormsTwo;