import Link from 'next/link'
import React from 'react'

const Headers = () => {
    return (
        <div className="font-Pretendard">
            <header className="md:ml-auto flex flex-wrap text-gray-600 body-font bg-slate-900 h-[95px]">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" legacyBehavior><a className="font-bold text-xl text-white">TONTON</a></Link>
                    <Link href="/login" legacyBehavior>
                        <button type="button" className="text-white md:ml-auto text-">로그인</button>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Headers