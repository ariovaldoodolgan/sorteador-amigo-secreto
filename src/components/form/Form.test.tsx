import { render, screen } from "@testing-library/react";
import React from "react";
import Form from "./Form";

// Jest

test("when input is empty, it won't be able to add new participants", () => {

    render(<Form />);

    // search for the input on the DOM
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

    // search for the button on the DOM
    const button = screen.getByRole("button");

    // Garante that there is an input
    expect(input).toBeInTheDocument();

    // Garante that the button is disabled
    expect(button).toBeDisabled();
})