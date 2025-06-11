import { Box, Typography } from "@mui/material"

interface ProductNameType {
    productName: string;
    fontSize: string;
}

export default function ProductName({ productName, fontSize } : ProductNameType) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <Typography
                style={{
                    fontWeight: "600",
                    fontSize: fontSize
                }}
            >
                {productName}
            </Typography>

        </Box>
    )
}