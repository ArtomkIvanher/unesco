// Header.tsx
import s from './Header.module.scss';

interface Props {
  onDomoiClick?: () => void; // Пропс для обробника події
}

export const Header: React.FC<Props> = ({ onDomoiClick }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      <div className={s.header_div}>
        <div className={s.home} onClick={handleScrollToTop}>
          <p className={s.btn_linia} onClick={onDomoiClick}> {/* Викликаємо обробник події */}
            domoi
          </p>
          <p className={`${s.btn_linia} ${s.romdome}`}>romdom</p>
        </div>
        <div className={s.kraina_img}></div>
      </div>
    </header>
  );
};
