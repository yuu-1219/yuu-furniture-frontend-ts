import { useState, useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from "../components/Header";
import Footer from "../components/Footer";

import BackButton from "../components/BackButton";
import RunButton from '../components/RunButton';
import EmailForm from "../components/EmailForm";
import PasswordForm from "../components/PasswordForm";

// import { useAuth } from '../contexts/AuthContext';
import { useUser } from "../contexts/UserContext";
import { useCart } from '../contexts/CartContext';



export default function Login() {
  const { id } = useParams();

  const { user, login, isAuthenticated } = useUser();
  const { cart, getCart } = useCart();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const onClickRegister = () => {
    navigate("/register");
  };

  const onClickLogin = async () => {
    const loginUser = await login(email, password);
    await getCart(loginUser._id);
    navigate("/");
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
            flexWrap: "wrap",
            justifyContent: "center",
            padding: "60px 0px 0px 0px",
            margin: "0px 0px 0px 0px",
          }}
        >

          {/* (start)タイトル~メインパーツ表示レイアウト */}
          <Box
            sx={{
              margin: "40px 0px 0px 0px",
              width: { xs: "100%", md: "70%" },
              padding: "30px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start"

            }}
          >

            {/* <h1 class="title">
              ログイン
            </h1> */}

            <Typography
              sx={{
                // fontSize: "50px",
                fontSize: {
                  xs: "28px",
                  sm: "36px",
                  md: "40px",
                  lg: "50px",
                },
                fontWeight: "600",
                // padding: "0px 50px",
                padding: {
                  xs: "0px 30px",
                  sm: "0px 40px",
                  md: "0px 50px",
                },
              }}>
              ログイン
            </Typography>

            {/* (start)フォーム */}
            <Box
              sx={{
                margin: "0px 0px",
                width: { xs: "100%", md: "100%" },
                padding: "10px 20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"

              }}
            >


              {/* (start)ログインBox */}
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "850px",
                  // padding: "20px 20px",
                  padding: "20px 20px 0px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",

                }}
              >

                {/* <Box
                  sx={{
                    margin: "0px 0px 10px 0px",
                  }}
                >
                  <h3>登録済みのお客様</h3>
                </Box> */}

                <Typography
                  sx={{
                    margin: "0px 0px 10px 0px",
                    fontSize: {
                      xs: "22px",
                      sm: "26px",
                      md: "28px",
                      lg: "28px",
                    },
                    fontWeight: "500",
                  }}>
                  登録済みのお客様
                </Typography>

                <Box
                  sx={{
                    width: "80%",
                    padding: "10px 0px 0px 0px"
                  }}
                >
                  <EmailForm email={email} setEmail={setEmail} />
                </Box>

                <Box
                  sx={{
                    width: "80%",
                    padding: "10px 0px 0px 0px"
                  }}
                >
                  <PasswordForm text={"パスワード"} password={password} setPassword={setPassword} />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "30px 0px",
                    width: "60%"
                  }}
                >
                  <RunButton text={"ログインする"} width={450} handleClick={onClickLogin} />
                </Box>
              </Box>
              {/* (end)ログインBox */}


              {/* (start)会員登録Box */}
              <Box
                sx={{
                  margin: "30px 0px 0px 0px",
                  padding: "20px 20px 0px 20px",
                  width: "100%",
                  maxWidth: "850px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",
                }}
              >
                {/* <h3>未登録のお客様</h3> */}

                <Typography
                  sx={{
                    margin: "0px 0px 10px 0px",
                    fontSize: {
                      xs: "22px",
                      sm: "26px",
                      md: "28px",
                      lg: "28px",
                    },
                    fontWeight: "500",
                  }}>
                  未登録のお客様
                </Typography>

                <Box
                  // component={Link}
                  // to="/register"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "30px 0px",
                    width: "60%",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <RunButton text={"会員登録する"} width={450} handleClick={onClickRegister} />
                </Box>
              </Box>
              {/* (end)会員登録Box */}

            </Box>
            {/* (end)フォーム */}


          </Box>
          {/* (end)タイトル~メインパーツ表示レイアウト */}


        </Box>
        {/* (end)タイトル~メインパーツ表示領域 */}


        <Box
          sx={{
            margin: "0px 0px 60px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >


          <Box
            sx={{
              margin: "0px 0px 90px 0px",
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