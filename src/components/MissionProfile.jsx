import PropTypes from 'prop-types';

const MissionProfile = ({ filterMission }) => (
  <div className="mission-container">
    <h1>My Missions</h1>
    {filterMission.map((m) => (
      <ul className="mission-list">
        <li key={m.mission_id}>{m.mission_name}</li>
      </ul>
    ))}
  </div>
);

export default MissionProfile;

MissionProfile.propTypes = {
  filterMission: PropTypes.array.isRequired,
};
