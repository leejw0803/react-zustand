import {
  Multiple,
  Default,
  Shallow,
  FetchingFromMultipleStore,
  Overwrite,
} from "@components";

function App() {
  return (
    <>
      <Default />
      <Multiple />
      <Shallow />
      <FetchingFromMultipleStore />
      <Overwrite />
    </>
  );
}

export default App;
