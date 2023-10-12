import React from 'react';
import { useSelector } from 'react-redux';
import ReservedDragons from '../components/ReservedDragons';


const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rockets);
  const filterRockets = rocketData.filter((rocket) => rocket.reserved);
  return (
    <>
    <ReservedDragons />
      <div className="profile">
        <div className="">
          <h2 className="">My Rockets</h2>
          <ul className="">
            {filterRockets.map((rocket) => (
              <li key={rocket.id} className="">
                {rocket.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
