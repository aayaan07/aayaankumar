import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen h-fit xl:pt-[200px] pt-[100px] space-y-[100px] pb-[20px] '>
        <div className='flex flex-col gap-3 text-center text-4xl justify-center items-center text-[var(--secondary)]/70 font-bold Poppins'>
            <h1 className='text-5xl text-[var(--secondary)]'>Wanna work with me?</h1>           
            <h1>Drop a DM at <span className='underline cursor-pointer hover:text-black duration-150' onClick={() => window.open("https://www.linkedin.com/in/aayaan-kumar-61444833b", "_blank")}>LinkedIn</span></h1> 
        </div>
        <div className='w-fit mx-auto text-2xl text-gray-500 Poppins'>
            Made with ❤️ by Aayaan
        </div>
    </div>
  )
}

export default Footer