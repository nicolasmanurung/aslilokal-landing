import { useState, useEffect, lazy } from "react";
import { CardColumns, Spinner } from "react-bootstrap";
import { Row, Col, Card } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Search from "../../common/Search";

const ShopsCard = lazy(() => import("../../components/ShopCard"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const ShopPage = () => {
  const [shops, setShopList] = useState([]);
  const [fixpage, setFixPage] = useState(1);
  const [clearPage, setClearPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [noData, setNoData] = useState(false);
  const [typeCall, setTypecall] = useState("shops");
  const [querySearch, setQuerySearch] = useState("");
  //cancel axios response
  const source = axios.CancelToken.source();

  const scrollControl = () => {
    window.onscroll = () => {
      // console.log("ONSCROLL");
      if (
        document.getElementById("cardshops").scrollHeight -
          document.getElementById("cardshops").offsetHeight <=
        document.getElementById("cardshops").scrollTop
      ) {
        if (!noData) {
          loadUserList(fixpage);
        }
      }
    };
  };

  const onSubmitControl = () => {
    source.cancel();
    setShopList((prevState) => ({ ...prevState, shops: [] }));

    loadUserList(fixpage);
    console.log("PAGE->", fixpage);
  };

  // Testing
  useEffect(() => {
    // console.log("USEEFECT");
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
      // console.log("TYPE", typeCall);
      if ((page != null) & (page > 1)) {
        if (typeCall === "shops") {
          url = `https://aslilokalbackend.herokuapp.com/buyer/shops?page=${page}&limit=10`;
        }
        if (typeCall === "search") {
          url = `https://aslilokalbackend.herokuapp.com/buyer/shops/search?name=${querySearch}&type=all&page=${fixpage}&limit=20`;
        }
        // console.log("URL", url);
      } else {
        if (typeCall === "shops") {
          url = `https://aslilokalbackend.herokuapp.com/buyer/shops?page=1&limit=10`;
        }
        if (typeCall === "search") {
          url = `https://aslilokalbackend.herokuapp.com/buyer/shops/search?name=${querySearch}&type=all&page=1&limit=20`;
        }
        // console.log("URL", url);
      }
      const response = await axios.get(url);
      // console.log("RESPONSE", response.data.result.docs);
      return response.data.result.docs;
    } catch (error) {
      throw error;
    }
  };

  const loadUserList = (page) => {
    if (querySearch !== "") {
      // console.log("EKSEKUSISEARCH", querySearch);
      // setTypecall("search");
      if (page > 1) {
        // setFixPage(1);
      }
    } else {
      setTypecall("shops");
    }
    // console.log("PAGELOAD", page);
    setLoading(true);
    getList(page)
      .then((res) => {
        const newPage = page + 1;
        // setShopList([shops, ...res]);
        console.log(`Data Call : ${JSON.stringify(res)}`);
        setShopList(shops.concat(...res));
        // console.log("SHOPS", shops);
        setFixPage(newPage);
        // console.log("FINALPAGE->", newPage);
        // console.log("FINALPAGEF->", fixpage);
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
  };

  return (
    <Container fluid>
      <ScrollToTop />
      <div id="intro" />
      <Search onSubmit={onSubmitControl} queryText={(e) => setQuerySearch(e)} />
      {/* <CardColumns id='cardshops' onScroll={scrollControl()}> */}
      <div
        className="site-card-wrapper"
        id="cardshops"
        onScroll={scrollControl()}
      >
        {shops.length > 0 ? (
          <ShopsCard shops={shops} />
        ) : (
          <div className="text-center"></div>
        )}
      </div>

      {/* </CardColumns> */}
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner animation="border" />
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default ShopPage;
