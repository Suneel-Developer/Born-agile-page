import React from 'react'

const Innovation = () => {
    return (
        <section className='px-4 py-20'>
            <div className='max-w-[840px] w-full mx-auto text-center'>
                <h4 className='text-sky-blue text-lg md:text-2xl font-normal'>Technology</h4>
                <h1 className='text-[28px] md:text-[56px] font-medium break-words leading-[42px] md:leading-[70px] text-white my-3 md:my-5'>The <span className='bg-text'>innovation</span> is here</h1>
                <p className='text-base md:text-[32px] md:leading-[44px] font-normal text-white break-words'>The end-to-end platform for <span className='font-medium'>streamlining product delivery</span> and getting clear on ROI</p>
            </div>

            <div className='border-white border-y-[1.4px] border-opacity-[14%] py-8 md:py-12 mt-16 flex max-w-[1334px] w-full mx-auto px-3 md:px-10 justify-between flex-col lg:flex-row items-start lg:items-center gap-5'>
                <div className='max-w-[826px] w-full'>
                    <div className='relative flex'>
                        <h1 className='text-[32px] md:text-[60px] break-words leading-[48px] md:leading-[84px] font-medium text-white mb-6 relative'>
                            We aim to change <span className='bg-text'>product delivery fundamentally</span>
                        </h1>
                        <img src="/assets/innovation-icon.png" alt="" className='absolute -right-5 xxsm:-right-5 bottom-0 w-16 md:w-[100px]' />
                    </div>
                    <p className='text-base md:text-xl text-white'>Whether your goal is to simplify existing processes or enhance efficiency through innovative methods, our platform empowers you with complete control over every aspect of product delivery.</p>
                </div>
                <div>
                    <button className='text-base md:text-[26px] font-medium w-[162px] md:w-[241px] h-[60px] md:h-[87px] rounded-[20px] bg-yellow'>Get Started</button>
                </div>
            </div>


            <div className='flex items-start slg:items-center justify-center md:px-10 pb-10 pt-20 md:pt-32 flex-col slg:flex-row bg-[url("/assets/born-agile-ai-bg.png")] bg-no-repeat bg-center bg-cover'>
                <div className='w-full slg:w-[55%] flex justify-end'>
                    <img src="/assets/robot3.svg" alt="Robot" className='h-[810px] hidden md:flex' />
                    <img src="/assets/robot3-mobile.svg" alt="Robot" className='h-[445px] flex md:hidden mb-7' />
                </div>
                <div className='slg:w-[45%]'>
                    <div className='slg:max-w-[570px] w-full'>
                        <h1 className="text-[28px] md:text-[56px] font-medium break-words leading-[42px] md:leading-[70px] text-white mb-3 md:mb-5">Embrace the future with <span className='bg-text'>Born Agile AI</span></h1>
                        <p className="text-base md:text-xl font-normal text-white">Our AI technology reimagines delivery management, offering you unparalleled control and a vast array of settings to bring your vision to life with efficiency and flair. Experience rapid product delivery from the initial concept to the final product, reducing costs and project delays while maximising your return on investment. Born Agile harnesses the latest AI innovation for agile delivery that challenges the status quo, allowing for streamlined discovery, planning and delivery. Elevate your delivery with automation, giving you a competitive edge in today's digital world. Born Agile is where your delivery potential meets technological progress.</p>
                        <button className="max-w-[441px] w-full py-6 px-1 mt-5 md:mt-10 bg-yellow rounded-[20px] font-medium text-base md:text-[26px]">Unlock Your Growth Potential</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Innovation