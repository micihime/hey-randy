import "app/styles/style.css";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const navigationClass = `${styles.navigation} ${
    hamburgerOpen ? styles.navigationOpen : ""
  }`;

  return (
    <div className="header">
      <div className="content flexi">
        <div className="logo">Randy</div>
        <div className={navigationClass}>
          <ul className="navbar flexi">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/how-it-works">About Randy</a>
            </li>
            <li>
              <a href="/key-features">Features</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
          <button
            className={styles.hamburger}
            onClick={toggleHamburger}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                toggleHamburger();
              }
            }}
            aria-label="Menu"
            aria-expanded={hamburgerOpen}
          >
            {hamburgerOpen ? (
              <IconX size={34} stroke={1.5} />
            ) : (
              <IconMenu2 size={34} stroke={1.5} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
