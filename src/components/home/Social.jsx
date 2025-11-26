import React from "react";
import git from "../../assests/github-unscreen.gif"
import linkedin from "../../assests/linkedincrop.gif"

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://github.com/emirhan-dere-tech" className="home__social-icon">
        {/* <i class="uil uil-github-alt"></i> */}
        <img src={git} alt="" className="home__social-icon" />
      </a>

      <a href="https://www.linkedin.com/in/emirhan-dere-755886206/" className="home__social-icon">
        {/* <i class="uil uil-linkedin"></i> */}
        <img src={linkedin} alt="" className="home__social-icon" />
      </a>
    </div>
  );
};

export default Social;
