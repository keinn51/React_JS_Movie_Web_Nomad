import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Home";
import Group from "./Group";
import Detail from './Detail';
import Navbar from "./Navbar";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Navbar />
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={`/page/:group/:page`} element={<Group />} />
      <Route path={`/movie/:id`} element={<Detail />}/>
    </Routes>
  </Router>
  );
}

export default App;