import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const ProductPage = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const { category } = useParams();
  const loadData = async () => {
    let api = `https://fakestoreapi.com/products`;
    try {
      if (category) {
        api = `https://fakestoreapi.com/products/category/${category}`;
      }
      const response = await fetch(api);
      const data = await response.json();
      setMydata(data);
      console.log(mydata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    loadData();
  }, [category]);

  return (
    <>
      <div id="productPage" className="d-flex flex-wrap justify-content-center">
        {mydata.map((product) => (
          <Card
            id="cards"
            style={{
              width: "18rem",
              margin: "1rem",
              background: "transparent",
            }}
            key={product.id}
          >
            <Card.Img
              variant="top"
              src={product.image}
              alt={product.title}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                <strong>Price:</strong> ₹{product.price}
              </Card.Text>
              <Button
                id="btn"
                variant="success"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
};
export default ProductPage;
