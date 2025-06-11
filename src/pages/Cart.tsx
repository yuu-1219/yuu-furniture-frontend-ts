import axios from "axios";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import Header from "../components/Header";
import Footer from "../components/Footer";
import BackButton from "../components/BackButton";
import Price from '../components/Price';
import RunButton from '../components/RunButton';
import CartItem from "../components/CartItem";

import { type CartContextType, useCart } from '../contexts/CartContext';
import { type UserContextType, useUser } from "../contexts/UserContext";

import { type ProductType } from "../types/ProductType";
import { type CartItemType } from "../types/CartType";

const ProductsUrl = `${import.meta.env.VITE_API_BASE_URL}/products`;


export default function Cart() {
  const [cartProducts, setCartProducts] = useState<Record<string, ProductType>>({});

  const { user, isAuthenticated, handlePurchase } = useUser() as UserContextType;
  const { cart, clearCart } = useCart() as CartContextType;
  const { items, totalPrice } = cart;

  const navigate = useNavigate();


  useEffect(() => {
    fetchCartProducts();
  }, [items, user]);

  async function fetchCartProducts() {
    const productIds = [...new Set(cart.items.map(item => item.productId))];

    const results = await Promise.all(
      productIds.map(id => axios.get(`${ProductsUrl}/${id}`))
    );

    const resultProducts: Record<string, ProductType> = {};

    try {
      results.forEach(res => {
        resultProducts[res.data._id] = res.data;
      });
    } catch (e) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "商品データの取得中にエラーが発生しました";
        alert(message);
      }
    }

    setCartProducts(resultProducts);
  }



  const onClickPurchase = async () => {
    if (!user || !isAuthenticated) {
      alert("購入にはログインが必要です");
      navigate("/login");
      return;
    }
    if(!user._id) return;

    const purchaseResult = await handlePurchase(cart);
    if (!purchaseResult) {
      alert("購入処理に失敗しました");
      return;
    }
    const { orderId, purchasedAt } = purchaseResult;

    await clearCart(user._id);

    navigate("/complete", {
      state: {
        orderId: orderId,
        purchasedAt: purchasedAt,
      }
    });

    alert("購入が完了しました");
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
              カート
            </Typography>

            {/* (start)カートアイテム、注文内容表示 */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row"
                },
                alignItems: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                },
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "center"
                },
              }}
            >


              {/* (start)左パーツ */}
              <Box
                sx={{
                  margin: "0px 0px 0px 0px",
                  width: { xs: "100%", sm: "100%", md: "70%" },
                  minWidth: "300px",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >

                {items.map((item: CartItemType) => {
                  const product: ProductType = cartProducts[item.productId];
                  if (!product) return null;
                  return (
                    <>

                      <Box
                        key={`${item.productId}-${item.color}`}
                        sx={{
                          width: "100%",
                          backgroundColor: "rgba(251, 245, 230, 0.8)",
                          borderRadius: "6px",
                          border: "0.2px solid #eee9d3",
                          margin: "0px 0px 20px 0px",
                        }}
                      >

                        <CartItem product={product} productId={item.productId} color={item.color} qty={item.quantity} />
                      </Box>

                    </>
                  )
                })}

              </Box>
              {/* (end)左パーツ */}



              {/* (start)右パーツ */}
              <Box
                sx={{
                  width: { xs: "100%", sm: "100%", md: "35%" },
                  height: {
                    xs: "auto",
                    sm: "auto",
                    md: "100%",
                  },
                  maxHeight: {
                    xs: "none",
                    sm: "none",
                    md: "380px",
                  },
                  minHeight: "320px",
                  padding: "30px 0px 30px 0px",
                  margin: "0px 20px 0px 20px",
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  backgroundColor: "rgba(251, 245, 230, 0.8)",
                  borderRadius: "10px",
                  border: "0.2px solid #eee9d3",

                }}
              >



                <Typography
                  sx={{
                    fontSize: {
                      xs: "18px",
                      sm: "20px",
                      md: "22px",
                      lg: "26px"
                    },
                    fontWeight: "600",
                    margin: "0px 0px 0px 0px",
                  }}
                >
                  ご注文内容
                </Typography>

                <br />

                {/* (start)商品代金 */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    padding: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "40%",
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px"
                      },

                    }}
                  >
                    商品
                  </Typography>

                  <Typography
                    sx={{
                      width: "60%"
                    }}
                  >
                    <Price price={totalPrice} />
                  </Typography>
                </Box>
                {/* (end)商品代金 */}


                <Divider sx={{ width: '100%', my: 1 }} />


                {/* (start)送料 */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    padding: "5px",
                  }}
                >
                  <Typography
                    sx={{

                      width: "40%",
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px"
                      },

                    }}
                  >
                    送料
                  </Typography>

                  <Typography
                    sx={{

                      width: "60%"
                    }}
                  >
                    <Price price={750} />
                  </Typography>
                </Box>
                {/* (end)商品代金 */}


                <Divider sx={{ width: '100%', my: 1 }} />


                {/* (start)合計代金 */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    padding: "5px",
                  }}
                >
                  <Typography
                    sx={{
                      width: "40%",
                      fontSize: {
                        xs: "12px",
                        sm: "14px",
                        md: "16px"
                      },

                    }}
                  >
                    合計
                  </Typography>

                  <Typography
                    sx={{
                      width: "60%"
                    }}
                  >
                    <Price price={750 + totalPrice} />
                  </Typography>
                </Box>
                {/* (end)合計代金 */}



                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "40px 0px 0px 0px",
                    width: "70%"
                  }}
                >
                  <RunButton text={"購入する"} handleClick={onClickPurchase} />
                </Box>
              </Box>

              {/* (end)右パーツ */}


            </Box>
            {/* (start)カートアイテム、注文内容表示 */}

          </Box>
          {/* (end)タイトル~メインパーツ表示レイアウト */}




        </Box>
        {/* (end)タイトル~メインパーツ表示領域 */}



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
            <BackButton text="ホームに戻る" link="/" />
          </Box>
        </Box>



      </Box>
      {/* (end)背景画像表示領域 */}


      <Footer />
    </>
  )
}