import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Home/Header/Header";
import Slider from "./Components/Home/Slider/Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import ListProducts from "./Components/Home/ListProducts/ListProducts";
import Banner from "./Components/Home/Banner/Banner";
import Footer from "./Components/Home/Footer/Footer";
import ProductContainer from "./Components/Product-Container/ProductContainer";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Slider />
        <ProductContainer />
        <Banner />
      </div>
      <Footer />
      <Login />
      <Register />
    </div>
  );
}

export default App;
