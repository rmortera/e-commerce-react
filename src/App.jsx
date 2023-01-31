import { useState } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import AppNavBar from "./components/AppNavBar";
import LoadingScreen from "./components/LoadingScreen";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductDetails from "./pages/ProductDetails";
import Purchases from "./pages/Purchases";
import "./styles.css";

function App() {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      <AppNavBar />
      {isLoading && <LoadingScreen />}
      <Container className="my-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;
