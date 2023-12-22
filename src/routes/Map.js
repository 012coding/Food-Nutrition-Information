import React, { useState } from 'react';
import styles from '../css/MapContainer.module.css';
import MapContainer from '../components/MapContainer';

function LandingPage() {
  const [InputText, setInputText] = useState('');
  const [Place, setPlace] = useState('');
  const [suggestedFoods, setSuggestedFoods] = useState([]);

  const onChange = (e) => {
    const inputText = e.target.value;
    setInputText(inputText);

    const mockSuggestedFoods = [
        '김치찌개',
        '비빔밥',
        '불고기',
        '순두부찌개',
        '된장찌개',
        '떡볶이',
        '쌈밥',
        '보쌈',
        '족발',
        '닭볶음탕',
        '갈비찜',
        '갈비탕',
        '부대찌개',
        '김밥',
        '라면',
        '돈까스',
        '우동',
        '라멘',
        '오므라이스',
        '짜파게티',
        '삼겹살',
        '고기국수',
        '해물파전',
        '쭈꾸미볶음',
        '해물탕',
        '생선구이',
        '회덮밥',
        '쌀국수',
        '반미',
        '타코',
        '나시고랭',
        '포크커틀릿',
        '토마토스파게티',
        '크림파스타',
        '오마카세',
        '로제파스타',
        '피자',
        '햄버거',
        '치킨',
        '짜장면',
        '초밥',
        '파스타',
        '마라탕',
        '탕후루',
        '샐러드',
        '쿠바노',
        '돈부리',
        '곱창',
        '오징어볶음',
        '치즈돈까스',
        '매운갈비찜',
        '낙곱새',
      ];

    if (inputText) {
      const filteredFoods = mockSuggestedFoods.filter((food) =>
        food.includes(inputText)
      );
      setSuggestedFoods(filteredFoods);
    } else {
      setSuggestedFoods([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(InputText);
    setInputText('');
    setSuggestedFoods([]);
  };

  const handleFoodClick = (food) => {
    setPlace(food);
    setInputText('');
    setSuggestedFoods([]);
  };

  return (
    <div className={styles.main}>
      <form className={styles.inputForm} onSubmit={handleSubmit}>
        <input
          placeholder="메뉴를 입력하세요!"
          onChange={onChange}
          value={InputText}
        />
        <button type="submit">🔎</button>
      </form>
      <div className={styles.suggestedFoodsContainer}>
        {suggestedFoods.map((food, index) => (
          <div
            key={index}
            className={styles.suggestedFood}
            onClick={() => handleFoodClick(food)}
          >
            {food}
          </div>
        ))}
      </div>
      <MapContainer searchPlace={Place} />
    </div>
  );
}

export default LandingPage;