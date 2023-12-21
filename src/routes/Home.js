import React from "react";
import styles from "../css/Home.module.css";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <Fade>
          <div className={styles.logoBox}>
            <h1 className={styles.logo1}>
              Food + Nutrition
              <br /> 음식과 영양정보를 한눈에
            </h1>
          </div>
        </Fade>
      </div>
      <div className={styles.container}>
        <Fade>
          <div className={styles.logoBox}>
            <h1 className={styles.logo1}>
              레시피도
              <br /> 편리하게 조회
            </h1>
          </div>
        </Fade>
      </div>
      <div className={styles.container}>
        <Fade>
          <div className={styles.logoBox}>
            <h1 className={styles.logo}>
              지금 바로 
              <br /> 검색해 보세요!
            </h1>
            <div className={styles.searchBox}>
              <input
                className={styles.search}
                placeholder="음식정보를 입력하세요"
              />
              <button className={styles.searchBtn}>검색</button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
