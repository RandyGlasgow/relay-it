import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { FaBroadcastTower, FaGithubAlt } from "react-icons/fa";
import { useRouter } from "next/router";

// menu options
const menuOptions = [
  { name: "Docs", href: "/docs" },
  { name: "Examples", href: "/examples" },
  { name: "Github", href: "#" },
];

const HomeButton = () => {
  return (
    <Link href={`/`}>
      <a className={styles.homeButton}>
        <FaBroadcastTower />
        Relay It
      </a>
    </Link>
  );
};

const GithubButton = ({ active }) => {
  return (
    <a
      className={styles.navButton}
      href='#'
      target='_blank'
      rel='noopener noreferrer'
    >
      <FaGithubAlt /> GitHub
    </a>
  );
};

const DocsButton = ({ active }) => {
  return (
    <Link href='/docs'>
      <a className={active ? styles.navButtonActive : styles.navButton}>Docs</a>
    </Link>
  );
};

const ExamplesButton = ({ active }) => {
  return (
    <Link href='/examples'>
      <a className={active ? styles.navButtonActive : styles.navButton}>
        Examples
      </a>
    </Link>
  );
};

export default function Navbar() {
  const router = useRouter();

  const isActiveRoute = (href) => {
    return href === router.pathname;
  };

  return (
    <nav className={styles.nav}>
      <HomeButton />
      <ul>
        <DocsButton active={isActiveRoute("/docs")} />
        <ExamplesButton active={isActiveRoute("/examples")} />
        <GithubButton />
      </ul>
    </nav>
  );
}
