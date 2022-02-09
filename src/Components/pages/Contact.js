import react, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [SuccessfulMessage, setSuccessfulMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const serviceID = "service_4l4h8sk";
  const templateId = "template_paxpr8f";
  const userID = "user_eECDvyugKvvQ7IPltsJ7Z";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateId,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessfulMessage("Information Submitted!");
      })
      .catch((err) => console.error(`something is wrong ${err}`));
  };

  return (
    <div className="container">
      <div className="contacts">
        <div className="text-center">
          <div className="contact-text">
            <h1>Feel Free to reach out</h1>
            <p>
              Please fill out the form and describe what you're looking for in
              your project and I will contact you as soon as possible
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
              <input
                id="phone"
                type="text"
                className="form-control"
                placeholder="Phone"
                name="phone"
              />

              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />

              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
            </div>
            <div className="col-md-6 col-xs-12">
              <textarea
                id="description"
                type="text"
                className="form-control"
                placeholder="Description"
                name="description"
              ></textarea>
              <button
                type="button contact-btn"
                class="btn btn-outline-primary"
                type="submit"
              >
                Reach out
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
