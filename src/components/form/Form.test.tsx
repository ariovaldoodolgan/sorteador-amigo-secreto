import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
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

test("Add a participant if there is a text inside of input field", () => {

    render(
        <RecoilRoot>
            <Form />
        </RecoilRoot>
    );

    // search for the input on the DOM
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

    // search for the button on the DOM
    const button = screen.getByRole("button");

    // insert a value for input
    fireEvent.change(input, {
        target: {
            value: "Jorel"
        }
    })

    // submit form
    fireEvent.click(button);

    // Garante that the input is focused
    expect(input).toHaveFocus();

    // Garante that the input is empty again
    expect(input).toHaveValue("");
})