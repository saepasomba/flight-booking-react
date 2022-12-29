/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";
import "@testing-library/jest-dom";

jest.mock("axios", () => ({
  __esModule: true,
  ...jest.requireActual("axios"),
}));

it("login rendered", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
  expect(
    getByText("Escape the everyday and unwind on vacation.")
  ).toBeInTheDocument();
});
