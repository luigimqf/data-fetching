import type { NextPage } from 'next'
import React from 'react'
import styles from '../styles/Home.module.css'
import MainBanner from '../components/About/MainBanner'

const Home: NextPage = () => {

  return (
    <section className={styles.wrapper}>

      <MainBanner/>
    </section>
  )
}

export default Home
