import React from 'react'

const Hero = () => {
    return (
        <section className='px-4 py-[60px] bg-[url("/assets/hero-bg.png")] bg-center'>
            <div className='max-w-xlg w-full mx-auto flex justify-between gap-10 flex-col lg:flex-row'>
                <div className='lg:max-w-[547px] flex flex-col items-start w-full lg:w-[50%]'>
                    <h5 className='text-sky-blue text-lg md:text-[26px] font-normal uppercase'>Stay Agile</h5>
                    <h1 className='text-white mt-2 mb-4 md:mb-6 text-[32px] md:text-[60px] font-medium leading-[38px] md:leading-[80px]'>While delivering <span className='bg-text'>digital products</span> with our <span className='bg-text'>AI-driven platform</span></h1>
                    <p className='text-xs md:text-xl text-white md:leading-[30px] mb-7'>Designed for Technology businesses, Born Agile AI offers cutting-edge solutions to streamline and optimise product delivery processes. Harness the power of artificial intelligence to unlock new levels of efficiency, quality, and innovation.</p>
                    <button className='bg-yellow text-base md:text-[26px] font-medium py-[18px] md:py-6 px-8 md:px-[46px] rounded-[14px] md:rounded-[20px]'>Get Started</button>
                </div>

                <div className='w-full lg:w-[50%] lg:h-[760px] bg-[url("/assets/vector-bg.png")] bg-center bg-cover flex justify-center items-center xlg:items-start'>
                    <img src="/assets/vector-image.png" alt="Hero image" className='' />

                </div>
            </div>
        </section>
    )
}

export default Hero