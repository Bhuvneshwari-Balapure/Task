import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-3 cartPage">
      <h3 className="text-center">Cart Items</h3>
      <Table responsive bordered hover className="mt-3">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Price (₹)</th>
            <th>Quantity</th>
            <th>Total (₹)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No items in the cart
              </td>
            </tr>
          ) : (
            cartItems.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td>{item.title}</td>
                <td>₹{item.price}</td>
                <td className="quantity-controls">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="quantity-btn"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </Button>
                  <span className="quantity-text">{item.quantity}</span>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="quantity-btn"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </Button>
                </td>
                <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      {/* total price */}
      <h4 className="text-center mt-3">
        Total Price : ₹ {totalPrice.toFixed(2)}
      </h4>
    </div>
  );
};

export default CartPage;
