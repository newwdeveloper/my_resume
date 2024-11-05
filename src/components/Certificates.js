import certificate from "../utils/award.svg";
function Certificates() {
  return (
    <div className="certificate">
      <h2>
        Certificate
        <img src={certificate} alt="award" />
      </h2>
      <hr></hr>
      <hr></hr>
      <div className="certificatelist">
        <ol>
          <li>FullStack Web development </li>
          <li>UG-NX drafting and modelling</li>
        </ol>
      </div>
    </div>
  );
}

export default Certificates;
