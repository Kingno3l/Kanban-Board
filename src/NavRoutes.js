import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Rocketss from './Links/Rocketss';
import Rockets from './routes/Rockets';
import Missions from './Links/Missions';
import Profile from './Links/Profile';

const NavRoutes = () => (
  <Routes>
    <Route path="/" element={<Rocketss />} />
    <Route index element={<Rockets />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/missions" element={<Missions />} />
  </Routes>
);
export default NavRoutes;
