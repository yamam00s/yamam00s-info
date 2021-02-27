import React, { FC, useState } from 'react'
import { GetStaticProps } from 'next'
import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import cmsConfig from '../.cms.config.json'
import CareerContainer from 'containers/Career'
import { Career } from 'services/models/career'

const Home: FC<{ career: Career }> = ({ career }) => {
  console.log(career)
  return (
    <div className={styles.container}>
      <Head>
        <title>yamam00s-info</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ページタイトル
        </h1>

        <p className={styles.description}>
          ページサブイトル
        </p>

        <CareerContainer career={career} />
      </main>

      <footer className={styles.footer}>
        <p>yamam00s-info</p>
      </footer>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) =>{
  const key = {
    headers: { 'X-API-KEY':  cmsConfig.get_api_key },
  }
  const res = await axios.get('https://yamam00s-info.microcms.io/api/v1/career', key)
  return {
    props: {
      career: res.data.contents[0]
    }
  }
}

export default Home
