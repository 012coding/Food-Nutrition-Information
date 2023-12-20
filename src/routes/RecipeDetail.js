import { React, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../css/RecipeDetail.module.css";

function Detail() {
  const location = useLocation();
  const histoty = useNavigate();
  const cook = location.state.cook;

  const [showImage, setShowImage] = useState(true);
  const onClick = () => {
    setShowImage(!showImage);
  };

  const goBack = () => {
    histoty(-1);
  }

  const goTop = (event) => {
    event.preventDefault()
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <div className={styles.main}>
      <div className={styles.back1}>
        <div className={styles.fixedBox}>
          <div onClick={goBack} className={styles.backBtn}>목록으로</div>
          <div className={styles.topBtn} onClick={goTop}>↑</div>
        </div>
        <div className={styles.logo1}>
          {cook.name} ({cook.kcal} kcal)
        </div>
        <img src={cook.mainImg} alt="메인 이미지" className={styles.image} />
        <div>
          <div className={styles.foodWay}>
            <div>분류: {cook.kind}</div>
            <div>요리방법: {cook.cookMake}</div>
          </div>
        </div>
      </div>

      <div className={styles.back2}>
        <div className={styles.subTitle}>
          <b>재료</b>
          <span>Ingredients</span>
        </div>

        <div className={styles.subContent}>
          {cook.item.split(",").map((ingredient, idx) => (
            <div key={idx}>{ingredient.trim()}</div>
          ))}
        </div>
      </div>

      <div className={styles.back2}>
        <div className={styles.subTitle}>
          <b>영양성분</b>
          <span>Nutrient</span>
        </div>
        <div className={styles.subContent}>
          <div>탄수화물: {cook.tan}</div>
          <div>단백질: {cook.dan}</div>
          <div>지방: {cook.ji}</div>
          <div>나트륨: {cook.na}</div>
        </div>
      </div>

      <div className={styles.back2}>
        <div className={styles.show}>
          <div className={styles.subTitle}>
            <b>조리순서</b>
            <span>Steps</span>
          </div>
          <div onClick={onClick} className={styles.showBtn}>
            {showImage ? (
              <img
                src="https://recipe1.ezmember.co.kr/img/mobile/tab_view1.png"
                alt="이미지 보기"
              />
            ) : (
              <img
                src="https://recipe1.ezmember.co.kr/img/mobile/tab_view1_on.png"
                alt="이미지 숨기기"
              />
            )}
          </div>
        </div>

        <div className={styles.subContent}>
          {cook.make.map(
            (step, idx) =>
              step !== "" && (
                <div key={idx}>
                  <div className={styles.step}>
                    <div>{idx + 1}</div>
                    <span>{step}</span>
                  </div>
                  {showImage ? null : (
                    <div>
                      {cook.makeImg[idx] !== "" && (
                        <img
                          src={cook.makeImg[idx]}
                          alt={`Step ${idx + 1}`}
                          className={styles.stepImg}
                        />
                      )}
                    </div>
                  )}
                </div>
              )
          )}
        </div>
      </div>

      <div className={styles.back2}>
        <div className={styles.subTitle}>
          <img
            src="https://recipe1.ezmember.co.kr/img/mobile/app_icon_step_tip.png"
            alt="팁"
          />
          <b>꿀팁</b>
          <span>Tips</span>
        </div>
        <div className={styles.tip}>{cook.tip}</div>
      </div>
    </div>
  );
}

export default Detail;
