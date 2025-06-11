import axios from "axios";

import { useState, useEffect } from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Header from "../components/Header";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import FavoriteItem from "../components/FavoriteItem";

import { type UserContextType, useUser } from "../contexts/UserContext";

import { type ProductType } from "../types/ProductType";
import { type FavoriteType } from "../types/FavoriteType";

const ProductsUrl: string = `${import.meta.env.VITE_API_BASE_URL}/products`;



export default function Favorite() {
  const [favoriteProducts, setFavoriteProducts] = useState<Record<string, ProductType>>({});
  const { user } = useUser() as UserContextType;
  const [favorites, setFavorites] = useState<FavoriteType[]>([]);

  if (!user) {
    alert("お気に入りリストを表示するにはログインが必要です");
    return null;
  }

  useEffect(() => {
    setFavorites(user.favorites);
  }, [user]);

  useEffect(() => {
    fetchFavoriteProducts();
  }, [favorites, user]);

  async function fetchFavoriteProducts() {
    const productIds: string[] = [...new Set(favorites.map(item => item.productId))];

    try {
      const results = await Promise.all(
        productIds.map(id => axios.get(`${ProductsUrl}/${id}`))
      );

      const resultProducts: Record<string, ProductType> = {};
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
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >


            <Typography
              sx={{
                fontSize: {
                  xs: "28px",  
                  sm: "36px",  
                  md: "48px",  
                  lg: "50px",  
                },
                fontWeight: "600",
                padding: {
                  xs: "0px 10px",
                  sm: "0px 15px",
                  md: "0px 20px",
                },
              }}>
              お気に入りリスト
            </Typography>




            {/* (start)お気に入りアイテム表示部分 */}
            <Box
              sx={{
                margin: "10px 0px 10px 0px",
                width: { xs: "100%", md: "100%" },
                minWidth: "300px",
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {favorites.map((item: FavoriteType) => {
                const product: ProductType = favoriteProducts[item.productId];
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

            </Box>
            {/* (end)アイテム表示部分 */}

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