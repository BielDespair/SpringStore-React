import { Outlet, useLocation } from "react-router";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";

import "./App.css";
import PageTransition from "./components/PageTransition";

function App() {


  return (
    <>
      <ProgressBar></ProgressBar>
      <Header></Header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;