import { BrowserRouter, Routes, Route } from "react-router-dom";

import Add from "./pages/add/add";
import List from "./pages/list/list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/add-task" element={<Add/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
