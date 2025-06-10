import axios from "axios";

import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Header from "../components/Header";
import Footer from "../components/Footer";

import PaginationButton from "../components/PagingButton";
import BackButton from "../components/BackButton";
import Price from '../components/Price';
import FavoriteItem from "../components/FavoriteItem";

// import { products } from "../constants/products";

import { useUser } from "../contexts/UserContext";

const ProductsUrl = `${import.meta.env.VITE_API_BASE_URL}/products`;


export default function Favorite() {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const { user, isAuthenticated } = useUser();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(user.favorites);
  }, [user]);

  useEffect(() => {
    fetchFavoriteProducts();
  }, [favorites, user]);

  async function fetchFavoriteProducts() {
    // const userCart = await getCart(user._id);
    const productIds = [...new Set(favorites.map(item => item.productId))];

    try {
      const results = await Promise.all(
        productIds.map(id => axios.get(`${ProductsUrl}/${id}`))
      );

      const resultProducts = {};
      results.forEach(res => {
        resultProducts[res.data._id] = res.data;
      });

      setFavoriteProducts(resultProducts);
      
    } catch (e) {
      alert("商品データ取得中にエラーが発生しました");
      console.error(e);

    }

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

            {/* <h1 class="title">
              お気に入り商品
            </h1> */}

            <Typography
              sx={{
                // fontSize: "50px",
                fontSize: {
                  xs: "28px",  // モバイル
                  sm: "36px",  // タブレット
                  md: "48px",  // 中画面
                  lg: "50px",  // デスクトップ
                },
                fontWeight: "600",
                // padding: "0px 50px",
                padding: {
                  xs: "0px 10px",
                  sm: "0px 15px",
                  md: "0px 20px",
                },
              }}>
              お気に入りリスト
            </Typography>


            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            > */}


            {/* (start)お気に入りアイテム表示部分 */}
            <Box
              sx={{
                margin: "10px 0px 10px 0px",
                width: { xs: "100%", md: "100%" },
                minWidth: "300px",
                // backgroundColor: "rgba(251, 245, 230, 0.8)",
                // borderRadius: "10px",
                // border: "0.2px solid #eee9d3",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >

              {/* {favorites.length === 0 ? (
                  <Typography>お気に入り商品はありません</Typography>
                ) : (
                   */}
              {favorites.map((item) => {
                const product = favoriteProducts[item.productId];
                if (!product) return null;
                return (

                  <>

                    <Box
                      sx={{
                        backgroundColor: "rgba(251, 245, 230, 0.8)",
                        borderRadius: "6px",
                        border: "0.2px solid #eee9d3",
                        margin: "10px 0px 10px 0px",
                      }}
                    >

                      <FavoriteItem product={product} productId={item.productId} color={item.color} />



                    </Box>
                    <Divider sx={{ width: '100%', my: 1 }} />

                  </>
                )
              })}


              {/* )
             } */}

            </Box>
            {/* (end)アイテム表示部分 */}

            {/* </Box> */}

          </Box>
          {/* (end)タイトル~メインパーツ表示レイアウト */}


        </Box>
        {/* (end)タイトル~メインパーツ表示領域 */}


        {/* (start)戻るボタン */}
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
            <BackButton text="マイページに戻る" link={`/user/${user._id}`} />
          </Box>
        </Box>
        {/* (end)戻るボタン */}


      </Box>
      {/* (end)背景画像表示領域 */}


      <Footer />
    </>
  )
}