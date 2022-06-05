import projectJson from "../../Projects.json";
import Project from "../Projects/DevelopmentProject"


const PlanttFactSiteProject = () => {
  return (
    <div>
      {" "}
      {projectJson.PlanetFactSite.map((project, i) => (
        <Project {...project} />
      ))}
    </div>
  );
}

export default PlanttFactSiteProject