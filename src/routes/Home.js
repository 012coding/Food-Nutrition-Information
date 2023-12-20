import React from "react";
import styles from "../css/Home.module.css";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.container}>
          <Fade>
            <div className={styles.logoBox}>
              <h1 className={styles.logo}>
                모든 음식에 대한
                <br /> 영양 정보
              </h1>
            </div>
          </Fade>
        </div>
        <div className={styles.container}>
          <div className={styles.logoBox}>
            <Fade>
              <h1 className={styles.logo}>
                검색 한번으로
                <br /> 편리하게
              </h1>
              <div className={styles.searchBox}>
                <input
                  className={styles.search}
                  placeholder="음식정보를 입력하세요"
                />
                <button className={styles.searchBtn}>검색</button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
