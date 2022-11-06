import { useListOfParticipants } from "../../state/hooks/useListOfParticipants";

const ParticipantList = () => {

    const participants: string[] = useListOfParticipants();

    return (
        <ul>
            {participants.map(item => <li key={item}>{item}</li>)}
        </ul>
    )
}

export default ParticipantList;