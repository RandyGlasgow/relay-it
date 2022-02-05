import { FaGithubAlt, FaGlobe, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Relay-It is a project by Randy Glasgow.
        </h1>
        <div className={styles.buttonContainer}>
          <a href='https://github.com/RandyGlasgow/relay-it'>
            <button className={styles.buttonGitHub}>
              <FaGithubAlt />
            </button>
          </a>
          <a href='https://twitter.com/GlasgowRandy'>
            <button className={styles.buttonTwitter}>
              <FaTwitter />
            </button>
          </a>
          <a href='https://www.randyglasgow.dev/'>
            <button className={styles.buttonGlobe}>
              <FaGlobe />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
}
