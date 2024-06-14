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
      <div className={s.home} onClick={handleScrollToTop}>
        <button className={s.btn_linia} onClick={onDomoiClick}>domoi</button>
        <button className={s.btn_linia} onClick={onRandomCountryClick}>romdom</button>
      </div>
      <div className={s.counter_flag}>
        {countryFlag && <img src={`/unesco/img/${countryFlag}.png`} alt="" />}
        <div className={`${s.active} ${s.counter_flag__div}`} />
        {countrySite && (
          <a className={s.btn_linia} href={countrySite}>
            {countryName}
          </a>
        )}
      </div>
    </header>
  );
};
