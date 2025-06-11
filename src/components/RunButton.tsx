import { Box, Typography } from '@mui/material';

interface RunButtonType {
    text: string;
    handleClick: () => Promise<void> | void;
}

export default function RunButton({ text, handleClick } : RunButtonType) {

    return (
        <Box
            sx={{
                border: "0.5px solid #cecece",
                borderRadius: "25px",
                backgroundColor: "#fdc757",
                width: {
                    xs: "100%",
                    sm: "80%",
                    md: "60%",
                    lg: "300px",
                },
                height: {
                    xs: "38px",
                    sm: "42px",
                    md: "45px",
                    lg: "48px"
                },
                minWidth: "120px",
                cursor: "pointer",
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center"
            }}
            onClick={handleClick}
        >
            <Typography
                sx={{
                    fontWeight: '600',
                    fontSize: {
                        xs: "14px",
                        sm: "16px",
                        md: "16px"
                    },
                    color: "#535353",
                }}
            >
                {text}
            </Typography>
        </Box>
    );
}