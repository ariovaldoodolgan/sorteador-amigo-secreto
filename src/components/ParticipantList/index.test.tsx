import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ParticipantList from ".";
import { useListOfParticipants } from "../../state/hooks/useListOfParticipants";

jest.mock('../../state/hooks/useListOfParticipants', () => {
    return {
        useListOfParticipants: jest.fn()
    }
});

describe('An empty participant\'s list', () => {

    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue([]);
    })
    
    test('Must be rendered without any item', () => {
        render(
            <RecoilRoot>
                <ParticipantList />
            </RecoilRoot>
        )
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0);
    })
})

describe('A non-empty list', () => {
    const participants = [ "Jorel", "Ana Catarina" ]

    beforeEach(() => {
        (useListOfParticipants as jest.Mock).mockReturnValue(participants);
    })
    
    test('Must be rendered without any item', () => {
        render(
            <RecoilRoot>
                <ParticipantList />
            </RecoilRoot>
        )
    
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(participants.length);
    })
})