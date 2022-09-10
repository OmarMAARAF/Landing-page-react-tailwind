import React from 'react'
import Laptop from '../assets/laptop.jpg'

export default function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex justify-center  flex-col my-4'>
                <p className='text-[#00df9a] font-meduim '>DATA ANALYTICS DASHBOARD</p>
                <h1 className='font-bold py-2 text-2xl'>MANAGE DATA ANALYTICS CENTRALLY</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate quas nihil beatae distinctio asperiores odit placeat? Velit praesentium, facilis exercitationem pariatur quis a? Expedita enim nam omnis incidunt aliquid ipsa!</p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] md:mx-0'>Get Started</button>
            </div>
        </div>

    </div>
  )
}
