import React from 'react'

const Footer = () => {
    return (
        <section className='bg-shade-gray pb-12 pt-12 md:pt-[98px] px-6'>
            <div className='w-full max-w-[1137px] mx-auto'>
                <div className='flex flex-col items-center md:items-start'>
                    <img src="/assets/logo.svg" alt="Born Agile" className='w-[112px] md:w-[137px] h-[100px] md:h-[124px]' />

                    <h3 className='text-[22px] md:text-3xl font-light text-white mt-10 md:mt-5'>Join <span className='font-medium'>Wishlist</span></h3>
                    <div className='flex flex-col md:flex-row gap-3 mt-5 items-center'>
                        <input type="text" placeholder='name@email.com' className='footerinput max-w-[367px] w-full h-[65px] md:h-[69px] rounded-[17px] outline-none border-none px-6 text-lg placeholder:text-black font-normal' />
                        <button className='h-[65px] md:h-[69px] w-[140px] rounded-[17px] text-[22.95px] text-black font-medium bg-yellow'>Send</button>
                    </div>
                </div>

                {/* Divider  */}
                <div className='bg-white opacity-[14%] h-[1.4px] mt-[59px] mb-6'></div>

                <div className='flex items-center justify-between flex-col md:flex-row gap-5'>
                    <div className='text-white text-opacity-[72%] font-medium text-base'>
                        ©2024 Born Agile  |  All Rights Reserved
                    </div>
                    <div className='flex items-center gap-2'>
                        <div className='h-[42px] w-[42px] rounded-full flex items-center justify-center bg-white cursor-pointer'><img src="/assets/logo-facebook.svg" alt="logo facebook" /></div>
                        <div className='h-[42px] w-[42px] rounded-full flex items-center justify-center bg-white cursor-pointer'><img src="/assets/logo-instagram.svg" alt="logo instagram" /></div>
                        <div className='h-[42px] w-[42px] rounded-full flex items-center justify-center bg-white cursor-pointer'><img src="/assets/logo-twitter.svg" alt="logo twitter" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer