import React from 'react'
import assets from '../assets/assets'

const Services = () => {

  const servicesData = [
     {
       title: 'Advertising',
       description: 'We turn bold ideas into powerful digital solution that connect, nngages...',
       icon: assets.ads_icon
     },
     {
       title: 'Connect marketing',
       description: 'We help you execute your plan and deliver results,',
       icon: assets.marketing_icon
     },
     {
       title: 'Content writing',
       description: 'We help you create a marketing strategy that drives results.',
       icon: assets.content_icon
     },
     {
       title: 'Social media',
       description: 'We help you build a strong social media presence and engage with your audience.',
       icon: assets.social_icon
     },
  ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 xl:px-40 pt-30 text-gray-700 dark:text-white'> 
       
       <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />
    </div>
  )
}

export default Services