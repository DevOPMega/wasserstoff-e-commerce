import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

interface DataState {
    data: any[],
    loading: boolean,
    error: string | null
}

const initialState: DataState = {
    data: [],
    loading: false,
    error: null
}

// Thunk to fetch data
export const fetchData = createAsyncThunk("data/fetchData", async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_PRODUCTS}`);
    return response.data;
});

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    }
})

export default dataSlice.reducer;