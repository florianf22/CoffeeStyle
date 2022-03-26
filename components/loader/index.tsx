import type { NextPage } from 'next';
import styles from './loader.module.css';

const Loader: NextPage = () => {
  return (
    <div className="mt-8">
      <span className={styles.loader} />
    </div>
  );
};

export default Loader;
