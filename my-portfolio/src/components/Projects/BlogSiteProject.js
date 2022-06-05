import projectJson from "../Projects.json";
import Project from "../Projects/DevelopmentProject"
import { v4 as uuidv4 } from "uuid";

 const BlogSiteProject = () => {
  return (
    <div>
      {" "}
      {projectJson.BlogSite.map((project, i) => (
        <Project {...project} />
      ))}
    </div>
  );
};

export default  BlogSiteProject