import { useState , createContext } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sales from "./pages/Dashboard/dashoard.jsx"
import SideBar from "./pages/Dashboard/sidebar.jsx"
import Cart from "./pages/Dashboard/cart.jsx"
import User from "./pages/Users/user.jsx";
import SalesHistory from "./pages/SalesHistory/salehistory.jsx";
import Inventory from "./pages/Inventory/inventory.jsx";

 
export let SideBarContext = createContext(0);
export let OrderContext = createContext(0);

export default function App() {
  let [showSideBar, setShowSideBar] = useState(false);
  let [showCart, setShowCart] = useState(false);
  let [orders , setOrders]  = useState(0)

  // to show and remove sidebar
  function onShowSideBar() {
    setShowSideBar((showSideBar) => !showSideBar);
  }
     // to show and remove sidebar
  function onChangeOrders() {
    setOrders((order) => order + 1 );
  }
  // to show and remove cart
  function onShowCart() {
    setShowCart((showCart) => !showCart);
  }

  return (
    <BrowserRouter>
      <SideBarContext.Provider value={{ showSideBar, onShowSideBar }}>
        <OrderContext.Provider value = {{orders, onChangeOrders}} >
           <section className="relative">
          {showSideBar && <SideBar />}

          {/* Routes */}
          <section>
            <Routes>
              <Route
                path="/"
                element={<Sales showCart={showCart}  onShowCart={onShowCart} />}
              ></Route>
              <Route path="/inventory" element={<Inventory />}></Route>
              <Route path="/users" element={<User />}></Route>
              <Route path="/history" element={<SalesHistory />}></Route>
            </Routes>
          </section>
        </section>
       </OrderContext.Provider>
      </SideBarContext.Provider>
    </BrowserRouter>
  )
}


  