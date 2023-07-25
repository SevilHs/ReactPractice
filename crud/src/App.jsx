import "./App.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import { Outlet } from "react-router-dom";
import FavouritesProvider from "./context/FavouritesContext";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
  <HelmetProvider>
      <FavouritesProvider>
      <Header />
      <Outlet />
      <Footer />
    </FavouritesProvider>
  </HelmetProvider>
  );
}

export default App;
