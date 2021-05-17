import { lazy } from "react";

const Product = lazy(() => import("../../common/Product"));

const ProductsCard = ({ products }) => {
  return (
    <div>
      {products.map((product, index) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsCard;
