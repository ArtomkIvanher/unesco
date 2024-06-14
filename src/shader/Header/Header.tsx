import s from './Header.module.scss';

interface Props {
  onDomoiClick?: () => void;
  countryName?: string;
  countryFlag?: string;
  countrySite?: string;
  onRandomCountryClick?: () => void;
}

export const Header: React.FC<Props> = ({
  onDomoiClick,
  countryName,
  countryFlag,
  countrySite,
  onRandomCountryClick,
}) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      <div className={s.header_div}>
        <div className={s.home} onClick={handleScrollToTop}>
          <button className={s.btn_linia} onClick={onDomoiClick}>domoi</button>
          <button className={`${s.btn_linia} ${s.romdome}`} onClick={onRandomCountryClick}>
            romdom
          </button>
        </div>
        <div className={s.kraina_img}>
          {countryFlag && <img src={`/unesco/img/${countryFlag}.png`} alt="" />}
          <div className={s.active} />
          {countrySite && (
            <div className={s.anim_p}>
              <a className={s.btn_linia} href={countrySite}>
                {countryName}
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
