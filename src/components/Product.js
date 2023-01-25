import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./rating";

function Product(props) {
  const { product } = props;
  return (
    <Card key={product.slug} className="product">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} className="card-img-top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>
          <strong>${product.price}</strong>
        </Card.Text>
        <Button>Add to cart</Button>
      </Card.Body>
      {/* <div className="product-info">
        <p>
        
        </p>
        <button></button>
      </div> */}
    </Card>
  );
}

export default Product;
