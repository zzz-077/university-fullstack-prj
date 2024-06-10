import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRequired from "./components/AuthRequired/AuthRequired";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route element={<AuthRequired />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
