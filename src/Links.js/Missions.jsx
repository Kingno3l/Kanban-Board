import React, { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { updateStatus } from '../redux/MissionSlice';
import { useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/MissionSlice';

const Mission = () => {
  const { mission, status } = useSelector((store) => store.mission);
  const dispatch = useDispatch();

  const handleStatusUpdate = (id) => {
    dispatch(updateStatus(id));
  };

  const updateColor = (status) => {
    let classes = '';
    if (status === 'Active member') {
      classes = 'bg-color';
    }
    if (status === 'Not a member') {
      classes = 'member';
    } else classes = 'bg-color';

    return classes;
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  return (
    <section className="mission-section">
      <table className="table">
        <thead>
          <tr>
            <th className="mission">Mission</th>
            <th className="col">Description</th>
            <th className="col">status</th>
            <th className="col">Update Button</th>
          </tr>
        </thead>
        <tbody>
          {mission.map((m) => (
            <tr className="table-row" key={m.mission_id}>
              <td>{m.mission_name}</td>
              <td className="description">{m.description}</td>
              <td>
                <span className={updateColor(m.status)}>{m.status}</span>
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleStatusUpdate(m.mission_id)}
                >
                  Join Mission
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Mission;

