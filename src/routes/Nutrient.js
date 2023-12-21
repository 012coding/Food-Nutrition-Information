import React, { useState, useEffect } from "react";

const Nutrient = () => {
    const [nutrients, setNutrients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNutrients = async () => {
            try {
                const res = await fetch(`http://openapi.foodsafetykorea.go.kr/api/044ed2350b83487ba092/I2790/json/1/100`);
                const result = await res.json();
                setNutrients(result);
            } catch (error) {
                console.error("API 요청 중 에러 발생:", error);
            } finally {
                setLoading(false);
            }
        };

        getNutrients();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    console.log(nutrients);

    return (
        <div>
            <h1>영양소 정보</h1>
        </div>
    );
}

export default Nutrient;
