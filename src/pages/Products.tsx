import '../styles/Products.css'

import axios from "axios";

import { type ChangeEvent, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { type CategoryType, categories } from "../constants/categories";
import { type onFilterType, onFilters } from "../constants/onFilters";
import { type ColorType } from '../constants/colors';
import { type PriceRangeType } from "../constants/priceRanges";

import Header from "../components/Header";
import Footer from "../components/Footer";

import ProductCard from "../components/ProductCard";
import SearchResultBar from "../components/SearchResultBar";
import PaginationButton from "../components/PagingButton";
import BackButton from "../components/BackButton";
import ConditionCard from '../components/ConditionCard';

import { type ProductType } from "../types/ProductType";

const ProductsUrl: string = `${import.meta.env.VITE_API_BASE_URL}/products`;


export default function Products() {

  const [products, setProducts] = useState<ProductType[]>([]);
  const [onColors, setOnColors] = useState<ColorType[]>([]);
  const [onPriceRanges, setOnPriceRanges] = useState<PriceRangeType[]>([]);
  const [onFilter, setOnFilter] = useState<onFilterType>(onFilters[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams] = useSearchParams();
  const onCategoryId: string | null = searchParams.get("category");
  const onCategory: CategoryType = categories.find(c => c.categoryId === onCategoryId)!;
  // const queryString = onCategory ? `?category=${onCategoryId}` : "";

  const resultSearchWord: string = searchParams.get("search") || "";
  const [searchWord, setSearchWord] = useState<string>(resultSearchWord);

  useEffect(() => {
    fetchProducts();
  }, [searchWord, onCategoryId, onColors, onPriceRanges]);

  useEffect(() => {
    sortProducts(products);
  }, [onFilter]);

  useEffect(() => {
    const newSearchWord = searchParams.get("search") || "";
    setSearchWord(newSearchWord);
  }, [searchParams]);

  async function fetchProducts() {
    try {
      const productsResult = await axios.post(`${ProductsUrl}`, {
        searchWord: (searchWord === "") ? null : searchWord,
        category: onCategoryId,
        colors: onColors.map(c => c.colorLabel),
        priceRanges: onPriceRanges
      });
      const sortedProducts = sortProducts(productsResult.data);
      setProducts(sortedProducts);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        const message = e.response?.data?.message || "商品データの取得中にエラーが発生しました";
        alert(message);
      }
    }
  }

  function sortProducts(targetProducts: ProductType[] = []) {
    const sortedProducts: ProductType[] = [...targetProducts].sort((a: ProductType, b: ProductType) => {
      switch (onFilter.onFiltersId) {
        // case "1": return a.name - b.name;
        case "2": return a.price - b.price;
        case "3": return b.price - a.price;
        case "4": return b.rating - a.rating;
        default: return 0;
      }
    });

    setProducts(sortedProducts);

    return (sortedProducts);
  }


  const perPage: number = 8;
  const totalPages: number = Math.ceil(products.length / perPage);
  const showProducts: ProductType[] = products.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  )

  const handlePageChange = (_: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };


  return (
    <>
      <Header categoryId={onCategoryId} />
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
              margin: "20px 20px",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "column",
              },
              justifyContent: "center",
              alignItems: {
                xs: "center",
                md: "flex-start",
              }
            }}
          >

            {/* (start)タイトル文 */}
            <Box
              sx={{
                width: {
                  xs: "95%",
                  md: "95%",
                },
                margin: {
                  xs: "0px 0px 20px 0px",
                  sm: "0px 0px 30px 0px",
                  md: "5px 5px 5px 40px",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "22px",
                    sm: "26px",
                    md: "30px",
                    lg: "40px",
                  },
                  fontWeight: "600",
                  textAlign: "left"
                }}>
                {onCategory ? onCategory.categoryLabel : "すべての商品"}
              </Typography>



              <Typography
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "17px",
                    lg: "20px",
                  },
                  fontWeight: "500",
                  padding: {
                    xs: "10px 0px",
                    sm: "10px 0px",
                    md: "10px 5px",
                  },
                  textAlign: "left"
                }}>
                {onCategory ? onCategory.description : "毎日の暮らしに寄り添う、あなたらしい空間づくりを。部屋を選ばず使えるアイデアや家具、小物を通して、インテリアのヒントや商品情報をお届けします。"}

              </Typography>
            </Box>
            {/* (end)タイトル文 */}


            {/* (start)条件カード、商品一覧 */}
            <Box
              sx={{
                width: "100%",
                padding: "0px 0px 20px 0px",
                margin: {
                  xs: "0px 0px 20px 0px",
                  md: "0px 0px 20px 0px",
                },
                display: "flex",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                justifyContent: "center",
                alignItems: {
                  xs: "center",
                  md: "flex-start",
                },
              }}
            >

              {/* (start)条件カード */}
              <Box
                sx={{
                  width: {
                    xs: "95%",
                    md: "24%",
                  },

                }}
              >
                <ConditionCard onColors={onColors} setOnColors={setOnColors} onPriceRanges={onPriceRanges} setOnPriceRanges={setOnPriceRanges} />
              </Box>
              {/* (end)条件カード */}


              {/* (start)サーチバー、商品一覧 */}
              <Box
                sx={{
                  width: {
                    xs: "100%",
                    md: "76%",
                  },
                  height: "100%",
                  margin: {
                    xs: "15px 5px",
                    sm: "20px 5px",
                    md: "0px 0px 0px 20px",
                  },

                }}
              >
                <SearchResultBar products={products} currentPage={currentPage} perPage={perPage} onFilter={onFilter} setOnFilter={setOnFilter} />

                {/* (start)商品一覧 */}
                <Box
                  sx={{
                    width: "100%",
                    // height: {
                    //   xs: "23%",
                    //   sm: "30%",
                    //   md: "30%",
                    //   lg: "44%"
                    // },
                    height: "auto",
                    margin: "20px 5px 0px 5px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 2,
                    justifyContent: "flex-start",
                    alignItems: "center"
                  }}
                >


                  {showProducts.map((product) => (
                    <ProductCard
                      product={product}
                    />
                  ))}


                </Box>
                {/* (end)商品一覧 */}

              </Box>
              {/* (end)サーチバー、商品一覧 */}



            </Box>
            {/* (end)条件カード、商品一覧 */}

          </Box>
          {/* (end)タイトル~メインパーツ表示レイアウト */}

        </Box>
        {/* (end)タイトル~メインパーツ表示領域 */}

        {/* (start)ページネーション */}
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
            <PaginationButton totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />

          </Box>


          <Box
            sx={{
              margin: "30px 0px 0px 0px",
            }}
          >
            <BackButton text="ホームに戻る" link="/" />
          </Box>


        </Box>
        {/* (end)ページネーション */}
      </Box>
      {/* (start)タイトル~メインパーツ表示領域 */}


      < Footer />
    </>
  );

}

