import { Link } from "react-router-dom";
import styles from "../css/Recipes.module.css";

function Recipes({ recipe }) {
  return (
    <div className={styles.back}>
      {recipe.map((cook, idx) => (
        <div key={idx} className={styles.item}>
          <Link
            to={`/recipe/${cook.id}`}
            state={{ cook }}
            className={styles.foodName}
          >
            <img src={cook.mainImg} alt="대표이미지" className={styles.image} />
            <div className={styles.name}>{cook.name}</div>
            <div className={styles.itemFooter}>
              <div className={styles.kind}>{cook.kind}</div>
              <div className={styles.nutrition}>
                <div>탄수화물: {cook.tan}</div>
                <div>단백질: {cook.dan}</div>
                <div>지방: {cook.ji}</div>
                <div>나트륨: {cook.na}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
