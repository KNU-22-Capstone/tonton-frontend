import React, { useState,useEffect } from 'react'
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
    id :string,

    postImageHat:string,
    postImageTop:string,
    postImageBottom:string,
    postImageShoes:string,
}

interface Props{ 
    arr : CommunityPost;
}






function Item({arr}:Props) {
    const [show, setShow] = useState<boolean>(false);
    

    /*function getData() {
        Axios.get(API_URL).then((res)=>{
            console.log(res.data);
            setList(res.data) =>useState 만들어서 넣기
        });
    } useEffect에 getData();*/

    useEffect(() => {
        window.addEventListener("scroll", () => {
            
            if (window.scrollY > 400) {
              setShow(true);
            } else {
              setShow(false);
            }
          });
      
          return () => {
            window.removeEventListener("scroll", () => {});
          };
    }, [])

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
        <div className='flex relative h-full w-full pl-[20rem]  '>
            <div className='flex absolute -top-[5rem] mx-[3rem] mt-[2rem]'>
                    <div className={`w-[25rem] h-[30rem] bg-slate-100 divide-y-4 divide-slate-400/25 border border-gray-200 shadow-xl ${
                        show && "fixed -top-[2rem]"}`}>
                        <div className='h-[10rem]'>
                            <button className='relative left-[4rem] top-[2rem] bg-blue-400 w-[17rem] h-[3rem] rounded-2xl'>
                                로그인
                            </button>
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

                    <div className='flex-col absolute left-[28rem]'>
                        <div className='w-[55rem] bg-slate-100 border border-gray-200  shadow-xl'>
                            <div className='flex-col'>
                                <div className='text-3xl'>
                                    <p>
                                        {arr?.postName}
                                    </p>
                                   
                                </div>
                                <div className='flex flex-row justify-between m-4 '>
                                    <div className='flex flex-row  divide-x-2'>
                                        <div className='w-[9rem] text-center'>
                                            {arr?.postTag}
                                        </div>
                                        <div className='w-[5rem] text-center'>
                                            {arr?.postTime}시간전
                                        </div>
                                        <div className='w-[6rem] text-center'>
                                            {arr?.postWriter}
                                        </div>
                                    </div>
                                    <div className='flex flex-row  divide-x-2'>
                                        <div className='w-[5rem] text-center'>
                                            조회수
                                        </div>
                                        <div className='w-[5rem] text-center'>
                                            댓글
                                        </div>
                                        <div className='w-[5rem] text-center'>
                                            추천
                                        </div>
                                    </div>
                                    
                                </div>
                               

                            </div>
            
                            

                            
                        </div>


                       
                    </div>
                    

            </div>  
        </div>
    </div>
  )
}

export default Item