import React from "react";
import TacoPaco from "../../img/tacopaco.png";
import "../../App.css";

// const styles = {
//   card: {
//     background: "#D3D3D3",
//     height: "100%",
//   },

//   font: {
//     color: "white",
//   },
// };

export default function Home() {
  return (
    <div>
      <img src={TacoPaco} alt="TacoPaco" width="100%" height="100%" />
      <figcaption>TacoBoutIT</figcaption>
    </div>
  );
}
