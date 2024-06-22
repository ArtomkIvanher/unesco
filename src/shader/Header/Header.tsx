import useTheme from '../../hooks/useTheme'
import s from './Header.module.scss'

interface Props {
	onHomeClick?: () => void
	countryName?: string
	countryFlag?: string
	countrySite?: string
	onRandomCountryClick?: () => void
}

export const Header: React.FC<Props> = ({
	onHomeClick,
	countryName,
	countrySite,
	onRandomCountryClick,
}) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<header>
			<div className={s.btn}>
				<button
					className={`scrollTopButton ${s.btn_linia}`}
					onClick={onHomeClick}
				>
					home
				</button>
				<button
					className={` scrollTopButton ${s.btn_linia}`}
					onClick={onRandomCountryClick}
				>
					random
				</button>
				<button onClick={() => toggleTheme()}>Тема</button>
			</div>
			<div className={s.counter_flag}>
				<div className={`${s.active} ${s.counter_flag__div}`} />
				{countrySite && (
					<button className={s.btn_linia}>
						<a href={countrySite}>{countryName}</a>
					</button>
				)}
				{countryName && <img src={`/unesco/img/countryFlag/${countryName}.png`} alt='' />}
			</div>
		</header>
	)
}
