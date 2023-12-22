import React, { useState } from "react";
import styles from "../css/Navbar.module.css";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  // 네비바 현재 페이지 active 
  const [btn, setBtn] = useState([false, false]);
  const activeBtn = (idx) => {
    let temp = [false, false];

    if (idx === 2) {
      setBtn(temp);
    } else {
      temp[idx] = true;
      setBtn(temp);
    }
  };

  return (
    <div className={styles.nav}>
      <div>
        <Link onClick={() => activeBtn(2)} to={"/"}>
          <img className={styles.navLogo} src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.navList}>
        <Link
          onClick={() => activeBtn(0)}
          to={"/recipe"}
          className={btn[0] ? styles.navBtnActive : styles.navBtn}
        >
          <h1>레시피 목록</h1>
        </Link>
        <Link
          onClick={() => activeBtn(1)}
          to={"/map"}
          className={btn[1] ? styles.navBtnActive : styles.navBtn}
        >
          <h1>맛집 검색</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
