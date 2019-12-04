import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  return (
    <div className="charts">
      {coinData.map(coin => (
        <div className="chart__container" key={coin.name}>
          <h2 className="coin__title">{coin.name}</h2>
          <h4 className="coin__symbol">{coin.symbol}</h4>
          <div className="coin__logo">
            <img src={coin.image} height="40" alt={coin.name} />
          </div>
          <Chart sparklineData={coin.sparkline_in_7d.price} />
          <div className="info"><span className="infospan">Market Cap Rank : {coin.market_cap_rank}</span> | <span className="infospan">Market Cap : {coin.market_cap}</span> | <span className="infospan">Current Price : {coin.current_price}</span> </div>
          <div className="info"><span className="infospan">High 24 : {coin.high_24h}</span> | <span className="infospan">Low 24 : {coin.low_24h}</span></div>
        </div>
        
      ))}
    </div>
  );
};
export default Charts;
