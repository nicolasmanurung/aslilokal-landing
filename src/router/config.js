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
  }
];

export default routes;
