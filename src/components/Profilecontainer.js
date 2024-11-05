import avtar from "../utils/profile.jpg";
import github from "../utils/icons8-github.svg";
import linkdin from "../utils/icons8-linkedin.svg";

function Profilecontainer() {
  return (
    <div className="profile-container">
      <div className="img-profile">
        <img src={avtar} alt="profile" />
      </div>
      <h2 className="name">AKSHAY MANGUTKAR</h2>
      <h3 className="title">FrontEnd Web developer</h3>
      <div className="profile-links">
        <div className="github">
          <a
            href="https://github.com/newwdeveloper?tab=repositories"
            target="blank"
          >
            <img src={github} alt="github logo" />
          </a>
          <h2>Githubid</h2>
        </div>
        <div className="linkdin">
          <a
            href="https://www.linkedin.com/in/akshay-mangutkar-25076318b/"
            target="blank"
          >
            <img src={linkdin} alt="github logo" />
          </a>
          <h2>Linkdinid</h2>
        </div>
      </div>
    </div>
  );
}

export default Profilecontainer;
