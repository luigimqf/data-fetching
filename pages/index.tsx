import type { NextPage } from 'next'
import React from 'react'
import styles from '../styles/Home.module.css'
import MainBanner from '../components/About/MainBanner'
import Info from '../components/About/Info'

const Home: NextPage = () => {

  return (
    <section className={styles.wrapper}>
      <MainBanner/>
      <Info />
    </section>
  )
}

export default Home
