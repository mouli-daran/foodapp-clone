import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div className="text-center py-4">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button className="bg-black text-white border-black p-2 m-2 rounded-lg" onClick={handleClearCart}>
        Clear Cart
      </button>
      <div className="w-6/12 m-auto py-8">
        {cartItems.length == 0 && <h1>Please Add Items to the Cart...</h1>}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
