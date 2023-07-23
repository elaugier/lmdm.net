import styles from './shared-data-access.module.scss';

export interface ServiceInit {
  status: 'init';
}
export interface ServiceLoading {
  status: 'loading';
}
export interface ServiceLoaded<T> {
  status: 'loaded';
  payload: T;
}
export interface ServiceError {
  status: 'error';
  error: Error;
}
export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError;

/* eslint-disable-next-line */
export interface SharedDataAccessProps { }

export function SharedDataAccess(props: SharedDataAccessProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedDataAccess!</h1>
    </div>
  );
}

export default SharedDataAccess;
