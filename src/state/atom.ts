import { atom } from "recoil";

export const participantListState = atom<string[]>({
    key: 'participantList',
    default: []
})

export const errorState = atom<string>({
    key: 'errorState',
    default: ''
})

export const resultDraw = atom<Map<string, string>>({
    key: 'resultDraw',
    default: new Map()
})
