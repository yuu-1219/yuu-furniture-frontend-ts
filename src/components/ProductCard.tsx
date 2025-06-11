import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Price from "./Price";
import Review from "./Review";

import { type ProductType } from '../types/ProductType';


interface ProductCardType {
    product: ProductType;
}

export default function ProductCard({ product } : ProductCardType) {
    const { _id, name, price, img, rating } = product;
    return (
        <Box
            component={Link}
            to={`/products/${_id}`}
            state={{ product }}
            sx={{

                width: {
                    xs: "45%",
                    sm: "31%",
                    md: "30%",
                    lg: "23%"
                },
                height: "100%",
                padding: "16px",
                backgroundColor: "rgba(251, 245, 230, 0.8)",
                borderRadius: "6px",
                border: "0.2px solid #eee9d3",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",

            }}>
            <img
                src={img}
                alt={name}
                style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    aspectRatio: "4 / 3"
                }}
            />

            <Box
                sx={{
                    padding: "5px 0px 0px 10px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                }}
            >

                <Typography
                    sx={{
                        minHeight: "44px",
                        fontSize: {
                            xs: "12px",
                            sm: "14px",
                            md: "15px",
                            lg: "15px",
                        },
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    {name}
                </Typography>

                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        textAlign: "left"
                    }}>
                    <Price price={price} />
                </Box>

                <Review value={rating} />

            </Box>

        </Box>
        

    )

}