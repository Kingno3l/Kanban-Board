import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const { rocketData } = useSelector((state) => state.rockets);
  const filterRockets = rocketData.filter((rocket) => rocket.reserved);
  return (
    <>
      <div className="profile">
        <div className="rocket-card">
          <h2 className="title-p">My Rockets</h2>
          <ul className="profile-card">
            {filterRockets.map((rocket) => (
              <li key={rocket.id} className="ul-list-item">
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
