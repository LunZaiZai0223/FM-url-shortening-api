// svgs
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Facebook } from '../../assets/images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../assets/images/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../../assets/images/icon-pinterest.svg';
import { ReactComponent as Instagram } from '../../assets/images/icon-instagram.svg';

// style classes
import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer className={`${styles['footer-container']}`}>
      <div className={styles.wrapper}>
        <h1>
          <a href="#">
            <Logo />
          </a>
        </h1>
        <div className={styles.infos}>
          <div className={styles.info}>
            <h5>Features</h5>
            <ul className={`${styles['link-group']}`}>
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>
          <div className={styles.info}>
            <h5>Features</h5>
            <ul className={`${styles['link-group']}`}>
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>
          <div className={styles.info}>
            <h5>Features</h5>
            <ul className={`${styles['link-group']}`}>
              <li>
                <a href="#">Link Shortening</a>
              </li>
              <li>
                <a href="#">Branded Links</a>
              </li>
              <li>
                <a href="#">Analytics</a>
              </li>
            </ul>
          </div>
          <ul className={`${styles['icons']}`}>
            <li>
              <a href="#">
                <Facebook />
              </a>
            </li>
            <li>
              <a href="#">
                <Twitter />
              </a>
            </li>
            <li>
              <a href="#">
                <Pinterest />
              </a>
            </li>
            <li>
              <a href="#">
                <Instagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
