import { forwardRef } from 'react';
// styles class
import styles from './index.module.scss';

interface HamburgerProps {
  onToggleMobileNav: React.Dispatch<boolean>;
  mobileNavState: boolean;
}

const Hamburger = forwardRef<HTMLDivElement, HamburgerProps>((props: HamburgerProps, ref) => {
  const { onToggleMobileNav, mobileNavState } = props;

  const toggleMobileNavHandler = () => {
    return onToggleMobileNav(!mobileNavState);
  };

  return (
    <div className={styles.hamburger} onClick={toggleMobileNavHandler} ref={ref}>
      <span></span>
    </div>
  );
});

export default Hamburger;
