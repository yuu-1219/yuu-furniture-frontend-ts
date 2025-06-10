import { Box, Typography } from "@mui/material"

export default function ProductName({ productName, fontSize }) {
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
                    fontSize: {fontSize}
                }}
            >
                {productName}
            </Typography>

        </Box>
    )
}