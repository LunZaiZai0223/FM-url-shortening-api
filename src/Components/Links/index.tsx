// components
import Button from '../Button';

// style classes
import styles from './index.module.scss';

// hooks
import { useTypedSelector } from '../../hooks/useTypedSelector';

// redux
import { useDispatch } from 'react-redux';
import { setCopiedStatusAction } from '../../store/actions';

const Links = () => {
  const { links } = useTypedSelector((state) => state.links);
  const dispatch = useDispatch();

  const setLinkItemCopiedStatusHandler = (index: number) => {
    dispatch(setCopiedStatusAction(index));
    navigator.clipboard.writeText(links[index].full_short_link);
  };

  return (
    <section className={`${styles['link-container']}`}>
      <ul className={`${styles['link-list']}`}>
        {links.map((item, index) => {
          const { original_link, full_short_link, copied_status } = item;
          return (
            <li className={`${styles['link-item']}`} key={index}>
              <span className={`${styles['original-link']}`}>
                <a href={original_link} target="_blank" rel="noreferrer">
                  {original_link}
                </a>
              </span>
              <span className={`${styles['shortened-link']}`}>
                <a href={full_short_link} target="_blank" rel="noreferrer">
                  {full_short_link}
                </a>
              </span>
              <Button
                classes={`${styles.btn} ${
                  copied_status ? styles['is-copied'] : ''
                }`}
                clickHandler={() => setLinkItemCopiedStatusHandler(index)}
              >
                {!copied_status ? 'Copy' : 'Copied'}
              </Button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Links;
