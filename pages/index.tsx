import type { NextPage } from 'next'
import Head from 'next/head'
import Gnb from '../components/Gnb'
import Headers from '../components/Headers'

import ImageInput from '../components/MainPage_Components/ImageInput'
import Main_Rank_Card from '../components/MainPage_Components/Main_Ranking_Card'

import Link from 'next/link'
import Row from '../components/Row'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { LOGIN_CHECK } from '../Store/Auth'
import { Cookies } from 'react-cookie'

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const cookie = new Cookies();
  
  useEffect(() => {
    if(cookie.get('TOKEN')) {
      dispatch(LOGIN_CHECK());
    }
  })
  
  return (
    <>
      <Head>
        <title>코디위키 - TONTON</title>
      </Head>
      <Headers />
      <Gnb />

      <ImageInput />
      <Link  href="../matchingPages/MatchingTypesPage">
        <div className='bg-blue-800 text-white font-bold w-20 text-center relative left-1/2 rounded-lg'>
          <button>매칭하기
          </button>
        </div>
      </Link>
      <Main_Rank_Card title="무신사 랭킹" id="MusinsaN"/>
      <Main_Rank_Card title="하이버 랭킹" id="HiverN" />
      <Main_Rank_Card title="룩핀" id="LookpinN" />
      {/* <Main_Rank_Card title="29CM 랭킹" id="29cmN"/> */}
    </>
  )
}

export default Home
