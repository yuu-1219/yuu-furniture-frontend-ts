import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from "../components/Header";
import Footer from "../components/Footer";

import BackButton from "../components/BackButton";
import RunButton from '../components/RunButton';
import ProductNameForm from "../components/ProductNameForm";
import PriceForm from "../components/PriceForm";
import ProductImgForm from "../components/ProductImgForm";
import ColorForm from "../components/ColorForm";
import DescriptionForm from "../components/DescriptionForm";
import StockForm from "../components/StockForm";
import CategoryForm from "../components/CategoryForm";
import RatingForm from "../components/RatingForm";

// import { type CategoryType } from "../constants/categories";
import { type ProductType } from "../types/ProductType";

// import { type UserContextType, useUser } from "../contexts/UserContext";
// import { type CartContextType, useCart } from "../contexts/CartContext";

const ProductsUrl: string = `${import.meta.env.VITE_API_BASE_URL}/products`;


export default function RegisterPruduct() {
    const navigate = useNavigate();

    const [productName, setProductName] = useState<string>("");
    const [productImg, setProductImg] = useState<File | null>(null);
    const [price, setPrice] = useState<number | null>(null);
    const [description, setDescription] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [stock, setStock] = useState<number | null>(null);
    const [category, setCategory] = useState<string>("");
    const [rating, setRating] = useState<number | null>(null);




    const handleRegisterProduct = async () => {
        if (productName.trim() === "") {
            alert("商品名を入力してください");
            setProductName("");
            return;
        }
        if (productImg === null) {
            alert("商品画像を添付してください");
            setProductImg(null);
            return;
        }
        if (price === null) {
            alert("商品価格を入力してください");
            setPrice(null);
            return;
        }
        if (description.trim() === "") {
            alert("商品説明を入力してください");
            setDescription("");
            return;
        }
        if (color.trim() === "") {
            alert("カラーを入力してください");
            setColor("");
            return;
        }
        if (stock === null) {
            alert("在庫数を入力してください");
            setStock(null);
            return;
        }
        if (category === "") {
            alert("カテゴリを選択してください");
            setCategory("");
            return;
        }
        if (rating === null) {
            alert("評価を入力してください");
            setRating(null);
            return;
        }

        // const newProduct: Omit<ProductType, "_id"> = {
        //     name: productName,
        //     price,
        //     img,
        //     description,
        //     color,
        //     stock,
        //     category,
        //     rating,
        // };

        const formData = new FormData();
        formData.append("img", productImg);
        formData.append("name", productName);
        formData.append("price", String(price));
        formData.append("description", description);
        formData.append("color", color);
        formData.append("stock", String(stock));
        formData.append("category", category);
        formData.append("rating", String(rating));

        try {
            await axios.post(`${ProductsUrl}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
        } catch (e: unknown) {
            if (axios.isAxiosError(e)) {
                const message = e.response?.data?.message || "商品情報登録中にエラーが発生しました";
                alert(message);
            }
        }

        navigate("/products");
        alert("商品情報が登録されました");
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
                            商品情報の登録
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

                            {/* 商品名 */}
                            <Box
                                sx={{
                                    width: "80%",
                                    padding: "10px 0px 0px 0px"
                                }}
                            >
                                <ProductNameForm productName={productName} setProductName={setProductName} />
                            </Box>

                            {/* 商品価格 */}
                            <Box
                                sx={{
                                    width: "80%",
                                    padding: "10px 0px 0px 0px"
                                }}
                            >
                                <PriceForm price={price} setPrice={setPrice} />
                            </Box>

                            {/* 商品画像 */}
                            <Box
                                sx={{
                                    width: "80%",
                                    padding: "10px 0px 0px 0px"
                                }}
                            >
                                <ProductImgForm productImg={productImg} setProductImg={setProductImg} />
                            </Box>

                            {/* 商品説明 */}
                            <Box
                                sx={{
                                    width: "80%",
                                    padding: "10px 0px 0px 0px"
                                }}
                            >
                                <DescriptionForm description={description} setDescription={setDescription} />
                            </Box>

                            {/* 商品カラー */}
                            <Box
                                sx={{
                                    width: "80%",
                                    padding: "10px 0px 0px 0px"
                                }}
                            >
                                <ColorForm color={color} setColor={setColor} />
                            </Box>

                            {/* 在庫数 */}
                            <Box
                                sx={{
                                    width: "80%",
                                    padding: "10px 0px 0px 0px"
                                }}
                            >
                                <StockForm stock={stock} setStock={setStock} />
                            </Box>

                            {/* カテゴリ */}
                            <Box
                                sx={{
                                    width: "80%",
                                    padding: "10px 0px 0px 0px"
                                }}
                            >
                                <CategoryForm category={category} setCategory={setCategory} />
                            </Box>

                            {/* 評価 */}
                            <Box
                                sx={{
                                    width: "80%",
                                    padding: "10px 0px 0px 0px"
                                }}
                            >
                                <RatingForm rating={rating} setRating={setRating} />
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
                                <RunButton text={"登録する"} handleClick={handleRegisterProduct} />
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
                            margin: "0px 0px 0px 0px",
                        }}
                    >
                        <BackButton text="ホームに戻る" link={`/`} />
                    </Box>

                </Box>
                {/* (end)戻るボタン */}

            </Box >
            {/* (end)背景画像表示領域 */}

            <Footer />
        </>
    )
}