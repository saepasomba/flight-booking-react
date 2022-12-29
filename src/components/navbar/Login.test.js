import { render, fireEvent, screen } from "@testing-library/react";
import LoginModal from "./LoginModal";

test("Login modal shown", async () => {
  render(<LoginModal />);

  // Click button

  // Wait for page to update with query text
  //   const items = await screen.findAllByText("login");
  //   expect(items).toHaveLength(1);
});
