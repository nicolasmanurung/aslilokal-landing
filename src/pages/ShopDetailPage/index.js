import { useParams } from "react-router-dom";
import { useState, useEffect, lazy } from "react";
import axios from "axios";
import { getShopById } from "../../content/Constants";
const Container = lazy(() => import("../../common/Container"));
const ShopDetailPage = () => {
  let { id } = useParams();
  const [shop, setShop] = useState({});

  useEffect(() => {
    axios
      .get(`${getShopById}/${id}`)
      .then((res) => {
        // console.log(`Response ${JSON.stringify(res)}`);
        setShop(res.data.result);
      })
      .catch((err) => {
        console.error(`Error ${err}`);
      });
  }, []);
  Object.keys(shop).map((val) => {
    console.log(`Hai ${shop[val]}`);
  });
  return (
    <Container fluid>
      <div id="intro" />
    </Container>
  );
};
export default ShopDetailPage;
