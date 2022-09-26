import React from 'react';
import { useOnScreen } from '../../../hooks/useOnScreen';
import styles from '../../../styles/About/Info.module.css';

const Info = () => {
  const InfoRef = React.useRef(null);
  const isVisible = useOnScreen(InfoRef,'-300px');

  return (
    <div ref={InfoRef} className={styles.wrapper}>
      {isVisible && (
        <div className={styles.fetchMethods}>
        </div>
      )}
    </div>
  )
}

export default Info;