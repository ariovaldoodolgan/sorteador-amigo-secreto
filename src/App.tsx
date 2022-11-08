import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Configuration from "./Views/Configuration";
import Draw from "./Views/Draw";

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
          <Route path='/' element={<Configuration />} />
          <Route path='/draw' element={<Draw />}/>
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
