import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/contact", formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (submitted) {
    return <div className="success-message">Merci pour votre message!</div>;
  }

  //  const location="Tour Eiffel, Paris";
  //   const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  //   const encodedLocation = encodeURIComponent(location);

  return (
    <div className="relative w-auto min-h-[29rem] m-10 bg-[#1c1c1c] overflow-hidden rounded-md contactContainer shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col justify-between"> 
        <h1 className=" relative border-b text-center  mb-2">Contactez-moi</h1>
        <div className=" relative flex flex-col md:flex-row p-2 justify-between w-full h-auto space-y-2 md:space-x-4">
          <div className="leftForm flex flex-col md:w-2/3 ">
            <div className="box flex flex-col">
              <label htmlFor="firstName">Prénoms</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Votre Prénoms"
                className=" tracking-tighter text-sm w-full h-8 p-2 mb-2 bg-inherit border-b-2 border-first-color outline-none 
                        focus:border-second-color focus:shadow-md focus:shadow-second-color 
                        focus:border"
                required
              />
            </div>
            <div className="box flex flex-col">
              <label htmlFor="lastName">Nom</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Votre Nom"
                className="tracking-tighter text-sm w-full h-8 p-2 mb-2 bg-inherit border-b-2 border-first-color outline-none
                focus:border-second-color focus:shadow-md focus:shadow-second-color 
                        focus:border"
                required
              />
            </div>
            <div className="box flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                className="tracking-tighter text-sm w-full h-8 p-2 mb-2 bg-inherit border-b-2 border-first-color outline-none
                focus:border-second-color focus:shadow-md focus:shadow-second-color 
                        focus:border"
                required
              />
            </div>
            <div className="box flex flex-col">
              <label htmlFor="tel">Télephone</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre Téléphone"
                className="tracking-tighter text-sm w-full h-8 p-2 mb-2 bg-inherit border-b-2 border-first-color outline-none  
                focus:border-second-color focus:shadow-md focus:shadow-second-color 
                        focus:border"
                required
              />
            </div>
          </div>

          <div className="rightForm flex flex-col md:w-1/3 h-full">
            <label htmlFor="message">Message</label>
             <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                className=" tracking-tighter text-sm w-full h-full p-2 mb-2 bg-inherit border-2 border-first-color outline-none
                focus:border-second-color focus:shadow-md focus:shadow-second-color 
                        focus:border"
                required
              >
              </textarea>
          </div>
        </div>
        <div className=" relative flex items-center justify-center bg-second-color">
          <button type="submit" className="flex ">Envoyer</button>
        </div>
      </form>

      {/* <iframe
      title="Google Map"
      width="100%"
      height="400px"
      frameBorder="0"
      style={{ border: 0 }}
      src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedLocation}&zoom=${zoom=14}`}
      allowFullScreen
    /> */}
    </div>
  );
};

export default Contact;
