import React,{useState,useEffect} from 'react'
import ProductModal from "../ProductModal"


interface resultItem{
    id:string,
    brandName : string,
    productName : string,
    productPrice : number,
    productRating : number,  
    productLike : number,
    productImg : string,
    productViews : number
    
}
interface myComp{
    posts:resultItem[]
}//props가 posts={~~~} 이런식이면 이렇게 따로 타입을 만들고 아래와 같이 {posts}:myComp 해야 받을 수 있다.



export const SearchResult = ({posts}:myComp) => {


    const [productSelected, setProductSelected] = useState<resultItem>();
    const [modalOpen,setModalOpen] = useState<boolean>(false);

    const handleClick=(productItem: resultItem)=>{
        setModalOpen(true);
        setProductSelected(productItem);
    }

    //Object.values(posts)로 배열로 만듦-> 이게 props로 가져오니까 object타입으로 돼서 map이 안됨 그래서 그 안에 배열으 꺼내옴 <-왜 object로 되는지 알아야할듯
  return (
    <div className=''>
        <ul className='flex flex-wrap h-96 w-full'>
            {Object.values(posts).map((productItem)=>(
                <li className='border w-1/5 min-w-max hover:bg-slate-100'>
                    <div className='mx-1 px-16 my-10 '>
                        <a>
                            <img className='w-40 hover:opacity-50' 
                            src={productItem.productImg}
                            onClick={()=>handleClick(productItem)}
                            />
                        </a>
                    
                        <div className='w-40'>
                            <p className='font-bold'>
                                <a>{productItem.brandName}</a>
                            </p>
                            <p className='text-xs'>
                                <a>{productItem.productName}</a>
                            </p>
                            <p className='font-bold border border-white border-b-gray-300'>
                                <a>{productItem.productPrice}원</a>
                            </p>
                            <p className='text-xs font-bold text-orange-400'>
                                <a>{productItem.productRating}</a>
                            </p>
                            <p className='text-sm font-bold text-red-500'>
                                <a>❤{productItem.productLike}</a>
                            </p>
                        </div>

                    </div>
                    
                </li>
            ))}

        </ul> 

        {modalOpen && (
            <ProductModal {...productSelected} setModalOpen={setModalOpen}/>
        )} 
    </div>
  )
}
export default SearchResult