import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Gnb from '../components/Gnb'
import Headers from '../components/Headers'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>코디위키 - TONTON</title>
      </Head>
      <Headers />
      <Gnb />
      <Link  href="../matchingPages/MatchingTypesPage">
        <div className='bg-blue-800 text-white font-bold w-20 text-center relative left-1/2 rounded-lg'>
          <button>매칭하기
          </button>
        </div>
      </Link>
      
      
    </>
  )
}

export default Home
