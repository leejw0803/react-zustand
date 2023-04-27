import { useBearStore, useBearIndexStore } from "@stores";

function FetchingFromMultipleStore() {
  const { currentBear } = useBearIndexStore(({ currentBear }) => ({
    currentBear,
  }));
  const bearName = useBearStore(({ bearInfo }) => bearInfo[currentBear]);

  return (
    <>
      <h1>Fetching from Multiple store: {`${bearName}`}</h1>
    </>
  );
}

export default FetchingFromMultipleStore;
