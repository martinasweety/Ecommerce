import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import { useState } from "react"
import Order from "./Pages/Order"
import FilterData from "./Pages/FilterData"
import ProductDetails from "./Pages/ProductDetails"
function App() {
  const [order, setOrder] = useState(null)
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />}></Route>
        <Route path="/order-confirmation" element={< Order order={order} />}></Route>
        <Route path="/filter-data" element={<FilterData />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
