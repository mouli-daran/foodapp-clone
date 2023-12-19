import { fireEvent, render , screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appstore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("Should render header component,s login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button" , {name : "Login"});

  fireEvent.click(loginButton);

  const logOutButton = screen.getByRole("button" , {name : "Logout"});

  expect(logOutButton).toBeInTheDocument();
});
