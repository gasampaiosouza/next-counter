import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  return (
    <div className="counter">
      <div
        className="counter--decrease"
        onClick={() => {
          setCounterValue((prevState) => prevState - 1);
        }}
      >
        <FontAwesomeIcon icon={faMinus} />
      </div>

      <div className="counter--number">{counterValue}</div>

      <div
        className="counter--increase"
        onClick={() => {
          setCounterValue((prevState) => prevState + 1);
        }}
      >
        <FontAwesomeIcon icon={faPlus} />
      </div>
    </div>
  );
};

export default Counter;
