import { CoinDataProps } from '../types';

const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat(`en-US`, {
        currency: `USD`,
        style: "currency",
      }).format(amount)
}

const parseCoinData = (data: any): CoinDataProps[] => {

    const parsedCoins: CoinDataProps[] = data.map((coin: any): CoinDataProps =>  {
        const parsedCoin: CoinDataProps = {
            id: coin.id,
            name: coin.name,
            rank: coin.cmc_rank,
            price: coin.quote.USD.price,
            price_change: coin.quote.USD.percent_change_24h,
            market_cap: coin.quote.USD.market_cap,
            volume: coin.quote.USD.volume_24h
        }
        return parsedCoin
    })

    return parsedCoins ? parsedCoins.sort((a ,b) => a.rank - b.rank) : []
}


const convertPrice = (price: number): string => {

    if(!price) {
        throw new Error('no price information provided')
    }
    

    let priceConvert

    if (price > 999 && price < 99999) {
        priceConvert = Number((price / 1000).toFixed(2))
        return  `${formatCurrency(priceConvert)}K`;
      } else if (price > 99999 && price < 999999) {

        priceConvert = Number((price / 1000).toFixed(2))
        return `${formatCurrency((priceConvert))}K`;
      } else if (price > 999999 && price < 999999999) {
        priceConvert = Number((price / 1000).toFixed(2))
        return `${formatCurrency(priceConvert)}M`;
      } else if (price > 999999999) {
        priceConvert = Number((price / 1000000000).toFixed(2))
        return `${formatCurrency(priceConvert)}B`;
      } 
   
    return formatCurrency(price)
}

export {parseCoinData, formatCurrency, convertPrice}