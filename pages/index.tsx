import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Gnb from '../components/Gnb'
import Headers from '../components/Headers'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>코디위키 - TONTON</title>
      </Head>
      <Headers />
      <Gnb />
      
    </>
  )
}

export default Home
