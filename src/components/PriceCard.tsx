import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';


export default function PriceCard({ priceRange, onPriceRanges, setOnPriceRanges }) {
    const { priceRangeId, minPrice, maxPrice } = priceRange;

    const isSelected = onPriceRanges.includes(priceRange);
    // const isSelected = true;

    const label = { inputProps: { 'aria-label': priceRangeId } };

    const handleToggle = () => {
        if (isSelected) {
            setOnPriceRanges(onPriceRanges.filter(c => c.priceRangeId !== priceRangeId));
        } else {
            setOnPriceRanges([...onPriceRanges, priceRange]);
        }

    }


    return (
        <Box
            sx={{
                width: "100%",
                maxWidth: "200px",
                maxHeight: "60px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "center",
                margin: "3px",
                border: "0.5px solid #cecece",
                backgroundColor: "#faf6ec",
                borderRadius: "4px"

            }}

        >

            <Checkbox
                {...label}
                // defaultChecked
                size="small"
                onClick={handleToggle}
            />


            {/* <p style={{
                fontWeight: "500",
                fontSize: "13px",
                marginBottom: "0px"
            }}>
                {priceRangeId !== "5" ?`¥ ${minPrice} - ${maxPrice}` : `¥ ${minPrice} +`}
                
            </p> */}

            <Typography
                sx={{
                    fontWeight: "500",
                    fontSize: "13px",
                    fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "11px",
                        lg: "14px",
                    },
                    marginBottom: "0px"
                }}
            >
                {priceRangeId !== "5" ? `¥${minPrice} - ${maxPrice}` : `¥ ${minPrice} +`}
            </Typography>
        </Box>

    )

}