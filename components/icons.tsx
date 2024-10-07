"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  return (
    <div className="social-menu mt-4">
      <ul className="flex justiy-center">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100007671552746">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/TamKi13059439">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/loki_1009/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCxq4ZUStvhnKmQHPOyXGZEw">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/rocky-lok-ki-tam/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Icons;
