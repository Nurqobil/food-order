// import { useContext } from "react";
// import appContext from "./context/appContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import { useSelector } from "react-redux";

function App() {
  // const ctx = useContext(appContext);
  const isVerify = useSelector((state) => state.isVerify);
  return (
    <>
      <Routes>
        {!isVerify && <Route path="/" element={<Navigate to={"/login"} />} />}
        {isVerify && <Route path="/" element={<Navigate to={"/home"} />} />}
        {isVerify && <Route path="/home" element={<Home />} />}
        <Route path="/login" element={<Login />} />
        {!isVerify && <Route path="*" element={<Navigate to={"/login"} />} />}
        {isVerify && <Route path="*" element={<Navigate to={"/home"} />} />}
      </Routes>
    </>
  );
}

export default App;
