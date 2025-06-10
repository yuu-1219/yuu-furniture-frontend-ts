import { Box, Typography } from "@mui/material"

export default function Price({ price, priceSize = 20, unitSize = 12, height = 0.8, priceWidth = 50 }) {
    return (
        <Box
            sx={{
                width: "100%",
                // maxWidth: "100px",
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'baseline',
                gap: 0.5,
            }}
        >
            <Typography
                sx={{
                    fontWeight: "600",
                    fontSize: {
                        xs: "14px",
                        sm: "18px",
                        md: "16px",
                        lg: "18px"
                    },
                }}
            >
                {price}
            </Typography>

            <Typography
                sx={{
                    fontWeight: "200",
                    fontSize: {
                        xs: "12px",
                        sm: "14px"
                    }
                }}
            >
                円(税込)
            </Typography>
        </Box>
    )
}