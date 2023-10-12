import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './MissionSlice';
import rocketReducer from './Rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    mission: missionReducer,
    rockets: rocketReducer,

  },
});

export default store;
