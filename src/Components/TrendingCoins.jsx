import React, { useEffect, useState } from 'react'
import axios from 'axios'


const TrendingCoins = () => {
    //Handling State 
    const [data, setData] = useState([])
    const [err, setErr] = useState("")
    //fetching trendingCoins data
    const fetchTrendingCoins = async() => {
        try{

            const fetchCoins = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")
            const coinsData = fetchCoins.data
            setData(coinsData)
            console.log(coinsData)
        }
        catch(err){
            setErr("SERVER DOWN TRY AGAIN LATER")
        }
    }

    useEffect(() => {
        fetchTrendingCoins()
        
    }, [])

  return (
    <div className='flex p-2 coin__wrapper '>
    {
       data ? (data.map((coin) => (
            
            <div key={coin.id} className='cursor-pointer border flex flex-col border p-2 bg-white  mt-5 rounded coin__data'>
            <img src={coin.image} alt="coins-image" className='h-20 w-30 m-auto' />
            <h3 className='text-center mt-2'>{coin.name}</h3>
            </div>

        )))
        :
        (<h2 className='text-white'>{err}</h2>)
    }
    </div>
  )
}

export default TrendingCoins

