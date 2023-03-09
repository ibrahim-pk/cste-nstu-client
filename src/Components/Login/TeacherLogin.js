import React, { useEffect, useState } from "react";
import InputField from "../Common/InputField";
import SubmitBtn from "../Common/SubmitBtn";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/FirebaseConfig";
export default function TeacherLogin() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [logUser, setLogUser] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleStudnetLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (Password.length < 6) {
      setError("Password Should be greater than 6 characters.");
    } else {
      const { data } = await axios.post("https://cste-club-ibrahimecste.vercel.app/api/teacher/login", {
        email,
        Password,
      });
      if (data.error) {
        toast.error(data?.error);
      } else {
        localStorage.setItem("UserDetails", JSON.stringify(data));
        setLogUser(true);
        setEmail("");
        setPassword("");
        setError("");
        toast.success(data?.msg);
        window.location.href = "/";
      }
    }
  };

  const handleGoogleSigIn = () => {
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        const { data } = await axios.post("https://cste-club-ibrahimecste.vercel.app/api/teacher/login", {
          eduMail: user.email,
        });
        if (data.error) {
          toast.error(data?.error);
        } else {
          localStorage.setItem("UserDetails", JSON.stringify(data));
          toast.success(data?.msg);
          window.location.href = "/";
          setLogUser(true);
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  useEffect(() => {
    window.document.title = "LOGIN";
    if (logUser) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, logUser]);
  return (
    <div className="md:mt-15 mt-5 mx-auto text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Login For Teacher</h2>

      {error && (

        <>
          <div className="alert alert-error shadow-lg max-w-sm text-center mx-auto mb-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </div>
        </>
      )}
      <div className="max-w-sm mx-auto text-center border py-5 px-5">
        <form onSubmit={handleStudnetLogin}>
          <InputField
            setField={setEmail}
            fieldValue={email}
            label="Email"
            type="email"
          />

          <InputField
            setField={setPassword}
            fieldValue={Password}
            label="Password"
            type="password"
          />
          <SubmitBtn value="Login" />
        </form>
        <button
          onClick={handleGoogleSigIn}
          className="btn w-full mt-4  hover:bg-blue-800 max-w-xs"
        >
          <i className="fab mx-2 fa-google"></i> Login with Edu Mail
        </button>
      </div>
      <Toaster />
    </div>
  );
}
