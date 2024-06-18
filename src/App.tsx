import { useEffect, useState} from 'react'; // Corrected import
import data from '../src/data/data'
import Cards from './components/Cards/Cards'
import Country from './components/Сountry/Сountry'
import { Header } from './shader/Header/Header'
import './style/App.scss'
import useScrollToTop from './hooks/useScrollTop'

export interface PageData {
	id: string
	setting: string
	color: string
	colorText: string
	p1: string
	p2: string
	site: string
}

export interface CountryData {
	id: number
	year1?: string
	title1?: string
	text1?: string
	year2?: string
	title2?: string
	text2?: string
	img: string
}

export default function App() {
	const [currentPage, setCurrentPage] = useState<PageData | null>(null)
	const [previousPageIndex, setPreviousPageIndex] = useState<number | null>(null);
	useScrollToTop('scrollTopButton');
	
	const cardsPerPage = 3; // Кількість карток на сторінці
    const repetitions = 10; // Кількість повторень кожної групи карток

	useEffect(() => {
		const initialPage = data.find(item => item.id === 'home')
		setCurrentPage(initialPage || null)
	}, [])

	const handleRandomCountryClick = () => {
		let randomIndex: number;
		do {
		  randomIndex = Math.floor(Math.random() * data.length);
		} while (randomIndex === previousPageIndex);
	
		setPreviousPageIndex(randomIndex);
		setCurrentPage(data[randomIndex]);
	  };
	  return (
		<>
		  <Header
			countryName={currentPage?.p2}
			countryFlag={currentPage?.id}
			countrySite={currentPage?.site}
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
		  {currentPage && <Country countryId={currentPage.p1} />}
		  <button className="scrollTopButton">top</button>
		</>
	  );
}
