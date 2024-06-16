import React from 'react'
import { PageData } from '../../App'
import s from './Card.module.scss'

interface CardProps {
	item: PageData
	setCurrentPage: (page: PageData | null) => void
}

export const Card: React.FC<CardProps> = ({ item, setCurrentPage }) => {

  return (
    <li
		className={`scrollTopButton ${s.main_card} ${item.id}`}
		key={item.id}
		onClick={() => setCurrentPage(item)}
	>
		<div className={`${s.img} ${item.setting}`}>
			<img src={`/unesco/img/${item.id}.png`} alt='' />
		</div>
		<div className={s.card_btn}>
			<p>{item.p1}</p>
			<p>|</p>
			<p>{item.p2}</p>
		</div>
	</li>
  )
}
