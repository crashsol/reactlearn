import React from 'react';
import styles from './index.css';

export default function roles(props) {
  const {
    match: { params },
    location: { search, query },
  } = props;
  return (
    <div className={styles.title}>
      <p>location:{JSON.stringify(location)}</p>
      <p>search :{JSON.stringify(search)}</p>
      <p>query:{JSON.stringify(query)}</p>
      <p>params : {JSON.stringify(params)}</p>
    </div>
  );
}
