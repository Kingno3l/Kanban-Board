import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './redux/MissionSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
  },
});

export default store;
