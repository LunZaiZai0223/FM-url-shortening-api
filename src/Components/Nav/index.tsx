import { useState, useRef } from 'react';
// svgs
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

// style classes
import styles from './index.module.scss';

// components
import Button from '../Button';
import Hamburger from './Hamburger';
import MobileNav from './MobileNav';

const Nav = () => {
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const [mobileNavVisible, setMobileNavVisible] = useState<boolean>(false);

  return (
    <nav className={`${styles.nav}`}>
      <h1 className={styles.logo}>
        <a href="#">
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
      <Hamburger onToggleMobileNav={setMobileNavVisible} mobileNavState={mobileNavVisible} ref={hamburgerRef} />
      <MobileNav
        onToggleMobileNav={setMobileNavVisible}
        mobileNavState={mobileNavVisible}
        hamburgerEle={hamburgerRef.current}
      />
    </nav>
  );
};

export default Nav;
