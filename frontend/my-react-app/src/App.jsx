import {
  useState,
  createContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { memo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideBar from "./pages/Dashboard/sidebar.jsx";
import Cart from "./pages/Dashboard/cart.jsx";
import Users from "./pages/Users/user.jsx";
import SalesHistory from "./pages/SalesHistory/salehistory.jsx";
import Inventory from "./pages/Inventory/inventory1.jsx";
import Sale from "./pages/Dashboard/dashboard.jsx";


// context for global state
export let SideBarContext = createContext(0);
export let OrderContext = createContext(0);
export let ReducerContext = createContext();

// initial state for reducer
let initialState = {
  products: [],
  orders: [],
  sales: [],
  users: [],
};

// reducer
function reducer(state, action) {
  switch (action.type) {
    case "show_users": {
      return {
        ...state,
        users: action.users || [],
      };
    }

    case "show_products": {
      return {
        ...state,
        products: action.products || [],
      };
    }

    case "show_sales": {
      return {
        ...state,
        sales: [...(action.sales || [])],
      };
    }

    default:
      return state;
  }
}

function App() {
  let [showSideBar, setShowSideBar] = useState(false);
  let [showCart, setShowCart] = useState(false);
  let [orders, setOrders] = useState(0);
  let [state, dispatch] = useReducer(reducer, initialState);



  // to show and remove sidebar
  function onShowSideBar() {
    setShowSideBar(true);
  }

  function onCloseSideBar() {
    setShowSideBar(false);
  }
  // to show and remove sidebar
  function onChangeOrders() {
    setOrders((order) => order + 1);
  }
  // to show and remove cart
  function onShowCart() {
    setShowCart((showCart) => !showCart);
  }

  return (
    <BrowserRouter>
      <ReducerContext.Provider value={[state, dispatch]}>
        <SideBarContext.Provider
          value={{ showSideBar, onShowSideBar, onCloseSideBar }}
        >
          <OrderContext.Provider value={{ orders, onChangeOrders }}>
            <section className="relative">
              {showSideBar && <SideBar />}

              {/* Routes */}
              <section>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Sale showCart={showCart} onShowCart={onShowCart} />
                    }
                  ></Route>
                  <Route path="/inventory" element={<Inventory />}></Route>
                  <Route path="/users" element={<Users />}></Route>
                  <Route path="/history" element={<SalesHistory />}></Route>
                </Routes>
              </section>
            </section>
          </OrderContext.Provider>
        </SideBarContext.Provider>
      </ReducerContext.Provider>
    </BrowserRouter>
  );
}

export default memo(App);
