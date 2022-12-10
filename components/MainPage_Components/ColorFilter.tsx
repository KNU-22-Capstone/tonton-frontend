import React,{useState, useEffect} from 'react'

interface Ptype{
    color:string
}

function ColorFilter({color}:Ptype) {
    const [Cshape, setCshape] = useState<string>("")
    useEffect(() => {
        if(color=="검정색")
        {
            setCshape("bg-black")
        }
        else if(color=="빨강색")
        {
            setCshape("bg-red-600")
        }
        else if(color=="주황색")
        {
            setCshape("bg-orange-600")   
        }
        else if(color=="노랑색")
        {
            setCshape("bg-yellow-700")   
        }
        else if(color=="초록색")
        {
            setCshape("bg-green-600")   
        }
        else if(color=="파랑색")
        {
            setCshape("bg-blue-600")   
        }
        else if(color=="남색")
        {
            setCshape("bg-slate-600")   
        }
        else if(color=="보라색")
        {
            setCshape("bg-purple-600")   
        }
        else if(color=="흰색")
        {
            setCshape("bg-white")   
        }
        else if(color=="회색")
        {
            setCshape("bg-gray-400")   
        }

    }, [])
  return (
    <div>
        <p className={`border border-black  w-[2rem] h-[2rem] mx-1 my-2 ${Cshape} rounded-full hover:opacity-70 `}></p>
    </div>
  )
}

export default ColorFilter