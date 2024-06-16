// CountryBlock.tsx
import s from './Сountry.module.scss'

interface CountryBlockProps {
	year?: number
	title?: string
	text?: string
	img?: string
	reversed?: boolean 
}

export default function CountryBlock({
	year,
	title,
	text,
	img,
	reversed,
}: CountryBlockProps) {
	return (
		<div className={reversed ? s.country_block_reversed : s.country_block}>
			{year && (
				<div className={s.year}>
					<h2 className='anim_items'>{year}</h2>
				</div>
			)}
			<div className={s.layout}>
				<div className={s.text_info}>
					{title && <h2 className='anim_items'>{title}</h2>}
					{text && <p className='anim_items'>{text}</p>}
				</div>
				{img && (
					<div className={s.image_container}>
						<img
							className='anim_items'
							src={`/unesco/img/${img}`}
							alt={title || ''}
						/>
					</div>
				)}
			</div>
		</div>
	)
}
