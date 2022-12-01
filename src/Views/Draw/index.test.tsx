import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Draw from ".";
import { useDrawResult } from "../../state/hooks/useDrawResult";
import { useListOfParticipants } from "../../state/hooks/useListOfParticipants";

jest.mock('../../state/hooks/useListOfParticipants', () => {
    return {
        useListOfParticipants: jest.fn()
    }
});

jest.mock('../../state/hooks/useDrawResult', () => {
    return {
        useDrawResult: jest.fn()
    }
});

describe('At draw page', () => {

    const participants = [ 'Ana Catarina', 'Jorel', 'Gesonel' ];
    const results = new Map([
        ['Ana Catarina', 'Jorel'],
        ['Jorel', 'Gesonel'],
        ['Gesonel', 'Ana Catarina']
    ]);

    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue(participants);
        (useDrawResult as jest.Mock).mockReturnValue(results);
    })

    test('All participants can reveal your secret friend', () => {

        render(
            <RecoilRoot>
                <Draw />
            </RecoilRoot>
        )

        const options = screen.queryAllByRole('option');
        expect(options).toHaveLength(participants.length + 1)
    });

    test('the secret friend is revealed when ask for', () => {

        render(
            <RecoilRoot>
                <Draw />
            </RecoilRoot>
        );

        const select = screen.getByPlaceholderText('Selecione o seu nome');

        fireEvent.change(select, {
            target: {
                value: participants[0]
            }
        });

        const button = screen.getByRole('button');
        fireEvent.click(button);

        const secretFriend = screen.getByRole('alert');
        expect(secretFriend).toBeInTheDocument();
    });
})