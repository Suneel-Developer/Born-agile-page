"use client"
import React, { useState } from 'react'

const Pricing = () => {
    const [activeTab, setActiveTab] = useState('starter');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <section className='px-4 py-10 md:py-20 bg-[url("/assets/bricing-bg.png")] bg-no-repeat bg-center bg-cover'>
            <h1 className='text-center text-white text-[28px] md:text-[56px] leading-[42px] md:leading-[70px] mt-24'><span className='bg-text'>Easy</span> to Try, <br /> Fair <span className='bg-text'>Pricing</span> to <span className='bg-text'>Upgrade</span> </h1>


            <div className='bg-black-gray max-w-full xsm:max-w-[363px] w-full mx-auto p-1 rounded-[14px] slg:hidden flex justify-between gap-2 mt-12'>
                <button className={`py-[10px] px-3 xxsm:px-5 rounded-[9px] text-lg font-medium ${activeTab === 'starter' ? "bg-yellow text-black" : "bg-transparent text-white"}`} onClick={() => handleTabClick('starter')}>Starter</button>
                <button className={`py-[10px] px-3 xxsm:px-5 rounded-[9px] text-lg font-medium ${activeTab === 'growth' ? "bg-yellow text-black" : "bg-transparent text-white"}`} onClick={() => handleTabClick('growth')}>Growth</button>
                <button className={`py-[10px] px-3 xxsm:px-5 rounded-[9px] text-lg font-medium ${activeTab === 'enterprise' ? "bg-yellow text-black" : "bg-transparent text-white"}`} onClick={() => handleTabClick('enterprise')}>Enterprise</button>
            </div>



            {/* For Desktop  */}
            <div className='max-w-[1298px] mx-auto w-full hidden slg:grid grid-cols-3 gap-20 rounded-[36px] bg-white-200 mt-20 pr-[100px] pl-[20px] xlg:pl-[100px] relative'>
                {/* Starter  */}
                <div className='py-14 flex flex-col justify-between'>
                    <div>
                        <div className='flex items-end'>
                            <h2 className='text-[49px] leading-[42px] font-semibold'>£499</h2>
                            <span className='text-[23px] text-end'> /month</span>
                        </div>
                        <h1 className='text-[34px] font-medium mt-4 mb-5'>Starter</h1>

                        <ul className='flex flex-col gap-3'>
                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'>Access to AI-driven scaling algorithms</span>
                            </li>

                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'>Basic performance monitoring and analytics</span>
                            </li>

                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'> Email support</span>
                            </li>

                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'>User Limit: Up to 50 users</span>
                            </li>

                        </ul>
                    </div>

                    <button className='h-[62px] border-[2.21px] p-3 rounded-[20px] border-black text-xl font-medium mt-16'>Choose Plan</button>
                </div>

                {/* Growth */}
                <div className='py-14 flex flex-col justify-between'>
                    <div>
                        <div className='flex items-end'>
                            <h2 className='text-[49px] leading-[42px] font-semibold'>£999 </h2>
                            <span className='text-[23px] text-end'> /month</span>
                        </div>
                        <h1 className='text-[34px] font-medium mt-4 mb-5'>Growth</h1>

                        <ul className='flex flex-col gap-3'>
                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'>All features from the Starter Package</span>
                            </li>

                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'>Advanced performance monitoring and analytics</span>
                            </li>

                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'>Integration with popular project management tools</span>
                            </li>

                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'>Priority email and chat support</span>
                            </li>

                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'>User Limit: Up to 250 users</span>
                            </li>

                        </ul>
                    </div>

                    <button className='h-[62px] border-[2.21px] p-3 rounded-[20px] border-black text-xl font-medium mt-16'>Choose Plan</button>
                </div>

                {/* Enterprise  */}
                <div className='enterprise px-10 py-6 rounded-[20px] absolute -top-7 -bottom-7 right-5 xlg:right-12 w-[350px] xlg:w-[396px]'>
                    <h2 className='text-[34px] font-medium mb-5'>Enterprise</h2>

                    <ul className='flex flex-col gap-3'>
                        <li className='flex gap-3'>
                            <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                            <span className='text-base font-light flex-1'>All features from the Growth Package</span>
                        </li>

                        <li className='flex gap-3'>
                            <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                            <span className='text-base font-light flex-1'>Customizable AI algorithms tailored to specific business needs</span>
                        </li>

                        <li className='flex gap-3'>
                            <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                            <span className='text-base font-light flex-1'>Dedicated account manager and 24/7 support</span>
                        </li>

                        <li className='flex gap-3'>
                            <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                            <span className='text-base font-light flex-1'>On-site training and implementation assistance</span>
                        </li>

                        <li className='flex gap-3'>
                            <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                            <span className='text-base font-light flex-1'>User Limit: Unlimited users</span>
                        </li>

                    </ul>

                    <div className='flex items-center gap-2 mt-6 mb-3'>
                        <img src="/assets/plus.svg" alt="Add icon" />
                        <h5 className='text-base font-semibold'>Additional Services</h5>
                    </div>

                    <div className='text-xs font-light'>
                        <b className='font-semibold'>Custom Development:</b> Price varies based on requirements
                    </div>
                    <div className='text-xs font-light my-2'>
                        <b className='font-semibold'>Consulting Services:</b> Price available upon request
                    </div>
                    <div className='text-xs font-light'>
                        <b className='font-semibold'>Onboarding and Training:</b> Price varies based on duration and complexity
                    </div>

                    <button className='h-[62px] bg-black p-3 rounded-[20px] text-white text-xl font-medium mt-9 w-full'>Generate Quote</button>
                </div>
            </div>


            {/* For tabs  */}

            <div className='max-w-[898px] mx-auto w-full slg:hidden flex flex-col gap-5 rounded-[36px] mt-8 md:pr-40 md:pl-40 relative'>
                {/* Starter  */}
                {activeTab === 'starter' && (
                    <div className='py-10 flex flex-col justify-between bg-white rounded-3xl px-5 md:px-10'>
                        <div>
                            <div className='flex items-end'>
                                <h2 className='text-[49px] leading-[42px] font-semibold'>£499</h2>
                                <span className='text-[23px] text-end'> /month</span>
                            </div>
                            <h1 className='text-[34px] font-medium mt-4 mb-5'>Starter</h1>

                            <ul className='flex flex-col gap-3'>
                                <li className='flex gap-3'>
                                    <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                    <span className='text-base font-light flex-1'>Access to AI-driven scaling algorithms</span>
                                </li>

                                <li className='flex gap-3'>
                                    <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                    <span className='text-base font-light flex-1'>Basic performance monitoring and analytics</span>
                                </li>

                                <li className='flex gap-3'>
                                    <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                    <span className='text-base font-light flex-1'> Email support</span>
                                </li>

                                <li className='flex gap-3'>
                                    <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                    <span className='text-base font-light flex-1'>User Limit: Up to 50 users</span>
                                </li>

                            </ul>
                        </div>

                        <button className='h-[62px] border-[2.21px] p-3 rounded-[20px] border-black text-xl bg-black text-white font-medium mt-16'>Choose Plan</button>
                    </div>
                )}

                {/* Growth */}
                {activeTab === 'growth' && (
                    <div className='py-10 flex flex-col justify-between bg-white  rounded-3xl px-5 md:px-10'>
                        <div>
                            <div className='flex items-end'>
                                <h2 className='text-[49px] leading-[42px] font-semibold'>£999 </h2>
                                <span className='text-[23px] text-end'> /month</span>
                            </div>
                            <h1 className='text-[34px] font-medium mt-4 mb-5'>Growth</h1>

                            <ul className='flex flex-col gap-3'>
                                <li className='flex gap-3'>
                                    <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                    <span className='text-base font-light flex-1'>All features from the Starter Package</span>
                                </li>

                                <li className='flex gap-3'>
                                    <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                    <span className='text-base font-light flex-1'>Advanced performance monitoring and analytics</span>
                                </li>

                                <li className='flex gap-3'>
                                    <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                    <span className='text-base font-light flex-1'>Integration with popular project management tools</span>
                                </li>

                                <li className='flex gap-3'>
                                    <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                    <span className='text-base font-light flex-1'>Priority email and chat support</span>
                                </li>

                                <li className='flex gap-3'>
                                    <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                    <span className='text-base font-light flex-1'>User Limit: Up to 250 users</span>
                                </li>

                            </ul>
                        </div>

                        <button className='h-[62px] border-[2.21px] p-3 rounded-[20px] border-black text-xl font-medium mt-16'>Choose Plan</button>
                    </div>
                )}

                {/* Enterprise  */}
                {activeTab === 'enterprise' && (
                    <div className='enterprise px-5 md:px-10 py-10 rounded-[20px] w-full'>
                        <h2 className='text-[34px] font-medium mb-5'>Enterprise</h2>

                        <ul className='flex flex-col gap-3'>
                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'>All features from the Growth Package</span>
                            </li>

                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'>Customizable AI algorithms tailored to specific business needs</span>
                            </li>

                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'>Dedicated account manager and 24/7 support</span>
                            </li>

                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'>On-site training and implementation assistance</span>
                            </li>

                            <li className='flex gap-3'>
                                <div className='w-[27px] h-[27px] rounded-full bg-black-300 flex justify-center items-center'><img src="/assets/tick.svg" alt="Tick mark Icon" className='w-[15.7px] h-[13px]' /></div>
                                <span className='text-base font-light flex-1'>User Limit: Unlimited users</span>
                            </li>

                        </ul>

                        <div className='flex items-center gap-2 mt-6 mb-3'>
                            <img src="/assets/plus.svg" alt="Add icon" />
                            <h5 className='text-base font-semibold'>Additional Services</h5>
                        </div>

                        <div className='text-xs font-light'>
                            <b className='font-semibold'>Custom Development:</b> Price varies based on requirements
                        </div>
                        <div className='text-xs font-light my-2'>
                            <b className='font-semibold'>Consulting Services:</b> Price available upon request
                        </div>
                        <div className='text-xs font-light'>
                            <b className='font-semibold'>Onboarding and Training:</b> Price varies based on duration and complexity
                        </div>

                        <button className='h-[62px] bg-black p-3 rounded-[20px] text-white text-xl font-medium mt-9 w-full'>Generate Quote</button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Pricing