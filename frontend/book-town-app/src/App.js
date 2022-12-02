import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Account from "./pages/Account";
import History from "./pages/History";
import NavBar from "./components/Navbar/NavBar";
import Cart from "./pages/Cart";
import Footer from "./pages/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/account" element={<Account />} />
        <Route path="/history" element={<History />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </>
  );
}

export default App;
