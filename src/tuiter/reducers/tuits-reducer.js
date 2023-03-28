import { createSlice } from "@reduxjs/toolkit";

import {updateTuitThunk,createTuitThunk,findTuitsThunk,deleteTuitThunk} from "../services/tuits-thunks";

// const currentUser = {
//     "userName" : "Mitch Leahy",
//     "handle" : "mitchleahy",
//     "image" : "https://media.licdn.com/dms/image/D4E03AQFWCGthVjrUCw/profile-displayphoto-shrink_100_100/0/1674741805868?e=1683158400&v=beta&t=oYtHOZI74WW2g1wB7T-ST12QrR4_HQ3L-vg2qvHB7ek"
// }

// const templateTuit = {
//     ...currentUser,
//     "topic" : "React",
//     "time": "2h",
//     "liked": false,
//     "replies": 0,
//     "retuits": 0,
//     "likes": 0,

// }

const initialState = {
    tuits:[ {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "https://www.spacex.com/static/images/share.jpg",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }],
    // adds a spinner to signify loading
    loading: false,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
      [findTuitsThunk.pending]:
         (state) => {
            state.loading = true
            state.tuits = []
      },
      [findTuitsThunk.fulfilled]:
         (state, { payload }) => {
            state.loading = false
            state.tuits = payload
      },
      [findTuitsThunk.rejected]:
         (state, action) => {
            state.loading = false
            state.error = action.error
      },
      [deleteTuitThunk.fulfilled] :
      (state, { payload }) => {
      state.loading = false
      state.tuits = state.tuits
        .filter(t => t._id !== payload)
    },
    [createTuitThunk.fulfilled]:
    (state, { payload }) => {
      state.loading = false
      state.tuits.push(payload)
  },

  [updateTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    const tuitNdx = state.tuits
      .findIndex((t) => t._id === payload._id)
    state.tuits[tuitNdx] = {
      ...state.tuits[tuitNdx],
      ...payload
    }
  }



    },
   

   });


export default tuitsSlice.reducer;