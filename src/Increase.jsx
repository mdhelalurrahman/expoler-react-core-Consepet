import {useState} from "react";

function Increase() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    const increase = count + 1;
    setCount(increase);
  };

  return (
    <div>
      <h3>count:{count}</h3>
      <button onClick={handleAdd}>add</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}>
        remove
      </button>
    </div>
  );
}
export default Increase;
