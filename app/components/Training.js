"use client"
import React from 'react'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { A11y, Navigation, Pagination } from "swiper/modules";

const Training = () => {
    return (
        <section className='px-4 py-8 md:py-16'>
            <div className='max-w-[1362px] w-full mx-auto'>
                <h1 className='max-w-[649px] w-full mx-auto text-white text-center text-2xl md:text-[56px] md:leading-[70px] font-medium break-words'>We are <span className='bg-text'>training</span> a foundational <span className='bg-text'>delivery model</span> that offers:</h1>

                <div className='max-w-[1296px] mx-auto w-full mt-10'>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView="auto"
                        modules={[Navigation, Pagination, A11y]}
                    >
                        <SwiperSlide className='min-w-[252px] md:min-w-[406px] max-w-[252px] md:max-w-[406px] w-full'>
                            <div className='sliderbox rounded-[30px] overflow-hidden h-[255px] md:h-[406px] mb-5 md:mb-8 flex items-center justify-center'><img src="/assets/planning.svg" alt="planning" className='w-full h-full' /></div>
                            <h2 className="text-lg md:text-[34px] md:leading-[49px] text-white">Unparalleled planning and control</h2>
                            <p className="text-sm md:text-[17px] md:leading-[30px] text-white mt-3">Experience unmatched precision and authority from setting clear objectives to defining key results and initiatives. Say goodbye to uncertainty and chaos - with Born Agile, you'll have everything to keep your team aligned.</p>
                        </SwiperSlide>

                        <SwiperSlide className='min-w-[252px] md:min-w-[406px] max-w-[252px] md:max-w-[406px] w-full'>
                        <div className='sliderbox rounded-[30px] overflow-hidden h-[255px] md:h-[406px] mb-5 md:mb-8'><img src="/assets/realistic-resourcing.png" alt="" className='w-full h-full' /></div>
                            <h2 className="text-lg md:text-[34px] md:leading-[49px] text-white">Realistic resourcing and progress insights</h2>
                            <p className="text-sm md:text-[17px] md:leading-[30px] text-white mt-3">Empowering you to make informed decisions and course corrections as needed. No more guesswork and blind spots - with Born Agile, you'll have the clarity and transparency you need to deliver on time.</p>
                        </SwiperSlide>

                        <SwiperSlide className='min-w-[252px] md:min-w-[406px] max-w-[252px] md:max-w-[406px] w-full'>
                        <div className='sliderbox rounded-[30px] overflow-hidden h-[255px] md:h-[406px] mb-5 md:mb-8 flex justify-center items-center'><img src="/assets/cost-efficient.svg" alt="cost-efficient" className='w-full h-full' /></div>
                            <h2 className="text-lg md:text-[34px] md:leading-[49px] text-white">Predictable and cost-efficient execution</h2>
                            <p className="text-sm md:text-[17px] md:leading-[30px] text-white mt-3">Foster team autonomy by clarifying scopes, breaking down work and removing dependencies. No more disengaged workforce - with Born Agile, you'll keep track of team performance, skills and improvement areas.</p>
                        </SwiperSlide>
                    </Swiper>
                </div>


                {/* banner  */}

                <div className='bg-[url("/assets/bg-banner.png")] relative bg-no-repeat bg-cover rounded-[32px] md:rounded-[40px] max-w-[1312px] w-full mx-auto mt-16 pt-[62px] bg-[#BFF4FF] lg:pb-24 overflow-hidden'>
                    <div className='max-w-[881px] z-30 w-full mx-auto flex flex-col items-center text-center px-4 mb-4 md:mb-0'>
                        <img src="/assets/waitlist.svg" alt="" />
                        <h1 className='text-black-200 text-[28px] md:text-[56px] leading-[42px] md:leading-[70px] font-medium mt-5 mb-9'>Join the Waitlist for Early Access to the Platform</h1>

                        <div className='flex items-center justify-center flex-col md:flex-row gap-3 w-full'>
                            <input type="text" placeholder='name@email.com' className='bg-white-100 border border-black rounded-[20px] h-[65px] md:h-[79px] w-full md:w-[416px] outline-none px-6 placeholder:text-black placeholder:text-opacity-60' />
                            <button className='h-[65px] md:h-[79px] w-[159px] bg-yellow rounded-[20px] text-[26px] font-medium'>Send</button>
                        </div>
                    </div>

                    <div className='lg:absolute right-0 bottom-0 z-20 flex justify-end'>
                        <img src="/assets/chatbot.svg" alt="" className='w-[383px] md:w-auto h-[329px] md:auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Training