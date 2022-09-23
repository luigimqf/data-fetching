import styles from '../../../styles/About/MainBanner.module.css'
import astronaut from '../../../public/About/astronaut.png'
import Image from 'next/image';

const MainBanner = () => {
  return (
    <div className={styles.main_title_container}  >

      <div className={styles.main_title}>
        <span>Site sem responsividade</span>
        <h1>Meu PDI para Data Fetching</h1>
      </div>

      <div className={styles.main_image} >
        <Image src={astronaut} layout="fill"  alt="astronaut" />
      </div>

  </div>
  )
}

export default MainBanner;