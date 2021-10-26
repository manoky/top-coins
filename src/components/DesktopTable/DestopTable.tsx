import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CoinDataProps } from "../../types";
import { formatCurrency } from "../../utils";

const StyledTableCell = styled(TableCell)(({ theme }: { theme: any }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }: { theme: any }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface DesktopTableProps {
  coinsData: CoinDataProps[];
}

const DesktopTable = ({ coinsData }: DesktopTableProps): JSX.Element => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell align="left">Name</StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
            <StyledTableCell align="left">Price Change (24h)</StyledTableCell>
            <StyledTableCell align="left">Market Cap</StyledTableCell>
            <StyledTableCell align="left">Volume (24h)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coinsData.map((coin: any) => (
            <StyledTableRow key={coin.id} data-testid="coin-row">
              <StyledTableCell align="left">{coin.rank}</StyledTableCell>
              <StyledTableCell align="left">{coin.name}</StyledTableCell>
              <StyledTableCell align="left">
                {formatCurrency(coin.price)}
              </StyledTableCell>
              <StyledTableCell align="left">
                {formatCurrency(coin.price_change)}
              </StyledTableCell>
              <StyledTableCell align="left">
                {formatCurrency(coin.market_cap)}
              </StyledTableCell>
              <StyledTableCell align="left">
                {formatCurrency(coin.volume)}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { DesktopTable };
