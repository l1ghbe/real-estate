import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState, createRef, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import linksHeader from "./linkHeader";

const Header = () => {
  const [burger, setBurger] = useState(false);
  const menuBurger = createRef();
  const router = useRouter();
  const globalClickHandler = (e) => {
    setBurger(false);
  };
  useEffect(() => {
    
    if (burger) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [burger]);

  useEffect(() => {
    window.addEventListener("click", globalClickHandler);
    return () => {
      window.removeEventListener("click", globalClickHandler);
    };
  }, []);

  return (
    <header
      className={styles.header}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className={styles.container}>
        <div className={styles.header__row}>
          <Link href="/">
            <a className={styles.logo}>
              <Image
                src="/images/Logo.svg"
                alt="Logotype"
                width={187}
                height={60}
              />
            </a>
          </Link>
          <nav className={styles.navigation}>
            <ul
              className={
                burger
                  ? `${styles["navigation-list"]} ${styles.active}`
                  : styles["navigation-list"]
              }
            >
              {linksHeader.map((link, id) => (
                <li className={styles["navigation-list__item"]} key={id}>
                  <Link href={`${link.linkTo}`}>
                    <a
                      onClick={(e) => {
                        setBurger(false);
                      }}
                      className={`${styles["navigation-list__link"]} ${
                        router.pathname == link.linkTo
                          ? styles["active-link"]
                          : ""
                      }`}
                    >
                      {link.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div
            onClick={(e) => {
              setBurger(!burger);
            }}
            className={
              burger
                ? `${styles["menu-burger"]} ${styles["active"]}`
                : styles["menu-burger"]
            }
            ref={menuBurger}
          >
            {!burger ? (
              <Image alt="menu" src="/images/menu.svg" width={27} height={27} />
            ) : (
              <Image
                alt="menu"
                src="/images/menu-white.svg"
                width={27}
                height={27}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
