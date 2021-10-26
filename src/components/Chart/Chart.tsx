import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ZAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";
import Card from "@mui/material/Card";
import { CoinDataProps } from "../../types";
import { convertPrice } from "../../utils";
import CustomToolTip from "./CustomToolTip";
import { colors } from "./colors";

// would move this into a separate file
// but left here since it's only used here

interface ChartProps {
  coinsData: CoinDataProps[];
}

const Chart = ({ coinsData }: ChartProps): JSX.Element => {
  const chartData = coinsData
    .sort((a: any, b: any) => a.rank - b.rank)
    .map((data: any) => ({
      name: data.name,
      marketcap: data.market_cap,
      volume: data.volume,
      price_change: Math.abs(Number(data.price_change.toFixed(2))),
    }));

  return (
    <Card sx={{ marginTop: "20px" }}>
      <div
        style={{ maxWidth: "100%", margin: "auto", marginTop: 40, padding: 10 }}
      >
        <ResponsiveContainer height={400} width="100%">
          <ScatterChart margin={{ left: 20, top: 20, right: 10, bottom: 40 }}>
            <defs>
              <linearGradient id="chart-color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#004ebd" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#004ebd" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              opacity={0.3}
              fill="url(#chart-color)"
              fillOpacity={0.1}
            />
            <XAxis
              dataKey="marketcap"
              type="number"
              tickCount={100}
              label={{
                position: "insideBottom",
                value: "Market Cap",
                className: "xlabel",
                dy: 15,
              }}
              tickFormatter={(data: any) => data && convertPrice(data)}
            />
            <YAxis
              dataKey="volume"
              type="number"
              tickCount={10}
              label={{
                position: "insideLeft",
                value: "Volume",
                angle: -90,
                dx: -17,
              }}
              tickFormatter={(data: any) => data && convertPrice(data)}
            />
            <ZAxis dataKey="price_change" range={[70, 190]} />
            <Tooltip
              content={<CustomToolTip />}
              cursor={{ strokeDasharray: "3 3" }}
            />
            <Scatter name="Coin data" data={chartData} fill="#8884d8">
              {chartData.map((entry: any, index: number) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export { Chart };
