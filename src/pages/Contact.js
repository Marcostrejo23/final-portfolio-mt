import react, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

export default function Contact() {
    const [SuccessfulMessage, setSuccessfulMessage]= useState("");
    const{ register, handleSubmit, errors}= useForm();
    const serviceID="service_4l4h8sk";
    const templateId="template_paxpr8f";
    const userID="user_eECDvyugKvvQ7IPltsJ7Z";

    const onSubmit = (data, r) => {
        sendEmail(
          serviceID, templateId, {
            name: data.name,
            phone: data.phone,
            email: data.email,
            subject: data.subject,
            description: data.description
          }, userID)
          r.target.reset()
      }
    
      const sendEmail = (serviceID, templateID, variables,) => {
        emailjs.send(serviceID, templateID, variables, userID).then(() => {
            setSuccessfulMessage("Information Submitted!");
          }).catch(err => console.error(`something is wrong ${err}`));
      }
    
      return (
        <div className="container">
          <div className = "contacts">
            <div className="text-center">
              <h1>Feel Free to reach out</h1>
              <p>Provide the information below</p>
            </div>
          </div>
        <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
            <input id="name" type= "text" className="form-control"
            placeholder="Name"
            name="name"
            />
            {/* Phone Input */}
            <input id="phone"type= "text" className="form-control"
            placeholder="Phone"
            name="phone"
            />
            {/* Email Input */}
            <input id="email"type= "email" className="form-control"
            placeholder="Email"
            name="email"
            />
            {/* Subject Input */}
            <input id="subject"type= "text" className="form-control"
            placeholder="Subject"
            name="subject"
            />
            </div>
            <div className="col-md-6 col-xs-12">
            <textarea id= "description" type= "text" className="form-control"
            placeholder="Description"
            name="description"
            ></textarea>
            <button className="btn-main-offer contact-btn" type="submit">Reach out</button>
            </div>
          </div>
          </form>
        </div>
        </div>
      );
    }