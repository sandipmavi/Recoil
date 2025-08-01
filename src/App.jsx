import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from "recoil";
import Nav from "./Nav";

const count = atom({
  key: "countState",
  default: 0,
});

function App() {
  return (
    <RecoilRoot>
      <Counter />
      <Nav />
    </RecoilRoot>
  );
}
function Counter() {
  return (
    <>
      <Increase />
      <Decrease />
      <CurCount />
    </>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount((c) => c - 1)}>Decrease</button>;
}
function Increase() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount((c) => c + 1)}>Increase</button>;
}
function CurCount() {
  const countValue = useRecoilValue(count);
  return <div>{countValue}</div>;
}

export default App;
