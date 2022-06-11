import projectJson from "../../Projects.json";
import Project from "../Projects/DevelopmentProject"


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