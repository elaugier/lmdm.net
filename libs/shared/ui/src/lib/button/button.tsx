import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  displayName: string
  name: string
}

export function Button(props: ButtonProps) {
  return (
    <button className={styles['button']} id={props.name}>{props.displayName}</button>
  );
}

export default Button;
