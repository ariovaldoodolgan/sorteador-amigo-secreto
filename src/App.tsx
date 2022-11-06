import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuration from "./Views/Configuration";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuration />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
