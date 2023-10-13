import styles from './Button.module.css';

const Button = ({ className, fullWidth, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${className} ${fullWidth && styles.fullWidth}`}
    >
      {children}
    </button>
  );
};

export default Button;
