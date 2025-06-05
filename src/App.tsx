import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeBody from "./routes/Home/HomeBody";
import Search from "./routes/Home/Search";

function App() {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route index element={<HomeBody />} />
            <Route path="promotion" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
}

export default App
