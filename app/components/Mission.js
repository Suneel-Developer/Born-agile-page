import React from 'react'

const Mission = () => {
    return (
        <section className='bg-[url("/assets/mission-bg.png")] bg-no-repeat bg-cover w-full px-4 py-8 md:py-[100px]'>
            <div className='max-w-[1292px] mx-auto w-full'>
                <div className='flex items-center flex-col gap-10'>
                    <h1 className='max-w-[948px] w-full mx-auto text-center text-black-100 text-[28px] md:text-[56px] font-medium leading-[42px] md:leading-[70px]'>Our mission is to create ZERO waste in digital product delivery.</h1>
                    <button className='text-lg md:text-[26px] font-medium text-yellow bg-black-100 h-[60px] md:h-[87px] w-[162px] md:w-[241px] rounded-[20px]'>Get Started</button>
                </div>

                <div className='mt-16 rounded-xl md:rounded-[40px] overflow-hidden border-[4px] md:border-[16px] border-[#707545] relative h-[213px] xxsm:h-[350px] md:h-[771px] flex justify-center items-center'>
                    <img src="/assets/video.png" alt="Youtube Video" className='w-full h-full'  />
                    <img src="/assets/youtube-icon.svg" alt="Youtube Video" className='absolute left-0 right-0 bottom-0 top-0 m-auto cursor-pointer h-10 w-10 md:w-auto md:h-auto'  />
                </div>

                <div className='flex flex-col text-center items-center mt-[100px] md:bg-[url("/assets/mission-vector-bg.png")] bg-center'>
                    <img src="/assets/logo2.svg" alt="Born Agile" className='w-[135px] md:w-[190px] h-[123px] md:h-[173px]' />
                    <h1 className='text-black-100 text-[28px] md:text-[56px] leading-[42px] md:leading-[70px] font-medium'>Boost is powered by Born Agile AI</h1>
                </div>

                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-16'>
                        <div className='bg-[url("/assets/mission-box-vector.png")] bg-no-repeat bg-cover pt-8 md:pt-10 pd-6 md:pl-10 bg-white rounded-xl md:rounded-[20px] overflow-hidden flex flex-col justify-between'>
                            <div className='px-2 mb-2'>
                                <h1 className='max-w-[466px] w-full font-normal text-lg md:text-[32px] md:leading-[46px]'>Boost is an <span className='font-medium'>AI delivery assistant</span> that empowers businesses to <span className='font-medium'> streamline delivery.</span></h1>
                            </div>

                            <div className='flex justify-end w-full items-end h-[243px] md:h-[443px]'>
                                <img src="/assets/scale-rapidly.svg" alt="scale-rapidly" className='h-full' />
                            </div>
                        </div>

                        <div className='bg-[url("/assets/mission-box-vector.png")] bg-no-repeat bg-cover pt-8 md:pt-10 pd-6 md:pl-10 bg-white rounded-xl md:rounded-[20px] overflow-hidden flex flex-col justify-between'>
                            <div className='px-2 mb-2'>
                                <h1 className='max-w-[466px] w-full font-normal text-lg md:text-[32px] md:leading-[46px]'>Choose from <span className='font-medium'>Presets</span> or use the <span className='font-medium'>prompt builder</span> to <span className='font-medium'> create something original</span></h1>
                            </div>
                            <div className='flex justify-end w-full items-end h-[243px] md:h-[443px] relative'>
                                <img src="/assets/Presets.svg" alt="scale-rapidly" className='h-full' />
                                <img src="/assets/builder.png" alt="scale-rapidly" className=' absolute left-5 md:left-10 top-0 bottom-0 my-auto w-[130px] md:w-auto h-[128px] md:h-auto' />
                            </div>
                        </div>
                    </div>


                    <div className='flex items-center w-full justify-center'>
                        <button className='text-lg md:text-[26px] font-medium text-[#F8E71C] bg-black w-[162px] md:w-[252px] h-[60px] md:h-[86px] rounded-[20px] mt-10 md:mt-16'>
                            Join Waitlist
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mission