import styles from "@/styles/Navbar.module.css";
import Link from "next/link";
import { FaBroadcastTower } from "react-icons/fa";
import { useRouter } from "next/router";

// menu options
const menuOptions = [
  { name: "Docs", href: "/docs" },
  { name: "Examples", href: "/examples" },
  { name: "Github", href: "#" },
];

const HomeButton = () => {
  return (
    <button className={styles.homeButton}>
      <FaBroadcastTower />
      Relay It
    </button>
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
        {menuOptions.map((option) => (
          <li key={option.name}>
            <Link href={option.href}>
              <a
                className={
                  isActiveRoute(option.href)
                    ? styles.navButtonActive
                    : styles.navButton
                }
              >
                {option.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
