import styles from './index.css';
import Link from 'umi/link';

export default function() {
  return (
    <div className={styles.normal}>
      <h1>Page ddd</h1>
      <Link to="/users">Go to Users</Link>
    </div>
  );
}
