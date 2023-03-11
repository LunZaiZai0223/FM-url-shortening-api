import { ReactComponent as Working } from '../../assets/images/illustration-working.svg';
import working from '../../assets/images/illustration-working.svg';

// components
import Button from '../Button';

// style classes
import styles from './index.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles['header-content']}`}>
        <h2>More than just shorter links</h2>
        <p> Build your brand’s recognition and get detailed insights on how your links are performing.</p>
        <div className={`${styles['btn-wrapper']}`}>
          <Button classes={`${styles['header-btn']}`}>
            <span className={`${styles['btn-text']}`}>Get Started</span>
          </Button>
        </div>
      </div>
      <div className={`${styles['header-img']}`}>
        <Working />
      </div>
      <div className={`${styles['header-img-mobile']}`}>
        <img src={working} />
      </div>
    </header>
  );
};

export default Header;
