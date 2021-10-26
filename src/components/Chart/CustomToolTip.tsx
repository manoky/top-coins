import { formatCurrency } from "../../utils";

const CustomToolTip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: any;
}): JSX.Element | null => {
  if (payload && payload.length && active) {
    return (
      <div
        style={{
          background: "#fff",
          padding: 5,
          border: "1px solid rgba(0,0,0,0.2)",
          fontSize: 10,
          borderRadius: "4px",
        }}
      >
        <div>name: {payload[0].payload.name}</div>
        <div>volume: {formatCurrency(payload[0].payload.volume)}</div>
        <div>market cap: {formatCurrency(payload[0].payload.marketcap)}</div>
        <div>
          price change: {formatCurrency(payload[0].payload.price_change)}
        </div>
      </div>
    );
  }

  return null;
};

export default CustomToolTip;
