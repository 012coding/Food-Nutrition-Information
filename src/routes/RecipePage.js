import { useEffect, useState } from "react";
import styles from "../css/RecipePage.module.css";
import Recipes from "./Recipes";

function Recipe() {
  const [loading, setLoading] = useState(true);
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [btn, setBtn] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    true,
  ]);
  const foodKind = ["반찬", "국&찌개", "후식", "일품", "밥", "기타"];

  const RECIPE_API_KEY = "";

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  // 검색 버튼 클릭시 결과 조회
  const onSubmit = (event) => {
    event.preventDefault();

    const searchRecipe = recipe.filter((item) => item.name.includes(search));

    setSearchResult(searchRecipe);
    setSearch("");
  };

  // "나만의 레시피" 클릭시 전체 결과 조회
  const goToAll = () => {
    setSearchResult(recipe);
  };

  // 필터 active효과
  const activeAll = () => {
    let temp = [false, false, false, false, false, false, false];
    temp[6] = true;
    setBtn(temp);
  };

  const activeItem = (idx) => {
    let temp = [false, false, false, false, false, false, false];
    temp[idx] = true;
    setBtn(temp);
  };

  // 종류별로 검색하기
  const goToKind = (kind) => {
    const kindRecipe = recipe.filter((item) => item.kind === kind);

    setSearchResult(kindRecipe);
  };

  // api 호출후 데이터 저장
  useEffect(() => {
    fetch(
      `https://openapi.foodsafetykorea.go.kr/api/${RECIPE_API_KEY}/COOKRCP01/json/1/60`
    )
      .then((data) => data.json())
      .then((recipe) => {
        const reg = /([가-힣]{1,10}[ ][가-힣]{1,10}|[가-힣]{1,10})/g;
        let rcp = recipe.COOKRCP01.row.map((obj, key) => {
          return {
            id: key,
            hashtag: obj.RCP_PARTS_DTLS.replace(
              /인분|컵|송송 썬|불린 것|줄기부분|삶은것|주재료|주 재료|육수|마른것|양념|다진|부순|뿌리|으깬|데친|두 가지 색|재료|갈은것|다진것|개|적당량|소스|소스소개/g,
              ""
            )
              .replace(/로즈마리/g, "셰프리")
              .replace(/마리/g, "")
              .replace(/셰프리/g, "로즈마리")
              .replace(/낙지 다리/g, "낙지")
              .replace(/두부강된장 참기름/g, "강된장")
              .replace(/파인애플 통조림/g, "파인애플")
              .match(reg),
            name: obj.RCP_NM, // 요리 이름
            cookMake: obj.RCP_WAY2, // 요리 방법
            mainImg: obj.ATT_FILE_NO_MAIN, // 메인 이미지
            tan: obj.INFO_CAR + "g", // 탄수화물
            dan: obj.INFO_PRO + "g", // 단백질
            ji: obj.INFO_FAT + "g", // 지방
            na: obj.INFO_NA + "mg", // 나트륨
            kcal: obj.INFO_ENG, // 칼로리
            item: obj.RCP_PARTS_DTLS, // 요리재료
            kind: obj.RCP_PAT2, // 분류
            tip: obj.RCP_NA_TIP, // 저감 조리법
            // 만드는법 상세
            make: [
              obj.MANUAL01.replace(/1./g, ""),
              obj.MANUAL02.replace(/2./g, ""),
              obj.MANUAL03.replace(/3./g, ""),
              obj.MANUAL04.replace(/4./g, ""),
              obj.MANUAL05.replace(/5./g, ""),
              obj.MANUAL06.replace(/6./g, ""),
              obj.MANUAL07.replace(/7./g, ""),
              obj.MANUAL08.replace(/1./g, ""),
            ],

            // 만드는법 상세 이미지
            makeImg: [
              obj.MANUAL_IMG01,
              obj.MANUAL_IMG02,
              obj.MANUAL_IMG03,
              obj.MANUAL_IMG04,
              obj.MANUAL_IMG05,
              obj.MANUAL_IMG06,
              obj.MANUAL_IMG07,
              obj.MANUAL_IMG08,
            ],
          };
        });

        setRecipe(rcp);
        setSearchResult(rcp);
        setLoading(false);
      });
  }, []);
  console.log(recipe);
  return (
    <div>
      <div className={styles.main}>
        {loading ? (
          <div className={styles.container}>
            <div className={styles.logoBox}>
              <h1 className={styles.logo1}>레시피 불러오는중 ...</h1>
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.searchBox}>
              <div>
                <span className={styles.logo2} onClick={goToAll}>
                  나만의 레시피
                </span>
              </div>
              <div>
                <form onSubmit={onSubmit}>
                  <input
                    type="text"
                    placeholder="어떤 요리의 레시피를 원하시나요?"
                    className={styles.search}
                    value={search}
                    onChange={onChange}
                  />
                  <button className={styles.searchBtn}>검색</button>
                </form>
              </div>
            </div>

            <div className={styles.kindBox}>
              <div
                onClick={() => {
                  goToAll();
                  activeAll();
                }}
                className={btn[6] ? styles.kindItemActive : styles.kindItem}
              >
                ALL
              </div>
              {foodKind.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    goToKind(item);
                    activeItem(idx);
                  }}
                  className={btn[idx] ? styles.kindItemActive : styles.kindItem}
                >
                  {item}
                </div>
              ))}
            </div>

            <Recipes recipe={searchResult} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipe;
