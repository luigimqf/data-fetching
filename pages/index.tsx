import type { NextPage } from 'next'
import React from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <section className={styles.wrapper}>

      <div className={styles.main_title_container}  >
        <div className={styles.main_title}>
          <span className={styles.no_responsivity}>Site sem responsividade</span>
          <h1>Meu PDI para Data Fetching c:</h1>
          <p></p>
        </div>
      <div className="main_image">

      </div>
      </div>
    </section>
  )
}

export default Home
