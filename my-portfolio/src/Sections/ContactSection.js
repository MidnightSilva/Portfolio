import MyForm from "../components/Myform.js";

const ContactSection = () => {
  return (
    <div className="formpage" id="form">
      <h2 className="heading5">Contact me</h2>
      <div className="backdrop"></div>
      <p className="subheading5">
        Leave a message and I'll get back to you as soon as I can. Looking
        forward to hearing from you.
      </p>
      <MyForm />
    </div>
  );
};

export default ContactSection;
