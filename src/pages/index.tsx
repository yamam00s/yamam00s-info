import React, { FC, useState } from 'react'
import { GetStaticProps } from 'next'
import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import cmsConfig from '../.cms.config.json'
import CareerContainer from 'containers/Career'
import { Career } from 'services/models/career'

const Home: FC<{ careers: Career[] }> = ({ careers }) => {
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

        {careers.map(career => (
          <CareerContainer key={career.id} career={career} />
        ))}
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
  const { data } = await axios.get('https://yamam00s-info.microcms.io/api/v1/career', key)
  console.log(data)
  return {
    props: {
      careers: data.contents
    }
  }
}

export default Home
