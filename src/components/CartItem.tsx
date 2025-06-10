// import React, { useState } from 'react';
// import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Price from "./Price";
import QtyButton from './QtyButton';

// import { products } from "../constants/products";

import { useCart } from "../contexts/CartContext";
import { useUser } from "../contexts/UserContext";


export default function CartItem({ product, productId, color, qty }) {
    // const fetchProductsUrl = "http://localhost:3000/products";

    // const [product, setProduct] = useState([]);

    const { user } = useUser();
    const { cart, removeFromCart, incrementItem, decrementItem, clearCart } = useCart();

    // const product = products.find(c => c._id === productId);
    const { name, price, img } = product;

    // const cartItem = cart.items.find(c => c.productId === productId && c.color === color);
    // const qty = cartItem.quantity;


    // useEffect(() => {
    //     fetchProduct();
    // }, [productId]);

    // async function fetchProduct() {
    //     const productResult = await axios.get(`${fetchProductsUrl}/${productId}`);
    //     console.log(productResult);
    //     setProduct(productResult.data);
    // }


    const onIncrement = () => {
        incrementItem(productId, color, price);
    }
    const onDecrement = () => {
        decrementItem(productId, color, price);
    }

    const onDelete = () => {
        alert("商品を削除しました");
        removeFromCart(productId, color, price);
    }



    return (
        <Box
            sx={{

                width: "100%",
                minWidth: "300px",
                // maxWidth: "800px",
                minHeight: "200px",
                padding: "20px",
                margin: "0px 0px 20px 0px",
                // backgroundColor: "rgba(251, 245, 230, 0.8)",
                // borderRadius: "6px",
                // border: "0.2px solid #eee9d3",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",

            }}>

            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >

                {/* (start)商品説明 */}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                >


                    {/* 商品画像 */}
                    <img
                        src={img}
                        alt={name}
                        style={{
                            width: "40%",
                            // maxWidth: "250px",
                            height: "auto",
                            // maxHeight: "150px",
                            objectFit: "cover",
                            aspectRatio: "4 / 3"
                        }}
                    />

                    <Box
                        sx={{
                            width: "60%",
                            padding: "2px 0px 0px 25px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                        }}
                    >

                        {/* 商品タイトル */}
                        <Typography
                            sx={{
                                // fontSize: "18px",
                                fontSize: {
                                    xs: "14px",
                                    sm: "16px",
                                    md: "18px",
                                    lg: "20px"
                                },
                                fontWeight: "600",
                            }}
                        >
                            {name}
                        </Typography>

                        {/* 商品コード */}
                        <Typography
                            sx={{
                                padding: "15px 0px 0px 2px",
                                fontSize: {
                                    xs: "12px",
                                    sm: "14px",
                                    md: "16px"
                                },
                                textAlign: "left"

                            }}
                        >
                            {`商品コード : ${productId}`}
                        </Typography>

                        {/* カラー */}
                        <Typography
                            sx={{
                                padding: "5px 0px 0px 2px",
                                fontSize: {
                                    xs: "12px",
                                    sm: "14px",
                                    md: "16px"
                                },

                            }}
                        >
                            {`カラー : ${color}`}
                        </Typography>

                        <Box
                            sx={{
                                padding: "5px 0px 0px 0px"

                            }}
                        >

                            <Price price={price} priceWidth={43} priceSize={20} unitSize={14} />
                        </Box>


                    </Box>

                </Box>
                {/* (end)商品説明 */}


                {/* (start)小計 */}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: 'baseline',
                        justifyContent: "space-between",
                        margin: "20px 0px 0px 0px",
                        padding: "10px 50px 0px 30px",
                        // gap: 0.5
                    }}
                >

                    {/* 数量ボタン */}
                    <Box
                        sx={{
                            // width: "10%",
                            width: { 
                                xs: "60%", 
                                sm: "45%", 
                                md: "30%" 
                            },
                        }}
                    >
                        <QtyButton qty={qty} onIncrement={onIncrement} onDecrement={onDecrement} />

                    </Box>



                     {/* (start) 小計 */}
                    <Box
                        sx={{
                            // width: "40%",
                            width: {
                                xs: "80%",
                                sm: "50%",
                                md: "55%",
                            },
                            // maxwidth: "20px",
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "center",
                            margin: "10px 0px 0px 0px"
                        }}
                    >
                        <Typography
                            sx={{
                                // width: "20%",
                                width: {
                                    xs: "20%",
                                    sm: "30%",
                                    md: "30%",
                                },
                                fontWeight: "200",
                                // fontSize: "16px",
                                fontSize: {
                                    xs: "12px",
                                    sm: "14px",
                                    md: "16px"
                                },
                                textAlign: "right",
                                padding: "0px",
                                margin: "0px 0px 0px 0px"
                            }}
                        >
                            小計
                        </Typography>

                        <Box
                            sx={{
                                // width: "70%",
                                width: {
                                    xs: "70%",
                                    sm: "70%",
                                    md: "70%",
                                },
                                padding: "0px",
                                margin: "0px",
                            }}
                        >

                            <Price price={price * qty} priceWidth={60} priceSize={24} unitSize={16} />
                        </Box>
                    </Box>
                    {/* (end) 小計 */}


                    {/* 削除ボタン */}
                    <Box
                        sx={{
                            width: "10%",
                            width: {
                                xs: "1%",
                                sm: "1%",
                                md: "1%",
                            },
                            cursor: "pointer",
                            margin: "10px 0px 0px 0px"
                        }}
                        onClick={onDelete}
                    >
                        <DeleteForeverIcon 
                        sx = {{
                            // fontSize: {
                            //     xs: "20",
                            //     sm: "28",
                            //     md: "32",
                            //     lg: "36"
                            // }
                        }}/>

                    </Box>


                </Box>
                {/* (end)小計 */}

            </Box>


        </Box>
    )

}