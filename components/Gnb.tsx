import Link from 'next/link'
import React from 'react'

const Gnb = () => {
    return (
        <div className="font-Pretendard">
           <nav className="bg-slate-200 md:mx-auto flex flex-wrap items-center justify-center h-14">
                <Link href="/" legacyBehavior><a className="mr-5 hover:text-blue-600 active:">홈</a></Link>
                <Link href="/goods" legacyBehavior><a className="mr-5 hover:text-blue-600">상품</a></Link>
                <Link href="/board" legacyBehavior><a className="mr-5 hover:text-blue-600">게시판</a></Link>
                <input
                    className="nav__input"
                    type="text"
                    placeholder="상품을 검색해주세요."
                />
                <Link href="../searchPages/searchPage">
                    <button className='bg-blue-800 text-white rounded w-10 m-2 hover:bg-blue-400'>
                        검색
                    </button>
                </Link>
            </nav>
        </div>
  )
}

export default Gnb