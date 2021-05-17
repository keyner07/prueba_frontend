import React,{ render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest.setup";

import App from 'App';

describe("Tests for components", () => {
  test('renders without crashing', async () => {
    const { findByText } = render(<App />);
    const title = await findByText(/Top Rated/i);
    expect(title).toBeInTheDocument();
  })
});
