import React from "react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { render, screen, waitFor } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createHashHistory } from "history";
import { StateProvider } from "./contexts";
import App from "./App";

// eslint-disable-next-line jest/no-mocks-import
import { responseData } from "./__mocked_data__";

const server = setupServer(
  rest.get(
    `http://localhost/v1/cryptocurrency/listings/latest*`,
    (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          data: responseData,
          status: { error_code: 0, error_message: "" },
        })
      );
    }
  ),
  rest.get(
    `http://localhost/v1/cryptocurrency/listings/latest`,
    (_, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({ status: { error_code: 404, error_message: "falied" } })
      );
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const setup = () => {
  return render(
    <StateProvider>
      <Router history={createHashHistory()}>
        <App />
      </Router>
    </StateProvider>
  );
};

describe("App", () => {
  test("renders learn react link", async () => {
    setup();
    await waitFor(() => screen.getByText("Name"));

    screen.getByText("Price");
    screen.getByText("Volume (24h)");
    screen.getByText("Market Cap");
    screen.getByText("Price Change (24h)");
    screen.getByText("Rank");
    const tableRows = screen.getAllByTestId("coin-row");
    expect(tableRows.length).toBe(responseData.length);
  });

  it("should render error component", async () => {
    server.use(
      rest.get(
        `http://localhost/v1/cryptocurrency/listings/latest*`,
        (_, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              data: responseData,
              status: { error_code: 404, error_message: "failed" },
            })
          );
        }
      )
    );

    setup();

    await waitFor(() => screen.getByText("failed"));
  });
});
