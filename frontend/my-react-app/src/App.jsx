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
  revenue: "",
  noItemSold: 0,
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

    case "add_orders": {
      return {
        ...state,
        orders: [...state.orders, action.orders],
      };
    }

    case "delete_item":
      return {
        ...state,
        orders: state.orders.filter((a) => a.id !== action.id),
        noItemSold: state.noItemSold > 0 && state.noItemSold - 1,
      };

    case "increase_noItemSold": {
      return {
        ...state,
        noItemSold: state.noItemSold + 1,
      };
    }

    // INCREASET ITEM QUANTITY
    case "increase_item_QUANTITY":
      return {
        ...state,
        orders: state.orders.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              itemQuantity: item.itemQuantity + 1,
              totalCost: item.price * (item.itemQuantity + 1),
            };
          }

          return { ...item };
        }),

        noItemSold: state.noItemSold + 1,
      };

    // DECREASE ITEM QUANTITY
    case "decrease_item_QUANTITY":
      return {
        ...state,
        orders: state.orders.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              itemQuantity: item.itemQuantity > 1 ? item.itemQuantity - 1 : 1,
            };
          }

          return { ...item };
        }),
      };

    // GET TOTAL SUM OF COST
    case "total_cost":
      return state.orders.reduce();

    default:
      return state;
  }
}

function App() {
  let [showSideBar, setShowSideBar] = useState(false);
  let [showCart, setShowCart] = useState(false);
  let [state, dispatch] = useReducer(reducer, initialState);
  // quantity state of a specific item in the cart
  let [quantityOfItem, setQuantityOfItem] = useState(1);

  // SIDEBAR
  // to show  sidebar
  function onShowSideBar() {
    setShowSideBar(true);
  }
  // to remove sidebar
  function onCloseSideBar() {
    setShowSideBar(false);
  }

  //CART
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
          <section className="relative">
            {showSideBar && <SideBar />}

            {/* Routes */}
            <section>
              <Routes>
                <Route
                  path="/"
                  element={<Sale showCart={showCart} onShowCart={onShowCart} />}
                ></Route>
                <Route path="/inventory" element={<Inventory />}></Route>
                <Route path="/users" element={<Users />}></Route>
                <Route path="/history" element={<SalesHistory />}></Route>
              </Routes>
            </section>
          </section>
        </SideBarContext.Provider>
      </ReducerContext.Provider>
    </BrowserRouter>
  );
}

export default memo(App);
