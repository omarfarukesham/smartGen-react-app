import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css"


const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  
const logOut = () =>{
  signOut(auth);
}

  return (
    <div className="container-fluid bg-light py-3 sticky-top">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h3 className="fs-3 fw-bold">Smart<span className="text-warning">Gen</span></h3>
        </div>
        <div className="d-flex fs-4 fw-bold">
            <CustomLink className="m-2 text-decoration-none text-black"  to="/"> Home</CustomLink>
            <CustomLink className="m-2 text-decoration-none text-black"  to="/products"> Products</CustomLink>
            <CustomLink  className="m-2 text-decoration-none text-black" to="/order"> Order</CustomLink>
            <CustomLink className="m-2 text-decoration-none text-black" to="/inventory"> Inventory</CustomLink>
        </div>
        <div className="d-flex g-4 fs-5 align-items-center icon--plus">

         { user?.uid ? <button onClick={logOut} className="btn btn-outline-primary">SignOut</button>:
         <CustomLink className="m-2 text-black fw-bold icon--plus" to="/login"> <i className="fa-solid fa-user-plus"></i></CustomLink>
         }


          <CustomLink className="m-2 text-black fw-bold" to="/search"> <i class="fa-solid fa-magnifying-glass"></i></CustomLink>
          <CustomLink className="m-2 text-black fw-bold" to="/shopping"> <i class="fa-solid fa-cart-plus"></i></CustomLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
