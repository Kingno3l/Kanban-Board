import { useSelector } from 'react-redux';
import './ReservedRockets.css';

const ReservedRockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  const reservedRockets = rockets.filter((rocket) => localStorage.getItem(`rocket-${rocket.id}`) === 'reserved');
  return (
    <div>
      <h3 className="dragon-title">My Dragons</h3>
      {reservedRockets.length > 0
        ? (reservedRockets.map((rocket) => (
          <div key={rocket.id} className="reserved-rockets"><p>{rocket.name}</p></div>)))
        : <p className="dragon-reservation">You have not reserved any Dragons yet.</p>}
    </div>
  );
};

export default ReservedRockets;
