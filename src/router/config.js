const routes = [
  {
    path: ["/"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/products"],
    exact: false,
    component: "ProductPage",
  },
  {
    path: ["/shops"],
    exact: false,
    component: "ShopPage",
  },
  {
    path: ["/detailShop/:id"],
    exact: false,
    component: "ShopDetailPage",
  },
];

export default routes;
