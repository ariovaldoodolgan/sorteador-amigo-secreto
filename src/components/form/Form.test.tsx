import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import Form from ".";

describe("The Form.tsx behavior", () => {
    // Jest
    test("when input is empty, it won't be able to add new participants", () => {

        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        );

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

    test("It's not possible to add duplicated names", () => {

        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        );

        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

        const button = screen.getByRole("button");

        fireEvent.change(input, {
            target: {
                value: "Jorel"
            }
        })

        fireEvent.click(button);

        fireEvent.change(input, {
            target: {
                value: "Jorel"
            }
        })

        fireEvent.click(button);

        const errorMessage = screen.getByRole("alert");

        expect(errorMessage.textContent).toBe("Duplicated name are not allowed");
    })

    test("Verify if the alert goes away after a time", () => {

        jest.useFakeTimers();
        render(
            <RecoilRoot>
                <Form />
            </RecoilRoot>
        );

        const input = screen.getByPlaceholderText("Insira os nomes dos participantes")

        const button = screen.getByRole("button");

        fireEvent.change(input, {
            target: {
                value: "Jorel"
            }
        })

        fireEvent.click(button);

        fireEvent.change(input, {
            target: {
                value: "Jorel"
            }
        })

        fireEvent.click(button);

        let errorMessage: HTMLElement | null
        errorMessage = screen.getByRole("alert");
        expect(errorMessage).toBeInTheDocument();

        act(() => {
            // Wait X seconds
            jest.runAllTimers();
        })

        errorMessage = screen.queryByRole("alert");
        expect(errorMessage).toBeNull();
    })
})
