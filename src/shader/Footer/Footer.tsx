import useInViewAnimation from '../../hooks/useInViewAnimation'
import s from './Footer.module.scss'

export default function Footer() {
	const { ref: footerRef, isInView: footerInView } =
		useInViewAnimation<HTMLElement>()

	return (
		<footer ref={footerRef} className={footerInView ? s.animate : ''}>
			<div className={s.link}>
				<span>інформацію було взято тут</span>
				<div>
					<a className='btn_linia' href='https://whc.unesco.org/'>
						тик
					</a>
					<a className='btn_linia' href='https://whc.unesco.org/ru/list/'>
						тик
					</a>
					<a className='btn_linia' href='https://whc.unesco.org/en/list/'>
						тик
					</a>
				</div>
			</div>
			<div className={s.percent}>
				<div className={s.percentage_bar}>
					<div className={s.ts}></div>
					<div className={s.scss}></div>
					<div className={s.html}></div>
				</div>
				<div className={s.dots}>
					<a className={`${s.TS} btn_linia`} href=''>
						<div></div>
						<span>TS</span>
					</a>
					<a className={`${s.SCSS} btn_linia`} href=''>
						<div></div>
						<span>SCSS</span>
					</a>
					<a className={`${s.HTML} btn_linia`} href=''>
						<div></div>
						<span>HTML</span>
					</a>
					<a className={`${s.JS} btn_linia`} href=''>
						<div></div>
						<span>JS</span>
					</a>
				</div>
			</div>
		</footer>
	)
}