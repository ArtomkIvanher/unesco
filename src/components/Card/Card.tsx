import React from 'react';
import { PageData } from '../../App'; 
import s from './Card.module.scss'

interface CardProps {
  item: PageData;
  setCurrentPage: (page: PageData | null) => void;
}

export const Card: React.FC<CardProps> = ({ item, setCurrentPage }) => (
  <li key={item.id} onClick={() => setCurrentPage(item)}>
    <div className={s.main_card}>
      <div className={`card ${item.id}`} id={`${item.id}`}>
        <div className={`img ${item.setting}`}>
          <img src={`/unesco/img/${item.id}.png`} alt='' />
        </div>
        <div className={s.card_btn}>
          <p>{item.p1}</p>
          <p>|</p>
          <p>{item.p2}</p>
        </div>
      </div>
    </div>
  </li>
);
