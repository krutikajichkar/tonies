import React from 'react'
import Button from './Button'

interface props {
    image : string,
    btnText : string
}
const Card : React.FC<{data:props}> = ({data}) => {
  return (
    <div className='relative rounded-lg  '>
        <img src={data?.image} alt=""  className=' rounded-md w-[350px] h-[350px]'/>
         <div className='absolute bottom-4 flex justify-center items-center  w-full'><Button btnColor="red" text={data?.btnText.toUpperCase()} /></div>
    </div>
  )
}

export default Card