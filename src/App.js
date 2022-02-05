import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Cart } from "./pages/Cart";
import { Main } from "./pages/Main";
import AppContext from "./context";
import { ListItems } from "./components/ListItems";
import { Order } from "./pages/Order";
import { Plug } from "./pages/Plug";

function App() {
  const [menuItems, setMenuItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(cartItems)

  useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get('http://localhost:3004/menu');
        const cartResponse = await axios.get('http://localhost:3004/cart');
        setCartItems(cartResponse.data);
        setMenuItems(itemsResponse.data);
        setIsLoading(false);
      } catch (error) {
        alert('Произошла ошибка при загрузки данных');
        console.error(error);
      }
    }
    fetchData();
  }, [])
  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.id) === Number(id))
  }

  const addItemToCart = async (obj) => {
    try {
      if (cartItems.find(itmCrt => itmCrt.id === obj.id)) {
        let count = cartItems.find(itmCrt => itmCrt.id === obj.id).count;
        await axios.delete(`http://localhost:3004/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
        obj.count = count + 1;
        setCartItems((prev) => [...prev, obj]);
        await axios.post('http://localhost:3004/cart', obj);
      } else {
        obj.count = 1;
        await axios.post('http://localhost:3004/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert('Произошла ошибка при добавлении в корзину');
      console.error(error);
    }
  }

  const removeItemFromCart = async (obj) => {
    try {
      if (obj.count > 1) {
        await axios.delete(`http://localhost:3004/cart/${obj.id}`);
        obj.count = obj.count - 1;
        await axios.post('http://localhost:3004/cart', obj);
        setCartItems((prev) => [...prev]);
      } else {
        await axios.delete(`http://localhost:3004/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
      }
    } catch (error) {
      alert('Произошла ошибка при удалении из корзины');
      console.error(error);
    }
  }

  const fullRemoveItemFromCart = async (obj) => {
    try {
      await axios.delete(`http://localhost:3004/cart/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    } catch (error) {
      alert('Произошла ошибка при удалении из корзины');
      console.error(error);
    }
  }

  return (
    <BrowserRouter>
      <AppContext.Provider value={{ cartItems, setCartItems, addItemToCart, removeItemFromCart, fullRemoveItemFromCart, isItemAdded }}>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path='/' element={<Main isLoading={isLoading} menuItems={menuItems} />}>
              <Route path='/cSnacks' element={<ListItems />} />
              <Route path='/hsnacks' element={<ListItems />} />
              <Route path='/meat' element={<ListItems />} />
              <Route path='/fish' element={<ListItems />} />
              <Route path='/soups' element={<ListItems />} />
              <Route path='/grill' element={<ListItems />} />
              <Route path='/dessert' element={<ListItems />} />
              <Route path='/drinks' element={<ListItems />} />
              <Route path="*" element={<Navigate replace to='/' />} />
            </Route>
            <Route path='/cart' element={<Cart />} />
            <Route path="/plug" element={<Plug />} />
            <Route path='/order' element={<Order />} />
          </Routes>
          <Footer />
        </div>
      </AppContext.Provider>
    </BrowserRouter>

  );
}

export default App;
