import { useEffect, useState } from 'react'
import data from '../src/data/data'
import { Card } from './components/Card/Card'
import Country from './components/Сountry/Сountry'
import { Header } from './shader/Header/Header'
import './style/App.scss'

export interface PageData {
	id: string
	setting: string
	color: string
	colorText: string
	p1: string
	p2: string
}

function App() {
	const [currentPage, setCurrentPage] = useState<PageData | null>(null)

	const handleDomoiClick = () => {
		setCurrentPage(null)
	}

	useEffect(() => {
		const initialPage = data.find(item => item.id === 'home')
		setCurrentPage(initialPage || null)
	}, [])

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
			<Header onDomoiClick={handleDomoiClick} />
			{renderPage()}
		</>
	)
}

export default App
