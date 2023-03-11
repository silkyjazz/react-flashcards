import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faGithub);
function Footer(){

    const iconStyle = {
        margin: "10px",
      };

    return (
        <footer className="footer" style={{ display: "flex", justifyContent: "center"}}>
        <p>
          <a href="https://github.com/silkyjazz/react-flashcards" target="blank"  className="icon">
            <FontAwesomeIcon
              icon={["fab", "github"]}
              size="2x"
              style={iconStyle}
            />
          </a>
        </p>
      </footer>
    )
}

export default Footer;