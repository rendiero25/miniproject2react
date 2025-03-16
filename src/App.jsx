import Index from "./pages/index.jsx";
import Login from "./pages/Login.jsx";
import Register from './pages/Register.jsx';
import Dashboard from "./pages/Dashboard.jsx";
import Protected from "./routes/Protected.jsx";
import NewFeatured from "./pages/NewFeatured.jsx";
import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";
import Kids from "./pages/Kids.jsx";
import Sale from "./pages/Sale.jsx";
import Snkrs from "./pages/Snkrs.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import DetailsUser from "./pages/DetailsUser.jsx";
import Cart from "./pages/Cart.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/index" element={<Index />} />
        <Route path="/signin" element={<Login />}/>
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={
          <Protected>
            <Dashboard />
          </Protected>
          } />

        <Route path="/newfeatured" element={<NewFeatured />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/snkrs" element={<Snkrs />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/details-user/:id" element={<DetailsUser />} />
        <Route path="/cart" element={<Cart />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;