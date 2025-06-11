import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface QtyButtonType {
    qty: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

export default function QtyButton({qty=1, onIncrement, onDecrement} : QtyButtonType) {

    return (
        <Box
            sx={{
                border: "0.5px solid #cecece",
                borderRadius: "25px",
                width: {
                    xs: "100%",
                    sm: "80%",
                    md: "100px",
                    lg: "180px"
                  },
                height: {
                    xs: "38px",
                    sm: "42px",
                    md: "45px",
                    lg: "48px"
                  },
                maxWidth: "120px",
                display: 'flex',
                alignItems: 'center',
                justifyContent: "space-around",
                backgroundColor: "#fffdf7",
            }}
        >
            <IconButton
                // variant="text"
                // size="small"
                onClick={onDecrement}

            >
                <RemoveIcon fontSize="small"/>
            </IconButton>

            <Typography
                sx={{
                    fontWeight: '600',
                    fontSize: {
                        xs: "16px",
                        sm: "18px",
                        md: "22px",
                        lg: "24px"
                      },
                }}
            >
                {qty}
            </Typography>

            <IconButton
                // variant="text"
                // size="small"
                onClick={onIncrement}
            >
                <AddIcon fontSize="small"/>
            </IconButton>
        </Box>
    );
}