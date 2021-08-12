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
    path: ["/shops/detail/"],
    exact: false,
    component: "ShopPage",
  }
];

export default routes;
