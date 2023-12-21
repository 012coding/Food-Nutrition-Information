import React from "react";
import styles from "../css/Navbar.module.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div>
        <Link to={"/"}>
          <img className={styles.navLogo} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.navList}>
        <Link to={"/recipe"} className={styles.navBtn}>
          <h1>레시피 목록</h1>
        </Link>
        <Link to={"/nutrient"} className={styles.navBtn}>
          <h1>영양 성분</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
