import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./TrendingCoins.css"

const TrendingCoins = () => {
    const [coinsData, setCoinsData] = useState([])

    //FUNCTION FOR FETCHING TRENDING COINS
    const fetchTendingCoins = async() => {
        const trendingCoins =  await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")
        const trendingCoinsData = trendingCoins.data
        console.log(trendingCoinsData)
        setCoinsData(trendingCoinsData)
    }

    useEffect(() => {
        fetchTendingCoins()
    }, [])
  return (
    <div className='trendingCoins'>
        {
            coinsData.map((coins) => (
                <div key={coins.id} className='trendingCoins__wrapper'>
                    <img src={coins.image} alt="coins-image" className='trendingCoins__img' />
                    <h4>{coins.name}</h4>
                </div>
            ))
        }
    </div>
  )
}

export default TrendingCoins
