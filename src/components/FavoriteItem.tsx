import React, { useState } from 'react';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import Price from "./Price";

import RunButton from './RunButton';
import QtyButton from './QtyButton';

// import { products } from "../constants/products";

import { useUser } from '../contexts/UserContext';
import { useCart } from '../contexts/CartContext';


export default function FavoriteItem({ product, productId, color }) {
    const { user, removeFavorite } = useUser();
    // const { favorites } = user;

    const { addToCart } = useCart();

    // const product = products.find(c => c.productId === productId);
    // if (!product) return null;
    const { name, price, img } = product;

    const [qty, setQty] = useState(1);
    const onIncrement = () => setQty((prev) => prev + 1);
    const onDecrement = () => setQty((prev) => Math.max(1, prev - 1));

    const handleAddToCart = () => {
        // if (!isAuthenticated) {
        //   navigate("/login");
        //   return;
        // }

        addToCart(productId, color, qty, price);
        setQty(1);
        alert("カートに追加されました");
    };

    const onDelete = () => {
        alert("商品を削除しました");
        removeFavorite(user._id, productId, color);
    };



    return (
        <Box
            sx={{
                width: "100%",
                minWidth: "100px",
                minHeight: "200px",
                padding: "10px",
                margin: "0px 0px 0px 0px",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",

            }}>

            {/* <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                }}
            > */}



            {/* (start)お気に入り商品 */}
            {/* <Box
                    sx={{
                        padding: "0px",
                        margin: "0px 0px 0px 20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                    }}
                > */}

            {/* (start)お気に入り商品 */}
            <Box
                sx={{
                    margin: "0px 0px 0px 20px",
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        sm: "column",
                        md: "row"
                    },
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    // alignItems: {
                    //     md: "center",
                    //     lg: "flex-start"
                    // },
                    justifyContent: "space-between",
                }}
            >

                {/* (start)商品概要 */}
                <Box
                    sx={{
                        padding: "0px",
                        margin: "20px 0px 0px 0px",
                        // width: "60%",
                        width: {
                            sm: "100%",
                            md: "60%",
                        },
                        display: "flex",
                        alignItems: "space-between",
                        justifyContent: "flex-start",
                    }}
                >

                    {/* (start)商品画像 */}
                    <Box
                        sx={{
                            width: "30%",
                        }}
                    >
                        <img
                            src={img}
                            alt={name}
                            style={{
                                width: "100%",
                                // maxWidth: "250px",
                                height: "auto",
                                // maxHeight: "150px",
                                objectFit: "cover",
                                aspectRatio: "4 / 3"
                            }}
                        />
                    </Box>
                    {/* (end)商品画像 */}



                    {/* (start)商品説明 */}
                    {/* <Box
                            sx={{
                                width: "70%",
                            }}
                        > */}

                    {/* (start)商品説明 */}
                    <Box
                        sx={{
                            width: "70%",
                            height: "100%",
                            padding: "2px 0px 0px 25px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                        }}
                    >

                        {/* 商品名 */}
                        <Typography
                            sx={{
                                // fontSize: "18px",
                                fontSize: {
                                    xs: "16px",
                                    sm: "18px",
                                    md: "20px",
                                    lg: "22px"
                                  },
                                fontWeight: "600",
                            }}
                        >
                            {name}
                        </Typography>


                        {/* 商品コード */}
                        <Typography
                            sx={{
                                padding: "15px 0px 0px 3px",
                                // fontSize: "14px",
                                fontSize: {
                                    xs: "12px",
                                    sm: "14px",
                                    md: "16px"
                                  },
                                fontWeight: "500",
                                textAlign: "left"

                            }}
                        >
                            {`商品コード : ${productId}`}
                        </Typography>

                        {/* カラー */}
                        <Typography
                            sx={{
                                padding: "5px 0px 0px 3px",
                                // fontSize: "14px",
                                fontSize: {
                                    xs: "12px",
                                    sm: "14px",
                                    md: "16px"
                                  },
                                fontWeight: "500",

                            }}
                        >
                            {`カラー : ${color}`}
                        </Typography>

                        {/* 価格 */}
                        <Box
                            sx={{
                                padding: "5px 0px 0px 0px"

                            }}
                        >

                            <Price price={price} priceWidth={43} priceSize={20} unitSize={14} />

                        </Box>

                    </Box>
                    {/* (end)商品説明 */}

                    {/* </Box> */}


                </Box>
                {/* (end)商品概要 */}




                {/* (start)商品操作 */}
                <Box
                    sx={{
                        // width: "40%",
                        width: {
                            sm: "100%",
                            md: "40%",
                        },
                        display: "flex",
                        alignItems: "flex-end",
                        // justifyContent: "flex-end",
                        marginTop: "auto",
                    }}
                >

                    {/* (start)最下部パーツ */}
                    <Box
                        sx={{
                            width: "100%",
                            padding: "0px",
                            margin: "0px 0px 10px 0px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxSizing: "border-box",
                            flexWrap: "wrap",
                        }}
                    >

                        {/* <Box
                                sx={{
                                    margin: "40px 0px 0px 16px",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            > */}

                        {/* 数量ボタン */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                padding: "5px",
                                // width: "30%"
                                width: { xs: "40%", sm: "35%", md: "30%" },
                                px: 1

                            }}
                        >
                            <QtyButton qty={qty} width={150} onIncrement={onIncrement} onDecrement={onDecrement} />
                        </Box>

                        {/* カートボタン */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                padding: "5px",
                                // width: "60%"
                                width: { xs: "50%", sm: "55%", md: "60%" },
                                px: 1
                            }}
                        >
                            <RunButton text={"カートに入れる"} width={250} height={45} handleClick={handleAddToCart} />
                        </Box>

                        {/* 削除ボタン */}
                        <Box
                            sx={{
                                // width: "10%",
                                width: { xs: "10%", sm: "10%" },
                                cursor: "pointer"
                                // display: "block"
                            }}
                            onClick={onDelete}
                        >
                            <DeleteForeverIcon 
                            fontSize="medium"
                          
                         />
                        </Box>


                        {/* </Box> */}
                    </Box>
                    {/* (end)最下部パーツ */}

                </Box>
                {/* (end)商品操作 */}

            </Box>
            {/* <Divider sx={{ width: '100%', my: 1 }} /> */}

            {/* </Box > */}
            {/* (end)お気に入り商品 */}



            {/* </Box> */}
        </Box>
    )
}
