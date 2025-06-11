import axios from "axios";

import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Header from "../components/Header";
import Footer from "../components/Footer";

import BackButton from "../components/BackButton";
import Orders from "../components/Orders";


import { type UserContextType, useUser } from "../contexts/UserContext";

const ProductsUrl: string = `${import.meta.env.VITE_API_BASE_URL}/products`;

import { type OrderType } from "../types/OrderType";
import { type ProductType } from "../types/ProductType";



export default function OrderHistory() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [orderProducts, setOrderProducts] = useState<Record<string, Record<string, ProductType>>>({});
  const { user } = useUser() as UserContextType;

  // const navigate = useNavigate();


  if (!user) {
    alert("注文履歴を取得できません");
    return null;
  }

  useEffect(() => {
    fetchOrders();
  }, [user]);

  useEffect(() => {
    fetchProducts();
  }, [orders]);

  async function fetchProducts() {
    const allProducts: Record<string, Record<string, ProductType>> = {};

    for (const order of orders) {
      if (!order._id) continue;

      const productIds = [...new Set(order.items.map(item => item.productId))];

      try {
        const results = await Promise.all(
          productIds.map(id => axios.get(`${ProductsUrl}/${id}`))
        );

        const productsPerOrder: Record<string, ProductType> = {};
        results
          .filter(c => c !== null)
          .forEach(c => {
            productsPerOrder[c.data._id] = c.data;
          });

        allProducts[order._id] = productsPerOrder;
      } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
          alert("商品データ取得中にエラーが発生しました");
          console.error(e);
        }
      }
    }

    setOrderProducts(allProducts);
  }


  async function fetchOrders() {
    if (user && user.orders) {
      setOrders(user.orders);
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
              注文履歴
            </Typography>



            {/* (start)注文履歴一覧 */}
            <Box
              sx={{
                margin: "10px 0px 10px 0px",
                width: { xs: "100%", md: "100%" },
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >

              {orders.map((item: OrderType) => {
                if(!item._id) return null;

                return (
                  <>

                    <Box
                      sx={{
                        width: "100%",
                        backgroundColor: "rgba(251, 245, 230, 0.8)",
                        borderRadius: "6px",
                        border: "0.2px solid #eee9d3",
                        margin: "0px 0px 30px 0px",
                      }}
                    >

                      <Orders _id={item._id} products={orderProducts[item._id] || {}} />
                    </Box>

                  </>
                )
              })}

            </Box>
            {/* (end)注文履歴一覧 */}


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

            <BackButton text="マイページに戻る" link={`/user/${user._id}`} />
          </Box>
        </Box>


      </Box>
      {/* (end)背景画像表示領域 */}


      <Footer />
    </>
  )
}