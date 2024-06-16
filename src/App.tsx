import { useEffect, useState } from 'react'
import data from '../src/data/data'
import { Card } from './components/Card/Card'
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

	const renderPage = () => {
		if (!currentPage) {
			return (
				<ul className='main'>
					{data.map(item => (
						<Card key={item.id} item={item} setCurrentPage={setCurrentPage} />
					))}
				</ul>
			)
		}

		return <Country countryId={currentPage.p1} />
	}

	return (
		<>
			<Header
				countryName={currentPage?.p2}
				countryFlag={currentPage?.id}
				countrySite={currentPage?.site}
				onHomeClick={() => setCurrentPage(null)}
				onRandomCountryClick={handleRandomCountryClick}
			/>
			{renderPage()}
		</>
	)
}
