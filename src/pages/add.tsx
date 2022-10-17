import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form method='post' action='/api/add'>
        <p>Название</p>
        <input min={1} type='text' name='name' required></input>
        <p>Время</p>
        <input type='date' name='time' required></input>
        <button>Добавить</button>
      </form>
    </div>
  )
}

export default Home