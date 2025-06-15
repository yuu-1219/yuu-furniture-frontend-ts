import '../styles/Home.css'

import { type CSSProperties, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";


import { Swiper, SwiperSlide } from 'swiper/react';
// import type { Swiper as SwiperType } from 'swiper'; 
// import { type SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryCard from '../components/CategoryCard';

import { type ProductType } from "../types/ProductType";

const ProductsUrl: string = `${import.meta.env.VITE_API_BASE_URL}/products`;

export default function Home() {
  const [topProducts, setTopProducts] = useState<ProductType[]>([]);

  const rankColor = [
    "rgba(252, 211, 94, 0.9)",
    "rgba(207, 207, 207, 0.9)",
    "rgba(216, 151, 51, 0.9)",
    "rgba(218, 197, 127, 0.9)",
    "rgba(218, 197, 127, 0.9)",
  ];

  useEffect(() => {
    fetchTopProducts();
  }, []);

  async function fetchTopProducts() {
    try {
      const resultProducts = await axios.post(`${ProductsUrl}/ranking`);
      if (JSON.stringify(resultProducts.data) !== JSON.stringify(topProducts)) {
        setTopProducts(resultProducts.data);
      }
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "商品データの取得中にエラーが発生しました";
        alert(message);
      }
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
              padding: "20px 0px",
              margin: "20px 20px 150px 20px",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row",
              },
              justifyContent: "center",
              alignItems: {
                xs: "center",
                md: "flex-start",
              }
            }}
          >

            {/* カテゴリー一覧 */}
            <Box
              sx={{
                width: {
                  xs: "100%",
                  md: "25%",
                },
                order: {
                  xs: 2,
                  md: 1
                },
              }}
            >
              <CategoryCard />

            </Box>


            {/* (start)タイトル文、カルーセル */}
            <Box
              sx={{
                width: {
                  xs: "100%",
                  sm: "85%",
                  md: "70%",
                },
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                order: {
                  xs: 1,
                  md: 2
                },
              }}
            >
              {/* (start)タイトル文 */}
              <Box
                sx={{
                  width: "100%",
                  margin: {
                    xs: "0px 0px 20px 0px",
                    sm: "0px 0px 30px 0px",
                    md: "5px 5px 5px 50px",
                  },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start"
                }}
              >

                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px",
                      sm: "26px",
                      md: "30px",
                      lg: "38px",
                    },
                    fontWeight: "600",
                    textAlign: "left"
                  }}>
                  ミニマルな美学を、あなたの部屋に
                </Typography>

                <Typography
                  sx={{
                    // fontSize: "50px",
                    fontSize: {
                      xs: "12px",
                      sm: "15px",
                      md: "17px",
                      lg: "18px",
                    },
                    fontWeight: "500",
                    padding: {
                      xs: "10px 5px",
                      sm: "10px 5px",
                      md: "10px 5px",
                    },
                    textAlign: "left"
                  }}>
                  機能美と洗練されたデザインが融合した家具コレクション。
                  <Box component="br"></Box>
                  忙しい日常に、静かな美しさを取り入れませんか？
                </Typography>



                <Typography
                  sx={{
                    color: "#6c6c6c",
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "20px",
                      lg: "24px",
                    },
                    fontWeight: "600",
                    padding: {
                      xs: "25px 0px 0px 10px",
                      sm: "25px 0px 0px 10px",
                      md: "35px 0px 0px 10px",
                    },
                    background: "linear-gradient(to right, #fbad59, #f9b142, #ebc235)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  人気商品ランキング
                </Typography>

                {/* (start)カルーセル */}
                <Box sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                  },
                  maxWidth: "700px",
                  margin: {
                    xs: "5px 0px 20px 0px",
                    sm: "5px 0px 30px 0px",
                    md: "5px 45px 5px 0px",
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                }}
                >

                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                      aspectRatio: "8 / 5",
                      borderRadius: "6px",
                      border: "0.1px solid #eee9d3",
                      objectFit: 'cover',
                      display: "flex",
                      justifyContent: "flex-end"
                    } as CSSProperties & Record<string, string>}
                  >
                    {topProducts.map((product: ProductType, index: number) => {
                      return (
                        <SwiperSlide key={index}>
                          <Box
                            component={Link}
                            to={`/products/${product._id}`}
                            state={{ product }}
                            sx={{
                              width: "100%",
                              height: "100%",
                              textDecoration: "none",
                              color: "inherit",
                              display: "flex",
                              justifyContent: "flex-end"
                            }}
                          >
                            {/* 商品画像 */}
                            <img
                              src={product.img}
                              alt={product.name}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: 'cover',
                              }}
                            />

                            {/* ランキング */}
                            <Box
                              sx={{
                                position: "absolute",
                                top: 8,
                                left: 8,
                                backgroundColor: rankColor[index],
                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: {
                                  xs: "12px",
                                  md: "14px"
                                },
                                padding: "3px 10px 3px 10px",
                                borderRadius: "10px",
                              }}
                            >
                              {`${index + 1}位`}
                            </Box>

                            {/* 商品名 */}
                            <Box
                              sx={{
                                position: "absolute",
                                bottom: 0,
                                width: "100%",
                                backgroundColor: "rgba(192, 188, 156, 0.9)",
                                color: "rgba(240, 239, 238  )",
                                padding: "8px 0px 8px 16px",
                                textAlign: "right",
                                fontSize: {
                                  xs: "12px",
                                  sm: "16px",
                                  md: "18px"
                                },
                                fontWeight: "600",
                                display: "flex",
                                alignItems: "center",
                                gap: 1
                              }}
                            >
                              {product.name}
                            </Box>

                          </Box>
                        </SwiperSlide>
                      )
                    })}

                  </Swiper>
                </Box>
                {/* (end)カルーセル */}


              </Box>
              {/* (end)タイトル文 */}


            </Box>
            {/* (end)タイトル文、ランキング */}

          </Box>
        </Box>
        {/* (start)タイトル~メインパーツ表示領域 */}

      </Box >
      {/* (start)背景画像表示領域 */}

      < Footer />
    </>
  )
}