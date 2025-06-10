import { useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import Header from "../components/Header";
import Footer from "../components/Footer";

import BackButton from "../components/BackButton";
import RunButton from '../components/RunButton';
import CartItem from "../components/CartItem";



import { useCart } from '../contexts/CartContext';
// import { useAuth } from '../contexts/AuthContext';
import { useUser } from "../contexts/UserContext";


export default function Complete() {
  const { user, isAuthenticated } = useUser();

  const location = useLocation();
  const { orderId, purchasedAt } = location.state || {};
  const purchaseDate = new Date(purchasedAt).toLocaleString("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  })

  const navigate = useNavigate();


  return (
    <>
      <Header />
      {/* (start)背景画像表示領域 */}
      <Box className="background-overlay">

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
            sx={{
              width: "90%",
              padding: "30px 30px",
              margin: "60px 30px",
              // maxWidth: "800px",
              // backgroundColor: "rgba(251, 245, 230, 0.8)",
              // borderRadius: "10px",
              // border: "0.2px solid #eee9d3",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: {
                xs: "center",
                // md: "flex-start"
              }
            }}
          >

            {/* (start)タイトル文 */}
            <Box
              sx={{
                width: "95%",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Box
                sx={{
                  color: "#f3ba36"
                }}
              >

                <Box
                  sx={{
                    width: "10%"
                  }}
                >
                  <CheckCircleOutlineIcon fontSize="large" />
                </Box>

                {/* <Typography
                  sx={{
                    fontSize: "40px",
                    fontWeight: "600",
                  }}
                >
                  ありがとうございます！
                </Typography> */}

                <Typography
                  sx={{
                    // fontSize: "50px",
                    fontSize: {
                      xs: "22px",
                      sm: "28px",
                      md: "36px",
                      lg: "40px",
                    },
                    fontWeight: "600",
                  }}>
                  ありがとうございます！
                </Typography>

              </Box>

              <Typography
                sx={{
                  // fontSize: "34px",
                  fontSize: {
                    xs: "18px",
                    sm: "24px",
                    md: "32px",
                    lg: "34px",
                  },
                  fontWeight: "600",
                }}
              >
                ご注文を承りました
              </Typography>
            </Box>

            {/* (end)タイトル文 */}



            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "85%",
                  md: "95%", 
                },
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row"
                },
                alignItems: {
                  xs: "flex-start",
                  sm: "flex-start",
                  md: "space-between",
                },
                justifyContent: {
                  xs: "flex-start",
                  sm: "flex-start",
                  md: "space-between"
                },
                // justifyContent: "center",
                margin: "0px 0px",
              }}
            >
              {/* (start)左パーツ */}
              <Box
                sx={{
                  // margin: "20px 0px",
                  margin: "20px 10px 0px 10px",
                  padding: "20px 20px",
                  width: { xs: "95%", md: "60%" },
                  // minWidth: "300px",
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >


                <Typography
                  sx={{
                    // fontSize: "18px",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px"
                  },
                    fontWeight: "600",
                  }}
                >
                  {`・注文番号 : ${orderId}`}
                </Typography>

                <Typography
                  sx={{
                    // fontSize: "18px",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px"
                  },
                    fontWeight: "600",
                    padding: "15px 0px 0px 0px"

                  }}
                >
                  {`・注文日 : ${purchaseDate}`}
                </Typography>

                <Typography
                  sx={{
                    // fontSize: "18px",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px"
                  },
                    fontWeight: "600",
                    padding: "15px 0px 0px 0px"

                  }}
                >
                  ・注文詳細
                </Typography>

                <Typography
                  sx={{
                    // fontSize: "18px",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px"
                  },
                    fontWeight: "500",
                    padding: "15px 0px 0px 3px",
                    textAlign: "left"

                  }}
                >
                  {` ・ユーザー名 : ${user.name}`}
                </Typography>

                <Typography
                  sx={{
                    // fontSize: "18px",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "16px",
                      lg: "18px"
                  },
                    fontWeight: "500",
                    padding: "5px 0px 0px 3px",
                    textAlign: "left"

                  }}
                >
                  {` ・メールアドレス : ${user.email}`}
                </Typography>


              </Box>
              {/* (end)左パーツ */}



              {/* (start)右パーツ */}
              <Box
                sx={{
                  width: { xs: "95%", md: "35%" },
                  // minWidth: "300px",
                  maxHeight: "420px",
                  minHeight: "150px",
                  padding: "20px 10px 20px 10px",
                  margin: "20px 10px 0px 10px",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",

                }}
              >

                <Typography
                  sx={{
                    fontSize: "20px",
                    fontSize: {
                      xs: "12px",
                      sm: "14px",
                      md: "15px",
                      lg: "18px"
                    },
                    fontWeight: "500",
                    padding: "0px 10px 0px 10px",
                    textAlign: "left"

                  }}
                >
                  こちらから注文内容を確認できます
                </Typography>


                <Box
                  component={Link}
                  to={`/user/${user.userId}/order-history`}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "0px 0px 0px 0px",
                    margin: "40px 0px 0px 0px",
                    width: "60%",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <RunButton text={"注文履歴"} width={650} />
                </Box>
              </Box>

              {/* (end)右パーツ */}


            </Box>
          </Box>
          {/* (start)タイトル~メインパーツ表示レイアウト */}

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
              margin: "0px 0px 0px 0px",
            }}
          >
            <BackButton text="ホームに戻る" link="/" />
          </Box>
        </Box>


      </Box >
      {/* (end)背景画像表示領域 */}


      <Footer />
    </>
  )
}