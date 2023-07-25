import "./App.css";
import { getProductsData } from "./service/products.service";
import { useEffect, useReducer } from "react";
import Cards from "./components/cards";
import Pagination from "./components/pagination";

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { products: action.payload };
    case "FIND_TOTAL_PAGE":
      return { ...state, totalPage: action.payload };
    case "SET_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, {
    products: [],
    totalPage: null,
    page: 1,
  });
  const getData = async () => {
    dispatch({
      type: "GET_DATA",
      payload: await getProductsData(),
    });
    dispatch({
      type: "FIND_TOTAL_PAGE",
      payload: Math.ceil((await getProductsData()).length / 3),
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Cards products={state.products} page={state.page} />
      <Pagination totalPage={state.totalPage} setPage={dispatch} />
    </>
  );
}

export default App;
