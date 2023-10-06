import "./AltHeader.css";
import logo from "../../assets/full-logo-opt.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useBack } from "use-back";

const AltHeader = ({ title }) => {
  const {hasBack, handleBack} = useBack();

  return (
    <section className="alt-header-container">
      <header className="header-content">
        <FontAwesomeIcon
          className="header-back"
          icon={faArrowLeft}
          onClick={handleBack}
        />
        <Link to="/">
          <img className="header-logo alt-header-logo" src={logo} alt="logo" />
        </Link>
        <FontAwesomeIcon
          className="header-back header-filler"
          icon={faArrowLeft}
        />
      </header>

      {title && (
        <div className="header_title_container">
          <h2 className="titulo_header">{title}</h2>{" "}
        </div>
      )}
    </section>
  );
};

export default AltHeader;
