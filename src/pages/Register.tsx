import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from "../components/Header";
import Footer from "../components/Footer";

import BackButton from "../components/BackButton";
import RunButton from '../components/RunButton';
import EmailForm from "../components/EmailForm";
import PasswordForm from "../components/PasswordForm";
import NameForm from "../components/NameForm";

// import { useAuth } from '../contexts/AuthContext';
import { useUser } from "../contexts/UserContext";
import { useCart } from '../contexts/CartContext';


export default function Register() {
  const { register } = useUser();
  const { cart, registerCart } = useCart();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (password.length <= 4) {
      alert("パスワードは4文字以上で入力してください。");
      setPassword("");
      return;
    }
    const newUser = {
      name,
      email,
      // password,
      orders: [],
      favorites: []
    };
    const registeredUser = await register(newUser, password);

    // カート情報を作成
    const newCart = {
      ...cart,
      userId: registeredUser._id,
      updatedAt: new Date().toISOString()
    };
    await registerCart(newCart);
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
              会員登録
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
              会員登録
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
                  padding: "20px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",

                }}
              >

                <Box
                  sx={{
                    width: "80%",
                    padding: "10px 0px 0px 0px"
                  }}
                >
                  <NameForm name={name} setName={setName} />
                </Box>

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
                    width: "35%",
                  }}
                >
                  <RunButton text={"登録する"} width={450} handleClick={handleRegister} />
                </Box>
              </Box>
              {/* (end)ログインBox */}



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
              margin: "0px 0px 60px 0px",
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