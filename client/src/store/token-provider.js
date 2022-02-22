import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useHttpClient } from "../hooks/http-hook";
import jwt_decode from "jwt-decode"
import { Convert } from 'mongo-image-converter'

const TokenContent = React.createContext({
  token: "",
  login: () => { },
  logout: () => { },
  signup: () => { },
});

export const TokenContentProvider = (props) => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const parsedToken = JSON.parse(token)
      setToken(parsedToken);
    }
  }, []);

  const login = async (data) => {
    console.log("login", data);
    try {
      const responseData = await sendRequest(
        "http://localhost:3000/auth/login",
        "POST",
        JSON.stringify({
          email: data.email,
          passwort: data.passwort,
        }),
        { "Content-Type": "application/json" }
      );
      if (responseData && !error) {
        console.log(responseData)
        const encodedToken = jwt_decode(responseData.accessToken)
        setToken(encodedToken);
        localStorage.setItem("token", JSON.stringify(encodedToken))
        navigate("/welcome");
      }
    } catch (e) { }
  };

  const logout = (data) => {
    console.log("logout", data);
    setToken(null);
    localStorage.removeItem("token");
  };
  const signup = async (data) => {
    console.log("signup", data);
    try {
      const convertedImage = await Convert(data.picture[0])
      console.log(convertedImage)
      const responseData = await sendRequest(
        "http://localhost:3000/auth/registration",
        "POST",
        JSON.stringify({
          email: data.email,
          passwort: data.passwort,
          name: data.name,
          image: convertedImage
        }),
        { "Content-Type": "application/json" }
      );
      if (responseData && responseData.accessToken && !error) {
        const encodedToken = jwt_decode(responseData.accessToken)
        console.log("Token", encodedToken)
        setToken(encodedToken);
        localStorage.setItem("token", JSON.stringify(encodedToken))
        navigate("/welcome");
      }
    } catch (e) { }
  };

  const tokenData = {
    isLoading,
    error,
    token,
    login,
    logout,
    signup,
  };

  return (
    <TokenContent.Provider value={tokenData}>
      {props.children}
    </TokenContent.Provider>
  );
};

export default TokenContent;
