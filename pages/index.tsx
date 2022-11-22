import type { NextPage } from 'next'
import Head from 'next/head'
import Gnb from '../components/Gnb'
import Headers from '../components/Headers'
import ImageInput from '../components/MainPage_Components/ImageInput'
import Main_Rank_Card from '../components/MainPage_Components/Main_Ranking_Card'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>코디위키 - TONTON</title>
      </Head>
      <Headers />
      <Gnb />
      <ImageInput />
      <Main_Rank_Card />
    </>
  )
}

export default Home
