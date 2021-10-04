import React from "react";
import jorgeImg from '../assets/Images/FullSizeRender.jpg'
// import jorgeImg from "../dist/scss/IMG_7779.jpg";
const WhoIAm = () => {
  return (
    <div className="whoiam" id="whoiam">
      <img src={jorgeImg} alt="Jorge Silva" className='jorge-img' />
      <p className='aboutme-whoiam'>
        I’m a Navy Veteran with a wide range of experience, including
        maintaining steam engines, fire sprinklers and other complex systems. I
        have a deep interest in understanding systems holistically and
        implementing strategic solutions based on research. I’ve moved into the
        field of technology, web development and user experience design. I enjoy
        leveraging my skills of storytelling and photo editing to enhance my
        projects and connect with the community. As part of my UX certification,
        I co-designed a veteran mental health resource called Outpost that sums
        up my desire to make an impact on the world with whatever I create.
      </p>
    </div>
  );
};

export default WhoIAm;
