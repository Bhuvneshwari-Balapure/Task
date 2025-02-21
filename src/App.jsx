import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductPage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/category/:category" element={<ProductPage />} />
            <Route path="/addToCart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
