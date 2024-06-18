import React from 'react';
import { Card } from './Card';
import { PageData } from '../../App';

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
    <div className="main">
      {groupedData.map((group, groupIndex) => (
        <div key={groupIndex} className="group-block">
          {Array.from({ length: repetitions }).map((_, repetitionIndex) => (
            <ul key={repetitionIndex} className="repetition-block">
                {group.map((item) => (
                  <Card
                    key={`${item.p2}-${repetitionIndex}`}
                    item={item}
                    setCurrentPage={setCurrentPage}
                  />
                ))}
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Cards;
