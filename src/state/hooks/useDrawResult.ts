import { useRecoilValue } from "recoil";
import { resultDraw } from "../atom";

export const useDrawResult = () => {
    return useRecoilValue(resultDraw);
}