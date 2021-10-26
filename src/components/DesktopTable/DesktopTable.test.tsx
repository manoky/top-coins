import React from "react";

import { render, screen } from "@testing-library/react";
// eslint-disable-next-line jest/no-mocks-import
import { responseData } from "../../__mocked_data__";
import { DesktopTable } from "./DesktopTable";
import { parseCoinData } from "../../utils";

const coinsData = parseCoinData(responseData);

describe("DesktopTable", () => {
  test("renders learn react link", async () => {
    render(<DesktopTable coinsData={coinsData} />);

    screen.getByText("Name");
    screen.getByText("Price");
    screen.getByText("Volume (24h)");
    screen.getByText("Market Cap");
    screen.getByText("Price Change (24h)");
    screen.getByText("Rank");

    const tableRows = screen.getAllByTestId("coin-row");
    expect(tableRows.length).toBe(responseData.length);
  });
});
