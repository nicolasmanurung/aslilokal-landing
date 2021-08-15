import { lazy } from "react";
import { Row, Col, Card } from "antd";
const Shop = lazy(() => import("../../common/Shop"));

const ShopsCard = ({ shops }) => {
  return (
    <div>
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {shops.map((shop, index) => (
          <Col span={7} className="mb-5">
            <Shop key={shop._id} shop={shop} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ShopsCard;
