import { useCountStore } from "@stores";
import { shallow } from "zustand/shallow";

function Shallow() {
  const { setTrigger, rerenderTrigger } = useCountStore(
    ({ setTrigger, rerenderTrigger }) => ({
      rerenderTrigger,
      setTrigger,
    }),
    shallow
  );

  return (
    <>
      <h1>Shallow-test : {`${rerenderTrigger}`}</h1>
      <button onClick={setTrigger}>rerender-trigger</button>
    </>
  );
}

export default Shallow;
