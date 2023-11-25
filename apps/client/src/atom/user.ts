// Will have atom related to user

import { atom } from "recoil";
import { IUser } from "../types/types";

export const userAtom = atom({
    key: 'userAtom',
    default: {
        _id: null,
        name: '',
        role: '',
        email: '',
        passwd: '',
        orgId: null,
        projects: [],
        chatTo: [],
    } as unknown as IUser
});