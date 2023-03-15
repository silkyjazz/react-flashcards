import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Row, Col } from "react-bootstrap";

library.add(faGithub);
function Footer() {
  const iconStyle = {
    margin: "10px",
  };

  return (
    <footer className="footer">
      <Row>
        <Col lg={12} style={{ display: "flex", justifyContent: "center" }}>
          {" "}
          <a
            href="https://github.com/silkyjazz/react-flashcards"
            target="blank"
            className="icon"
          >
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="2x"
              style={iconStyle}
            />
          </a>
        </Col>
        <Col lg={12} style={{ display: "flex", justifyContent: "center" }}>
          <p>
            {" "}
            © 2023 Brian Zhao, Fayven Amgela, Milton Ly, Jasmine Ulloa. All
            Rights Reserved.
          </p>
        </Col>
      </Row>
      <p></p>
    </footer>
  );
}

export default Footer;
