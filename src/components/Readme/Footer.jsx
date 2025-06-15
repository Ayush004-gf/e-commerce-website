import { Footer } from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsEnvelope,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";

import styles from "./Footer.module.css"; // Import CSS module

function FooterComponent() {
  return (
    <Footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.icons}>
          <Footer.Icon
            href="https://www.linkedin.com/in/agarwal820"
            icon={BsLinkedin}
          />
          <Footer.Icon href="https://github.com/Ayush004-gf" icon={BsGithub} />
          <Footer.Icon
            href="mailto:ayushagarwal.210920@gmail.com"
            icon={BsEnvelope}
          />
          <Footer.Icon
            href="https://api.whatsapp.com/send/?phone=8092714372&text&type=phone_number&app_absent=0"
            icon={BsWhatsapp}
          />
        </div>
      </div>
    </Footer>
  );
}

export default FooterComponent;

/* Footer.module.css */
