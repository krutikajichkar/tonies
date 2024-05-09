import React from 'react'
import { DiscoverData } from '../utils/DiscoverData'
import Card from './Card'
const DiscoverSection = () => {
  return (
    <div className='mt-24'>
        <div className='flex justify-center flex-col items-center'>
            <h1 className='text-3xl font-serif'><span className='text-red-600 font-bold font-serif italic '>Discover</span> our tonies® world</h1>
            <h2 className='mt-1 text-xl mb-2'>When you put listening and playing together... something magical happens</h2>
        </div>
        <div className='flex gap-8 flex-wrap justify-center mt-10'>
            {
                DiscoverData.map((data, i) => {
                    return(
                        <Card data={data} key={i}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default DiscoverSection