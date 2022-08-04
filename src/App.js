import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation";
import Home from "./routes/Home";
import Authentication from "./routes/Authentication";
import "./App.sass";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
