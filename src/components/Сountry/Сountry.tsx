import React, { useEffect, useState } from "react";
import s from "./Сountry.module.scss";

interface CountryProps {
  countryId: string;
}

export default function Country({ countryId }: CountryProps) {
  const [countryData, setCountryData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await import(`../../data/${countryId}.json`);
        setCountryData(data.default);
      } catch (error) {
        console.error(`Помилка завантаження даних для країни ${countryId}:`, error);
      }
    }

    fetchData();
  }, [countryId]);

  return (
    <div>
      {countryData.map((item) => (
        <div key={item.id}>
          {item.year1 && (
            <div className={s.country}>
              <div className={`${s.country_main} ${s.year1}`}>
                <div className={s.h_zagolovok}>
                  <h2 className={`${s.anim_items} ${s.h_prosto_zagolovok}`}>{item.year1}</h2>
                </div>
                <div className={s.country_flex}>
                  <div>
                    <h2 className={`${s.anim_items} ${s.h_prosto}`}>{item.h1}</h2>
                    <p className={`${s.anim_items} ${s.p_prosto}`}>{item.text1}</p>
                  </div>
                  <div className={s.country_img}>
                    <img className={`${s.anim_items} ${s.img_prosto}`} src={`/unesco/img/${item.img}img1.png`} alt="" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {item.year2 && (
            <div className={s.country}>
              <div className={`${s.country_main_revers} ${s.year2}`}>
                <div className={s.h_zagolovok}>
                  <h2 className={`${s.anim_items} ${s.h_revers_zagolovok}`}>{item.year2}</h2>
                </div>
                <div className={s.country_flex}>
                  <div>
                    <h2 className={`${s.anim_items} ${s.h_revers}`}>{item.h2}</h2>
                    <p className={`${s.anim_items} ${s.p_revers}`}>{item.text2}</p>
                  </div>
                  <div className={s.country_img}>
                    <img className={`${s.anim_items} ${s.img_revers}`} src={`/unesco/img/${item.img}img2.png`} alt="" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
