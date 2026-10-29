import ProductCard from "./components/ProductCard";
import { products } from "./data";

function App() {
  return (
    <div className="app">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}

export default App;
