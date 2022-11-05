import { useRecoilValue } from "recoil"
import { errorState } from "../atom"

export const useErrorMessage = () => {
    return useRecoilValue(errorState)
}