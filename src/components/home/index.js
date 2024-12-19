"use client"
import React from 'react'
import Main from './main/Main'
import Services from './Services/Services'
import WhyUs from './WhyUs/WhyUs'
import Projects from './Projects/Projects'
import ContactMe from './ContactMe/ContactMe'
import Laptop from './laptop/Laptop'
import CardComponent from './Card'



const HomePage = () => {
  return (
    <div className="">
       
       <div className='bg-gray-100'>
      <Main/>
 
  <Services/>
   </div>
    <Projects/>
<WhyUs/>
<ContactMe/>
    </div>
  )
}

export default HomePage