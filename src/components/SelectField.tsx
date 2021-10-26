import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const LIMIT_PER_PAGE: string[] = ["10", "50", "all"];

const BoxWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "30px",
  marginBottom: "20px",
  alignItems: "flex-end",
}));

const SelectField = ({
  limit,
  setLimit,
}: {
  limit: string;
  setLimit: (value: string) => void;
}): JSX.Element => {
  return (
    <BoxWrapper>
      <Typography component="div">Items per page</Typography>
      <Box sx={{ marginLeft: "10px" }}>
        <FormControl fullWidth>
          <Select
            value={limit}
            onChange={(e: SelectChangeEvent) => setLimit(e.target.value)}
            size="small"
          >
            {LIMIT_PER_PAGE.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </BoxWrapper>
  );
};

export default SelectField;
