import Link from 'next/link'
import React,{useState, useEffect} from 'react'
import { useRouter } from "next/router"

import MatcingRow from "../../components/MatchingRow"
import Head from 'next/head'
export interface ProdInfo{
    
    id:string,
    productImg: string,
    productName:string,
    productBName: string,
    productPrice: number,
    productRating : number,
    productLike :number,
    productViews:number
    
}

function MatchingTypesPage( ) {
    const router = useRouter()
    const { currentName } = router.query
    
   const [MaImage, setMaI] = useState<string>()

    useEffect(() => {
        
        }, []);
    


    interface MInfo{
        type: string,
        detail: string,
        color: string, 
        
    }
    const matchingImage : MInfo =
        {type : "아우터",
        detail : "후드집업",
        color: "그레이"
        }
    
        
    

  return (
    <>
      <Head>
        <title>TONTON - Matching Result</title>
    </Head>
    <div className='absolute w-full h-full bg-slate-800  overflow-auto'>
        <div className=''>
            <div className='absolute left-64 top-44 -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold h-auto'>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Matching Result
                </span>
                
            </div>
        </div>
        <div className='absolute left-[4rem] top-1/3 mx-10'>
            <div className='absolute rounded-3xl left-[12rem] w-[20rem] h-[16rem] bg-gray-300 bg-opacity-70'>
                <ul className='absolute left-[3rem] top-[3rem] w-[14em] font-bold text-lg'>
                    <li>분류 : {matchingImage.type}</li>
                    <li>세부 분류: {matchingImage.detail}</li>  
                    <li>색상 : {matchingImage.color}</li>  
                    
                </ul>
            </div>
            <div className='relative rounded-full left-2 top-3 border-[0.5rem] border-white bg-slate-400  w-[14rem] h-[14rem] shadow-2xl shadow-black'>    
                <div className='relative top-7'>
                    <div className='absolute right-0 left-0 top-0 bottom-0  w-[8rem] m-auto'>
                        <img
                            className='border-4 border-black'
                            src="https://image.msscdn.net/images/goods_img/20210204/1778404/1778404_1_220.jpg"
                        />
                    </div>
                    
                </div>
            </div>
            <div className=''>
                <Link href={"/"}>
                    <button className='absolute left-[5rem] top-[20rem] w-[20rem] h-[5rem] rounded-3xl font-semibold text-lg  
                    transition ease-in-out delay-150 bg-slate-700  hover:-translate-y-1 hover:scale-110 hover:bg-fuchsia-500 duration-300
                    shadow-2xl shadow-black '>
                        
                        이미지 업로드 다시하기 
                    </button>
                </Link>
            </div>
           
        </div>



        <div className='relative top-[50rem]'>
           <MatcingRow 
           title="Ton On Ton 매칭 결과"
           id="tonOn"/>
           <MatcingRow 
           title="Ton In Ton 매칭 결과"
           id="tonIn"/>
           <MatcingRow
           title="관련 OOTD 매칭 결과"
           id="OOTD" />   
           <MatcingRow 
           title="유사한 상품 매칭 결과"
           id="Simular"/>   
           <MatcingRow 
           title="커뮤니티 매칭 추천 결과"
           id="Community"/>                

        </div>
    </div>
    </>
  )
}

export default MatchingTypesPage