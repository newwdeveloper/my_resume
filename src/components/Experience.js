import Arrow from "../utils/arrow-right-circle-fill.svg";
function Experience() {
  return (
    <div className="head">
      <h1>Work Experience(non-IT)-3yrs</h1>
      <hr></hr>
      <hr></hr>
      <div className="experience">
        <div className="first">
          <div className="symbol">
            <img src={Arrow} alt="arrow" />
          </div>
          <div className="company">
            <h3>Engineering Trainee</h3>
            <h2>Aerospace Knowledge Center</h2>
            <p>
              Operated HMC machines, performing setup, monitoring, and
              adjustments to ensure high-quality output and adherence to project
              specifications.
            </p>
          </div>
          <div className="years">
            <h2>Apr-2019- Sep-2019</h2>
          </div>
        </div>
        <div className="first">
          <div className="symbol">
            <img src={Arrow} alt="arrow" />
          </div>
          <div className="company">
            <h3>Design Engineer</h3>
            <h2>A.V.Enginerring</h2>
            <p>
              Perform drafting and 3D modeling to support design projects,
              creating accurate technical drawings and models that align with
              project specifications. Lead ISO certification initiatives,
              overseeing documentation and compliance, which has enhanced
              operational standards and enabled successful audits.
            </p>
          </div>
          <div className="years">
            <h2>2021- Present</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
