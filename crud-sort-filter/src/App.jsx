import "./App.css";
import { Outlet } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import MoviesProvider from "./context/MoviesContext";
import Header from "./layout/Header";

function App() {
  return (
    <div className="container">
      <ChakraProvider>
        <Header />
        <MoviesProvider>
          <Outlet />
        </MoviesProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
