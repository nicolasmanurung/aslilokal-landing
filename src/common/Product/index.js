import PropTypes from "prop-types";
import { Card, CardDeck, Button } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant='top'
        src={`https://kodelapo-product-img.s3.ap-southeast-1.amazonaws.com/${product.imgProduct}`}
      />
      <Card.Body>
        <Card.Title>{product.nameProduct}</Card.Title>
        {!!product.promoPrice ? (
          <div>
            <Card.Text>Harga Awal: Rp {product.priceProduct}</Card.Text>
            <Card.Text>Harga Diskon : Rp {product.promoPrice}</Card.Text>
          </div>
        ) : (
          <Card.Text>Harga: Rp {product.priceProduct}</Card.Text>
        )}
        <p>Berat: {product.productWeight} gr</p>
        <Button variant='primary'>Lihat</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
