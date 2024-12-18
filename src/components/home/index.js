"use client"
import React from 'react'
import Card5 from './Card5'
import Main from './main/Main'
import Services from './Services/Services'
import WhyUs from './WhyUs/WhyUs'
import Projects from './Projects/Projects'



const HomePage = () => {
  return (
    <div className="">
       
       <div>
      <Main/>
 
  <Services/>
   </div>
    <Projects/>
 

<WhyUs/>

<Card5/>
    </div>
  )
}

export default HomePage