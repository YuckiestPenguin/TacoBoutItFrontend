import React from "react";
import TacoPaco from "../../img/tacopaco.png";
import SocialFollow from "../../components/SocialFollow";

import "../../App.css";

export default function Home() {
  return (
    <>
      <div>
        <img src={TacoPaco} alt="TacoPaco" width="100%" height="100%" />
        <figcaption>TacoBoutIT</figcaption>
      </div>
      <SocialFollow />
    </>
  );
}
