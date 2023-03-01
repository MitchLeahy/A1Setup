import { createSlice } from "@reduxjs/toolkit";
import tuits from "../data/tuits/tuits.json";

const currentUser = {
    "userName" : "Mitch Leahy",
    "handle" : "mitchleahy",
    "image" : "https://media.licdn.com/dms/image/D4E03AQFWCGthVjrUCw/profile-displayphoto-shrink_100_100/0/1674741805868?e=1683158400&v=beta&t=oYtHOZI74WW2g1wB7T-ST12QrR4_HQ3L-vg2qvHB7ek"
}

const templateTuit = {
    ...currentUser,
    "topic" : "React",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,

}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers:{

        createTuit (state,action){
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id:(new Date()).getTime(),
            })

        },
        deleteTuit (state,action){
            const tuitIndex = state.findIndex(tuit => tuit._id === action.payload)
            state.splice(tuitIndex,1);

        },
        likeTuit (state,action){
            const tuitIndex = state.findIndex((tuit)=> tuit._id === action.payload._id)
            state[tuitIndex].liked = true;
            state[tuitIndex].likes +=1
        },
        unlikeTuit (state,action) {
            const tuitIndex = state.findIndex((tuit)=> tuit._id === action.payload._id)
            state[tuitIndex].liked = false;
            state[tuitIndex].likes -=1;
        }
    }
   });

export const {
    createTuit,
    deleteTuit,
    unlikeTuit,
    likeTuit
} = tuitsSlice.actions
export default tuitsSlice.reducer;