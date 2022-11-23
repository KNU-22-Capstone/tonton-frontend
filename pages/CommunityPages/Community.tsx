import React, { useState } from 'react'
import Head from 'next/head'

import Gnb from '../../components/Gnb'
import Headers from '../../components/Headers'
import Link from 'next/link'

interface CommunityPost{
    postLike : number,
    postName : string,
    postTag : string,
    postTime: number,
    postWriter : string,

    postImageHat:string,
    postImageTop:string,
    postImageBottom:string,
    postImageShoes:string,
}

function Community() {

    const [comPostArr, setcomPostArr] = useState<CommunityPost[]>([
        {
            postLike : 456,
            postName : '오늘의 코디에욤',
            postTag : '사용자 추천 코디',
            postTime: 6,
            postWriter : '강수민',
        
            postImageHat:'https://image.msscdn.net/images/goods_img/20220802/2693365/2693365_2_220.jpg',
            postImageTop:'https://image.msscdn.net/images/goods_img/20210824/2082373/2082373_1_220.jpg',
            postImageBottom:'https://image.msscdn.net/images/goods_img/20220922/2812750/2812750_1_220.jpg',
            postImageShoes:'https://image.msscdn.net/images/goods_img/20220824/2737460/2737460_1_220.jpg',
        },
        {
            postLike : 456,
            postName : '오늘의 코디에욤',
            postTag : '사용자 추천 코디',
            postTime: 6,
            postWriter : '강수민',
        
            postImageHat:'https://image.msscdn.net/images/goods_img/20220802/2693365/2693365_2_220.jpg',
            postImageTop:'https://image.msscdn.net/images/goods_img/20210824/2082373/2082373_1_220.jpg',
            postImageBottom:'https://image.msscdn.net/images/goods_img/20220922/2812750/2812750_1_220.jpg',
            postImageShoes:'https://image.msscdn.net/images/goods_img/20220824/2737460/2737460_1_220.jpg',
        },
        {
            postLike : 456,
            postName : '오늘의 코디에욤',
            postTag : '사용자 추천 코디',
            postTime: 6,
            postWriter : '강수민',
        
            postImageHat:'https://image.msscdn.net/images/goods_img/20220802/2693365/2693365_2_220.jpg',
            postImageTop:'https://image.msscdn.net/images/goods_img/20210824/2082373/2082373_1_220.jpg',
            postImageBottom:'https://image.msscdn.net/images/goods_img/20220922/2812750/2812750_1_220.jpg',
            postImageShoes:'https://image.msscdn.net/images/goods_img/20220824/2737460/2737460_1_220.jpg',
        },
        {
            postLike : 456,
            postName : '오늘의 코디에욤',
            postTag : '사용자 추천 코디',
            postTime: 6,
            postWriter : '강수민',
        
            postImageHat:'https://image.msscdn.net/images/goods_img/20220802/2693365/2693365_2_220.jpg',
            postImageTop:'https://image.msscdn.net/images/goods_img/20210824/2082373/2082373_1_220.jpg',
            postImageBottom:'https://image.msscdn.net/images/goods_img/20220922/2812750/2812750_1_220.jpg',
            postImageShoes:'https://image.msscdn.net/images/goods_img/20220824/2737460/2737460_1_220.jpg',
        },
        {
            postLike : 456,
            postName : '오늘의 코디에욤',
            postTag : '사용자 추천 코디',
            postTime: 6,
            postWriter : '강수민',
        
            postImageHat:'https://image.msscdn.net/images/goods_img/20220802/2693365/2693365_2_220.jpg',
            postImageTop:'https://image.msscdn.net/images/goods_img/20210824/2082373/2082373_1_220.jpg',
            postImageBottom:'https://image.msscdn.net/images/goods_img/20220922/2812750/2812750_1_220.jpg',
            postImageShoes:'https://image.msscdn.net/images/goods_img/20220824/2737460/2737460_1_220.jpg',
        },
        {
            postLike : 456,
            postName : '오늘의 코디에욤',
            postTag : '사용자 추천 코디',
            postTime: 6,
            postWriter : '강수민',
        
            postImageHat:'https://image.msscdn.net/images/goods_img/20220802/2693365/2693365_2_220.jpg',
            postImageTop:'https://image.msscdn.net/images/goods_img/20210824/2082373/2082373_1_220.jpg',
            postImageBottom:'https://image.msscdn.net/images/goods_img/20220922/2812750/2812750_1_220.jpg',
            postImageShoes:'https://image.msscdn.net/images/goods_img/20220824/2737460/2737460_1_220.jpg',
        },
        {
            postLike : 456,
            postName : '오늘의 코디에욤',
            postTag : '사용자 추천 코디',
            postTime: 6,
            postWriter : '강수민',
        
            postImageHat:'https://image.msscdn.net/images/goods_img/20220802/2693365/2693365_2_220.jpg',
            postImageTop:'https://image.msscdn.net/images/goods_img/20210824/2082373/2082373_1_220.jpg',
            postImageBottom:'https://image.msscdn.net/images/goods_img/20220922/2812750/2812750_1_220.jpg',
            postImageShoes:'https://image.msscdn.net/images/goods_img/20220824/2737460/2737460_1_220.jpg',
        },
        {
            postLike : 456,
            postName : '오늘의 코디에욤',
            postTag : '사용자 추천 코디',
            postTime: 6,
            postWriter : '강수민',
        
            postImageHat:'https://image.msscdn.net/images/goods_img/20220802/2693365/2693365_2_220.jpg',
            postImageTop:'https://image.msscdn.net/images/goods_img/20210824/2082373/2082373_1_220.jpg',
            postImageBottom:'https://image.msscdn.net/images/goods_img/20220922/2812750/2812750_1_220.jpg',
            postImageShoes:'https://image.msscdn.net/images/goods_img/20220824/2737460/2737460_1_220.jpg',
        },
    ])

  return (
    <div>
        <Head>
        <title>코디위키 - TONTON</title>
        </Head>
        <Headers />
        <Gnb />
        <div className='flex'>
            <div className='absolute w-full h-[17rem] bg-black bg-opacity-50'>
            
            </div>

            <img
                className='object-cover w-full h-[17rem]'
                src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png" 
            />
        </div>
        <div className='flex absolute h-full w-full pl-[15rem]  '>
            <div className='flex absolute -top-[5rem]'>
                    <div className='mx-[3rem] mt-[2rem] w-[25rem] h-[30rem] bg-slate-100 divide-y-4 divide-slate-400/25 shadow-xl'>
                        <div className='absolute text-3xl text-white left-10 -top-[2rem]'>
                            <span>톤톤 커뮤니티에 오신 것을 환영^^</span>
                        </div>

                        <div className='h-[10rem]'>
                            <button className='relative left-[4rem] top-[2rem] bg-blue-400 w-[17rem] h-[3rem] rounded-2xl'>로그인</button>
                        </div>
                        <div className='flex-row pl-5'>
                            <div className='text-gray-400 mt-3'>
                                <span>
                                    홈
                                </span> 
                            </div>
                            <div className='pl-5 my-3'>
                                <button>
                                    전체
                                </button>
                            </div>
                            
                        </div>
                        <div className='flex-row pl-5'>
                            <div className='text-gray-400 mt-3'>
                                    <span>
                                        커뮤니티
                                    </span> 
                                </div>
                                <div className='pl-5 my-3'>
                                    <button>
                                        사용자 추천 코디
                                    </button>
                                </div>
                            </div>
                        </div>

                    <div className='flex-col'>
                        <div className='mt-[2rem] w-[55rem] bg-slate-100 shadow-xl'>
                            <div className='flex-col space-y-[1rem]'>
                                <div className='flex justify-between '>
                                    <div className='m-3'>
                                        <span className='font-bold text-xl'>전체</span>
                                    </div>
                                    
                                    <div className='m-3'>
                                        <Link href="./CommunityPostWrite">
                                            <button className='bg-blue-400 w-[5rem] rounded-2xl'>
                                                글쓰기
                                            </button>
                                        </Link>
                                        
                                    </div>
                                </div>
                                
                                <div className='flex justify-between px-[10rem] pb-5'>
                                    <div>
                                        인기
                                    </div>
                                    <div>
                                        최신
                                    </div>
                                    <div>
                                        Top
                                    </div>
                                    <div>
                                        10주
                                    </div>
                                </div> 
            
                            </div>

                            
                        </div>
                        <div className='flex-col mt-[2rem] w-[55rem] h-full bg-slate-100 shadow-xl divide-y-2 divide-slate-400/25'>
                            {comPostArr.map(post=>(
                                <div className='flex w-full h-[10rem]'>
                                    <div className='w-[6rem] h-[6rem]'>
                                        <div className='relative left-10 top-10'>
                                            <p >🔺</p>
                                            <p>{post.postLike}</p>
                                        </div>
                                         
                                     </div>
                                     <div className='flex justify-between'>
                                        
                                         <div className='flex-col mt-7 ml-2 w-[40rem]'>
                                             <div className='my-1 text-lg'>
                                                 <button>{post.postName}</button>
                                             </div>
                                             <div className='flex divide-x text-sm mt-12 -ml-3 text-gray-400'>
                                                 <div className='w-[9rem] text-center'>
                                                     <span>{post.postTag}</span>
                                                 </div>
                                                 <div className='w-[5rem] text-center'>
                                                     <span>{post.postTime}시간전</span>
                                                 </div>
                                                 <div className='w-[5rem] text-center'>
                                                     <span>{post.postWriter}</span>
                                                 </div>
                                             </div>
                                         </div>
                                         

                                        <div className='grid grid-cols-2 w-[8rem] h-[10rem] bg-white '>
                                            <div>
                                            <img
                                                
                                                src={post.postImageHat}
                                                />
                                            </div>
                                            <div>
                                                <img
                                                
                                                src={post.postImageTop}
                                                />
                                            </div>
                                            <div>
                                            <img
                                               
                                                src={post.postImageBottom}
                                                />
                                            </div>
                                            <div>
                                                <img
                                                
                                                src={post.postImageShoes}
                                                />
                                            </div>
                                    

                                        </div>
                                         
                                         
                                         
                                     </div>
                                </div>             
                            ))}
                           
                            
                        </div>
                    </div>
                    

            </div>  
        </div>
    </div>
  )
}

export default Community