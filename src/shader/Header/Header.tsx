// Header.tsx
import s from './Header.module.scss'

interface Props {
	onDomoiClick?: () => void
	countryName?: string // Зроблено необов'язковим
	countryFlag?: string // Зроблено необов'язковим
  countrySite?: string
}

export const Header: React.FC<Props> = ({
	onDomoiClick,
	countryName,
	countryFlag,
  countrySite,
}) => {
	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<header>
			<div className={s.header_div}>
				<div className={s.home} onClick={handleScrollToTop}>
					<p className={s.btn_linia} onClick={onDomoiClick}>
						{' '}
						{/* Викликаємо обробник події */}
						domoi
					</p>
					<p className={`${s.btn_linia} ${s.romdome}`}>romdom</p>
				</div>
				<div className={s.kraina_img}>
					<img src={`/unesco/img/${countryFlag}.png`} alt='' />
					<div className={s.active}></div>
					<div className={s.anim_p}>
						<a className={s.btn_linia} href={countrySite}>
              {countryName}
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}
