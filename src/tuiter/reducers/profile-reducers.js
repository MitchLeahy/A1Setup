import { createSlice } from "@reduxjs/toolkit";
import profile from "../data/profile/profile.json";

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers:{
        editProfileFunc(state,action){
            const profileIndex = state.findIndex(profile => profile._id === action.payload._id)
            state[profileIndex] = action.payload
        },
        
    }

});

export const {
    editProfileFunc,
} = profileSlice.actions

export default profileSlice.reducer;