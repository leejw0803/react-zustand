import { useCountStore } from "@stores";

function Overwrite() {
  const reset = useCountStore(({ deleteAll }) => deleteAll);

  return (
    <>
      <button onClick={reset}>reset</button>
    </>
  );
}

export default Overwrite;
