import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DesktopTable } from "./DesktopTable";
import { MobileTable } from "./MobileTable";
import { CoinDataProps } from "../types";

const Table = ({ data }: { data: CoinDataProps[] }) => {
  const isMobileWidth = useMediaQuery("(max-width:768px)");
  return (
    <div>
      {isMobileWidth ? (
        <MobileTable coinsData={data} />
      ) : (
        <DesktopTable coinsData={data} />
      )}
    </div>
  );
};

export default Table;
