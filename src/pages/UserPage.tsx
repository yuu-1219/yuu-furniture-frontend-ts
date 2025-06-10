import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HistoryIcon from '@mui/icons-material/History';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyIcon from '@mui/icons-material/Key';

import Header from "../components/Header";
import Footer from "../components/Footer";

import BackButton from "../components/BackButton";

import { useUser } from "../contexts/UserContext";
import { useCart } from "../contexts/CartContext";


export default function UserPage() {
  const { user, logout, isAuthenticated } = useUser();
  const { resetCart } = useCart();

  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
    resetCart();
    navigate("/");
    alert("ログアウトしました");
  };

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
              margin: "30px 30px",
              // maxWidth: "800px",
              // backgroundColor: "rgba(251, 245, 230, 0.8)",
              // borderRadius: "10px",
              // border: "0.2px solid #eee9d3",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >


            <Typography
              sx={{
                // fontSize: "50px",
                fontSize: {
                  xs: "28px", 
                  sm: "36px",  
                  md: "48px",
                  lg: "56px",  
                },
                fontWeight: "600",
                // padding: "0px 50px",
                padding: {
                  xs: "0px 10px",
                  sm: "0px 20px",
                  md: "0px 50px",
                },
              }}>
              マイページ
            </Typography>

            {/* (start)メニューBOX */}
            {/* <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
              }}
            > */}


            {/* (start)メニュー一覧 */}
            <Box
              sx={{
                margin: "10px 0px 10px 0px",
                width: { xs: "100%", md: "100%" },
                height: "90%",
                minWidth: "300px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                // justifyContent: "space-around",
                // justifyContent: "flex-start",
                justifyContent: {
                  md: "flex-start",
                  lg: "center"    
                },
              }}
            >

              {/* (start)注文履歴 */}
              <Box
                component={Link}
                to={`/user/${user._id}/order-history`}
                sx={{
                  width: {
                    xs: "40%",  
                    sm: "35%",  
                    md: "25%",
                    lg: "20%"    
                  },
                  height: {
                    xs: "40%",
                    sm: "50%",  
                    md: "60%",
                    lg: "100%"    
                  },
                  // height: "100%",
                  maxWidth: "260px",
                  // minWidth: "140px",
                  maxHeight: "200px",
                  // minHeight: "100px",
                  // padding: "20px 0px",
                  padding: {
                    xs: "12px 0px",
                    sm: "16px 0px",
                    md: "20px 0px",
                  },
                  // margin: "20px",
                  margin: {
                    xs: "10px",
                    sm: "14px",
                    md: "20px",
                  },
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    height: "100%",

                  }}
                >
                  <HistoryIcon fontSize="large" />

                  <Typography
                    sx={{
                      padding: "0px 0px 0px 0px",
                      margin: "30px 0px 0px 0px",
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px"
                      },
                      fontWeight: "500",


                    }}
                  >
                    注文履歴
                  </Typography>

                </Box>
              </Box>
              {/* (end)注文履歴 */}


              {/* (start)お気に入り商品 */}
              <Box
                component={Link}
                to={`/user/${user._id}/favorite`}
                sx={{
                  width: {
                    xs: "40%",  
                    sm: "35%",   
                    md: "25%",   
                    lg: "20%"    
                  },
                  height: {
                    xs: "40%",
                    sm: "50%",  
                    md: "60%",
                    lg: "100%"    
                  },
                  // height: "100%",
                  maxWidth: "260px",
                  // minWidth: "140px",
                  maxHeight: "200px",
                  // minHeight: "160px",
                   padding: {
                    xs: "12px 0px",
                    sm: "16px 0px",
                    md: "20px 0px",
                  },
                  margin: {
                    xs: "10px",
                    sm: "14px",
                    md: "20px",
                  },
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    height: "100%",
                  }}
                >
                  <FavoriteBorderIcon fontSize="large" />

                  <Typography
                    sx={{
                      padding: "30px 0px 0px 0px",
                      // margin: "30px 0px 0px 0px",
                      // fontSize: "18px",
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "18px"
                      },
                      fontWeight: "500",

                    }}
                  >
                    お気に入り商品
                  </Typography>

                </Box>
              </Box>
              {/* (end)お気に入り商品 */}



              {/* (start)会員情報変更 */}
              <Box
                component={Link}
                to={`/user/${user._id}/info`}
                sx={{
                  width: {
                    xs: "40%",  
                    sm: "35%",  
                    md: "25%",   
                    lg: "20%"    
                  },
                  height: {
                    xs: "40%",
                    sm: "50%",  
                    md: "60%",
                    lg: "100%"    
                  },
                  // height: "100%",
                  maxWidth: "260px",
                  // minWidth: "140px",
                  maxHeight: "200px",
                  // minHeight: "160px",
                   // padding: "20px 0px",
                   padding: {
                    xs: "12px 0px",
                    sm: "16px 0px",
                    md: "20px 0px",
                  },
                  margin: {
                    xs: "10px",
                    sm: "14px",
                    md: "20px",
                  },
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    height: "100%",
                  }}
                >
                  <AccountCircleIcon fontSize="large" />

                  <Typography
                    sx={{
                      padding: "30px 0px 0px 0px",
                      fontSize: "18px",
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px"
                      },
                      fontWeight: "500",

                    }}
                  >
                    お客様情報の確認・変更
                  </Typography>

                </Box>
              </Box>
              {/* (end)会員情報変更 */}



              {/* (start)パスワード変更 */}
              <Box
                component={Link}
                to={`/user/${user._id}/password`}
                sx={{
                  width: {
                    xs: "40%",  
                    sm: "35%",  
                    md: "25%",   
                    lg: "20%"    
                  },
                  height: {
                    xs: "40%",
                    sm: "50%",  
                    md: "60%",
                    lg: "100%"    
                  },
                  maxWidth: "260px",
                  // minWidth: "140px",
                  maxHeight: "200px",
                  // minHeight: "160px",
                   padding: {
                    xs: "12px 0px",
                    sm: "16px 0px",
                    md: "20px 0px",
                  },
                  margin: {
                    xs: "10px",
                    sm: "14px",
                    md: "20px",
                  },
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                    height: "100%",
                  }}
                >
                  <KeyIcon fontSize="large" />

                  <Typography
                    sx={{
                      padding: "30px 0px 0px 0px",
                      fontSize: "18px",
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px"
                      },
                      fontWeight: "500",

                    }}
                  >
                    パスワードの変更
                  </Typography>

                </Box>
              </Box>
              {/* (end)パスワード変更 */}



            </Box>
            {/* (end)メニュー一覧 */}



            {/* </Box> */}
            {/* (end)メニューBOX */}

            {/* (start)ログアウトボタン */}
            <Box
              sx={{
                width: "100%",
                height: "10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "60px 0px 20px 0px",
                // height: "100%",
              }}
            >


              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "5px 0px 5px 0px",
                  margin: "60px 0px 20px 0px",
                  width: {
                    xs: "40%",  
                    sm: "38%",   
                    md: "30%",   
                    lg: "25%"    
                  },
                  maxWidth: "200px",
                  color: "#f36136",
                  // fontSize: "18px",
                  fontSize: {
                    xs: "14px",
                    sm: "16px",
                    md: "18px"
                  },
                  fontWeight: "500",
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",
                  cursor: "pointer"
                }}
                onClick={handleLogout}
              >
                ログアウトする
              </Typography>
            </Box>
            {/* (end)ログアウトボタン */}

          </Box>
          {/* (end)タイトル~メインパーツ表示レイアウト */}


        </Box>
        {/* (end)タイトル〜メインパーツ表示領域 */}


        {/* (start)戻るボタン */}
        <Box
          sx={{
            margin: "0px 0px 150px 0px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
        {/* (end)戻るボタン */}


        <Footer
          // sx={{
          //   height: "80px",
          //   // backgroundColor: "#f5f5f5",
          //   // textAlign: "center",
          //   // padding: "20px"
          // }}
        />

      </Box>
      {/* (end)背景画像表示領域 */}


      {/* <Footer /> */}
    </>
  )
}