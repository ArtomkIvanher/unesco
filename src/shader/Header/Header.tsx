import useTheme from '../../hooks/useTheme'
import s from './Header.module.scss'

interface Props {
	onHomeClick?: () => void
	countryId?: string
	countryFlag?: string
	countryName?: string
	onRandomCountryClick?: () => void
}

export const Header: React.FC<Props> = ({
	onHomeClick,
	countryId,
	countryName,
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
				{countryId && (
					<button className={s.btn_linia}>
					<a href={`https://uk.wikipedia.org/wiki/${countryName}`}>
						{countryName}
					</a>
				</button>
				)}
				{countryId && <img src={`/unesco/img/countryFlag/${countryId}.png`} alt='' />}
			</div>
		</header>
	)
}
