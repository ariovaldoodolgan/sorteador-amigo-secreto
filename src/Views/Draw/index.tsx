import { useListOfParticipants } from "../../state/hooks/useListOfParticipants";

const Draw = () => {

    const participants = useListOfParticipants();

    return (
        <form>
            <select name="currentParticipant" id="currentParticipant">
                {participants.map(item => <option key={item}>{item}</option>)}
            </select>
        </form>
    )
};

export default Draw;