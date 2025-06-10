import '../styles/ProductDetail.css'

import { useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from "../components/Header";
import Footer from "../components/Footer";

import PaginationButton from "../components/PagingButton";
import BackButton from "../components/BackButton";
import Price from '../components/Price';
import Review from '../components/Review';
import RunButton from '../components/RunButton';
import QtyButton from '../components/QtyButton';
import FavoriteButton from '../components/FavoriteButton';

import Products from './Products';

import { products } from "../constants/products";

import { useCart } from '../contexts/CartContext';
// import { useAuth } from '../contexts/AuthContext';
import { useUser } from '../contexts/UserContext';


export default function ProductDetail() {
  const { id } = useParams();

  // const { isAuthenticated } = useAuth();
  const { user, isAuthenticated } = useUser();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);

  const onIncrement = () => setQty((prev) => prev + 1);
  const onDecrement = () => setQty((prev) => Math.max(1, prev - 1)); // 

  const location = useLocation();
  const product = location.state?.product;
  // const products = location.state?.products;

  const { _id, name, price, img, description, color, rating } = product;

  const handleAddToCart = async () => {
    // if (!isAuthenticated) {
    //   navigate("/login");
    //   return;
    // }

    await addToCart(_id, color, qty, price);

    alert("カートに追加されました");
  };

  return (
    <>
      <Header />

      {/* <div class="background-overlay">*/}

      {/* (start)背景画像表示領域 */}
      <Box className="background-overlay">

        {/* <div class="container-fluid contents"> */}

        {/* (start)タイトル~メインパーツ表示領域 */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            padding: "60px 0px 0px 0px",
            margin: "0px 0px 0px 0px",
          }}
        >


          {/* (start)タイトル~メインパーツ表示レイアウト */}
          <Box
            // className="row justify-content-center"
            sx={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              alignItems: {
                xs: "center",
                md: "flex-start",
              },
              justifyContent: "center",
              padding: "40px 0px 0px 0px",
              margin: "0px 0px 0px 0px",
            }}
          >

            {/* (start)左パーツ */}
            {/* <nav class="nav-ver side-ver col-12 col-md-8 px-2 py-3 my-4"> */}
            <Box
              sx={{
                margin: "10px 20px",
                width: { xs: "90%", md: "35%" },
                padding: "30px 30px",
                // maxWidth: "650px",
                backgroundColor: "rgba(251, 245, 230, 0.8)",
                borderRadius: "10px",
                border: "0.2px solid #eee9d3",
                order: {
                  xs: 2,
                  md: 1
                },
              }}
            >
              <img
                src={img}
                alt={name}
                style={{
                  width: "100%",
                  // maxWidth: "550px",
                  height: "auto",
                  objectFit: "cover",
                  aspectRatio: "4 / 3"
                }}
              />

              <Typography
                sx={{
                  fontSize: "18px",
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "16px",
                    lg: "18px",
                  },
                  fontWeight: "500",
                  padding: "30px 0px",
                  margin: "0px 0px",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  textAlign: "left"

                }}
              >
                {description}
              </Typography>

            </Box>

            {/* </nav> */}
            {/* (end)左パーツ */}



            {/* (start)右パーツ */}
            {/* <div class="title-card col-12 col-md-9 py-3 my-4"> */}
            <Box
              sx={{
                margin: "10px 20px",
                width: { xs: "90%", md: "50%" },
                padding: "30px 30px",
                backgroundColor: "rgba(251, 245, 230, 0.8)",
                borderRadius: "10px",
                border: "0.2px solid #eee9d3",

              }}
            >

              <Box
                sx={{
                }}
              >


                {/* (start)商品名、価格、評価 */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start"
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start"
                    }}
                  >
                    {/* <h1 class="title">
                      {name}
                    </h1> */}

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "22px",
                          sm: "26px",
                          md: "30px",
                          lg: "40px",
                        },
                        fontWeight: "600",
                        // padding: {
                        //   xs: "0px 10px",
                        //   sm: "0px 15px",
                        //   md: "0px 20px",
                        // },
                        textAlign: "left"
                      }}>
                      {name}
                    </Typography>

                    <Box
                      sx={{
                        padding: "0px 0px 0px 5px"
                      }}
                    >
                      <Price price={price} priceSize={26} unitSize={16} priceWidth={72} />
                    </Box>

                    <Box
                      sx={{
                        padding: "0px 0px 0px 5px"
                      }}
                    >
                      <Review value={rating} />
                    </Box>

                  </Box>

                  <Box
                    sx={{
                      padding: "20px 0px 0px 0px"
                    }}
                  >
                    {user && (
                      <FavoriteButton userId={user._id} productId={_id} color={color} />
                    )}
                  </Box>



                  {/* (end)商品名、価格、評価 */}



                </Box>





                {/* (start)商品説明*/}
                <Box
                  sx={{
                    margin: "40px 0px 0px 16px",
                  }}
                >

                  {/* (start)商品コード*/}
                  <Box
                    sx={{
                    }}
                    className="row"
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "16px",
                          lg: "18px",
                        },
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#f0e8cd",
                        borderRadius: "2px",
                        border: "0.2px solid #cecece",
                        padding: "5px"

                      }}
                      className="col-4"
                    >
                      商品コード
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "16px",
                          lg: "18px",
                        },
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#fffdf7",
                        borderRadius: "2px",
                        border: "0.2px solid #cecece",
                        padding: "5px"
                      }}
                      className="col-8"
                    >
                      {_id}
                    </Typography>
                  </Box>
                  {/* (end)商品コード*/}


                  {/* (start)カラー*/}
                  <Box
                    sx={{
                    }}
                    className="row"
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "16px",
                          lg: "18px",
                        },
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#f0e8cd",
                        borderRadius: "2px",
                        border: "0.2px solid #cecece",
                        padding: "5px"

                      }}
                      className="col-4"
                    >
                      カラー
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "16px",
                          md: "16px",
                          lg: "18px",
                        },
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "#fffdf7",
                        borderRadius: "2px",
                        border: "0.2px solid #cecece",
                        padding: "5px"
                      }}
                      className="col-8"
                    >
                      {color}
                    </Typography>
                  </Box>
                  {/* (end)カラー*/}

                </Box>
                {/* (end)商品説明*/}



                {/* (start)カート追加*/}
                <Box
                  sx={{
                    margin: "40px 0px 0px 16px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "5px",
                      width: "35%"

                    }}
                  >
                    <QtyButton qty={qty} width={150} onIncrement={onIncrement} onDecrement={onDecrement} />
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "5px",
                      width: "65%"
                    }}
                  >
                    <RunButton text={"カートに入れる"} width={450} height={45} handleClick={handleAddToCart} />
                  </Box>


                </Box>
                {/* (end)カート追加*/}

              </Box>


            </Box>
            {/* (start)右パーツ */}

          </Box>
          {/* (start)タイトル~メインパーツ表示レイアウト */}

          {/* </div> */}

        </Box>
        {/* (end)タイトル~メインパーツ表示領域 */}


        <Box
          sx={{
            margin: "0px 0px 150px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // height: "100vh"   
          }}
        >


          <Box
            sx={{
              margin: "30px 0px 0px 0px",
            }}
          >
            <BackButton text="商品一覧を見る" link="/products" />
          </Box>


        </Box>

        {/* </div > */}
      </Box>
      {/* (end)背景画像表示領域 */}

      <Footer />
    </>
  )
}