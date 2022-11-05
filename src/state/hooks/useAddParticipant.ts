import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, participantListState } from "../atom";

export const useAddParticipant = () => {
    const setList = useSetRecoilState(participantListState);
    const nameList = useRecoilValue(participantListState);
    const setError = useSetRecoilState(errorState);

    return (participantName: string) => {

        if (nameList.includes(participantName)) {
            setError('Duplicated name are not allowed');
            setTimeout(() => {
                setError('');
            }, 5000)
            return;
        }
        return setList(currentList => [...currentList, participantName])
    }
}