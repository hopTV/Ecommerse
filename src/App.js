import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
    </>
  );
}

export default App;
