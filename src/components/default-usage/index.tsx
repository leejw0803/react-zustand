import { useBearStore } from "@stores";

function Default() {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);

  return (
    <>
      <h1>{bears} around here ...</h1>
      <button onClick={increasePopulation}>one up</button>
    </>
  );
}

export default Default;
