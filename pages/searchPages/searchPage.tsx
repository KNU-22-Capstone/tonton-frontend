import React,{useEffect, useState} from 'react'
import Head from 'next/head'

import Gnb from '../../components/Gnb'
import Headers from '../../components/Headers'
import SearchKindOf from '../../components/searchComponent/searchKindOf'
import SearchFilter from '../../components/searchComponent/SearchFilter'
import SearchResult  from '../../components/searchComponent/SearchResult'
import SearchPagination  from '../../components/searchComponent/SearchPagination'
import axios from 'axios'

function searchPage() {
  interface resultItem{
    id:string,
    brandName : string,
    productName : string,
    productPrice : number,
    productRating : number,  
    productLike : number,
    productImg : string,
    productViews : number,
    productSite:string
    
}
const Products: resultItem [] =[
    {
    id: "1fs",
    brandName : "내셔널지오그래피",
    productName : "N224MDW710 레이만 남성 숏기장 다운 점퍼 CARBON BLACK",
    productPrice :  279000,
    productRating : 4.9,  
    productLike :  1957,
    productImg : "https://image.msscdn.net/images/goods_img/20220831/2758806/2758806_1_500.jpg?t=20220831154806",
    productViews : 5677002,
    productSite:"무신사"
    },
    
    {
    id: "1f",
    brandName : "에스피오나지",
    productName : "ECWCS Level 7 Parka Tan",
    productPrice :  257000,
    productRating : 4.9,  
    productLike : 121134,
    productImg : "https://image.msscdn.net/images/goods_img/20221025/2891701/2891701_1_500.jpg?t=20221031145939",
    productViews : 866433
    ,
    productSite:"무신사"
    },
    {
    id: "2f",
    brandName : "내셔널지오그래피",
    productName : "N224MDW890 남성 카이만 프로 롱기장 구스 다운 점퍼 BIG LOGO BLACK",
    productPrice : 399000,
    productRating : 4.8,  
    productLike : 145213,
    productImg : "https://image.msscdn.net/images/goods_img/20220727/2685521/2685521_6_500.jpg?t=20221026150421",
    productViews : 344675,
    productSite:"무신사"
    },
    {
    id:"3f",
    brandName : "무신사스탠다드",
    productName : "우먼즈 캐시미어 블렌드 발마칸 로브 코트 [블랙] ",
    productPrice : 32900,
    productRating : 4.7,  
    productLike : 124555,
    productImg : "https://image.msscdn.net/images/goods_img/20220805/2700048/2700048_2_500.jpg?t=20220930124928",
    productViews : 625433,
    productSite:"무신사"
    },
    {
    id:"4f",
    brandName : "라퍼지스토어",
    productName : "덕다운 아르틱 후드 패딩_Black",
    productPrice :  115200,
    productRating : 4.7,  
    productLike : 156673,
    productImg : "https://image.msscdn.net/images/goods_img/20221019/2877785/2877785_1_500.jpg?t=20221020201914",
    productViews : 926353,
    productSite:"무신사"
    },
    {
    id:"5f",
    brandName : "키뮤어",
    productName : "코튼 워셔블 하찌 하프집업 니트_5 COLOR ",
    productPrice :  56900,
    productRating : 4.9,  
    productLike : 156673,
    productImg : "https://image.msscdn.net/images/goods_img/20220807/2702396/2702396_5_500.jpg?t=20221004160127",
    productViews : 866433,
    productSite:"무신사"
    },
    {
    id:"6f",
    brandName : "23.65",
    productName : "폴카1 패딩 슬리퍼 2-PACK",
    productPrice : 69900,
    productRating : 4.2,  
    productLike : 156673,
    productImg : "https://image.msscdn.net/images/goods_img/20221026/2895244/2895244_2_500.jpg?t=20221103152715",
    productViews : 866433,
    productSite:"무신사"
    },
    {
    id:"7f",
    brandName : "인사일런스",
    productName : "드로스트링 립스탑 구스 다운 자켓 BLACK ",
    productPrice : 239200,
    productRating : 4.2,  
    productLike : 156673,
    productImg : "https://image.msscdn.net/images/goods_img/20220907/2780194/2780194_2_500.jpg?t=20220923165327",
    productViews : 866433,
    productSite:"무신사"
    },
    {
      id:"7f",
      brandName : "MLB",
      productName : "베이직 메가로고 롱패딩 파카 NY (Black)",
      productPrice :  379000,
      productRating : 4.2,  
      productLike : 156673,
      productImg : "https://image.msscdn.net/images/goods_img/20220914/2789617/2789617_2_500.jpg?t=20221018110305",
      productViews : 866433,
      productSite:"무신사"
    },
    {
      id:"7f",
      brandName : "아디다스",
      productName : "BW 아미 - 화이트:그레이 / HP5515 ",
      productPrice : 111200,
      productRating : 4.8,  
      productLike : 156673,
      productImg : "https://image.msscdn.net/images/goods_img/20220629/2638067/2638067_1_500.jpg?t=20220629171937",
      productViews : 866433,
      productSite:"무신사"
    },
    {
      id:"7f",
      brandName : "와릿이즌",
      productName : "엔젤 와펜 집업 후드 그레이",
      productPrice : 59250,
      productRating : 4.2,  
      productLike : 156673,
      productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
      productViews : 866433,
      productSite:"무신사"
    },
    {
      id:"7f",
      brandName : "와릿이즌",
      productName : "엔젤 와펜 집업 후드 그레이",
      productPrice : 59250,
      productRating : 4.2,  
      productLike : 156673,
      productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
      productViews : 866433,
      productSite:"무신사"
    },
    {
      id:"7f",
      brandName : "와릿이즌",
      productName : "엔젤 와펜 집업 후드 그레이",
      productPrice : 59250,
      productRating : 4.2,  
      productLike : 156673,
      productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
      productViews : 866433,
      productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
        productViews : 866433,
        productSite:"무신사"
        },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20220412/2482269/2482269_1_500.jpg?t=20220412151526",
        productViews : 866433,
        productSite:"무신사"
      },
      

  ]
  
  useEffect(() => {
    /*
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(response.data);
      setLoading(false);
    };
     fetchData();
     여기다가 나중에 db 데이터 불러오면 됨  https://chanhuiseok.github.io/posts/react-13/ 공부자료*/ 
  }, [])

  const [currentPage, setCurrentPage] = useState<number>(1); //사용자가 누르면 변하는 페이지 번호
  const [postsPerPage, setPostsPerPage] = useState<number>(10);//총 데이터를 몇등분 할건지의 수
  
  const indexOfLast = currentPage * postsPerPage; //1*10 하면 10 이니까=> 1페이지에 10까지만 보여줌 
  const indexOfFirst = indexOfLast - postsPerPage; //10 - 10 이니까 0 => 1페이지는 0부터 보여줌
  const currentPosts = (posts:resultItem[]) => {
      let currentPosts:resultItem[] = [];
      currentPosts = posts.slice(indexOfFirst, indexOfLast);
      return currentPosts;
  };
  
  useEffect(() => {
    const url = 'http://210.125.212.192:8666/api/clothes'
    axios.get(url).then(response => {
      console.log(response.data.data.content);
    }).catch(e=>{
      console.log(e)
    })
  }, )
  
  
  return (
    <div>
      <Head>
        <title>코디위키 - TONTON</title>
      </Head>
      <Headers />
      <Gnb />
    
      <div className='m-20 font-Pretendard'>

        <div className='relative hs-40 w-full min-w-max'>
          <div className='absolute bottom-0 right-0'>
            <div className='inline-block'>
              <img className='object-fill w-18 h-16 border-2 border-indigo-200 transition hover:-translate-y-1 hover:scale-110 hover:border-red-800 duration-300' src="https://www.oalive.kr/image/watch/age_number_1.png"/>
            </div>
            <div className='inline-block '>
              <img className='object-fill w-18 h-16 border-2 border-indigo-200 transition hover:-translate-y-1 hover:scale-110 hover:border-red-800 duration-300 ' src="https://image.msscdn.net/mfile_s01/fb/share_musinsa.png" />
            </div>
            <div className='inline-block'>
              <img className='object-fill w-18 h-16 border-2 border-indigo-200 transition hover:-translate-y-1 hover:scale-110 hover:border-red-800 duration-300' src="https://play-lh.googleusercontent.com/nvH1MzU9vTQ9lj1I6FsZS_DGbl4yIv2kTiRLMdYeezp57ZJAj6FrPa7gfSxkW0n_qOuT" />
            </div>
            <div className='inline-block'>
              <img className='object-fill w-18 h-16 border-2 border-indigo-200 transition hover:-translate-y-1 hover:scale-110 hover:border-red-800 duration-300' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUEBAT///8DAwMLCwtqampjY2OZmZkPDw+Wlpb09PQkJCSMjIzT09NeXl7q6uptbW22trZRUVF8fHzc3NzCwsIuLi7j4+OpqalUVFQ+Pj42NjZhYWG0tLQaGhpDQ0Pn5+fIyMihoaEqKiqFhYV2dnZ5BzsXAAADLElEQVR4nO3d23LaMBSFYQtDwRwMAQIkJQ2kff9nrGXSphzkjrY2h+35173WrM+jcS5gQtbP251+lnfanbwSZm0OQvtBaD8I7Qeh/SC0H4T2g9B+ENoPQvtBaD8I7Qeh/SC0H4T2g9B+ENoPQvtBaD8I7Qeh/VxNqF8qbLyOsP621YM0XkHot7ysR4qtvvFp1nsQYTVmOB87902r1fNeRwvnpo8g9N8E/L4tnVMTVo1v02XhG7v3F1ZrfuxX7hANYX071++fjfcWVmP6/nY6NaG/7/52ukcQ1g97WzinJvSNk9lR4/2EndOHnSz0jc+D1UnjvYR+TW/pziIX+tfVdHfeeBdhfTv35fkasfDwcrnYeAehv0uj8aUxUuGfP30Xc3thJ+8ui8AambC58ebCzubiXUoQ/qfx9sJp0xyRsLnx9sIuwuhGhLKdCMMnEcY3IpTtRBg+iTC+EaFsJ8LwSYTxjQhlOxGGTyKMb0Qo24kwfBJhfCNC2U6E4ZMI4xsRynYiDJ9EGN+IULYTYfgkwvhGhLKdCMMnm4UDwf9w7JkSzia92EwGpoT6QYgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIcJHFbb/M+D2f47f/u9iILzUiFC2E2H4JML4RoSynQjDJxHGNyKU7UQYPokwvhGhbCfC8EmE8Y0IZTsRhk8ijG9EKNuJMHwSYXwjQtlOhOGTCOMbEcp2IgyfRBjfiFC2047w5r9o1Sws5trCcvNIwvF8KChtEBbLrvynVNSFq/2L/3KMoDEkHI+eRYWHVmVhMZvIeFlIWK6fxI11q6pwPH9LWHNJuKtuZ9pPKSoKS+nt/Nt4KlwNPtIa61YlYfUqSB5zLEy570etKsLVIOFV8NX4j3Dxc6jBy1SE5Xaj8rC/hO+JL5fj1kRhsful9bA/hcVy+qbGy5KE1Z7F6FXvYV+hsW6VC3tLxbtUN3a3yo11q1yoPka/sW5N+O083SVXacyShEaC0H4Q2g9C+0FoPwjtB6H9ILQfhPaD0H4Q2g9C+0FoPwjtB6H9ILQfhPaD0H4Q2g9C+0FoP7Ww3cmzft7u9H8Diu1QhPOgZFcAAAAASUVORK5CYII="/>
            </div>
            <div className='inline-block'>
              <img className='object-fill w-18 h-16 border-2 border-indigo-200 transition hover:-translate-y-1 hover:scale-110 hover:border-red-800 duration-300' src="data:image/png;base64,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"/>
            </div>
          </div>
        </div>


        <div className='mx-16 float-left w-12'>
          <SearchKindOf/>
        </div>


        <div className='flex'>
          <SearchFilter/>
        </div>

        
        <div className='flex '>
          
             <div className='w-full min-w-max float-left h-12 border '>
                <div className='flex justify-end'>
                  <SearchPagination
                  currentPage={currentPage}
                  postsPerPage={postsPerPage}
                  totalPosts={Products.length}
                  paginate={setCurrentPage}
                  ></SearchPagination>
                </div>
             </div>
        </div>
        
        <div className='flex'>
          <SearchResult posts={currentPosts(Products)}/>
        </div>


      </div>
      
      
      


    </div>
  )
}

export default searchPage