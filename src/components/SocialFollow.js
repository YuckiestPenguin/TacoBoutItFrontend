import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const styles = {
  card: {
    background: "#000000",
    color: "black",
    justifyContent: "center",
  },
};

export default function SocialFollow() {
  return (
    <section className="outline-color" style={styles.card}>
      <div class="social-container">
        <h3>Social Follow</h3>
        <a
          href="https://www.facebook.com/"
          className="facebook social"
          style={styles.align}
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/" className="Instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.twitter.com/" className="Twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
    </section>
  );
}
