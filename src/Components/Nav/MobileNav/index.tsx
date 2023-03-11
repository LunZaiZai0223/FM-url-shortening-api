// style classes
import styles from './index.module.scss';

import Button from '../../Button';

const MobileNav = () => {
  return (
    <ul className={`${styles['mobile-nav']}`}>
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
