import shuffle from "just-shuffle";

export function makeDraw(participants: string[]) {

    const quantityOfParticipants = participants.length;
    const sort = shuffle(participants);
    const result = new Map<string, string>();

    for (let i = 0; i < quantityOfParticipants; i++) {

        const partnerIndex = i === (quantityOfParticipants - 1) ? 0 : i + 1;

        result.set(sort[i], sort[partnerIndex]);
    }

    return result;
}