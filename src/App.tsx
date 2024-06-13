import { useEffect, useState } from 'react'
import data from '../src/data/data.js'
import ii from '../src/el61.png'
import './style/App.scss'
import { Header } from './shader/Header/Header'

interface PageData {
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
		setCurrentPage(null);
	  };

	useEffect(() => {
		const initialPage = data.find(item => item.id === 'home')
		setCurrentPage(initialPage || null)
	}, [])

	const renderPage = () => {
		if (!currentPage) {
			return (
				<ul className='main'>
					{data.map(item => (
						<li
							key={item.id}
							onClick={() =>
								setCurrentPage(data.find(page => page.id === item.id) || null)
							}
						>
							<div className='main-card'>
								<div className={`card ${item.id}`} id={`${item.id}`}>
									<div className={`img ${item.setting}`}>
										{/* <img src={`/img/${item.id}.png`} alt='' /> */}
										<img src={ii} alt='' />
									</div>
									<div className='blob-btn'>
										<p className='p'>{item.p1}</p>
										<p className='p'>|</p>
										<p className='p'>{item.p2}</p>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			)
		}

		return (
			<div>
				<h1 style={{ color: currentPage.colorText }}>{currentPage.p2}</h1>
				<p>{currentPage.p1}</p>
				<button onClick={() => setCurrentPage(null)}>Назад до списку</button>
				<img src='../src/img/data100li2img1.png' alt='' />
			</div>
		)
	}

	return (
		<>
			<Header onDomoiClick={handleDomoiClick} />
			{renderPage()}
		</>
	)
}

export default App
