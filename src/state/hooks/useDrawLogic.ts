import { useSetRecoilState } from "recoil";
import { resultDraw } from "../atom";
import { makeDraw } from "../helpers/makeDraw";
import { useListOfParticipants } from "./useListOfParticipants"

export const useDrawLogic = () => {

    const participants = useListOfParticipants();
    const setResult = useSetRecoilState(resultDraw);

    return () => {

        const result = makeDraw(participants);

        setResult(result);
    }
}