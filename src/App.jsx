import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Layout from "./components/Layout";
import NotFound from "./page/NotFound";
import TV from "./page/TV";

function App() {
  return (
    <>
      <div className="flex w-full dark:bg-soft_dark [&>*]:dark:bg-soft_dark [&>*]:dark:text-main text-main_dark dark:text-main bg-white">
        <Router>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/tv" element={<TV />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
