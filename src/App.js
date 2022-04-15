import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Inventory from "./Components/Inventory/Inventory";
import NotFound from "./Components/NotFound/NotFound";
import Order from "./Components/Order/Order";
import Products from "./Components/Products/Products";
import RequireAuth from "./Components/RequireAuth/RequireAuth";
import Search from "./Components/Search/Search";
import Login from "./Components/Security/Login/Login";
import SignUp from "./Components/Security/SingUp/SignUp";

function App() {
  return (
    <div className="text-center">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Products></Products>}></Route>
        <Route path="/Order" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>
        <Route path="/Inventory" element={<Inventory></Inventory>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/SignUp" element={<SignUp></SignUp>}></Route>
        <Route path="/Search" element={<Search></Search>}></Route>
        <Route path="/Shopping" element={<Cart></Cart>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
