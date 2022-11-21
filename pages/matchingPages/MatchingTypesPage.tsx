import Link from 'next/link'
import React,{useState} from 'react'


function MatchingTypesPage() {

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
    <div className='absolute w-full h-full bg-slate-900  overflow-auto'>
        <div className=''>
            <div className='absolute left-64 top-44 -translate-x-1/2 -translate-y-1/2 text-5xl font-extrabold h-auto'>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Matching Result
                </span>
                
            </div>
        </div>
        <div className='absolute left-[4rem] top-1/3 mx-10'>
            <div className='absolute rounded-3xl left-[12rem] w-[20rem] h-[16rem] bg-gray-300 bg-opacity-70'>
                <ul className='absolute left-[3rem] top-[3rem] w-[14em] font-bold'>
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
                            src={"https://image.msscdn.net/images/goods_img/20190201/947088/947088_3_500.jpg?t=20200706103059"}
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




        <div className='absolute left-[52rem] top-[5rem] w-auto '>
            <div className='rounded-3xl border-l-8 border-t-8 border-b-8  border-white w-[65rem] h-[65rem] my-10'>
                
                <div className='group/item1 absolute animate-bounce left-[8rem] top-44 w-52 h-48 bg-slate-600  shadow-2xl shadow-black m-auto rounded-3xl hover:animate-none hover:opacity-80'>

                    <div className='absolute -top-10 left-5'>
                        <span className='text-white font-extrabold text-3xl'>관련 OOTD</span>
                    </div>
                    
                    <img
                        className='absolute left-4 top-4 border-4 w-44 h-40 border-black'
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZR1UEHgChheu3fJHfr7Ddo1ufyy24S2FC_sAkKtlpMgse2RlV-3hLwzvjdFp1B_y0xhk&usqp=CAU"}
                    />
                    <div className='absolute left-6 top-[4rem] text-white font-semibold rounded-xl bg-sky-500 w-40 h-10 invisible group-hover/item1:visible hover:bg-sky-300 '>
                        <Link href="./WebSearchPage">
                            <button className='absolute left-4 top-2  '>더 많은 추천보기</button>
                        </Link>
                    </div>
                </div>

                <div className='absolute animate-bounce left-[33rem] bottom-[42rem] w-[25rem] h-64 bg-blue-800 shadow-2xl shadow-black m-auto rounded-3xl group/item2 hover:animate-none hover:opacity-80'>
                    <div className='absolute -top-10 left-5'>
                        <span className='text-white font-extrabold text-2xl'>톤온톤 톤인톤</span>
                    </div>
                    
                    <img
                        className='absolute left-4 top-5 border-4 w-44 border-black'
                        src={"https://image.msscdn.net/images/goods_img/20210812/2060759/2060759_4_500.jpg?t=20211116105407"}
                    />
                    <img
                        className='absolute left-[13rem] top-5 border-4 w-44 border-black'
                        src={"https://image.msscdn.net/images/goods_img/20181025/890338/890338_8_500.jpg?t=20220628150451"}
                    />
                    <div className='absolute left-[3rem] top-[6rem] text-white font-semibold rounded-xl bg-sky-500 w-[20rem] h-10 invisible group-hover/item2:visible hover:bg-sky-300 '>
                        <Link href="./TonMatchingPage">
                        <button className='absolute left-[5rem] top-2 text-xl  '>더 많은 추천보기</button>
                        </Link>
                    </div>
                </div>

                <div className='absolute animate-bounce left-[40rem] top-[40rem] w-52 h-64 bg-blue-800 shadow-2xl shadow-black m-auto rounded-3xl group/item3 hover:animate-none hover:opacity-80'>
                    <div className='absolute -top-10 left-5'>
                        <span className='text-white font-extrabold text-xl'>커뮤니티 유사 코디</span>
                    </div>
                    
                    <img
                        className='absolute left-4 top-5 border-4 w-44 h-52 border-black'
                        src={"https://image.msscdn.net/images/codimap/detail/13648/detail_13648_1_500.jpg?202211180311"}
                    />
                    <div className='absolute left-6 top-[6rem] text-white font-semibold rounded-xl bg-sky-500 w-40 h-10 invisible group-hover/item3:visible hover:bg-sky-300 '>
                        <Link href="./CommunityMatchingPage">
                            <button className='absolute left-4 top-2  '>더 많은 추천보기</button>
                        </Link>
                    </div>
                </div>

                <div className='absolute animate-bounce left-[8rem] top-[45rem] w-52 h-64 bg-blue-800 shadow-2xl shadow-black m-auto rounded-3xl group/item4 hover:animate-none hover:opacity-80'>
                    <div className='absolute -top-10 left-5'>
                        <span className='text-white font-extrabold text-3xl'>유사한 상품</span>
                    </div>
                    
                    <img
                        className='absolute left-4 top-5 border-4 w-44 h-52 border-black'
                        src={"https://image.msscdn.net/images/goods_img/20210203/1776365/1776365_5_500.jpg?t=20220107181217"}
                    />
                    <div className='absolute left-6 top-[7rem] text-white font-semibold rounded-xl bg-sky-500 w-40 h-10 invisible group-hover/item4:visible hover:bg-sky-300 '>
                        <Link href="./SimularMatchingPage">
                            <button className='absolute left-4 top-2  '>더 많은 추천보기</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>



        <div>

        </div>
    </div>
  )
}

export default MatchingTypesPage