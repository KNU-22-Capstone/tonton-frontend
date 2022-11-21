import React,{useState,useEffect} from 'react'
import ProductModal from "../ProductModal"



export const SearchResult = () => {


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
    const Products: resultItem [] =[
        {
        id: "1fs",
        brandName : "토피",
        productName : "2WAY 스웻 후드집업(MELANGE GREY)",
        productPrice : 37000,
        productRating : 4.7,  
        productLike : 153789,
        productImg : "https://image.msscdn.net/images/goods_img/20210204/1778404/1778404_1_500.jpg?t=20220628160331",
        productViews : 5677002
        },
        
        {
        id: "1f",
        brandName : "무신사스탠다드",
        productName : "후디드 스웨트 집업[멜란지 그레이]",
        productPrice : 43900,
        productRating : 4.5,  
        productLike : 121134,
        productImg : "https://image.msscdn.net/images/goods_img/20190201/947088/947088_3_500.jpg?t=20200706103059",
        productViews : 866433
        },
        {
        id: "2f",
        brandName : "토피",
        productName : "2WAY 스웻 후드집업(Black)",
        productPrice : 37000,
        productRating : 4.8,  
        productLike : 145213,
        productImg : "https://image.msscdn.net/images/goods_img/20210204/1778408/1778408_1_500.jpg?t=20220628160331",
        productViews : 344675
        },
        {
        id:"3f",
        brandName : "SPAO",
        productName : "[프렌치테리]루즈핏 2-WAY 후드집업",
        productPrice : 32900,
        productRating : 4.7,  
        productLike : 124555,
        productImg : "https://image.msscdn.net/images/goods_img/20220718/2668986/2668986_70_500.jpg?t=20221108102949",
        productViews : 625433
        },
        {
        id:"4f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
        productViews : 926353
        },
        {
        id:"5f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
        productViews : 866433
        },
        {
        id:"6f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
        productViews : 866433
        },
        {
        id:"7f",
        brandName : "와릿이즌",
        productName : "엔젤 와펜 집업 후드 그레이",
        productPrice : 59250,
        productRating : 4.2,  
        productLike : 156673,
        productImg : "https://image.msscdn.net/images/goods_img/20190828/1134355/1134355_5_500.jpg?t=20221021172303",
        productViews : 866433
        }
       
    ]


    const [productSelected, setProductSelected] = useState<resultItem>();
    const [modalOpen,setModalOpen] = useState<boolean>(false);

    const handleClick=(productItem: resultItem)=>{
        setModalOpen(true);
        setProductSelected(productItem);
    }

    
    const [ProductItems, setProductItems] = useState<resultItem[]>([]);

    useEffect(() => {
        setProductItems(Products);
        }, []);

  return (
    <div className=''>
        <ul className='flex flex-wrap h-96 w-full'>
            {ProductItems.map((productItem)=>(
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