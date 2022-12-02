import React,{Dispatch, SetStateAction, useEffect} from 'react'

interface CompProps{
    postsPerPage:number,
    totalPosts:number,
    paginate:Dispatch<SetStateAction<number>> //useState의 함수를 가져올때의 타입은 이렇다.
}


const SearchPagination=({postsPerPage, totalPosts, paginate}:CompProps) =>{
        
        
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
            pageNumbers.push(i);
            
        }
        
        
        return (
                <div>
                    <ul className="flex list-none bg-slate-300 w-[20rem] h-[3rem] divide-x-2">
                    {pageNumbers.map((number) => (
                        <li key={number} className="text-2xl text-gray-500 mx-2">
                            <button onClick={() => {paginate(number)}} className="text-center ">
                                {number}
                            </button>
                        </li>
                    ))}
                    </ul>
                    
                </div>
        )
    
}
export default SearchPagination