import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}

export default App;