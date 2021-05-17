import { useState, useEffect, lazy } from "react";
import { CardColumns, Spinner } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Search from "../../common/Search";

const ProductsCard = lazy(() => import("../../components/ProductCard"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const ProductPage = () => {
  const [products, setProductList] = useState([]);
  const [fixpage, setFixPage] = useState(1);
  const [clearPage, setClearPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [typeCall, setTypecall] = useState("popular");
  const [querySearch, setQuerySearch] = useState("");
  //cancel axios response
  const source = axios.CancelToken.source();

  const scrollControl = () => {
    window.onscroll = () => {
      console.log("ONSCROLL");
      if (
        document.getElementById("cardproducts").scrollHeight -
          document.getElementById("cardproducts").offsetHeight <=
        document.getElementById("cardproducts").scrollTop
      ) {
        if (!noData) {
          loadUserList(fixpage);
        }
      }
    };
  };

  const onSubmitControl = () => {
    source.cancel();
    setProductList((prevState) => ({ ...prevState, products: [] }));
    loadUserList(fixpage);
    console.log("PAGE->", fixpage);
  };

  // Testing
  useEffect(() => {
    console.log("USEEFECT");
    loadUserList(fixpage);
    // handleScroll();
    return () => {
      source.cancel();
      window.onscroll = "";
    };
  }, []);

  const getList = async (page) => {
    try {
      let url;
      console.log("TYPE", typeCall);
      if ((page != null) & (page > 1)) {
        if (typeCall === "popular") {
          url = `https://aslilokalbackend.herokuapp.com/buyer/products/popular?page=${page}&limit=20`;
        }
        if (typeCall === "search") {
          url = `https://aslilokalbackend.herokuapp.com/buyer/products/search?name=${querySearch}&type=all&page=${fixpage}&limit=20`;
        }
        console.log("URL", url);
      } else {
        if (typeCall === "popular") {
          url = `https://aslilokalbackend.herokuapp.com/buyer/products/popular?page=1&limit=20`;
        }
        if (typeCall === "search") {
          url = `https://aslilokalbackend.herokuapp.com/buyer/products/search?name=${querySearch}&type=all&page=1&limit=20`;
        }
        console.log("URL", url);
      }
      const response = await axios.get(url);
      console.log("RESPONSE", response.data.result.docs);
      return response.data.result.docs;
    } catch (error) {
      throw error;
    }
  };

  const loadUserList = (page) => {
    if (querySearch !== "") {
      console.log("EKSEKUSISEARCH", querySearch);
      setTypecall("search");
      if (page > 1) {
        // setFixPage(1);
      }
    } else {
      setTypecall("popular");
    }
    console.log("PAGELOAD", page);
    setLoading(true);
    setTimeout(() => {
      getList(page)
        .then((res) => {
          const newPage = page + 1;
          // setProductList([products, ...res]);
          setProductList(products.concat(...res));
          console.log("PRODUCTS", products);
          setFixPage(newPage);
          console.log("FINALPAGE->", newPage);
          console.log("FINALPAGEF->", fixpage);
          if (res.length === 0) {
            setNoData(true);
          }
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 3000);
  };

  return (
    <Container>
      <ScrollToTop />
      <div id='intro' />
      {/* <Search onSubmit={onSubmitControl} queryText={(e) => setQuerySearch(e)} /> */}
      <CardColumns id='cardproducts' onScroll={scrollControl()}>
        {products.length > 0 ? (
          <ProductsCard products={products} />
        ) : (
          <div className='text-center'></div>
        )}
      </CardColumns>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Spinner animation='border' />
        </div>
      ) : (
        ""
      )}
      {noData ? (
        <div className='text-center'>
          Tampaknya semua produk sudah di tampilkan nih...
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default ProductPage;
