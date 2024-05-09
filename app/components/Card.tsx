import React from 'react'
import Button from './Button'

interface props {
    image : string,
    btnText : string
}
const Card : React.FC<{data:props}> = ({data}) => {
  return (
    <div className='relative rounded-lg  '>
        <img src={data?.image} alt=""  className=' rounded-md w-[400px] h-[400px]'/>
         <div className='absolute bottom-4 flex justify-center items-center text-center'><Button btnColor="red" text={data?.btnText} /></div>
    </div>
  )
}

export default Card