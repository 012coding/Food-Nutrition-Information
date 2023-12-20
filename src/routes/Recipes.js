import { Link } from "react-router-dom";
import styles from "../css/Recipes.module.css";

function Recipes({ recipe }) {
  return (
    <div className={styles.back}>
      {recipe.map((cook, idx) => (
        <div key={idx} className={styles.item}>
          <img src={cook.mainImg} alt="대표이미지" className={styles.image}/>
          <p>
            <Link to={`/recipe/${cook.id}`} state={{ cook }} className={styles.foodName}>
              {cook.name}
            </Link>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
