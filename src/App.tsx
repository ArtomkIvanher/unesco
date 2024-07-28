import { useEffect, useState } from 'react' // Corrected import
import data from '../src/data/data'
import Cards from './components/Cards/Cards'
import Country from './components/Сountry/Сountry'
import useScrollToTop from './hooks/useScrollTop'
import { Header } from './shader/Header/Header'
import './style/App.scss'
import './style/btn_linia.scss'

export interface PageData {
	id: string
	name: string
}

export interface CountryData {
	id: string
	year1?: string
	title1?: string
	text1?: string
	year2?: string
	title2?: string
	text2?: string
}

export default function App() {
	const [currentPage, setCurrentPage] = useState<PageData | null>(null)
	const [previousPageIndex, setPreviousPageIndex] = useState<number | null>(
		null
	)
	useScrollToTop('scrollTopButton')

	const [windowWidth, setWindowWidth] = useState(window.innerWidth)
	const cardsPerPage = 3
	const cardWidth = 300 // Width Card

	// Calculate repetitions based on windowWidth
	const calculateRepetitions = () => {
		const repetitionGroupWidth = cardsPerPage * cardWidth;
		const baseRepetitions = Math.ceil(windowWidth / repetitionGroupWidth);
		const repetitions = baseRepetitions + 1; // Додаємо одне повторення
		return repetitions;
	  };	  
	  const repetitions = calculateRepetitions();

	useEffect(() => {
		// ... (your existing initial page logic)

		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		const initialPage = data.find(item => item.id === 'home')
		setCurrentPage(initialPage || null)
	}, [])

	const handleRandomCountryClick = () => {
		let randomIndex: number
		do {
			randomIndex = Math.floor(Math.random() * data.length)
		} while (randomIndex === previousPageIndex)

		setPreviousPageIndex(randomIndex)
		setCurrentPage(data[randomIndex])
	}
	return (
		<>
			<Header
				countryId={currentPage?.id}
				countryName={currentPage?.name}
				onHomeClick={() => setCurrentPage(null)}
				onRandomCountryClick={handleRandomCountryClick}
			/>
			{!currentPage && (
				<Cards
					data={data}
					cardsPerPage={cardsPerPage}
					repetitions={repetitions}
					setCurrentPage={setCurrentPage}
				/>
			)}
			{currentPage && <Country countryId={currentPage.id} />}
			<button className='scrollTopButton'>top</button>
		</>
	)
}
