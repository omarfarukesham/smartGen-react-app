import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Login.css";



const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ signInWithEmailAndPassword, user1, loading1, error1] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate()
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  

  if(user1){
    navigate('/')
  }

  if(user){
    navigate('/')
  }


  const loginHandler =(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(email, password)
  }

  const signInGoogle = ()=>{
    signInWithGoogle()
  }

  return (
    <div className=" form--design mx-auto my-5 login--form">
      <h3 className="my-4 icon--lock"><i className="fa-solid fa-lock-open"></i> LOGIN</h3>
      <p className="text-danger">{error?.message}</p>
      <p className="text-danger">{error1?.message}</p>
      <Form onSubmit={loginHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onBlur={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" required />
        </Form.Group>

        <Button
          className="btn btn-outline-primary w-100"
          variant=""
          type="submit"
        >
          Log In
        </Button>
        <div className="d-flex justify-content-center align-items-center">
          <div className="or--left"></div>
          <p className="fw-bold p-3">Or</p>
          <div className="or--right"></div>
        </div>
        <div>
          SignIn With Google ? <button onClick={signInGoogle} className="btn btn-outline-primary google--btn"><i class="fa-brands fa-google"></i>Google LogIn</button>
          <hr></hr>
          Are you A new User ? <Link to="/signUp"> New User SignUp</Link>
        </div>

      </Form>
    </div>
  );
};

export default Login;
