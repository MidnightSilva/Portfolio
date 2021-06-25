import MyForm from "../components/Myform.js";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

const ContactSection = () => {
      useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <div className="formpage" id="form" data-aos="zoom-in">
      <h2 className="heading5">Contact me</h2>
      <p className="subheading5">
        Leave a message and I'll get back to you as soon as I can. Looking
        forward to hearing from you.
      </p>
      <MyForm />
    </div>
  );
};

export default ContactSection;
