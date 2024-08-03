import useInViewAnimation from '../../hooks/useInViewAnimation'
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
	const { ref: blockRef, isInView: blockInView } =
		useInViewAnimation<HTMLDivElement>()

	return (
		<div
			ref={blockRef}
			className={` ${reversed ? s.country_block_reversed : s.country_block}  ${
				blockInView ? s.animate : ''
			}`}
		>
			{year && (
				<div className={s.year}>
					<h2>{year}</h2>
				</div>
			)}
			<div className={s.layout}>
				<div className={s.text_info}>
					{title && <h2>{title}</h2>}
					{text && <p>{text}</p>}
				</div>
				<div className={s.image_container}>
					<img src={`/unesco/img/country/${img}`} alt={title || ''} />
				</div>
			</div>
		</div>
	)
}
