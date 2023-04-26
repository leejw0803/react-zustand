import useOwnStore from "./store";

function App() {
  const bears = useOwnStore((state) => state.bears);
  const increasePopulation = useOwnStore((state) => state.increasePopulation);

  return (
    <>
      <h1>{bears} around here ...</h1>
      <button onClick={increasePopulation}>one up</button>
    </>
  );
}

export default App;
