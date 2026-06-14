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
  revenue: 0,
  noItemSold: 0,
  noOfOrdersMade: 0,
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
      let orderArr = [...state.orders, action.orders].filter(
        (order, index, self) => {
          return index === self.findIndex((e) => e.name === order.name);
        },
      );

      let total_number_of_item = orderArr.reduce(
        (acc, product) => acc + product.itemQuantity,
        0,
      );

      return {
        ...state,
        orders: orderArr,
        noItemSold: total_number_of_item,
        revenue: orderArr.reduce(
          (acc, product) => acc + product.price * product.itemQuantity,
          0,
        ),
      };
    }

    case "delete_item":
      let changeOrders = state.orders.filter((a) => a.id !== action.id);
      return {
        ...state,
        orders: changeOrders,
        noItemSold:
          state.noItemSold > 0 &&
          state.noItemSold -
            state.orders
              .filter((a) => a.id === action.id)
              .reduce((acc, item) => acc + item.itemQuantity, 0),
        revenue: changeOrders.reduce(
          (acc, product) => acc + product.price * product.itemQuantity,
          0,
        ),
      };

    // INCREASET ITEM QUANTITY (CART)
    case "increase_item_QUANTITY":
      let newOrders = state.orders.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            itemQuantity: item.itemQuantity + 1,
            totalCost: item.price * (item.itemQuantity + 1),
          };
        }

        return { ...item };
      });
      return {
        ...state,
        orders: newOrders,
        noItemSold: state.noItemSold + 1,
        revenue: newOrders.reduce(
          (acc, product) => acc + product.price * product.itemQuantity,
          0,
        ),
      };

    // DECREASE ITEM QUANTITY (CART)
    case "decrease_item_QUANTITY":
      let Quantity = state.orders
        .filter((a) => a.id === action.id)
        .reduce((acc, item) => acc + item.itemQuantity, 0);

      // NEW ORDERS
      let changedOrders = state.orders.map((item) => {
        if (item.id === action.id) {
          let newQuantity = item.itemQuantity > 1 ? item.itemQuantity - 1 : 1;
          let newPrice = item.price * newQuantity - 1;
          return {
            ...item,
            itemQuantity: newQuantity,
            totalCost: newPrice,
          };
        }

        return { ...item };
      });
      return {
        ...state,
        orders: changedOrders,
        noItemSold: Quantity > 1 ? state.noItemSold - 1 : state.noItemSold,

        revenue: changedOrders.reduce(
          (acc, product) => acc + product.price * product.itemQuantity,
          0,
        ),
      };

    /*/ GET TOTAL SUM OF COST (CART)
    case "getTotalCost":
      return {
        ...state,
        revenue: state.orders.reduce(
          (acc, product) => acc + product.price * product.itemQuantity,
          0,
        ),
      };
*/
    // GET TOTAL ORDERS MADE (CART)
    case "increase_noOfOrders": {
      return {
        ...state,
        noOfOrdersMade: state.noOfOrdersMade + 1,
      };
    }

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
