import {
  Multiple,
  Default,
  Shallow,
  FetchingFromMultipleStore,
} from "@components";

function App() {
  return (
    <>
      <Default />
      <Multiple />
      <Shallow />
      <FetchingFromMultipleStore />
    </>
  );
}

export default App;
