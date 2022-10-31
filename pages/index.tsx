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
      {/* <div className=" flex px-5 py-24 items-center justify-center flex-col">
        <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/1280x720"
          width={1280}
          height={720} />
        <div className="text-center lg:w-2/3 w-full">
          <p className="mb-8 leading-relaxed">여기에 코디를 원하는 옷 이미지를 Drag&Drop하고 메칭하기 버튼을 눌러주세요!</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-slate-700 border-0 py-2 px-6 focus:outline-none hover:bg-slate-900 rounded text-lg">Button</button>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Home
