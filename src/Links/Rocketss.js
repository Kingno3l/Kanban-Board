import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import RocketsItem from './RocketItem';
import { getDataFromServer } from '../redux/Rockets/RocketsSlice';

const Rocketss = () => (
  <div className="rocket">
    <h1>Welcome to Home Page</h1>
    <p>All content about the Project goes here</p>
  </div>
);
export default Rocketss;
const Rockets = () => {
  const selectedData = useSelector((state) => state.rockets);
  const { loading, error, rocketData } = selectedData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataFromServer());
  }, [dispatch]);
  return (
    <ul>
      {loading && <p>Loading</p>}
      {error && <p>Error...</p>}
      {rocketData.map((rocket) => (
        <RocketsItem key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
};

export default Rockets;
