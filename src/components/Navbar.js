import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { FaBroadcastTower, FaGithubAlt } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

import { Menu } from "@headlessui/react";

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

const SmallDeviceMenu = () => {
  const [active, setActive] = useState(false);
  return (
    <div className={styles.smallDevice}>
      <HomeButton />
      <div>
        <Menu>
          <Menu.Button>
            <div>
              <button
                className={active ? styles.menuButtonActive : styles.menuButton}
                onClick={() => setActive((prev) => !prev)}
              >
                <IoMenu />
              </button>
            </div>
          </Menu.Button>

          <Menu.Items>
            <div className={styles.menu}>
              <Menu.Item>
                <GithubButton />
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default function Navbar() {
  const router = useRouter();

  const isActiveRoute = (href) => {
    return href === router.pathname;
  };

  const LargeDeviceMenu = () => {
    return (
      <div className={styles.largeDevice}>
        <HomeButton />
        <ul>
          <DocsButton active={isActiveRoute("/docs")} />
          <ExamplesButton active={isActiveRoute("/examples")} />
          <GithubButton />
        </ul>
      </div>
    );
  };

  return (
    <nav>
      <LargeDeviceMenu />
      <SmallDeviceMenu />
    </nav>
  );
}
