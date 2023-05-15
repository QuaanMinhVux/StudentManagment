import Create from "./Component/Create.js";
import Home from "./Component/Home.js";
import Update from "./Component/Update.js";
import Delete from "./Component/Delete.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="delete/:id" element={<Delete />} />
      </Routes>
    </Router>
  );
}

export default App;
