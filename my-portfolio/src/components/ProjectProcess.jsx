import Process1of4 from '../assets/Svgs/Process1of4.svg'
import Process2of4 from "../assets/Svgs/Process2of4.svg";
import Process3of4 from "../assets/Svgs/Process3of4.svg";
import Process4of4 from "../assets/Svgs/Process4of4.svg";
const ProjectProcess = () => {
    return (
      <>
        <div className="process-contianer">
          <img className="process-step1" src={Process1of4} alt="" />
          <img className="process-step2" src={Process2of4} alt="" />
          <img className="process-step3" src={Process3of4} alt="" />
          <img className="process-step4" src={Process4of4} alt="" />
        </div>
        <div className="process-step1-des-container">
          <h3 className="process-heading">Research</h3>
          <p className="procss-des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            morbi ultrices nulla tellus diam faucibus ut odio. At scelerisque
            nisi, semper habitant enim in in elementum. Sollicitudin diam,
            interdum scelerisque convallis.
          </p>
        </div>
      </>
    );
}

export default ProjectProcess