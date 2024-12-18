import React from 'react'
import MainText from './MainText'
import Right from './Right'

const Main = () => {
  return (
    <div className="bg-[url('/bg.gif')] bg-cover bg-center  h-[40rem] pt-8">
<div className='container mx-auto'>
    <MainText/>
           <Right/>  
      </div>
      </div>
  )
}

export default Main