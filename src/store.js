import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './redux/MissionSlice';
import rocketsReducer from './redux/rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketsReducer,
  },
});

export default store;
