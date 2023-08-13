import React from 'react'
import TrendingCoins from './TrendingCoins'
import { BsSearch } from "react-icons/bs"

const Home = () => {
  return (
    <>
    <div className='flex home__search'>
      <input type="text" />
      <button className='border bg-white text-xl'><BsSearch /></button>
    </div>
    <div className='p-5 mt-3 font-semibold'>
      <h2 className='text-white text-2xl'>Trending Coins</h2>
        <TrendingCoins />
    </div>
    </>
  )
}

export default Home

