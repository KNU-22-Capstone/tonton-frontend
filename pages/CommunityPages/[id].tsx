import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "./Item";

export interface CommunityPost{
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

const Post=()=>{
    const router =useRouter();
    const {id}=router.query;

    const [comPostArr, setcomPostArr] = useState<CommunityPost[]>([
        {
            postLike : 456,
            postName : '오늘의 코디에욤',
            postTag : '사용자 추천 코디',
            postTime: 6,
            postWriter : '강수민',
            id :'1',

            postImageHat:'https://image.msscdn.net/images/goods_img/20220802/2693365/2693365_2_220.jpg',
            postImageTop:'https://image.msscdn.net/images/goods_img/20210824/2082373/2082373_1_220.jpg',
            postImageBottom:'https://image.msscdn.net/images/goods_img/20220922/2812750/2812750_1_220.jpg',
            postImageShoes:'https://image.msscdn.net/images/goods_img/20220824/2737460/2737460_1_220.jpg',
        },
        {
            postLike : 456,
            postName : '맛있는 코디',
            postTag : '사용자 추천 코디',
            postTime: 6,
            postWriter : '강수민수',
            id :'2',
            
            postImageHat:'https://image.msscdn.net/images/goods_img/20220802/2693365/2693365_2_220.jpg',
            postImageTop:'https://image.msscdn.net/images/goods_img/20210824/2082373/2082373_1_220.jpg',
            postImageBottom:'https://image.msscdn.net/images/goods_img/20220922/2812750/2812750_1_220.jpg',
            postImageShoes:'https://image.msscdn.net/images/goods_img/20220824/2737460/2737460_1_220.jpg',
        },
        {
            postLike : 456,
            postName : '오늘의 코디에용가리',
            postTag : '사용자 추천 코디',
            postTime: 6,
            postWriter : '강수민민',
            id :'3',
            
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
            id :'4',
            
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
            id :'5',
            
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
            id :'6',
            
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
            id :'7',
            
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
            id :'8',
            
            postImageHat:'https://image.msscdn.net/images/goods_img/20220802/2693365/2693365_2_220.jpg',
            postImageTop:'https://image.msscdn.net/images/goods_img/20210824/2082373/2082373_1_220.jpg',
            postImageBottom:'https://image.msscdn.net/images/goods_img/20220922/2812750/2812750_1_220.jpg',
            postImageShoes:'https://image.msscdn.net/images/goods_img/20220824/2737460/2737460_1_220.jpg',
        },
    ])
    const [selectPost, setselectPost] = useState<CommunityPost>()
    
    useEffect(() => {
        
        for(let s of comPostArr)
        {
            
            if(s.id==id)
            {
                
                setselectPost(s);
                
            }
            
        }
        
    }, [])
    
    /*
    이부분에서 API의 경로에 {id}해서 고른 값만 갖고오게한다.
    APU_URL="~~~~~~~~~~`/${id} 요로코롬"
    function getData() {
        Axios.get(API_URL).then((res)=>{
            console.log(res.data);
            setList(res.data) =>useState 만들어서 넣기
        });
    } useEffect에 getData();

    undefined 가 뜨면 
    useEffect(()=>{
        if(id && id>0){
            getData();
        }
    },[id])
    */
    
    
    return <Item arr={selectPost}/>;

};

export default Post;