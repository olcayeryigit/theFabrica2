import React from 'react'

const MainText = () => {
  return (
    <div className='pt-24  w-[40rem] '>
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-500 shadow-2xl py-4 ">
  Siz Hayal Edin,
</h1>
<h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-500 shadow-2xl ">
  Biz Yazalım
</h1>
<h2 className="text-lg md:text-2xl text-gray-200 font-semibold leading-relaxed tracking-tight mt-6 drop-shadow-md">
  Yenilikçi ve kullanıcı odaklı{" "}
  <span className="font-bold text-pink-400 drop-shadow-sm">yazılım çözümlerimizle</span>,{" "}
  işletmenizin <span className="italic text-cyan-300 drop-shadow-lg">dijital dönüşümünü</span> hızlandırıyor, verimliliğinizi artırıyoruz.
  <br className="hidden md:block" />
  <span className="text-gray-400 mt-4 block drop-shadow-md">
    Ölçeklenebilir ve performans odaklı teknolojilerle işinizi <span className="text-blue-300 font-bold drop-shadow-lg">geleceğe</span> taşıyoruz.
  </span>
</h2>

  </div>
  )
}

export default MainText