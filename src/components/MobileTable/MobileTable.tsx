import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CoinDataProps } from "../../types";
import { convertPrice } from "../../utils";

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

  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const MobileTable = ({
  coinsData,
}: {
  coinsData: CoinDataProps[];
}): JSX.Element => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name </StyledTableCell>
            <StyledTableCell align="left">Price</StyledTableCell>
            <StyledTableCell align="left">Volume (24h)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coinsData.map((coin: any) => (
            <StyledTableRow key={coin.id} data-testid="mobile-coin-row">
              <StyledTableCell align="left">
                <Typography variant="caption">{coin.name}</Typography>
              </StyledTableCell>
              {/* cell end */}

              <StyledTableCell align="left">
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  price: {convertPrice(coin.price)}
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  change: {convertPrice(coin.price_change)}
                </Typography>
              </StyledTableCell>
              {/* cell end */}

              <StyledTableCell align="left">
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  <div>Vol:</div> {convertPrice(coin.volume)}
                </Typography>
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ marginBottom: 1 }}
                >
                  <div>Cap:</div> {convertPrice(coin.market_cap)}
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export { MobileTable };
