import { lazy } from "react";

const Shop = lazy(() => import("../../common/Shop"));

const ShopsCard = ({ shops }) => {
  return (
    <div>
      {shops.map((shop, index) => (
        <Shop key={shop._id} shop={shop} />
      ))}
    </div>
  );
};

export default ShopsCard;
