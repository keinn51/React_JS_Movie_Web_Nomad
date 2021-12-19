import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { RecoilRoot } from 'recoil';
import Home from "./router/Home";
import Group from "./router/Group";
import Detail from './router/Detail';
import Search from './router/Search';
import Navbar from "./component/Navbar";

function App() {
  return (
    <RecoilRoot>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={`/page/:group/:page`} element={<Group />} />
          <Route path={`/movie/:id`} element={<Detail />} />
          <Route path={`/search/:search`} element={<Search />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;