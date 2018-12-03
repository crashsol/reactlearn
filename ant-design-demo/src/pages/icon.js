import styles from './icon.css';
import { Icon } from 'antd'

export default function () {
  return (
    <div className={styles.normal} >
      <Icon type="dollar" />
      <Icon type="dollar" theme="twoTone" twoToneColor="#eb2f96" title="设置theme=twoTone,并设置twoToneColor，双色效果" />

      <Icon type="delete" theme="filled" title="铺满效果" />
      <Icon type="delete" />

      <Icon type="sync" spin />
      <Icon type="loading" />

    </div>
  );
}
