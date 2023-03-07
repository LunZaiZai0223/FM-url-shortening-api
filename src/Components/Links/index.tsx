// components
import Button from '../Button';

// style classes
import styles from './index.module.scss';

const DUMMY_LINKS: { originalLink: string; shortenedLink: string; status: false }[] = [
  {
    originalLink: 'https://ithelp.ithome.com.tw/articles/10276227',
    shortenedLink: 'https://ithelp.ithome.com.tw/articles/10276227',
    status: false,
  },
  {
    originalLink: 'https://ithelp.ithome.com.tw/articles/10276227',
    shortenedLink: 'https://ithelp.ithome.com.tw/articles/10276227',
    status: false,
  },
  {
    originalLink: 'https://ithelp.ithome.com.tw/articles/10276227',
    shortenedLink: 'https://ithelp.ithome.com.tw/articles/10276227',
    status: false,
  },
];

const Links = () => {
  return (
    <section className={`${styles['link-container']}`}>
      <ul className={`${styles['link-list']}`}>
        {DUMMY_LINKS.map((item, index) => {
          const { shortenedLink, originalLink, status } = item;
          return (
            <li className={`${styles['link-item']}`} key={index}>
              <span className={`${styles['original-link']}`}>
                <a>{originalLink}</a>
              </span>
              <span className={`${styles['shortened-link']}`}>
                <a>{shortenedLink}</a>
              </span>
              <Button classes={`${styles.btn}`}>{!status ? 'Copy' : 'Copied'}</Button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Links;
