import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import OrderPage from "./Pages/OrderPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import UserLayout from "./Layout/UserLayout";
import NotFoundPage from "./Pages/NotFoundPage";
import ViewProductPage from "./Pages/ViewProductPage";
import { Provider } from "react-redux";
import { store } from "./Store/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <UserLayout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/product/:id" element={<ViewProductPage />} />
              <Route path="/*" element={<NotFoundPage />} />
            </Routes>
          </UserLayout>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
