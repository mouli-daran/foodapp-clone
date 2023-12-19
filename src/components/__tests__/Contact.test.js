import { render , screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


test("Should Load Contact Us COmponent" , () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
});

test("Should Load Button in Contact Us COmponent" , () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument();
});

test("Should Load First Name in Contact Us Component" , () => {
    render(<Contact />);

    const fname = screen.getByPlaceholderText("Enter First Name");

    expect(fname).toBeInTheDocument();
});

test("Should Load Last Name in Contact Us Component" , () => {
    render(<Contact />);

    const lname = screen.getByPlaceholderText("Enter Last Name");

    expect(lname).toBeInTheDocument();
});