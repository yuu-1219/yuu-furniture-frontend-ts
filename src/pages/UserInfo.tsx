import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from "../components/Header";
import Footer from "../components/Footer";

import BackButton from "../components/BackButton";
import RunButton from '../components/RunButton';
import EmailForm from "../components/EmailForm";
import NameForm from "../components/NameForm";

import { type UserContextType, useUser } from "../contexts/UserContext";
import { type CartContextType, useCart } from "../contexts/CartContext";


export default function UserInfo() {
  const { user, changeUserInfo, deleteUserInfo } = useUser() as UserContextType;
  if(!user || !user.name || !user.email) return null;

  const { deleteCart } = useCart() as CartContextType;
  const navigate = useNavigate();

  const [name, setName] = useState<string>(user.name);
  const [email, setEmail] = useState<string>(user.email);

  if (!user) {
    alert("会員情報変更ページを表示するにはログインが必要です");
    return null;
  }

  const handleOnChange = async ()=> {
    if(!user._id) return;

    changeUserInfo(user._id, name, email);
    navigate(`/user/${user._id}`); 
    alert("会員情報を変更しました"); 
  };

  const handleDelete = async () => {
    if(!user._id) return null;

    deleteCart(user._id);
    deleteUserInfo(user._id);
    navigate("/");
    alert("アカウントを削除しました"); 
  }


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
              width: { xs: "95%", md: "70%" },
              padding: "30px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start"

            }}
          >


            <Typography
              sx={{
                fontSize: {
                  xs: "28px",  
                  sm: "36px",  
                  md: "40px",  
                  lg: "50px",  
                },
                fontWeight: "600",
                padding: {
                  xs: "0px 10px",
                  sm: "0px 20px",
                  md: "0px 20px",
                },
              }}>
              お客様情報の確認・変更
            </Typography>



              {/* (start)入力フォーム */}
              <Box
                sx={{
                  width: "100%",
                  padding: "30px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",

                }}
              >

                {/* 名前 */}
                <Box
                  sx={{
                    width: "80%",
                    padding: "10px 0px 0px 0px"
                  }}
                >
                  <NameForm name={name} setName={setName}/>
                </Box>

                {/* メールアドレス */}
                <Box
                  sx={{
                    width: "80%",
                    padding: "10px 0px 0px 0px"
                  }}
                >
                  <EmailForm email={email} setEmail={setEmail}/>
                </Box>


                {/* 実行ボタン */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "30px 0px",
                    width: "35%",
                  }}
                >
                  <RunButton text={"変更する"} handleClick={handleOnChange} />
                </Box>

                {/* アカウント削除リンク */}
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "30px 0px",
                    width: "35%",
                    color: "#f36136",
                    fontSize: {
                      xs: "12px",  
                      sm: "14px", 
                      md: "16px",  
                      lg: "18px",  
                    },
                    fontWeight: "500",
                    cursor: "pointer"
                  }}
                  onClick={handleDelete}
                >
                  アカウントを削除
                </Typography>

              </Box>
              {/* (end)入力フォーム*/}

          </Box>
          {/* (end)タイトル~メインパーツ表示レイアウト */}

        </Box>
        {/* (end)タイトル~メインパーツ表示領域 */}


        {/* (start)戻るボタン */}
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
              margin: "0px 0px 0px 0px",
            }}
          >
            <BackButton text="マイページに戻る" link={`/user/${user._id}`} />
          </Box>

        </Box>
        {/* (end)戻るボタン */}

      </Box >
      {/* (end)背景画像表示領域 */}

      <Footer />
    </>
  )
}