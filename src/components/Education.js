import Arrow from "../utils/arrow-right-circle-fill.svg";

function Education() {
  return (
    <div className="education">
      <h2>Education</h2>
      <hr></hr>
      <hr></hr>
      <div className="education-details">
        <div className="logo">
          <img src={Arrow} alt="logo" />
        </div>
        <div className="college">
          <h3>Angadi Institute of Technology and Management</h3>
          <p>
            Earned a Bachelor's degree in Mechanical Engineering with
            First-Class Honors
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
