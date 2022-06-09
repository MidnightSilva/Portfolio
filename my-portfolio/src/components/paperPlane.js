import paperplane from "../assets/Images/planejpg.jpg";
import Trail from "../assets/Images/trail.jpg";

 const PaperPlane = (props) => {


 
  return (
    <div className="plane-container">
      {" "}
      <img
        className="trail"
        alt="paper plane"
        src={Trail}
        onClick={props}
      />
      <img
        className="message-plane"
        alt="paper plane"
        src={paperplane}
        onClick={props}
      />
    </div>
  );
}

export default PaperPlane