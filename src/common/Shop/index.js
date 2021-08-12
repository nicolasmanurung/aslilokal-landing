import PropTypes from "prop-types";
import { Card, CardDeck, Button } from "react-bootstrap";

const Shop = ({ shop }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant='top'
        src={`https://kodelapo-usr-img.s3.ap-southeast-1.amazonaws.com/${shop.imgShop}`}
      />
      <Card.Body>
        <Card.Title>{shop.nameShop}</Card.Title>

        <p>Alamat: {shop.addressShop}</p>
        <b><p>Asli : {shop.rajaOngkir.city_name}</p></b>
        <Button variant='primary'>Lihat</Button>
      </Card.Body>
    </Card>
  );
};

export default Shop;
