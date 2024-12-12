import { createSlice } from "@reduxjs/toolkit";
import { toast, ToastOptions } from "react-hot-toast";

const commonSlice = createSlice({
    name: "common",
    initialState: {
        isLoading: false,
        isMainLoading: false,
        isScreenLoading: false,
        showModal: false,
    },
    reducers: {
        setLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setMainLoading: (state, { payload }) => {
            state.isMainLoading = payload;
        },
        setScreenLoading: (state, { payload }) => {
            state.isScreenLoading = payload;
        },
        setShowModal: (state, { payload }) => {
            state.showModal = payload;
        },
        showMessage: (_, { payload }: { payload: { message: string; options?: ToastOptions } }) => {
            toast(payload.message, payload.options);
        },
    },
});

export const { setLoading, setMainLoading, showMessage, setShowModal, setScreenLoading } =
    commonSlice.actions;

export default commonSlice.reducer;
