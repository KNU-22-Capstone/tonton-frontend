import React, { useCallback, useDebugValue, useState } from "react";
import { useEffect } from "react";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../firebase/client";
import { DocumentData } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";

type MyCompProps = {
   
  title: string,
  id: string;
}

const Main_Rank_Card = (props:MyCompProps) => {
  type clothType = {
    link: string;
    price: string;
    title: string;
    imageIRL: string;
  };

  const [clothes, setClothes] = useState<clothType[]>([]);
  const arr: clothType[] = [];
  const usersCollectionRef = collection(db, "테스트2");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await getDocs(usersCollectionRef);
    data.forEach((doc: DocumentData) => {
      arr.push(doc.data());
    });
    setClothes(arr);
  };

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
          // pagination={{ clickable: false }}
          className="h-[30rem] "
        >
          <div id={props.id} className="flex overflow-x-scroll overflow-y-hidden scroll-smooth">
            {clothes.map((pro,index) => (
              <SwiperSlide>
                <div className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 w-[16rem] h-[28rem] bg-white rounded-3xl shadow-lg shadow-gray-300'>
                    <div className='absolute left-2 top-4 w-5 text-center border border-red-400 bg-black text-white'>
                        {index+1}
                    </div>
                    
                   
                    <div className='flex flex-col  mx-4'>
                        <span className='font-bold text-sm'>
                            {pro.title}
                        </span>
                        <span className='text-xl'>
                            {pro.price}
                        </span>
                        <button>
                          <Link href={`http://${pro.link}`}>
                            자세히 보기
                          </Link>
                        </button>
                        
                    </div>
                </div>
                
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
  
        
      </section>
  );
};

export default Main_Rank_Card;
