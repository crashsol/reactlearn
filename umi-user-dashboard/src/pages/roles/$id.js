import React from 'react';
import styles from './index.css';

export default function RoleDetail(props) {
  /*  */
  const {
    match: { params },
    location: { query },
  } = props;
  console.log(props);
  return (
    <div className={styles.title}>
      <p>Url Path :{location.pathname}</p>
      <p>User Details Id From PathName, Id：{params.id}</p>
      <p>Query params:{JSON.stringify(query)}</p>
    </div>
  );
}
