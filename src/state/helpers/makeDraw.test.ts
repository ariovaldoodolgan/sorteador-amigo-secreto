import { makeDraw } from "./makeDraw";

describe('Given a draw from a secret friend', () => {

    test('each participant won\' be able to take their own name', () => {
        
        const participants = [ "Jorel", "Ana Catarina", "Gesonel", "Pikachu", "Charmander", "Ashe", "Macaco louco" ];

        const draw = makeDraw(participants);
        participants.forEach(participant => {
            const secretFriend  = draw.get(participant);
            expect(secretFriend).not.toEqual(participant);
        });
    })
})