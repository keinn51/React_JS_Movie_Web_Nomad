import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Home from "./Home";
import Group from "./Group";
import Detail from './Detail';
import Navbar from "./Navbar";

function App() {
  return (
    <RecoilRoot>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={`/page/:group/:page`} element={<Group />} />
          <Route path={`/movie/:id`} element={<Detail />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;