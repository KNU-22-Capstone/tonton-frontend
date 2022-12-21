import React, { useState, useEffect } from "react";
import Head from "next/head";

import Gnb from "../../components/Gnb";
import Headers from "../../components/Headers";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

interface CommunityPost {
  postLike: number;
  postName: string;
  postTag: string;
  postTime: number;
  postWriter: string;
  id: string;

  postImageHat: string;
  postImageTop: string;
  postImageBottom: string;
  postImageShoes: string;
}

function Community() {
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
  }, []);

  const [comPostArr, setcomPostArr] = useState<CommunityPost[]>([
    {
      postLike: 28,
      postName: "오늘의 코디에욤",
      postTag: "사용자 추천 코디",
      postTime: 6,
      postWriter: "강수민",
      id: "1",

      postImageHat:
        "https://image.msscdn.net/images/goods_img/20191105/1214193/1214193_4_125.jpg",
      postImageTop:
        "https://image.msscdn.net/images/goods_img/20220303/2396645/2396645_4_500.jpg?t=20220930095511",
      postImageBottom:
        "https://image.msscdn.net/images/goods_img/20210826/2092852/2092852_4_500.jpg?t=20221012160640",
      postImageShoes:
        "https://image.msscdn.net/images/goods_img/20180703/810034/810034_1_500.jpg?t=20220926145452",
    },
    {
      postLike: 20,
      postName: "오빠 오빠 오빠 옷 있어?",
      postTag: "사용자 추천 코디",
      postTime: 6,
      postWriter: "왕간다잉",
      id: "2",

      postImageHat:
        "https://image.msscdn.net/images/goods_img/20201110/1684057/1684057_1_220.jpg",
      postImageTop:
        "https://image.msscdn.net/images/goods_img/20221012/2856503/2856503_3_500.jpg?t=20221018112122",
      postImageBottom:
        "https://image.msscdn.net/images/goods_img/20221116/2946562/2946562_3_500.jpg?t=20221116220721",
      postImageShoes:
        "https://image.msscdn.net/images/goods_img/20170227/490093/490093_2_500.jpg?t=20210223110118",
    },
    {
      postLike: 19,
      postName: "그기 코디에 도움이 됩니까?",
      postTag: "사용자 추천 코디",
      postTime: 6,
      postWriter: "순양 진양철",
      id: "3",

      postImageHat:
        "https://image.msscdn.net/images/goods_img/20220812/2715565/2715565_1_500.jpg?t=20220819160834",
      postImageTop:
        "https://image.msscdn.net/images/goods_img/20220928/2826396/2826396_1_500.jpg?t=20221007141522",
      postImageBottom:
        "https://image.msscdn.net/images/goods_img/20220829/2749880/2749880_1_500.jpg?t=20220830190304",
      postImageShoes:
        "https://image.msscdn.net/images/goods_img/20221007/2846272/2846272_1_500.jpg?t=20221007102118",
    },
    {
      postLike: 15,
      postName: "중요한건 꺾이지않는 패션",
      postTag: "사용자 추천 코디",
      postTime: 6,
      postWriter: "네이마르",
      id: "4",

      postImageHat:
        "https://image.msscdn.net/images/goods_img/20201022/1659053/1659053_1_500.jpg?t=20201022032406",
      postImageTop:
        "https://image.msscdn.net/images/goods_img/20210128/1768045/1768045_1_500.jpg?t=20210128184433",
      postImageBottom:
        "https://image.msscdn.net/images/goods_img/20200326/1370101/1370101_2_500.jpg?t=20200326231601",
      postImageShoes:
        "https://image.msscdn.net/images/goods_img/20200423/1417311/1417311_1_500.jpg?t=20200423095151",
    },
    {
      postLike: 14,
      postName: "싸늘하다.. 오늘 진짜 개추움",
      postTag: "사용자 추천 코디",
      postTime: 6,
      postWriter: "강수민",
      id: "5",

      postImageHat:
        "https://image.msscdn.net/images/goods_img/20220802/2693365/2693365_2_220.jpg",
      postImageTop:
        "https://image.msscdn.net/images/goods_img/20210824/2082373/2082373_1_220.jpg",
      postImageBottom:
        "https://image.msscdn.net/images/goods_img/20220922/2812750/2812750_1_220.jpg",
      postImageShoes:
        "https://image.msscdn.net/images/goods_img/20220824/2737460/2737460_1_220.jpg",
    },
    {
      postLike: 12,
      postName: "오늘의 코디에욤",
      postTag: "사용자 추천 코디",
      postTime: 6,
      postWriter: "강수민",
      id: "6",

      postImageHat:
        "https://image.msscdn.net/images/goods_img/20210218/1802059/1802059_1_500.jpg?t=20210218161226",
      postImageTop:
        "https://image.msscdn.net/images/goods_img/20221021/2884439/2884439_1_500.jpg?t=20221021213738",
      postImageBottom:
        "https://image.msscdn.net/images/goods_img/20220124/2322560/2322560_1_500.jpg?t=20220127113730",
      postImageShoes:
        "https://image.msscdn.net/images/goods_img/20221107/2925200/2925200_1_500.jpg?t=20221107151743",
    },
    {
      postLike: 10,
      postName: "오늘의 코디에욤",
      postTag: "사용자 추천 코디",
      postTime: 6,
      postWriter: "강수민",
      id: "7",

      postImageHat:
        "https://image.msscdn.net/images/goods_img/20181212/920522/920522_3_220.jpg",
      postImageTop:
        "https://image.msscdn.net/images/goods_img/20220916/2797048/2797048_2_220.jpg",
      postImageBottom:
        "https://image.msscdn.net/images/goods_img/20210915/2134304/2134304_1_220.jpg",
      postImageShoes:
        "https://image.msscdn.net/images/goods_img/20200309/1341456/1341456_1_220.jpg",
    },
    {
      postLike: 9,
      postName: "오늘의 코디에욤",
      postTag: "사용자 추천 코디",
      postTime: 6,
      postWriter: "강수민",
      id: "8",

      postImageHat:
        "https://image.msscdn.net/images/goods_img/20210629/2012747/2012747_1_220.jpg",
      postImageTop:
        "https://image.msscdn.net/images/goods_img/20220608/2603937/2603937_1_220.jpg",
      postImageBottom:
        "https://image.msscdn.net/images/goods_img/20220303/2396342/2396342_1_220.jpg",
      postImageShoes:
        "https://image.msscdn.net/images/goods_img/20220830/2755199/2755199_1_220.jpg",
    },
    {
      postLike: 9,
      postName: "오늘의 코디에욤",
      postTag: "사용자 추천 코디",
      postTime: 6,
      postWriter: "강수민",
      id: "8",

      postImageHat:
        "https://image.msscdn.net/images/goods_img/20210909/2121470/2121470_1_220.jpg",
      postImageTop:
        "https://image.msscdn.net/images/goods_img/20210105/1737051/1737051_9_220.jpg",
      postImageBottom:
        "https://image.msscdn.net/images/goods_img/20210818/2069315/2069315_2_220.jpg",
      postImageShoes:
        "https://image.msscdn.net/images/goods_img/20210903/2107596/2107596_1_220.jpg",
    },
    {
      postLike: 9,
      postName: "오늘의 코디에욤",
      postTag: "사용자 추천 코디",
      postTime: 6,
      postWriter: "강수민",
      id: "8",

      postImageHat:
        "https://image.msscdn.net/images/goods_img/20220707/2650966/2650966_1_220.jpg",
      postImageTop:
        "https://image.msscdn.net/images/goods_img/20210910/2122596/2122596_2_220.jpg",
      postImageBottom:
        "https://image.msscdn.net/images/goods_img/20220419/2500837/2500837_3_220.jpg",
      postImageShoes:
        "https://image.msscdn.net/images/goods_img/20220729/2689044/2689044_1_220.jpg",
    },
    {
      postLike: 9,
      postName: "오늘의 코디에욤",
      postTag: "사용자 추천 코디",
      postTime: 6,
      postWriter: "강수민",
      id: "8",

      postImageHat:
        "https://image.msscdn.net/images/goods_img/20220224/2383121/2383121_1_220.jpg",
      postImageTop:
        "https://image.msscdn.net/images/goods_img/20200904/1583648/1583648_2_220.jpg",
      postImageBottom:
        "https://image.msscdn.net/images/goods_img/20220829/2749881/2749881_1_220.jpg",
      postImageShoes:
        "https://image.msscdn.net/images/goods_img/20160224/311052/311052_1_220.jpg",
    },
    {
      postLike: 9,
      postName: "오늘의 코디에욤",
      postTag: "사용자 추천 코디",
      postTime: 6,
      postWriter: "강수민",
      id: "8",

      postImageHat:
        "https://image.msscdn.net/images/goods_img/20220419/2497865/2497865_1_220.jpg",
      postImageTop:
        "https://image.msscdn.net/images/goods_img/20220816/2718877/2718877_2_220.jpg",
      postImageBottom:
        "https://image.msscdn.net/images/goods_img/20220816/2718277/2718277_2_220.jpg",
      postImageShoes:
        "https://image.msscdn.net/images/goods_img/20220117/2310364/2310364_1_220.jpg",
    },
  ]);

  const login_status = useSelector((state) => {
    //@ts-ignore
    return state.authToken.authenticated;
  });

  const router = useRouter()

  return (
    <div className="font-Pretendard">
      <Head>
        <title>코디위키 - TONTON</title>
      </Head>
      <Headers />
      <Gnb />
      <div className="flex">
        <div className="absolute w-full h-[17rem] bg-black bg-opacity-50"></div>

        <img
          className="object-cover w-full h-[17rem]"
          src="https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310_960_720.png"
        />
      </div>
      <div className="flex relative h-full w-full pl-[20rem]  ">
        <div className="flex relative -top-[5rem]">
          <div
            className={` mx-[3rem] mt-[2rem] w-[25rem] h-[30rem] bg-slate-100 divide-y-4 divide-slate-400/25 border border-gray-200 shadow-xl ${
              show && "fixed -top-[2rem]"
            }`}
          >
            {login_status ? (
              <div className="h-[10rem]">
                <button className="relative left-[4rem] top-[2rem] bg-blue-400 w-[17rem] h-[3rem] rounded-2xl">
                  로그아웃
                </button>
              </div>
            ) : (
              <div className="h-[10rem]">
                <button onClick={()=>router.push('/login')} className="relative left-[4rem] top-[2rem] bg-blue-400 w-[17rem] h-[3rem] rounded-2xl">
                  로그인
                </button>
              </div>
            )}
            <div className="flex-row pl-5">
              <div className="text-gray-400 mt-3">
                <span>홈</span>
              </div>
              <div className="pl-5 my-3">
                <button>전체</button>
              </div>
            </div>
            <div className="flex-row pl-5">
              <div className="text-gray-400 mt-3">
                <span>커뮤니티</span>
              </div>
              <div className="pl-5 my-3">
                <button>사용자 추천 코디</button>
              </div>
            </div>
          </div>

          <div className="flex-col absolute left-[30rem]">
            <div className="mt-[2rem] w-[55rem] bg-slate-100 border border-gray-200  shadow-xl">
              <div className="flex-col space-y-[1rem]">
                <div className="flex justify-between ">
                  <div className="m-3">
                    <span className="font-bold text-xl">전체</span>
                  </div>

                  <div className="m-3">
                    <Link href="./CommunityPostWrite">
                      <button className="bg-blue-400 w-[5rem] rounded-2xl">
                        글쓰기
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="flex justify-between px-[10rem] pb-5">
                  <div>인기</div>
                  <div>최신</div>
                  <div>Top</div>
                  <div>10주</div>
                </div>
              </div>
            </div>
            <div className="flex-col mt-[2rem] w-[55rem] h-full bg-slate-100 shadow-xl divide-y-2 border border-gray-200  divide-slate-400/25">
              {comPostArr.map((post) => (
                <div className="flex w-full h-[10rem]">
                  <div className="w-[6rem] h-[6rem]">
                    <div className="relative left-10 top-10">
                      <p>🔺</p>
                      <p>{post.postLike}</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex-col mt-7 ml-2 w-[40rem]">
                      <div className="my-1 text-lg">
                        <Link href={`./${post.id}`}>
                          <button>{post.postName}</button>
                        </Link>
                      </div>
                      <div className="flex divide-x text-sm mt-12 -ml-3 text-gray-400">
                        <div className="w-[9rem] text-center">
                          <span>{post.postTag}</span>
                        </div>
                        <div className="w-[5rem] text-center">
                          <span>{post.postTime}시간전</span>
                        </div>
                        <div className="w-[5rem] text-center">
                          <span>{post.postWriter}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 w-[8rem] h-[10rem] bg-white ">
                      <div>
                        <img src={post.postImageHat} />
                      </div>
                      <div>
                        <img src={post.postImageTop} />
                      </div>
                      <div>
                        <img src={post.postImageBottom} />
                      </div>
                      <div>
                        <img src={post.postImageShoes} />
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
  );
}

export default Community;
