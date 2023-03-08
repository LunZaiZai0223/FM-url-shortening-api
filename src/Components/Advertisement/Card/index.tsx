// svgs
import { ReactComponent as BrandRecognition } from '../../../assets/images/icon-brand-recognition.svg';
import { ReactComponent as DetailedRecords } from '../../../assets/images/icon-detailed-records.svg';
import { ReactComponent as FullyCustomizable } from '../../../assets/images/icon-fully-customizable.svg';

// style classes
import styles from './index.module.scss';

const DUMMY_CARD_LIST: { title: string; content: string; icon: any }[] = [
  {
    title: 'Brand Recognition',
    content:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    icon: <BrandRecognition />,
  },
  {
    title: 'Detailed Records',
    content:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    icon: <DetailedRecords />,
  },
  {
    title: 'Fully Customizable',
    content:
      'Fully Customizable Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    icon: <FullyCustomizable />,
  },
];

const Card = () => {
  return (
    <ul className={`${styles['card-list']}`}>
      {DUMMY_CARD_LIST.map((card, index) => {
        const { title, content, icon } = card;
        return (
          <li className={`${styles['card-item']}`} key={index}>
            <div className={`${styles['card-icon-wrapper']}`}>{icon}</div>
            <h4>{title}</h4>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Card;
