import { type Dispatch, type SetStateAction } from 'react';


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';

import { type PriceRangeType } from "../constants/priceRanges.ts"

interface PriceCardType {
    priceRange: PriceRangeType ;
    onPriceRanges: PriceRangeType [];
    setOnPriceRanges: Dispatch<SetStateAction<PriceRangeType []>>;
}

export default function PriceCard({ priceRange, onPriceRanges, setOnPriceRanges }: PriceCardType) {
    const { priceRangeId, minPrice, maxPrice } = priceRange;

    const isSelected: boolean = onPriceRanges.includes(priceRange);

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
                size="small"
                onClick={handleToggle}
            />


            <Typography
                sx={{
                    fontWeight: "500",
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