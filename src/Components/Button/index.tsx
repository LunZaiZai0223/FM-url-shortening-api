// style classes
import styles from './index.module.scss';

interface Props {
  children?: React.ReactNode;
  classes?: string;
}

const Button = (props: Props) => {
  const { children, classes } = props;

  return <button className={`${styles.btn} ${classes}`}>{children}</button>;
};

export default Button;
