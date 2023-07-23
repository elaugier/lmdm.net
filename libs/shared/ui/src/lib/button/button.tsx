import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  displayName: string
  name?: string
  theme?: string
}

export function Button(props: ButtonProps) {
  const theme = (typeof (props.theme) !== 'undefined') ? props.theme : 'default'
  const classes = 'theme-' + theme;
  return (
    <div className={styles[classes]}>
      <button className={styles['button']} id={props.name}>{props.displayName}</button>
    </div>
  );
}

export default Button;
