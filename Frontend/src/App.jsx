import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthRequired from "./components/AuthRequired/AuthRequired";
import Home from "./pages/HomeStudent";
import SignIn from "./pages/SignIn";
import Layout from "./components/Layout/Layout";
import HomeStudent from "./pages/HomeStudent";
import ProfileStudent from "./pages/ProfileStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route element={<AuthRequired />}>
          <Route element={<Layout />}>
            <Route index element={<HomeStudent />} />
            <Route path="profile" element={<ProfileStudent />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
