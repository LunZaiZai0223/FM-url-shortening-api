// style classes
import styles from './index.module.scss';

import Button from '../../Button';
import { useEffect } from 'react';

interface MobileNavProps {
  mobileNavState: boolean;
  onToggleMobileNav: React.Dispatch<boolean>;
  hamburgerEle: null | HTMLDivElement;
}

const MobileNav = (props: MobileNavProps) => {
  const { mobileNavState, onToggleMobileNav, hamburgerEle } = props;

  useEffect(() => {
    const toggleMobileNavHandler = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      if (hamburgerEle?.contains(target)) return;
      if (mobileNavState) {
        onToggleMobileNav(false);
      }
    };
    document.addEventListener('click', toggleMobileNavHandler);

    return () => {
      document.removeEventListener('click', toggleMobileNavHandler);
    };
  }, [mobileNavState]);

  return (
    <ul className={`${styles['mobile-nav']} ${mobileNavState ? styles['is-active'] : ''}`}>
      <li>
        <a href="#">Features</a>
      </li>
      <li>
        <a href="#">Pricing</a>
      </li>
      <li>
        <a href="#">Resources</a>
        <div className={styles.divider}></div>
      </li>
      <li>
        <a href="#">Login</a>
      </li>
      <li>
        <Button classes={`${styles['btn-text']}`}>Sign up</Button>
      </li>
    </ul>
  );
};

export default MobileNav;
