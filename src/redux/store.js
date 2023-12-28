import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authReducer } from "./reducers/auth.reducers";
import { homeVideosReducer, selectedVideoReducer, relatedVideoReducer, searchedVideosReducer,
       subscriptionsChannelReducer, channelVideosReducer} from "./reducers/video.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentListReducer } from "./reducers/comments.reducer";
// import {composeWithDevTools} from 'redux-devtools-extension'
// import logger from 'redux-logger';



const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentList: commentListReducer,
    relatedVideos: relatedVideoReducer,
    searchedVideos: searchedVideosReducer,
    subscriptionsChannel: subscriptionsChannelReducer,
    channelVideos: channelVideosReducer
})

const store = configureStore(
    { reducer: rootReducer },
    {},
    (getDefaultMiddleware) => getDefaultMiddleware(),
)

export default store