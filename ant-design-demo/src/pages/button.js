import styles from './button.css';
import { Button } from 'antd'

export default function () {
  return (
    <div className={styles.content}>
        <Button  type='primary' icon = 'search' > Add </Button>
        <Button type="default">default</Button>
        <Button type="ghost">Ghost</Button>
        <Button type="danger">danger</Button>
        <Button type="dashed">Dashed</Button>
        
        
        
    </div>
  );
}
