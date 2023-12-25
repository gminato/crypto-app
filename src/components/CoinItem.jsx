import React from 'react'
import './Coins.css'

const CoinItem = ({coins,loading}) => {
  return (
    !loading ? 
    <div className='coin-row' >
      <p>{coins.market_cap_rank}</p>
      <div className='img-symbol'>
          <img src={coins.image} alt='' />
          <p>{coins.symbol.toUpperCase()}</p>
      </div>
      <p>₹{coins.current_price.toLocaleString('en-IN')}</p>
      <p>{coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className='hide-mobile'>₹{coins.total_volume.toLocaleString('en-IN')}</p>
      <p className='hide-mobile'>₹{coins.market_cap.toLocaleString('en-IN')}</p>
    </div>
    : <div className="coin-row shimmer"></div>
  )
}

export default CoinItem