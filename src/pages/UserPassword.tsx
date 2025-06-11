import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from "../components/Header";
import Footer from "../components/Footer";

import BackButton from "../components/BackButton";
import RunButton from '../components/RunButton';
import PasswordForm from "../components/PasswordForm";

import { type UserContextType, useUser } from "../contexts/UserContext";


export default function UserPassword() {
    const { user, changeUserPassword } = useUser() as UserContextType;
    const navigate = useNavigate();

    const [newPassword, setNewPassword] = useState<string>("");
    const [verifiedPassword, setverifiedPassword] = useState<string>("");

    if (!user) {
        alert("パスワード変更ページを表示するにはログインが必要です");
        return null;
    }



    const handleOnChange = async () => {
        if (!user._id) {
            alert("ユーザー情報が見つかりませんでした");
            return;
        }

        if (newPassword === verifiedPassword) {
            if (newPassword.length > 4) {
                changeUserPassword(user._id, newPassword);
                navigate(`/user/${user._id}`);
                alert("パスワードを変更しました");
            } else {
                alert("パスワードは4文字以上で入力してください。");
                setNewPassword("");
                setverifiedPassword("");
            }
        } else {
            alert("入力されたパスワードが一致しません");
            setverifiedPassword("");
        }
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
                            width: { xs: "95%", md: "80%" },
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
                            パスワードの変更
                        </Typography>



                        {/* (start)入力フォーム */}
                        <Box
                            sx={{
                                width: "100%",
                                padding: "30px 0px",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "rgba(251, 245, 230, 0.8)",
                                borderRadius: "10px",
                                border: "0.2px solid #eee9d3",

                            }}
                        >


                            {/* 新しいパスワード */}
                            <Box
                                sx={{
                                    width: "90%",
                                    padding: "10px 0px 0px 0px"
                                }}
                            >
                                <PasswordForm text={"新しいパスワード"} password={newPassword} setPassword={setNewPassword} />
                            </Box>


                            {/* 確認用パスワード */}
                            <Box
                                sx={{
                                    width: "90%",
                                    padding: "10px 0px 0px 0px"
                                }}
                            >
                                <PasswordForm text={"新しいパスワード(確認用)"} password={verifiedPassword} setPassword={setverifiedPassword} />
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
                                <RunButton text={"変更する"}  handleClick={handleOnChange} />
                            </Box>


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
                            margin: "0px 0px 60px 0px",
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