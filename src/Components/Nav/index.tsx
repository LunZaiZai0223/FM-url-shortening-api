// svgs
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

// style classes
import styles from './index.module.scss';

// components
import Button from '../Button';
import MobileNav from './MobileNav';

const Nav = () => {
  return (
    <nav className={`${styles.nav}`}>
      <h1 className={styles.logo}>
        <a>
          <Logo />
        </a>
      </h1>
      <div className={`${styles['nav-list']}`}>
        <ul className={`${styles['nav-wrapper']}`}>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Resources</a>
          </li>
        </ul>
        <ul className={`${styles['nav-wrapper']}`}>
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <Button>
              <span className={`${styles['btn-text']}`}>Sign Up</span>
            </Button>
          </li>
        </ul>
      </div>
      <div className={styles.hamburger}>
        <span></span>
      </div>
      <MobileNav />
    </nav>
  );
};

export default Nav;
