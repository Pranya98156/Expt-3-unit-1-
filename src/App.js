import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import ProductCard from "./components/ProductCard";
import Library from "./pages/Library";
import PersonHierarchy from "./pages/PersonHierarchy";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <ProductCard
                name="Wireless Headphones"
                price="129.99"
                inStock={true}
              />
              <ProductCard
                name="Mechanical Keyboard"
                price="89.99"
                inStock={false}
              />
              <ProductCard
                name="Smart Watch"
                price="199.99"
                inStock={true}
              />
            </div>
          }
        />

        <Route path="/library" element={<Library />} />
        <Route path="/person" element={<PersonHierarchy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
