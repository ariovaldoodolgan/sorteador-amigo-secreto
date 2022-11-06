import { useRecoilValue } from "recoil"
import { participantListState } from "../atom"

export const useListOfParticipants = () => {
    return useRecoilValue(participantListState);
}