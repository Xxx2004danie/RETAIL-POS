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

//user details
let product = [
  {
    name: "Bread",
    prize: "$500",
  },
  {
    name: "Bread",
    prize: "$500",
  },
  {
    name: "Bread",
    prize: "$500",
  },
  {
    name: "Bread",
    prize: "$500",
  },
  {
    name: "Bread",
    prize: "$500",
  },
  {
    name: "Bread",
    prize: "$500",
  },
  {
    name: "Bread",
    prize: "$500",
  },
  {
    name: "Bread",
    prize: "$500",
  },
  {
    name: "Bread",
    prize: "$500",
  },
  {
    name: "Bread",
    prize: "$500",
  },
  {
    name: "Bread",
    prize: "$500",
  },
  {
    name: "fanta",
    prize: "$500",
  },
  {
    name: "malt",
    prize: "$1000",
  },
  {
    name: "perfume",
    prize: "$5000",
  },
];

//user details
let user = [
  {
    short: "sw",
    name: "sheriff",
    email: "sheriff@gmail.com",
    role: "admin",
  },
];
// initial state for reducer
let initialState = {
  products: [...product],
  orders: [],
  sales: [],
  users: [...user],
};

// reducer
function reducer(state, action) {
  switch (action.type) {
    case "show_users": {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }

    case "show_products": {
      return {
        ...state,
        products: [...state.product, ...action.products],
      };
    }

    case "show_sales": {
      return {
        ...state,
        sales: [...state.sales, ...action.sales],
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

  // fetching user details
  let users = useCallback(() => {
    useEffect(() => {
      async function getUsers() {
        try {
          let response = await fetch("http://localhost:5000/api/v1/users");
          let users = await response.json();

          dispatch({
            type: "show_users",
            data: users,
          });
        } catch (error) {
          console.error(error);
        }
      }

      // get users
      getUsers();
    }, []);
  }, []);

  users();

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
      <ReducerContext.Provider value={state}>
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
