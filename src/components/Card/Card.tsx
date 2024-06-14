import React from 'react';
import { PageData } from '../../App'; // Припускаємо, що PageData визначено в types.ts

interface CardProps {
  item: PageData;
  setCurrentPage: (page: PageData | null) => void;
}

export const Card: React.FC<CardProps> = ({ item, setCurrentPage }) => (
  <li key={item.id} onClick={() => setCurrentPage(item)}>
    <div className='main-card'>
      <div className={`card ${item.id}`} id={`${item.id}`}>
        <div className={`img ${item.setting}`}>
          <img src={`/unesco/img/${item.id}.png`} alt='' />
        </div>
        <div className='blob-btn'>
          <p className='p'>{item.p1}</p>
          <p className='p'>|</p>
          <p className='p'>{item.p2}</p>
        </div>
      </div>
    </div>
  </li>
);
