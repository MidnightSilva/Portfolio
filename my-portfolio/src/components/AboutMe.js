import React, { useState } from "react";

const AboutMe = () => {
  const [show, setShow] = useState(true);
  const Toggle = () => {
    if (show === true) {
      setShow(false);
    } else setShow(true);
  };

  return (
    <div className="aboutMeSection" id="aboutMe">
      <h1 className="Heading2">About Me</h1>
      <p className="Passage1">
        I’m a problem solver, who can analyze and think outside the box.
        Designing solutions and bring them to life. Independent self starter who
        can work in any team dynamic. .
        <br />
        <br />
      </p>
      {!show ? (
        <p className="Passage2">
          Upon returning from the Navy, I worked in the maintenance field for
          several years but wasn’t fulfilled. The covid pandemic led me to take
          a leap of faith and make a major career change to finally pursue my
          passion. I graduated from Wyncode’s immersive full-stack web
          development boot camp in September 2020 with experience collaborating
          with designers/developers to complete two-week sprints, managing
          version control in Github, using HTML5 and CSS/Flexbox, Javascript,
          and React (including React Context, React Router DOM, asynchronous
          states, event handling, props, and functional components).
          <br />
          <br />
          After graduating, I immediately enrolled in the UX/UI boot camp, where
          I practiced AGILE methodology, delivered and implemented design
          feedback, used IBM Design Thinking, UX Framework, Lean UX, Figma, and
          Adobe Creative Cloud. I also experienced user testing, wireframing,
          prototyping, interaction design, responsive design, and refined my
          public speaking skills by presenting a case study about Veteran
          suicide rates.
          <br />
          <br />I graduated from the UX/UI boot camp in December 2020 and I’m
          thrilled to be pursuing my passions by creating solutions to major
          problems, helping others, and giving back to the community with the
          use of technology.
        </p>
      ) : null}
      <button className="Drop-down" onClick={Toggle}>
        <span
          className="iconify"
          data-icon="bi:arrow-down-circle-fill"
          data-inline="false"
          data-width="50"
          data-height="50"
        ></span>
      </button>
    </div>
  );
};
export default AboutMe;
