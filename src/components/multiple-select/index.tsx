import { useCountStore } from "@stores";
import { shallow } from "zustand/shallow";

function MultipleSelect() {
  const { count, doubleUp, reset } = useCountStore(
    ({ count, doubleUp, reset }) => ({
      count,
      doubleUp,
      reset,
    }),
    shallow
  );

  return (
    <>
      <h1>Multiple state: {count}</h1>
      <button onClick={doubleUp}>double up</button>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default MultipleSelect;
