import s from './Hello.module.scss'

export default function Hello() {
	return (
		<div className={s.hello}>
			<div className={s.radial_ellipse_far}></div>
			<video
				id='random-video'
				className={`${s.video}`}
				src='https://rr7---sn-5ouxa-h8qy.googlevideo.com/videoplayback?expire=1724036670&ei=3mHCZqDRGua91sQP0L2myA0&ip=2800%3Aa4%3A1e2c%3A1e00%3A691e%3A7d75%3Af40e%3A587f&id=o-AIeSpMkt-JEWhMVOhOfoKVb4w3UEZGX3-saTMhYuHumd&itag=247&aitags=133%2C134%2C135%2C136%2C160%2C242%2C243%2C244%2C247%2C278%2C298%2C299%2C302%2C303%2C308%2C315&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=xB&mm=31%2C29&mn=sn-5ouxa-h8qy%2Csn-x1xe7n7d&ms=au%2Crdu&mv=m&mvi=7&pl=41&initcwndbps=936250&bui=AQmm2ewRvnCFxXderORo0nZTmF5-hWjLpfWxNWGJUAlBPy8Z4Iu4A0YSgJcjG3nsd6GjRpLt2RTIdR1f&spc=Mv1m9tUQfiWHQ9g3ODBulxBRZ6kmvBWH28Ee4Hfev8KyDMwZx5xe&vprv=1&svpuc=1&mime=video%2Fwebm&ns=7NvC7ziSGtTgkiQQY2dUjEYQ&rqh=1&gir=yes&clen=292659065&dur=2276.608&lmt=1713570916394481&mt=1724014638&fvip=3&keepalive=yes&c=WEB_CREATOR&sefc=1&txp=5437434&n=ONdK201H2df7tA&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cdur%2Clmt&sig=AJfQdSswRAIgYX8PicIbIdQU58zzZnRS7YiEE2HVQqlSAQgHvHm3KKACIHVQck0ana-SNwX0s8wfZ43DV5vDOMYdmtr-NpNx5Rf_&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AGtxev0wRQIgZImlkPccLxcHxFXY2xy_Sr3qBoLerTDVQXlfGBuOVAkCIQD627g-AVo8STmHRrGCnHe1NIwKg_KFTJ4WFVhJNgYKIw%3D%3D'
				autoPlay
				muted
				loop
			/>
			<h1>
				<span>UNESCO</span>
			</h1>
		</div>
	)
}
