import PropTypes from 'prop-types';

const MissionProfile = ({ filterMission }) => (
  <div>
    <h1>My Missions</h1>
    {filterMission.map((m) => (
      <li className="mission-list" key={m.mission_id}>
        {m.mission_name}
      </li>
    ))}
  </div>
);

export default MissionProfile;

MissionProfile.propTypes = {
  filterMission: PropTypes.array.isRequired,
};
