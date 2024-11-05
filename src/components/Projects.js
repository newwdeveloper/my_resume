import Arrow from "../utils/arrow-right-circle-fill.svg";
import projectData from "../utils/projectData";
function Projects() {
  return (
    <div className="project">
      <h2 id="np">Projects</h2>
      <hr></hr>
      <hr></hr>
      {projectData.map((project, index) => (
        <div className="project-info" key={index}>
          <div className="img">
            <img src={Arrow} alt="arrow" />
          </div>
          <div className="projectList">
            <h3>Project-{index + 1}</h3>
            <h2>{project.title}</h2>
            <p>
              <span style={{ fontWeight: "bold" }}>Description:</span>{" "}
              {project.description}
              <br />
              <span style={{ fontWeight: "bold" }}>
                Technologies Used:
              </span>{" "}
              {project.technologies} <br />
              <span style={{ fontWeight: "bold" }}>Key Learnings:</span>{" "}
              {project.learnings}
              <br />
              <span style={{ fontWeight: "bold" }}>Project Link:</span>{" "}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
