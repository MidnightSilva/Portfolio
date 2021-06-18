import MyForm from "../components/Myform.js";

const ContactSection = () => {
  return (
    <div className="formpage" id="form">
      <div className="backdrop">
        <h2 className="heading5">Contact me</h2>
        <p className="subheading5">
          Leave a message and I'll get back to you as soon as I can. Looking
          forward to hearing from you.
        </p>
      </div>

      <MyForm />
    </div>
  );
};

export default ContactSection;
