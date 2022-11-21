import React, {useEffect, useState}from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type MyCompProps = {
   
    title: string,
    id: string;
 }
function Row(props:MyCompProps) {
    
    interface ProdInfo{
        id:string,
        productImg: string,
        productName:string,
        productBName: string,
        productPrice: number,
        productRating : number,
    }
    const productMainResult : ProdInfo []=[
        {
            id:"2142512fv",
            productImg: "https://image.msscdn.net/images/goods_img/20190201/947088/947088_3_500.jpg?t=20200706103059",
            productName:"멋있는 후드1",
            productBName: "멋있는 브랜드1",
            productPrice: 50000,
            productRating : 4.5,
        },
        {
            id:"21425sdfv",
            productImg: "https://image.msscdn.net/images/goods_img/20220831/2758349/2758349_1_500.jpg?t=20220831183027",
            productName:"멋있는 후드티2",
            productBName: "멋있는 브랜드2",
            productPrice: 50000,
            productRating : 4.5,
        },
        {
            id:"2142546fv",
            productImg: "https://image.msscdn.net/images/goods_img/20190201/947088/947088_3_500.jpg?t=20200706103059",
            productName:"멋있는 후드티3",
            productBName: "멋있는 브랜드3",
            productPrice: 50000,
            productRating : 4.5,
        },
        {
            id:"21112fv",
            productImg: "https://image.msscdn.net/images/goods_img/20190201/947088/947088_3_500.jpg?t=20200706103059",
            productName:"멋있는 후드티4",
            productBName: "멋있는 브랜드4",
            productPrice: 50000,
            productRating : 4.5,
        },
        {
            id:"21112fv",
            productImg: "https://image.msscdn.net/images/goods_img/20190201/947088/947088_3_500.jpg?t=20200706103059",
            productName:"멋있는 후드티4",
            productBName: "멋있는 브랜드4",
            productPrice: 50000,
            productRating : 4.5,
        },
        {
            id:"21112fv",
            productImg: "https://image.msscdn.net/images/goods_img/20190201/947088/947088_3_500.jpg?t=20200706103059",
            productName:"멋있는 후드티4",
            productBName: "멋있는 브랜드4",
            productPrice: 50000,
            productRating : 4.5,
        },
        {
            id:"21112fv",
            productImg: "https://image.msscdn.net/images/goods_img/20190201/947088/947088_3_500.jpg?t=20200706103059",
            productName:"멋있는 후드티4",
            productBName: "멋있는 브랜드4",
            productPrice: 50000,
            productRating : 4.5,
        }
    ]
    const [MainRank, setMainRank] = useState<ProdInfo[]>([]);

    useEffect(() => {
        setMainRank(productMainResult);
        }, []);

  return (
        <section className="ml-20">
        <div className='text-xl font-bold'>
            <h2>{props.title}</h2>
        </div>
        
        <Swiper 
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          loop={false} // loop 기능을 사용할 것인지
          breakpoints={{
            1378: {
              slidesPerView: 6, // 한번에 보이는 슬라이드 개수
              slidesPerGroup: 6, // 몇개씩 슬라이드 할지
            },
            998: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            625: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            0: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          navigation  // arrow 버튼 사용 유무 
          pagination={{ clickable: true }} // 페이지 버튼 보이게 할지 
          className="h-[25rem] "
        >
          <div id={props.id} className="flex overflow-x-scroll overflow-y-hidden scroll-smooth">
            {MainRank.map((pro,index) => (
              <SwiperSlide>
                <div className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 w-[16rem] bg-white rounded-3xl shadow-lg shadow-gray-300'>
                    <div className='absolute left-2 top-4 w-5 text-center border border-red-400 bg-black text-white'>
                        {index+1}
                    </div>
                    <img
                    key={pro.id}
                    style={{ padding: "10px 0" }}
                    className=" w-full max-h-80 transition-transform rounded-xl "
                    src={pro.productImg }
                    />
                    <div>
                        <span className='mx-5'>
                            {pro.productBName}
                        </span>
                    </div>
                </div>
                
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
  
        
      </section>
  )
}

export default Row