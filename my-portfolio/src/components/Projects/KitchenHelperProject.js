import projectJson from "../Projects.json";
import Project from "../components/DevelopmentProject";
import { v4 as uuidv4 } from "uuid";

const KitchenHelperProject = () => {
  return (
    <div>
      {projectJson.KitchenHelper.map((project, i) => (
        <Project {...project}  />
      ))}
    </div>
  );
};

export default KitchenHelperProject;
