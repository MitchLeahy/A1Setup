import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import EditProfileComponent from "./edit-profile";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import  HomeComponent from "./home";
import ProfileComponent from "./profile";
// import TuitComponent from "./tuits/TuitList";
import whoReducer from "./reducers/who-reducers.js";
import tuitReducer from "./reducers/tuits-reducer.js"
import profileReducer from "./reducers/profile-reducers.js"
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, tuits: tuitReducer, profile: profileReducer}});


function Tuiter() {
 return (
  <Provider store = {store}>
    <div className="row mt-2">
      <div className="col-2 col-md-2 col-lg-1 col-xl-2">
        <NavigationSidebar active="explore"/>
      </div>
      <div className="col-10 col-md-10 col-lg-7 col-xl-6"
            style={{"position": "relative"}}>
          <Routes>
            <Route path ="explore" element = {<ExploreComponent/>}/>
            <Route index element = {<HomeComponent/>}/>
            <Route path= "profile" element = {<ProfileComponent/>}/>
            <Route path = "edit-profile" element = {<EditProfileComponent/>}/>

        </Routes>
      </div>
      <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
        <WhoToFollowList/>
      </div>
    </div>
   </Provider>
 );
}

export default Tuiter