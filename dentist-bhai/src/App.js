import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Login/Login";
import Blogs from "./Pages/Blogs/Blogs";
import AboutMe from "./Pages/AboutMe/AboutMe";
import SignUp from "./Shared/SignUp/SignUp";
import NotFound from "./Shared/NotFound/NotFound";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/Checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>

        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/About" element={<AboutMe></AboutMe>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
