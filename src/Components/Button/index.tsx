// style classes
import styles from './index.module.scss';

interface Props {
  children?: React.ReactNode;
  classes?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  clickHandler?: Function;
}

const Button = (props: Props) => {
  const {
    children,
    classes,
    type = 'button',
    disabled = false,
    clickHandler,
  } = props;

  const btnClickHandler = () => {
    return () => {
      if (clickHandler) {
        clickHandler();
      }
    };
  };

  return (
    <button
      className={`${styles.btn} ${classes}`}
      type={type}
      disabled={disabled}
      {...(clickHandler && { onClick: btnClickHandler() })}
    >
      {children}
    </button>
  );
};

export default Button;
