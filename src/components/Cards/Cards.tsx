import React from 'react';
import { Card } from './Card';
import { PageData } from '../../App';
import s from './Card.module.scss'

interface CardGridProps {
  data: PageData[];
  cardsPerPage: number;
  repetitions: number;
  setCurrentPage: (page: PageData | null) => void;
}

const Cards: React.FC<CardGridProps> = ({
  data,
  cardsPerPage,
  repetitions,
  setCurrentPage,
}) => {
  const groupedData = [];
  for (let i = 0; i < data.length; i += cardsPerPage) {
    groupedData.push(data.slice(i, i + cardsPerPage));
  }

  return (
    <div className={s.main}>
      {groupedData.map((group, groupIndex) => {
        const uniqueId = `group_block_${groupIndex}`; // Генеруємо унікальний ID
  
        return (
          <div key={groupIndex} id={uniqueId} className={`${s.group_block} ${s[uniqueId]}`}> 
            {/* Інтерполюємо ID в className */}
            {Array.from({ length: repetitions }).map((_, repetitionIndex) => (
              <div key={repetitionIndex} className={s.repetition_block}>
                {group.map((item) => (
                  <Card 
                    key={`${item.p2}-${repetitionIndex}`}
                    item={item}
                    setCurrentPage={setCurrentPage}
                  />
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
