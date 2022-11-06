import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from ".";
import { useListOfParticipants } from "../../state/hooks/useListOfParticipants";

jest.mock('../../state/hooks/useListOfParticipants', () => {
    return {
        useListOfParticipants: jest.fn()
    }
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {

    return {
        useNavigate: () => mockNavigate
    }
})

describe('When there is not participants enough', () => {

    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue([]);
    });

    test('It wont be allowed to start', () => {

        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const button = screen.queryByRole('button');
        expect(button).toBeDisabled();
    });
})

describe('When there is at least one participant', () => {

    const participants = [ "Jorel", "Ana Catarina", "Gesonel" ]

    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue(participants);
    });

    test('It will be allowed to start', () => {

        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const button = screen.queryByRole('button');
        expect(button).toBeEnabled();
    });

    test('The draw started', () => {

        render(
            <RecoilRoot>
                <Footer />
            </RecoilRoot>
        )

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(mockNavigate).toHaveBeenCalledTimes(1);
    })
})
