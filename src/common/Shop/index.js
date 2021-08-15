import PropTypes from "prop-types";
import { Button } from "antd";
import { Card, Image } from "antd";
import { useHistory } from "react-router";
import SvgIcon from "../SvgIcon";
import { Link } from "react-router-dom";
const { Meta } = Card;
const Shop = ({ shop }) => {
  return (
    <Card style={{ width: 300, display: "flex", justifyContent: "center" }}>
      <Image
        width={200}
        height={200}
        src={`https://kodelapo-usr-img.s3.ap-southeast-1.amazonaws.com/${shop.imgShop}`}
      />
      <p>{shop.nameShop}</p>
      <p>Alamat: {shop.addressShop}</p>{" "}
      <b>
        <p>
          <SvgIcon
            src={"verifyIcon.svg"}
            className="about-block-image"
            width="20px"
            height="20px"
          />
          Asli : {shop.rajaOngkir.city_name}
        </p>
      </b>
      <Link to={`/detailShop/${shop.idSellerAccount}`}>
        <Button type="primary">Lihat</Button>
      </Link>
    </Card>
    // <Card style={{ width: "18rem" }}>
    //   <Card.Img
    //     variant='top'
    //     src={`https://kodelapo-usr-img.s3.ap-southeast-1.amazonaws.com/${shop.imgShop}`}
    //   />
    //   <Card.Body>
    //     <Card.Title>{shop.nameShop}</Card.Title>

    //     <p>Alamat: {shop.addressShop}</p>
    //     <b><p>Asli : {shop.rajaOngkir.city_name}</p></b>
    //     <Button variant='primary'>Lihat</Button>
    //   </Card.Body>
    // </Card>
  );
};

export default Shop;
