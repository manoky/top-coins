export interface CoinDataProps {
    rank: number;
    name: string;
    price: number;
    price_change: number;
    market_cap: number;
    volume: number;
    id: number;
}

export interface StateProps {
    loading: boolean;
    coinsData: CoinDataProps[];
    error: string
}

