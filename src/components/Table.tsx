import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DesktopTable } from "./DesktopTable";
import { MobileTable } from "./MobileTable";
import { useStateContext } from "../contexts/state";

const Table = () => {
  const {
    state: { coinsData },
  } = useStateContext();

  const isMobileWidth = useMediaQuery("(max-width:768px)");
  return (
    <div>
      {isMobileWidth ? (
        <MobileTable coinsData={coinsData} />
      ) : (
        <DesktopTable coinsData={coinsData} />
      )}
    </div>
  );
};

export default Table;
