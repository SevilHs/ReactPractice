import "./App.css";
import { getProductsData } from "./service/products.service";
import { useState, useEffect } from "react";
import Cards from "./components/cards";
import Pagination from "./components/pagination";

function App() {
  const [products, setProducts] = useState([]);
  const [totalPage, setTotalPage] = useState();
  const [page, setPage] = useState(1)
  const getData = async () => {
    setProducts(await getProductsData());
    setTotalPage(Math.ceil((await getProductsData()).length/5))
  };
  useEffect(() => {
    getData();
  }, []);
  return <>
    <Cards products={products} page={page} />
    <Pagination totalPage={totalPage} setPage={setPage}/>
  </>;
}

export default App;
