import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Draw from ".";
import { useListOfParticipants } from "../../state/hooks/useListOfParticipants";

jest.mock('../../state/hooks/useListOfParticipants', () => {
    return {
        useListOfParticipants: jest.fn()
    }
});

describe('At draw page', () => {

    const participants = [ 'Ana Catarina', 'Jorel', 'Gesonel' ]
    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue(participants);
    })

    test('All participants can reveal your secret friend', () => {

        render(
            <RecoilRoot>
                <Draw />
            </RecoilRoot>
        )

        const options = screen.queryAllByRole('option');
        expect(options).toHaveLength(participants.length)
    });
})