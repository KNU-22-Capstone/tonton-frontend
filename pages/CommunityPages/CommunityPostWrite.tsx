import React,{ useCallback, useRef, useState } from 'react'
import Head from 'next/head'
import Gnb from '../../components/Gnb'
import Headers from '../../components/Headers'
import Image from "next/image"



function CommunityPostWrite() {
    const fileRef = useRef<HTMLInputElement>(null);
    const [images, setImages] = useState<string>();
    const [imageBoolean, setImageBoolean] = useState<boolean>(false);
    const [textTitle, settextTitle] = useState("");
    const [textContents, settextContents] = useState("");
    const handleClick = () => {
      fileRef?.current?.click();
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // @ts-ignore
      setImages(URL.createObjectURL(e.target.files[0]));
      setImageBoolean(true);
    };
  
    const handleCancel = (e: any) => {
      window.location.reload();
      setImageBoolean(false);
    };
    const textTitleHandleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        settextTitle(e.target.value);
       
    };
    const textContentsHandleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        settextContents(e.target.value);
       
    };

    const handle_TagButtonClock = () => {
    }

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
        <div className='absolute h-full w-full pl-[15rem]   '>
            <div className='flex absolute -top-[5rem]'>
                    
                    <div className='flex-col'>
                        <div className='flex mx-[3rem] mt-[2rem] w-[60rem] h-[60rem] bg-slate-100 shadow-xl'>
                            <div className='absolute text-3xl text-white left-10 -top-[2rem]'>
                                <span>톤톤 커뮤니티</span>
                            </div>
                            <div>
                                <span>꾸며보세요!</span>
                                <div className='relative'>
                                    <div className=' absolute left-[27rem] top-[10rem] w-[5rem] h-[5rem] rounded-full bg-gray-500'/* 얼굴 *//>
                                    <div className=' absolute left-[26rem] top-[16rem] w-[7rem] h-[15rem] rounded bg-gray-500'/*몸 */  />
                                    <div className=' absolute left-[24rem] top-[16rem] w-[3rem] h-[3rem] rounded bg-gray-500'/*팔 이음새 */ />
                                    <div className=' absolute left-[23.5rem] top-[16rem] w-[2rem] h-[15rem] rounded bg-gray-500'/*팔*/ />
                                    <div className=' absolute left-[32rem] top-[16rem] w-[3rem] h-[3rem] rounded bg-gray-500'/*팔 이음새 */ />
                                    <div className=' absolute left-[33.5rem] top-[16rem] w-[2rem] h-[15rem] rounded bg-gray-500'/*팔*/ />
                                    <div className=' absolute left-[26rem] top-[30rem] w-[3rem] h-[15rem] rounded bg-gray-500'/*왼다리*/ />
                                    <div className=' absolute left-[30rem] top-[30rem] w-[3rem] h-[15rem] rounded bg-gray-500'/*오른다리*/ />



                                    <div className='absolute left-[44rem]'>
                                        <div className="flex items-center justify-center flex-row m-2">
                                            <div className="">
                                                <input
                                                    ref={fileRef}
                                                    name="file"
                                                    type="file"
                                                    id="file"
                                                    accept="image/jpeg,image/jpg,image/png"
                                                    onChange={handleChange}
                                                    className="hidden"
                                                />

                                                <button
                                                    className={`${
                                                    imageBoolean ? "hidden" : ""
                                                    } text-2xl my-5 w-[200px] h-[200px] border-2 rounded border-slate-900`}
                                                    onClick={handleClick}
                                                >
                                                    Top
                                                </button>
                                                {images && (
                                                    <Image
                                                    alt="test"
                                                    src={images}
                                                    width={600}
                                                    height={600}
                                                    className="my-10 object-cover"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='absolute left-[44rem] top-[20rem]'>
                                        <div className="flex items-center justify-center flex-row m-2">
                                            <div className="">
                                                <input
                                                    ref={fileRef}
                                                    name="file"
                                                    type="file"
                                                    id="file"
                                                    accept="image/jpeg,image/jpg,image/png"
                                                    onChange={handleChange}
                                                    className="hidden"
                                                />

                                                <button
                                                    className={`${
                                                    imageBoolean ? "hidden" : ""
                                                    } text-2xl my-5 w-[200px] h-[200px] border-2 rounded border-slate-900`}
                                                    onClick={handleClick}
                                                >
                                                    Bottom
                                                </button>
                                                {images && (
                                                    <Image
                                                    alt="test"
                                                    src={images}
                                                    width={600}
                                                    height={600}
                                                    className="my-10 object-cover"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className='absolute left-[44rem] top-[40rem]'>
                                        <div className="flex items-center justify-center flex-row m-2">
                                            <div className="">
                                                <input
                                                    ref={fileRef}
                                                    name="file"
                                                    type="file"
                                                    id="file"
                                                    accept="image/jpeg,image/jpg,image/png"
                                                    onChange={handleChange}
                                                    className="hidden"
                                                />

                                                <button
                                                    className={`${
                                                    imageBoolean ? "hidden" : ""
                                                    } text-2xl my-5 w-[200px] h-[200px] border-2 rounded border-slate-900`}
                                                    onClick={handleClick}
                                                >
                                                    Shoes
                                                </button>
                                                {images && (
                                                    <Image
                                                    alt="test"
                                                    src={images}
                                                    width={600}
                                                    height={600}
                                                    className="my-10 object-cover"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>                                                   


                                    <div>
                                    <div className='absolute left-[5rem]'>
                                        <div className="flex items-center justify-center flex-row m-2">
                                            <div className="">
                                                <input
                                                    ref={fileRef}
                                                    name="file"
                                                    type="file"
                                                    id="file"
                                                    accept="image/jpeg,image/jpg,image/png"
                                                    onChange={handleChange}
                                                    className="hidden"
                                                />

                                                <button
                                                    className={`${
                                                    imageBoolean ? "hidden" : ""
                                                    } text-2xl my-5 w-[200px] h-[200px] border-2 rounded border-slate-900`}
                                                    onClick={handleClick}
                                                >
                                                    Cap
                                                </button>
                                                {images && (
                                                    <Image
                                                    alt="test"
                                                    src={images}
                                                    width={600}
                                                    height={600}
                                                    className="my-10 object-cover"
                                                    />
                                                )}
                                                </div>
                                            </div>
                                        </div> 
                                    </div>                                                            


                                </div>
                            
                        
                            </div>
                            
                        
                        </div>
                        <div className='flex-col mx-[3rem] mt-[2rem] w-[60rem] h-auto mb-[10rem] bg-slate-100 shadow-xl'>
                            <div className='pt-[2rem] px-10 w-full '>
                                <input
                                className='border w-full h-[3rem] text-lg px-7'
                                type='text'
                                value={textTitle}
                                onChange={textTitleHandleChange}
                                placeholder='제목'
                                
                                
                                
                                />
                            </div>
                            <div className='pt-[2rem] px-10 w-full pb-[3rem] '>
                                <input
                                className='border w-full h-[20rem] text-lg px-7 text-start'
                                type='text'
                                value={textContents}
                                onChange={textContentsHandleChange}
                                placeholder='내용'
                                
                                
                                
                                />
                            </div>

                            <div className='flex flex-row-reverse m-[2rem] pb-[2rem]'>
                                <button className='bg-slate-500 rounded-lg w-[8rem] text-white'>
                                    작성하기
                                </button>
                            </div>

                        </div>
                    </div>                  
                    <div className='flex-col'>
                        <div className='mt-[2rem] w-[20rem] bg-slate-100 shadow-xl divide-y-2'>
                            <div className='text-center my-5'>
                                <span className='font-bold '>찜 목록</span>
                            </div>
                            
                            <div className='flex'>
                                <img 
                                className='w-[9rem]  h-[10rem]'
                                src="https://image.msscdn.net/images/goods_img/20221017/2870818/2870818_1_320.jpg"
                                />
                                <span className='text-lg font-bold'>상품이름</span>
                            </div>
                        </div>
                    </div>
                    

            </div>  
        </div>
    </div>
  )
}

export default CommunityPostWrite