import paperplane from "../assets/Images/paperplanewithtrail.jpg";

 const PaperPlane = (props) => {


 
  return (
    <>
      {" "}
      <img
        className="message-plane"
        alt="paper plane"
        src={paperplane}
        onClick={props}
      />
    </>
  );
}

export default PaperPlane