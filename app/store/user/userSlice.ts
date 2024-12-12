import { createSlice } from '@reduxjs/toolkit';

export interface userDataTypes {
    id?: number;
    username?: string;
    email?: string;
    token?: string;
}
export interface userSlicesStateTypes {
    token: null | string;
    role: null | string;
    locationDetail: {};
    route: boolean;
    routeName: boolean;
    userData: Partial<userDataTypes>;
    profileImage: string | null;
}

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: null,
        role: null,
        userData: {},
        profileImage: null,
    },
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload;
        },
        setRole: (state, { payload }) => {
            state.role = payload;
        },
        saveUserData: (state, { payload }) => {
            state.userData = payload;
        },
        saveProfileImage: (state, { payload }) => {
            state.profileImage = payload;
        },
    },
});

export const { setToken, setRole, saveUserData } = userSlice.actions;

export default userSlice.reducer;
